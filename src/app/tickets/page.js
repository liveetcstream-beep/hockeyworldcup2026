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

  const groupStage2Days = [
    {
      date: "Friday, August 21st — Group Stage 2 (Belfius Arena, Wavre)",
      tickets: [
        { stand: "Stand A (A1)", type: "Covered (All Ages)", price: "€46.00", status: "Sold Out" },
        { stand: "Stand A (A1)", type: "Non-Covered (All Ages)", price: "€38.00", status: "Sold Out" },
        { stand: "Stand B (B1)", type: "Covered (All Ages)", price: "€46.00", status: "Available" },
        { stand: "Stand B (B1)", type: "Non-Covered (All Ages)", price: "€35.00", status: "Sold Out" },
        { stand: "Stand C", type: "Covered (15+)", price: "€32.00", status: "Available" },
        { stand: "Stand C", type: "Covered (3-14 years)", price: "€19.00", status: "Available" },
        { stand: "Stand D", type: "Covered (15+)", price: "€32.00", status: "Available" },
        { stand: "Stand D", type: "Covered (3-14 years)", price: "€19.00", status: "Available" },
        { stand: "PRM & Attendant", type: "Day Ticket (1 Attendant Included)", price: "€35.00", status: "Available" }
      ],
      note: "Children up to 3 years old have free entry when accompanied by a ticket-holding adult (must sit on lap). Children from 3 to 14 years old get a reduced rate in Stand C & D. PRM visitors get accessible seating in tribune B with 1 attendant free ticket included."
    },
    {
      date: "Saturday, August 22nd — Group Stage 2 (Belfius Arena, Wavre)",
      tickets: [
        { stand: "Stand A (A1)", type: "Covered (All Ages)", price: "€50.00", status: "Available" },
        { stand: "Stand A (A5)", type: "Non-Covered (All Ages)", price: "€42.00", status: "Available" },
        { stand: "Stand B (B1)", type: "Covered (All Ages)", price: "€50.00", status: "Available" },
        { stand: "Stand B (B2)", type: "Non-Covered (All Ages)", price: "€42.00", status: "Available" },
        { stand: "Stand C", type: "Covered (15+)", price: "€36.00", status: "Available" },
        { stand: "Stand C", type: "Covered (3-14 years)", price: "€22.00", status: "Available" },
        { stand: "Stand D", type: "Covered (15+)", price: "€36.00", status: "Available" },
        { stand: "Stand D", type: "Covered (3-14 years)", price: "€22.00", status: "Available" },
        { stand: "PRM & Attendant", type: "Day Ticket (1 Attendant Included)", price: "€39.00", status: "Available" }
      ],
      note: "Children up to 3 years old have free entry when accompanied by a ticket-holding adult (must sit on lap). Children from 3 to 14 years old get a reduced rate in Stand C & D. PRM visitors get accessible seating in tribune B with 1 attendant free ticket included."
    },
    {
      date: "Sunday, August 23rd — Group Stage 2 (Belfius Arena, Wavre)",
      tickets: [
        { stand: "Stand A (A1)", type: "Covered (All Ages)", price: "€50.00", status: "Sold Out" },
        { stand: "Stand A (A1)", type: "Non-Covered (All Ages)", price: "€42.00", status: "Sold Out" },
        { stand: "Stand B (B1)", type: "Covered (All Ages)", price: "€50.00", status: "Coming Soon" },
        { stand: "Stand B (B1)", type: "Non-Covered (All Ages)", price: "€39.00", status: "Sold Out" },
        { stand: "Stand C", type: "Covered (15+)", price: "€36.00", status: "Sold Out" },
        { stand: "Stand C", type: "Covered (3-14 years)", price: "€22.00", status: "Sold Out" },
        { stand: "Stand D", type: "Covered (15+)", price: "€36.00", status: "Sold Out" },
        { stand: "Stand D", type: "Covered (3-14 years)", price: "€22.00", status: "Sold Out" },
        { stand: "PRM & Attendant", type: "Day Ticket (1 Attendant Included)", price: "€39.00", status: "Available" }
      ],
      note: "Children up to 3 years old have free entry when accompanied by a ticket-holding adult (must sit on lap). Children from 3 to 14 years old get a reduced rate in Stand C & D. PRM visitors get accessible seating in tribune B with 1 attendant free ticket included."
    },
    {
      date: "Monday, August 24th — Group Stage 2 (Belfius Arena, Wavre)",
      tickets: [
        { stand: "Stand A (A2)", type: "Covered (All Ages)", price: "€49.00", status: "Available" },
        { stand: "Stand A (A1)", type: "Non-Covered (All Ages)", price: "€38.00", status: "Available" },
        { stand: "Stand B (B1)", type: "Covered (All Ages)", price: "€46.00", status: "Available" },
        { stand: "Stand B (B1)", type: "Non-Covered (All Ages)", price: "€35.00", status: "Available" },
        { stand: "Stand C", type: "Covered (15+)", price: "€32.00", status: "Available" },
        { stand: "Stand C", type: "Covered (3-14 years)", price: "€19.00", status: "Available" },
        { stand: "Stand D", type: "Covered (15+)", price: "€32.00", status: "Available" },
        { stand: "Stand D", type: "Covered (3-14 years)", price: "€19.00", status: "Available" },
        { stand: "PRM & Attendant", type: "Day Ticket (1 Attendant Included)", price: "€35.00", status: "Available" }
      ],
      note: "Children up to 3 years old have free entry when accompanied by a ticket-holding adult (must sit on lap). Children from 3 to 14 years old get a reduced rate in Stand C & D. PRM visitors get accessible seating in tribune B with 1 attendant free ticket included."
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
          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
            <a 
              href="https://agenda.hockeyworldcup2026.be/3ee1be99906644478d600af215f44abd" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button primary-cta"
              style={{
                background: "linear-gradient(135deg, #c00030 0%, #e11d48 100%)",
                color: "white",
                fontWeight: "800",
                padding: "1rem 2.5rem",
                borderRadius: "9999px",
                textDecoration: "none",
                fontSize: "1.15rem",
                boxShadow: "0 6px 20px rgba(192, 0, 48, 0.4)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem"
              }}
            >
              🎟️ Buy Official Tickets Online
            </a>
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
            <li><a href="#parking-guide" style={{ color: "#38bdf8", textDecoration: "none" }}>6. Belfius Hockey Arena (Wavre) Parking Guide</a></li>
            <li><a href="#faqs" style={{ color: "#38bdf8", textDecoration: "none" }}>7. Frequently Asked Questions (FAQs)</a></li>
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
                  { cat: "Category 1 (Premium Covered Grandstand)", group: "€45.00", knock: "€61.00", final: "€70.00" },
                  { cat: "Category 2 (Mid-Tier Non-Covered Touchline)", group: "€35.00", knock: "€50.00 - €56.00", final: "€59.00 - €62.00" },
                  { cat: "Category 3 (General Admission Goalends)", group: "€20.00", knock: "€41.00 - €45.00", final: "€55.00" },
                  { cat: "Family Pass / Group Seating Options", group: "€110.00", knock: "€150.00", final: "€240.00" }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid var(--border-color)", background: idx % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "1rem", color: "var(--text-main)", fontWeight: "700" }}>{row.cat}</td>
                    <td style={{ padding: "1rem", color: "var(--text-muted)", fontWeight: "600" }}>{row.group}</td>
                    <td style={{ padding: "1rem", color: "var(--text-muted)", fontWeight: "600" }}>{row.knock}</td>
                    <td style={{ padding: "1rem", color: "#c00030", fontWeight: "800" }}>{row.final}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-main)", marginTop: "2.5rem", marginBottom: "1rem" }}>🇧🇪 Belfius Hockey Arena (Wavre) Detailed Matchday Tickets</h3>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.95rem", lineHeight: "1.7" }}>
            Official matchday ticketing options, pricing tiers, and real-time seat availability for the tournament rounds hosted in Wavre:
          </p>

          <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #0284c7", paddingLeft: "1rem", marginTop: "2rem", marginBottom: "1.5rem" }}>
            ⚔️ Group Stage 2 Matchday Tickets (Aug 21 – 24)
          </h4>

          {groupStage2Days.map((day, dayIdx) => (
            <div key={dayIdx} style={{ background: "var(--bg-secondary)", borderRadius: "16px", padding: "1.5rem", border: "1px solid var(--border-color)", marginBottom: "2rem", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <h5 style={{ color: "var(--text-main)", margin: "0 0 1.2rem 0", fontSize: "1.1rem", fontWeight: "800", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                📅 {day.date}
              </h5>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid var(--border-color)", textAlign: "left" }}>
                      <th style={{ padding: "0.8rem 0.6rem", color: "var(--text-main)", fontWeight: "800" }}>Stand & Category</th>
                      <th style={{ padding: "0.8rem 0.6rem", color: "var(--text-main)", fontWeight: "800" }}>Type</th>
                      <th style={{ padding: "0.8rem 0.6rem", color: "var(--text-main)", fontWeight: "800" }}>Price</th>
                      <th style={{ padding: "0.8rem 0.6rem", textAlign: "right", color: "var(--text-main)", fontWeight: "800" }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {day.tickets.map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "rgba(0,0,0,0.02)" : "transparent" }}>
                        <td style={{ padding: "0.8rem 0.6rem", fontWeight: "700", color: "var(--text-main)" }}>{row.stand}</td>
                        <td style={{ padding: "0.8rem 0.6rem", color: "var(--text-muted)", fontWeight: "500" }}>{row.type}</td>
                        <td style={{ padding: "0.8rem 0.6rem", color: "#c00030", fontWeight: "800" }}>{row.price}</td>
                        <td style={{ padding: "0.8rem 0.6rem", textAlign: "right" }}>
                          <span style={{
                            display: "inline-block",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "9999px",
                            fontSize: "0.8rem",
                            fontWeight: "800",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            background: row.status === "Available" ? "rgba(34,197,94,0.1)" : row.status === "Coming Soon" ? "rgba(14,165,233,0.1)" : "rgba(239,68,68,0.1)",
                            color: row.status === "Available" ? "#16a34a" : row.status === "Coming Soon" ? "#0284c7" : "#dc2626",
                            border: row.status === "Available" ? "1px solid rgba(34,197,94,0.2)" : row.status === "Coming Soon" ? "1px solid rgba(14,165,233,0.2)" : "1px solid rgba(239,68,68,0.2)"
                          }}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: "1.2rem", background: "rgba(2,132,199,0.05)", border: "1px solid rgba(2,132,199,0.2)", borderRadius: "8px", padding: "0.8rem 1rem", fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                💡 <strong>Note on Child Admission & PMR:</strong> {day.note}
              </div>
            </div>
          ))}

          <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginTop: "3rem", marginBottom: "1.5rem" }}>
            🏆 Knockout Stage: Semi-Finals & Finals (Aug 27 – 30)
          </h4>

          {/* Semi-Finals Table - Aug 27 */}
          <div style={{ background: "var(--bg-secondary)", borderRadius: "16px", padding: "1.5rem", border: "1px solid var(--border-color)", marginBottom: "2rem", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
            <h4 style={{ color: "var(--text-main)", margin: "0 0 1.2rem 0", fontSize: "1.1rem", fontWeight: "800", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              📅 Thursday, August 27th — Semi-Finals (Belfius Arena, Wavre)
            </h4>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border-color)", textAlign: "left" }}>
                    <th style={{ padding: "0.8rem 0.6rem", color: "var(--text-main)", fontWeight: "800" }}>Stand & Category</th>
                    <th style={{ padding: "0.8rem 0.6rem", color: "var(--text-main)", fontWeight: "800" }}>Type</th>
                    <th style={{ padding: "0.8rem 0.6rem", color: "var(--text-main)", fontWeight: "800" }}>Price</th>
                    <th style={{ padding: "0.8rem 0.6rem", textAlign: "right", color: "var(--text-main)", fontWeight: "800" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { stand: "Stand A (A1)", type: "Covered (All Ages)", price: "€61.00", status: "Available" },
                    { stand: "Stand A (A2)", type: "Non-Covered (All Ages)", price: "€56.00", status: "Available" },
                    { stand: "Stand B (B1)", type: "Covered (All Ages)", price: "€61.00", status: "Coming Soon" },
                    { stand: "Stand B (B1)", type: "Non-Covered (All Ages)", price: "€50.00", status: "Available" },
                    { stand: "Stand C", type: "Covered (15+)", price: "€45.00", status: "Available" },
                    { stand: "Stand C", type: "Covered (3-14 years)", price: "€26.00", status: "Available" },
                    { stand: "Stand D", type: "Covered (15+)", price: "€45.00", status: "Available" },
                    { stand: "Stand D", type: "Covered (3-14 years)", price: "€26.00", status: "Available" },
                    { stand: "PRM & Attendant", type: "Day Ticket (1 Attendant Included)", price: "€50.00", status: "Available" }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "rgba(0,0,0,0.02)" : "transparent" }}>
                      <td style={{ padding: "0.8rem 0.6rem", fontWeight: "700", color: "var(--text-main)" }}>{row.stand}</td>
                      <td style={{ padding: "0.8rem 0.6rem", color: "var(--text-muted)", fontWeight: "500" }}>{row.type}</td>
                      <td style={{ padding: "0.8rem 0.6rem", color: "#c00030", fontWeight: "800" }}>{row.price}</td>
                      <td style={{ padding: "0.8rem 0.6rem", textAlign: "right" }}>
                        <span style={{
                          display: "inline-block",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontSize: "0.8rem",
                          fontWeight: "800",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          background: row.status === "Available" ? "rgba(34,197,94,0.1)" : row.status === "Coming Soon" ? "rgba(14,165,233,0.1)" : "rgba(239,68,68,0.1)",
                          color: row.status === "Available" ? "#16a34a" : row.status === "Coming Soon" ? "#0284c7" : "#dc2626",
                          border: row.status === "Available" ? "1px solid rgba(34,197,94,0.2)" : row.status === "Coming Soon" ? "1px solid rgba(14,165,233,0.2)" : "1px solid rgba(239,68,68,0.2)"
                        }}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: "1.2rem", background: "rgba(2,132,199,0.05)", border: "1px solid rgba(2,132,199,0.2)", borderRadius: "8px", padding: "0.8rem 1rem", fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
              💡 <strong>Note on Child Admission & PMR (Aug 27):</strong> Children up to 3 years old have free entry when accompanied by a ticket-holding adult (must sit on lap). Children from 3 to 14 years old require a ticket but get a reduced rate in Stand C & D. PRM visitors get accessible seating in tribune B with 1 attendant free ticket included.
            </div>
          </div>

          {/* Semi-Finals Table - Aug 28 */}
          <div style={{ background: "var(--bg-secondary)", borderRadius: "16px", padding: "1.5rem", border: "1px solid var(--border-color)", marginBottom: "2rem", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
            <h4 style={{ color: "var(--text-main)", margin: "0 0 1.2rem 0", fontSize: "1.1rem", fontWeight: "800", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              📅 Friday, August 28th — Semi-Finals (Belfius Arena, Wavre)
            </h4>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border-color)", textAlign: "left" }}>
                    <th style={{ padding: "0.8rem 0.6rem", color: "var(--text-main)", fontWeight: "800" }}>Stand & Category</th>
                    <th style={{ padding: "0.8rem 0.6rem", color: "var(--text-main)", fontWeight: "800" }}>Type</th>
                    <th style={{ padding: "0.8rem 0.6rem", color: "var(--text-main)", fontWeight: "800" }}>Price</th>
                    <th style={{ padding: "0.8rem 0.6rem", textAlign: "right", color: "var(--text-main)", fontWeight: "800" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { stand: "Stand A (A1)", type: "Covered (All Ages)", price: "€61.00", status: "Coming Soon" },
                    { stand: "Stand A (A1)", type: "Non-Covered (All Ages)", price: "€53.00", status: "Sold Out" },
                    { stand: "Stand B (B1)", type: "Covered (All Ages)", price: "€61.00", status: "Coming Soon" },
                    { stand: "Stand B (B1)", type: "Non-Covered (All Ages)", price: "€50.00", status: "Sold Out" },
                    { stand: "Stand C", type: "Non-Covered (15+)", price: "€41.00", status: "Available" },
                    { stand: "Stand C", type: "Non-Covered (3-14 years)", price: "€26.00", status: "Available" },
                    { stand: "Stand D", type: "Non-Covered (15+)", price: "€41.00", status: "Available" },
                    { stand: "Stand D", type: "Non-Covered (3-14 years)", price: "€26.00", status: "Available" },
                    { stand: "PRM & Attendant", type: "Day Ticket (1 Attendant Included)", price: "€50.00", status: "Available" }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "rgba(0,0,0,0.02)" : "transparent" }}>
                      <td style={{ padding: "0.8rem 0.6rem", fontWeight: "700", color: "var(--text-main)" }}>{row.stand}</td>
                      <td style={{ padding: "0.8rem 0.6rem", color: "var(--text-muted)", fontWeight: "500" }}>{row.type}</td>
                      <td style={{ padding: "0.8rem 0.6rem", color: "#c00030", fontWeight: "800" }}>{row.price}</td>
                      <td style={{ padding: "0.8rem 0.6rem", textAlign: "right" }}>
                        <span style={{
                          display: "inline-block",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontSize: "0.8rem",
                          fontWeight: "800",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          background: row.status === "Available" ? "rgba(34,197,94,0.1)" : row.status === "Coming Soon" ? "rgba(14,165,233,0.1)" : "rgba(239,68,68,0.1)",
                          color: row.status === "Available" ? "#16a34a" : row.status === "Coming Soon" ? "#0284c7" : "#dc2626",
                          border: row.status === "Available" ? "1px solid rgba(34,197,94,0.2)" : row.status === "Coming Soon" ? "1px solid rgba(14,165,233,0.2)" : "1px solid rgba(239,68,68,0.2)"
                        }}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Finals Table */}
          <div style={{ background: "var(--bg-secondary)", borderRadius: "16px", padding: "1.5rem", border: "1px solid var(--border-color)", marginBottom: "2rem", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
            <h4 style={{ color: "var(--text-main)", margin: "0 0 1.2rem 0", fontSize: "1.1rem", fontWeight: "800", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              🏆 Sunday, August 30th — Grand Final (Belfius Arena, Wavre)
            </h4>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border-color)", textAlign: "left" }}>
                    <th style={{ padding: "0.8rem 0.6rem", color: "var(--text-main)", fontWeight: "800" }}>Stand & Category</th>
                    <th style={{ padding: "0.8rem 0.6rem", color: "var(--text-main)", fontWeight: "800" }}>Type</th>
                    <th style={{ padding: "0.8rem 0.6rem", color: "var(--text-main)", fontWeight: "800" }}>Price</th>
                    <th style={{ padding: "0.8rem 0.6rem", textAlign: "right", color: "var(--text-main)", fontWeight: "800" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { stand: "Stand A (A1)", type: "Covered (All Ages)", price: "€70.00", status: "Sold Out" },
                    { stand: "Stand A (A1)", type: "Non-Covered (All Ages)", price: "€62.00", status: "Sold Out" },
                    { stand: "Stand B (B1)", type: "Covered (All Ages)", price: "€70.00", status: "Sold Out" },
                    { stand: "Stand B (B1)", type: "Non-Covered (All Ages)", price: "€59.00", status: "Sold Out" },
                    { stand: "Stand C", type: "Covered (15+)", price: "€55.00", status: "Sold Out" },
                    { stand: "Stand C", type: "Covered (3-14 years)", price: "€30.00", status: "Sold Out" },
                    { stand: "Stand D", type: "Covered (15+)", price: "€55.00", status: "Sold Out" },
                    { stand: "Stand D", type: "Covered (3-14 years)", price: "€30.00", status: "Sold Out" },
                    { stand: "PRM & Attendant", type: "Day Ticket (1 Attendant Included)", price: "€59.00", status: "Sold Out" }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "rgba(0,0,0,0.02)" : "transparent" }}>
                      <td style={{ padding: "0.8rem 0.6rem", fontWeight: "700", color: "var(--text-main)" }}>{row.stand}</td>
                      <td style={{ padding: "0.8rem 0.6rem", color: "var(--text-muted)", fontWeight: "500" }}>{row.type}</td>
                      <td style={{ padding: "0.8rem 0.6rem", color: "#c00030", fontWeight: "800" }}>{row.price}</td>
                      <td style={{ padding: "0.8rem 0.6rem", textAlign: "right" }}>
                        <span style={{
                          display: "inline-block",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontSize: "0.8rem",
                          fontWeight: "800",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          background: row.status === "Available" ? "rgba(34,197,94,0.1)" : row.status === "Coming Soon" ? "rgba(14,165,233,0.1)" : "rgba(239,68,68,0.1)",
                          color: row.status === "Available" ? "#16a34a" : row.status === "Coming Soon" ? "#0284c7" : "#dc2626",
                          border: row.status === "Available" ? "1px solid rgba(34,197,94,0.2)" : row.status === "Coming Soon" ? "1px solid rgba(14,165,233,0.2)" : "1px solid rgba(239,68,68,0.2)"
                        }}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: "1rem", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", padding: "0.8rem 1rem", fontSize: "0.85rem", color: "#ef4444", lineHeight: "1.6" }}>
              💡 <strong>Note on Child Admission & PMR (Grand Final):</strong> Children up to 3 years old have free entry when accompanied by a ticket-holding adult (must sit on lap). Children from 3 to 14 years old require a ticket but get a reduced rate in Stand C & D. PRM visitors get accessible seating in tribune B with 1 attendant free ticket included.
            </div>
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
          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
            <a 
              href="https://agenda.hockeyworldcup2026.be/3ee1be99906644478d600af215f44abd" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button primary-cta"
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                color: "white",
                fontWeight: "800",
                padding: "0.8rem 2rem",
                borderRadius: "9999px",
                textDecoration: "none",
                fontSize: "1rem",
                boxShadow: "0 4px 15px rgba(2, 132, 199, 0.3)",
                transition: "all 0.2s ease",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              🎟️ Proceed to Official Booking Site
            </a>
          </div>
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
                <li><strong>Covered Seating (Dark Red):</strong> Located at the back/upper levels of Stand A (sectors A1-A5), Stand B (sectors B1-B5), Stand C, and Stand D.</li>
                <li><strong>Uncovered Seating (Pink):</strong> Located at the front/lower levels of Stand A (except sector A3), Stand B (sectors B1-B5), Stand C, and Stand D.</li>
                <li><strong>Accessible Seating (PMR / WCA):</strong> Dedicated wheelchair spaces located directly in front of Stand B (sectors B1/B2 and B4/B5) with accompanying seats.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Wavre Parking Guide */}
        <section id="parking-guide" style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            6. Belfius Hockey Arena (Wavre) Matchday Parking Guide
          </h2>
          <div style={{ background: "rgba(239,68,68,0.03)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: "16px", padding: "1.5rem", marginBottom: "2rem" }}>
            <h3 style={{ color: "white", fontSize: "1.1rem", fontWeight: "700", marginTop: 0 }}>⚠️ Critical Traffic Rule: No Stadium Parking</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0 }}>
              There is <strong>no parking space available around the Belfius Hockey Arena</strong> in Wavre. The entire zone surrounding the stadium is completely traffic-free during matches and is restricted strictly to residents and service/emergency vehicles.
            </p>
          </div>

          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Spectators driving to the matches <strong>must book a parking ticket in advance</strong>. Parking is available by reservation only. All public car parks charge a flat rate of <strong>€15.00 per vehicle</strong> and include a <strong>free shuttle service</strong> to and from the stadium gates.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
            {/* Opening Day, Aug 21-24, Aug 27 & Finals Parking */}
            <div style={{ background: "var(--bg-secondary)", borderRadius: "12px", padding: "1.2rem", border: "1px solid var(--border-color)" }}>
              <h4 style={{ color: "var(--text-main)", margin: "0 0 0.8rem 0", fontSize: "1.05rem", fontWeight: "700" }}>
                🚗 Sat Aug 15th, Aug 21st–24th, Thu Aug 27th & Sun Aug 30th
              </h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: "0 0 1rem 0" }}>Two public car parks are open for reservation:</p>
              <ul style={{ color: "var(--text-muted)", fontSize: "0.9rem", paddingLeft: "1.2rem", margin: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}><strong>Parking HOCKEY NORD:</strong> Rue de Wavre, 1300 Wavre (€15.00)</li>
                <li><strong>Parking HOCKEY SUD:</strong> Boulevard de Wallonie, 1348 Louvain-la-Neuve (€15.00)</li>
              </ul>
            </div>

            {/* Semi-Finals Parking */}
            <div style={{ background: "var(--bg-secondary)", borderRadius: "12px", padding: "1.2rem", border: "1px solid var(--border-color)" }}>
              <h4 style={{ color: "var(--text-main)", margin: "0 0 0.8rem 0", fontSize: "1.05rem", fontWeight: "700" }}>
                🚗 Friday August 28th (Semi-Finals)
              </h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: "0 0 1rem 0" }}>Only one public car park is open for reservation:</p>
              <ul style={{ color: "var(--text-muted)", fontSize: "0.9rem", paddingLeft: "1.2rem", margin: 0 }}>
                <li><strong>Parking HOCKEY NORD:</strong> Rue de Wavre, 1300 Wavre (€15.00)</li>
              </ul>
              <div style={{ marginTop: "1rem", background: "rgba(2,132,199,0.05)", padding: "0.5rem", borderRadius: "6px", fontSize: "0.8rem", color: "#38bdf8" }}>
                💡 <em>Note: Parking Hockey Sud is NOT active on August 28th.</em>
              </div>
            </div>

            {/* PRM Parking */}
            <div style={{ background: "var(--bg-secondary)", borderRadius: "12px", padding: "1.2rem", border: "1px solid var(--border-color)" }}>
              <h4 style={{ color: "white", margin: "0 0 0.8rem 0", fontSize: "1.05rem", fontWeight: "700" }}>
                ♿ Reduced Mobility (PRM / PMR)
              </h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: "0 0 1rem 0" }}>Special accessible parking is available at the southern car park:</p>
              <ul style={{ color: "var(--text-muted)", fontSize: "0.9rem", paddingLeft: "1.2rem", margin: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}><strong>Parking HOCKEY SUD – PMR:</strong> Boulevard de Wallonie, 1348 Louvain-la-Neuve (€15.00)</li>
                <li>Specialized transport organized by <strong>Mobilité BW</strong> (dedicated shuttle).</li>
              </ul>
              <div style={{ marginTop: "0.8rem", color: "#fca5a5", fontSize: "0.8rem", fontWeight: "600" }}>
                ⚠️ Deadlines: PMR tickets must be booked at least 48 hours before the day of the event.
              </div>
            </div>
          </div>

          <div style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "1.2rem" }}>
            <h4 style={{ color: "white", margin: "0 0 0.5rem 0", fontSize: "1rem", fontWeight: "700" }}>📍 Navigation and Shuttle Operations:</h4>
            <ol style={{ color: "var(--text-muted)", paddingLeft: "1.2rem", margin: 0, fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Use <strong>Waze or Google Maps</strong> for routing and strictly follow on-site road signs and steward instructions.</li>
              <li style={{ marginBottom: "0.5rem" }}>Board the <strong>free shuttle service</strong> running continuously between the public car park and the stadium entrance (return trip included upon presenting your parking ticket).</li>
              <li>If you are not coming by car, detailed public transport alternatives (train, regional buses) are available at the Wavre city transit pages.</li>
            </ol>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section id="faqs" style={{ marginBottom: "3rem" }}>
          <div className="section-title-wrap">
            <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
              7. Frequently Asked Questions (FAQs)
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
