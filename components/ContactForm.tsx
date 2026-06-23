"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isEmailLike } from "@/lib/match";
import { track } from "@/lib/posthog";

/** Generic capture for companies we don't have a prepared profile for (follow up post-event). */
export function ContactForm({
  defaultCompany = "",
  defaultEmail = "",
}: {
  defaultCompany?: string;
  defaultEmail?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(defaultEmail);
  const [company, setCompany] = useState(defaultCompany);
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!name.trim()) return toast.error("Please add your name.");
    if (!isEmailLike(email)) return toast.error("Enter a valid email address.");
    if (!company.trim()) return toast.error("Which company are you with?");

    setSubmitting(true);
    try {
      track("contact_submitted", { company: company.trim() });
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          company: company.trim(),
          role: role.trim(),
          message: message.trim(),
          consent,
        }),
      });
      if (!res.ok) {
        const detail = await res.json().catch(() => ({}));
        throw new Error(detail?.error || `failed (${res.status})`);
      }
      setDone(true);
    } catch (err) {
      console.error("[contact] client error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-accent/40 bg-card p-6 text-center"
      >
        <CheckCircle2 className="mx-auto size-8 text-accent" />
        <h2 className="mt-3 font-display text-xl font-bold">You&apos;re on the list.</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks, {name.split(" ")[0]}. We&apos;ll build the AI-in-commerce read for{" "}
          <span className="text-foreground">{company}</span> and follow up right after B2B Connect 2026.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Your name</Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Jordan Rivera"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5"
            required
          />
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Acme Distribution"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1.5"
            required
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5"
            required
          />
        </div>
        <div>
          <Label htmlFor="role">
            Role <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="role"
            placeholder="VP, Digital Commerce"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1.5"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="message">
          What would you like AI to fix first?{" "}
          <span className="text-muted-foreground">(optional)</span>
        </Label>
        <textarea
          id="message"
          rows={3}
          placeholder="A line on your stack or the problem you're chasing helps us prep."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 flex w-full rounded-md border border-input bg-background/60 px-4 py-2.5 text-base text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-muted-foreground">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 size-4 accent-[hsl(var(--accent))]"
        />
        <span>
          I agree i95Dev may contact me about a personalized AI-in-Commerce read. We honor opt-outs.
        </span>
      </label>

      <Button type="submit" size="lg" disabled={submitting} className="w-full">
        {submitting ? <Loader2 className="size-4 animate-spin" /> : <ArrowRight className="size-4" />}
        {submitting ? "Sending…" : "Prepare my report"}
      </Button>
    </form>
  );
}
