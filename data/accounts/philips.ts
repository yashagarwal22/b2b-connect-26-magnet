import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  dawn: { label: "Dawn Foods baskets +10% on behavioral personalization (commercetools / DC360)", url: "https://commercetools.com/" },
  watsco: { label: "Watsco AI recs, AOV +10% (Adobe / DC360)", url: "https://www.watsco.com/" },
  jci: { label: "Johnson Controls, $40M from 23 accounts (Beyond the Arc)", url: "https://www.johnsoncontrols.com/" },
  usfoods: { label: "US Foods AI ordering, +1.5 cases/order (DC360)", url: "https://www.usfoods.com/" },
  cdp: { label: "CDP activation +20–40% efficiency, +10–25% retention (research dump, Part 4.7)", url: "https://www.salesforce.com/" },
  stibo: { label: "inriver / Akeneo agentic enrichment; Stibo / Informatica MDM Leaders (Gartner MDM)", url: "https://www.stibosystems.com/" },
  searchAi: { label: "AI search converts ~1.67x keyword (research dump, Part 3.2)", url: "https://www.similarweb.com/" },
  ap2: { label: "Google AP2 / OpenAI Instant Checkout", url: "https://cloud.google.com/" },
  decagon: { label: "Decagon / Hunter Douglas $1M; SharkNinja 250,000 conversations", url: "https://decagon.ai/" },
} as const;

/**
 * Philips Personal Health, a top-segment DTC account where the moat is the recurring replenishment
 * relationship and the connected installed base. Every section is grounded in the Account-360 profile
 * and the AI research dump, and maps 1:1 to companies/philips/philips-spec.md.
 *
 * Spine: Personal Health is Philips' DTC engine and its top performer (+9.0% comparable, 15.8% margin
 * Q1 2026). The diagnostic systems get the headlines; the toothbrush pays the bills. The moat is the
 * installed base of connected personal-health devices and the recurring replenishment relationship (a
 * brush head, a blade) that no pure retailer can reach. Antonio Espinoza (Global Head of Digital
 * Marketing and Ecommerce, budget and strategy authority) came asking for AI personalization,
 * omnichannel orchestration, and agentic marketing. The reframe: personalization is not banner testing,
 * it is making the recurring relationship intelligent on the device the customer already owns, across
 * every channel. Guardrails: Valtech is the entrenched DX SI on the Hybris storefront (10+ BUs, 20+
 * projects since 2014), so position i95Dev as the specialist complement on the AI personalization,
 * agentic-marketing and replenishment layer, never as a storefront rip-out.
 */
export const philips: AccountConfig = {
  slug: "philips",
  companyName: "Philips Personal Health",
  aliases: [
    "Koninklijke Philips N.V.",
    "Philips",
    "Philips Personal Health",
    "Sonicare",
    "OneBlade",
  ],
  domains: ["philips.com"],
  vertical: "cpg",
  verticalLabel: "Health technology / consumer DTC eCommerce",
  revenueBand: "Personal Health segment (Group Q1 2026 sales EUR 3.9B)",
  role: "Global Head of Digital Marketing & Ecommerce",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "Your top-performing segment runs on a recurring relationship. Make it intelligent on every channel.",
  wedge:
    "AI personalization and agentic reorder on the Personal Health subscription base, across every channel",
  wedgeDetail:
    "It runs on the subscription and replenishment relationship and the connected-device installed base Philips already owns, it is the buyer's literal three-part ask, it compounds on the top-performing segment, and it proves fast on the highest-volume replenishment SKUs (brush heads, blades) before any broader omnichannel work. Prove it on Sonicare brush-head reorder, then extend the same intelligent reorder rails across OneBlade blades and the grooming range.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "A personalization banner is a demo. The customer wants the reorder to arrive before the brush head wears out.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Philips' work in Personal Health is the recurring relationship: a Sonicare brush head, a OneBlade blade, bought again and again by a customer whose connected device Philips already sees. The edge is not a smarter homepage. It is making that reorder intelligent across every channel, on the 1.3M connected devices and the subscription base you already own, so the top-performing segment compounds on data a retailer cannot reach.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI dresses up the storefront. Compounding AI makes the reorder right, on rails a retailer cannot copy.",
    commodity: [
      "A chatbot bolted onto the Hybris storefront",
      "Generic recs that ignore the device a customer owns",
      "AI-written banner copy at scale",
      "An \"AI personalization\" deck, not shipped reorder",
    ],
    compounding: [
      "AI agentic reorder on the subscription base",
      "Device-aware personalization on 1.3M connected units",
      "Omnichannel orchestration grounded in CRM and reorder data",
      "Churn and cross-sell NBA on the installed base",
    ],
    pitchWarning:
      "You already run a capable Hybris storefront with Valtech behind it. Expect a pitch to rip it out for a fashionable composable re-platform. Do not lead with that. The relationship is the reorder and the device, not the page template. Add the AI personalization, agentic reorder and omnichannel layer on top of the storefront and the SAP backbone you own. Make the recurring relationship intelligent, not the homepage prettier.",
  },

  // ── Module 2.5, Your Stack (Account 360 confirmed; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "SAP Commerce Cloud (Hybris) DTC storefront",
      leadPlay: "Layer device-aware personalization and agentic reorder on the storefront you already run",
      commodityFlag: "A full composable rip-out. Add the AI layer first; re-platform is a separate decision.",
    },
    {
      signal: "Subscription / replenishment (OneBlade, Sonicare) live",
      leadPlay: "Turn passive auto-ship into intelligent, predicted reorder timed to device wear",
      commodityFlag: "\"More email cadence.\" The signal is the device, not the calendar.",
    },
    {
      signal: "1.3M connected IoT devices, 134 PB data",
      leadPlay: "Use device telemetry to personalize and trigger reorder competitors cannot see",
      commodityFlag: "A generic CDP build. You already hold the signal; activate it.",
    },
    {
      signal: "Salesforce CRM",
      leadPlay: "Wire churn and cross-sell next-best-action to the storefront and the customer",
      commodityFlag: "A standalone marketing tool that ignores purchase history. Ground NBA in CRM.",
    },
    {
      signal: "Coveo AI site search + Bazaarvoice reviews",
      leadPlay: "Tune search and UGC for the recurring buyer, not just the first-time visitor",
      commodityFlag: "A rip-and-replace search bolt-on. You have Coveo; tune it for replenishment intent.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "ai-pers-reorder", label: "AI personalization + agentic reorder", compounding: 0.92, bolton: 0.7, magnitude: 5, lit: true, wedge: true },
    { id: "churn-cross-sell", label: "Churn + cross-sell NBA (installed base)", compounding: 0.85, bolton: 0.62, magnitude: 4, lit: true },
    { id: "omnichannel", label: "Omnichannel orchestration", compounding: 0.8, bolton: 0.45, magnitude: 5, lit: true },
    { id: "consumer-pim", label: "Consumer PIM + clean product data", compounding: 0.82, bolton: 0.35, magnitude: 3, lit: true },
    { id: "device-aware", label: "Device-aware personalization (IoT)", compounding: 0.9, bolton: 0.4, magnitude: 4, lit: true },
    { id: "semantic-search", label: "B2C semantic search (Coveo) tuning", compounding: 0.68, bolton: 0.78, magnitude: 3, lit: true },
    { id: "agentic-aeo", label: "Agentic-commerce + AEO readiness", compounding: 0.88, bolton: 0.58, magnitude: 3, lit: true },
    { id: "reviews-ugc", label: "Reviews + UGC intelligence (Bazaarvoice)", compounding: 0.7, bolton: 0.66, magnitude: 2, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "banner-copy", label: "AI banner copy", compounding: 0.12, bolton: 0.82, magnitude: 1, lit: false },
    { id: "pers-deck", label: "\"AI personalization\" deck", compounding: 0.2, bolton: 0.3, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [15, 40],
    moneyPools: [
      {
        id: "wedge-reorder",
        label: "The wedge: AI personalization + agentic reorder",
        range: [6, 16],
        note: "Personalization done on account and behavior, not banners, moves baskets: Dawn Foods grew baskets 10% with behavioral recs, and Watsco lifted average order value 10% with AI recommendations. Philips already owns the device signal and the subscription base, so a predicted reorder timed to brush-head wear converts where a generic auto-ship reminder does not. On the highest-volume replenishment SKU, a few points of reorder conversion and subscription retention is the largest line in the model.",
        credibility: "illustrative",
        source: SRC.dawn,
      },
      {
        id: "omnichannel",
        label: "Omnichannel orchestration across every channel",
        range: [4, 11],
        note: "The same customer touches the storefront, email, the device app and retail, and today each channel treats them as new. Orchestration grounded in CRM and reorder history makes the next touch on any channel reflect the last, which is the second item on Espinoza's literal brief. Personalization that runs across channels rather than on one page is where the directional +10–25% retention and +20–40% efficiency in the CDP benchmarks actually lands.",
        credibility: "illustrative",
        source: SRC.cdp,
      },
      {
        id: "churn-cross-sell",
        label: "Churn, retention and cross-sell on the installed base",
        range: [3, 9],
        note: "Growing a customer who already owns a Philips device is cheaper and converts higher than winning a new one: cross-sell converts 3 to 4x, and new-customer acquisition costs 5 to 7x expansion. Johnson Controls unlocked $40M from 23 accounts with whitespace and next-best-action models. Surfacing the next product (a OneBlade owner who has never tried Sonicare) and flagging a subscriber about to lapse is pure margin on the base Philips already serves.",
        credibility: "verified",
        source: SRC.jci,
      },
      {
        id: "agentic-aeo",
        label: "Agentic-commerce + AEO readiness",
        range: [2, 4],
        note: "The AI buyer is arriving in consumer commerce now: Google's AP2 protocol shipped with 60+ partners, and OpenAI Instant Checkout is live with retailer partnerships. A Philips replenishment SKU that is not machine-readable and machine-purchasable is invisible to the agent that reorders it. Conversational service agents already carry real revenue, Decagon drove $1M from AI-handled conversations for Hunter Douglas and SharkNinja handled 250,000, so readiness is value now and an option on 2027.",
        credibility: "illustrative",
        source: SRC.ap2,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "AI personalization and agentic reorder on the top SKU",
        body: "Stand up device-aware personalization and predicted, agentic reorder for the highest-volume replenishment SKU (Sonicare brush head), on the existing storefront and SAP backbone, proving the model on real reorders. It runs on data you own and ships without waiting for a re-platform. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Consumer PIM and device-aware personalization",
        body: "Stand up clean consumer product data so personalization and reorder ground in trustworthy attributes, and wire device telemetry into the personalization layer so the storefront knows the unit the customer owns. The reorder gets accurate; the personalization gets device-aware.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Omnichannel orchestration and installed-base NBA",
        body: "Orchestrate the storefront, email, the device app and retail off one CRM-grounded profile, and turn on churn, retention and cross-sell next-best-action across the base, so every channel reflects the last touch and the recurring relationship gets stickier each cycle.",
      },
      {
        phase: "Phase 4, the spine and the bet",
        title: "Agentic-commerce and AEO",
        body: "Make replenishment SKUs machine-purchasable for agents using AP2 and MCP, and structure product and how-to content so AI engines cite Philips for oral care and grooming. The AI buyer is arriving in consumer commerce. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist: the wedge, the rails, the base, the bet ──
    plays: [
      // THE WEDGE
      {
        id: "ai-pers-reorder",
        pillar: "storefront",
        title: "AI personalization and agentic reorder on the subscription base",
        problem:
          "Sonicare and OneBlade subscription is live but passive: auto-ship fires on a calendar, not on the device. The customer who skips a reorder or whose brush head is worn is invisible to the storefront.",
        caseName: "Dawn Foods, Watsco",
        caseDetail:
          "Dawn Foods grew baskets 10% with behavioral personalization; Watsco lifted AOV 10% with AI recommendations on its B2B platform, the same recommendation engine logic applied to a DTC base.",
        roi: "A predicted, device-timed reorder lifts conversion and subscription retention on the highest-volume SKU, the largest pool in the model.",
        whatI95Does:
          "Device-aware personalization and predicted agentic reorder on the existing storefront and SAP backbone, starting on one SKU.",
        credibility: "illustrative",
        source: SRC.dawn,
      },
      {
        id: "churn-cross-sell",
        pillar: "sales-marketing",
        title: "Churn, retention and cross-sell next-best-action",
        problem:
          "OneBlade owners who never try Sonicare, and subscribers about to lapse, are not surfaced. Growing the customer Philips already has is left to generic email.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls unlocked $40M from 23 accounts with whitespace models; cross-sell converts 3 to 4x and acquisition costs 5 to 7x expansion.",
        roi: "Retention and cross-sell on the installed base is higher-margin and higher-converting than new-customer acquisition.",
        whatI95Does:
          "Churn and next-best-action models on Salesforce CRM and reorder history, surfaced in the customer experience and to marketing.",
        credibility: "verified",
        source: SRC.jci,
      },
      // THE RAILS
      {
        id: "omnichannel",
        pillar: "sales-marketing",
        title: "Omnichannel orchestration",
        problem:
          "The customer moves across storefront, email, the device app and retail, and each channel treats them as new. Espinoza named omnichannel orchestration as item two of his brief.",
        caseName: "CDP activation benchmarks",
        caseDetail:
          "CDP activation benchmarks show +20–40% campaign efficiency and +10–25% retention when one resolved profile drives every channel.",
        roi: "Orchestration off one CRM-grounded profile cuts wasted touches and lifts retention across the Personal Health base.",
        whatI95Does:
          "Unify the customer profile across channels on the SAP and Salesforce backbone, and orchestrate the next touch consistently.",
        credibility: "illustrative",
        source: SRC.cdp,
      },
      {
        id: "device-aware",
        pillar: "storefront",
        title: "Device-aware personalization on the connected installed base",
        problem:
          "Philips holds 1.3M connected devices and 134 PB of data, yet the storefront personalizes as if it cannot see the device the customer owns.",
        caseName: "US Foods",
        caseDetail:
          "US Foods turned proprietary signal into AI search and recs that added 1.5 cases per order; the pattern is activating data competitors do not hold.",
        roi: "Device telemetry timed to wear and usage makes reorder and cross-sell accurate in a way no retailer can match.",
        whatI95Does:
          "Wire device signal into the personalization and reorder layer, grounded in the IoT and CRM data Philips owns.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      // THE FOUNDATION
      {
        id: "consumer-pim",
        pillar: "foundation",
        title: "Consumer PIM and clean product data",
        problem:
          "30 to 60% of catalogs carry incomplete attributes, and personalization or an agentic reorder on dirty consumer data is confidently wrong.",
        caseName: "inriver, Akeneo, Stibo, Informatica",
        caseDetail:
          "inriver and Akeneo ship agentic enrichment; Stibo and Informatica are Gartner MDM Leaders, the same foundation regulated and consumer catalogs run on.",
        roi: "Clean product data gates the personalization, the reorder, the search and the AEO. The cheapest insurance on the portfolio.",
        whatI95Does:
          "A consumer PIM with human-in-the-loop enrichment, standardizing attributes across the oral-care and grooming range.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      {
        id: "semantic-search",
        pillar: "sales-marketing",
        title: "B2C semantic search and reviews intelligence",
        problem:
          "Coveo search and Bazaarvoice reviews are tuned for the first-time visitor, not the recurring buyer who searches by model and reorders by habit.",
        caseName: "Search-AI benchmarks",
        caseDetail:
          "AI search converts about 1.67x keyword; AI referrals grew 357% year on year and convert about 31% higher than organic.",
        roi: "Relevance and citation are measured upside on the channels that already carry DTC orders.",
        whatI95Does:
          "Tune Coveo for replenishment and model intent, and surface review signal to the recurring buyer.",
        credibility: "verified",
        source: SRC.searchAi,
      },
      // THE BET
      {
        id: "agentic-commerce",
        pillar: "storefront",
        title: "Agentic-commerce readiness",
        problem:
          "The AI buyer is arriving in consumer commerce, and a replenishment SKU that is not machine-purchasable is invisible to the agent that would reorder it.",
        caseName: "Google AP2, OpenAI Instant Checkout",
        caseDetail:
          "Google's AP2 protocol shipped with 60+ partners including Mastercard and PayPal; OpenAI Instant Checkout is live with Walmart, Target and Instacart.",
        roi: "Readiness is a low-cost option on the channel that defines 2027 and 2028, bought on a foundation Philips is already building.",
        whatI95Does:
          "Make the replenishment catalog machine-purchasable for agents using AP2 and MCP, grounded in the consumer PIM and device data.",
        credibility: "illustrative",
        source: SRC.ap2,
      },
      {
        id: "conversational-aeo",
        pillar: "sales-marketing",
        title: "Conversational service and AEO",
        problem:
          "Service questions and product discovery for oral care and grooming increasingly start in an AI assistant, and if the answer engine cites a competitor the sale is lost before philips.com loads.",
        caseName: "Decagon / Hunter Douglas, SharkNinja",
        caseDetail:
          "Decagon drove $1M from AI-handled conversations for Hunter Douglas; SharkNinja handled 250,000 conversations; AI referrals convert about 31% higher than organic.",
        roi: "Deflected service cost plus citation on the channel that increasingly starts the purchase.",
        whatI95Does:
          "A grounded conversational service agent and structured product and how-to content so AI engines cite Philips for the category.",
        credibility: "illustrative",
        source: SRC.decagon,
      },
    ],
    why: {
      opener: "You'll be pitched a composable re-platform of a storefront that already works. Lead with the relationship instead.",
      body: "The re-platform pitch rebuilds the wrong layer. Your storefront is SAP Hybris with Valtech behind it, and it runs. Your opportunity is the recurring relationship: a subscription base and 1.3M connected devices whose reorder is still passive, on the highest-margin segment in the company. That is i95Dev's lane: deep in commerce, deep in the SAP and Salesforce backbone, surgical, at mid-market economics. We add the AI personalization, agentic reorder and omnichannel layer on top of the storefront you already own, so the recurring relationship finally gets intelligent. We do not rip out your SI. We make the reorder compound.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against Philips Personal Health's real subscription, device and storefront data. Two weeks, not a re-platform.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
