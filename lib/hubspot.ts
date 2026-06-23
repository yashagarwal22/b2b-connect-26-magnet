import "server-only";

/**
 * HubSpot CRM v3 upsert on email capture (spec §11.7).
 * Server-side only — Private App token never ships to the client.
 * No-ops gracefully (returns null) when unconfigured so the gate still works locally.
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

export async function upsertHubSpotContact(
  lead: LeadPayload
): Promise<{ contactId: string } | null> {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) return null;

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  // Upsert Contact by email (idProperty=email). Custom b2bconnect_* props per spec §11.7.
  const properties: Record<string, string> = {
    email: lead.email,
    jobtitle: lead.role,
    b2bconnect_vertical: lead.vertical,
    b2bconnect_revenue_band: lead.revenueBand,
    b2bconnect_role: lead.role,
    b2bconnect_active_requirement: String(lead.activeRequirement),
    b2bconnect_plays: lead.playsShown.join(", "),
    b2bconnect_source: lead.source,
    ...Object.fromEntries(Object.entries(lead.utm ?? {}).map(([k, v]) => [`utm_${k}`, v])),
  };

  try {
    const res = await fetch(
      `${BASE}/crm/v3/objects/contacts/${encodeURIComponent(lead.email)}?idProperty=email`,
      { method: "PATCH", headers, body: JSON.stringify({ properties }) }
    );

    let contactId: string | undefined;
    if (res.status === 404) {
      // Not found → create.
      const created = await fetch(`${BASE}/crm/v3/objects/contacts`, {
        method: "POST",
        headers,
        body: JSON.stringify({ properties }),
      });
      if (!created.ok) throw new Error(`HubSpot create failed: ${created.status}`);
      contactId = (await created.json())?.id;
    } else if (res.ok) {
      contactId = (await res.json())?.id;
    } else {
      throw new Error(`HubSpot upsert failed: ${res.status}`);
    }

    return contactId ? { contactId } : null;
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
 * Mirrors upsertHubSpotContact but carries the inbound request fields.
 */
export async function submitHubSpotContactRequest(
  req: ContactRequestPayload
): Promise<{ contactId: string } | null> {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) return null;

  const headers = {
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
    b2bconnect_source: req.source,
    b2bconnect_message: req.message ?? "",
  };

  try {
    const res = await fetch(
      `${BASE}/crm/v3/objects/contacts/${encodeURIComponent(req.email)}?idProperty=email`,
      { method: "PATCH", headers, body: JSON.stringify({ properties }) }
    );
    let contactId: string | undefined;
    if (res.status === 404) {
      const created = await fetch(`${BASE}/crm/v3/objects/contacts`, {
        method: "POST",
        headers,
        body: JSON.stringify({ properties }),
      });
      if (!created.ok) throw new Error(`HubSpot create failed: ${created.status}`);
      contactId = (await created.json())?.id;
    } else if (res.ok) {
      contactId = (await res.json())?.id;
    } else {
      throw new Error(`HubSpot upsert failed: ${res.status}`);
    }
    return contactId ? { contactId } : null;
  } catch (err) {
    console.error("[hubspot] contact-request error:", err);
    return null;
  }
}
