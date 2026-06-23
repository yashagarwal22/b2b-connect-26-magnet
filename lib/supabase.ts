import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service-role key.
 * NEVER import this from a client component — there are no anon policies (spec §11.4).
 * Returns null when unconfigured so the app runs from the local seed out of the box.
 */
let cached: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
  if (cached !== undefined) return cached;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  cached = url && key ? createClient(url, key, { auth: { persistSession: false } }) : null;
  return cached;
}

export const isSupabaseConfigured = () =>
  Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
