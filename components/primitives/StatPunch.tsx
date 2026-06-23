import { cn } from "@/lib/utils";
import type { Source } from "@/lib/types";
import { SourceTooltip } from "./SourceTooltip";

/** One load-bearing stat, dropped where it lands hardest (spec §3.4). */
export function StatPunch({
  value,
  label,
  source,
  className,
}: {
  value: string;
  label: string;
  source?: Source;
  className?: string;
}) {
  return (
    <div className={cn("flex items-baseline gap-3", className)}>
      <span className="font-display text-5xl font-bold leading-none text-primary">
        {value}
      </span>
      <span className="text-sm text-muted-foreground">
        {label}
        {source ? <SourceTooltip source={source} /> : null}
      </span>
    </div>
  );
}
