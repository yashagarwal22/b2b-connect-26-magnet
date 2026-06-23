import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  usfoods: { label: "US Foods MOXe, 90% on platform, +1.3M cases (DC360)", url: "https://www.usfoods.com/" },
  kawasaki: { label: "Kawasaki Engines USA, self-serve B2B AOV +5x (DC360)", url: "https://www.salesforce.com/" },
  mkm: { label: "MKM Building Supplies, +82% revenue on composable B2B (BigCommerce)", url: "https://www.bigcommerce.com/" },
  dawn: { label: "Dawn Foods, AI search +75% adoption, +10% baskets (DC360)", url: "https://www.dawnfoods.com/" },
  mckinsey: { label: "McKinsey B2B pricing, $15B distributor +200bps in 10 weeks", url: "https://www.mckinsey.com/" },
  pros: { label: "PROS, Wilbur-Ellis margin +2% on 6,000 SKUs", url: "https://www.pros.com/" },
  jci: { label: "Johnson Controls, $100M+ protectable, $35M per attrition point", url: "https://www.johnsoncontrols.com/" },
  brf: { label: "BRF, SAP IBP demand sensing, planning time -33%", url: "https://www.sap.com/" },
  frosta: { label: "FRoSTA, 60% touchless invoices on SAP Document AI", url: "https://www.sap.com/" },
  watts: { label: "Watts Water, cited by Perplexity over rivals", url: "https://www.watts.com/" },
  referrals: { label: "AI referrals +357% YoY, ~31% higher conversion (2025)", url: "https://www.similarweb.com/" },
  akeneo: { label: "Akeneo / inriver agentic PIM; Stibo / Informatica Gartner MDM Leaders", url: "https://www.akeneo.com/" },
} as const;

/**
 * Sofidel America, a greenfield-commerce account (enterprise SAP backbone, brochure-grade storefront).
 * Every section is grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/sofidel/sofidel-spec.md.
 *
 * Spine: Sofidel tripled its US footprint in 18 months and now sells about half the Group's revenue,
 * yet runs its B2B ordering on a brochure-grade Drupal catalog disconnected from the SAP backbone
 * everything else runs on. The Group closed 2024 at €3.225B; the CEO says the US is now roughly half.
 * Four new plants, 1,700 new employees, one SAP instance being rolled across all of it (Clearwater
 * ~$1.06B, Royal Paper via Chapter 11, $775M Inola expansion). Papernet's US distributors order paper
 * by phone, fax and email against smallbusiness.papernet.com, a Drupal catalog that cannot see the
 * system of record. The integration window is open right now because the SAP standardization is in
 * flight: wire commerce to SAP while the plumbing is exposed and the portal ships with live pricing
 * and self-service; wait and it becomes a retrofitted project in 2028. Write to Derek Dafoe (EVP Sales
 * & Marketing, B2B Connect attendee, commercial sponsor) with Sean Peltzer (Corporate IT Manager, SAP
 * implementation lead) as the technical entry. Guardrails: SAP is i95Dev-native, so state the connector
 * confidently; the Drupal catalog is a genuine gap, so a replace-it pitch is honest; do not overclaim a
 * US commerce SI conflict, none is identified. This is a greenfield commerce relationship.
 */
export const sofidel: AccountConfig = {
  slug: "sofidel",
  companyName: "Sofidel America",
  aliases: [
    "Sofidel",
    "Sofidel Group",
    "Sofidel America Corp",
    "Papernet",
    "Nicky",
    "Clearwater Paper Tissue",
  ],
  domains: ["sofidel.com", "papernet.com"],
  vertical: "manufacturing",
  verticalLabel: "Tissue and away-from-home paper manufacturing",
  revenueBand: "$1B+",
  role: "EVP Sales & Marketing",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You standardized four plants onto one SAP. Put one real B2B portal on it now.",
  wedge:
    "Replace the Papernet Drupal catalog with a real B2B portal wired to live SAP, with account pricing and self-service ordering",
  wedgeDetail:
    "High value, runs on the SAP system of record you are standardizing anyway, and fast to prove. The integration window is open right now because the SAP rollout is in flight, which makes the connection cheap today and expensive in 2028.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. The model is the cheapest thing in the room.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit next to the work instead of inside it. Your edge is not a smarter model. It is the SAP backbone you are rolling across four acquired plants right now, and the one thing no competitor can copy: live pricing, inventory and order history for the entire US footprint in one system of record. Wire commerce to that while the plumbing is exposed, and the portal ships with what Kimberly-Clark and Georgia-Pacific cannot fake. Wait, and you pay to retrofit it in 2028.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the SAP backbone only you own.",
    commodity: [
      "A chatbot bolted onto the marketing site",
      "Generic recs that ignore who the distributor is",
      "A second disconnected catalog for the new plants",
      "\"AI\" demand forecasting relabeled on SAP IBP",
    ],
    compounding: [
      "A B2B portal showing each distributor their contract price from SAP",
      "Reorder and self-service on live SAP inventory",
      "One commerce layer across the whole US footprint feeding one SAP",
      "Demand sensing on your own order history across the new footprint",
    ],
    pitchWarning:
      "You run SAP group-wide and a group AI department in Italy, so expect a pitch for a Joule copilot on everything and a shiny new standalone storefront. Skip the bolt-ons. The Papernet catalog is worthless until it can see SAP, and that connection is cheapest while the rollout is still in flight.",
  },

  // ── Module 2.5, Your Stack (verified dashboard research; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "SAP, group-wide ERP (plus SAP IBP)",
      leadPlay: "A B2B portal wired to live SAP for account pricing and self-service. Core i95Dev territory.",
      commodityFlag: "A Joule copilot on every screen. The unlock is the commerce layer in front of SAP, not another agent inside it.",
    },
    {
      signal: "Drupal Papernet catalog (smallbusiness.papernet.com)",
      leadPlay: "Replace it with BigCommerce B2B or Adobe Commerce on the SAP connector",
      commodityFlag: "A cheap Drupal facelift. A brochure with nicer fonts still cannot see your pricing.",
    },
    {
      signal: "1WorldSync + Syndigo (PIM / syndication)",
      leadPlay: "Feed clean product data straight into the new portal and the digital shelf",
      commodityFlag: "\"Buy more syndication.\" You already have it. The gap is wiring it to a transacting storefront.",
    },
    {
      signal: "Salesforce",
      leadPlay: "Connect CRM to commerce and SAP for next-best-action and account-aware ordering",
      commodityFlag: "\"Agentforce for everything.\" It only works on connected data; ~33% of Salesforce AI hits ROI.",
    },
    {
      signal: "Acquired-plant SAP standardization (Clearwater, Royal Paper, Inola)",
      leadPlay: "Stand up one commerce layer across the new footprint while the SAP plumbing is exposed",
      commodityFlag: "A separate integration project in 2028, after the dust settles, at full price.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "b2b-portal", label: "B2B portal on SAP (account pricing, self-service)", compounding: 0.92, bolton: 0.85, magnitude: 5, lit: true, wedge: true },
    { id: "harmonization", label: "Post-acquisition commerce harmonization", compounding: 0.88, bolton: 0.7, magnitude: 4, lit: true },
    { id: "search-reorder", label: "B2B-aware search and reorder", compounding: 0.78, bolton: 0.72, magnitude: 3, lit: true },
    { id: "aeo", label: "AEO for AFH buyers", compounding: 0.8, bolton: 0.78, magnitude: 3, lit: true },
    { id: "cross-sell", label: "Cross-sell / next-best-action", compounding: 0.82, bolton: 0.55, magnitude: 4, lit: true },
    { id: "pricing", label: "Pricing / margin enforcement", compounding: 0.9, bolton: 0.48, magnitude: 5, lit: true },
    { id: "demand-sensing", label: "Demand sensing on new footprint", compounding: 0.72, bolton: 0.34, magnitude: 3, lit: true },
    { id: "pim", label: "AI PIM enrichment (1WorldSync/Syndigo)", compounding: 0.85, bolton: 0.4, magnitude: 3, lit: true },
    { id: "ap-automation", label: "Multi-country AP automation", compounding: 0.68, bolton: 0.45, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "llm-copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
    { id: "joule", label: "Joule copilot relabeled as transformation", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [8, 24],
    moneyPools: [
      {
        id: "self-service",
        label: "Self-service: distributors who order online, not by fax",
        range: [2, 8],
        note: "Cutting rep-assisted and offline orders from the bulk of volume down toward a digital majority saves several million a year at Sofidel's scale, and self-service buyers reorder more often. US Foods put 90% of customers on its own ordering platform and banked an extra 1.3M cases a year plus a higher average order. Papernet's distributors still order by phone, fax and email against a catalog that cannot price them.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      {
        id: "margin",
        label: "Margin: contract pricing you negotiated, enforced in SAP",
        range: [3, 7],
        note: "Distributors and manufacturers lose 1.5–2.5% of margin to quote drift and discount creep across the catalog. A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI. Your prices live in SAP. A portal that renders each distributor's negotiated price, instead of a list price on a Drupal page, enforces the margin you already agreed.",
        credibility: "verified",
        source: SRC.mckinsey,
      },
      {
        id: "installed-base",
        label: "Installed base: defend distributors as you scale",
        range: [2, 5],
        note: "Selling to distributors who already carry you is 5–7x cheaper than winning new ones, and cross-sell converts 3–4x more often. With four acquired plants and a doubled product range, the white-space across janitorial, hospitality and healthcare accounts is real but invisible until an account drifts. Johnson Controls tracked $100M+ of protectable revenue this way, $35M per point of attrition.",
        credibility: "verified",
        source: SRC.jci,
      },
      {
        id: "operations",
        label: "Operations: one footprint, one demand signal, less waste",
        range: [1, 4],
        note: "Four plants now feed one SAP, but demand still gets forecast the old way until a stockout shows up. Demand sensing on your own order history across the unified footprint frees roughly 10–12% of inventory working capital. BRF, a food manufacturer running 44 plants, cut planning time 33% with SAP IBP demand sensing. And as a multi-country group facing EU e-invoicing and ViDA, multi-country AP automation is hygiene you can layer on the same SAP core.",
        credibility: "verified",
        source: SRC.brf,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Storefront: Papernet B2B portal on live SAP",
        body: "Replace the Drupal catalog with BigCommerce B2B or Adobe Commerce, wired to SAP for account pricing, inventory and self-service ordering. It runs on the system of record you are standardizing anyway, and the integration is cheapest while the SAP rollout is in flight. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Footprint: harmonize one commerce layer across the plants",
        body: "Extend the same portal across the Clearwater, Royal Paper and Inola footprint so the whole US business sells through one commerce layer feeding one SAP, not a patchwork of catalogs. Add B2B-aware search and reorder so distributors find by spec and reorder in two clicks. This is the post-acquisition harmonization play.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Pricing, personalization and cross-sell",
        body: "Enforce contract pricing per distributor at the catalog, render the right approved range per account, and surface cross-sell and next-best-action from order history. Feed 1WorldSync and Syndigo product data into the portal and the digital shelf so the catalog is complete and machine-citable.",
      },
      {
        phase: "Phase 4, back office and the agentic bet",
        title: "Demand sensing, multi-country AP, agentic readiness",
        body: "Layer demand sensing onto SAP IBP across the unified footprint, automate AP against EU e-invoicing and ViDA, and make the catalog machine-purchasable for AI buyers (Google AP2, Anthropic MCP). Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, across storefront, sales and margin, back office and the foundation ──
    plays: [
      // STOREFRONT AND COMMERCE
      {
        id: "b2b-portal",
        pillar: "storefront",
        title: "Papernet B2B portal on live SAP",
        problem:
          "Your distributors order by phone, fax and email against a Drupal catalog that cannot see SAP. No account pricing, no inventory, no reorder. Every order is a rep's time and a chance to lose it.",
        caseName: "US Foods, Kawasaki Engines",
        caseDetail:
          "US Foods put 90% of customers on its own ordering platform (MOXe), banking +1.3M cases a year and a higher average order. Kawasaki Engines USA grew average order value 5x after launching a real B2B portal.",
        roi: "Cutting offline and rep-assisted orders toward a digital majority saves several million a year at your scale, and self-service buyers reorder more.",
        whatI95Does:
          "Build the BigCommerce B2B or Adobe Commerce storefront wired to SAP through our native connector, with account pricing, live inventory and self-service ordering.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      {
        id: "harmonization",
        pillar: "storefront",
        title: "Post-acquisition commerce harmonization",
        problem:
          "Four acquired plants are being standardized onto one SAP, but commerce is not. Bolt another disconnected catalog onto the new footprint and you integrate it the expensive way in 2028.",
        caseName: "MKM Building Supplies",
        caseDetail:
          "MKM Building Supplies consolidated onto one composable B2B storefront (BigCommerce + Bloomreach) and grew revenue 82% with 26% more web orders. One platform across the estate, not one per brand.",
        roi: "One commerce layer across the footprint avoids a retrofitted integration project and the cost of running parallel catalogs.",
        whatI95Does:
          "Extend a single SAP-connected commerce layer across the Clearwater, Royal Paper and Inola footprint while the SAP rollout is exposing the plumbing.",
        credibility: "verified",
        source: SRC.mkm,
      },
      {
        id: "search-reorder",
        pillar: "storefront",
        title: "B2B-aware search, reorder and AEO",
        problem:
          "AFH distributors search by product type, case pack and equivalence, not your SKU names, and a failed lookup is a rep call or an order lost to Georgia-Pacific. Meanwhile their first supplier question increasingly goes to an AI engine, not Google.",
        caseName: "Dawn Foods, Watts",
        caseDetail:
          "Dawn Foods, an ingredient wholesaler, ran AI search plus behavioral recs on commercetools and Algolia: 75%+ digital adoption, 30% faster time-to-order, +10% baskets. Watts structured its spec content so Perplexity cites it over rivals.",
        roi: "AI search converts about 1.67x keyword. AI engines drove 1.13B referral visits in June 2025, up 357% year on year, and almost no paper manufacturer structures for it.",
        whatI95Does:
          "Semantic and spec-aware search with reorder, plus a PIM-to-schema feed (from 1WorldSync and Syndigo) so ChatGPT and Perplexity cite Papernet.",
        credibility: "verified",
        source: SRC.dawn,
      },
      // SALES AND MARGIN
      {
        id: "pricing",
        pillar: "sales-marketing",
        title: "Contract pricing and margin enforcement",
        problem:
          "Your distributor prices live in SAP, but the Drupal catalog shows list. Quote drift and discount creep leak 1.5–2.5% of margin across the catalog, invisible page by page.",
        caseName: "McKinsey $15B distributor, PROS",
        caseDetail:
          "A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI. PROS lifted Wilbur-Ellis margin 2% on 6,000 SKUs.",
        roi: "100–200 basis points on a ~$1.5B US base is $15–30M of near-pure margin over time. Even a fraction enforced through the portal is multi-million.",
        whatI95Does:
          "Render each distributor's negotiated SAP price at the catalog, with discount-corridor and margin-floor enforcement built into the portal.",
        credibility: "verified",
        source: SRC.mckinsey,
      },
      {
        id: "cross-sell",
        pillar: "sales-marketing",
        title: "Cross-sell propensity and next-best-action",
        problem:
          "You doubled the product range across four plants, but white-space across janitorial, hospitality and healthcare accounts stays manual and invisible until an account drifts.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls propensity and whitespace models tracked $100M+ of protectable revenue ($35M per attrition point) and unlocked $40M from 23 accounts. Whitespace-managed accounts grow 9% versus 5–6%.",
        roi: "8–12 points of net revenue retention, 15–30% churn reduction, $4–7 returned per $1.",
        whatI95Does:
          "Churn and cross-sell propensity on SAP order history, surfaced as Salesforce rep alerts and on-site reorder nudges.",
        credibility: "verified",
        source: SRC.jci,
      },
      // BACK OFFICE AND OPERATIONS
      {
        id: "demand-ap",
        pillar: "back-office",
        title: "Demand sensing and multi-country AP automation",
        problem:
          "Four plants now feed one SAP, but demand is forecast the old way and AP runs country by country against tightening EU e-invoicing rules. A stockout on a key line is a lost distributor, not a lost order.",
        caseName: "BRF, FRoSTA",
        caseDetail:
          "BRF, a food manufacturer running 44 plants, cut planning time 33% with SAP IBP demand sensing. FRoSTA hit 60% touchless invoice processing with SAP Document AI.",
        roi: "Demand sensing frees roughly 10–12% of inventory working capital. AP automation drops cost per invoice from ~$10 to ~$3 and de-risks EU ViDA compliance.",
        whatI95Does:
          "Layer demand sensing onto SAP IBP across the unified footprint and automate AP on the same SAP core, country by country.",
        credibility: "verified",
        source: SRC.brf,
      },
      // FOUNDATION
      {
        id: "pim",
        pillar: "foundation",
        title: "AI PIM enrichment on the data you already syndicate",
        problem:
          "30–60% of B2B catalogs have incomplete attributes, and every play above (portal, search, AEO, agentic) fails on dirty product data. You already pay for 1WorldSync and Syndigo, but that data is not wired to a transacting storefront.",
        caseName: "Akeneo, inriver, Stibo",
        caseDetail:
          "Akeneo and inriver run agentic PIM that bulk-enriches attributes and standardizes units and classification with human-in-the-loop. Stibo and Informatica are the Gartner MDM Leaders.",
        roi: "60–70% less manual stewardship, and it gates the ROI of every other initiative. The cheapest insurance on the whole portfolio.",
        whatI95Does:
          "Wire 1WorldSync and Syndigo into an enriched feed that powers the portal, search, AEO and the digital shelf from one source of truth.",
        credibility: "illustrative",
        source: SRC.akeneo,
      },
    ],
    why: {
      opener: "You'll be sold a $3M transformation. Your problem might be a six-week fix.",
      body: "The Big-4 are built for enterprise-wide change. Your wedge is not enterprise-wide. It is one B2B portal wired to the SAP you are already standardizing. That is exactly i95Dev's lane: surgical, deep in commerce and ERP, SAP-native, on mid-market economics. We do not sell you a new ERP and we do not bolt on a disconnected catalog. We connect commerce to the SAP backbone while the plumbing is open, in time for the next plant to come online.",
      ctaTitle: "Book your SAP-to-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee readiness assessment that validates these directional numbers against Sofidel's real SAP data and the Papernet catalog. Two weeks, not a $3M transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
