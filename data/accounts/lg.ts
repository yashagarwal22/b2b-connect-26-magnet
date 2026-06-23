import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  ap2: { label: "Google AP2, 60+ partners (Mastercard/PayPal/Salesforce)", url: "https://cloud.google.com/" },
  openai: { label: "OpenAI Instant Checkout; Shopify Agentic Storefronts", url: "https://openai.com/" },
  dawn: { label: "Dawn Foods, triple-digit online growth, +10% baskets (commercetools)", url: "https://commercetools.com/" },
  watsco: { label: "Watsco, AI recs AOV +10% (Adobe / DC360)", url: "https://www.watsco.com/" },
  usfoods: { label: "US Foods, image-to-order +1.5 cases/order (DC360)", url: "https://www.usfoods.com/" },
  millipore: { label: "MilliporeSigma, approved-list reorder for recurring base", url: "https://www.milliporesigma.com/" },
  gartner: { label: "Gartner, 90% of B2B purchases AI-intermediated by 2028", url: "https://www.gartner.com/" },
  referrals: { label: "AI referrals 1.13B visits/mo, +357% YoY, ~31% higher conversion", url: "https://www.similarweb.com/" },
  search: { label: "AI search converts ~1.67x keyword (search-AI benchmarks)", url: "https://commercetools.com/" },
} as const;

/**
 * LG Electronics, an innovation-POC account (project-level budget, no active requirement, proud of a
 * custom Next.js headless storefront it already runs). Every section is grounded in the Account-360
 * profile and the AI research dump, and maps 1:1 to companies/lg/lg-spec.md.
 *
 * Spine: LG has bet its brand on AI ("Affectionate Intelligence," "Zero Labor Home," Agent appliances
 * at CES 2026) yet has no live agentic checkout on lg.com. The brand promises an appliance that thinks
 * for you, and the storefront still asks you to think for it. The moat is not the brand, it is the
 * installed base plus a fast-growing Home-as-a-Service subscription (~KRW 2.5T FY25, +29%): a recurring
 * relationship and a device that can reorder its own consumables is a natural agentic-commerce surface
 * no pure retailer owns. Make the AI brand true at checkout, proven as a low-cost pilot on one product
 * line, on the rails LG already owns. Write to Hemang Upadhyay (Sr Manager, Product Management for AI),
 * the champion who named the wedge ("Agentic Commerce"), with Nixalkumar Patel (Sr PM). Guardrails:
 * this is a POC not a platform deal, keep the custom Next.js storefront, Constructor search and Segment
 * CDP as the rails, do not re-platform onto SAP Hybris or Adobe, size to the project budget.
 */
export const lg: AccountConfig = {
  slug: "lg",
  companyName: "LG Electronics",
  aliases: [
    "LG",
    "LG Electronics Inc.",
    "LG North America",
    "LGE",
    "Home-as-a-Service",
    "webOS",
  ],
  domains: ["lg.com", "lge.com"],
  vertical: "manufacturing",
  verticalLabel: "Consumer electronics & home appliances, platform/service transformation",
  revenueBand: "KRW 23.73T Q1 2026 (record)",
  role: "Sr. Manager, Product Management (AI)",
  roleEmphasis: "ecommerce",
  activeRequirement: false,
  published: true,

  thesis: "You sell Affectionate Intelligence. Your checkout still doesn't have any.",
  wedge:
    "An agentic-commerce pilot that makes the AI brand true at checkout, on the headless storefront you already run",
  wedgeDetail:
    "It runs on LG's custom Next.js headless storefront, with Constructor search and Segment CDP already in place. It closes the gap between the \"Affectionate Intelligence\" brand and a storefront with no agentic checkout. It is the champion's literal ask. It is a low-cost, contained pilot suited to the project-level budget, ideally on the subscription and replenishment surface where agentic reorder is most natural: the connected appliance that orders its own consumables.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "A smarter appliance is a product launch. A checkout that completes itself is a brand kept.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. LG's work, at the point of sale, is the order: a buyer on lg.com, a connected appliance, a subscription that should reorder its own consumables. The edge is not another model behind the \"Affectionate Intelligence\" brand. It is making that brand true at checkout, on the Next.js storefront you already run, so the AI that greets the buyer in the ad is the same AI that completes the order. Prove it as a pilot on one product line, where the reorder is most natural.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI brands the website. Compounding AI makes the order complete itself, on the device and the subscription only you own.",
    commodity: [
      "Another chatbot on lg.com",
      "Generic recs that ignore the buyer's appliances",
      "AI ad copy for \"Affectionate Intelligence\"",
      "An \"AI strategy\" deck, not shipped agentic commerce",
    ],
    compounding: [
      "Agentic checkout that makes the AI brand true",
      "Personalization on Segment CDP and order history",
      "A subscription that reorders its own consumables",
      "Machine-readable catalog ready for AI buyers",
    ],
    pitchWarning:
      "You already built a custom Next.js headless storefront with your own cart API. Expect a pitch to re-platform it onto SAP Hybris or Adobe, or to bolt on a generic AI suite. Do not. The storefront works and the relationship lives in it. Run a contained agentic-commerce and personalization pilot on the rails you own, prove it on one product line, then scale. Make the brand true at checkout, not rebuild the checkout.",
  },

  // ── Module 2.5, Your Stack (Account 360 confirmed systems; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Custom Next.js headless storefront + proprietary cart API",
      leadPlay: "Ship agentic checkout on the storefront you already own",
      commodityFlag: "A re-platform to SAP Hybris or Adobe. You built the rail; build on it.",
    },
    {
      signal: "Segment CDP",
      leadPlay: "Drive account-based personalization on profiles you already unify",
      commodityFlag: "\"Buy a new CDP.\" You have Segment; activate it.",
    },
    {
      signal: "Constructor.io site search",
      leadPlay: "Tune semantic search for appliance and consumable intent",
      commodityFlag: "A rip-and-replace search bolt-on. You have Constructor; tune it.",
    },
    {
      signal: "Home-as-a-Service subscription (~KRW 2.5T, +29%)",
      leadPlay: "Turn the connected appliance into an agentic reorder surface",
      commodityFlag: "\"Add a loyalty program.\" The device can reorder itself; make it.",
    },
    {
      signal: "Oracle Cloud ERP (global single instance)",
      leadPlay: "Wire the pilot's order to the system of record cleanly",
      commodityFlag: "A new ERP-to-storefront platform. Keep Oracle as the record; integrate.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "agentic-checkout", label: "Agentic-commerce pilot (checkout)", compounding: 0.9, bolton: 0.74, magnitude: 5, lit: true, wedge: true },
    { id: "personalization", label: "AI personalization on D2C Online Brand Shop", compounding: 0.82, bolton: 0.78, magnitude: 4, lit: true },
    { id: "subscription", label: "Subscription / replenishment intelligence", compounding: 0.88, bolton: 0.58, magnitude: 4, lit: true },
    { id: "aeo", label: "Agentic readiness at scale / AEO", compounding: 0.86, bolton: 0.55, magnitude: 3, lit: true },
    { id: "semantic-search", label: "B2B semantic search (Constructor)", compounding: 0.68, bolton: 0.8, magnitude: 3, lit: true },
    { id: "reorder-nba", label: "Connected-appliance reorder NBA", compounding: 0.84, bolton: 0.5, magnitude: 3, lit: true },
    { id: "order-middleware", label: "Oracle-to-Next.js order middleware", compounding: 0.74, bolton: 0.4, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "ad-copy", label: "AI ad copy", compounding: 0.12, bolton: 0.82, magnitude: 1, lit: false },
    { id: "strategy-deck", label: "\"AI strategy\" deck", compounding: 0.2, bolton: 0.3, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [3, 12],
    moneyPools: [
      {
        id: "agentic-checkout",
        label: "Agentic-commerce pilot: make the brand true at checkout",
        range: [1, 4],
        note: "The infrastructure is shipping now: Google's Agent Payments Protocol AP2 launched with 60+ partners including Mastercard, PayPal and Salesforce, OpenAI's Instant Checkout went live, and Shopify stood up Agentic Storefronts. LG brands itself on \"Affectionate Intelligence\" but has no live agentic checkout. The value here is not a conversion number on a slide. It is being first to working agentic commerce on a brand that already promised it, proven on one product line at pilot cost.",
        credibility: "illustrative",
        source: SRC.ap2,
      },
      {
        id: "personalization",
        label: "AI personalization on the D2C Online Brand Shop",
        range: [0.5, 3],
        note: "LG already runs Segment CDP and Constructor search, so the rails for account-based, behavioral personalization are in place. Dawn Foods turned behavioral recommendations into triple-digit online growth and 10% bigger baskets; Watsco's AI recs lifted average order value 10%. On the D2C Online Brand Shop, surfacing the right next product to a logged-in buyer who already owns LG appliances is measured upside on a channel LG controls.",
        credibility: "verified",
        source: SRC.dawn,
      },
      {
        id: "subscription",
        label: "Subscription / replenishment intelligence",
        range: [1, 3],
        note: "Home-as-a-Service grew to ~KRW 2.5T in FY2025, up 29%, and the same households reorder the same consumables on a cycle. MilliporeSigma runs approved-list reorder for exactly this kind of recurring base. A connected appliance that knows it needs a filter, and an agent that can reorder it, turns a subscription into an agentic-commerce surface no pure retailer owns.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      {
        id: "aeo",
        label: "Agentic readiness at scale + AEO",
        range: [0.5, 2],
        note: "Gartner expects 90% of B2B purchases to be AI-intermediated by 2028, and AI engines already drove 1.13B referral visits in a single month, up 357% year on year. A catalog that is not machine-readable and machine-purchasable is invisible to the AI buyer, and to the AI assistant a shopper now starts in. Structuring LG's catalog and spec content for agents and answer engines is a low-cost option on the channel that defines 2027 and 2028.",
        credibility: "illustrative",
        source: SRC.gartner,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Agentic-checkout pilot on one product line",
        body: "Ship an agentic-commerce pilot on the Next.js storefront, on the product line where reorder is most natural, answering Hemang Upadhyay's \"Agentic Commerce\" ask and making \"Affectionate Intelligence\" true at checkout. It runs on rails LG owns and ships without a re-platform. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "AI personalization on the D2C Online Brand Shop",
        body: "Activate Segment CDP and order history to render the right next product to a logged-in buyer who already owns LG appliances. The personalization that LG named as its current priority, on the channel it controls.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Subscription intelligence and connected-appliance reorder",
        body: "Turn Home-as-a-Service into an agentic reorder surface: the connected appliance signals it needs a consumable, the agent reorders it, the subscription gets stickier every cycle. This is the moat no pure retailer can copy.",
      },
      {
        phase: "Phase 4, the spine and the bet",
        title: "Agentic readiness and AEO",
        body: "Make the catalog machine-readable and machine-purchasable for agents, and structure spec content so AI engines cite LG. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, leading with the agentic pilot and personalization on rails LG owns ──
    plays: [
      // THE PILOT
      {
        id: "agentic-checkout",
        pillar: "storefront",
        title: "Agentic-commerce checkout on the headless storefront",
        problem:
          "LG brands itself on \"Affectionate Intelligence\" and \"Zero Labor Home,\" yet lg.com has no live agentic checkout. The brand promised an AI that acts; the storefront still makes the buyer do the work. Agentic Commerce is the exact thing Hemang Upadhyay came to the conference for.",
        caseName: "Google AP2, OpenAI, Shopify",
        caseDetail:
          "Google's AP2 protocol launched with 60+ partners including Mastercard, PayPal and Salesforce; OpenAI Instant Checkout and Shopify Agentic Storefronts already ship agentic purchasing in consumer commerce.",
        roi: "The value is being first to working agentic commerce on a brand that already made the promise, proven on one product line at pilot cost, not a platform ROI.",
        whatI95Does:
          "An agentic-commerce pilot on the Next.js storefront with the proprietary cart API, grounded in Segment and the subscription relationship, on one product line.",
        credibility: "illustrative",
        source: SRC.ap2,
      },
      {
        id: "reorder-nba",
        pillar: "storefront",
        title: "Connected-appliance reorder next-best-action",
        problem:
          "The same households reorder the same filters and consumables on a cycle, but the reorder is still manual, and the connected appliance that knows it needs a part cannot act on it.",
        caseName: "Watsco, US Foods",
        caseDetail:
          "Watsco's AI recommendations lifted average order value 10%; US Foods' image-and-doc-to-order added 1.5 cases per order.",
        roi: "Growing a known, subscribed household is cheaper and higher-converting than winning a new buyer.",
        whatI95Does:
          "A reorder and next-best-action layer on the connected appliance and order history, surfaced in the buyer's account on the D2C Online Brand Shop.",
        credibility: "verified",
        source: SRC.watsco,
      },
      // THE PERSONALIZATION
      {
        id: "personalization",
        pillar: "storefront",
        title: "AI account-based personalization on the Online Brand Shop",
        problem:
          "A logged-in buyer who already owns LG appliances still sees generic recommendations, and personalization is LG's stated current priority.",
        caseName: "Dawn Foods",
        caseDetail:
          "Dawn Foods turned behavioral recs into triple-digit online growth and 10% bigger baskets; account-based personalization can lift revenue materially on a controlled D2C channel.",
        roi: "Surfacing the right next product to a known household is measured upside on a channel LG owns.",
        whatI95Does:
          "Activate Segment CDP and order history into account-based personalization on the Next.js storefront, no new CDP required.",
        credibility: "verified",
        source: SRC.dawn,
      },
      {
        id: "semantic-search",
        pillar: "sales-marketing",
        title: "B2B semantic search tuned for appliances and consumables",
        problem:
          "Buyers search by model, part and application, and a failed lookup on a consumable is a lost reorder.",
        caseName: "Dawn Foods, search-AI benchmarks",
        caseDetail:
          "AI search converts about 1.67 times keyword; Dawn Foods saw 20x search-query growth after tuning AI search.",
        roi: "On a catalog this broad, relevance is measured upside on the channel that already carries D2C orders.",
        whatI95Does:
          "Tune Constructor for appliance, part and consumable intent, no rip-and-replace.",
        credibility: "verified",
        source: SRC.search,
      },
      // THE SUBSCRIPTION
      {
        id: "subscription",
        pillar: "storefront",
        title: "Subscription / replenishment intelligence for Home-as-a-Service",
        problem:
          "Home-as-a-Service grew to ~KRW 2.5T, up 29%, but the subscription does not yet reorder its own consumables, so the most natural agentic surface LG owns sits idle.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma renders approved-list reorder per logged-in account; subscription reorder is production-ready on D2C platforms.",
        roi: "A subscription that reorders itself is stickier every cycle, and it is a moat no pure retailer can copy.",
        whatI95Does:
          "Turn the subscription into an agentic reorder surface, with the connected appliance as the trigger and a human-in-the-loop default.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      {
        id: "order-middleware",
        pillar: "back-office",
        title: "Oracle-to-Next.js order middleware",
        problem:
          "The agentic pilot's order has to land cleanly in Oracle Cloud ERP, and the middleware between the global single-instance ERP and the Next.js storefront is unconfirmed.",
        caseName: "MIT NANDA",
        caseDetail:
          "Clean order write-back into the system of record is the difference between a pilot that demos and a pilot that ships; MIT NANDA found 95% of pilots fail at exactly this last mile.",
        roi: "A pilot that writes back into Oracle is real value; one that does not is another demo.",
        whatI95Does:
          "Map and harden the order path from the Next.js cart to Oracle Cloud ERP, keeping Oracle as the system of record.",
        credibility: "illustrative",
        source: SRC.mit,
      },
      // THE BET
      {
        id: "agentic-readiness",
        pillar: "sales-marketing",
        title: "Agentic-commerce readiness at scale",
        problem:
          "The AI buyer is coming for appliances and consumables, and a catalog that is not machine-readable and machine-purchasable is invisible to it.",
        caseName: "Gartner, Google AP2",
        caseDetail:
          "Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; Google's AP2 and OpenAI Instant Checkout already ship agentic purchasing in consumer commerce.",
        roi: "Readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on the storefront LG already runs.",
        whatI95Does:
          "Make the catalog machine-purchasable for agents using AP2 and MCP, grounded in LG's product and subscription data.",
        credibility: "illustrative",
        source: SRC.gartner,
      },
      {
        id: "aeo",
        pillar: "sales-marketing",
        title: "Answer Engine Optimization for the AI buyer",
        problem:
          "Shoppers increasingly start in an AI assistant, and if the answer engine cites Samsung for \"best connected appliance,\" the order is lost before lg.com loads.",
        caseName: "AEO research",
        caseDetail:
          "AI engines drove 1.13B referral visits in a single month, up 357% year on year, and ChatGPT referrals convert about 31% higher than non-branded organic.",
        roi: "Citation is measured upside on a fast-growing acquisition channel almost no consumer-electronics seller has structured for.",
        whatI95Does:
          "Structure LG's spec and product content so AI engines cite LG for the appliance and the consumable.",
        credibility: "illustrative",
        source: SRC.referrals,
      },
    ],
    why: {
      opener: "You'll be sold a re-platform of the storefront you already built. You do not need it.",
      body: "The platform pitch rebuilds the wrong layer. Your storefront is a custom Next.js headless build with your own cart API, and it works. Your gap is the one your own brand created: \"Affectionate Intelligence\" and \"Zero Labor Home,\" with no agentic checkout to make it true. That is i95Dev's lane: deep in commerce, surgical, at mid-market economics, shipping a contained agentic-commerce and personalization pilot on the rails you own. We do not re-platform your storefront. We make the AI brand true at checkout, on one product line, with a real number behind it.",
      ctaTitle: "Book your Agentic-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against LG's real storefront, subscription and catalog data, and scopes a pilot on one product line. Two weeks, not a re-platform.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
