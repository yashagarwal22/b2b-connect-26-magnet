import { cn } from "@/lib/utils";

/** The contrastive couplet that opens every module (spec §3.4). */
export function AphoristicOpener({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-display text-xl font-semibold leading-snug tracking-tight text-balance text-foreground sm:text-2xl",
        className
      )}
    >
      {children}
    </p>
  );
}
