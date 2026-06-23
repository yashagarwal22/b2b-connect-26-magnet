"use client";
import type { PayoffConfig } from "@/lib/types";
import { ModuleShell } from "./ModuleShell";
import { SequencingTimeline } from "@/components/charts/SequencingTimeline";

/** Module 5 — The Sequencing Roadmap, starting at the wedge (below gate). */
export function SequencingRoadmap({ payoff }: { payoff: PayoffConfig }) {
  return (
    <ModuleShell
      index={5}
      title="The Roadmap"
      opener="Start where the data’s ready. Let the first win pay for the next."
      id="roadmap"
    >
      <SequencingTimeline phases={payoff.roadmap} />
    </ModuleShell>
  );
}
