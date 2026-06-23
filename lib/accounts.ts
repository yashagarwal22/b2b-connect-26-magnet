import "server-only";
import type { AccountConfig, AccountSummary } from "@/lib/types";
import { SEED_ACCOUNTS } from "@/data/accounts";
import { buildFallbackConfig, VERTICALS } from "@/lib/content";
import { getSupabase } from "@/lib/supabase";
import type { Vertical } from "@/lib/types";

/**
 * Resolve a single account config by slug.
 * Order: Supabase (if configured) → local seed → null.
 * Editing an account is a row/file change — never a redeploy of component code (spec §11.4).
 */
export async function getAccount(slug: string): Promise<AccountConfig | null> {
  const sb = getSupabase();
  if (sb) {
    const { data, error } = await sb
      .from("accounts")
      .select("config")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();
    if (!error && data?.config) return data.config as AccountConfig;
  }
  return SEED_ACCOUNTS.find((a) => a.slug === slug && a.published) ?? null;
}

/** List all published accounts as lightweight summaries for the landing typeahead. */
export async function listAccounts(): Promise<AccountSummary[]> {
  const sb = getSupabase();
  if (sb) {
    const { data, error } = await sb
      .from("accounts")
      .select("slug, company_name, aliases, domains, vertical")
      .eq("published", true);
    if (!error && data) {
      return data.map((r) => ({
        slug: r.slug as string,
        companyName: r.company_name as string,
        aliases: (r.aliases as string[]) ?? [],
        domains: (r.domains as string[]) ?? [],
        verticalLabel: VERTICALS[(r.vertical as Vertical) ?? "industrial-distribution"]?.label ?? "",
      }));
    }
  }
  return SEED_ACCOUNTS.filter((a) => a.published).map((a) => ({
    slug: a.slug,
    companyName: a.companyName,
    aliases: a.aliases,
    domains: a.domains,
    verticalLabel: a.verticalLabel,
  }));
}

/** Fallback for a company not in the list (spec §5 — vertical/revenue-band template). */
export function getFallbackAccount(
  companyName: string,
  vertical?: Vertical,
  revenueBand?: string
): AccountConfig {
  return buildFallbackConfig(companyName, vertical, revenueBand);
}
