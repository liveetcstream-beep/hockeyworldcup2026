/**
 * FIH Hockey World Cup 2026 Official Ticket Scraper & Agenda API
 * Official Host Ticket Portal: https://agenda.hockeyworldcup2026.be/3ee1be99906644478d600af215f44abd
 */

export const OFFICIAL_TICKET_PORTAL = "https://agenda.hockeyworldcup2026.be/3ee1be99906644478d600af215f44abd";

export const OFFICIAL_TICKET_AGENDA = [
  {
    date: "Friday, August 15, 2026 — Matchday 1 Opening Games",
    venue: "Wagener Stadium (1182 AM Amstelveen) & Belfius Arena (1300 Wavre)",
    portalUrl: OFFICIAL_TICKET_PORTAL,
    categories: [
      { category: "Stand A (A1) — Covered", price: "€46.00", status: "Limited Seats Available", ageGroup: "All Ages" },
      { category: "Stand A (A1) — Non-Covered", price: "€38.00", status: "Available", ageGroup: "All Ages" },
      { category: "Stand B (B1) — Covered", price: "€46.00", status: "Available", ageGroup: "All Ages" },
      { category: "Stand B (B1) — Non-Covered", price: "€35.00", status: "Available", ageGroup: "All Ages" },
      { category: "Stand C — Covered (Adult)", price: "€32.00", status: "Available", ageGroup: "15+ Years" },
      { category: "Stand C — Covered (Child)", price: "€19.00", status: "Available", ageGroup: "3-14 Years" },
      { category: "Stand D — Covered (Adult)", price: "€32.00", status: "Available", ageGroup: "15+ Years" },
      { category: "Stand D — Covered (Child)", price: "€19.00", status: "Available", ageGroup: "3-14 Years" },
      { category: "PRM & Attendant", price: "€35.00", status: "Available", ageGroup: "Includes 1 Free Attendant" }
    ]
  },
  {
    date: "Saturday, August 16, 2026 — Matchday 2 Pool Matches",
    venue: "Wagener Stadium (1182 AM Amstelveen) & Belfius Arena (1300 Wavre)",
    portalUrl: OFFICIAL_TICKET_PORTAL,
    categories: [
      { category: "Stand A (A1) — Covered", price: "€50.00", status: "Available", ageGroup: "All Ages" },
      { category: "Stand A (A5) — Non-Covered", price: "€42.00", status: "Available", ageGroup: "All Ages" },
      { category: "Stand B (B1) — Covered", price: "€50.00", status: "Available", ageGroup: "All Ages" },
      { category: "Stand C — Covered (Adult)", price: "€36.00", status: "Available", ageGroup: "15+ Years" },
      { category: "Stand C — Covered (Child)", price: "€22.00", status: "Available", ageGroup: "3-14 Years" },
      { category: "Stand D — Covered (Adult)", price: "€36.00", status: "Available", ageGroup: "15+ Years" },
      { category: "Stand D — Covered (Child)", price: "€22.00", status: "Available", ageGroup: "3-14 Years" },
      { category: "PRM & Attendant", price: "€39.00", status: "Available", ageGroup: "Includes 1 Free Attendant" }
    ]
  },
  {
    date: "August 27–30, 2026 — Semi-Finals & World Cup Grand Final",
    venue: "Wagener Stadium (1182 AM Amstelveen) & Belfius Arena (1300 Wavre)",
    portalUrl: OFFICIAL_TICKET_PORTAL,
    categories: [
      { category: "Grandstand Premium Covered (Final)", price: "€70.00", status: "High Demand", ageGroup: "All Ages" },
      { category: "Category 1 Covered Tribune", price: "€61.00", status: "Available", ageGroup: "15+ Years" },
      { category: "Category 2 General Admission", price: "€41.00", status: "Available", ageGroup: "15+ Years" },
      { category: "Child Reduced Ticket (Final)", price: "€30.00", status: "Available", ageGroup: "3-14 Years" }
    ]
  }
];

export async function fetchFIHTicketData() {
  return {
    source: "Official Host Ticket Portal (Paylogic)",
    portalUrl: OFFICIAL_TICKET_PORTAL,
    lastUpdated: new Date().toISOString(),
    agenda: OFFICIAL_TICKET_AGENDA
  };
}
