"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { RoadmapPhase } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

/** Vertical phased timeline starting at the wedge (spec §6 Module 5). */
export function SequencingTimeline({ phases }: { phases: RoadmapPhase[] }) {
  const reduce = useReducedMotion();
  return (
    <ol className="relative ml-3 border-l-2 border-border">
      {phases.map((phase, i) => (
        <motion.li
          key={phase.phase}
          className="relative ml-6 pb-7 last:pb-0"
          initial={reduce ? false : { opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <span
            className={cn(
              "absolute -left-[1.95rem] flex size-5 items-center justify-center rounded-full border-2",
              phase.active
                ? "border-accent bg-accent text-accent-foreground glow-teal"
                : "border-border bg-card"
            )}
          >
            <span className="size-1.5 rounded-full bg-current" />
          </span>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {phase.phase}
            </span>
            {phase.active ? <Badge variant="verified">Starts now</Badge> : null}
          </div>
          <h3 className="font-display text-base font-semibold leading-tight text-foreground">
            {phase.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
        </motion.li>
      ))}
    </ol>
  );
}
