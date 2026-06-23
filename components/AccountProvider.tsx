"use client";
import { createContext, useContext, type ReactNode } from "react";
import type { TeaserConfig } from "@/lib/types";

/** Holds the resolved (teaser) config; every module reads tokens from it (spec §11.5). */
const AccountContext = createContext<TeaserConfig | null>(null);

export function AccountProvider({
  config,
  children,
}: {
  config: TeaserConfig;
  children: ReactNode;
}) {
  return <AccountContext.Provider value={config}>{children}</AccountContext.Provider>;
}

export function useAccount(): TeaserConfig {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccount must be used within an AccountProvider");
  return ctx;
}
