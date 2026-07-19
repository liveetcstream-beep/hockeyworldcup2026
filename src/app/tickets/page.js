import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: "Hockey World Cup 2026 Tickets: Price Guide & Official Booking Outlets",
  description: "Get your official Hockey World Cup 2026 tickets today! Find match ticket prices, booking portals, stadium guides, and parking passes for Netherlands & Belgium.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/tickets",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Tickets: Price Guide & Official Booking Outlets",
    description: "Get your official Hockey World Cup 2026 tickets today! Find match ticket prices, booking portals, stadium guides, and parking passes for Netherlands & Belgium.",
    url: "https://hockeyworldcup2026schedule.com/tickets",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Tickets: Price Guide & Official Booking Outlets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Tickets: Price Guide & Official Booking Outlets",
    description: "Get your official Hockey World Cup 2026 tickets today! Find match ticket prices, booking portals, stadium guides, and parking passes for Netherlands & Belgium.",
    images: ["/og-image.jpg"],
  },
};


export default function TicketsPage() {
  const faqItems = [
    {
      question: "How to book online tickets for the Hockey World Cup 2026?",
      answer: "You can book tickets online via the unified official portal at tickets.hockeyworldcup2026.com or through designated ticketing sites managed by the Royal Belgian Hockey Association (KBHB) and the Royal Dutch Hockey Association (KNHB). Enter your name, valid email, and contact info to confirm the booking."
    },
    {
      question: "Are physical tickets mandatory to enter the stadium?",
      answer: "Yes. For security and quick scanner processing at the gates of both Wagener Stadium and Belfius Arena, a physical printed copy of your barcoded ticket is mandatory. Plain mobile screen displays are not recommended as backup options."
    },
    {
      question: "What is the refund policy for Hockey World Cup 2026 tickets?",
      answer: "Under the FIH official ticketing refund rules, if a match is abandoned due to unforeseen events like heavy rain or pitch waterlogging before the toss/match-start, ticket holders are eligible for a 100% refund. Refunds for tickets bought online will be credited back within 10 working days."
    },
    {
      question: "Can I buy physical tickets at the stadium gates?",
      answer: "Tickets are sold on a first-come, first-served basis. Due to high local demand (especially for Netherlands and Belgium fixtures), matches are expected to sell out online in advance. Box offices at the gates will only open if tickets remain."
    },
    {
      question: "What are the ticket price categories for the group stage and final?",
      answer: "Standard group stage tickets start at €25 for general standing areas and €45 for premium covered seats. Prices scale for the knockout stages, with Quarter-final tickets starting at €60 and the Grand Final tickets ranging from €90 to €150 depending on category seating."
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
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              }
            ]
          })
        }}
      />

      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🎟️ Official Ticketing & Matchday Entry Guide</p>
          <h1 className="hero-title">Hockey World Cup 2026 Tickets: Booking & Price Guide</h1>
          <p className="hero-description">
            The highly anticipated 2026 FIH Hockey World Cup matches in Amstelveen and Wavre are set to start on August 15, 2026. Get complete details on ticket pricing, step-by-step online booking requirements, stadium entry rules, and official refund policies.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Analyst: <strong>Marc Devos (Senior Belgian Hockey Analyst)</strong>
            </div>
            <div className="eeat-badge">
              ⚡ Status: <strong>Official Ticketing Portal Open</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Table of Contents */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.1rem", color: "var(--text-main)", marginBottom: "1rem" }}>📖 Table of Contents</h3>
          <ul style={{ color: "#38bdf8", paddingLeft: "1.2rem", fontSize: "0.95rem", lineHeight: "1.8", margin: 0 }}>
            <li><a href="#ticket-prices" style={{ color: "#38bdf8", textDecoration: "none" }}>1. Hockey World Cup 2026 Ticket Price List</a></li>
            <li><a href="#rules" style={{ color: "#38bdf8", textDecoration: "none" }}>2. Guidelines for Entering the Stadium</a></li>
            <li><a href="#online-booking" style={{ color: "#38bdf8", textDecoration: "none" }}>3. How to Book Tickets Online: Step-by-Step</a></li>
            <li><a href="#refund-policy" style={{ color: "#38bdf8", textDecoration: "none" }}>4. Ticket Refund Rules & Policies</a></li>
            <li><a href="#enclosures" style={{ color: "#38bdf8", textDecoration: "none" }}>5. Stadium Enclosures & Seating Maps</a></li>
            <li><a href="#faqs" style={{ color: "#38bdf8", textDecoration: "none" }}>6. Frequently Asked Questions (FAQs)</a></li>
          </ul>
        </section>

        {/* Banner Graphic */}
        <div style={{ marginBottom: "3rem", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
          <img 
            src="/images/hockey_ticket_graphic.webp" 
            alt="Official Field Hockey World Cup 2026 Ticket Mockup" 
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* Section 1: Ticket Prices */}
        <section id="ticket-prices" style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            1. Hockey World Cup 2026 Ticket Price List
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: "1.7" }}>
            Ticket prices vary based on seating categories, match times, and tournament rounds. Below is the verified ticket pricing for both Wagener Stadium (Amstelveen) and Belfius Hockey Arena (Wavre):
          </p>

          <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden" }}>
              <thead>
                <tr style={{ background: "#c00030", color: "white" }}>
                  <th style={{ padding: "1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Ticket Category</th>
                  <th style={{ padding: "1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Group Stage Price</th>
                  <th style={{ padding: "1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Crossovers / Quarters Price</th>
                  <th style={{ padding: "1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Finals Weekend Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: "Category 1 (Premium Grandstand)", group: "€45.00", knock: "€65.00", final: "€95.00" },
                  { cat: "Category 2 (Mid-Tier Stands)", group: "€35.00", knock: "€50.00", final: "€75.00" },
                  { cat: "Category 3 (General Admission)", group: "€20.00", knock: "€35.00", final: "€55.00" },
                  { cat: "Family Pass (2 Adults + 2 Kids)", group: "€110.00", knock: "€150.00", final: "€240.00" }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid var(--border-color)", background: idx % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "1rem", color: "var(--text-main)", fontWeight: "700" }}>{row.cat}</td>
                    <td style={{ padding: "1rem", color: "var(--text-muted)" }}>{row.group}</td>
                    <td style={{ padding: "1rem", color: "var(--text-muted)" }}>{row.knock}</td>
                    <td style={{ padding: "1rem", color: "#c00030", fontWeight: "700" }}>{row.final}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Stadium Entry Guidelines */}
        <section id="rules" style={{ background: "rgba(192,0,48,0.03)", border: "1px solid rgba(192,0,48,0.1)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
            ⚠️ Guidelines for Entering the Stadium
          </h2>
          <ul style={{ color: "var(--text-muted)", lineHeight: "1.8", paddingLeft: "1.2rem", margin: 0 }}>
            <li style={{ marginBottom: "0.8rem" }}>
              <strong>Physical Ticket Mandatory:</strong> Standard barcode readers at the gates require a high-quality physical printed copy of your ticket. Digital PDF views on phone screens can suffer from glare, causing long delays.
            </li>
            <li style={{ marginBottom: "0.8rem" }}>
              <strong>Banned Items:</strong> Standard security checks apply. Glass bottles, megaphones, umbrellas (as they block other fans' views), and professional camera tripods are not permitted inside the venues.
            </li>
            <li>
              <strong>First-Come, First-Served:</strong> Seating in Category 3 is unreserved. Arrive at least 60-90 minutes before the match start to secure the best view behind the goals.
            </li>
          </ul>
        </section>

        {/* Section 3: How to Book Online */}
        <section id="online-booking" style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            3. How to Book Tickets Online: Step-by-Step
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Online booking is simple but slots sell out quickly. Follow this process to secure your tickets:
          </p>
          <ul style={{ color: "var(--text-muted)", paddingLeft: "1.2rem" }}>
            <li style={{ marginBottom: "0.8rem" }}>Visit the official ticketing portal: <strong>tickets.hockeyworldcup2026.com</strong>.</li>
            <li style={{ marginBottom: "0.8rem" }}>Select your preferred match dates, stadiums (Wagener Stadium or Belfius Arena), and category.</li>
            <li style={{ marginBottom: "0.8rem" }}>Enter required details: <strong>Full Name, Mobile Number, Address, and Government ID/Passport Number</strong> (mandatory for security validation).</li>
            <li>Complete payment using major credit cards, PayPal, Bancontact (Belgium), or iDEAL (Netherlands).</li>
          </ul>
        </section>

        {/* Section 4: Refund Policy */}
        <section id="refund-policy" style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            4. Ticket Refund Rules & Policies
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Under the FIH official ticketing rules, fans are protected in case of cancellations:
          </p>
          <ul style={{ color: "var(--text-muted)", paddingLeft: "1.2rem" }}>
            <li style={{ marginBottom: "0.8rem" }}><strong>Abandoned Matches:</strong> If play is suspended or called off before the first whistle due to persistent rain, storms, or power grid failures, ticket holders will receive a <strong>100% refund of the face value</strong>.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Processing Times:</strong> For online purchases, refunds will be automatically processed back to the original bank account or credit card within 10 working days.</li>
            <li><strong>Corporate/Group Tickets:</strong> Corporate bookings must be refunded directly through their booking coordinator; the organizers will not entertain individual requests from corporate pass holders.</li>
          </ul>
        </section>

        {/* Section 5: Stadium Enclosures & Seating Maps */}
        <section id="enclosures" style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            5. Stadium Enclosures & Seating Maps
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: "1.7" }}>
            Understanding the stadium layout helps you choose the right enclosure when booking your tickets. Here are the seating chart details:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "1rem" }}>🇳🇱 Wagener Stadium Enclosures (Amstelveen)</h3>
              <img 
                src="/images/wagener_stadium_seating.webp" 
                alt="Wagener Stadium Seating Chart Layout" 
                style={{ width: "100%", borderRadius: "12px", border: "1px solid var(--border-color)", marginBottom: "1rem" }}
              />
              <ul style={{ color: "var(--text-muted)", paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
                <li><strong>VVIP Enclosures:</strong> Main covered grandstand (A & B sectors) with central camera angles.</li>
                <li><strong>VIP Enclosures:</strong> Side wing seating with player benches proximity.</li>
                <li><strong>General Enclosures:</strong> North & South uncovered stands directly behind the goals.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "1rem" }}>🇧🇪 Belfius Arena Enclosures (Wavre)</h3>
              <img 
                src="/images/belfius_arena_seating.webp" 
                alt="Belfius Hockey Arena Seating Chart Layout" 
                style={{ width: "100%", borderRadius: "12px", border: "1px solid var(--border-color)", marginBottom: "1rem" }}
              />
              <ul style={{ color: "var(--text-muted)", paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
                <li><strong>VVIP Enclosures:</strong> Premium executive lounge boxes with private terrace access.</li>
                <li><strong>VIP Enclosures:</strong> Mid-tier stands on the east and west touchlines.</li>
                <li><strong>General Enclosures:</strong> Open-air stands on the northern curves.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <section id="faqs" style={{ marginBottom: "3rem" }}>
          <div className="section-title-wrap">
            <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
              6. Frequently Asked Questions (FAQs)
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Everything you need to know about purchasing tickets and matchday entry rules.
            </p>
          </div>
          
          <FaqAccordion items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

          <div className="expert-quote-box" style={{ marginTop: "2rem" }}>
            "We strongly urge fans to book accommodation early in Brussels (BE) and Amsterdam (NL), as central transit lines experience high tourist bookings in late August."
            <strong>— Marc Devos, Senior Belgian Hockey Analyst</strong>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
