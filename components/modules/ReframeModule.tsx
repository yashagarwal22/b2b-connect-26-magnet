"use client";
import { useAccount } from "@/components/AccountProvider";
import { ModuleShell } from "./ModuleShell";
import { StatPunch } from "@/components/primitives/StatPunch";

/** Module 1 — The Reframe (above gate). */
export function ReframeModule() {
  const a = useAccount();
  return (
    <ModuleShell index={1} title="The Reframe" opener={a.reframe.opener} id="reframe">
      <div className="rounded-lg border border-border bg-card p-5 lg:max-w-3xl">
        <StatPunch
          value={a.reframe.stat}
          label="of enterprise AI pilots return nothing to the P&L"
          source={a.reframe.statSource}
          className="mb-4"
        />
        <p className="text-[15px] leading-relaxed text-muted-foreground">{a.reframe.body}</p>
      </div>
      <p className="mt-4 font-display text-lg font-semibold text-foreground lg:max-w-3xl">
        Everyone here is doing the first kind.{" "}
        <span className="text-accent">This is a map of the second.</span>
      </p>
    </ModuleShell>
  );
}
