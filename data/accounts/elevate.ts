import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  mkm: { label: "MKM Building Supplies, web orders +26% / revenue +82% on BigCommerce (MACH Award 2023)", url: "https://www.mkmbs.co.uk/" },
  kawasaki: { label: "Kawasaki Engines, B2B portal AOV +5x (DC360)", url: "https://www.kawasakienginesusa.com/" },
  dawn: { label: "Dawn Foods, time-to-order -30% / baskets +10% (DC360)", url: "https://www.dawnfoods.com/" },
  referrals: { label: "AI referrals convert ~31% higher; two-thirds of B2B buyers use AI (2025)", url: "https://www.similarweb.com/" },
} as const;

/**
 * Elevate Packaging Solutions, a fast, fixed-scope storefront upgrade (the smallest, highest-ROI
 * account on the list). Every section is grounded in the Account-360 profile and the AI research
 * dump, and maps 1:1 to companies/elevate/elevate-spec.md.
 *
 * Spine: Elevate is a 25-year sustainable-packaging pioneer running a fast-growing wholesale business
 * on a storefront built for retail checkout. Rich Cohen founded it in 2000, invented the first
 * BPI-certified compostable adhesive label, and built a brand natural-food, coffee, cannabis and
 * e-commerce companies trust to be certifiably compostable. But the BigCommerce (Stencil) storefront
 * has only a basic /login.php: no B2B Edition, no tiered wholesale pricing, no quote-to-order, no
 * reorder pad, and no confirmed back-office sync, so wholesale orders still move through email, a rep
 * and a spreadsheet. The work is not a replatform. It is turning on the B2B depth the platform already
 * supports and wiring it to the back office, in weeks. Write to Rich Cohen (Founder & CEO, AI-forward,
 * attendee), with Kevin Ciskowski (Dir. Product Management) likely owning eCommerce and Donald Bittar
 * (first CFO, ~2024) as the economic champion who owns order-to-cash. Guardrails: BigCommerce is
 * i95Dev-native, so we never move Elevate off it; the ERP is unknown (likely QuickBooks or
 * spreadsheets) and copy reads true whether it stays basic or scales to NetSuite or Dynamics 365.
 * This is a quick win, not a program, sized honestly to a ~$16M founder-led company.
 */
export const elevate: AccountConfig = {
  slug: "elevate",
  companyName: "Elevate Packaging",
  aliases: [
    "Elevate Packaging Solutions",
    "PURE Labels",
    "Distant Village",
    "Distant Village Packaging",
  ],
  domains: ["elevatepackaging.com"],
  vertical: "manufacturing",
  verticalLabel: "Sustainable / compostable packaging",
  revenueBand: "~$16M",
  role: "Founder & CEO",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You already run BigCommerce. Turn it into a real B2B engine, in weeks.",
  wedge:
    "BigCommerce B2B Edition upgrade: tiered wholesale pricing, quote-to-order, and a reorder pad on the storefront you already run",
  wedgeDetail:
    "No replatform. It activates B2B selling depth BigCommerce already supports and that i95Dev installs natively. It targets the exact pain a 25-person team feels every day: orders that move through email and a rep instead of through the site. It is the fastest to ship, the most felt, tied to a live site relaunch, and the foundation everything else rides on. For a company this size, this is a quick win, not a program.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone at the conference is selling you AI. The software is the cheapest thing in the room.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit next to the work instead of inside it. You do not need a science project. You need your wholesale accounts to price, quote and reorder themselves on the storefront you already run, so your small team stops rekeying orders by hand. That frees you to do the one thing no competitor can copy: 25 years of compostable-materials R&D and the certified credibility buyers trust you for.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding software runs on the platform you already own.",
    commodity: [
      "A chatbot bolted onto the homepage",
      "Generic AI product copy for the catalog",
      "A \"transformation roadmap\" deck",
      "An AI science project off to the side",
    ],
    compounding: [
      "A B2B portal where accounts see their own price and reorder",
      "Quote-to-order that captures custom-print jobs without a rep",
      "A clean storefront-to-back-office sync your CFO can trust",
      "AEO so buyers searching \"certified compostable\" find Elevate first",
    ],
    pitchWarning:
      "You speak on digital transformation, so expect a pitch for a multi-quarter program and a new platform. Skip both. You already run BigCommerce. The win is turning on the B2B depth it supports and wiring it to the back office, in weeks, not quarters.",
  },

  // ── Module 2.5, Your Stack (verified from Account 360 and attendee stack; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "BigCommerce (Stencil), basic /login.php",
      leadPlay: "B2B Edition: tiered pricing, quote-to-order, reorder pad",
      commodityFlag: "A replatform. The depth is already in the platform you run.",
    },
    {
      signal: "ERP unknown (likely QuickBooks / spreadsheets)",
      leadPlay: "A clean storefront-to-back-office order sync",
      commodityFlag: "A full ERP implementation. Start with a basic, reliable sync.",
    },
    {
      signal: "HubSpot",
      leadPlay: "Wire web orders and reorder timing into the CRM you already use",
      commodityFlag: "A new marketing suite. You already have the rails.",
    },
    {
      signal: "Google Cloud",
      leadPlay: "A light data layer for catalog and reorder signals, no new cloud",
      commodityFlag: "A cloud migration project. You are already on it.",
    },
    {
      signal: "Drip email",
      leadPlay: "Trigger reorder nudges from real order timing, not guesses",
      commodityFlag: "More email volume. The unlock is order data, not more sends.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "b2b-edition", label: "B2B Edition upgrade (pricing, quote, reorder)", compounding: 0.88, bolton: 0.9, magnitude: 4, lit: true, wedge: true },
    { id: "back-office-sync", label: "Storefront-to-back-office sync", compounding: 0.85, bolton: 0.78, magnitude: 4, lit: true },
    { id: "reorder-pad", label: "Reorder pad + behavioral nudges", compounding: 0.8, bolton: 0.72, magnitude: 3, lit: true },
    { id: "aeo", label: "AEO (found for \"certified compostable\")", compounding: 0.82, bolton: 0.68, magnitude: 3, lit: true },
    { id: "b2b-search", label: "B2B-aware search + spec filtering", compounding: 0.72, bolton: 0.62, magnitude: 2, lit: true },
    { id: "cross-sell", label: "Cross-sell on order history", compounding: 0.75, bolton: 0.45, magnitude: 2, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "product-copy", label: "AI product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
    { id: "transformation", label: "Multi-quarter transformation", compounding: 0.6, bolton: 0.1, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [0.4, 1.5],
    moneyPools: [
      {
        id: "hours",
        label: "Hours: stop rekeying orders by hand",
        range: [0.08, 0.3],
        note: "Every wholesale order that arrives by email is a person rekeying it into the back office, and a chance for an error your CFO has to reconcile. At a 25-person company, recovering even a fraction of an FTE plus killing order errors is real money. Kawasaki Engines automated fax and email orders into a B2B portal and grew average order value 5x after launch. The first dollar saved is the one you stop paying a person to retype.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      {
        id: "conversion",
        label: "Conversion: self-service accounts buy more",
        range: [0.12, 0.45],
        note: "A retail cart sells one bag. A B2B portal with tiered pricing, quote-to-order and a reorder pad sells the next thousand. MKM Building Supplies grew web orders 26% and revenue 82% on a BigCommerce B2B build, the same platform you run. On a ~$16M base, a modest single-digit shift of wholesale volume to self-service is a six-figure swing.",
        credibility: "verified",
        source: SRC.mkm,
      },
      {
        id: "discovery",
        label: "Discovery: found by buyers searching \"certified compostable\"",
        range: [0.08, 0.25],
        note: "Two-thirds of B2B buyers now research suppliers with AI, and AI referral traffic converts about 31% higher than organic. When a brand asks for genuinely compostable packaging, the answer engine cites whoever structured their proof. Your 25 years of BPI certifications are the proof almost no competitor can match, and almost no packaging seller is doing AEO yet.",
        credibility: "illustrative",
        source: SRC.referrals,
      },
      {
        id: "retention",
        label: "Retention: reorders that do not slip to a rival",
        range: [0.12, 0.5],
        note: "Your business is repeat consumable orders. Selling to a buyer who already trusts you is far cheaper than winning a new one, and a reorder pad plus a well-timed nudge keeps the next order on your site instead of in a competitor's inbox. Dawn Foods, an ingredient wholesaler much like your accounts, cut time-to-order 30% and lifted baskets 10% with reorder and behavioral recs. At your scale, holding a few points of reorder volume is the highest-leverage dollar on the page.",
        credibility: "verified",
        source: SRC.dawn,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "B2B Edition upgrade",
        body: "Turn on tiered wholesale pricing, quote-to-order for custom-print jobs, and a reorder pad on the BigCommerce storefront you already run. It is a config-and-install job, not a rebuild, and it fixes the daily pain of manual orders. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 4 to 8 weeks",
        title: "Storefront-to-back-office order sync",
        body: "Wire orders, customers and inventory between BigCommerce and the back office so nothing gets rekeyed and your CFO can trust the numbers. If that back office is QuickBooks or spreadsheets today, this is a basic, clean sync. If you adopt NetSuite or Dynamics 365 as you scale, i95Dev integrates either natively.",
      },
      {
        phase: "Phase 3, 2 to 4 months",
        title: "AEO and B2B-aware search",
        body: "Structure your certification and product data so buyers searching \"certified compostable coffee bag\" find Elevate first, on Google and in AI answers. Add fast spec filtering so accounts find the exact SKU without a call. This runs on credibility you already own.",
      },
      {
        phase: "Phase 4, 4 to 6 months",
        title: "Reorder nudges and cross-sell",
        body: "Use real order timing in HubSpot and Drip to nudge the next reorder, and surface simple cross-sell from order history (the account buying bags should see the matching compostable tape). Light, high-ROI, and built on the data the portal now captures.",
      },
    ],
    // ── The play shortlist, deliberately light across ordering, back office, discovery and retention ──
    plays: [
      // STOREFRONT AND ORDERING
      {
        id: "b2b-edition",
        pillar: "storefront",
        title: "BigCommerce B2B Edition: tiered pricing, quote-to-order, reorder pad",
        problem:
          "Your storefront has a basic login built for retail checkout. Wholesale accounts cannot see their own price, request a quote for a custom-print run, or reorder in one click, so those orders move through email and a rep.",
        caseName: "MKM Building Supplies",
        caseDetail:
          "MKM Building Supplies built a B2B storefront on BigCommerce and grew web orders 26%, revenue 82%, and won a MACH Award. Same platform you run.",
        roi: "A modest shift of wholesale volume to self-service is a six-figure swing on a ~$16M base, plus the hours your team stops spending on manual orders.",
        whatI95Does:
          "Install and configure BigCommerce B2B Edition: customer groups and tiered pricing, quote-to-order for custom print, and a reorder pad. Native to the platform, no replatform.",
        credibility: "verified",
        source: SRC.mkm,
      },
      // BACK OFFICE
      {
        id: "back-office-sync",
        pillar: "back-office",
        title: "Storefront-to-back-office order sync",
        problem:
          "Orders are rekeyed from the site into the back office by hand, which is slow and creates the reconciliation errors your first CFO was hired to fix.",
        caseName: "Kawasaki Engines",
        caseDetail:
          "Kawasaki Engines automated fax and email orders into a B2B portal with back-office integration and grew average order value 5x after launch.",
        roi: "Recover a fraction of an FTE and eliminate order errors. The first and most concrete dollar a CFO can see.",
        whatI95Does:
          "Build a clean two-way sync between BigCommerce and the back office for orders, customers and inventory. Basic if it is QuickBooks or spreadsheets today; native if you move to NetSuite or Dynamics 365.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      // DISCOVERY
      {
        id: "aeo",
        pillar: "sales-marketing",
        title: "AEO and B2B-aware search on your credibility",
        problem:
          "When a brand searches \"certified compostable pouch,\" the answer engine cites whoever structured their proof. Your 25 years of certifications are the proof, but if the data is not structured, a competitor or a generic page gets the citation.",
        caseName: "Dawn Foods",
        caseDetail:
          "The research calls AEO the most underpriced B2B acquisition window of 2026, because almost no seller in your category is doing it systematically. Dawn Foods structured its catalog for AI search and grew online triple digits.",
        roi: "AI referrals convert about 31% higher than organic and two-thirds of B2B buyers now research with AI. The window is open now.",
        whatI95Does:
          "Structure your certification and product data into a schema feed so Google and AI engines cite Elevate, and add fast spec filtering on the storefront.",
        credibility: "illustrative",
        source: SRC.referrals,
      },
      // RETENTION
      {
        id: "reorder-cross-sell",
        pillar: "storefront",
        title: "Reorder nudges and cross-sell on order history",
        problem:
          "Your revenue is repeat consumable orders, but reorder timing and cross-sell (the account buying bags should also see the matching compostable tape) stay manual and easy to miss until an account drifts to a rival.",
        caseName: "Dawn Foods",
        caseDetail:
          "Dawn Foods added reorder and behavioral recs and cut time-to-order 30% while lifting baskets 10%, on a wholesale business much like Elevate's accounts.",
        roi: "Holding a few points of reorder volume and lifting basket size is the highest-leverage dollar at your scale, and it runs on data the new portal already captures.",
        whatI95Does:
          "Trigger reorder nudges from real order timing through HubSpot and Drip, and surface simple cross-sell on the storefront from order history.",
        credibility: "verified",
        source: SRC.dawn,
      },
    ],
    why: {
      opener: "You will be pitched a transformation. Your problem is an upgrade and a connector.",
      body: "The big firms are built to sell enterprise-wide change. That is the wrong tool for a 25-person company that already runs the right platform. Your win is fast and fixed-scope: turn on BigCommerce B2B Edition, wire it to the back office, and let your wholesale accounts serve themselves. That is exactly i95Dev's lane. We are BigCommerce-native, deep in commerce and ERP integration, on mid-market economics. We do not replatform you. We make the platform you already chose do the job, in weeks.",
      ctaTitle: "Book your BigCommerce B2B Readiness Check",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these directional numbers against Elevate's real storefront and orders. Weeks, not a transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "BigCommerce + ERP native" },
    },
  },
};
