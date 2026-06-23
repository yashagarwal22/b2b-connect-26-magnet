import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  tcs: { label: "TCS / Alstom, AI/ML master data management, unified view", url: "https://www.tcs.com/" },
  eaton: { label: "Eaton, ERP data migration on Palantir AIP", url: "https://www.palantir.com/" },
  millipore: { label: "MilliporeSigma, approved-list reorder per logged-in account", url: "https://www.milliporesigma.com/" },
  watsco: { label: "Watsco, AI recommendations lifted AOV 10% (DC360)", url: "https://www.watsco.com/" },
  jci: { label: "Johnson Controls, $40M from 23 accounts, whitespace + NBA (Beyond the Arc)", url: "https://www.johnsoncontrols.com/" },
  search: { label: "AI search converts ~1.67x keyword (search-AI benchmarks)", url: "https://www.bcg.com/" },
  referrals: { label: "AI referrals +357% YoY, ~31% higher conversion (2025)", url: "https://www.similarweb.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  biorad: { label: "Bio-Rad / Thermo Fisher, regulated-catalog enrichment from source documents", url: "https://www.thermofisher.com/" },
  gartner: { label: "Gartner, 90% of B2B purchases AI-intermediated by 2028", url: "https://www.gartner.com/" },
  bigfour: { label: "Big-4 $3M / 8-mo vs 6-week specialist fix (research dump, Part 5.4)", url: "https://nanda.media.mit.edu/" },
} as const;

/**
 * Galls, LLC, a foundation-led modernization account (PE-owned by Charlesbank, mid-acquisition spree).
 * Every section is grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/galls/galls-spec.md.
 *
 * Spine: Galls is the largest US public-safety uniform distributor and has bought 8 companies in 18
 * months, so the mandate is one word, unification. The conference champion is Katherine Pesik (VP IT),
 * who owns budget and strategy for an active CRM replacement whose shortlist already names Microsoft
 * Dynamics 365, i95Dev's core, with PIM as her stated Now priority. The moat is 670+ agency contract
 * accounts, value-added tailoring and embroidery, and the proprietary C.O.M.S. order engine and G.M.I.
 * managed-inventory engine, but the same legacy engines and acquisition sprawl are the fragmentation
 * the mandate exists to solve. The reframe: AI cannot help until the data and systems are unified, and
 * the CRM decision is the moment to set that foundation right. Economic context via CIO Susan Shiposh.
 * Guardrails: lead with D365 CRM plus PIM plus martech integration as the foundation; treat the legacy
 * galls.com re-platform off C.O.M.S. and G.M.I. as a secondary, later thread, not the opening move.
 * Confirm live that core galls.com is custom C.O.M.S./G.M.I. and not BigCommerce, and that revenue
 * figures are inferred and private, so the model stays directional and conservative.
 */
export const galls: AccountConfig = {
  slug: "galls",
  companyName: "Galls, LLC",
  aliases: [
    "Galls",
    "Action Uniform",
    "DesignLab",
    "CMS Uniforms",
    "FireAuthority",
    "C.O.M.S.",
    "G.M.I.",
  ],
  domains: ["galls.com"],
  vertical: "industrial-distribution",
  verticalLabel: "Public-safety uniform & equipment distribution",
  revenueBand: "~$650M total est; ~$172M online",
  role: "VP, IT",
  roleEmphasis: "ai-strategy",
  activeRequirement: true,
  published: true,

  thesis: "You bought 8 companies. Now choose the CRM that unifies them, not just records them.",
  wedge:
    "The Dynamics 365 CRM and PIM foundation that unifies 8 acquisitions into one platform",
  wedgeDetail:
    "It rides the active CRM decision Galls is already funding, with Dynamics 365 already on the shortlist. It answers the stated Now priority, PIM, and the unification mandate in one move. It sets the master-data foundation every later AI play needs. And it proves on the highest-value flows first, the 670+ agency contract accounts and their reorders, before any legacy galls.com re-platform. Prove it on the agency book, then extend the same unified rails across the DTC channel and the segment storefronts.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "An AI demo on the website is a slide. The real work is making 8 acquisitions read as one company.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it, and the cause is almost never the model. It is the data. Galls just bought 8 companies in 18 months, which means duplicate item masters and inconsistent customer records before any AI can reason over them. The edge is not a smarter chatbot. It is unifying that data on the Dynamics 365 CRM you are already choosing and the PIM you named as your Now priority, so the foundation is right before the AI is asked to stand on it.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI bolts onto the storefront. Compounding AI unifies the data 8 acquisitions left you, on rails competitors cannot copy.",
    commodity: [
      "A chatbot bolted onto galls.com",
      "Generic recs that ignore agency contracts",
      "AI-written product copy at scale",
      "An \"AI strategy\" deck, not a CRM decision",
    ],
    compounding: [
      "A unified CRM that merges 8 acquired customer files",
      "A real PIM that dedupes 8 item masters",
      "Account-based reorder for 670+ agency portals",
      "Loyalty and retention grounded in clean order data",
    ],
    pitchWarning:
      "You are choosing a CRM right now, and the shortlist already includes Dynamics 365. Expect a pitch to sell you a fashionable platform with an AI label and no plan for the master data underneath. Do not. The job is not a prettier website. It is making the 8 customer files and 8 item masters read as one, on the D365 backbone you are already evaluating. Choose the CRM that unifies the data, and stand up the PIM under it. Set the foundation, then layer the AI.",
  },

  // ── Module 2.5, Your Stack (verified from the Account 360; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "CRM in active replacement (D365 shortlisted)",
      leadPlay: "Choose the CRM that unifies 8 acquired customer files, on the backbone you are already evaluating",
      commodityFlag: "A flashy CRM with an AI label and no master-data plan. Pick the one that unifies.",
    },
    {
      signal: "No modern PIM (your stated Now priority)",
      leadPlay: "Stand up a real PIM that dedupes 8 item masters into one clean catalog",
      commodityFlag: "\"Add AI product copy.\" Clean attributes first; the AI is confidently wrong without them.",
    },
    {
      signal: "Custom galls.com (C.O.M.S. + G.M.I.)",
      leadPlay: "Treat the legacy engines as a re-platform candidate after the data is unified",
      commodityFlag: "A day-one storefront rip-and-replace. Unify the foundation first, then re-platform.",
    },
    {
      signal: "SAP S/4HANA (in implementation)",
      leadPlay: "Wire the CRM and PIM to the ERP so order and master data flow one way",
      commodityFlag: "A parallel data silo. Keep S/4HANA as the rail and integrate to it.",
    },
    {
      signal: "670+ agency punchout portals (cdcr, gsa, BIA)",
      leadPlay: "Enforce contract pricing and one-click reorder inside the unified account view",
      commodityFlag: "A generic checkout. The agency book needs entitlement-aware ordering.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "d365-crm-pim", label: "D365 CRM + PIM foundation", compounding: 0.9, bolton: 0.7, magnitude: 5, lit: true, wedge: true },
    { id: "acq-integration", label: "Acquisition integration / unified view", compounding: 0.88, bolton: 0.42, magnitude: 5, lit: true },
    { id: "account-reorder-loyalty", label: "Account reorder + loyalty (agency)", compounding: 0.84, bolton: 0.6, magnitude: 4, lit: true },
    { id: "ai-pim-enrichment", label: "AI PIM enrichment", compounding: 0.85, bolton: 0.38, magnitude: 4, lit: true },
    { id: "account-entitlement", label: "Account entitlement on punchout", compounding: 0.8, bolton: 0.66, magnitude: 3, lit: true },
    { id: "b2b-semantic-search", label: "B2B semantic search", compounding: 0.7, bolton: 0.78, magnitude: 3, lit: true },
    { id: "churn-whitespace-nba", label: "Churn / whitespace NBA", compounding: 0.78, bolton: 0.55, magnitude: 3, lit: true },
    { id: "aeo", label: "AEO for spec and gear content", compounding: 0.86, bolton: 0.62, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "ai-product-copy", label: "AI product copy", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "ai-strategy-deck", label: "\"AI strategy\" deck", compounding: 0.2, bolton: 0.3, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [6, 18],
    moneyPools: [
      {
        id: "foundation",
        label: "The foundation: D365 CRM + PIM master-data unification",
        range: [2, 6],
        note: "For a player this size, a clean data foundation, roughly $2–5M over 18 months, unlocks $15–30M a year across the AI portfolio, and 87% of leaders say bad data has already hampered their AI value. Galls has 8 acquired item masters and 8 customer files to merge, so the foundation is not optional, it is the rate-limiter for every other play. Standing up the CRM and PIM right, the first time, is the cheapest insurance on the whole portfolio.",
        credibility: "illustrative",
        source: SRC.tcs,
      },
      {
        id: "integration",
        label: "The integration: unified customer/order view, 8 acq.",
        range: [2, 5],
        note: "TCS rebuilt Alstom's data backbone with AI/ML master data management to give one unified view across a fragmented estate. Galls' acquisition spree left duplicate records and inconsistent units across Action Uniform, DesignLab and CMS, and a single customer and order view is what lets an agency buyer see one Galls instead of eight. Cutting duplicate stewardship and rekeying is real margin the integration releases.",
        credibility: "illustrative",
        source: SRC.tcs,
      },
      {
        id: "retention",
        label: "The retention: agency reorder + loyalty",
        range: [1, 4],
        note: "MilliporeSigma renders approved-list reorder per logged-in account, and Johnson Controls unlocked $40M from 23 accounts with whitespace and next-best-action on its installed base. Galls' 670+ agency accounts reorder the same uniforms and gear on a cycle, yet loyalty and reorder are the 6–12 month item, not yet built. Growing a known agency is cheaper and higher-converting than winning a new one, and new-customer acquisition costs 5 to 7 times expansion.",
        credibility: "verified",
        source: SRC.jci,
      },
      {
        id: "channel",
        label: "The channel: AI search + AEO + agentic readiness",
        range: [1, 3],
        note: "AI search converts about 1.67 times keyword, and AI engines drove a 1.13B referral surge (+357% YoY) that almost no public-safety seller has structured for. Once the catalog is unified in the PIM, tuning search and structuring spec content for answer engines is measured upside on the channel that already carries ~$172M online. The same clean data is what keeps Galls visible as Gartner expects 90% of B2B purchases to be AI-intermediated by 2028.",
        credibility: "verified",
        source: SRC.search,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "D365 CRM and PIM foundation on the agency book",
        body: "Choose Dynamics 365 as the CRM, stand up a real PIM, and unify the master data on the highest-value flows first, the 670+ agency contract accounts. This answers Pesik's active decision and her PIM Now priority, and it ships on the work already funded. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Acquisition integration and unified view",
        body: "Merge the 8 acquired customer files and item masters into one customer and order view, and wire the CRM and PIM to the SAP S/4HANA implementation so master data flows one way. The agency buyer finally sees one Galls.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Agency reorder and loyalty",
        body: "Turn on entitlement-aware one-click reorder and a loyalty and retention program across the 670+ accounts, grounded in the now-clean order data. This is the buyer's own 6–12 month priority, sequenced exactly where it belongs.",
      },
      {
        phase: "Phase 4, the spine and the bet",
        title: "AI search, AEO and agentic readiness",
        body: "Tune B2B semantic search and structure spec and gear content so AI engines cite Galls, and make the unified catalog machine-purchasable for agents. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, foundation-first across the foundation, integration, retention and the bet ──
    plays: [
      // THE FOUNDATION
      {
        id: "d365-crm-pim",
        pillar: "storefront",
        title: "Dynamics 365 CRM and PIM master-data foundation",
        problem:
          "Galls is choosing a CRM right now with D365 on the shortlist, and 8 acquisitions left duplicate customer files and item masters. The CRM either unifies them or just records them. PIM is the stated Now priority.",
        caseName: "TCS / Alstom, Informatica / Stibo",
        caseDetail:
          "TCS rebuilt Alstom's master-data backbone for one unified view; Informatica and Stibo are Gartner MDM Leaders, and 87% of leaders say bad data hampered AI value.",
        roi: "A clean data foundation, roughly $2–5M over 18 months, unlocks $15–30M a year across the AI portfolio. The cheapest insurance on the whole program.",
        whatI95Does:
          "Implement Dynamics 365 CRM and a real PIM, unifying customer and product master data across the acquisitions, on the agency book first.",
        credibility: "illustrative",
        source: SRC.tcs,
      },
      {
        id: "ai-pim-enrichment",
        pillar: "foundation",
        title: "AI PIM enrichment at catalog scale",
        problem:
          "30 to 60% of B2B catalogs carry incomplete attributes, and merging 8 item masters multiplies the mess, which breaks search, recs and any AI on top.",
        caseName: "Bio-Rad / Thermo Fisher, inriver / Akeneo",
        caseDetail:
          "Bio-Rad and Thermo Fisher enrich regulated catalogs from source documents; inriver and Akeneo ship agentic enrichment in 2026.",
        roi: "Manual enrichment runs about $0.50 per SKU, and AI-assisted enrichment cuts up to 60% of the manual data time. Clean attributes gate the search, the AEO and the reorder.",
        whatI95Does:
          "AI-assisted, human-in-the-loop PIM enrichment that standardizes attributes across the merged uniform, tactical and gear catalog.",
        credibility: "illustrative",
        source: SRC.biorad,
      },
      // THE INTEGRATION
      {
        id: "acq-integration",
        pillar: "foundation",
        title: "Acquisition integration and unified customer/order view",
        problem:
          "Action Uniform, DesignLab and CMS each arrived with their own records, and an agency buyer should see one Galls, not the seams of 8 deals.",
        caseName: "TCS / Alstom, Eaton / Palantir",
        caseDetail:
          "TCS delivered AI/ML master data management for Alstom, lowering opex and unifying the view; Eaton used Palantir AIP to automate ERP data migration across an estate.",
        roi: "Cutting duplicate stewardship and rekeying frees margin and the team the acquisition pace is stretching.",
        whatI95Does:
          "Merge the acquired customer and order data into one unified view on D365, wired to the SAP S/4HANA implementation.",
        credibility: "illustrative",
        source: SRC.eaton,
      },
      {
        id: "account-entitlement",
        pillar: "storefront",
        title: "Account entitlement on the punchout rails",
        problem:
          "670+ agency accounts order against contracts through custom punchout portals (cdcr, gsa, BIA), but without unified account logic the wrong price or an unapprovable item is one click away.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma renders approved-list reorder per logged-in account; entitlement-aware B2B storefronts are production-ready on D365-class backbones.",
        roi: "Cutting rep-assisted and corrected orders protects margin and frees the team across 160+ locations.",
        whatI95Does:
          "Enforce contract pricing and entitlement inside the unified account view, wired to the agency punchout portals.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      // THE RETENTION
      {
        id: "agency-reorder-nba",
        pillar: "sales-marketing",
        title: "Agency reorder and next-best-action",
        problem:
          "The same agencies reorder the same uniforms and gear on a cycle, but reorder and cross-sell prompts are manual and loyalty is the 6–12 month item, not yet built.",
        caseName: "Watsco, Johnson Controls",
        caseDetail:
          "Watsco's AI recommendations lifted average order value 10%; Johnson Controls whitespace models unlocked $40M from 23 accounts.",
        roi: "Growing a known agency is cheaper and higher-converting than winning a new one, and acquisition costs 5 to 7 times expansion.",
        whatI95Does:
          "One-click reorder and next-best-action on the unified D365 order history, surfaced to the agency buyer and the sales team.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "loyalty-retention",
        pillar: "sales-marketing",
        title: "Loyalty and retention on clean data",
        problem:
          "Galls names Loyalty and Retention for 6–12 months out, but a loyalty program on fragmented customer records rewards the wrong behavior and double-counts the same buyer across acquisitions.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls tracked $100M+ in protectable revenue, about $35M per attrition point, on its installed base.",
        roi: "An 8 to 12 point retention gain on a recurring agency base compounds every cycle once the data is unified.",
        whatI95Does:
          "Stand up a loyalty and retention program grounded in the unified CRM, so it rewards real agency relationships.",
        credibility: "verified",
        source: SRC.jci,
      },
      // THE BET
      {
        id: "semantic-search-aeo",
        pillar: "sales-marketing",
        title: "B2B semantic search and AEO",
        problem:
          "Officers and agency buyers search by spec, size and application, and increasingly start in an AI assistant. If search is not tuned for the merged catalog, or the answer engine cites a competitor, the order is lost before galls.com loads.",
        caseName: "Search-AI benchmarks, AEO research",
        caseDetail:
          "AI search converts about 1.67 times keyword; AI referrals grew 357% year on year and convert about 31% higher than organic, and almost no public-safety seller has structured for it.",
        roi: "On a ~$172M online channel, relevance and citation are measured upside once the PIM is clean.",
        whatI95Does:
          "Tune B2B semantic search on the unified catalog and structure spec and gear content so AI engines cite Galls.",
        credibility: "verified",
        source: SRC.search,
      },
      {
        id: "agentic-commerce",
        pillar: "sales-marketing",
        title: "Agentic-commerce readiness",
        problem:
          "The AI buyer is coming for agency procurement, and a catalog that is not machine-readable and machine-purchasable is invisible to it.",
        caseName: "Gartner, Google AP2 / OpenAI Instant Checkout",
        caseDetail:
          "Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; Google's AP2 protocol and OpenAI Instant Checkout already ship agentic purchasing.",
        roi: "Readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on the foundation already being built.",
        whatI95Does:
          "Make the unified catalog machine-purchasable for agents using AP2 and MCP, grounded in the new PIM and D365 data.",
        credibility: "illustrative",
        source: SRC.gartner,
      },
    ],
    why: {
      opener: "You'll be sold a CRM with an AI label and no plan for the data underneath it. You do not need that.",
      body: "The platform pitch is the wrong layer. Your CRM decision is live, Dynamics 365 is on your shortlist, and your real problem is the data 8 acquisitions left you: 8 customer files, 8 item masters, one company that should read as one. That is i95Dev's lane: deep in Dynamics 365, deep in commerce, deep in the PIM and master-data work the foundation actually needs, at mid-market economics. We implement the D365 CRM, stand up the PIM, and unify the data on the agency book first, so the AI you layer on later stands on clean ground. We do not sell you a transformation. We make the unification real.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against Galls' real customer, catalog and CRM data. Two weeks, not a platform rebuild.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
