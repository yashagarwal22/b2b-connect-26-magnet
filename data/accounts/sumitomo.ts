import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  watts: { label: "Watts Water, cited by Perplexity over rivals", url: "https://www.watts.com/" },
  grainger: { label: "Grainger, RAG over 2.5M SKUs (Databricks)", url: "https://www.grainger.com/" },
  schneider: { label: "Schneider Electric, guided config 72h to ~90s", url: "https://www.se.com/" },
  commercetools: { label: "commercetools B2B Intake Agent (Mirion)", url: "https://commercetools.com/" },
  sandvik: { label: "Sandvik Coromant AI enablement pilot (Microsoft)", url: "https://www.sandvik.coromant.com/" },
  kawasaki: { label: "Kawasaki Engines USA, self-serve B2B AOV +5x (DC360)", url: "https://www.salesforce.com/" },
  jpw: { label: "JPW Industries, order processing 16–24h to under 1h", url: "https://www.salesforce.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  millipore: { label: "MilliporeSigma, account-based reorder for technical buyers", url: "https://www.milliporesigma.com/" },
  referrals: { label: "AI referrals +357% YoY, ~31% higher conversion (2025)", url: "https://www.similarweb.com/" },
  sew: { label: "SEW-Eurodrive ~36% market share, Account 360", url: "https://www.sew-eurodrive.com/" },
} as const;

/**
 * Sumitomo Drive Technologies, a relationship-and-nurture account (channel-led, parent under cost
 * pressure). Every section is grounded in the Account-360 profile and the AI research dump, and maps
 * 1:1 to companies/sumitomo/sumitomo-spec.md.
 *
 * Spine: in motion control the deal is won at specification, not in a cart, and that moment is moving
 * to the AI answer engine. Sumitomo is the challenger to SEW-Eurodrive (~36% share) and already owns
 * the asset that wins the citation, a 2D/3D CAD configurator run since 2011 plus uncontested patented
 * Cyclo authority, structured for human engineers but not yet for the machines that now answer them.
 * Make the existing engine machine-readable and defend specification share. Write to Karlaa Gregory
 * (Digital Marketing Manager, B2B Connect speaker on AI search), with Sara Zimmerman (VP CX & Product)
 * as sponsor and Nate Flora (CFO/IT) as economic buyer. Guardrails: do not pitch a transactional D2C
 * storefront (it fights the ISC/Adroit distributor and rep channel), keep it capital-light, and ignore
 * the AI-generated "matrixbcg.com" figures. This is a nurture, sized honestly.
 */
export const sumitomo: AccountConfig = {
  slug: "sumitomo",
  companyName: "Sumitomo Drive",
  aliases: [
    "Sumitomo Drive Technologies",
    "Sumitomo Machinery Corporation of America",
    "SMA",
    "Sumitomo Heavy Industries",
    "Cyclo",
    "Paramax",
  ],
  domains: ["sumitomodrive.com"],
  vertical: "manufacturing",
  verticalLabel: "Power transmission and motion control",
  revenueBand: "$150–300M",
  role: "Digital Marketing Manager",
  roleEmphasis: "ai-strategy",
  activeRequirement: false,
  published: true,

  thesis: "Engineers now spec drives through AI. Make the answer Cyclo, not the incumbent.",
  wedge:
    "Answer Engine Optimization that makes your configurator and Cyclo specs the cited answer when an engineer specs a drive",
  wedgeDetail:
    "It runs on the 2D and 3D CAD configurator and spec library you have run since 2011, so there is nothing to replatform. Almost no drive maker has structured this for AI, which makes the citation window open right now. It is capital-light, it fits the parent's cost line, and it is exactly the shift your own speaker is presenting.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. You already own the asset that wins: a configurator no one has taught the machines to read.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Your edge is not a new model or a new platform. It is the configurator you have run since 2011, the CAD and spec library behind it, and the patented Cyclo authority no competitor can claim. The work is making the answer engines read it, so when an engineer specs a drive, the AI cites you.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the configurator and authority only you own.",
    commodity: [
      "A chatbot bolted onto the site",
      "A storefront that competes with your distributors",
      "An \"AI portal\" relabeled from last year's CMS",
      "Generic recs that ignore application and duty cycle",
    ],
    compounding: [
      "AEO, so AI cites your Cyclo specs at specification",
      "Configurator answers, finally machine-readable",
      "Aftermarket reorder that respects the channel",
      "Specification intelligence in your engineers' hands",
    ],
    pitchWarning:
      "With a cost-conscious parent and a distributor channel, you will be pitched two wrong things: a transactional storefront that quietly competes with ISC and Adroit, and an \"AI portal\" that is last year's CMS with a new label. Skip both. A storefront fights the channel that sells your drives, and a relabeled portal is the kind of project that lands in the 95% that return nothing. The capital-light win is making the configurator you already run the answer AI gives.",
  },

  // ── Module 2.5, Your Stack (verified dashboard research; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Drupal 11 + 2011 CAD configurator",
      leadPlay: "Make the configurator the answer layer: structured spec and CAD feeds",
      commodityFlag: "A replatform. The unlock is structured data, not a new CMS.",
    },
    {
      signal: "Salesforce CRM",
      leadPlay: "Route AI-sourced and configurator leads to the right distributor or rep",
      commodityFlag: "\"Agentforce for everything.\" It only works on clean data.",
    },
    {
      signal: "Distributor and rep channel (ISC, Adroit)",
      leadPlay: "Co-sell enablement and lead routing, never a cart that bypasses them",
      commodityFlag: "A D2C storefront. It fights the channel that sells your drives.",
    },
    {
      signal: "CAD drawings and spec sheets",
      leadPlay: "Machine-readable feeds so AI cites Sumitomo's specs by application",
      commodityFlag: "\"More SEO content.\" You do not need more; you need it cited.",
    },
    {
      signal: "Aftermarket parts and service",
      leadPlay: "Channel-safe self-serve reorder for known parts and service",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "aeo", label: "AEO + answer layer", compounding: 0.95, bolton: 0.85, magnitude: 5, lit: true, wedge: true },
    { id: "cpq", label: "Configurator-to-quote / CPQ", compounding: 0.82, bolton: 0.55, magnitude: 4, lit: true },
    { id: "aftermarket", label: "Aftermarket reorder (channel-safe)", compounding: 0.7, bolton: 0.55, magnitude: 4, lit: true },
    { id: "pim", label: "AI PIM for spec and CAD data", compounding: 0.85, bolton: 0.35, magnitude: 4, lit: true },
    { id: "spec-intel", label: "Specification intelligence", compounding: 0.75, bolton: 0.5, magnitude: 3, lit: true },
    { id: "cx", label: "CX personalization on self-serve", compounding: 0.7, bolton: 0.55, magnitude: 3, lit: true },
    { id: "storefront", label: "Transactional D2C storefront", compounding: 0.35, bolton: 0.6, magnitude: 2, lit: false },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "portal", label: "Relabeled \"AI portal\"", compounding: 0.25, bolton: 0.6, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [2, 8],
    moneyPools: [
      {
        id: "specification",
        label: "Specification share: the decisions you defend against SEW",
        range: [1, 4],
        note: "SEW-Eurodrive holds about 36% of the market; Sumitomo wins one specification at a time on Cyclo reliability. Every spec decision that now starts at an AI is a decision the incumbent can take if the AI cites it and not you. This pool is denominated in specification influence, because the revenue lands through your distributors, not a storefront.",
        credibility: "illustrative",
        source: SRC.sew,
      },
      {
        id: "discovery",
        label: "Discovery: the answer at the moment engineers choose",
        range: [0.5, 2],
        note: "AI engines drove 1.13B referral visits in June 2025, up 357% year on year, and 66% of senior UK B2B buyers now use AI for supplier research, a leading indicator for the US. Watts structured its spec guides so Perplexity cites it over rivals in its category. For a challenger, being the cited answer is the cheapest share you will ever take.",
        credibility: "illustrative",
        source: SRC.referrals,
      },
      {
        id: "aftermarket",
        label: "Aftermarket: channel-safe reorder of known parts",
        range: [0.5, 2],
        note: "Replacement parts and service for installed Cyclo and Paramax drives are a recurring, predictable line that a self-serve reorder can capture without competing with your distributors on new-drive specification. Kawasaki Engines grew average order value 5x after adding self-serve B2B ordering for known buyers.",
        credibility: "illustrative",
        source: SRC.kawasaki,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Make the configurator the answer",
        body: "Structure the spec sheets, CAD data and Cyclo content the configurator already produces into machine-readable feeds, and point them at the categories where Cyclo wins, so AI engines cite Sumitomo at specification. It runs on an asset from 2011, costs little, and is exactly the thesis your own speaker is presenting. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Connect the answer to the channel",
        body: "Add configurator-to-quote with rules and approvals, and route AI-sourced and configurator leads to the right distributor or rep automatically through Salesforce. This converts discovery into specified, channel-delivered pipeline without a cart.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Aftermarket and experience",
        body: "Stand up channel-safe self-serve reorder for known parts and service, and add light CX personalization on the engineering self-serve experience under Sara Zimmerman's mandate. These compound the wedge and give the CX sponsor a visible win.",
      },
    ],
    // ── The play shortlist, capital-light and channel-safe across discovery, conversion and CX ──
    plays: [
      // DISCOVERY
      {
        id: "aeo",
        pillar: "storefront",
        title: "AEO and the answer layer that cites Cyclo",
        problem:
          "The engineer specifying a drive asks an AI first. If it cites SEW or generic specs, the challenger loses the frame before a sales engineer is ever called.",
        caseName: "Watts Water, Grainger",
        caseDetail:
          "Watts structured its spec guides so Perplexity cites it over rivals for a category selection question; Grainger runs RAG over 2.5M SKUs in production, proving spec-grounded answers scale.",
        roi: "ChatGPT referrals convert about 31% higher than non-branded organic, and AI referrals grew 357% year on year. For a challenger, the cited answer is the cheapest share available.",
        whatI95Does:
          "Turn the configurator's spec and CAD output into a machine-readable answer layer for the applications where Cyclo wins, on Drupal, no replatform.",
        credibility: "illustrative",
        source: SRC.watts,
      },
      {
        id: "spec-intel",
        pillar: "sales-marketing",
        title: "Specification intelligence for sales engineers",
        problem:
          "Your edge is the sales engineer who knows which drive fits a duty cycle, but that knowledge is uneven and slow to reach the field.",
        caseName: "Sandvik Coromant, Gartner",
        caseDetail:
          "A Sandvik Coromant AI enablement pilot saved 120+ hours and about $19K in three weeks; Gartner finds next-best-action teams are 2.6x more likely to hit commercial growth.",
        roi: "A copilot grounded in the configurator and Cyclo data makes every sales engineer as sharp as your best one, shortening the specification cycle.",
        whatI95Does:
          "A sales-engineer assistant grounded in your spec library and application rules, inside Salesforce.",
        credibility: "illustrative",
        source: SRC.sandvik,
      },
      // CONVERSION (channel-safe)
      {
        id: "cpq",
        pillar: "storefront",
        title: "Configurator-to-quote and CPQ, routed to the channel",
        problem:
          "The configurator produces a spec, but turning that into a quote and the right distributor handoff is manual and leaks time and leads.",
        caseName: "Schneider Electric, Mirion",
        caseDetail:
          "Schneider Electric cut complex breaker configuration from 72 hours to about 90 seconds with guided configuration; Mirion Technologies is deploying an intake agent that turns PDFs and emails into structured quotes.",
        roi: "Faster, accurate quotes close more of a long specification cycle, and clean routing keeps the distributor relationship intact.",
        whatI95Does:
          "Configurator-to-quote with rules and approvals, with automatic routing to the right distributor or rep through Salesforce, never a cart that bypasses them.",
        credibility: "illustrative",
        source: SRC.schneider,
      },
      {
        id: "aftermarket",
        pillar: "storefront",
        title: "Aftermarket reorder for known parts and service",
        problem:
          "Replacement parts and service for installed drives are recurring and predictable, but ordering them is still a manual, channel-routed task.",
        caseName: "Kawasaki Engines, JPW Industries",
        caseDetail:
          "Kawasaki Engines grew average order value 5x after adding self-serve B2B ordering for known buyers; JPW Industries cut order processing from 16 to 24 hours to under 1 hour.",
        roi: "Captures a recurring revenue line that does not compete with distributors on new-drive specification, the one safe transactional step.",
        whatI95Does:
          "A channel-safe self-serve reorder for known parts and service, integrated with Salesforce and the existing order tracking.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      // FOUNDATION & CX
      {
        id: "pim",
        pillar: "foundation",
        title: "AI PIM for spec and CAD data (the foundation)",
        problem:
          "AEO, the configurator and CPQ all fail on inconsistent product data, and 30 to 60% of B2B catalogs have incomplete attributes.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Stibo and Informatica, Gartner MDM Leaders, run agentic PIM that enriches attributes from engineering documents with human-in-the-loop review.",
        roi: "Cuts manual stewardship and gates the ROI of the answer layer and the configurator at once. The cheapest insurance on the program.",
        whatI95Does:
          "A PIM that standardizes Cyclo and Paramax spec and CAD data once and feeds the answer layer, the configurator and aftermarket from one source.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      {
        id: "cx",
        pillar: "storefront",
        title: "CX personalization on the engineering self-serve experience",
        problem:
          "The self-serve experience treats every engineer the same, with no memory of application, prior drawings or duty cycle.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma runs account-based experiences and reorder for technical buyers, the pattern an engineer expects on return.",
        roi: "A personalized self-serve experience deepens the relationship Sara Zimmerman's CX mandate is built to grow, without touching the channel.",
        whatI95Does:
          "Light personalization on the existing self-serve experience, keyed to application and account, integrated with Salesforce.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
    ],
    why: {
      opener: "You do not need a transformation. You need the configurator you already run to be the answer AI gives.",
      body: "A $3M transformation is the wrong tool for a challenger whose advantage is a decade-old configurator and the Cyclo name. Your move is surgical and capital-light: structure the data, win the specification at the answer engine, route the demand to your distributors. That is exactly i95Dev's lane, deep in commerce and the data layer, and disciplined enough to respect the channel and the parent's cost line. We do not build you a storefront that fights your distributors. We make your existing engine impossible for AI to ignore.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee readiness assessment that validates these directional numbers against Sumitomo's configurator and data. Two weeks, capital-light, not a $3M transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
