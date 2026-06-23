import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  danaher: { label: "Danaher to acquire Masimo ~$9.9B, close H2 2026 (SEC filings, Account 360)", url: "https://www.sec.gov/" },
  recurring: { label: "80%+ recurring, 98%+ renewal (SEC 8-K, Account 360)", url: "https://www.sec.gov/" },
  trustedBuyers: { label: "Serving trusted buyers beats marketing to strangers (Research dump, Part 4.5)", url: "https://i95dev.com/" },
  propensity: { label: "Propensity / next-best-action production-ready (Research dump, Part 4.3)", url: "https://i95dev.com/" },
  cdp: { label: "CDP activation lifts retention only on unified data (Research dump, Part 4.7)", url: "https://i95dev.com/" },
  specialist: { label: "Big-4 $3M/8-mo vs 6-week specialist fix (Research dump, Part 5.4)", url: "https://i95dev.com/" },
} as const;

/**
 * Masimo, a nurture account gated by a pending acquisition. Every section is grounded in the
 * Account-360 profile and the AI research dump, and maps 1:1 to companies/masimo/masimo-spec.md.
 *
 * Spine: Masimo's advantage is the data under a razor-and-blade healthcare business, and a pending
 * acquisition means the only fundable move is the one that runs on that data and survives the close.
 * It is an 80%-plus recurring, 98%-renewal sensor business, now agreed to be acquired by Danaher for
 * about $9.9B, close expected H2 2026, which freezes net-new IT and marketing spend. The honest
 * counsel is not to push a platform. It is to ship one small thing that pays now and travels into the
 * new org. The asset that travels is the first-party data: who reorders, how often, which hospital,
 * which protocol, on a 98%-renewal base. Activate that inside the budget Apoorva Jayaram (Director,
 * Strategic Marketing, up to ~$250k) already controls, and it can become a reference inside the
 * Danaher portfolio, which already includes IDT. Guardrails: nurture, do not push; do not pitch a
 * net-new platform mid-acquisition; the only safe spend runs on data Masimo already owns. This is
 * regulated medtech for vulnerable patients, so keep every line sober and never overpromise.
 */
export const masimo: AccountConfig = {
  slug: "masimo",
  companyName: "Masimo",
  aliases: [
    "Masimo Corporation",
    "SET pulse oximetry",
    "rainbow",
    "Masimo SafetyNet",
  ],
  domains: ["masimo.com"],
  vertical: "life-sciences",
  verticalLabel: "Medical technology (patient monitoring, hospital automation)",
  revenueBand: "~$1.5B",
  role: "Director, Strategic Marketing",
  roleEmphasis: "ai-strategy",
  activeRequirement: false,
  published: true,

  thesis: "A pending acquisition freezes the big bets. Ship the small one that travels with you.",
  wedge:
    "One contained first-party customer-data win, sized to the $250k you control, that survives the close",
  wedgeDetail:
    "Net-new platform spend will freeze until Danaher closes. A first-party-data and CX proof-of-value runs on data you already own, fits the marketing envelope you control, and becomes a reference inside the Danaher portfolio, which already includes IDT.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone is selling you transformation. A company mid-acquisition cannot buy one, and should not try.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L, and a pending acquisition is the worst possible moment to join them with a platform bet. Masimo's advantage is not a new system. It is the data underneath an 80%-plus recurring, 98%-renewal sensor business: who reorders, how often, which hospital, which protocol. Activate that first-party data inside the marketing budget you already control, and it pays now and travels into Danaher later, where IDT already sits.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI asks you to buy a platform. Compounding AI asks you to use the data you already have.",
    commodity: [
      "A net-new martech platform mid-acquisition",
      "A chatbot bolted on an informational B2B site",
      "Generic content generation for outbound",
      "An \"AI strategy\" deck the integration will overwrite",
    ],
    compounding: [
      "First-party reorder and account data, activated",
      "CX signals from a 98%-renewal base",
      "A contained proof-of-value inside $250k",
      "A reference that travels into the Danaher portfolio",
    ],
    pitchWarning:
      "On Salesforce, Oracle and Microsoft, expect a pitch to stand up a new platform before the deal closes. Danaher will bring its own systems and the Danaher Business System. Anything bought net-new now risks being ripped out. The only safe spend is work that runs on data you already own and produces a result you can carry into the new org.",
  },

  // ── Module 2.5, Your Stack (attendee-implied stack; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Salesforce (CRM / marketing)",
      leadPlay: "Activate first-party reorder and account data already sitting in CRM",
      commodityFlag: "A new CDP license mid-acquisition. Use the data you have.",
    },
    {
      signal: "Oracle (ERP / financials)",
      leadPlay: "Bridge reorder and consumable data into marketing for true LTV signals",
      commodityFlag: "An ERP project the integration will redo. Read, do not rebuild.",
    },
    {
      signal: "Microsoft / Azure",
      leadPlay: "Run a contained proof-of-value on infrastructure already approved",
      commodityFlag: "A net-new cloud commitment. Stay inside what is sanctioned.",
    },
    {
      signal: "80%+ recurring sensor base",
      leadPlay: "Model reorder timing and account expansion on owned data",
      commodityFlag: "Generic acquisition tooling. The installed base is the moat.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "first-party", label: "First-party data activation", compounding: 0.8, bolton: 0.72, magnitude: 3, lit: true, wedge: true },
    { id: "reorder", label: "Reorder / consumable propensity", compounding: 0.78, bolton: 0.55, magnitude: 3, lit: true },
    { id: "cx", label: "CX signal on installed base", compounding: 0.75, bolton: 0.6, magnitude: 2, lit: true },
    { id: "abm", label: "Account-based personalization", compounding: 0.82, bolton: 0.45, magnitude: 3, lit: true },
    { id: "platform", label: "New martech platform (mid-deal)", compounding: 0.5, bolton: 0.4, magnitude: 2, lit: false },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "content", label: "AI content gen at scale", compounding: 0.2, bolton: 0.85, magnitude: 1, lit: false },
    { id: "forecasting", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [0.5, 2],
    moneyPools: [
      {
        id: "reorder",
        label: "Reorder lift: propensity on a 98%-renewal base",
        range: [0.3, 1],
        note: "The recurring sensor business is the asset. A reorder-propensity model on owned Salesforce and Oracle data surfaces account expansion and reorder timing, lifting revenue on a base that already renews at 98%.",
        credibility: "illustrative",
        source: SRC.propensity,
      },
      {
        id: "cx",
        label: "CX efficiency: serve the installed base better",
        range: [0.2, 0.5],
        note: "First-party CX signals on the installed base improve targeting and service without a new platform, inside the marketing envelope. The constraint is data activation, not new tooling.",
        credibility: "illustrative",
        source: SRC.cdp,
      },
      {
        id: "option",
        label: "Option value: a Danaher-portfolio reference",
        range: [0, 0],
        note: "A contained, successful, owned-data win becomes a reference inside the Danaher portfolio, where IDT, a higher-fit target, already sits. This is option value, not a sized pool, and it is the real long-game reason to engage now.",
        credibility: "verified",
        source: SRC.danaher,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "A contained reorder-propensity model",
        body: "A first-party reorder-propensity model on owned Salesforce and Oracle data, with one campaign test, inside the $250k Jayaram controls. This is the wedge, and it runs on no new platform.",
        active: true,
      },
      {
        phase: "Phase 2, through close",
        title: "Nurture",
        body: "Build the relationship and expect most decisions to pause until the Danaher deal closes. Do not push net-new spend that the integration will overwrite.",
      },
      {
        phase: "Phase 3, post-close",
        title: "Travel with it",
        body: "Position the result as a Danaher-portfolio reference. IDT, a higher-fit target, is in the same portfolio, which is where this relationship compounds.",
      },
    ],
    // ── The play shortlist, owned-data and contained across first-party data and CX ──
    plays: [
      {
        id: "first-party",
        pillar: "sales-marketing",
        title: "First-party data activation",
        problem:
          "A new platform cannot be justified mid-acquisition, but the owned customer data is underused.",
        caseName: "98%-renewal installed base",
        caseDetail:
          "The category truth that serving trusted buyers beats marketing to strangers, on a 98%-renewal base.",
        roi: "Revenue lift on an already-loyal base, with no new platform spend.",
        whatI95Does:
          "Activate first-party reorder and account data already in Salesforce and Oracle, inside the $250k.",
        credibility: "illustrative",
        source: SRC.cdp,
      },
      {
        id: "reorder",
        pillar: "sales-marketing",
        title: "Reorder and consumable propensity",
        problem:
          "Reorder timing and account expansion are not modeled, despite 98% renewal.",
        caseName: "Propensity and next-best-action",
        caseDetail:
          "Propensity and next-best-action on transaction data is production-ready.",
        roi: "Earlier, better-timed expansion on the recurring base.",
        whatI95Does:
          "A reorder-propensity model on owned data, surfaced as rep or campaign alerts.",
        credibility: "illustrative",
        source: SRC.propensity,
      },
      {
        id: "cx",
        pillar: "sales-marketing",
        title: "CX signal on the installed base",
        problem:
          "CX signals from the installed base are not fully used to target and serve.",
        caseName: "CDP-style activation",
        caseDetail:
          "CDP-style activation lifts retention and efficiency, but only on unified, owned data.",
        roi: "Better service and targeting within the existing envelope.",
        whatI95Does:
          "Unify and activate installed-base CX signals on approved infrastructure.",
        credibility: "illustrative",
        source: SRC.cdp,
      },
    ],
    why: {
      opener: "You'll be sold a platform you cannot keep. Your gain is the data win that travels.",
      body: "Vendors will pitch net-new platforms before the deal closes, and the integration will overwrite them. Your fundable move is a contained, owned-data win on the Salesforce, Oracle and Microsoft footprint you already run, inside the $250k you control. That is exactly i95Dev's lane: surgical data and CX work on the commerce-to-ERP seam, priced for a contained pilot. We will be honest that this is a nurture account, and that the real prize is a relationship that travels into the Danaher portfolio, where IDT already sits.",
      ctaTitle: "Book your First-Party-Data Diagnostic",
      ctaSubtitle:
        "A fixed-scope, $250k-sized assessment that finds one owned-data win on Masimo's existing systems and sizes the reorder and CX upside, with no net-new platform. Weeks, not a program.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
