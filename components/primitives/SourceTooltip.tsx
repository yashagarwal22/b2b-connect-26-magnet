"use client";
import { Info } from "lucide-react";
import type { Source } from "@/lib/types";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

/** Sources open on TAP (no hover-only affordances on mobile — spec §11.2/§8). */
export function SourceTooltip({ source }: { source: Source }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`Source: ${source.label}`}
          className="ml-1 inline-flex size-5 items-center justify-center rounded-full text-muted-foreground/80 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Info className="size-3.5" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-60">
        <p className="text-xs text-muted-foreground">Source</p>
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent underline-offset-2 hover:underline"
        >
          {source.label} ↗
        </a>
      </PopoverContent>
    </Popover>
  );
}
