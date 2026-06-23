"use client";
import { Check, Server, Ban } from "lucide-react";
import { useAccount } from "@/components/AccountProvider";
import { ModuleShell } from "./ModuleShell";

/**
 * "Your stack, decoded" — a scannable signal -> unlock -> trap infographic (above gate).
 * Turns the stack-flag data into a visual instead of prose, in the consulting-white-paper mode.
 */
export function StackSignals() {
  const a = useAccount();
  if (!a.stackFlags?.length) return null;

  return (
    <ModuleShell
      title="Your stack, decoded"
      opener="We read your tech stack. Here is the play hiding in each system, and the pitch to refuse."
      id="stack"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {a.stackFlags.map((f) => (
          <div
            key={f.signal}
            className="flex flex-col rounded-lg border border-border bg-card p-4"
          >
            <p className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
              <Server className="size-4 shrink-0 text-muted-foreground" />
              {f.signal}
            </p>
            <p className="mt-2.5 flex gap-2 text-[13px] leading-snug text-foreground">
              <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
              <span>{f.leadPlay}</span>
            </p>
            {f.commodityFlag ? (
              <p className="mt-2 flex gap-2 border-t border-border/60 pt-2 text-xs leading-snug text-muted-foreground">
                <Ban className="mt-0.5 size-3.5 shrink-0 text-primary/80" />
                <span>{f.commodityFlag}</span>
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </ModuleShell>
  );
}
