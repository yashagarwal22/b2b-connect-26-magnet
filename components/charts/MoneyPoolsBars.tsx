"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { MoneyPool } from "@/lib/types";
import { fmtRange } from "@/lib/utils";
import { CountUp } from "@/components/primitives/CountUp";
import { CredibilityBadge } from "@/components/primitives/CredibilityBadge";
import { SourceTooltip } from "@/components/primitives/SourceTooltip";

/** Horizontal money-pool bars with $ brackets + count-up (spec §6 Module 4). */
export function MoneyPoolsBars({ pools }: { pools: MoneyPool[] }) {
  const reduce = useReducedMotion();
  const max = Math.max(...pools.map((p) => p.range[1]));

  return (
    <div className="space-y-6">
      {pools.map((pool, i) => {
        const widthLo = (pool.range[0] / max) * 100;
        const widthHi = (pool.range[1] / max) * 100;
        return (
          <div key={pool.id}>
            {/* wrap-safe header: long names drop the $ figure to its own line instead of colliding */}
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <p className="min-w-0 flex-1 text-sm font-semibold leading-snug text-foreground">
                {pool.label}
                {pool.source ? <SourceTooltip source={pool.source} /> : null}
              </p>
              <span className="shrink-0 whitespace-nowrap font-display text-lg font-bold text-accent">
                <CountUp to={pool.range[0]} prefix="$" decimals={pool.range[0] % 1 ? 1 : 0} />
                <span className="px-px text-accent/70">–</span>
                <CountUp to={pool.range[1]} prefix="$" suffix="M" decimals={pool.range[1] % 1 ? 1 : 0} />
              </span>
            </div>
            <div className="relative h-4 w-full overflow-hidden rounded-full bg-foreground/10 ring-1 ring-inset ring-border">
              {/* full [lo, hi] reach */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-secondary via-accent to-accent shadow-[0_0_12px_hsl(var(--accent)/0.55)]"
                initial={reduce ? false : { width: 0 }}
                whileInView={{ width: `${widthHi}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
              />
              {/* lower-bound marker — shows the range start */}
              <div
                className="absolute inset-y-0 z-10 w-0.5 bg-brand-navy/90"
                style={{ left: `${widthLo}%` }}
                aria-hidden
              />
            </div>
            <p className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <span className="mt-0.5 shrink-0">
                <CredibilityBadge variant={pool.credibility} />
              </span>
              <span>{pool.note}</span>
            </p>
            <span className="sr-only">{fmtRange(pool.range)}</span>
          </div>
        );
      })}
    </div>
  );
}
