import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  mkm: { label: "MKM Building Supplies +82%; Kawasaki Engines 5x AOV", url: "https://www.bigcommerce.com/" },
  salsify: { label: "Salsify / inriver / Syndigo, digital shelf", url: "https://www.salsify.com/" },
  watts: { label: "Watts Water, cited by Perplexity", url: "https://www.watts.com/" },
  watsco: { label: "Watsco / Adobe, AI recs +10% AOV", url: "https://www.watsco.com/" },
  commercetools: { label: "commercetools B2B intake agent (Mirion)", url: "https://commercetools.com/" },
  mck: { label: "McKinsey B2B pricing, $15B distributor +200bps", url: "https://www.mckinsey.com/" },
  genmills: { label: "General Mills, $20M+ AI savings", url: "https://www.generalmills.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
} as const;

/**
 * M-D Building Products (M-D), a warm, active worked account. Every section is grounded in the
 * Account-360 profile and the AI research dump, and maps 1:1 to companies/md-building-products/
 * md-building-products-spec.md.
 *
 * Spine: M-D sells to businesses but only lets them buy like consumers. Its highest-value, stickiest
 * customers (pros, OEMs, distributors) order through a Shopify store built for DIY, with no account,
 * contract price or reorder history holding them. M-D already owns the two assets that fix it: Salsify
 * as a PIM and 90%+ North American manufacturing. The work is clean product data that wins every
 * shelf, a real B2B buying experience built on that data, and a CPQ that quotes custom extrusions in
 * minutes. Write to Paul Townsend (Director of eCommerce Operations), sponsored by CEO Christian
 * Leard, NOT the lapsed attendee. Guardrail: no Shopify replatform, no Salsify replacement; the move
 * is additive (the B2B channel that does not exist yet) for a lean, family-controlled (not PE) maker.
 */
export const mdBuildingProducts: AccountConfig = {
  slug: "md-building-products",
  companyName: "M-D",
  aliases: ["M-D Building Products", "Macklanburg-Duncan", "PROVA", "Cardinal Aluminum", "M-D Pro"],
  domains: ["mdbuildingproducts.com", "mdteam.com"],
  vertical: "manufacturing",
  verticalLabel: "Building-products manufacturing, multi-channel",
  revenueBand: "$300–500M",
  role: "Director of eCommerce Operations / CEO",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You sell to pros and OEMs. You only built a store for DIY.",
  wedge:
    "Salsify done right, product data clean enough to win every shelf, and ready to launch B2B",
  wedgeDetail:
    "It runs on the PIM you already own, proves fast across Home Depot, Lowe's, Amazon and Rithum, and becomes the foundation the pro and OEM buying experience needs next. Few building-products makers have ever made their catalog data this clean.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. The model is the cheapest thing in the room.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. You do not need a model to fix your biggest gap: your best customers, pros and OEMs, still order the hardest way. The edge is pointing ordinary commerce and AI at what an import-only rival cannot copy: a century of building-products engineering data in Salsify, your custom-extrusion expertise, and 90%+ North American manufacturing.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the product data and the channels only you own.",
    commodity: [
      "A chatbot bolted onto the Shopify store",
      "A DTC redesign that still ignores pros and OEMs",
      "AI copy that invents a dimension or a spec",
      "Basic ML forecasting relabeled as \"AI\"",
    ],
    compounding: [
      "Salsify data clean enough to win every retailer's shelf",
      "A punchout and contract-priced portal for pros and OEMs",
      "CPQ that quotes a custom extrusion in minutes, not days",
      "\"Made in North America,\" provable at the point of decision",
    ],
    pitchWarning:
      "You run Shopify and Salsify with a lean team, so expect a pitch to replatform the storefront or buy a sprawling suite. Skip both. Shopify and Salsify are assets. The gap is the B2B buying experience your pros and OEMs do not have, and the data discipline to feed it. And any AI that invents a product dimension is a returns problem, not a content win.",
  },

  // ── Module 2.5, Your Stack (Account-360 confirmed stack) ──
  stackFlags: [
    {
      signal: "Salsify (PIM / PXM), verified",
      leadPlay: "Enrich and govern product data, then syndicate clean to every retailer and marketplace",
      commodityFlag: "A new PIM. Salsify is the asset; make it work harder, do not replace it.",
    },
    {
      signal: "Shopify (D2C storefront), verified",
      leadPlay: "Add a B2B buying experience beside the consumer store: punchout, contract pricing, CPQ",
      commodityFlag: "A storefront replatform. The gap is B2B, not a new theme.",
    },
    {
      signal: "Rithum + ShipEngine",
      leadPlay: "Connect marketplace orders and shipping into one order flow",
      commodityFlag: "\"Add more channels.\" The win is orchestrating the channels you already run.",
    },
    {
      signal: "PriceSpider (MAP monitoring)",
      leadPlay: "Turn price-monitoring data into margin and MAP enforcement across channels",
      commodityFlag: "\"Just watch the violations.\" The value is acting on them, on price and mix.",
    },
    {
      signal: "ERP / OMS (not disclosed)",
      leadPlay: "Connect the fragmented middle between Shopify, Salsify, Rithum and the channels",
      commodityFlag: "\"Agentforce or Copilot for everything.\" It only works once that middle is connected.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "salsify", label: "Salsify product-data syndication", compounding: 0.85, bolton: 0.82, magnitude: 4, lit: true, wedge: true },
    { id: "b2b-portal", label: "B2B portal (punchout + contract)", compounding: 0.92, bolton: 0.5, magnitude: 5, lit: true },
    { id: "shelf", label: "Marketplace + retail shelf + AEO", compounding: 0.8, bolton: 0.78, magnitude: 4, lit: true },
    { id: "cpq", label: "CPQ for engineered extrusions", compounding: 0.85, bolton: 0.42, magnitude: 4, lit: true },
    { id: "search", label: "AI search + recs", compounding: 0.65, bolton: 0.72, magnitude: 3, lit: true },
    { id: "map-rgm", label: "MAP enforcement / RGM", compounding: 0.8, bolton: 0.5, magnitude: 3, lit: true },
    { id: "oms", label: "Connected OMS / orchestration", compounding: 0.65, bolton: 0.45, magnitude: 4, lit: true },
    { id: "demand", label: "Demand sensing + reshoring", compounding: 0.7, bolton: 0.4, magnitude: 3, lit: true },
    { id: "mdm", label: "AI MDM / foundation", compounding: 0.88, bolton: 0.3, magnitude: 4, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "copy", label: "Ungoverned AI copy", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "forecast", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [7, 24],
    moneyPools: [
      {
        id: "b2b-channel",
        label: "B2B channel: the pro and OEM experience you don't have",
        range: [2.5, 9],
        note: "Your highest-margin, stickiest customers order through a storefront built for DIY. MKM Building Supplies, a building-materials distributor, went composable B2B with AI personalization and grew revenue 82% with 26% more web orders. This is the largest channel you own and have never built, and it defends the revenue you can least afford to lose.",
        credibility: "verified",
        source: SRC.mkm,
      },
      {
        id: "digital-shelf",
        label: "Digital shelf: win retail and marketplace, penalty-free",
        range: [2, 6],
        note: "The same product data feeds Home Depot, Lowe's, Amazon and Rithum, each with its own requirements, and a wrong attribute is a chargeback or a delisting. 30 to 60% of catalogs have incomplete attributes, which caps search and sell-through at once. Clean Salsify data, syndicated correctly, lifts placement and stops the penalties.",
        credibility: "illustrative",
        source: SRC.salsify,
      },
      {
        id: "margin",
        label: "Margin: MAP enforcement and mix across channels",
        range: [1.5, 5],
        note: "You already run PriceSpider, so you can see violations; the value is acting on them. Cost-to-serve-aware pricing and MAP enforcement protect the points you give away across four retailers, Amazon and pro channels. A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks.",
        credibility: "verified",
        source: SRC.mck,
      },
      {
        id: "operations",
        label: "Operations: one order flow across eight sites",
        range: [1, 4],
        note: "Orders arrive through Shopify, Rithum, retail EDI and pro channels, and the middle between Salsify, Shopify and the ERP is stitched by hand. Demand sensing on your own order history frees about 10 to 12% of inventory, and one connected order flow removes the manual reconciliation. General Mills saved $20M+ applying AI across its daily shipment flow.",
        credibility: "verified",
        source: SRC.genmills,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Salsify done right and the shelf",
        body: "Enrich and govern the product data in Salsify, then syndicate clean, compliant content to Home Depot, Lowe's, Amazon and Rithum, and turn on AEO so AI engines answer pro and DIY product questions with M-D. It runs on what you own and proves fast for a lean team. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "The B2B buying experience",
        body: "Launch a punchout-enabled, contract-priced portal for pros, OEMs and distributors, and a CPQ that turns a custom-extrusion request into a same-day quote. Built on the clean Salsify data from Phase 1, beside the Shopify store, not on top of it. This is the largest prize.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "DTC intelligence and margin",
        body: "AI search, recommendations and personalization on the Shopify store, Klaviyo lifecycle on the data you own, and MAP enforcement and revenue growth management that turn PriceSpider monitoring into recovered margin across channels.",
      },
      {
        phase: "Phase 4, operations and the foundation",
        title: "One order flow and one truth",
        body: "Connect Shopify, Salsify, Rithum, ShipEngine and the ERP into one order flow, layer demand sensing across the eight sites, and build the MDM and ERP data foundation that makes product, price and inventory one source of truth. The integration begins quietly in Phase 1 and matures here.",
      },
    ],
    // ── The play shortlist, spanning product data and the shelf, B2B commerce, DTC and margin, and the foundation ──
    plays: [
      // PRODUCT DATA & THE SHELF
      {
        id: "salsify",
        pillar: "storefront",
        title: "Salsify product data, syndicated to win every shelf",
        problem:
          "The same catalog feeds Home Depot, Lowe's, Amazon and Rithum in different shapes, and one wrong attribute becomes a chargeback, a delisting, or a return.",
        caseName: "Salsify, inriver, Syndigo",
        caseDetail:
          "CPG leaders run this through Salsify, 1WorldSync and Syndigo for the digital shelf; inriver and Akeneo now bulk-enrich attributes from source documents with human-in-the-loop.",
        roi: "30 to 60% of catalogs have incomplete attributes, which silently caps search, the shelf and AI readiness together. Fixing it lifts all three at once.",
        whatI95Does:
          "Enrich, claim-govern and syndicate Salsify data to every retailer and marketplace, and make it the foundation the B2B portal will reuse. No replacement of Salsify.",
        credibility: "illustrative",
        source: SRC.salsify,
      },
      {
        id: "aeo",
        pillar: "storefront",
        title: "Digital-shelf AEO: be the answer for product questions",
        problem:
          "A pro or a DIY buyer asks an AI \"what door sweep fits a 36 inch steel door,\" and the answer is built from whoever structured their data. If that is not you, your product never enters the shortlist.",
        caseName: "Watts Water",
        caseDetail:
          "Watts structured its technical content so Perplexity cites it over rivals for product-selection questions, the manufacturer playbook for the AI shelf.",
        roi: "AI referrals grew 357% year on year, and they convert about 31% higher than organic. Almost no building-products maker is doing this systematically.",
        whatI95Does:
          "Schema and answer-layer pipelines, fed from the same Salsify data, that make M-D products machine-citable across ChatGPT, Perplexity and Google AI.",
        credibility: "illustrative",
        source: SRC.watts,
      },
      // B2B COMMERCE
      {
        id: "b2b-portal",
        pillar: "sales-marketing",
        title: "The B2B buying portal: punchout and contract pricing",
        problem:
          "Pros, OEMs and distributors are your best customers, and they buy through phone, email or a DIY storefront. There is no punchout, no contract pricing, no account ordering.",
        caseName: "MKM Building Supplies, Kawasaki Engines",
        caseDetail:
          "MKM Building Supplies grew revenue 82% on a composable B2B build with AI personalization; Kawasaki Engines grew average order value 5x after launching B2B self-service.",
        roi: "A real B2B experience converts your highest-margin, stickiest channel, and every reorder placed in the portal is a customer who has stopped shopping around.",
        whatI95Does:
          "A punchout-enabled, contract-priced B2B portal for pros, OEMs and distributors, built beside Shopify on the Salsify data foundation.",
        credibility: "verified",
        source: SRC.mkm,
      },
      {
        id: "cpq",
        pillar: "sales-marketing",
        title: "CPQ for engineered extrusions and custom orders",
        problem:
          "Custom aluminum and extrusion quotes (Cardinal, Manufactured Solutions) are slow and expert-bound, and a slow quote loses the OEM job.",
        caseName: "commercetools, Salesforce CPQ",
        caseDetail:
          "Salesforce estimates 15 to 30% of revenue is lost to configuration errors and quote delays; commercetools' B2B intake agent turns emails and PDFs into structured quotes (Mirion, early access June 2026).",
        roi: "Faster, accurate quotes win more OEM work, and a 24-hour quote beats a 72-hour one on win rate.",
        whatI95Does:
          "A guided CPQ for configurable extrusions with valid-build rules and account pricing, integrated to the ERP.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
      // DTC & MARGIN
      {
        id: "search",
        pillar: "storefront",
        title: "AI search, recommendations and personalization on DTC",
        problem:
          "Building products are a specification purchase (size, profile, material, compatibility), and generic Shopify search buries the right item, so the DIY shopper bounces to a marketplace.",
        caseName: "Watsco",
        caseDetail:
          "Watsco's AI recommendations added 10% AOV and 22% on mobile on its contractor platform.",
        roi: "AI search converts about 1.67x keyword. On the DTC store you fully own, that lift is margin you keep in full.",
        whatI95Does:
          "Spec-aware search, recommendations and Klaviyo-tied personalization on Shopify, grounded in the Salsify data.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "map-rgm",
        pillar: "sales-marketing",
        title: "MAP enforcement and revenue growth management",
        problem:
          "The same product sells across four retailers, Amazon and pro channels, and margin leaks through MAP violations and untuned mix. You monitor with PriceSpider but acting on it is manual.",
        caseName: "McKinsey, Zilliant",
        caseDetail:
          "A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks; Zilliant and PROS run distributor RGM in production.",
        roi: "One to two points of recovered margin and mix on a $300–500M base is near-pure profit.",
        whatI95Does:
          "Turn PriceSpider and order data into MAP enforcement and cost-to-serve pricing across channels.",
        credibility: "verified",
        source: SRC.mck,
      },
      // OPERATIONS & THE FOUNDATION
      {
        id: "operations",
        pillar: "back-office",
        title: "Connected order flow and demand sensing",
        problem:
          "Orders arrive through Shopify, Rithum, retail EDI and pro channels, the ERP and OMS middle is stitched by hand, and forecasting across eight sites misses the signal until the stockout.",
        caseName: "General Mills, BRF",
        caseDetail:
          "General Mills saved $20M+ applying AI across 5,000 daily shipments; BRF's SAP IBP demand sensing cut planning time 33%.",
        roi: "Demand sensing frees about 10 to 12% of inventory, and one connected order flow removes the manual reconciliation between channels.",
        whatI95Does:
          "Order orchestration across Shopify, Rithum, ShipEngine and the ERP, plus demand sensing on your order history.",
        credibility: "verified",
        source: SRC.genmills,
      },
      {
        id: "mdm",
        pillar: "foundation",
        title: "AI Master Data and the data foundation",
        problem:
          "Salsify holds product data, but price, inventory and order data live elsewhere, and ERP and OMS identities are unconfirmed. 87% of leaders say bad data has hampered AI value, and every play above runs on this.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Stibo and Informatica (Gartner MDM Leaders) govern product and price data continuously; TCS built Alstom's AI-driven MDM backbone for a unified view.",
        roi: "60 to 70% less manual stewardship, and it gates the ROI of every other play. The cheapest insurance on the whole portfolio.",
        whatI95Does:
          "AI-enriched MDM connecting Salsify, price, inventory and the ERP into one source of truth, with an ERP and OMS assessment to confirm the middle.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
    ],
    why: {
      opener: "You'll be sold a transformation. Your gain is the channel you never built.",
      body: "The Big-4 are built for enterprise-wide change, and a sprawling suite is the wrong tool for a lean team and a family-owned balance sheet. Your problem is specific: the pros and OEMs who buy the most still buy the hardest way, and the Salsify data that would fix it is not working hard enough yet. That is exactly i95Dev's lane: surgical where the giants are sprawling, fluent in the commerce-to-ERP seam, and priced for a company that values ROI over slideware. We do not replatform Shopify and we do not replace Salsify. We build the B2B experience you are missing on the data you already own.",
      ctaTitle: "Book your B2B Commerce and Product-Data Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that maps how product data flows from Salsify to every channel, sizes the unbuilt B2B opportunity, and validates these numbers against M-D's real data. Weeks, not a multi-million transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
