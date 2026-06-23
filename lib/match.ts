import type { AccountSummary } from "@/lib/types";

/** Free-mail providers we can't resolve to a single company. */
export const PERSONAL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "live.com",
  "msn.com",
];

const norm = (s: string) =>
  s.trim().toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();

export function isEmailLike(input: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim());
}

export function isPersonalDomain(domain: string): boolean {
  return PERSONAL_DOMAINS.includes(domain.trim().toLowerCase());
}

/** Pull a bare domain out of an email, a URL, or a raw "acme.com" string. */
export function extractDomain(input: string): string | null {
  const v = input.trim().toLowerCase();
  if (!v) return null;
  if (v.includes("@")) return v.split("@")[1] || null;
  const cleaned = v
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split(/[/?#]/)[0];
  return /^[a-z0-9.-]+\.[a-z]{2,}$/.test(cleaned) ? cleaned : null;
}

function domainMatchesAccount(domain: string, a: AccountSummary): boolean {
  const root = domain.toLowerCase();
  return (a.domains ?? []).some((d) => {
    const dd = d.toLowerCase();
    return root === dd || root.endsWith(`.${dd}`);
  });
}

function nameMatchesAccount(name: string, a: AccountSummary): boolean {
  const n = norm(name);
  if (!n) return false;
  const candidates = [a.companyName, ...(a.aliases ?? [])].map(norm);
  return candidates.some((c) => c === n);
}

export interface ResolveResult {
  account: AccountSummary | null;
  /** How we matched (or why we didn't). */
  via: "domain" | "name" | "none";
  domain: string | null;
  isPersonal: boolean;
}

/** Resolve a raw "email or company name" input to a known account. */
export function resolveAccount(
  input: string,
  accounts: AccountSummary[]
): ResolveResult {
  const value = input.trim();
  const domain = extractDomain(value);
  const personal = domain ? isPersonalDomain(domain) : false;

  // 1. Try domain (work email or pasted domain), unless it's free-mail.
  if (domain && !personal) {
    const hit = accounts.find((a) => domainMatchesAccount(domain, a));
    if (hit) return { account: hit, via: "domain", domain, isPersonal: personal };
  }

  // 2. Try an exact company-name / alias match.
  if (!isEmailLike(value)) {
    const hit = accounts.find((a) => nameMatchesAccount(value, a));
    if (hit) return { account: hit, via: "name", domain, isPersonal: personal };
  }

  return { account: null, via: "none", domain, isPersonal: personal };
}

/** Live suggestions for the typeahead — substring across name + aliases. */
export function suggestAccounts(
  query: string,
  accounts: AccountSummary[],
  limit = 6
): AccountSummary[] {
  const q = norm(query);
  if (!q) return accounts.slice(0, limit);
  const scored = accounts
    .map((a) => {
      const hay = norm([a.companyName, ...(a.aliases ?? [])].join(" "));
      const idx = hay.indexOf(q);
      if (idx === -1) return null;
      // Prefer prefix matches.
      return { a, score: idx === 0 ? 0 : 1 + idx };
    })
    .filter(Boolean) as { a: AccountSummary; score: number }[];
  return scored.sort((x, y) => x.score - y.score).slice(0, limit).map((s) => s.a);
}
