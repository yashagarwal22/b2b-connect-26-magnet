import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  ibm: { label: "IBM, 1,200 Salesforce customers", url: "https://www.ibm.com/" },
  ibmData: { label: "IBM, ~26% of customer data in Salesforce (research dump Part 1.1)", url: "https://www.ibm.com/" },
  reagent: { label: "Reagent expiry write-off ~30% on $50M = $2–4M (research dump Part 2.4)", url: "https://www.bio-rad.com/" },
  brf: { label: "BRF SAP IBP demand sensing, -33% planning time", url: "https://www.sap.com/" },
  cdp: { label: "CDP lifts ABM efficiency 20–40%, retention 10–25% (research dump Part 4.7)", url: "https://www.bio-rad.com/" },
  millipore: { label: "MilliporeSigma, approved-list reorder for technical buyers (research dump Part 3.4)", url: "https://www.milliporesigma.com/" },
  specialist: { label: "Big-4 $3M/8-mo vs 6-week specialist fix (research dump Part 5.4)", url: "https://www.bio-rad.com/" },
} as const;

/**
 * Bio-Rad Laboratories, a data-foundation-and-CDP account (no-budget influencer champion, multi-thread
 * to the economic buyer). Every section is grounded in the Account-360 profile and the AI research dump,
 * and maps 1:1 to companies/bio-rad/bio-rad-spec.md.
 *
 * Spine: Bio-Rad is digitizing its customer touchpoints with a CDP, and the CDP will only pay if the
 * data underneath it is unified first. Harmeet Arora (Head of Marketing Analytics) is driving the CDP
 * plus marketing automation while the company is mid-SAP-transformation, with Syniti running data
 * migration and Kinaxis modernizing supply chain. The trap is sequence: a CDP unifies whatever you feed
 * it, gaps included, and 53% of failed AI initiatives blame data quality. Unify the first-party data on
 * the SAP and Syniti foundation already underway, then light up the CDP. The moat is the direct
 * relationship with the labs, hospitals and researchers who reorder Bio-Rad's reagents and controls,
 * which Thermo Fisher and Agilent cannot copy. Write to Harmeet Arora, an influencer who holds no
 * personal budget, so multi-thread to the economic buyer, the CMO, CDO or CIO. Guardrails: keep the
 * first scope modest, do not pitch a CDP rip-and-replace, do not pitch an SAP swap (the Syniti migration
 * is the foundation to build on), and keep claims compliance-aware for regulated life science.
 */
export const bioRad: AccountConfig = {
  slug: "bio-rad",
  companyName: "Bio-Rad Laboratories",
  aliases: [
    "Bio-Rad",
    "Bio Rad",
    "Bio-Rad Laboratories, Inc.",
    "BIO",
  ],
  domains: ["bio-rad.com"],
  vertical: "life-sciences",
  verticalLabel: "Life-science research and clinical diagnostics",
  revenueBand: "$350M+",
  role: "Head of Marketing Analytics",
  roleEmphasis: "ai-strategy",
  activeRequirement: true,
  published: true,

  thesis: "A CDP does not fix your data. It inherits it.",
  wedge:
    "Unify the customer data first, so the CDP you are implementing actually pays",
  wedgeDetail:
    "53% of AI initiatives fail on data quality, and a CDP sitting on siloed SAP, Salesforce and Marketo data inherits every gap. Unify the first-party data feeding it, on the SAP and Syniti foundation already underway, and the CDP, the marketing automation and the customer touchpoints all start working at once.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone is selling you a CDP. The CDP is the shelf. The data is what has to be true.",
    stat: "53%",
    statSource: SRC.ibm,
    body: "53% of failed AI initiatives blame data quality, not the model, and a CDP is the clearest example: it unifies whatever you feed it, gaps included. Bio-Rad is already doing the foundational work, migrating SAP with Syniti and modernizing supply chain with Kinaxis. Point the CDP at that same cleaned, unified first-party data, and AI runs on the asset Thermo Fisher and Agilent cannot copy: a direct relationship with the labs, hospitals and researchers who reorder your reagents and controls.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI buys a CDP. Compounding AI unifies the data the CDP needs to matter.",
    commodity: [
      "A CDP switched on over siloed data",
      "Marketing automation blind to purchase history",
      "Generic content generation for outbound",
      "An \"AI strategy\" deck instead of unified data",
    ],
    compounding: [
      "First-party data unified across SAP, SFDC, Marketo",
      "A CDP fed by clean reorder and account data",
      "Demand sensing for short-shelf-life reagents",
      "Marketing automation tied to real LTV",
    ],
    pitchWarning:
      "On Salesforce, Marketo, Adobe and BigCommerce, with a CDP underway, expect a pitch to light up activation features before the data is unified. Only about 26% of companies have most customer data in Salesforce; the rest is scattered. Activation on partial data targets partially and models churn with gaps. Unify first. The features are cheap once the data is true.",
  },

  // ── Module 2.5, Your Stack (verified dashboard research; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "SAP (transformation via Syniti)",
      leadPlay: "Make the SAP and Syniti cleanup the same foundation the CDP draws from",
      commodityFlag: "Two separate data projects. Unify once, feed both.",
    },
    {
      signal: "Salesforce + Marketo",
      leadPlay: "Tie campaigns to reorder and account data instead of list sends",
      commodityFlag: "More automation seats. The unlock is unified first-party data.",
    },
    {
      signal: "Kinaxis (supply chain)",
      leadPlay: "Feed demand sensing for short-shelf-life reagents off real signals",
      commodityFlag: "Generic forecasting. Reagent expiry data is the moat.",
    },
    {
      signal: "BigCommerce + Adobe Analytics/Target",
      leadPlay: "Connect web behavior to purchase data for true account profiles",
      commodityFlag: "More testing tools. The unlock is identity across systems.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "cdp-clean", label: "CDP fed by clean data", compounding: 0.8, bolton: 0.7, magnitude: 4, lit: true, wedge: true },
    { id: "data-unification", label: "First-party data unification", compounding: 0.86, bolton: 0.55, magnitude: 4, lit: true },
    { id: "automation-ltv", label: "Marketing automation on LTV", compounding: 0.78, bolton: 0.68, magnitude: 3, lit: true },
    { id: "demand-sensing", label: "Demand sensing (reagents)", compounding: 0.75, bolton: 0.45, magnitude: 4, lit: true },
    { id: "abm-personalization", label: "Account-based personalization", compounding: 0.82, bolton: 0.55, magnitude: 3, lit: true },
    { id: "aeo", label: "AEO + answer layer", compounding: 0.88, bolton: 0.72, magnitude: 3, lit: true },
    { id: "cdp-siloed", label: "CDP over siloed data", compounding: 0.3, bolton: 0.85, magnitude: 1, lit: false },
    { id: "content-gen", label: "AI content gen at scale", compounding: 0.2, bolton: 0.85, magnitude: 1, lit: false },
    { id: "ml-forecasting", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [1, 4],
    moneyPools: [
      {
        id: "working-capital",
        label: "Working capital: demand sensing on short-shelf-life reagents",
        range: [1, 3],
        note: "Reagents and controls expire, so demand sensing on Bio-Rad's own order history reduces expiry write-offs and frees working capital. The life-sciences pattern cuts expiry write-offs by roughly 30%, which on a $50M inventory is $2 to 4M.",
        credibility: "verified",
        source: SRC.reagent,
      },
      {
        id: "marketing-efficiency",
        label: "Marketing efficiency: activation on unified data",
        range: [0.3, 1],
        note: "CDP activation lifts ABM efficiency 20 to 40% and sales productivity 15 to 30%, but only on unified data. Unifying first, then activating, is what converts the CDP spend into efficiency.",
        credibility: "verified",
        source: SRC.cdp,
      },
      {
        id: "retention",
        label: "Retention: better churn and reorder models",
        range: [0.2, 0.5],
        note: "Clean, unified first-party data improves churn and reorder models on the recurring reagent base, lifting retention 10 to 25% in CDP benchmarks.",
        credibility: "verified",
        source: SRC.cdp,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Unify first-party data for one product line",
        body: "Unify the first-party data for one product line on the SAP and Syniti foundation, the prerequisite the CDP depends on. This is the wedge, and it gives the no-budget champion a fundable ask.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Feed the CDP and run one activation test",
        body: "Light up the CDP on the unified data and prove one activation, while multi-threading to the economic buyer for budget.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Demand sensing for reagents",
        body: "Demand sensing on the short-shelf-life reagent base to free working capital, the highest-magnitude pool. MilliporeSigma's approved-list reorder is the life-science analog.",
      },
      {
        phase: "Phase 4, the foundation",
        title: "Marketing automation on real LTV",
        body: "Automation tied to unified purchase and reorder data, not list sends. The data work begins in Phase 1 and matures here.",
      },
    ],
    // ── The play shortlist, data foundation first, then operations, then activation ──
    plays: [
      // DATA FOUNDATION
      {
        id: "data-unification",
        pillar: "foundation",
        title: "First-party data unification",
        problem:
          "Customer data is siloed across SAP, Salesforce and Marketo, and the CDP will inherit the gaps.",
        caseName: "IBM",
        caseDetail:
          "Only about 26% of companies have most customer data in Salesforce; 53% of AI failures blame data.",
        roi: "Unification gates the ROI of the CDP and every downstream feature.",
        whatI95Does:
          "Unify first-party data on the SAP and Syniti foundation, feeding the CDP.",
        credibility: "verified",
        source: SRC.ibm,
      },
      {
        id: "cdp-clean",
        pillar: "foundation",
        title: "CDP fed by clean data",
        problem:
          "A CDP on siloed data targets partially and models churn with holes.",
        caseName: "Research dump, Part 4.7",
        caseDetail:
          "CDP activation lifts ABM efficiency 20 to 40%, but only on unified data.",
        roi: "The CDP spend finally converts to efficiency once the data is clean.",
        whatI95Does:
          "Stand up CDP activation on the unified data, with one proof use case.",
        credibility: "verified",
        source: SRC.cdp,
      },
      // OPERATIONS
      {
        id: "demand-sensing",
        pillar: "back-office",
        title: "Demand sensing for short-shelf-life reagents",
        problem:
          "Reagents expire, and forecasting on history alone misses the signal.",
        caseName: "BRF, SAP IBP",
        caseDetail:
          "The life-science pattern cuts expiry write-offs by roughly 30%; BRF's SAP IBP cut planning time 33%.",
        roi: "Freed working capital on the highest-magnitude pool.",
        whatI95Does:
          "Demand sensing on Bio-Rad order data, on the SAP and Kinaxis base.",
        credibility: "verified",
        source: SRC.brf,
      },
      // ACTIVATION
      {
        id: "automation-personalization",
        pillar: "sales-marketing",
        title: "Marketing automation and account personalization on LTV",
        problem:
          "Automation runs on list sends, not real purchase and reorder data.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma runs approved-list reorder on account data as the life-science analog.",
        roi: "Higher retention and reorder on the recurring base.",
        whatI95Does:
          "Tie automation and personalization to the unified LTV data.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
    ],
    why: {
      opener: "You'll be sold a CDP. Your gain is the data that makes it worth having.",
      body: "Vendors will sell activation features before the data is unified, and a CDP on siloed data is an expensive disappointment. Your real work is unifying first-party data on the SAP and Syniti foundation you are already funding, then feeding the CDP. That is exactly i95Dev's lane: data integration and the commerce-to-ERP seam, surgical and priced for a contained first scope. We will be honest that the attendee holds no budget, so we will help build the case to the CMO, CDO or CIO who can fund it.",
      ctaTitle: "Book your CDP-Readiness and Data-Foundation Diagnostic",
      ctaSubtitle:
        "A fixed-scope assessment that maps the first-party data unification the CDP needs, sizes the reagent demand-sensing upside, and builds the funding case for the economic buyer. Weeks, not a program.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
