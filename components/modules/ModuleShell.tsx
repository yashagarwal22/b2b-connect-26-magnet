import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/primitives/Reveal";
import { AphoristicOpener } from "@/components/primitives/AphoristicOpener";

/**
 * Consistent module frame styled like a white-paper section header:
 * "[02] · THE HYPE FILTER ─────────" then an aphoristic opener and the body, scroll-revealed.
 * `index` is optional (companion sections can omit it); `title` adds the section name.
 */
export function ModuleShell({
  index,
  title,
  opener,
  children,
  className,
  id,
}: {
  index?: number;
  title?: string;
  opener: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <Reveal>
      <section id={id} className={cn("scroll-mt-4 py-7", className)}>
        <div className="mb-3 flex items-center gap-2.5">
          {index != null ? (
            <span className="font-display text-xs font-bold text-primary">
              {String(index).padStart(2, "0")}
            </span>
          ) : null}
          {title ? (
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {title}
            </span>
          ) : null}
          <span className="h-px flex-1 bg-border" />
        </div>
        <AphoristicOpener className="mb-4">{opener}</AphoristicOpener>
        {children}
      </section>
    </Reveal>
  );
}
