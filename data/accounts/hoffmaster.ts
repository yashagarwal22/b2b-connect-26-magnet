import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  watsco: { label: "Watsco / Adobe, digital shelf, AOV +10%", url: "https://www.watsco.com/" },
  kawasaki: { label: "Kawasaki Engines USA, B2B portal AOV +5x", url: "https://www.salesforce.com/" },
  watts: { label: "Watts Water, cited by Perplexity", url: "https://www.watts.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  salsify: { label: "M-D / Salsify digital-shelf syndication; Watsco", url: "https://www.salsify.com/" },
  demandbase: { label: "SAP Concur / Demandbase, +52% closed-won", url: "https://www.demandbase.com/" },
  bazaarvoice: { label: "Bazaarvoice, ratings and reviews digital-shelf lever", url: "https://www.bazaarvoice.com/" },
  mkm: { label: "MKM Building Supplies +82% revenue, +26% orders", url: "https://www.bigcommerce.com/" },
  commercetools: { label: "commercetools B2B Intake Agent (Mirion)", url: "https://commercetools.com/" },
} as const;

/**
 * Hoffmaster Group, a warm, active worked account (PE-owned, deleveraging). Every section is grounded
 * in the Account-360 profile and the AI research dump, and maps 1:1 to companies/hoffmaster/
 * hoffmaster-spec.md.
 *
 * Spine: Hoffmaster makes premium but sells through other people's shelves (foodservice distributors,
 * big-box, WebstaurantStore, Amazon), not first-party. A premium brand wins or loses at the digital
 * shelf it does not own, where design and ESG claims (FSC, compostable) either show clearly or get
 * buried under private label. The checkout reflex aims at the wrong place; most sales do not happen at
 * a Hoffmaster checkout. The first move is a product-data foundation that makes every listing sell the
 * premium, then commerce on top. Write to Dana Bulbin (Director, eCommerce), CIO Joe Van Derven on the
 * committee. Guardrails: do not call Magento the problem, do not lead with a Dynamics 365 migration
 * (integrate to Infor LX), do not assume a live checkout. Reconcile the stack (Magento status, ERP,
 * Pardot, revenue) live; copy leads with claims that hold regardless.
 */
export const hoffmaster: AccountConfig = {
  slug: "hoffmaster",
  companyName: "Hoffmaster",
  aliases: ["Hoffmaster Group", "Aardvark", "Creative Converting"],
  domains: ["hoffmaster.com", "hoffmastergroupinc.com"],
  vertical: "manufacturing",
  verticalLabel: "Premium single-use tableware and baking (manufacturer)",
  revenueBand: "$500M+",
  role: "Director, eCommerce",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "The fix isn't your checkout. It's the product data that sells premium on every shelf you don't own.",
  wedge:
    "A PIM foundation that makes every distributor and Amazon listing sell the premium",
  wedgeDetail:
    "It runs on the brand, design and ESG content you already own, it lifts the channels that actually drive your sales today, distributors, WebstaurantStore and Amazon, without waiting on a storefront decision, and it is the cheapest, lowest-risk first move for a business still deleveraging. Prove it on one division, then unify both.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone will sell you a checkout to optimize. Your sales don't happen at your checkout.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Your work is a premium brand sold through distributors, WebstaurantStore and Amazon, where the listing either shows the design and the FSC claim or buries them under a private-label competitor. The edge is not a new storefront or a chatbot. It is the product data only you can author, the design and the ESG credentials that make your premium read as premium on every shelf you do not own.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI optimizes a funnel you barely own. Compounding AI makes your premium win on every shelf.",
    commodity: [
      "Checkout tweaks on a funnel you don't control",
      "A generic chatbot on the brand site",
      "AI-written product copy at scale",
      "More performance media for acquisition",
    ],
    compounding: [
      "PIM that makes every listing sell the premium",
      "ESG and design claims structured for the digital shelf",
      "A distributor portal built on the ERP you run",
      "Marketing automation that nurtures distributors on Pardot",
    ],
    pitchWarning:
      "Expect a pitch for a checkout overhaul and a Dynamics 365 migration. Your orders run through Infor LX and your sales run through distributors and Amazon. Lead with the product data and the shelf, not a replatform you do not need while you are still deleveraging.",
  },

  // ── Module 2.5, Your Stack (verified dashboard research; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Infor LX (ERP, IBM i)",
      leadPlay: "Integrate commerce and a distributor portal to the ERP you actually run",
      commodityFlag: "A Dynamics 365 or SAP migration. Integrate to Infor LX, do not swap it.",
    },
    {
      signal: "Distributor, Amazon, WebstaurantStore channels",
      leadPlay: "Win the digital shelf: PIM-fed content, ESG claims and reviews where you sell",
      commodityFlag: "More ad spend. The shelf content sells the premium. Fix it first.",
    },
    {
      signal: "Salesforce Pardot",
      leadPlay: "Nurture distributors and buyers with marketing automation you already run",
      commodityFlag: "\"Buy a new platform.\" You have Pardot. The gap is activation.",
    },
    {
      signal: "Catalog across 30+ categories, two divisions",
      leadPlay: "One PIM across Foodservice and Consumer so the brand is consistent everywhere",
      commodityFlag: "A storefront rebuild first. Data is the foundation. Build it first.",
    },
    {
      signal: "Stripe payments",
      leadPlay: "Reconnect commerce to the payments you already run when the storefront returns",
      commodityFlag: "A payments re-architecture. Stripe stays. Orchestrate to it.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "pim", label: "PIM + digital shelf", compounding: 0.85, bolton: 0.8, magnitude: 4, lit: true, wedge: true },
    { id: "portal", label: "Distributor B2B portal (Infor LX)", compounding: 0.8, bolton: 0.5, magnitude: 4, lit: true },
    { id: "aeo", label: "AEO for premium / ESG tableware", compounding: 0.88, bolton: 0.65, magnitude: 3, lit: true },
    { id: "automation", label: "Marketing automation (Pardot)", compounding: 0.7, bolton: 0.72, magnitude: 3, lit: true },
    { id: "reviews", label: "Reviews and UGC (your Now)", compounding: 0.6, bolton: 0.8, magnitude: 2, lit: true },
    { id: "cross-sell", label: "Cross-sell across brands / divisions", compounding: 0.78, bolton: 0.55, magnitude: 3, lit: true },
    { id: "commerce", label: "Commerce rebuild + Infor LX", compounding: 0.72, bolton: 0.45, magnitude: 4, lit: true },
    { id: "agentic", label: "Agentic order intake / AI PIM", compounding: 0.9, bolton: 0.35, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "copy", label: "AI product copy", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "checkout", label: "Checkout-only CRO", compounding: 0.3, bolton: 0.7, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [7, 22],
    moneyPools: [
      {
        id: "shelf",
        label: "The shelf you don't own: distributor and Amazon listings",
        range: [3, 9],
        note: "Most of your sales reach the buyer on a distributor or Amazon page, where a thin or wrong listing hands a premium sale to private label. Watsco lifted average order value 10% with better digital-shelf content and recommendations. Most of that volume reaches buyers on channels like yours, not on a brand storefront. Better listing data is the highest-reach dollar you can spend.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "distributor",
        label: "The distributor relationship: a portal and nurture",
        range: [2, 6],
        note: "You sell through distributors but engage them through spreadsheets and email. Kawasaki Engines USA put dealers on a B2B portal with order automation and saw average order value rise fivefold since launch. The same connected-commerce move grows the distributor relationships you already have.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      {
        id: "discovery",
        label: "Premium discovery: AEO and reviews for design and ESG",
        range: [1, 4],
        note: "A foodservice buyer now asks an AI for \"compostable catering supplies\" or \"premium dinner napkins,\" and the answer engine cites whoever structured their claims. Watts structured its content so Perplexity cites it over rivals, and AI referrals grew 357% year on year. Your FSC and compostable credentials are exactly the proof these engines reward, and few in your category have done it.",
        credibility: "illustrative",
        source: SRC.watts,
      },
      {
        id: "foundation",
        label: "The data foundation: one PIM across two divisions",
        range: [1, 3],
        note: "30 to 60% of B2B catalogs have incomplete attributes, and with two divisions and 30+ categories and no evident PIM, that gap caps every channel at once. A single PIM cuts manual stewardship 60 to 70% and gates the ROI of the three pools above. It is the cheapest insurance on the whole portfolio.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "PIM and the digital shelf",
        body: "Stand up one PIM across both divisions and push clean, claim-rich, image-complete content to every distributor and Amazon listing. It runs on data you own, lifts the channels that drive sales today, and is the lowest-risk first move while you deleverage. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "The distributor portal and Pardot nurture",
        body: "Build a B2B distributor portal integrated to Infor LX, with reordering and PunchOut into customer eProcurement, and activate Salesforce Pardot to nurture distributors and buyers. This turns transactional accounts into managed digital relationships.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Commerce rebuild and AEO",
        body: "With the stack reconciled, rebuild the DTC and B2B storefront integrated to Infor LX and retaining Stripe, and structure your design and ESG content so AI engines cite Hoffmaster for premium and sustainable tableware. The storefront decision lands here, after the data foundation is paying.",
      },
      {
        phase: "Phase 4, the bet",
        title: "Cross-division cross-sell and agentic readiness",
        body: "Add cross-sell across Foodservice and Consumer brands, and stand up agentic order intake that turns distributor emails, PDFs and spreadsheets into structured orders. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, spanning the foundation, the distributor channel, discovery, and the bet ──
    plays: [
      // FOUNDATION & THE SHELF
      {
        id: "pim",
        pillar: "storefront",
        title: "PIM and digital-shelf control",
        problem:
          "Most of your sales land on distributor and Amazon pages, where thin or inconsistent product data lets a private-label competitor out-merchandise a premium brand on its own listing.",
        caseName: "M-D / Salsify, Watsco",
        caseDetail:
          "M-D Building Products runs Salsify to syndicate content across Home Depot, Lowe's and Amazon; Watsco lifted average order value 10% with digital-shelf discipline and recommendations.",
        roi: "Better listing data is the highest-reach dollar you can spend, because it lifts every channel you sell through at once.",
        whatI95Does:
          "One PIM across both divisions that authors clean, claim-rich, image-complete content and syndicates it to every distributor, marketplace and retail channel.",
        credibility: "verified",
        source: SRC.salsify,
      },
      {
        id: "mdm",
        pillar: "foundation",
        title: "AI Master Data foundation across two divisions",
        problem:
          "30 to 60% of B2B catalogs have incomplete attributes, and with two divisions, 30+ categories and no evident PIM, the gap caps search, syndication and AEO simultaneously.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Stibo and Informatica are Gartner MDM Leaders; agentic PIM enriches attributes from supplier and spec documents with human-in-the-loop.",
        roi: "60 to 70% less manual stewardship, and it gates the ROI of every other play. The cheapest insurance on the portfolio.",
        whatI95Does:
          "AI-enriched MDM that standardizes attributes, units and ESG claims across both divisions and feeds the shelf, the portal and discovery from one source.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      // THE DISTRIBUTOR CHANNEL
      {
        id: "portal",
        pillar: "storefront",
        title: "A B2B distributor portal on Infor LX",
        problem:
          "You sell through distributors but engage them through spreadsheets and email, with no self-service reorder, pricing visibility or PunchOut into their procurement.",
        caseName: "Kawasaki Engines USA, Dawn Foods",
        caseDetail:
          "Kawasaki Engines USA put dealers on a B2B portal with order automation and saw average order value rise fivefold since launch; Dawn Foods, an ingredient wholesaler, saw triple-digit online growth on connected commerce.",
        roi: "A connected distributor portal lowers cost-to-serve and grows the relationships you already have, on the ERP you already run.",
        whatI95Does:
          "A distributor portal with reorder, contract pricing and PunchOut into customer eProcurement, integrated to Infor LX and retaining Stripe.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      {
        id: "automation",
        pillar: "sales-marketing",
        title: "Marketing automation and distributor nurture on Pardot",
        problem:
          "Acquisition and retention are stated goals, but distributor and buyer nurture is manual, and the Pardot you already run is underused.",
        caseName: "SAP Concur / Demandbase",
        caseDetail:
          "SAP Concur activated first-party intent with Demandbase and lifted closed-won 52%. The same signal sits unused in the Pardot you already run.",
        roi: "Activating a platform you already pay for is reallocation, not new spend, and it compounds the portal and the shelf.",
        whatI95Does:
          "Lifecycle and distributor-nurture programs on Pardot, wired to the portal and the order data in Infor LX.",
        credibility: "verified",
        source: SRC.demandbase,
      },
      // DISCOVERY & THE STOREFRONT
      {
        id: "aeo",
        pillar: "storefront",
        title: "Answer Engine Optimization for premium and sustainable tableware",
        problem:
          "Foodservice and party buyers now ask AI for \"compostable catering supplies\" or \"premium dinner napkins,\" and the answer engine cites whoever structured their claims, not the strongest brand.",
        caseName: "Watts Water",
        caseDetail:
          "Watts structured its content so Perplexity cites it over rivals, while AI referrals grew 357% year on year.",
        roi: "Your FSC, SFI and compostable credentials are exactly the structured proof these engines reward, and few in the category have done it.",
        whatI95Does:
          "Structure design, application and ESG content so AI engines cite Hoffmaster brands for the premium and sustainable terms buyers search.",
        credibility: "illustrative",
        source: SRC.watts,
      },
      {
        id: "reviews",
        pillar: "storefront",
        title: "Reviews, UGC and content (your \"Now\")",
        problem:
          "Customer Reviews and Forums are a stated near-term priority, but a premium brand with thin reviews on distributor and marketplace pages loses to better-rated private label.",
        caseName: "Bazaarvoice",
        caseDetail:
          "Bazaarvoice-style ratings and reviews are among the most reliable digital-shelf conversion levers, and they feed the same AI engines that now answer buyers.",
        roi: "Structured reviews lift both conversion and AI citation, on the channels that carry your sales.",
        whatI95Does:
          "A reviews and UGC program syndicated across owned and distributor channels, feeding both the shelf and AEO.",
        credibility: "illustrative",
        source: SRC.bazaarvoice,
      },
      {
        id: "commerce",
        pillar: "storefront",
        title: "DTC and B2B commerce rebuild integrated to Infor LX",
        problem:
          "The direct storefront has regressed, and any rebuild must connect to the ERP you actually run rather than triggering a costly platform migration.",
        caseName: "MKM Building Supplies",
        caseDetail:
          "MKM Building Supplies rebuilt on composable B2B commerce for +82% revenue and +26% web orders; the pattern is a modern storefront on the existing ERP, not a rip-and-replace.",
        roi: "A storefront rebuilt on clean PIM data and integrated to Infor LX converts the demand the shelf and AEO now create.",
        whatI95Does:
          "A modern DTC and B2B storefront on the reconciled stack, integrated to Infor LX, retaining Stripe, fed by the PIM.",
        credibility: "verified",
        source: SRC.mkm,
      },
      // THE BET
      {
        id: "agentic",
        pillar: "sales-marketing",
        title: "Cross-division cross-sell and agentic order intake",
        problem:
          "Foodservice and Consumer still sell as separate brands, and distributor orders still arrive as emails, PDFs and spreadsheets that staff rekey by hand.",
        caseName: "commercetools, Mirion",
        caseDetail:
          "commercetools built a B2B intake agent for Mirion that turns emails, PDFs and spreadsheets into structured quotes; Gartner expects 90% of B2B purchases to be AI-intermediated by 2028.",
        roi: "Agentic intake removes manual order handling, and cross-division cross-sell grows basket on relationships you already hold.",
        whatI95Does:
          "Cross-brand next-best-action plus agentic order intake that structures distributor orders into Infor LX automatically.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
    ],
    why: {
      opener: "You'll be sold a $3M replatform. Your first dollar is in the product data you already have.",
      body: "The platform pitch is the most expensive way to start, and it spends scarce capital on the smallest slice of your business while the premium keeps losing on the shelf. Your first move is cheaper and higher-reach: the product data that makes every distributor and Amazon listing sell premium, integrated to the Infor LX you actually run. That is i95Dev's lane: surgical, deep in commerce, ERP and product data, on mid-market economics. We do not migrate you to Dynamics or rebuild before the data pays. We make the shelf win first, then the storefront.",
      ctaTitle: "Book your Digital Shelf and Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against Hoffmaster's real channel and product data, and reconciles the stack before anyone proposes a build. Two weeks, not a $3M replatform.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
