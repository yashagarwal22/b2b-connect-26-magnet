import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  mckinsey: { label: "McKinsey B2B pricing, $15B distributor +200bps then +50bps in 10 weeks", url: "https://www.mckinsey.com/" },
  generalMills: { label: "General Mills, $20M+ verified AI savings (CIO Dive)", url: "https://www.ciodive.com/" },
  johnsonControls: { label: "Johnson Controls, $100M+ protectable, $35M per attrition point", url: "https://www.johnsoncontrols.com/" },
  greifPoc: { label: "Greif / Valtech two-week GenAI PoC, unbilled value-added services", url: "https://www.greif.com/" },
  jpw: { label: "JPW Industries, order processing 16–24h to under 1h (Salesforce)", url: "https://www.salesforce.com/" },
  dawn: { label: "Dawn Foods, composable commerce on commercetools and Algolia (DC360)", url: "https://www.dawnfoods.com/" },
  kawasaki: { label: "Kawasaki Engines USA, ERP-connected B2B AOV +5x (DC360)", url: "https://www.salesforce.com/" },
  resilinc: { label: "Resilinc / Everstream, 60–90 day supplier-risk warnings", url: "https://www.resilinc.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
} as const;

/**
 * Greif, Inc., a co-motion account (just-divested pure-play with an ERP replacement in flight). Every
 * section is grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/greif/greif-spec.md.
 *
 * Spine: Greif just became a different company and has not rebuilt its plumbing for it yet. In Sept 2025
 * it sold containerboard to PCA for $1.8B, paid down ~$1.4B in debt, and became a focused $3.5–4B pure-play
 * in industrial packaging. It runs commerce on Greif+, a custom B2B portal, alongside legacy cstarbiz EDI,
 * all on Infor LN, an ERP it is now actively evaluating for replacement. An ERP replacement is a once-in-a-decade
 * event: re-lay the commerce layer, integration seams and customer data in the same motion instead of bolting on
 * twice. Write to Jatinder Singh (VP Digital & Data Transformation, champion), with Vivian Bouet (CIDO) above him.
 * Guardrails: do not claim a native Infor LN connector, i95Dev has none and Singh will know it; the play is to
 * engage during the evaluation and land when Greif picks SAP or D365, i95Dev's native set. Candor is the credibility.
 */
export const greif: AccountConfig = {
  slug: "greif",
  companyName: "Greif",
  aliases: [
    "Greif, Inc.",
    "GEF",
    "GEF.B",
    "Greif+",
    "cstarbiz",
  ],
  domains: ["greif.com", "plus.greif.com"],
  vertical: "manufacturing",
  verticalLabel: "Global industrial packaging",
  revenueBand: "$3.5–4B",
  role: "VP Digital & Data Transformation",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You are replacing the ERP. Re-lay commerce with it, not after it.",
  wedge:
    "ERP co-motion: engage during the replacement evaluation and bring customer-onboarding automation as the first proof",
  wedgeDetail:
    "The onboarding journey already spans ERP, supply chain, finance and credit with no owner, and Singh rates the whole experience 3 to 4 out of 10. It is the highest-frequency, highest-friction seam, and it is the exact seam an ERP-integrated commerce layer is built to close. Fixing it proves the co-motion thesis on a real, named pain before the ERP winner is even chosen, and it sidesteps the honesty problem: we are not selling an Infor connector, we are solving a workflow and earning the right to be in the room when SAP or D365 is chosen.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. The rarest thing in your room is not a model. It is a system of record in play.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit next to the work instead of inside it, because the data and the systems underneath were never re-laid for them. You are about to re-lay yours. The ERP replacement is the one moment a 148-year-old company gets to rebuild the foundation under commerce, data and onboarding at the same time. The edge is not a better model. It is doing the commerce work in the same motion, on a real platform with real connectors, instead of rebuilding Greif+ a second time the day the new ERP goes live.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the systems you are already rebuilding.",
    commodity: [
      "A chatbot bolted onto Greif+",
      "A generic ERP copilot you wait 18 months for",
      "GenAI product copy no buyer asked for",
      "ML forecasting relabeled \"AI\"",
    ],
    compounding: [
      "Onboarding automation across ERP, credit and supply chain",
      "Commerce re-laid in the same motion as the ERP, with connectors",
      "GenAI that recovers unbilled value-added services from plant notes",
      "Demand sensing tied to your real order history across 31 countries",
    ],
    pitchWarning:
      "You are mid-ERP-evaluation, so expect a pitch for a custom Greif+ rebuild and a separate AI \"strategy\" engagement, both billed before the ERP winner is even chosen. Skip both. The custom portal is the thing to retire, not extend, and the AI work is worthless until the foundation underneath it is the one you are about to choose.",
  },

  // ── Module 2.5, Your Stack (verified dashboard research; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Infor LN, under replacement evaluation",
      leadPlay: "Co-motion: re-lay commerce and integration when the ERP lands. We do not pretend to have an Infor connector. We win when you pick SAP or D365",
      commodityFlag: "A standalone ERP \"assessment\" deck. The unlock is sequencing commerce with the decision, not after it.",
    },
    {
      signal: "Greif+ custom portal",
      leadPlay: "Move the next build (EMEA) onto a real platform plus connectors, so you stop maintaining bespoke code forever",
      commodityFlag: "A custom Greif+ rebuild. The custom build is the liability, not the asset to extend.",
    },
    {
      signal: "cstarbiz legacy EDI",
      leadPlay: "Consolidate EDI and portal ordering into one connected order journey",
      commodityFlag: "\"Keep both, add a third channel.\" The unlock is fewer order paths, not more.",
    },
    {
      signal: "AI Foundry (internal GenAI)",
      leadPlay: "Point it at the onboarding seam and the unbilled-services margin, both already proven in PoC",
      commodityFlag: "More PoCs that never reach production. ~95% of pilots return nothing; the gap is the last mile, not the model.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "onboarding", label: "Onboarding automation (ERP co-motion)", compounding: 0.9, bolton: 0.82, magnitude: 4, lit: true, wedge: true },
    { id: "erp-order-mgmt", label: "ERP-integrated order management", compounding: 0.88, bolton: 0.45, magnitude: 5, lit: true },
    { id: "emea-greif-plus", label: "EMEA Greif+ on a real platform", compounding: 0.8, bolton: 0.7, magnitude: 4, lit: true },
    { id: "vas-recovery", label: "Unbilled value-added-services recovery", compounding: 0.85, bolton: 0.66, magnitude: 3, lit: true },
    { id: "pricing", label: "Pricing / margin enforcement", compounding: 0.9, bolton: 0.4, magnitude: 5, lit: true },
    { id: "cross-sell", label: "Cross-sell / next-best-action", compounding: 0.82, bolton: 0.55, magnitude: 4, lit: true },
    { id: "demand-risk", label: "Demand sensing + supplier risk", compounding: 0.7, bolton: 0.34, magnitude: 3, lit: true },
    { id: "pim", label: "AI PIM / master data foundation", compounding: 0.85, bolton: 0.28, magnitude: 3, lit: true },
    { id: "erp-copilot", label: "Generic ERP copilot", compounding: 0.18, bolton: 0.88, magnitude: 1, lit: false },
    { id: "chatbot", label: "Chatbot on the portal", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "ml-forecasting", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [12, 35],
    moneyPools: [
      {
        id: "margin",
        label: "Margin: pricing you negotiated, enforced across 31 countries",
        range: [4, 14],
        note: "Distributors and manufacturers lose 1 to 2% of margin to quote drift and discount creep across thousands of accounts. A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI. On a $3.5–4B base, 100 to 200 basis points enforced is the single biggest pool on the table, and it lands once the new ERP gives pricing one clean rail instead of fragmented ones.",
        credibility: "verified",
        source: SRC.mckinsey,
      },
      {
        id: "working-capital",
        label: "Working capital: inventory freed by demand sensing",
        range: [3, 10],
        note: "Demand sensing on real order history frees roughly 10 to 12% of inventory working capital. General Mills booked $20M-plus in verified savings running AI across 5,000-plus daily shipments. Greif runs drums and IBCs across 250-plus facilities in 31 countries, exactly the asset-heavy, repeat-order footprint where sensing pays. The ERP replacement is the moment to wire it to a clean planning rail.",
        credibility: "verified",
        source: SRC.generalMills,
      },
      {
        id: "installed-base",
        label: "Installed base: defend repeat orders against Mauser and Schutz",
        range: [3, 7],
        note: "Selling to buyers who already trust you is 5 to 7x cheaper than new logos, and cross-sell converts 3 to 4x more often. Greif's volume is repeat ordering against blanket POs, which is precisely the base that propensity and next-best-action defend. Johnson Controls tracked $100M-plus of protectable revenue this way, $35M per point of attrition.",
        credibility: "verified",
        source: SRC.johnsonControls,
      },
      {
        id: "recovered-value",
        label: "Recovered value: unbilled services and onboarding friction",
        range: [2, 4],
        note: "Greif's own two-week GenAI proof of concept read decades of free-text plant notes and surfaced value-added services that were performed but never billed, margin eroding in plain sight. Scale that, and pair it with onboarding automation that ends the 3 to 4 out of 10 first impression Singh described. The onboarding fix is symbolic as much as financial: for a 148-year-old firm, the first interaction sets the tone for the whole relationship.",
        credibility: "verified",
        source: SRC.greifPoc,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "ERP co-motion and onboarding automation",
        body: "Engage during the ERP evaluation as the commerce-and-integration voice in the room, and prove it on the onboarding pain Singh named: one owner, one connected journey across ERP, supply chain, finance and credit, real visibility for the customer. It runs on a workflow and data problem you can start before the ERP winner is chosen. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "EMEA Greif+ on a real platform plus connectors",
        body: "The portal's next expansion is EMEA, owned by Michael Vvedenskiy. Build it on a commercial platform with prebuilt ERP connectors instead of extending the custom estate. This is the proof that re-laying beats rebuilding, on a live rollout with a named owner.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "ERP-integrated order management and pricing on the new rail",
        body: "Once the ERP winner is in motion and i95Dev's native connectors apply, wire order management and account-based pricing through it. This is the biggest dollar pool, and it is exactly why it waits for the foundation rather than leading.",
      },
      {
        phase: "Phase 4, back office and the agentic bet",
        title: "Demand sensing, supplier risk, agentic readiness",
        body: "Layer demand sensing and multi-tier supplier risk onto the new planning rail, and make the catalog machine-purchasable for AI buyers. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, decision-aligned and connector-first across commerce, margin and the installed base ──
    plays: [
      // COMMERCE AND INTEGRATION
      {
        id: "onboarding",
        pillar: "storefront",
        title: "Customer-onboarding automation across ERP, supply chain, finance and credit",
        problem:
          "Onboarding has no single owner and no customer visibility. Singh rates it a three out of ten, and a 148-year-old franchise greets every new account with its weakest moment.",
        caseName: "JPW Industries, Salesforce",
        caseDetail:
          "JPW Industries cut order processing from 16 to 24 hours to under one hour with Salesforce Agentforce by automating intake across channels. The same orchestration logic ends the onboarding handoff problem.",
        roi: "Collapsing the cross-functional handoffs turns a multi-week, no-owner process into a tracked journey measured in hours, and the first win the champion can show his own board.",
        whatI95Does:
          "Build the connected onboarding workflow across ERP, credit and supply chain with one owner and customer-facing status, designed to ride onto whichever ERP Greif selects.",
        credibility: "illustrative",
        source: SRC.jpw,
      },
      {
        id: "emea-greif-plus",
        pillar: "storefront",
        title: "EMEA Greif+ on a real platform plus connectors",
        problem:
          "Greif+ is custom-built. Every region added is more bespoke code to maintain forever, and the next region is EMEA.",
        caseName: "Dawn Foods",
        caseDetail:
          "Dawn Foods, an ingredient wholesaler, ran composable commerce on commercetools and Algolia: 75%-plus digital adoption, 30% faster time-to-order, triple-digit online growth. Built on a platform, not a custom estate.",
        roi: "A platform-plus-connector build is cheaper to extend per region and survives the ERP change, where a custom rebuild has to be re-integrated the day the new ERP lands.",
        whatI95Does:
          "Stand up the EMEA expansion on a commercial B2B platform with prebuilt ERP connectors, so Greif stops paying to maintain bespoke portal code.",
        credibility: "verified",
        source: SRC.dawn,
      },
      {
        id: "erp-order-mgmt",
        pillar: "storefront",
        title: "ERP-integrated order management and account-based pricing",
        problem:
          "Repeat ordering against blanket POs across 31 countries, with pricing and entitlement logic fragmented across the legacy estate. The new ERP is the chance to make it one rail.",
        caseName: "Kawasaki Engines USA, MilliporeSigma",
        caseDetail:
          "Kawasaki Engines USA grew AOV 5x after launching ERP-connected B2B ordering with automated intake. MilliporeSigma runs account-based entitlement and reorder on approved lists.",
        roi: "Cutting rep-assisted and manual orders saves several million a year at Greif's scale, and it is the rail every other commerce play runs on.",
        whatI95Does:
          "Wire order management and contract pricing through the new ERP via native connectors once the winner is chosen, the highest-dollar play and the reason it sits in Phase 3.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      // OPERATIONS AND MARGIN
      {
        id: "vas-recovery",
        pillar: "back-office",
        title: "Unbilled value-added-services recovery from plant notes",
        problem:
          "Across the global plant network, hundreds of value-added services are captured in free-text notes in different languages and formats, and many go untracked and unbilled. Margin erodes in plain sight.",
        caseName: "Greif AI Foundry PoC",
        caseDetail:
          "This one is Greif's own. A two-week GenAI proof of concept read decades of unstructured notes and surfaced the missed services, turning scattered text into structured, billable insight.",
        roi: "Scaling a PoC that already worked is the lowest-risk margin recovery on the list, because the proof exists internally.",
        whatI95Does:
          "Productionize the AI Foundry PoC from demo to governed, in-production workflow that surfaces missed services for billing, the last mile that 95% of pilots never cross.",
        credibility: "verified",
        source: SRC.greifPoc,
      },
      {
        id: "pricing",
        pillar: "back-office",
        title: "AI pricing and margin enforcement",
        problem:
          "On a $3.5–4B base, 1 to 2% margin leakage to quote drift and discount creep is $35–80M of exposure, spread across fragmented systems.",
        caseName: "McKinsey $15B distributor, PROS / Wilbur-Ellis",
        caseDetail:
          "A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI. PROS and Wilbur-Ellis added 2% on 6,000 SKUs.",
        roi: "100 to 200 basis points enforced is the biggest near-pure-margin pool on the table, realized once the new ERP gives pricing one clean rail.",
        whatI95Does:
          "Account-specific price recommendations and discount-corridor enforcement wired through the new ERP, not consumer-style dynamic pricing but enforcing what Greif already negotiated.",
        credibility: "verified",
        source: SRC.mckinsey,
      },
      {
        id: "demand-risk",
        pillar: "back-office",
        title: "Demand sensing and multi-tier supplier risk",
        problem:
          "Drums and IBCs across 250-plus facilities, with raw-material supply that swings on a single plant or shipping disruption. Classic forecasting misses the signal until the stockout.",
        caseName: "General Mills, Resilinc / Everstream",
        caseDetail:
          "General Mills booked $20M-plus in verified savings on AI across 5,000-plus daily shipments. Supplier-risk networks like Resilinc and Everstream give 60 to 90 day advance warnings and 30 to 40% faster response.",
        roi: "Demand sensing frees roughly 10 to 12% of inventory working capital; supplier-risk intelligence is asymmetric insurance at roughly $200–500K a year, avoiding 1 to 2 events a year worth $2–10M each.",
        whatI95Does:
          "Layer demand sensing and supplier-risk signals onto the new planning rail so planners see disruption before it hits the line.",
        credibility: "verified",
        source: SRC.resilinc,
      },
      // SALES AND INSTALLED BASE
      {
        id: "cross-sell",
        pillar: "sales-marketing",
        title: "Cross-sell propensity and next-best-action",
        problem:
          "Mauser, Schutz and Berry compete for the same accounts. Greif's defensible margin is the buyers who already reorder against blanket POs, but reorder timing and white-space cross-sell stay manual until an account drifts.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls propensity and whitespace models tracked $100M-plus of protectable revenue, $35M per attrition point, and unlocked $40M from 23 accounts. Whitespace-managed accounts grow 9% versus 5 to 6%.",
        roi: "8 to 12 points of net revenue retention, 15 to 30% churn reduction, $4–7 returned per $1. The highest-leverage defense of the installed base.",
        whatI95Does:
          "Churn and cross-sell propensity on Greif's order history, surfaced as rep alerts and on-portal reorder nudges, wired to the new CRM and ERP.",
        credibility: "verified",
        source: SRC.johnsonControls,
      },
      // FOUNDATION
      {
        id: "pim",
        pillar: "foundation",
        title: "AI master data and PIM, the foundation under all of it",
        problem:
          "87% of leaders say bad data has hampered AI value, and Greif's estate is decades of acquisitions with edge applications outside the ERP that Singh admits will never all be rationalized. Every play above fails on dirty data.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Stibo and Informatica (Gartner MDM Leaders) run agentic PIM that enriches attributes, standardizes units and classification, and scores quality continuously with human-in-the-loop.",
        roi: "60 to 70% less manual stewardship, and it gates the ROI of every other initiative. The cheapest insurance on the whole portfolio, and the ERP replacement is the natural moment to set the source of truth.",
        whatI95Does:
          "AI-enriched PIM and MDM feeding commerce, onboarding and pricing from one source of truth, established as part of the ERP foundation rather than bolted on after.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
    ],
    why: {
      opener: "You'll be sold a $3M transformation. Your problem is a six-week proof and a window that closes when you pick an ERP.",
      body: "The Big-4 are built for enterprise-wide change, and an ERP evaluation is exactly the moment they will try to wrap you in one. SparkOptimus scaled Greif+ as a strategy partner and Valtech advises on the journey, but neither builds the ERP-integrated commerce layer that the replacement makes possible. That is i95Dev's lane: surgical, deep in commerce and ERP, connector-first, on mid-market economics. We do not claim an Infor connector you do not need. We solve the onboarding pain now, and we are the obvious partner the day you choose SAP or D365.",
      ctaTitle: "Book your ERP-Commerce Co-Motion Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that maps the onboarding fix and the commerce-with-ERP sequence against Greif's real environment. Two weeks, not a $3M transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
