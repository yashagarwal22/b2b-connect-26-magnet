// ── Core domain types for the per-account, config-driven report (spec §11.5) ──

export type Vertical =
  | "industrial-distribution"
  | "manufacturing"
  | "life-sciences"
  | "cpg"
  | "chemical-distribution";

export type RoleEmphasis = "finance" | "rgm" | "ecommerce" | "ai-strategy";

export type Credibility = "verified" | "illustrative";

export interface Source {
  label: string;
  url: string;
}

/** Stack signal → the compounding play it unlocks + the commodity thing they'll be pitched. */
export interface StackFlag {
  signal: string;
  leadPlay: string;
  commodityFlag?: string;
}

/** A bubble on the Commodity-vs-Compounding 2×2 map (spec §6 Module 3). */
export interface MapPlay {
  id: string;
  label: string;
  /** Y axis: 0 = commodity (runs on the model) … 1 = compounding (runs on your data). */
  compounding: number;
  /** X axis: 0 = foundation-required … 1 = bolt-on-ready (start now). */
  bolton: number;
  /** Relative $ magnitude → bubble size (1–5). */
  magnitude: number;
  /** Lit = relevant to this account; greyed otherwise. */
  lit: boolean;
  /** The wedge = top-left (compounding + bolt-on-ready). */
  wedge?: boolean;
}

/** A horizontal money-pool bar, dollarized to the revenue band (spec §6 Module 4). */
export interface MoneyPool {
  id: string;
  label: string;
  /** [lo, hi] in $M. */
  range: [number, number];
  note: string;
  credibility: Credibility;
  source?: Source;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  body: string;
  active?: boolean;
}

/** The three research pillars + the foundation that underpins them all. */
export type Pillar = "storefront" | "sales-marketing" | "back-office" | "foundation";

/** One of the play-shortlist cards (spec §6 Module 6). */
export interface Play {
  id: string;
  pillar: Pillar;
  title: string;
  problem: string;
  caseName: string;
  caseDetail: string;
  roi: string;
  whatI95Does: string;
  credibility: Credibility;
  source?: Source;
}

/** Everything served BELOW the email gate — never in the initial page payload (spec §11.3). */
export interface PayoffConfig {
  moneyPools: MoneyPool[];
  /** Headline "your estimated annual opportunity" [lo, hi] in $M. */
  headlineOpportunity: [number, number];
  roadmap: RoadmapPhase[];
  plays: Play[];
  why: {
    opener: string;
    body: string;
    ctaTitle: string;
    ctaSubtitle: string;
    credibility: { brands: string; years: string; projects: string };
  };
}

/** The full per-account config. */
export interface AccountConfig {
  slug: string;
  companyName: string;
  aliases?: string[];
  /** Email/web domains used to auto-resolve a visitor to this account (e.g. "chempoint.com"). */
  domains?: string[];
  vertical: Vertical;
  verticalLabel: string;
  revenueBand: string;
  role: string;
  roleEmphasis: RoleEmphasis;
  activeRequirement: boolean;
  published: boolean;

  thesis: string;
  wedge: string;
  wedgeDetail: string;

  // ── Above the gate (teaser) ──
  reframe: {
    opener: string;
    stat: string;
    statSource: Source;
    body: string;
  };
  hypeFilter: {
    opener: string;
    commodity: string[];
    compounding: string[];
    pitchWarning: string;
  };
  stackFlags: StackFlag[];
  mapPlays: MapPlay[];

  // ── Below the gate (payoff) ──
  payoff: PayoffConfig;
}

/** The teaser-only shape returned by GET /api/account/[slug] (no payoff). */
export type TeaserConfig = Omit<AccountConfig, "payoff">;

export function toTeaser(cfg: AccountConfig): TeaserConfig {
  const { payoff: _payoff, ...teaser } = cfg;
  return teaser;
}

/** Lightweight directory entry for the landing typeahead. */
export interface AccountSummary {
  slug: string;
  companyName: string;
  aliases?: string[];
  domains?: string[];
  verticalLabel: string;
}
