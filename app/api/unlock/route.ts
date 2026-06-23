import { NextResponse } from "next/server";
import { getAccount, getFallbackAccount } from "@/lib/accounts";
import { getSupabase } from "@/lib/supabase";
import { upsertHubSpotContact } from "@/lib/hubspot";

const PERSONAL_DOMAINS = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "aol.com"];

/**
 * POST {slug, email, consent, fallbackName} →
 *   1. validate email
 *   2. write lead to Supabase (or log locally)
 *   3. upsert HubSpot contact+company
 *   4. return the below-gate payoff config
 * The gate is a real server-side boundary, not CSS (spec §11.3).
 */
export async function POST(req: Request) {
  let body: {
    slug?: string;
    email?: string;
    consent?: boolean;
    fallbackName?: string;
    utm?: Record<string, string>;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const { slug, email, consent, fallbackName, utm } = body;

  const cleanEmail = (email ?? "").trim().toLowerCase();
  if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 422 });
  }
  // Personal domains are soft-blocked (flagged, not rejected) per spec §10.
  const domain = cleanEmail.split("@")[1];
  const isPersonal = PERSONAL_DOMAINS.includes(domain);
  if (!slug) {
    return NextResponse.json({ error: "missing_slug" }, { status: 400 });
  }

  const account = (await getAccount(slug)) ?? getFallbackAccount(fallbackName || slug.replace(/-/g, " "));

  const playsShown = account.payoff.plays.map((p) => p.title);
  const source = "B2B Connect 2026 Lead Magnet";

  // 2. Persist the lead.
  let hubspotContactId: string | null = null;
  const sb = getSupabase();
  let leadId: string | null = null;
  if (sb) {
    const { data, error } = await sb
      .from("leads")
      .insert({
        email: cleanEmail,
        company_slug: account.slug,
        company_name: account.companyName,
        vertical: account.vertical,
        revenue_band: account.revenueBand,
        role: account.role,
        active_requirement: account.activeRequirement,
        plays_shown: playsShown,
        consent: Boolean(consent),
        source,
        utm: { ...(utm ?? {}), personal_email: isPersonal },
      })
      .select("id")
      .single();
    if (error) console.error("[unlock] supabase insert error:", error.message);
    else leadId = data?.id ?? null;
  } else {
    console.log("[unlock] lead captured (no Supabase configured):", {
      email: cleanEmail,
      company: account.companyName,
      playsShown,
      consent,
      source,
    });
  }

  // 3. HubSpot upsert (no-op when unconfigured).
  const hs = await upsertHubSpotContact({
    email: cleanEmail,
    companyName: account.companyName,
    vertical: account.vertical,
    revenueBand: account.revenueBand,
    role: account.role,
    activeRequirement: account.activeRequirement,
    playsShown,
    wedge: account.wedge,
    source,
    utm,
  });
  hubspotContactId = hs?.contactId ?? null;

  if (sb && leadId && hubspotContactId) {
    await sb
      .from("leads")
      .update({ hubspot_contact_id: hubspotContactId, synced_at: new Date().toISOString() })
      .eq("id", leadId);
  }

  // 4. Return the payoff — only now does it leave the server.
  return NextResponse.json({ payoff: account.payoff });
}
