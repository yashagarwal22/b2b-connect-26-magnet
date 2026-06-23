import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  mckinsey: { label: "McKinsey B2B pricing, $15B distributor +200bps then +50bps in 10 weeks", url: "https://www.mckinsey.com/" },
  dawn: { label: "Dawn Foods AI search + recs (DC360 / commercetools)", url: "https://www.dawnfoods.com/" },
  jci: { label: "Johnson Controls $100M+ protectable, $35M per attrition point", url: "https://www.johnsoncontrols.com/" },
  watsco: { label: "Watsco Adobe Commerce +10% AOV, -15% lead time (Adobe / DC360)", url: "https://www.watsco.com/" },
  millipore: { label: "MilliporeSigma, account-based entitlement and reorder for technical buyers", url: "https://www.milliporesigma.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  i95erp: { label: "i95Dev native ERP connectors: SAP, D365, NetSuite, Epicor, Sage", url: "https://www.i95dev.com/" },
} as const;

/**
 * Kravet & Co, a fifth-generation to-the-trade home furnishings house that just became a PE platform
 * under Dunes Point Capital (Dec 2024) and is rolling up brands faster than its plumbing can absorb
 * them. Every section is grounded in the Account-360 profile and live verification, and maps 1:1 to
 * companies/kravet/kravet-spec.md.
 *
 * Spine: the growth thesis is not the storefront, it is the integration layer under it. A century of
 * designer relationships runs through 40+ showrooms and a multi-brand Adobe Commerce trade portal
 * (Lee Jofa, Brunschwig & Fils, GP & J Baker, Donghia) that feeds off an aging on-prem Oracle ERP.
 * The decade gets won or lost at the Oracle-to-Adobe seam that carries trade pricing across every
 * brand, and the speed at which a newly acquired brand becomes a sellable, correctly-priced catalog.
 * Get the seam right and each bolt-on compounds; get it wrong and the PE platform thesis leaks margin.
 * Write to Kelly Collins (Sr Director eCommerce, the in-room attendee and day-to-day storefront owner)
 * with Jesse Lazarus (CTO) as the technical champion who signs off on the seam. Guardrails: do not
 * pitch an Adobe Commerce replatform (the portal is a live working asset), and do not claim a native
 * Oracle connector (Oracle is integration-to-existing today, migration-optionality tomorrow). The
 * "No active requirement" self-report is timing, not disinterest; meet it with a fixed-scope audit.
 */
export const kravet: AccountConfig = {
  slug: "kravet",
  companyName: "Kravet & Co",
  aliases: [
    "Kravet",
    "Kravet, LLC",
    "Lee Jofa",
    "Brunschwig & Fils",
    "GP & J Baker",
    "Donghia",
  ],
  domains: ["kravet.com"],
  vertical: "industrial-distribution",
  verticalLabel: "To-the-trade home furnishings",
  revenueBand: "$260–300M",
  role: "Sr Director eCommerce",
  roleEmphasis: "ecommerce",
  activeRequirement: false,
  published: true,

  thesis: "Your trade portal is the asset. The integration seam under it is the bet.",
  wedge:
    "An ERP-integration audit of the Oracle-to-Adobe Commerce seam, scoped to multi-brand trade pricing and new-brand onboarding",
  wedgeDetail:
    "High value, runs on the two systems you already own, and fast to prove. It is the one assessment that pays whether Oracle stays or gets replaced, and it is the exact bottleneck the M&A roll-up keeps hitting.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you a new front end. The storefront is the cheapest part of your problem.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit next to the work instead of inside it. Your Adobe Commerce trade portal is already a real asset, and Dunes Point already funded the modernization mandate. The edge now is not a new platform or a bolted-on model. It is the integration layer under the portal, pointed at what Fabricut and Schumacher cannot copy: a century of trade relationships and the design data only Kravet owns.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the data and the integrations only you own.",
    commodity: [
      "A new storefront to replace the one that works",
      "A chatbot bolted onto the trade portal",
      "Generic recs that ignore designer tier and negotiated pricing",
      "Visual search relabeled as \"AI\"",
    ],
    compounding: [
      "The Oracle-to-Adobe seam that carries trade pricing across every brand",
      "New-brand onboarding that turns a Tomlinson acquisition into a priced catalog in weeks",
      "Account-based pricing and entitlement on the rails you already built",
      "ViSenze plus Algolia grounded in your own enriched product and design data",
    ],
    pitchWarning:
      "You run Adobe Commerce on an aging on-prem Oracle, so expect a pitch for a full replatform of both. Skip it. The portal is an asset and the value is in the seam between them, not in tearing either down.",
  },

  // ── Module 2.5, Your Stack (verified Account 360; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Adobe Commerce multi-brand trade portal",
      leadPlay: "Extend the portal: shared catalog, per-brand pricing, faster new-brand onboarding",
      commodityFlag: "A replatform. The custom B2B build is an asset, not a liability.",
    },
    {
      signal: "Oracle ERP (on-prem)",
      leadPlay: "Harden and audit the Oracle-to-commerce seam; map it for migration optionality",
      commodityFlag: "\"Just rip out Oracle.\" The unlock is the integration, and the migration is a later, de-risked choice.",
    },
    {
      signal: "Algolia + ViSenze visual search",
      leadPlay: "Ground search and visual match in enriched product and design data, per account tier",
      commodityFlag: "More search tooling. The gap is the data behind it, not another engine.",
    },
    {
      signal: "Kentico CMS",
      leadPlay: "Make the CMS feed structured product and design content into the portal and search",
      commodityFlag: "A new CMS. The unlock is structured data, not a platform swap.",
    },
    {
      signal: "Klaviyo",
      leadPlay: "Trigger lifecycle and reorder flows off real order and entitlement data, per designer",
      commodityFlag: "Generic email automation. The value is the data it fires on, not the tool.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "integration-audit", label: "ERP-to-commerce integration audit", compounding: 0.92, bolton: 0.85, magnitude: 4, lit: true, wedge: true },
    { id: "onboarding", label: "New-brand onboarding pipeline", compounding: 0.88, bolton: 0.7, magnitude: 4, lit: true },
    { id: "pricing-entitlement", label: "Account-based trade pricing / entitlement", compounding: 0.86, bolton: 0.62, magnitude: 4, lit: true },
    { id: "search-visual", label: "B2B search + visual match on own data", compounding: 0.78, bolton: 0.66, magnitude: 3, lit: true },
    { id: "cross-sell", label: "Cross-sell / next-best-action", compounding: 0.82, bolton: 0.52, magnitude: 4, lit: true },
    { id: "margin-enforcement", label: "Pricing / margin enforcement", compounding: 0.9, bolton: 0.48, magnitude: 5, lit: true },
    { id: "pim", label: "AI PIM / MDM foundation", compounding: 0.85, bolton: 0.3, magnitude: 4, lit: true },
    { id: "erp-migration", label: "ERP migration optionality", compounding: 0.8, bolton: 0.22, magnitude: 5, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "llm-copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
    { id: "replatform", label: "Storefront replatform (unneeded)", compounding: 0.3, bolton: 0.35, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [5, 15],
    moneyPools: [
      {
        id: "integration",
        label: "Integration: trade pricing that stalls at the Oracle seam",
        range: [1.5, 5],
        note: "Distributors lose 1.5–2.5% of margin to quote drift and pricing that does not render correctly per account across thousands of SKUs. A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI. Your negotiated trade pricing lives in Oracle and has to land correctly on the Adobe Commerce portal for every designer and every brand. The integration layer is where that margin leaks or holds.",
        credibility: "verified",
        source: SRC.mckinsey,
      },
      {
        id: "discovery",
        label: "Discovery: designers who find and reorder faster",
        range: [1, 4],
        note: "Dawn Foods, an ingredient wholesaler running a B2B portal, paired AI search with behavioral recs and saw 75%+ digital adoption, 30% faster time-to-order, and +10% baskets. You already run Algolia and ViSenze. The unlock is grounding them in enriched product and design data so a designer finds the right fabric, the right colorway, and the right reorder in seconds, not a showroom call.",
        credibility: "verified",
        source: SRC.dawn,
      },
      {
        id: "installed-base",
        label: "Installed base: defend the trade relationships you own",
        range: [1, 3],
        note: "Selling to designers who already trust you is 5–7x cheaper than new logos, and cross-sell converts 3–4x more often. Johnson Controls tracked $100M+ of protectable revenue with propensity and whitespace models, $35M per point of attrition. At your scale, next-best-action on your own order history is the strongest defense of a century of trade relationships.",
        credibility: "verified",
        source: SRC.jci,
      },
      {
        id: "onboarding",
        label: "Onboarding: turn each acquisition into revenue faster",
        range: [1, 3],
        note: "The Dunes Point thesis is a roll-up. Every bolt-on, Tomlinson and the ones after it, is a new catalog that has to become a priced, searchable, sellable SKU set on the portal. Watsco runs HVAC distribution on Adobe Commerce and lifted AOV 10% from recs while cutting lead time 15%. The faster a new brand crosses the ERP-to-commerce seam, the sooner the acquisition pays, and the more the platform thesis holds in front of PE.",
        credibility: "verified",
        source: SRC.watsco,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Audit and harden the Oracle-to-Adobe seam plus new-brand onboarding",
        body: "Map the integration layer that carries trade pricing and inventory from on-prem Oracle to the Adobe Commerce portal across every brand, find where it leaks or stalls, and turn the next bolt-on into a repeatable onboarding pipeline. It runs on systems you own and answers the live M&A mandate. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Onboard new brands fast on the hardened seam",
        body: "Make the next acquisition a weeks-not-quarters catalog: shared product model, per-brand trade pricing, real-time inventory, all rendering correctly on the portal. This is the M&A platform thesis, operationalized.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Pricing, personalization and search on your own data",
        body: "Account-based trade pricing and entitlement per designer, behavioral personalization, and Algolia plus ViSenze grounded in enriched product and design data. These are the plays that compound on the relationships and data only Kravet owns.",
      },
      {
        phase: "Phase 4, the optionality bet",
        title: "ERP migration optionality and agentic readiness",
        body: "If Dunes Point elects to replace on-prem Oracle, the Phase 1 audit is already the migration spec, and i95Dev's native NetSuite, Epicor and D365 connectors de-risk the move. Make the catalog machine-readable for AI buyers along the way. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, grouped by pillar across the platform layer, storefront, installed base and foundation ──
    plays: [
      // INTEGRATION AND ONBOARDING (the platform layer)
      {
        id: "integration-audit",
        pillar: "foundation",
        title: "ERP-to-commerce integration audit of the Oracle-to-Adobe seam",
        problem:
          "Negotiated trade pricing and inventory live in on-prem Oracle and have to render correctly per designer, per brand, on the Adobe Commerce portal. When the seam drifts, margin leaks and orders fall to a showroom call.",
        caseName: "McKinsey $15B distributor",
        caseDetail:
          "A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks by enforcing pricing across its catalog, then 50 more with agentic AI on top.",
        roi: "1.5–2.5% of margin on a ~$260–300M base is several million dollars a year, and the audit pays whether Oracle stays or goes.",
        whatI95Does:
          "Audit and harden the Oracle-to-Adobe Commerce integration across multi-brand trade pricing and inventory. No replatform, no native-Oracle claim, integration-to-existing today and a migration spec if needed.",
        credibility: "verified",
        source: SRC.mckinsey,
      },
      {
        id: "onboarding",
        pillar: "back-office",
        title: "New-brand onboarding pipeline tied to the M&A roadmap",
        problem:
          "The Dunes Point thesis is a roll-up. Each bolt-on, Tomlinson and the next, is a catalog that has to become priced, searchable, sellable SKUs on the portal, and today that crossing is slow and manual.",
        caseName: "Watsco",
        caseDetail:
          "Watsco runs HVAC distribution on Adobe Commerce, lifted AOV 10% from recs and cut lead time 15%, scaling a multi-brand contractor platform on the same stack Kravet runs.",
        roi: "Every quarter shaved off new-brand time-to-revenue is direct margin and a stronger platform thesis in front of PE.",
        whatI95Does:
          "Build a repeatable onboarding pipeline (shared product model, per-brand pricing, ERP sync) so the next acquisition is a weeks-not-quarters catalog.",
        credibility: "verified",
        source: SRC.watsco,
      },
      // STOREFRONT AND DISCOVERY
      {
        id: "pricing-entitlement",
        pillar: "storefront",
        title: "Account-based trade pricing, entitlement and personalization",
        problem:
          "A wrong price or an out-of-tier SKU to a designer is instant trust loss. Your pricing logic spans Oracle, the portal and the trade-account model, and the storefront cannot always see all of it.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma renders account-based entitlement and AI reorder on approved lists for regulated buyers. This is the rail every other storefront play runs on.",
        roi: "Cutting showroom-assisted orders even modestly at Kravet's scale is worth several million a year, and it is the foundation for personalization and reorder.",
        whatI95Does:
          "Integrate Oracle, Adobe Commerce and the trade-account model so negotiated pricing, entitlements and personalization render correctly per logged-in designer.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      {
        id: "search-visual",
        pillar: "storefront",
        title: "B2B search and visual match grounded in your own data",
        problem:
          "Designers search by colorway, collection, hand, and visual likeness, not your SKU names. A failed lookup is a showroom call or a sale lost to Schumacher.",
        caseName: "Dawn Foods",
        caseDetail:
          "Dawn Foods ran AI search plus behavioral recs on a B2B portal: 75%+ digital adoption, 30% faster time-to-order, +10% baskets.",
        roi: "AI search converts roughly 1.67x keyword. On Kravet's traffic, a 1.5x lift is a multi-million swing.",
        whatI95Does:
          "Ground Algolia and ViSenze in enriched product and design data with trade-tier ranking and entitlement filters, so search and visual match return what a designer can actually buy.",
        credibility: "verified",
        source: SRC.dawn,
      },
      // INSTALLED BASE (the relationships you own)
      {
        id: "cross-sell",
        pillar: "sales-marketing",
        title: "Cross-sell propensity and next-best-action",
        problem:
          "Your defensible margin is the designers who already trust you, but reorder timing and whitespace cross-sell stay manual and invisible until an account goes quiet.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls propensity and whitespace models tracked $100M+ of protectable revenue ($35M per attrition point) and unlocked $40M from 23 accounts. Whitespace-managed accounts grow 9% versus 5–6%.",
        roi: "8–12 points of retention, 15–30% churn reduction, $4–7 returned per $1.",
        whatI95Does:
          "Churn and cross-sell propensity on your order history, surfaced as showroom-rep alerts and on-portal reorder nudges per designer.",
        credibility: "verified",
        source: SRC.jci,
      },
      // FOUNDATION
      {
        id: "pim",
        pillar: "foundation",
        title: "AI Master Data and PIM, the foundation under all of it",
        problem:
          "30–60% of B2B catalogs have incomplete attributes, and 87% of leaders say bad data has hampered AI value. New-brand onboarding, search, visual match and personalization all fail on dirty product data, and a roll-up multiplies the problem with every acquisition.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Stibo and Informatica (Gartner MDM Leaders) run agentic PIM that bulk-enriches attributes from supplier docs and images with human-in-the-loop, standardizes classification, and scores quality continuously.",
        roi: "60–70% less manual stewardship, and it gates the ROI of every other play. The cheapest insurance on the whole portfolio.",
        whatI95Does:
          "AI-enriched PIM and MDM that standardizes product and design data across every brand and feeds the portal, search, ViSenze and the ERP seam from one source of truth.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      // THE OPTIONALITY BET
      {
        id: "erp-migration",
        pillar: "back-office",
        title: "ERP migration optionality and agentic readiness",
        problem:
          "On-prem Oracle is aging, and PE owners often elect an ERP move inside the hold period. A migration with no integration map is a multi-year risk to the trade portal.",
        caseName: "i95Dev native ERP connectors",
        caseDetail:
          "The integration patterns i95Dev ships natively into NetSuite, Epicor and D365 are the same connectors that de-risk a distributor's ERP move without a portal rebuild.",
        roi: "The Phase 1 audit becomes the migration spec, cutting cost and risk if Dunes Point pulls the trigger. If Oracle stays, the audit still paid for itself in margin.",
        whatI95Does:
          "Carry the hardened integration map into a de-risked migration if and when it happens, using native connectors for the destination ERP. No forced move, optionality only.",
        credibility: "illustrative",
        source: SRC.i95erp,
      },
    ],
    why: {
      opener: "You'll be sold a $3M replatform. Your problem might be a six-week integration audit.",
      body: "The Big-4 are built for enterprise-wide change. Your wedge is not enterprise-wide. It is the integration seam between an Oracle ERP and an Adobe Commerce portal you already shipped, and the speed at which a new brand crosses it. That is exactly i95Dev's lane: surgical, deep in commerce and ERP, integration-first, on mid-market economics. We do not replatform your Adobe Commerce build, and we do not force an Oracle rip-out. We make the seam compound, and we de-risk the ERP decision whenever Dunes Point chooses to make it.",
      ctaTitle: "Book your ERP-to-Commerce Integration Audit.",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment of the Oracle-to-Adobe Commerce seam and your new-brand onboarding path, validated against Kravet's real data. Two weeks, not a $3M transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
