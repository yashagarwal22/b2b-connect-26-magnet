import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  usfoods: { label: "US Foods, 90% on platform, +1.3M cases, +1.5 AOV (DC360 + earnings)", url: "https://www.usfoods.com/" },
  johnsoncontrols: { label: "Johnson Controls, $100M+ protectable, $35M per point (Beyond the Arc)", url: "https://www.johnsoncontrols.com/" },
  mckinsey: { label: "McKinsey B2B pricing, $15B distributor +200bps then +50bps", url: "https://www.mckinsey.com/" },
  zilliant: { label: "Zilliant / PROS, 100–200bps on a $200M book (research dump, Part 4.4)", url: "https://www.zilliant.com/" },
  eaton: { label: "Eaton, ERP data migration with Palantir AIP (joint PR, May 2024)", url: "https://www.eaton.com/" },
  grainger: { label: "Grainger, RAG over 2.5M SKUs (Databricks / DC360)", url: "https://www.grainger.com/" },
  infosys: { label: "Infosys, real-time demand-supply integration, ~11M-SKU distributor", url: "https://www.infosys.com/" },
  alstom: { label: "Alstom, AI/ML MDM backbone with TCS; Stibo, Informatica", url: "https://www.alstom.com/" },
  pe: { label: "PE exit-readiness lens (research dump, Part 5)", url: "https://www.bannersolutions.com/" },
} as const;

/**
 * Banner Solutions, a Tailwind Capital portfolio company and active-requirement account (PE exit clock,
 * a champion who owns the decision, a stack half-built by design). Every section is grounded in the
 * Account-360 profile and the AI research dump, and maps 1:1 to companies/banner/banner-spec.md.
 *
 * Spine: Banner already won the storefront but has not yet won the seam behind it. In 2022 it
 * replatformed off phone and fax onto a composable stack (TCS Interactive's Nieocom commerce engine
 * with Brightspot as headless CMS) and online revenue is up 24% YoY. The problem is everything the
 * storefront has to ask before it can quote a price or promise a date: customer-specific pricing,
 * multi-DC availability, and a price reconciled against 260+ supplier feeds, none of which lives in
 * Nieocom. It lives in the ERP, and the ERP-to-commerce seam is the unsolved, under-built part of the
 * stack and the single highest-value unknown. Tailwind has held ~7 years since Oct 2019, which puts a
 * likely exit on the 12-to-18-month horizon, and an acquirer prices a clean seam at a premium. Write to
 * Ben Smith (Chief Digital Officer, the champion who owns the platform decision), with Nick Jaroszewicz
 * (Director of eCommerce) day-to-day and CFO Thomas Dowling carrying the exit-readiness lens. Guardrails:
 * do not pitch a replatform of Nieocom or Brightspot (that 2022 build is the performing asset, i95Dev
 * complements it), and never name the ERP, which is unknown until discovery confirms it. i95Dev does not
 * touch Nieocom. i95Dev connects it to the ERP. That is the whole story.
 */
export const banner: AccountConfig = {
  slug: "banner",
  companyName: "Banner Solutions",
  aliases: [
    "Banner",
    "Banner Solutions Inc.",
    "Banner Hardware",
    "Tailwind Capital portfolio company",
  ],
  domains: ["bannersolutions.com"],
  vertical: "industrial-distribution",
  verticalLabel: "B2B wholesale distribution (door hardware, access control, security)",
  revenueBand: "$100–200M",
  role: "Chief Digital Officer",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You fixed the storefront. Now fix the seam an acquirer will price.",
  wedge:
    "The ERP-to-Nieocom integration layer: customer-specific pricing, multi-DC inventory and 260+ feeds, synced in real time",
  wedgeDetail:
    "High value, runs on the commerce engine and ERP you already own, and does not touch Nieocom. It is the seam every other play depends on, and it is the seam an acquirer inspects first. It is tied to a live mandate, the architecture is already \"ready for integration,\" and it is championed already by Ben Smith. i95Dev complements the TCS/Nieocom investment rather than competing with it, which is exactly why the conversation is easy to start.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. The model is the cheapest thing in the room.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it, because nothing writes back to the system of record. You already proved you can ship: Nieocom and Brightspot took you off phone and fax and grew online revenue 24%. The next dollar is not a better storefront. It is the seam behind it, where customer pricing, 260+ supplier feeds and multi-DC inventory either reconcile in real time or quietly leak margin and trust.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the data only you own.",
    commodity: [
      "A chatbot bolted onto the storefront",
      "LLM copy that cannot quote a real contract price",
      "Generic recs blind to multi-DC availability",
      "A \"data lake\" that duplicates your 260 feeds",
    ],
    compounding: [
      "A real-time ERP-to-Nieocom price and inventory sync",
      "Customer-specific pricing rendered live, per account",
      "Order promising from true stock across every DC",
      "One reconciled feed that an acquirer can diligence",
    ],
    pitchWarning:
      "You run a composable stack, so expect a pitch to replatform Nieocom or to bolt a Copilot onto everything. Skip both. Your storefront is the asset. The unsolved work is the integration beneath it, and that is plumbing, not a new platform.",
  },

  // ── Module 2.5, Your Stack (confirmed in the Account 360 or live research; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Nieocom composable commerce (2022)",
      leadPlay: "Connect it to the ERP so it can price and promise. We do not touch it.",
      commodityFlag: "A replatform. The storefront is the asset, not the problem.",
    },
    {
      signal: "Brightspot headless CMS",
      leadPlay: "Feed it one clean, ERP-sourced product truth for content and SEO",
      commodityFlag: "A new CMS. The unlock is the data behind it, not a swap.",
    },
    {
      signal: "ERP, not publicly disclosed",
      leadPlay: "Real-time pricing, multi-DC inventory and order writeback",
      commodityFlag: "\"We'll discover it later.\" It is the first thing to confirm, not the last.",
    },
    {
      signal: "260+ manufacturer pricing feeds",
      leadPlay: "One reconciled price book, per account, enforced at the cart",
      commodityFlag: "More middleware. The gap is reconciliation, not another integration tool.",
    },
    {
      signal: "Multi-DC inventory, M&A-driven growth",
      leadPlay: "A connector library to fold acquired catalogs and stock in fast",
      commodityFlag: "A bespoke project per acquisition. Build the library once.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "erp-nieocom", label: "ERP-to-Nieocom integration", compounding: 0.92, bolton: 0.82, magnitude: 5, lit: true, wedge: true },
    { id: "ma-connector", label: "M&A connector library", compounding: 0.88, bolton: 0.7, magnitude: 4, lit: true },
    { id: "pricing-rgm", label: "Pricing reconciliation / RGM", compounding: 0.9, bolton: 0.55, magnitude: 5, lit: true },
    { id: "multi-dc", label: "Multi-DC order promising", compounding: 0.8, bolton: 0.6, magnitude: 4, lit: true },
    { id: "cross-sell", label: "Cross-sell / NBA on order history", compounding: 0.82, bolton: 0.48, magnitude: 3, lit: true },
    { id: "spec-search", label: "B2B / spec search", compounding: 0.72, bolton: 0.66, magnitude: 3, lit: true },
    { id: "exit-readiness", label: "Exit-readiness architecture", compounding: 0.85, bolton: 0.4, magnitude: 4, lit: true },
    { id: "pim-mdm", label: "AI PIM / MDM", compounding: 0.85, bolton: 0.3, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "llm-copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
    { id: "replatform", label: "Nieocom replatform (do not)", compounding: 0.3, bolton: 0.2, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [3, 9],
    moneyPools: [
      {
        id: "margin",
        label: "Margin: pricing you negotiated, leaking across 260 feeds",
        range: [1, 4],
        note: "Distributors lose 1.5–2.5% of margin to quote drift and discount creep across thousands of SKUs. On a ~$150M base, 2% is roughly $3M. Banner's pricing logic spans the ERP, 260+ supplier feeds and customer-specific terms, and the storefront cannot enforce what it cannot see. Zilliant and PROS-style pricing recovers 100–200 basis points on a $200M book, worth $2–4M, but only once the feeds reconcile into one price the cart can trust.",
        credibility: "verified",
        source: SRC.mckinsey,
      },
      {
        id: "channel-shift",
        label: "Channel shift: rep-assisted orders moving to self-serve",
        range: [0.8, 2.5],
        note: "Every order a rep keys is an order the storefront could have taken if it could quote the right price and promise real stock. US Foods put 90% of customers on its platform and added 1.3M cases a year plus 1.5 cases of AOV per order. Each point of rep-to-digital shift is worth $1–3M a year at distribution scale. The blocker is not the storefront; it is the seam that lets the storefront answer correctly.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      {
        id: "installed-base",
        label: "Installed base: defend it against direct and Grainger",
        range: [0.7, 1.5],
        note: "Selling to buyers who already trust you is 5–7x cheaper than new logos, and cross-sell converts 3–4x more often. As manufacturers push direct and Grainger and Fastenal court the same locksmiths and integrators, propensity and next-best-action on your own order history is the cheapest defense. Johnson Controls tracked $100M+ of protectable revenue this way, $35M per point of attrition, scaled to your size.",
        credibility: "verified",
        source: SRC.johnsoncontrols,
      },
      {
        id: "ma-exit",
        label: "M&A and exit: a clean, diligence-ready stack",
        range: [0.5, 1.5],
        note: "Banner grows by acquisition, and Tailwind is ~7 years into the hold. Every acquired catalog and price book currently means a bespoke integration project; a connector library makes it a configuration. More to the point, an acquirer prices a clean, scalable, well-integrated stack at a premium and discounts a brittle one. The integration work is not just operational savings, it is exit-valuation insurance.",
        credibility: "illustrative",
        source: SRC.pe,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "The wedge: ERP-to-Nieocom integration",
        body: "Connect the ERP to Nieocom so the storefront renders customer-specific pricing and promises stock from true multi-DC inventory, with orders writing back to the ERP in real time. It runs on systems you already own, it does not touch Nieocom, and it is the seam every later phase depends on. This is the wedge. First discovery step: confirm the ERP.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Reconcile the price feeds and promise true inventory",
        body: "Collapse 260+ manufacturer feeds into one reconciled price book, enforced per account at the cart, and wire order promising to real availability across every DC. This is where the margin leak closes and the rep-assisted orders start moving to self-serve.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Intelligence on the data you now trust",
        body: "With a clean integrated foundation, add B2B-aware spec search, cross-sell propensity and next-best-action on your order history. These defend the installed base against direct and the nationals, and they only work once the data beneath them is reconciled.",
      },
      {
        phase: "Phase 4, exit-ready",
        title: "The M&A connector library and the readiness audit",
        body: "Build the connector library so the next acquisition folds in as configuration, not a project, and run an architecture assessment framed for Tailwind's exit. The output is a stack an acquirer can diligence in days and price at a premium.",
      },
    ],
    // ── The play shortlist, across the integration seam, pricing, demand defense, M&A/exit and the data foundation ──
    plays: [
      // INTEGRATION AND COMMERCE (the seam)
      {
        id: "erp-nieocom",
        pillar: "storefront",
        title: "ERP-to-Nieocom integration: pricing, inventory, order writeback",
        problem:
          "Nieocom renders a beautiful page, but it cannot quote a customer's negotiated price or promise stock it cannot see. Today that gap is filled by reps, stale feeds, or a wrong number that costs trust.",
        caseName: "Eaton, Palantir",
        caseDetail:
          "Eaton used Palantir AIP to automate ERP data migration and material-shortage detection across its systems of record, CDO-confirmed in production. The pattern is the same: value lives in the writeback to the system of record, not the front end.",
        roi: "Each point of rep-to-digital order shift is worth $1–3M a year at distribution scale, and it is the rail every other play runs on.",
        whatI95Does:
          "Build the real-time integration between the ERP and Nieocom so price, inventory and orders sync both ways. We do not touch the storefront. Conditional on which ERP it is: if SAP, NetSuite or D365, a native i95Dev connector; otherwise a buildable adapter.",
        credibility: "illustrative",
        source: SRC.eaton,
      },
      {
        id: "multi-dc",
        pillar: "storefront",
        title: "Multi-DC order promising",
        problem:
          "A promise date the storefront cannot keep is worse than no date. Inventory sits across multiple DCs and the cart needs to see all of it to promise correctly.",
        caseName: "US Foods",
        caseDetail:
          "US Foods' \"Where's My Truck\" and platform order tools put 90% of customers on self-service and drove a 40% delivery-accuracy gain in pilot, by surfacing true operational state to the buyer.",
        roi: "Accurate promising is the difference between a self-serve order and a rep call; it directly enables the channel-shift money pool.",
        whatI95Does:
          "Wire real-time multi-DC availability into Nieocom's order flow so promise dates reflect true stock.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      // PRICING AND REVENUE
      {
        id: "pricing-rgm",
        pillar: "back-office",
        title: "Price-feed reconciliation and margin enforcement",
        problem:
          "260+ manufacturer feeds, customer-specific terms, and any one stale feed yields a wrong price. Margin leaks one quote at a time, invisibly.",
        caseName: "McKinsey-cited $15B distributor",
        caseDetail:
          "A McKinsey-cited $15B distributor recovered 200 basis points of margin in 10 weeks, then 50 more with agentic AI, by enforcing price discipline at the point of sale.",
        roi: "1.5–2.5% of margin is the typical leak; on a ~$150M base that is roughly $3M, recoverable once the feeds reconcile into one enforceable price book.",
        whatI95Does:
          "Collapse the feeds into one reconciled, account-specific price book sourced from the ERP and enforced at the cart.",
        credibility: "verified",
        source: SRC.mckinsey,
      },
      // DEMAND AND DEFENSE
      {
        id: "cross-sell",
        pillar: "sales-marketing",
        title: "Cross-sell propensity and next-best-action",
        problem:
          "Manufacturers push direct and Grainger and Fastenal chase your locksmiths and integrators. Your defensible margin is the buyers who already trust you, but reorder timing and white-space cross-sell stay manual until an account quietly churns.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls propensity and whitespace models tracked $100M+ of protectable revenue, $35M per attrition point, and unlocked $40M from 23 accounts.",
        roi: "8–12 points of NRR and 15–30% churn reduction, $4–7 returned per $1, scaled to Banner's size.",
        whatI95Does:
          "Churn and cross-sell propensity on your order history, surfaced as reorder nudges on-site and rep alerts. Runs on the clean data the integration produces.",
        credibility: "verified",
        source: SRC.johnsoncontrols,
      },
      {
        id: "spec-search",
        pillar: "storefront",
        title: "B2B-aware spec and equivalence search",
        problem:
          "Locksmiths and integrators search by function, finish, handing and competitor part number, not your SKU names. A failed lookup is a rep call or an order lost to a national.",
        caseName: "Grainger",
        caseDetail:
          "Grainger runs GenAI search across 2.5M SKUs in production, with live sales growth, by ranking on real B2B signals (stock, contract, equivalence).",
        roi: "AI search converts about 1.67x keyword search (4.6% vs 2.8%). On a search-heavy 150,000-SKU catalog, that lift is a multi-million swing.",
        whatI95Does:
          "Semantic and equivalence search with hard eligibility filters and B2B ranking (brand, finish, inventory, contract) across the Nieocom storefront.",
        credibility: "verified",
        source: SRC.grainger,
      },
      // M&A AND EXIT
      {
        id: "ma-connector",
        pillar: "back-office",
        title: "M&A connector library",
        problem:
          "Banner grows by acquisition, and every acquired catalog and price book is currently a bespoke integration project. That is slow, expensive, and it does not scale into an exit.",
        caseName: "Infosys",
        caseDetail:
          "Infosys ran real-time demand-supply integration across an ~11M-SKU electronics distributor in 50 countries by standardizing the integration pattern rather than rebuilding it per node.",
        roi: "A library turns each acquisition from a multi-month project into a configuration, compounding with every deal.",
        whatI95Does:
          "A reusable connector library that maps acquired catalogs, pricing and inventory into the integrated stack fast.",
        credibility: "illustrative",
        source: SRC.infosys,
      },
      {
        id: "exit-readiness",
        pillar: "back-office",
        title: "Exit-readiness architecture assessment",
        problem:
          "Tailwind is ~7 years in. An acquirer's technical diligence prices a clean, scalable, well-integrated stack at a premium and discounts a brittle one held together by manual feeds.",
        caseName: "PE exit-readiness pattern",
        caseDetail:
          "The research dump documents the PE pattern directly: acquirers expect a clean, scalable stack, and \"ready for integration\" is the standard leadership signals before a sale.",
        roi: "Operational savings plus valuation upside. The integration is not a cost line, it is exit insurance.",
        whatI95Does:
          "A fixed-scope architecture assessment framed for Tailwind's exit, scoring the stack against acquirer-diligence criteria and sequencing the fixes.",
        credibility: "illustrative",
        source: SRC.pe,
      },
      // FOUNDATION
      {
        id: "pim-mdm",
        pillar: "foundation",
        title: "AI Master Data and PIM, the foundation under all of it",
        problem:
          "150,000+ SKUs across 260+ brands means incomplete, inconsistent attributes. Every play above (search, pricing, cross-sell) degrades on dirty product data.",
        caseName: "Alstom, TCS",
        caseDetail:
          "Alstom built an AI/ML master-data and integration backbone with TCS for a unified product view and faster deployments; Stibo and Informatica run agentic PIM enrichment with human-in-the-loop.",
        roi: "60–70% less manual stewardship, and it gates the ROI of every other initiative. The cheapest insurance on the whole portfolio.",
        whatI95Does:
          "AI-enriched PIM and MDM that standardizes attributes across 260+ brands and feeds Nieocom, Brightspot, search and pricing from one source of truth.",
        credibility: "illustrative",
        source: SRC.alstom,
      },
    ],
    why: {
      opener: "You'll be sold a $3M transformation. Your problem might be a six-week fix.",
      body: "The Big-4 are built for enterprise-wide change. Your wedge is not enterprise-wide. It is the integration seam between an ERP and a storefront you already shipped. That is exactly i95Dev's lane: surgical, deep in commerce and ERP, integration-first, on mid-market economics. We do not replatform your Nieocom build. We connect it to your ERP, and we hand Tailwind a stack an acquirer can diligence in days.",
      ctaTitle: "Book your ERP-to-Commerce Integration Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee readiness assessment that confirms your ERP, maps the seam, and validates these directional numbers against Banner's real data. Two weeks, not a $3M transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
