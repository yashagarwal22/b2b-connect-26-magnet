"use client";
import type { PayoffConfig } from "@/lib/types";
import { ModuleShell } from "./ModuleShell";
import { PlayCard } from "@/components/primitives/PlayCard";
import { Reveal } from "@/components/primitives/Reveal";

/** Module 6, the play shortlist. One grid, pillar tagged per card (below gate). */
export function PlayShortlist({ payoff }: { payoff: PayoffConfig }) {
  return (
    <ModuleShell
      index={6}
      title="Your Play Shortlist"
      opener="Not a checklist. The plays that pay, across every part of your business."
      id="shortlist"
    >
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground lg:max-w-3xl">
        Eight plays spanning discovery, your sales engine, operations, and the data foundation
        underneath. Each one is matched to a company built like yours, with a named case and a
        real number. Tap any card for the case and the ROI.
      </p>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {payoff.plays.map((play, i) => (
          <Reveal key={play.id} delay={(i % 2) * 0.06}>
            <PlayCard play={play} index={i} />
          </Reveal>
        ))}
      </div>
    </ModuleShell>
  );
}
