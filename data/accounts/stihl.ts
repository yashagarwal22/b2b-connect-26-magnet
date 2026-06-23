import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  jpw: { label: "JPW Industries, order processing 16–24h to under 1h", url: "https://www.salesforce.com/" },
  kawasaki: { label: "Kawasaki Engines USA, dealer B2B AOV +5x (DC360)", url: "https://www.salesforce.com/" },
  usfoods: { label: "US Foods MOXe, +1.3M cases/yr, 40% delivery-accuracy gain (DC360)", url: "https://www.usfoods.com/" },
  sonepar: { label: "Sonepar, 7 AI agents, digital sales +50% YoY to $13.9B (DC360)", url: "https://www.sonepar.com/" },
  watsco: { label: "Watsco, AI recommendations AOV +10% (Adobe / DC360)", url: "https://www.watsco.com/" },
  jci: { label: "Johnson Controls, $40M from 23 accounts (Beyond the Arc)", url: "https://www.johnsoncontrols.com/" },
  dawn: { label: "Dawn Foods, 20x search growth, triple-digit online growth (DC360)", url: "https://www.dawnfoods.com/" },
  stibo: { label: "inriver / Akeneo enrichment; Stibo / Informatica MDM Leaders", url: "https://www.stibosystems.com/" },
  commercetools: { label: "commercetools B2B Intake Agent (Mirion)", url: "https://commercetools.com/" },
  gartner: { label: "Gartner, 90% of B2B purchases AI-intermediated by 2028", url: "https://www.gartner.com/" },
} as const;

/**
 * STIHL Inc (STIHL USA), an active-requirement account (a live marketplace forcing the orchestration
 * issue, a stated Order Management priority, an in-house staffing gap). Every section is grounded in
 * the Account-360 profile and the AI research dump, and maps 1:1 to companies/stihl/stihl-spec.md.
 *
 * Spine: STIHL does not sell online. It sells through 11,000 independent servicing dealers, and on
 * March 4, 2026 launched a Mirakl marketplace on stihlusa.com to unify them on one storefront. The
 * product is no longer the chainsaw, it is the promise that the dealer down the road has it, services
 * it, and hands it over, and that promise is kept or broken in order management. The marketplace runs
 * on SAP Commerce Cloud against an SAP S/4HANA backbone, and the hard part is orchestrating order
 * management across S/4HANA, SAP Commerce, Mirakl and 11,000 dealers, during the largest transformation
 * in STIHL's history (gas-to-battery, 35% battery by 2027). STIHL is staffing the integration in-house
 * and recruiting its own SAP Commerce and Mirakl architect. Write to Rob Jenson (Director and Head of
 * US E-Commerce, champion, $5–10M budget, Now priority Order Management), with economic context via
 * interim Co-President Uwe Hirsch (US President chair vacant since Keffer departed Feb 2026).
 * GUARDRAIL: the ERP is SAP, not Dynamics 365. Enter as the ERP-to-commerce-to-Mirakl integration and
 * order-management partner STIHL is hiring in-house. Integrate with SAP. Do not propose displacing it.
 */
export const stihl: AccountConfig = {
  slug: "stihl",
  companyName: "STIHL Inc",
  aliases: [
    "STIHL USA",
    "STIHL Inc",
    "STIHL Group",
    "Andreas Stihl",
  ],
  domains: ["stihlusa.com"],
  vertical: "manufacturing",
  verticalLabel: "Outdoor power equipment manufacturing / dealer-distributed durables",
  revenueBand: "STIHL Group €5.48B (2025, +2.8%); NA ≈ 1/3 of group; USA single largest market",
  role: "Director / Head of US E-Commerce",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You built the marketplace. Now make the order keep the dealer's promise.",
  wedge:
    "ERP-to-commerce-to-Mirakl order orchestration, the integration role you are hiring in-house",
  wedgeDetail:
    "It runs on the SAP S/4HANA, SAP Commerce and Mirakl systems STIHL already owns, it solves the dealer-fulfillment orchestration that makes or breaks the marketplace launch, it answers the Now priority Rob Jenson named (Order Management), and it gives STIHL capacity it is currently short, faster than hiring an in-house architect during a CEO and President transition. Prove it on the order spine between SAP and Mirakl, then extend the same orchestration across dealer onboarding, reorder and the battery catalog.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "A marketplace homepage is a launch. The dealer order arriving complete and on time is the business.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. STIHL's work is the dealer-fulfilled order: a model configured, a battery platform chosen, a dealer assigned, a promise kept. The edge is not a smarter marketplace homepage. It is making that order orchestrate cleanly across the SAP S/4HANA and SAP Commerce backbone you already run, so the marketplace you launched on March 4 can finally scale with the 11,000-dealer network behind it.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI decorates the marketplace. Compounding AI makes the dealer-fulfilled order land right, on rails competitors cannot copy.",
    commodity: [
      "A chatbot bolted onto stihlusa.com",
      "Generic recs that ignore dealer territory",
      "AI-written product copy at scale",
      "An \"AI marketplace\" deck, not shipped OMS",
    ],
    compounding: [
      "Order orchestration across SAP and Mirakl",
      "Dealer-aware fulfillment routing on your network",
      "A real PIM that grounds every dealer listing",
      "Order management wired to SAP S/4HANA",
    ],
    pitchWarning:
      "You run SAP S/4HANA and SAP Commerce, and you just launched on Mirakl. Expect a pitch to rip up the backbone for a fashionable new platform, or to sell you a second marketplace you do not need. Do not. The order belongs on the SAP rails and the dealer belongs in the loop. Orchestrate order management across S/4HANA, SAP Commerce and Mirakl, and fill the missing dealer-fulfillment, onboarding and reorder logic. Modernize the order spine, not the system of record.",
  },

  // ── Module 2.5, Your Stack (verified from Account 360; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "SAP S/4HANA (ERP)",
      leadPlay: "Wire order management onto the backbone you already own",
      commodityFlag: "A new ERP that displaces SAP. You own the rail; build on it.",
    },
    {
      signal: "SAP Commerce Cloud (storefront)",
      leadPlay: "Orchestrate the order from storefront to dealer, not just render a catalog",
      commodityFlag: "A re-platform you do not need. The storefront is fine; fix the order spine.",
    },
    {
      signal: "Mirakl marketplace (live Mar 4)",
      leadPlay: "Automate dealer onboarding and fulfillment routing at network scale",
      commodityFlag: "A second marketplace. You have Mirakl; make the orchestration behind it work.",
    },
    {
      signal: "In-house SAP Commerce + Mirakl architect (hiring)",
      leadPlay: "Buy the integration capacity now, faster than the hire lands",
      commodityFlag: "\"Wait for the in-house build.\" The launch is live; the gap is now.",
    },
    {
      signal: "No SI named for the rollout",
      leadPlay: "A Dynamics-and-commerce-deep partner who ships the order spine",
      commodityFlag: "A Big-4 transformation, or offshore body shops on a critical launch.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "erp-mirakl-orchestration", label: "ERP-to-Mirakl order orchestration", compounding: 0.9, bolton: 0.7, magnitude: 5, lit: true, wedge: true },
    { id: "dealer-fulfillment-oms", label: "Dealer-fulfillment routing + OMS", compounding: 0.86, bolton: 0.62, magnitude: 4, lit: true },
    { id: "dealer-onboarding", label: "Dealer onboarding velocity", compounding: 0.8, bolton: 0.66, magnitude: 4, lit: true },
    { id: "loyalty-reorder", label: "Loyalty / reorder on dealer base", compounding: 0.82, bolton: 0.55, magnitude: 4, lit: true },
    { id: "ai-pim", label: "AI PIM foundation", compounding: 0.84, bolton: 0.34, magnitude: 3, lit: true },
    { id: "b2b-search-locator", label: "B2B semantic search + dealer locator", compounding: 0.7, bolton: 0.74, magnitude: 3, lit: true },
    { id: "agentic-bulk-intake", label: "Agentic bulk-order intake", compounding: 0.92, bolton: 0.4, magnitude: 4, lit: true },
    { id: "aeo-spec-battery", label: "AEO for spec and battery content", compounding: 0.86, bolton: 0.6, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "ai-copy", label: "AI product copy", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "ai-marketplace-deck", label: "\"AI marketplace\" deck", compounding: 0.2, bolton: 0.3, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [8, 24],
    moneyPools: [
      {
        id: "order-spine",
        label: "The order spine: ERP-to-Mirakl orchestration + OMS",
        range: [3, 9],
        note: "Every marketplace order is dealer-fulfilled, and the value is created or lost in the handoff between SAP S/4HANA, SAP Commerce, Mirakl and the dealer. JPW Industries cut order processing from 16 to 24 hours to under one hour with AI order automation, and Kawasaki Engines USA grew AOV 5x after putting dealer ordering on a real B2B portal. On the marketplace STIHL just launched, clean orchestration is the largest line in the model.",
        credibility: "illustrative",
        source: SRC.jpw,
      },
      {
        id: "onboarding-velocity",
        label: "Onboarding velocity: dealer activation at scale",
        range: [2, 6],
        note: "A marketplace is only as good as the dealers live on it, and STIHL is bringing 10,000+ dealers onto Mirakl for the first time. Sonepar put seven AI agents into production and grew digital sales 50% year on year to $13.9B by activating its network, not just its storefront. Faster, cleaner dealer onboarding turns a launched marketplace into a transacting one.",
        credibility: "verified",
        source: SRC.sonepar,
      },
      {
        id: "loyalty-reorder",
        label: "Loyalty + reorder: the installed dealer base",
        range: [2, 6],
        note: "STIHL named Loyalty and Retention as its 6–12 month priority, and the same dealers reorder the same consumables, parts and battery packs on a cycle. Watsco's AI recommendations lifted average order value 10% on its contractor platform, and growing a known dealer is cheaper and higher-converting than recruiting a new one. One-click reorder and next-best-action on the dealer base is recurring margin.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "agentic-readiness",
        label: "Agentic / AI readiness: bulk intake + affiliates",
        range: [1, 3],
        note: "STIHL came to the conference naming \"Affiliates, AI\" as a reason to attend, and its largest dealers still place bulk orders the messy way. commercetools built a B2B intake agent for Mirion that turns emails, PDFs and spreadsheets into structured quotes, and the same readiness keeps STIHL visible as Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. Turning bulk intake into structured, validated orders is real value now.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "The ERP-to-Mirakl order spine and OMS",
        body: "Orchestrate order management across SAP S/4HANA, SAP Commerce and Mirakl so a dealer-fulfilled order flows clean from marketplace to dealer shelf, answering Rob Jenson's Order Management ask. It runs on systems you own and ships without waiting for the in-house architect to land. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Dealer onboarding and fulfillment routing",
        body: "Automate the onboarding of the 10,000+ dealers onto Mirakl and wire dealer-aware fulfillment routing so the right order reaches the right store. The marketplace fills with transacting dealers; the order routing gets reliable.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Loyalty, reorder and the PIM foundation",
        body: "Turn on one-click reorder and next-best-action across the dealer base, answering the stated Loyalty and Retention priority, and stand up a real PIM so every dealer listing and battery-platform spec grounds in clean data. Recurring dealer purchasing gets faster every cycle.",
      },
      {
        phase: "Phase 4, the spine and the bet",
        title: "Agentic intake and AEO",
        body: "Turn bulk dealer orders from emails, PDFs and spreadsheets into structured, validated orders, and structure battery-platform and spec content so AI engines cite STIHL for the design. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, the order spine, the network, the foundation, the bet ──
    plays: [
      // THE ORDER SPINE
      {
        id: "erp-mirakl-orchestration",
        pillar: "storefront",
        title: "ERP-to-commerce-to-Mirakl order orchestration and OMS",
        problem:
          "Every marketplace order is dealer-fulfilled, and the value is kept or lost in the handoff between SAP S/4HANA, SAP Commerce, Mirakl and the dealer. Order Management is the priority Rob Jenson came to the conference for, and the role STIHL is hiring in-house.",
        caseName: "JPW Industries, Kawasaki Engines USA",
        caseDetail:
          "JPW Industries cut order processing from 16 to 24 hours to under one hour with AI order automation; Kawasaki Engines USA grew AOV 5x after putting dealer ordering on a real B2B portal.",
        roi: "Faster, clean orchestration on a just-launched marketplace is the largest pool in the model and protects the dealer promise the brand runs on.",
        whatI95Does:
          "Order management orchestration across SAP and Mirakl, valid by construction, starting on the order spine.",
        credibility: "illustrative",
        source: SRC.jpw,
      },
      {
        id: "dealer-fulfillment-routing",
        pillar: "storefront",
        title: "Dealer-fulfillment routing",
        problem:
          "11,000 dealers fulfill, and a marketplace order has to reach the right dealer with the right unit, BOPIS-first, or the promise breaks at pickup.",
        caseName: "US Foods MOXe",
        caseDetail:
          "US Foods built MOXe with image-and-doc-to-order and a \"Where's My Truck\" AI, lifting delivery accuracy 40% and adding 1.3M cases a year on a dealer-and-route-fulfilled model.",
        roi: "Routing the order to the right dealer cuts failed pickups and protects the dealer relationship the moat depends on.",
        whatI95Does:
          "Dealer-aware fulfillment routing wired to Mirakl and SAP, so the order lands where it can be kept.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      // THE NETWORK
      {
        id: "dealer-onboarding-velocity",
        pillar: "storefront",
        title: "Dealer onboarding velocity",
        problem:
          "A marketplace is only as good as the dealers live on it, and STIHL is bringing 10,000+ dealers onto Mirakl for the first time on a tight launch timeline.",
        caseName: "Sonepar",
        caseDetail:
          "Sonepar put seven AI agents into production and grew digital sales 50% year on year to $13.9B by activating its network at scale.",
        roi: "Faster onboarding turns a launched marketplace into a transacting one, accelerating every downstream order.",
        whatI95Does:
          "Automated dealer onboarding and listing workflows on Mirakl, grounded in clean dealer and product data.",
        credibility: "verified",
        source: SRC.sonepar,
      },
      {
        id: "loyalty-reorder-nba",
        pillar: "storefront",
        title: "Loyalty, reorder and next-best-action",
        problem:
          "The same dealers reorder the same consumables, parts and battery packs on a cycle, but reorder and adjacent-product prompts stay manual, and STIHL named Loyalty and Retention as its 6–12 month priority.",
        caseName: "Watsco, Johnson Controls",
        caseDetail:
          "Watsco's AI recommendations lifted average order value 10%; Johnson Controls whitespace models unlocked $40M from 23 accounts.",
        roi: "Growing a known dealer is cheaper and higher-converting than recruiting a new one; retention compounds on the network.",
        whatI95Does:
          "One-click reorder and next-best-action on SAP order history, surfaced to the dealer and the field team.",
        credibility: "verified",
        source: SRC.watsco,
      },
      // THE FOUNDATION
      {
        id: "ai-pim-foundation",
        pillar: "foundation",
        title: "AI PIM foundation",
        problem:
          "30 to 60% of B2B catalogs have incomplete attributes, and a marketplace listing or an answer engine on dirty data is confidently wrong, which is unacceptable across 80+ models and two proprietary battery platforms.",
        caseName: "inriver / Akeneo, Stibo / Informatica",
        caseDetail:
          "inriver and Akeneo ship agentic enrichment; Stibo and Informatica are Gartner MDM Leaders running regulated, multi-attribute catalogs at scale.",
        roi: "Clean product data gates the marketplace listing, the search, the AEO and the agentic intake. The cheapest insurance on the portfolio.",
        whatI95Does:
          "A real PIM with human-in-the-loop enrichment, standardizing model and battery-platform attributes across the dealer catalog.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      {
        id: "b2b-search-locator",
        pillar: "sales-marketing",
        title: "B2B semantic search and dealer locator",
        problem:
          "A dealer or a pro searches by model, application and battery platform, and a contractor needs the nearest stocking dealer. If search is not tuned and the locator is not wired to inventory, the order is lost before checkout.",
        caseName: "Dawn Foods",
        caseDetail:
          "AI search converts about 1.67 times keyword; Dawn Foods grew search queries 20x and online at triple-digit rates after tuning search on a wholesale catalog.",
        roi: "On a network this size, relevance and accurate dealer-locator results are measured upside on the channel that now carries marketplace orders.",
        whatI95Does:
          "Tune semantic search for model and battery intent, and wire the dealer locator to live dealer inventory.",
        credibility: "verified",
        source: SRC.dawn,
      },
      // THE BET
      {
        id: "agentic-bulk-intake",
        pillar: "storefront",
        title: "Agentic bulk-order intake",
        problem:
          "STIHL's largest dealers place bulk and seasonal stocking orders as emails, PDFs and spreadsheets, and the team rekeys them by hand.",
        caseName: "commercetools, JPW Industries",
        caseDetail:
          "commercetools built a B2B intake agent for Mirion that turns exactly those documents into structured quotes; JPW Industries cut order processing from 16 to 24 hours to under one hour with AI order automation.",
        roi: "Structured intake removes manual rekeying and error exactly as the marketplace and the battery transformation raise order volume.",
        whatI95Does:
          "An AI intake agent that turns bulk-order documents into validated, structured orders on the SAP and Mirakl rails.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
      {
        id: "agentic-commerce-aeo",
        pillar: "sales-marketing",
        title: "Agentic-commerce readiness and AEO",
        problem:
          "STIHL named \"Affiliates, AI\" as a reason to attend, and a catalog that is not machine-readable and not cited by AI engines is invisible to the AI buyer and the affiliate channel coming for outdoor power equipment.",
        caseName: "Gartner, AEO research",
        caseDetail:
          "Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; AI referrals grew 357% year on year and convert about 31% higher than organic, and almost no power-equipment seller has structured for it.",
        roi: "Readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on a foundation you are already building.",
        whatI95Does:
          "Structure battery-platform and spec content so AI engines cite STIHL, and make the catalog machine-purchasable for agents and affiliates.",
        credibility: "illustrative",
        source: SRC.gartner,
      },
    ],
    why: {
      opener: "You'll be sold a platform that replaces the backbone you just launched on. You do not need it.",
      body: "The platform pitch is a rebuild of the wrong layer. Your backbone is SAP and it works. Your marketplace is Mirakl and it is live. Your problem is the order spine: dealer-fulfilled orders that have to orchestrate across S/4HANA, SAP Commerce, Mirakl and 11,000 dealers, on a launch timeline, with the integration architect still a job posting. That is i95Dev's lane: deep in ERP-to-commerce integration, deep in order management, surgical, at mid-market economics. We orchestrate the order spine onto the SAP and Mirakl rails you already own and fill the missing dealer-fulfillment, onboarding and reorder logic, so the marketplace finally scales with the network. We do not migrate your ERP. We make it deliver.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against STIHL's real order, dealer and SAP-Mirakl data. Two weeks, not a platform rebuild.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
