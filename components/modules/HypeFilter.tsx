"use client";
import { X, Check, AlertTriangle } from "lucide-react";
import { useAccount } from "@/components/AccountProvider";
import { ModuleShell } from "./ModuleShell";
import { Card, CardContent } from "@/components/ui/card";

/** Module 2 — The Hype Filter: Commodity vs. Compounding two-column cut (above gate). */
export function HypeFilter() {
  const a = useAccount();
  return (
    <ModuleShell index={2} title="The Hype Filter" opener={a.hypeFilter.opener} id="hype-filter">
      <div className="grid grid-cols-2 gap-3">
        <Card className="border-border/60">
          <CardContent className="p-4">
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Commodity · rent it
            </p>
            <ul className="space-y-2.5">
              {a.hypeFilter.commodity.map((c) => (
                <li key={c} className="flex gap-2 text-[13px] leading-snug text-muted-foreground">
                  <X className="mt-0.5 size-3.5 shrink-0 text-primary/80" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-accent/30 bg-accent/5">
          <CardContent className="p-4">
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-wider text-accent">
              Compounding · own it
            </p>
            <ul className="space-y-2.5">
              {a.hypeFilter.compounding.map((c) => (
                <li key={c} className="flex gap-2 text-[13px] leading-snug text-foreground">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="mt-3 flex gap-2 rounded-lg border border-primary/30 bg-primary/10 p-4 lg:max-w-3xl">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-primary" />
        <p className="text-sm leading-relaxed text-foreground">
          <span className="font-semibold">What you’ll be pitched: </span>
          {a.hypeFilter.pitchWarning}
        </p>
      </div>
    </ModuleShell>
  );
}
