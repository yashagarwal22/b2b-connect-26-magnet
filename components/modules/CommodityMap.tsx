"use client";
import { useAccount } from "@/components/AccountProvider";
import { ModuleShell } from "./ModuleShell";
import { CommodityCompoundingMap } from "@/components/charts/CommodityCompoundingMap";

/** Module 3 — The Commodity-vs-Compounding Map (above gate). */
export function CommodityMap() {
  const a = useAccount();
  return (
    <ModuleShell index={3} title="The Map" opener="Two kinds of AI. One you rent. One you own." id="map">
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground lg:max-w-3xl">
        We mapped {a.companyName}’s world. The lit bubbles are the plays that pay for a company
        built like yours, sized by the dollars on the table. Your wedge is the star, top right:{" "}
        <span className="font-medium text-accent">{a.wedge}</span>.
      </p>
      <CommodityCompoundingMap plays={a.mapPlays} />
    </ModuleShell>
  );
}
