import Link from "next/link";
import { notFound } from "next/navigation";
import { getAccount, getFallbackAccount } from "@/lib/accounts";
import { toTeaser } from "@/lib/types";
import { AccountProvider } from "@/components/AccountProvider";
import { Brand, Tagline } from "@/components/Brand";
import { ReframeModule } from "@/components/modules/ReframeModule";
import { HypeFilter } from "@/components/modules/HypeFilter";
import { StackSignals } from "@/components/modules/StackSignals";
import { CommodityMap } from "@/components/modules/CommodityMap";
import { ReportGate } from "@/components/ReportGate";
import { ReportStateProvider } from "@/components/ReportState";
import { StickyCTA } from "@/components/StickyCTA";

export const dynamic = "force-dynamic";

/** Personalized report — Server Component fetches the TEASER config only (spec §11.3). */
export default async function ReportPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ name?: string; fallback?: string }>;
}) {
  const { slug } = await params;
  const { name, fallback } = await searchParams;

  let account = await getAccount(slug);
  const isFallback = !account;

  if (!account) {
    // Unknown company → graceful vertical/revenue-band template (spec §5).
    if (!name && fallback !== "1") notFound();
    account = getFallbackAccount(name || slug.replace(/-/g, " "));
  }

  const teaser = toTeaser(account);

  return (
    <main className="mx-auto max-w-md px-5 pb-28 pt-6 sm:max-w-2xl sm:px-8 sm:pb-16 lg:max-w-4xl lg:px-10">
      <header className="mb-8 flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Brand />
        </Link>
        <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
          B2B Connect 2026
        </span>
      </header>

      {/* Thesis — line one of the report (spec §3.1) */}
      <section className="pb-4">
        <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-accent">
          <span className="size-1.5 rounded-full bg-accent" />
          Prepared for {teaser.companyName}
          <span className="text-muted-foreground/70">· {teaser.verticalLabel}</span>
        </p>
        <h1 className="font-display text-[30px] font-bold leading-[1.08] tracking-tight text-balance sm:text-[40px] lg:text-[46px]">
          {teaser.thesis}
        </h1>
        <Tagline className="mt-5 text-sm text-muted-foreground sm:text-base" />
        {isFallback ? (
          <p className="mt-4 rounded-md border border-border bg-card p-3 text-xs text-muted-foreground">
            We don’t have a worked profile for {teaser.companyName} yet. This is the read for a{" "}
            {teaser.verticalLabel.toLowerCase()} business at your scale. Book a diagnostic for your exact numbers.
          </p>
        ) : null}
      </section>

      <ReportStateProvider slug={teaser.slug}>
        <AccountProvider config={teaser}>
          {/* Above the gate — fully personalized */}
          <ReframeModule />
          <HypeFilter />
          <StackSignals />
          <CommodityMap />

          {/* The gate + below-gate payoff (served only after email capture) */}
          <ReportGate teaser={teaser} fallback={isFallback ? { name: teaser.companyName } : undefined} />
        </AccountProvider>

        <StickyCTA />
      </ReportStateProvider>

      <footer className="mt-8 border-t border-border pt-5 text-center text-[11px] leading-relaxed text-muted-foreground">
        Directional — figures to be validated against your data in a diagnostic. Cases cited as
        published; Verified vs. Illustrative labelled throughout.
        <br />© {new Date().getFullYear()} i95Dev · Strategy. AI. Commerce. Unified.
      </footer>
    </main>
  );
}
