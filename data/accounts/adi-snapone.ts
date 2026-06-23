import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  palantir: { label: "Palantir / Eaton ERP migration automation", url: "https://www.palantir.com/" },
  mckinsey: { label: "McKinsey B2B pricing, $15B distributor +200bps then +50bps in 10 weeks", url: "https://www.mckinsey.com/" },
  jci: { label: "Johnson Controls, $40M from 23 accounts; $35M per attrition point (Beyond the Arc)", url: "https://www.johnsoncontrols.com/" },
  sonepar: { label: "Sonepar, 7 AI agents, digital sales +50% to $13.9B (DC360)", url: "https://www.sonepar.com/" },
  search: { label: "AI search converts ~1.67x keyword; Dawn Foods (DC360)", url: "https://www.digitalcommerce360.com/" },
  watsco: { label: "Watsco AI recs, AOV +10% (Adobe / DC360)", url: "https://www.watsco.com/" },
  salesforce: { label: "Salesforce Data Cloud #1 IDC B2B CDP", url: "https://www.salesforce.com/" },
  referrals: { label: "AI referrals +357% YoY, ~31% higher conversion (2025)", url: "https://www.similarweb.com/" },
  commercetools: { label: "commercetools B2B Intake Agent (Mirion); JPW Industries 16–24h to <1h", url: "https://commercetools.com/" },
  gartner: { label: "Gartner, 90% of B2B purchases AI-intermediated by 2028", url: "https://www.gartner.com/" },
} as const;

/**
 * ADI | Snap One (ADI Global Distribution), a Dynamics-led whitespace account. Every section is
 * grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/adi-snapone/adi-snapone-spec.md.
 *
 * Spine: ADI is doing three hard things at once and they converge on one platform. It is integrating
 * the $1.4B Snap One acquisition, migrating its ERP from Epicor Prophet 21 to Microsoft Dynamics 365
 * ("Project Avengers"), and spinning off from Resideo into a standalone $4.8B NYSE company (ADIG) by
 * H2 2026. The single most important fact for i95Dev: the active D365 migration has no publicly named
 * SI of record, and there are two un-merged storefronts (Optimizely Configured Commerce for ADI, a
 * separate snapav.com for Snap One). The spin-off is not the distraction, it is the funding event for
 * the D365-plus-commerce unification i95Dev does. Lead with the D365 migration whitespace and
 * storefront unification; this is the one account where Dynamics is the headline, not a hedge. Write to
 * Lorrie Mizuko (VP Digital Marketing, conference entry point); economic owners Allie Copeland
 * (Transformation) and Ravi Kurumety (CIO). Guardrails: this is a unification and integration play on
 * the backbone ADI is already building, not a backbone replacement. Keep D365 as the system of record;
 * the work is wiring the storefronts to it and proving on a contained scope, not re-running the ERP
 * decision.
 */
export const adiSnapone: AccountConfig = {
  slug: "adi-snapone",
  companyName: "ADI | Snap One (ADI Global Distribution)",
  aliases: [
    "ADI Global Distribution",
    "ADI",
    "Snap One",
    "ADIG",
    "Control4",
    "Episode",
    "Araknis",
  ],
  domains: ["adiglobal.com", "snapone.com", "snapav.com"],
  vertical: "industrial-distribution",
  verticalLabel: "Wholesale distribution of security, AV and low-voltage products",
  revenueBand: "$4.784B FY2025 net revenue",
  role: "VP, Digital Marketing",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You are spinning off, migrating D365 and merging Snap One at once. Make it one platform.",
  wedge:
    "The Dynamics 365 migration and storefront unification, with the SI seat still open, timed to the spin-off",
  wedgeDetail:
    "It rides ADI's own active D365 program and its two un-merged storefronts, it solves the standalone company's need for one unified platform before Investor Day, and it has no named SI of record so the seat is open. Prove it on a contained integration first, merging the Optimizely and snapav catalogs or wiring the cloud pricing engine to D365, then extend across the broader build.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "A chatbot on the storefront is a demo. The standalone company needs one order running on one backbone.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. ADI's work is the configured order across 200+ branches and two storefronts that are not yet one. The edge is not a smarter homepage. It is wiring that order onto the Microsoft Dynamics 365 backbone you are already migrating to under Project Avengers, so the platform stands unified the day you ring the bell as ADIG.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI dresses up one of your two websites. Compounding AI makes one order run on one backbone, on rails Wesco cannot copy.",
    commodity: [
      "A chatbot bolted onto adiglobal.com",
      "Generic recs that ignore Pro Rewards tiers",
      "AI-written product copy at scale",
      "An \"omnichannel\" deck, not a shipped platform",
    ],
    compounding: [
      "Optimizely and snapav merged into one catalog",
      "Account-based pricing on your cloud pricing engine",
      "One order intake wired to Dynamics 365",
      "A unified storefront standing up for the spin-off",
    ],
    pitchWarning:
      "You are mid-migration to Dynamics 365 and mid-integration of Snap One. Expect a pitch to add an AI layer on top of two storefronts and an unfinished ERP. Do not. The order belongs on the backbone you are already building. Wire the storefronts to D365, merge Optimizely and snapav, and prove it on a contained catalog or pricing scope. Unify the platform, do not decorate the old one.",
  },

  // ── Module 2.5, Your Stack (verified dashboard research; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Microsoft Dynamics 365 (active migration, no SI named)",
      leadPlay: "Take the SI seat and wire the unified order onto the backbone you are already building",
      commodityFlag: "A second platform decision. The ERP is chosen; build commerce on it.",
    },
    {
      signal: "Optimizely Configured Commerce + separate snapav.com",
      leadPlay: "Merge the two storefronts into one catalog and account model",
      commodityFlag: "An AI bolt-on per site. Two decorated sites is still two sites.",
    },
    {
      signal: "Cloud pricing engine (single source of truth)",
      leadPlay: "Render Pro Rewards and contract pricing inside every configured order",
      commodityFlag: "A generic checkout that ignores the engine you already trust.",
    },
    {
      signal: "Coveo site search",
      leadPlay: "Tune semantic search for AV, security and part-number queries pros type",
      commodityFlag: "A rip-and-replace search bolt-on. You have Coveo; tune it.",
    },
    {
      signal: "Data lake + Conexiom order automation",
      leadPlay: "Stand up a 360 customer view and structured order intake on data you own",
      commodityFlag: "\"Buy a CDP.\" The lake is the foundation; activate it.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "d365-unification", label: "D365 integration + storefront unification", compounding: 0.9, bolton: 0.7, magnitude: 5, lit: true, wedge: true },
    { id: "account-pricing", label: "Account pricing on the pricing engine", compounding: 0.85, bolton: 0.68, magnitude: 4, lit: true },
    { id: "catalog-merge", label: "Optimizely + snapav catalog merge", compounding: 0.82, bolton: 0.55, magnitude: 5, lit: true },
    { id: "customer-360", label: "Customer Insights / 360 view", compounding: 0.84, bolton: 0.4, magnitude: 4, lit: true },
    { id: "b2b-search", label: "B2B semantic search (Coveo)", compounding: 0.7, bolton: 0.78, magnitude: 3, lit: true },
    { id: "agentic-intake", label: "Agentic bulk-order intake", compounding: 0.92, bolton: 0.42, magnitude: 4, lit: true },
    { id: "aeo", label: "AEO for AV/security spec content", compounding: 0.86, bolton: 0.62, magnitude: 3, lit: true },
    { id: "reorder-nba", label: "Reorder + cross-sell NBA", compounding: 0.78, bolton: 0.55, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "ai-copy", label: "AI product copy", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "omnichannel-deck", label: "\"Omnichannel strategy\" deck", compounding: 0.2, bolton: 0.3, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [12, 35],
    moneyPools: [
      {
        id: "unification",
        label: "The unification: D365 integration + storefront merge",
        range: [5, 15],
        note: "Two un-merged storefronts and a live ERP migration with no SI is the largest line in the model, because the standalone company has to ship one platform regardless. Palantir automated Eaton's ERP data migration and material-shortage detection on exactly this kind of move. Wiring the unified order onto D365 and merging Optimizely with snapav is the program ADI must fund anyway, and the spin-off is the funding event.",
        credibility: "illustrative",
        source: SRC.palantir,
      },
      {
        id: "rails",
        label: "The rails: B2B-aware search + pricing enforcement",
        range: [3, 9],
        note: "ADI runs a cloud pricing engine as a single source of truth, but two storefronts mean the wrong price or an unfound part is one click away. McKinsey found a $15B distributor lifted margin 200bps with AI pricing across 1.5M SKUs, then 50bps more with agentic AI in 10 weeks. On the ~$4.8B base, 100 to 200bps of enforced contract and Pro Rewards pricing is near-pure margin, and tuned Coveo search recovers the lookups that today end in a branch call.",
        credibility: "illustrative",
        source: SRC.mckinsey,
      },
      {
        id: "foundation",
        label: "The foundation: Customer Insights 360 + cross-sell",
        range: [2, 7],
        note: "ADI's own 6 to 12 month ask is Customer Insights, and it already owns the data lake to feed it. Johnson Controls tracked $100M+ of protectable revenue and unlocked $40M from 23 accounts on this exact whitespace-and-churn pattern. A 360 view across 200+ branches, Pro Rewards and both storefronts turns web-influenced demand, which already runs 3x cart revenue, into surfaced cross-sell on Control4, Episode and Araknis.",
        credibility: "verified",
        source: SRC.jci,
      },
      {
        id: "agentic",
        label: "Agentic readiness: bulk-order intake + AI buyers",
        range: [2, 4],
        note: "Sonepar, the largest electrical distributor, put 7 AI agents into production and grew digital sales 50% to $13.9B. ADI's largest integrators still place bulk and project orders the same messy way Conexiom is built to catch. Turning that intake into structured, validated orders is real value now, and it is the same readiness that keeps ADI visible as Gartner expects 90% of B2B purchases to be AI-intermediated by 2028.",
        credibility: "illustrative",
        source: SRC.sonepar,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "D365 integration on a contained scope",
        body: "Take the open SI seat and wire one contained scope onto the Dynamics 365 backbone, merging a slice of the Optimizely and snapav catalogs or wiring the cloud pricing engine to D365, proving the model before Investor Day. It runs on the program already in flight and ships without waiting for the full migration. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Catalog merge and the pricing and search rails",
        body: "Merge the two storefronts into one catalog and account model, render Pro Rewards and contract pricing from the cloud pricing engine inside every order, and tune Coveo for the AV, security and part-number queries pros actually type. The platform gets unified; the order rails get trustworthy.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Customer Insights 360 and reorder",
        body: "Stand up the 360 customer view on the data lake, ADI's own 6 to 12 month ask, and turn on one-click reorder and cross-sell across the 200+ branches and Pro Rewards, so recurring contractor purchasing gets faster every cycle.",
      },
      {
        phase: "Phase 4, the spine and the bet",
        title: "Agentic intake and AEO",
        body: "Turn bulk and project orders from emails, PDFs and spreadsheets into structured, validated orders on the Conexiom-plus-D365 rails, and structure AV and security spec content so AI engines cite ADI for the design. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, grouped by where the value sits: unification, rails, foundation, the bet ──
    plays: [
      // THE UNIFICATION
      {
        id: "d365-unification",
        pillar: "back-office",
        title: "D365 integration and storefront unification",
        problem:
          "ADI is migrating to Dynamics 365 with no SI named, integrating Snap One, and running two un-merged storefronts, all against a spin-off deadline. The standalone company has to ship one platform.",
        caseName: "Palantir / Eaton",
        caseDetail:
          "Palantir automated Eaton's ERP data migration and material-shortage detection; the live-migration whitespace is real, and a Dynamics-deep specialist is the natural SI of record.",
        roi: "The platform is non-optional for the spin-off, so the spend is funded; doing it on the backbone already chosen avoids a second platform decision.",
        whatI95Does:
          "Take the open SI seat and wire the unified order onto Dynamics 365, merging Optimizely and snapav, starting on one contained scope.",
        credibility: "illustrative",
        source: SRC.palantir,
      },
      {
        id: "account-pricing",
        pillar: "storefront",
        title: "Account pricing on the cloud pricing engine",
        problem:
          "ADI already trusts a cloud pricing engine as its single source of truth, but two storefronts mean the wrong price or a missed Pro Rewards tier is one click away.",
        caseName: "McKinsey $15B distributor",
        caseDetail:
          "A McKinsey $15B distributor lifted margin 200bps with AI pricing across 1.5M SKUs, then 50bps more with agentic AI in 10 weeks.",
        roi: "100 to 200bps of enforced contract and Pro Rewards pricing on the ~$4.8B base is near-pure margin.",
        whatI95Does:
          "Render contract and Pro Rewards pricing from the engine inside every configured order across both storefronts on D365.",
        credibility: "illustrative",
        source: SRC.mckinsey,
      },
      // THE RAILS
      {
        id: "b2b-search",
        pillar: "sales-marketing",
        title: "B2B-aware semantic search on Coveo",
        problem:
          "Contractors search by AV spec, security part number and cross-reference, and a failed lookup ends in a branch call or a lost sale across two separate search indexes.",
        caseName: "Dawn Foods",
        caseDetail:
          "AI search converts about 1.67 times keyword; Dawn Foods grew online at triple-digit rates with AI search and behavioral recs and saw 20x search-query growth.",
        roi: "On a catalog this technical, relevance is measured upside on the channel where web-influenced revenue already runs 3x cart revenue.",
        whatI95Does:
          "Tune Coveo for spec and part-number intent across the unified catalog, with contract-eligibility filters.",
        credibility: "verified",
        source: SRC.search,
      },
      {
        id: "reorder-nba",
        pillar: "storefront",
        title: "Reorder and cross-sell next-best-action",
        problem:
          "The same integrators buy the same gear on a project cycle, but reorder and adjacent-product prompts stay manual across two storefronts.",
        caseName: "Watsco, Johnson Controls",
        caseDetail:
          "Watsco's AI recommendations lifted average order value 10% on its HVAC contractor platform; Johnson Controls whitespace models unlocked $40M from 23 accounts.",
        roi: "Growing a known Pro Rewards account is cheaper and higher-converting than winning a new integrator.",
        whatI95Does:
          "One-click reorder and next-best-action on D365 order history, surfaced to the contractor and to the branch team.",
        credibility: "verified",
        source: SRC.watsco,
      },
      // THE FOUNDATION
      {
        id: "customer-360",
        pillar: "foundation",
        title: "Customer Insights 360 view",
        problem:
          "ADI named Customer Insights as its 6 to 12 month ask, but the data sits across the lake, two storefronts, Pro Rewards and 200+ branches, so the 360 view does not exist yet.",
        caseName: "Johnson Controls, Salesforce Data Cloud",
        caseDetail:
          "Johnson Controls tracked $100M+ of protectable revenue and $35M per attrition point on exactly this transaction-data pattern; Salesforce Data Cloud leads the IDC B2B CDP category.",
        roi: "A unified customer view gates the cross-sell, the churn flags and the agentic intake. The cheapest insurance on the portfolio.",
        whatI95Does:
          "Stand up a 360 customer view on the data lake, resolving identity across both storefronts, Pro Rewards and the branches.",
        credibility: "illustrative",
        source: SRC.salesforce,
      },
      {
        id: "aeo",
        pillar: "sales-marketing",
        title: "AEO and answer-engine findability",
        problem:
          "Integrators increasingly start in an AI assistant to spec a security or AV system, and if the answer engine cites a competitor, the order is lost before adiglobal.com loads.",
        caseName: "AEO research",
        caseDetail:
          "AI engines drove 1.13B referral visits in June 2025, up 357% year on year, and convert about 31% higher than non-branded organic, and almost no security or AV distributor has structured for it.",
        roi: "On a technical catalog, citation is measured upside on the channel that defines 2027, bought now.",
        whatI95Does:
          "Structure spec, selection-guide and FAQ content so AI engines cite ADI for the system design, fed from the merged PIM and D365 data.",
        credibility: "illustrative",
        source: SRC.referrals,
      },
      // THE BET
      {
        id: "agentic-intake",
        pillar: "storefront",
        title: "Agentic bulk-order intake",
        problem:
          "ADI's largest integrators place bulk and project orders as emails, PDFs and spreadsheets, and the branch team rekeys them by hand even with Conexiom in place.",
        caseName: "commercetools / Mirion, JPW Industries",
        caseDetail:
          "commercetools built a B2B intake agent for Mirion that turns exactly those documents into structured quotes; JPW Industries cut order processing from 16 to 24 hours to under one hour with AI order automation.",
        roi: "Structured intake removes manual rekeying and error exactly as the standalone company scales its digital channel.",
        whatI95Does:
          "An AI intake agent that turns project-order documents into validated, structured orders on the Conexiom-plus-D365 rails.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
      {
        id: "agentic-readiness",
        pillar: "storefront",
        title: "Agentic-commerce readiness",
        problem:
          "The AI buyer is coming for security and AV gear, and a catalog that is not machine-readable and machine-purchasable is invisible to it.",
        caseName: "Sonepar, Gartner, Google AP2",
        caseDetail:
          "Sonepar runs 7 AI agents in production and grew digital sales 50%; Gartner expects 90% of B2B purchases to be AI-intermediated by 2028, and Google's AP2 protocol already ships agentic purchasing.",
        roi: "Readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on the foundation the unification already builds.",
        whatI95Does:
          "Make the unified catalog machine-purchasable for agents using AP2 and MCP, grounded in the merged catalog and D365 data.",
        credibility: "illustrative",
        source: SRC.gartner,
      },
    ],
    why: {
      opener: "You'll be sold a platform that re-runs a decision you already made. You do not need it.",
      body: "The platform pitch is a rebuild of the wrong layer. Your backbone is Microsoft Dynamics 365 and you are already migrating to it. Your problem is the order: a live ERP migration with no SI of record and two storefronts, Optimizely and snapav, that are not yet one, all against a spin-off deadline. That is i95Dev's lane: deep in Dynamics 365, deep in commerce, surgical, at mid-market economics. We take the open SI seat, wire the unified order onto the D365 backbone you are already building, and merge the two storefronts, so the platform stands unified the day you ring the bell. We do not re-run your ERP decision. We make it ship.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against ADI's real catalog, pricing-engine and D365 migration data. Two weeks, not a platform rebuild.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
