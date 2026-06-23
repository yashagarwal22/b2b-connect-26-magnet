"use client";
import { useEffect, useState } from "react";
import { ArrowDown, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReportState } from "@/components/ReportState";
import { track } from "@/lib/posthog";

/**
 * Sticky bottom CTA. Before unlock it nudges toward the gate ("Reveal your numbers"); once the
 * payoff is revealed it flips to "Talk to us" and jumps to the diagnostic CTA. State comes from
 * ReportState, so it stays correct across scrolls and reloads (spec §11.2).
 */
export function StickyCTA() {
  const { unlocked } = useReportState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = () => {
    if (unlocked) {
      track("sticky_cta_clicked", { state: "talk" });
      document.getElementById("why-i95dev")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      track("sticky_cta_clicked", { state: "reveal" });
      document.getElementById("gate")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md p-3 sm:max-w-xl lg:hidden">
      <div className="rounded-xl border border-border bg-card/90 p-2 shadow-lg backdrop-blur">
        <Button onClick={jump} className="w-full" size="lg" variant={unlocked ? "accent" : "default"}>
          {unlocked ? (
            <>
              Talk to us <MessageSquare className="size-4" />
            </>
          ) : (
            <>
              Reveal your numbers <ArrowDown className="size-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
