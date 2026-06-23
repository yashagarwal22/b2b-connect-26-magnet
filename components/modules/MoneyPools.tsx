"use client";
import type { PayoffConfig } from "@/lib/types";
import { ModuleShell } from "./ModuleShell";
import { MoneyPoolsBars } from "@/components/charts/MoneyPoolsBars";
import { fmtRange } from "@/lib/utils";

/** Module 4 — The Money Pools, dollarized to the revenue band (below gate). */
export function MoneyPools({
  payoff,
  companyName,
}: {
  payoff: PayoffConfig;
  companyName: string;
}) {
  return (
    <ModuleShell
      index={4}
      title="The Money Pools"
      opener="Four pools hold the money. At your scale, here’s where it sits."
      id="money-pools"
    >
      <div className="mb-5 rounded-lg border border-accent/30 bg-accent/10 p-5 text-center glow-teal lg:mx-auto lg:max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {companyName} · estimated annual opportunity
        </p>
        <p className="mt-1 font-display text-4xl font-bold text-accent">
          {fmtRange(payoff.headlineOpportunity)}/yr
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Directional. To be validated against your data.</p>
      </div>
      <div className="rounded-lg border border-border bg-card p-5">
        <MoneyPoolsBars pools={payoff.moneyPools} />
      </div>
      <p className="mt-5 rounded-md border border-border bg-card p-4 text-xs leading-relaxed text-muted-foreground lg:max-w-3xl">
        <span className="font-semibold text-foreground">Foundation note: </span>
        none of this works without clean product data. A focused PIM and structured-data foundation is the
        unlock every play above shares, and the cheapest insurance on the whole portfolio.
      </p>
    </ModuleShell>
  );
}
