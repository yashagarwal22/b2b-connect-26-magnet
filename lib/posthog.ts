"use client";
import posthog from "posthog-js";

let started = false;

/** Initialise PostHog once on the client. No-ops without a key (spec §11.8). */
export function initPostHog() {
  if (started || typeof window === "undefined") return;
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return;
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    capture_pageview: false, // we fire report_landed manually
    persistence: "memory", // cookieless until consent (spec §10/§11.8)
  });
  started = true;
}

/** Safe event capture — silently ignored when PostHog isn't configured. */
export function track(event: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
  posthog.capture(event, props);
}

export function identify(email: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
  posthog.identify(email, props);
}
