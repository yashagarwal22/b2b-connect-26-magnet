import type { AccountConfig, Pillar, Vertical } from "@/lib/types";

/** Display metadata for the play pillars (the three research pillars + foundation). */
export const PILLARS: Record<Pillar, { label: string; blurb: string }> = {
  storefront: { label: "Storefront & discovery", blurb: "How buyers find and buy" },
  "sales-marketing": { label: "Sales & marketing", blurb: "Your demand-creation engine" },
  "back-office": { label: "Back-office & operations", blurb: "Supply, margin, working capital" },
  foundation: { label: "Data foundation", blurb: "The unlock under everything" },
};

/** Vertical metadata + the lookalike-case backbone (spec §7.2). */
export const VERTICALS: Record<
  Vertical,
  { label: string; cases: string[] }
> = {
  "industrial-distribution": {
    label: "Industrial distribution",
    cases: ["Grainger (RAG, 2.5M SKUs)", "US Foods MOXe", "Watsco (+10% AOV)"],
  },
  manufacturing: {
    label: "Manufacturing",
    cases: ["Schneider (config 72h→90s)", "Sandvik Copilot", "Al Ghurair planning"],
  },
  "life-sciences": {
    label: "Life sciences / medtech",
    cases: ["McKesson cold chain", "MilliporeSigma reorder", "Model N"],
  },
  cpg: {
    label: "CPG / consumer",
    cases: ["General Mills ($20M)", "Mars trade-promo", "Pricefx/Zilliant RGM"],
  },
  "chemical-distribution": {
    label: "Specialty-chemical distribution",
    cases: ["Dawn Foods (ingredient wholesale)", "Grainger RAG", "PHOENIX GenAI Factory"],
  },
};

/** Default revenue-band → ROI brackets in $M (spec §7.4). */
export const REVENUE_BANDS: Record<
  string,
  { margin: [number, number]; workingCapital: [number, number]; headline: [number, number] }
> = {
  "$50–150M": { margin: [0.5, 3], workingCapital: [1, 5], headline: [1.5, 8] },
  "$150–300M": { margin: [1.5, 6], workingCapital: [3, 9], headline: [4, 14] },
  "$300–500M": { margin: [3, 10], workingCapital: [5, 15], headline: [8, 25] },
  "$350M+": { margin: [4, 20], workingCapital: [10, 30], headline: [14, 40] },
};

/** Simple {token} interpolation for copy templates (spec §11.5). */
export function fillTemplate(str: string, tokens: Record<string, string>): string {
  return str.replace(/\{(\w+)\}/g, (_, k) => tokens[k] ?? `{${k}}`);
}

/**
 * Build a complete, on-voice report for a company we don't have a worked config for
 * (unknown company, or vertical-selector fallback — spec §5 "Fallbacks").
 */
export function buildFallbackConfig(
  companyName: string,
  vertical: Vertical = "industrial-distribution",
  revenueBand = "$150–300M"
): AccountConfig {
  const v = VERTICALS[vertical];
  const bands = REVENUE_BANDS[revenueBand] ?? REVENUE_BANDS["$150–300M"];
  const slug = companyName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return {
    slug,
    companyName,
    vertical,
    verticalLabel: v.label,
    revenueBand,
    role: "Digital / Commerce leadership",
    roleEmphasis: "ecommerce",
    activeRequirement: false,
    published: true,
    thesis: `The next dollar of AI ROI at ${companyName} isn't in a chatbot. It's in the data you already have and don't use.`,
    wedge: "Pricing and margin enforcement, the compounding play you can start now",
    wedgeDetail:
      "High value, runs on data you already have, fast to prove, and it self-funds the harder foundation work.",
    reframe: {
      opener: "Everyone here is selling you AI. The model is the cheapest thing in the room.",
      stat: "95%",
      statSource: { label: "MIT NANDA", url: "https://nanda.media.mit.edu/" },
      body: `95% of enterprise AI pilots return nothing to the P&L. Not because the models are weak, but because they sit next to the work instead of inside it. The winners point ordinary AI at what only ${companyName} owns: your data, your workflows, your systems of record.`,
    },
    hypeFilter: {
      opener: "Commodity AI runs on the model. Compounding AI runs on what only you own.",
      commodity: [
        "Generic ERP copilots and slap-on chatbots",
        "LLM product copy and generic recommendations",
        "Basic ML forecasting relabeled \"AI\"",
        "\"AI strategy\" engagements that ship slides, not deployments",
      ],
      compounding: [
        "Pricing / margin enforcement",
        "B2B-aware semantic search",
        "Account-based entitlement personalization",
        "AI master-data / PIM enrichment",
      ],
      pitchWarning:
        "Every vendor in the hall will pitch you a copilot for everything. The constraint was never the software. It's your data.",
    },
    stackFlags: [
      {
        signal: "Your commerce platform",
        leadPlay: "Account-based pricing & B2B-aware search",
        commodityFlag: "Generic recs that ignore contract pricing destroy trust.",
      },
    ],
    mapPlays: [
      { id: "pricing", label: "Pricing enforcement", compounding: 0.9, bolton: 0.8, magnitude: 5, lit: true, wedge: true },
      { id: "search", label: "B2B-aware search", compounding: 0.8, bolton: 0.7, magnitude: 4, lit: true },
      { id: "pim", label: "AI PIM / MDM", compounding: 0.85, bolton: 0.35, magnitude: 3, lit: true },
      { id: "personalization", label: "Account personalization", compounding: 0.85, bolton: 0.55, magnitude: 4, lit: true },
      { id: "chatbot", label: "Generic chatbot", compounding: 0.15, bolton: 0.9, magnitude: 1, lit: false },
      { id: "copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
      { id: "forecast", label: "ML forecasting", compounding: 0.4, bolton: 0.4, magnitude: 2, lit: false },
    ],
    payoff: {
      headlineOpportunity: bands.headline,
      moneyPools: [
        {
          id: "margin",
          label: "Margin: pricing you already negotiated, leaking",
          range: bands.margin,
          note: "Distributors and manufacturers lose 1.5–2.5% of margin to quote drift and discount creep. It runs on data you already have, the fastest dollar in the building.",
          credibility: "illustrative",
        },
        {
          id: "working-capital",
          label: "Working capital: inventory off the balance sheet",
          range: bands.workingCapital,
          note: "A 10–12% inventory reduction via demand sensing + MEIO frees cash with no new revenue required.",
          credibility: "illustrative",
        },
        {
          id: "installed-base",
          label: "Installed base: sell to who already trusts you",
          range: [bands.margin[0], bands.margin[1]],
          note: "Selling to existing accounts returns 3–5× new-logo acquisition; 8–12 points of NRR.",
          credibility: "verified",
        },
      ],
      roadmap: [
        { phase: "Phase 1, your no-regrets first move", title: "Pricing and margin enforcement", body: "Runs on data you already have, and is fastest to prove. Self-funds the foundation work.", active: false },
        { phase: "Phase 2", title: "Product-data foundation (PIM/MDM)", body: "Unlocks search, AEO and agentic readiness simultaneously." },
        { phase: "Phase 3", title: "B2B-aware search & account personalization", body: "Convert more of the traffic you already have." },
        { phase: "Phase 4", title: "Agentic-commerce readiness", body: "Be the machine-readable, contract-aware line when AI buyers arrive." },
      ],
      plays: [
        {
          id: "pricing",
          pillar: "back-office",
          title: "AI pricing & margin enforcement",
          problem: "Margin you already negotiated, leaking to quote drift and discount creep.",
          caseName: v.cases[0],
          caseDetail: "A lookalike in your vertical proved this play in production.",
          roi: "1–2% margin at ~100% drop-through. 1% on $400M = $4M.",
          whatI95Does: "Wire pricing logic across ERP, CRM and commerce into one enforced layer.",
          credibility: "illustrative",
        },
        {
          id: "search",
          pillar: "storefront",
          title: "B2B-aware semantic search",
          problem: "The zero-results catastrophe. A failed lookup is a rep call or a lost sale.",
          caseName: v.cases[1],
          caseDetail: "Semantic + spec-equivalence search with B2B ranking.",
          roi: "AI search converts ~1.67× keyword.",
          whatI95Does: "Stand up semantic search with eligibility and inventory-aware ranking.",
          credibility: "verified",
        },
        {
          id: "pim",
          pillar: "foundation",
          title: "AI product-data foundation",
          problem: "30–60% of B2B catalogs have incomplete attributes, which kills search, AEO and agentic readiness.",
          caseName: v.cases[2],
          caseDetail: "GenAI bulk-enrichment with human-in-the-loop approval.",
          roi: "Up to 60% less manual data time; unlocks every downstream play.",
          whatI95Does: "Build the PIM→schema pipeline that feeds every other capability.",
          credibility: "illustrative",
        },
      ],
      why: {
        opener: "You'll be sold a $3M transformation. Your problem might be a six-week fix.",
        body: `The Big-4 are built for enterprise-wide change. i95Dev's lane is surgical, deep in commerce and ERP, data-foundation first, on mid-market economics, the right shape for ${companyName}.`,
        ctaTitle: "Book your AI-in-Commerce Diagnostic",
        ctaSubtitle:
          "A fixed-scope, fixed-fee readiness assessment that validates these directional numbers against your real data.",
        credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
      },
    },
  };
}
