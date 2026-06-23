"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Lock, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import type { PayoffConfig, TeaserConfig } from "@/lib/types";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MoneyPools } from "@/components/modules/MoneyPools";
import { SequencingRoadmap } from "@/components/modules/SequencingRoadmap";
import { PlayShortlist } from "@/components/modules/PlayShortlist";
import { WhyI95Dev } from "@/components/modules/WhyI95Dev";
import { useReportState } from "@/components/ReportState";
import { isPersonalDomain, isEmailLike } from "@/lib/match";
import { track, identify } from "@/lib/posthog";

export function ReportGate({
  teaser,
  fallback,
}: {
  teaser: TeaserConfig;
  fallback?: { name: string };
}) {
  const reduce = useReducedMotion();
  const { email: knownEmail, setEmail, unlocked, payoff, markUnlocked } = useReportState();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  // When the visitor wants to override an already-known email, show the full form.
  const [manual, setManual] = useState(false);

  const haveEmail = isEmailLike(knownEmail) && !manual;
  const domain = (e: string) => e.trim().split("@")[1]?.toLowerCase() ?? "";

  async function unlock(rawEmail: string, consentGiven: boolean) {
    const clean = rawEmail.trim().toLowerCase();
    if (!isEmailLike(clean)) {
      toast.error("Enter a valid email address.");
      return;
    }
    if (isPersonalDomain(domain(clean))) {
      toast.warning("A work email helps us route you to the right rep. Continuing anyway.");
    }
    setSubmitting(true);
    try {
      track("email_submitted", { company_slug: teaser.slug });
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: teaser.slug,
          email: clean,
          consent: consentGiven,
          fallbackName: fallback?.name,
        }),
      });
      if (!res.ok) {
        const detail = await res.json().catch(() => ({}));
        throw new Error(detail?.error || `unlock failed (${res.status})`);
      }
      const data = (await res.json()) as { payoff: PayoffConfig };
      identify(clean, { company: teaser.companyName, vertical: teaser.vertical });
      track("payoff_unlocked", { company_slug: teaser.slug });
      markUnlocked(data.payoff, clean);
      setOpen(false);
      toast.success("Your model is unlocked.");
    } catch (err) {
      console.error("[unlock] client error:", err);
      toast.error("Something went wrong unlocking your model. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // The full email-capture drawer (shown when we don't already have a work email).
  const GateForm = (
    <Drawer open={open} onOpenChange={(o) => { setOpen(o); if (o) track("gate_shown"); }}>
      <DrawerTrigger asChild>
        <Button size="lg" className="w-full">
          <Lock className="size-4" /> Reveal your numbers
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto max-w-md">
        <DrawerHeader>
          <DrawerTitle>Reveal {teaser.companyName}&rsquo;s AI-in-commerce model</DrawerTitle>
          <DrawerDescription>
            Your dollarized opportunity, sequencing roadmap, and play shortlist, unlocked with your
            work email. We already know who you are; this is just so the right rep can follow up.
          </DrawerDescription>
        </DrawerHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            unlock(input, consent);
          }}
          className="px-5"
        >
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setEmail(e.target.value.trim().toLowerCase());
            }}
            className="mt-1.5"
            required
          />
          <label className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 size-4 accent-[hsl(var(--accent))]"
            />
            <span>
              I agree i95Dev may contact me about this report and the AI-in-Commerce Diagnostic. We
              honor opt-outs.
            </span>
          </label>
          <DrawerFooter className="px-0">
            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? <Loader2 className="size-4 animate-spin" /> : <ArrowRight className="size-4" />}
              {submitting ? "Unlocking…" : "Unlock my model"}
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );

  // One-tap reveal: the visitor already gave a work email on the landing page.
  const OneTap = (
    <div className="w-full max-w-xs space-y-2">
      <Button
        size="lg"
        className="w-full"
        disabled={submitting}
        onClick={() => unlock(knownEmail, true)}
      >
        {submitting ? <Loader2 className="size-4 animate-spin" /> : <ArrowRight className="size-4" />}
        Reveal {teaser.companyName}&rsquo;s numbers
      </Button>
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        <CheckCircle2 className="mr-1 inline size-3 text-accent" />
        Matched as <span className="text-foreground">{knownEmail}</span>. Revealing means i95Dev may
        follow up about your report.{" "}
        <button
          type="button"
          onClick={() => setManual(true)}
          className="underline underline-offset-2 hover:text-accent"
        >
          Use a different email
        </button>
      </p>
    </div>
  );

  if (!unlocked || !payoff) {
    return (
      <section id="gate" className="py-8">
        {/* Blurred payoff teaser — the real number is NOT in the payload yet (spec §11.3). */}
        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6">
          <div className="gate-blur select-none" aria-hidden>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {teaser.companyName} · {teaser.revenueBand} · estimated annual opportunity
            </p>
            <p className="font-display text-5xl font-bold text-accent">$██–$██M</p>
            <div className="mt-4 space-y-2">
              <div className="h-3 w-3/4 rounded-full bg-muted/50" />
              <div className="h-3 w-2/3 rounded-full bg-muted/50" />
              <div className="h-3 w-1/2 rounded-full bg-muted/50" />
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card/40 p-6 text-center">
            <Lock className="size-6 text-accent" />
            <p className="max-w-xs text-balance text-sm text-foreground">
              {haveEmail ? (
                <>
                  Your estimated annual margin and commerce opportunity is{" "}
                  <span className="font-semibold text-accent">
                    a real number we calculated for {teaser.companyName}
                  </span>
                  . One tap to reveal it.
                </>
              ) : (
                <>
                  Your estimated annual margin and commerce opportunity is{" "}
                  <span className="font-semibold text-accent">
                    a real number we calculated for {teaser.companyName}
                  </span>
                  . Enter your work email to reveal your model.
                </>
              )}
            </p>
            {haveEmail ? OneTap : <div className="w-full max-w-xs">{GateForm}</div>}
          </div>
        </div>
      </section>
    );
  }

  // Blur→reveal the below-gate payoff (spec §11.6).
  return (
    <AnimatePresence>
      <motion.div
        id="gate"
        initial={reduce ? false : { opacity: 0, filter: "blur(10px)", y: 8 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <MoneyPools payoff={payoff} companyName={teaser.companyName} />
        <SequencingRoadmap payoff={payoff} />
        <PlayShortlist payoff={payoff} />
        <WhyI95Dev payoff={payoff} companyName={teaser.companyName} />
      </motion.div>
    </AnimatePresence>
  );
}
