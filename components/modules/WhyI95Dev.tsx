"use client";
import { ArrowRight, Mail } from "lucide-react";
import type { PayoffConfig } from "@/lib/types";
import { ModuleShell } from "./ModuleShell";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/posthog";

/** Module 7 — Why i95Dev + CTA (below gate). */
export function WhyI95Dev({
  payoff,
  companyName,
}: {
  payoff: PayoffConfig;
  companyName: string;
}) {
  const { why } = payoff;
  return (
    <ModuleShell index={7} title="Why i95Dev" opener={why.opener} id="why-i95dev">
      <p className="text-[15px] leading-relaxed text-muted-foreground lg:max-w-3xl">{why.body}</p>

      <div className="my-5 flex items-center justify-around rounded-lg border border-border bg-card py-4 text-center">
        {[why.credibility.brands, why.credibility.years, why.credibility.projects].map((c) => {
          const [num, ...rest] = c.split(" ");
          return (
            <div key={c} className="px-2">
              <p className="font-display text-xl font-bold text-accent">{num}</p>
              <p className="text-[11px] leading-tight text-muted-foreground">{rest.join(" ")}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border border-primary/40 bg-gradient-to-b from-primary/15 to-card p-5 glow-red lg:max-w-2xl">
        <h3 className="font-display text-xl font-bold leading-tight">{why.ctaTitle}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{why.ctaSubtitle}</p>
        <Button
          className="mt-4 w-full"
          size="lg"
          onClick={() => track("cta_diagnostic_clicked", { company: companyName })}
          asChild
        >
          <a href="mailto:hello@i95dev.com?subject=AI-in-Commerce%20Diagnostic">
            Book the diagnostic <ArrowRight className="size-4" />
          </a>
        </Button>
        <button
          type="button"
          onClick={() => {
            track("report_shared", { channel: "email", company: companyName });
            if (navigator.share) {
              navigator
                .share({ title: `${companyName} · AI-in-Commerce`, url: window.location.href })
                .catch(() => {});
            } else {
              navigator.clipboard?.writeText(window.location.href);
            }
          }}
          className="mt-3 flex w-full items-center justify-center gap-2 text-sm text-muted-foreground hover:text-accent"
        >
          <Mail className="size-4" /> Email this report to your buying group
        </button>
      </div>
    </ModuleShell>
  );
}
