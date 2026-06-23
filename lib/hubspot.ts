import "server-only";

/**
 * HubSpot CRM v3 upsert on email capture (spec §11.7).
 * Server-side only — Private App token never ships to the client.
 * No-ops gracefully (returns null) when unconfigured so the gate still works locally.
 *
 * Mapping policy: contacts carry ONLY default HubSpot properties (no custom b2bconnect_*).
 * The full report context lands as a timeline Note on the contact, so nothing is lost and
 * no custom properties have to be created. The note write needs the Private App scope
 * `crm.objects.notes.write` (in addition to crm.objects.contacts read/write).
 */
export interface LeadPayload {
  email: string;
  companyName: string;
  vertical: string;
  revenueBand: string;
  role: string;
  activeRequirement: boolean;
  playsShown: string[];
  wedge: string;
  source: string;
  utm?: Record<string, string>;
}

const BASE = "https://api.hubapi.com";
// HubSpot-defined association type: Note → Contact.
const NOTE_TO_CONTACT_TYPE_ID = 202;

type Headers = { Authorization: string; "Content-Type": string };

/** Upsert a contact by email (PATCH idProperty=email, create on 404). Returns the id. */
async function upsertContactByEmail(
  email: string,
  properties: Record<string, string>,
  headers: Headers
): Promise<string | undefined> {
  const res = await fetch(
    `${BASE}/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
    { method: "PATCH", headers, body: JSON.stringify({ properties }) }
  );
  if (res.status === 404) {
    const created = await fetch(`${BASE}/crm/v3/objects/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify({ properties }),
    });
    if (!created.ok) throw new Error(`HubSpot create failed: ${created.status}`);
    return (await created.json())?.id;
  }
  if (res.ok) return (await res.json())?.id;
  throw new Error(`HubSpot upsert failed: ${res.status}`);
}

/**
 * Attach a Note to a contact's timeline. Best-effort: a failure here (e.g. the
 * notes scope is missing) is logged and swallowed so it never blocks lead capture.
 * `lines` are rendered as an HTML body since hs_note_body is rich text.
 */
async function createContactNote(
  contactId: string,
  title: string,
  lines: Array<[string, string]>,
  headers: Headers
): Promise<void> {
  const body =
    `<strong>${title}</strong><br>` +
    lines
      .filter(([, v]) => v && v.length > 0)
      .map(([k, v]) => `${k}: ${v}`)
      .join("<br>");
  try {
    const res = await fetch(`${BASE}/crm/v3/objects/notes`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        properties: { hs_timestamp: new Date().toISOString(), hs_note_body: body },
        associations: [
          {
            to: { id: contactId },
            types: [
              {
                associationCategory: "HUBSPOT_DEFINED",
                associationTypeId: NOTE_TO_CONTACT_TYPE_ID,
              },
            ],
          },
        ],
      }),
    });
    if (!res.ok) throw new Error(`HubSpot note failed: ${res.status}`);
  } catch (err) {
    console.error("[hubspot] note error:", err);
  }
}

export async function upsertHubSpotContact(
  lead: LeadPayload
): Promise<{ contactId: string } | null> {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) return null;

  const headers: Headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  // Standard contact properties only — no custom props required.
  const properties: Record<string, string> = {
    email: lead.email,
    jobtitle: lead.role,
    company: lead.companyName,
  };

  try {
    const contactId = await upsertContactByEmail(lead.email, properties, headers);
    if (!contactId) return null;

    // Full report context goes to the contact timeline as a Note.
    const utm = Object.entries(lead.utm ?? {})
      .map(([k, v]) => `${k}=${v}`)
      .join("; ");
    await createContactNote(
      contactId,
      "B2B Connect 2026 — report unlocked",
      [
        ["Company", lead.companyName],
        ["Vertical", lead.vertical],
        ["Revenue band", lead.revenueBand],
        ["Role", lead.role],
        ["Active requirement", lead.activeRequirement ? "Yes" : "No"],
        ["Wedge", lead.wedge],
        ["Plays shown", lead.playsShown.join(", ")],
        ["Source", lead.source],
        ["UTM", utm],
      ],
      headers
    );

    return { contactId };
  } catch (err) {
    // Never block the lead capture on a CRM error — log and continue.
    console.error("[hubspot] upsert error:", err);
    return null;
  }
}

export interface ContactRequestPayload {
  name: string;
  email: string;
  company: string;
  role?: string;
  message?: string;
  source: string;
}

/**
 * Upsert a contact for a "company we don't have a profile for yet" capture.
 * Mirrors upsertHubSpotContact: standard contact props + a timeline Note for the rest.
 */
export async function submitHubSpotContactRequest(
  req: ContactRequestPayload
): Promise<{ contactId: string } | null> {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) return null;

  const headers: Headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const [firstname, ...rest] = req.name.trim().split(/\s+/);
  const properties: Record<string, string> = {
    email: req.email,
    firstname: firstname ?? "",
    lastname: rest.join(" "),
    company: req.company,
    jobtitle: req.role ?? "",
  };

  try {
    const contactId = await upsertContactByEmail(req.email, properties, headers);
    if (!contactId) return null;

    await createContactNote(
      contactId,
      "B2B Connect 2026 — contact request",
      [
        ["Company", req.company],
        ["Role", req.role ?? ""],
        ["Message", req.message ?? ""],
        ["Source", req.source],
      ],
      headers
    );

    return { contactId };
  } catch (err) {
    console.error("[hubspot] contact-request error:", err);
    return null;
  }
}
