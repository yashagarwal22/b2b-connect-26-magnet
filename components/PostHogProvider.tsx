"use client";
import { useEffect } from "react";
import { initPostHog, track } from "@/lib/posthog";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initPostHog();
    track("report_landed");
  }, []);
  return <>{children}</>;
}
