"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Building2, Loader2, Search, Sparkles } from "lucide-react";
import type { AccountSummary } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  isEmailLike,
  resolveAccount,
  suggestAccounts,
} from "@/lib/match";
import { track } from "@/lib/posthog";

/**
 * Landing entry point. Accepts a work email OR a company name and auto-resolves
 * the visitor to their prepared report. Known company -> /r/[slug]. Anything we
 * don't have a profile for -> /contact (capture and follow up after the event).
 */
export function CompanyFinder({ accounts }: { accounts: AccountSummary[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const trimmed = query.trim();
  const suggestions = useMemo(
    () => suggestAccounts(trimmed, accounts, 6),
    [trimmed, accounts]
  );

  // Close the dropdown on outside click.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => setActive(0), [trimmed]);

  function goToReport(a: AccountSummary, email?: string) {
    setBusy(true);
    if (email && isEmailLike(email)) {
      try {
        sessionStorage.setItem("b2b_email", email.trim().toLowerCase());
      } catch {
        /* private mode — ignore */
      }
    }
    track("company_resolved", { company_slug: a.slug, via: email ? "email" : "select" });
    router.push(`/r/${a.slug}`);
  }

  function goToContact(prefill: string) {
    setBusy(true);
    const params = new URLSearchParams();
    if (isEmailLike(prefill)) params.set("email", prefill.trim().toLowerCase());
    else if (prefill.trim()) params.set("company", prefill.trim());
    track("finder_no_match", { typed: prefill.trim() });
    router.push(`/contact${params.toString() ? `?${params}` : ""}`);
  }

  /** Resolve whatever is currently typed (Enter key or primary button). */
  function submit() {
    if (busy) return;
    const value = trimmed;
    if (!value) {
      inputRef.current?.focus();
      setOpen(true);
      return;
    }
    const { account, via, isPersonal } = resolveAccount(value, accounts);
    if (account) {
      goToReport(account, via === "domain" && isEmailLike(value) ? value : undefined);
      return;
    }
    // No match. If they gave a work email we still want it on the contact form.
    if (isEmailLike(value) && !isPersonal) goToContact(value);
    else goToContact(value);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (open && suggestions[active] && !isEmailLike(trimmed)) {
        goToReport(suggestions[active]);
      } else {
        submit();
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const showDropdown = open && trimmed.length > 0;
  const emailMode = isEmailLike(trimmed) || trimmed.includes("@");

  return (
    <div ref={boxRef} className="relative w-full text-left">
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            placeholder="Work email or company name"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            aria-label="Work email or company name"
            className="h-14 w-full rounded-xl border border-input bg-background/70 pl-10 pr-4 text-base text-foreground shadow-sm ring-offset-background placeholder:text-muted-foreground focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          />
        </div>
        <Button
          size="lg"
          onClick={submit}
          disabled={busy}
          className="h-14 shrink-0 sm:w-auto"
        >
          {busy ? <Loader2 className="size-4 animate-spin" /> : <ArrowRight className="size-4" />}
          {emailMode ? "Get my report" : "See my report"}
        </Button>
      </div>

      {showDropdown ? (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border bg-popover shadow-2xl">
          {suggestions.length > 0 ? (
            <ul className="max-h-72 overflow-y-auto py-1.5">
              {suggestions.map((a, i) => (
                <li key={a.slug}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => goToReport(a)}
                    className={`flex w-full items-center gap-3 px-3.5 py-2.5 text-left transition-colors ${
                      i === active ? "bg-card" : "hover:bg-card/60"
                    }`}
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                      <Building2 className="size-4 text-muted-foreground" />
                    </span>
                    <span className="flex-1 truncate text-sm font-medium text-foreground">
                      {a.companyName}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      {a.verticalLabel}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-sm text-muted-foreground">
              {emailMode
                ? "We'll match your work email to your prepared report."
                : `No attendee profile matches "${trimmed}" yet.`}
            </div>
          )}

          <button
            type="button"
            onClick={() => goToContact(trimmed)}
            className="flex w-full items-center gap-2.5 border-t border-border bg-card/40 px-4 py-3 text-left text-sm font-medium text-accent transition-colors hover:bg-card"
          >
            <Sparkles className="size-4" />
            <span className="flex-1">
              Don&apos;t see your company? Tell us and we&apos;ll prepare yours.
            </span>
            <ArrowRight className="size-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
