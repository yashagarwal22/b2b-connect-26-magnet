"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { PayoffConfig } from "@/lib/types";

/**
 * Shared, session-persisted state for a report page. The gate and the sticky CTA both read it,
 * so once a visitor reveals their numbers the whole page stays in the "unlocked" mode (CTA flips
 * to "Talk to us", the gate shows the payoff) even across scrolls and reloads within the session.
 */
interface ReportStateValue {
  slug: string;
  /** Work email we already know (from the landing finder or a prior unlock). */
  email: string;
  setEmail: (email: string) => void;
  /** True once the payoff has been revealed. */
  unlocked: boolean;
  payoff: PayoffConfig | null;
  markUnlocked: (payoff: PayoffConfig, email: string) => void;
}

const Ctx = createContext<ReportStateValue | null>(null);

export function ReportStateProvider({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  const [email, setEmailState] = useState("");
  const [payoff, setPayoff] = useState<PayoffConfig | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  // Hydrate from the session (email captured on the landing page + any prior unlock).
  useEffect(() => {
    try {
      const savedEmail = sessionStorage.getItem("b2b_email");
      if (savedEmail) setEmailState(savedEmail);
      const raw = sessionStorage.getItem(`b2b_report_${slug}`);
      if (raw) {
        const parsed = JSON.parse(raw) as { payoff?: PayoffConfig; email?: string };
        if (parsed?.payoff) {
          setPayoff(parsed.payoff);
          setUnlocked(true);
        }
        if (parsed?.email) setEmailState(parsed.email);
      }
    } catch {
      /* private mode — ignore */
    }
  }, [slug]);

  const setEmail = useCallback((e: string) => {
    setEmailState(e);
    try {
      if (e) sessionStorage.setItem("b2b_email", e);
    } catch {
      /* ignore */
    }
  }, []);

  const markUnlocked = useCallback(
    (p: PayoffConfig, e: string) => {
      setPayoff(p);
      setUnlocked(true);
      setEmailState(e);
      try {
        // Payoff is the visitor's own just-unlocked data; cache it for the rest of the session
        // so a reload keeps them unlocked without re-capturing the lead.
        sessionStorage.setItem(`b2b_report_${slug}`, JSON.stringify({ payoff: p, email: e }));
        if (e) sessionStorage.setItem("b2b_email", e);
      } catch {
        /* ignore */
      }
    },
    [slug]
  );

  return (
    <Ctx.Provider value={{ slug, email, setEmail, unlocked, payoff, markUnlocked }}>
      {children}
    </Ctx.Provider>
  );
}

export function useReportState(): ReportStateValue {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useReportState must be used within a ReportStateProvider");
  return ctx;
}
