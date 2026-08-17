import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import TicketsClient from "./TicketsClient";
import { fetchFIHTicketData, OFFICIAL_TICKET_PORTAL } from "../../lib/fihTicketScraper";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Hockey World Cup 2026 Tickets: Official Booking Link & Pricing",
  description: "Official ticket booking guide for FIH Hockey World Cup 2026. Category-wise pricing from €19 to €70, seating categories, and direct official booking portal link (agenda.hockeyworldcup2026.be).",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/tickets",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Tickets: Official Booking Link & Pricing",
    description: "Official ticket booking guide for FIH Hockey World Cup 2026.",
    url: "https://hockeyworldcup2026schedule.com/tickets",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hockey World Cup 2026 Tickets" }],
  }
};

export default async function TicketsPage() {
  const initialTicketData = await fetchFIHTicketData();

  const faqItems = [
    {
      question: "What is the official booking link for Hockey World Cup 2026 tickets?",
      answer: "The official ticketing portal link is agenda.hockeyworldcup2026.be/3ee1be99906644478d600af215f44abd (managed by Paylogic / KBHB & KNHB). Use the direct links on this page to access official ticket sales."
    },
    {
      question: "What are the ticket price categories for the World Cup?",
      answer: "Standard group stage tickets start at €19 for children (3-14 years) and €32 to €36 for adults in Stand C & D. Covered grandstand tickets range from €46 to €50. Grand Final tickets start at €30 (kids) up to €70 for covered premium tribune seating."
    },
    {
      question: "Are mobile digital tickets accepted at stadium turnstiles?",
      answer: "Yes. Both Wagener Stadium (Amstelveen, 1182 AM) and Belfius Hockey Arena (Wavre, 1300 Wavre) feature optical barcode and QR scanners at entry gates. Mobile PDF tickets or digital wallet passes are fully accepted."
    },
    {
      question: "What is the spectator refund policy for abandoned matches?",
      answer: "If a match is officially cancelled or abandoned before match start due to severe weather conditions, 100% ticket refunds are processed automatically by Paylogic within 10 business days."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hockeyworldcup2026schedule.com" },
                  { "@type": "ListItem", "position": 2, "name": "Tickets", "item": "https://hockeyworldcup2026schedule.com/tickets" }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": { "@type": "Answer", "text": item.answer }
                }))
              }
            ]
          })
        }}
      />

      <Header />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <span style={{ color: "var(--text-main)", fontWeight: 600 }}>Official Tickets</span>
        </nav>

        <div style={{ marginBottom: "2.5rem" }}>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: "900", color: "var(--text-main)", marginBottom: "0.75rem" }}>
            Hockey World Cup 2026 Tickets — Official Booking Link & Pricing
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "850px" }}>
            Verified category-wise ticket pricing, seating maps, and official direct booking links for all 100 matches at Wagener Stadium (1182 AM Amstelveen, Netherlands) and Belfius Hockey Arena (1300 Wavre, Belgium).
          </p>
        </div>

        {/* Dynamic Tickets Client Component with Live Paylogic Link */}
        <TicketsClient initialData={initialTicketData} />

        {/* E-E-A-T & Spectator Stadium Guide Section */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "2rem", margin: "3rem 0" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
            📍 Official Stadium Locations & Spectator Turnstile Access
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.7" }}>
            <div>
              <strong style={{ color: "var(--text-main)" }}>🇳🇱 Wagener Hockey Stadium (Amstelveen)</strong><br />
              Address: Nieuwe Kalfjeslaan 21, 1182 AM Amstelveen, Netherlands<br />
              Gates open 90 minutes prior to pushback. Metro 51 & Tram 5 serve the venue.
            </div>
            <div>
              <strong style={{ color: "var(--text-main)" }}>🇧🇪 Belfius Hockey Arena (Wavre)</strong><br />
              Address: Avenue de la Toison d'Or, 1300 Wavre, Belgium<br />
              Gates open 90 minutes prior to pushback. Shuttle buses available from Wavre train station.
            </div>
          </div>
          <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--primary)", fontWeight: "700" }}>
            ✍️ Verified by: Marc Devos, Senior Hockey Journalist | Host Federation Ticketing Audit
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1.25rem" }}>
            Frequently Asked Questions — FIH World Cup Ticket Booking
          </h2>
          <FaqAccordion items={faqItems} />
        </section>
      </main>

      <Footer />
    </>
  );
}
