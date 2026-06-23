import { cn } from "@/lib/utils";

/** $ in brackets next to each play, scaled to the revenue band (spec §3.4). */
export function DollarBracket({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-accent/15 px-2 py-0.5 font-display text-sm font-semibold text-accent",
        className
      )}
    >
      [{children}]
    </span>
  );
}
