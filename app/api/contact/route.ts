import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { submitHubSpotContactRequest } from "@/lib/hubspot";

/**
 * POST {name, email, company, role?, message?, consent} →
 *   capture an inbound request from a company we don't have a prepared profile for.
 *   Persists to Supabase (or logs locally) and upserts a HubSpot contact for post-event follow-up.
 */
export async function POST(req: Request) {
  let body: {
    name?: string;
    email?: string;
    company?: string;
    role?: string;
    message?: string;
    consent?: boolean;
    utm?: Record<string, string>;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim().toLowerCase();
  const company = (body.company ?? "").trim();
  const role = (body.role ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name) return NextResponse.json({ error: "missing_name" }, { status: 422 });
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 422 });
  }
  if (!company) return NextResponse.json({ error: "missing_company" }, { status: 422 });

  const source = "B2B Connect 2026 Contact Request";

  // 1. Persist.
  const sb = getSupabase();
  let requestId: string | null = null;
  if (sb) {
    const { data, error } = await sb
      .from("contact_requests")
      .insert({
        name,
        email,
        company,
        role: role || null,
        message: message || null,
        consent: Boolean(body.consent),
        source,
        utm: body.utm ?? {},
      })
      .select("id")
      .single();
    if (error) console.error("[contact] supabase insert error:", error.message);
    else requestId = data?.id ?? null;
  } else {
    console.log("[contact] request captured (no Supabase configured):", {
      name,
      email,
      company,
      role,
      message,
      consent: body.consent,
      source,
    });
  }

  // 2. HubSpot upsert (no-op when unconfigured).
  const hs = await submitHubSpotContactRequest({ name, email, company, role, message, source });

  if (sb && requestId && hs?.contactId) {
    await sb
      .from("contact_requests")
      .update({ hubspot_contact_id: hs.contactId, synced_at: new Date().toISOString() })
      .eq("id", requestId);
  }

  return NextResponse.json({ ok: true });
}
