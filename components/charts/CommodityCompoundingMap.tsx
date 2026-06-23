"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { MapPlay } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * The Commodity-vs-Compounding 2×2 (spec §6 Module 3).
 * Y = Commodity (bottom) ↔ Compounding (top).
 * X = Foundation-required (left) ↔ Bolt-on-ready (right).
 * So the wedge (compounding + bolt-on-ready) lands top-right, in the highlighted "found money"
 * quadrant. Bubble size = $ magnitude. Lit bubbles are numbered and keyed to a legend below,
 * which keeps labels from overlapping at 360px. Built as positioned bubbles (not Recharts).
 */
export function CommodityCompoundingMap({ plays }: { plays: MapPlay[] }) {
  const reduce = useReducedMotion();
  const size = (m: number) => 26 + m * 8; // px diameter, 1–5 → 34–66px

  // Number only the lit ("your") plays; commodity bubbles stay faint and unlabeled.
  let n = 0;
  const numbered = plays.map((p) => ({ play: p, num: p.lit ? ++n : null }));
  const litPlays = numbered.filter((x) => x.num !== null);

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-brand-navy/40">
        {/* quadrant gridlines */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-border/70" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-border/70" />

        {/* wedge quadrant highlight (top-right = compounding + bolt-on-ready) */}
        <div className="absolute right-0 top-0 h-1/2 w-1/2 bg-accent/[0.07]" />

        {/* quadrant captions */}
        <span className="absolute right-2 top-2 max-w-[44%] text-right text-[9px] font-bold uppercase leading-tight tracking-wide text-accent/90">
          Found money · start now
        </span>
        <span className="absolute left-2 top-2 max-w-[44%] text-[9px] font-semibold uppercase leading-tight tracking-wide text-muted-foreground/70">
          Worth building toward
        </span>
        <span className="absolute bottom-7 right-2 max-w-[44%] text-right text-[9px] font-semibold uppercase leading-tight tracking-wide text-muted-foreground/60">
          Fades to table-stakes
        </span>
        <span className="absolute bottom-7 left-2 max-w-[44%] text-[9px] font-semibold uppercase leading-tight tracking-wide text-muted-foreground/50">
          Low priority
        </span>

        {/* axis labels */}
        <span className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-medium uppercase tracking-wide text-muted-foreground">
          Compounding ↑
        </span>
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-medium uppercase tracking-wide text-muted-foreground">
          ← Foundation-first · Bolt-on-ready →
        </span>

        {/* bubbles */}
        {numbered.map(({ play: p, num }, i) => {
          const d = size(p.magnitude);
          // X = foundation-required on the LEFT, bolt-on-ready on the RIGHT
          const left = `${8 + p.bolton * 84}%`;
          // Y = compounding at the TOP
          const top = `${10 + (1 - p.compounding) * 74}%`;
          return (
            <motion.div
              key={p.id}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
              style={{ left, top, width: d, height: d }}
              initial={reduce ? false : { scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.05, type: "spring", stiffness: 220, damping: 18 }}
            >
              <span
                className={cn(
                  "flex h-full w-full items-center justify-center rounded-full border font-display text-[11px] font-bold",
                  p.wedge
                    ? "border-accent bg-accent/30 text-white glow-teal"
                    : p.lit
                      ? "border-accent/60 bg-accent/15 text-accent"
                      : "border-border/60 bg-muted/30 text-transparent opacity-50"
                )}
              >
                {num}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* legend: number -> play, so nothing overlaps on the canvas */}
      <ol className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] leading-tight">
        {litPlays.map(({ play: p, num }) => (
          <li key={p.id} className="flex items-center gap-1.5">
            <span
              className={cn(
                "flex size-4 shrink-0 items-center justify-center rounded-full font-display text-[9px] font-bold",
                p.wedge ? "bg-accent text-brand-navy" : "bg-accent/20 text-accent"
              )}
            >
              {num}
            </span>
            <span className={cn("truncate", p.wedge ? "font-semibold text-foreground" : "text-muted-foreground")}>
              {p.label}
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-border/60 pt-2.5 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-accent" /> Your plays
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-muted/60" /> Commodity / table-stakes
        </span>
        <span>Bubble size = $ magnitude</span>
      </div>
    </div>
  );
}
