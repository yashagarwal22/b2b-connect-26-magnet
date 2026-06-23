/**
 * Seed the Supabase `accounts` table from the local configs (spec §11.4).
 * Run: npm run seed  (requires SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY)
 */
import { createClient } from "@supabase/supabase-js";
import { SEED_ACCOUNTS } from "./accounts";

async function main() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to seed.");
    process.exit(1);
  }
  const sb = createClient(url, key, { auth: { persistSession: false } });

  const rows = SEED_ACCOUNTS.map((a) => ({
    slug: a.slug,
    company_name: a.companyName,
    aliases: a.aliases ?? [],
    vertical: a.vertical,
    revenue_band: a.revenueBand,
    role_emphasis: a.roleEmphasis,
    active_requirement: a.activeRequirement,
    thesis_variant: a.thesis,
    wedge: a.wedge,
    config: a,
    published: a.published,
    updated_at: new Date().toISOString(),
  }));

  const { error } = await sb.from("accounts").upsert(rows, { onConflict: "slug" });
  if (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
  console.log(`Seeded ${rows.length} account(s): ${rows.map((r) => r.slug).join(", ")}`);
}

main();
