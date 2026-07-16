import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Japan Hockey World Cup 2026 Schedule: Time & Matches",
  description: "Japan Hockey World Cup 2026 Schedule: Pool A/B fixtures vs Netherlands (Aug 15), Argentina (Aug 17) & New Zealand (Aug 19). JST timings, squad & streaming.",
  alternates: {
    canonical: `${BASE}/hockey-world-cup-2026-schedule-japan`,
  },
  openGraph: {
    title: "Japan Hockey World Cup 2026 Schedule: Time & Matches",
    description: "Japan Hockey World Cup 2026 Schedule: Pool A/B fixtures vs Netherlands (Aug 15), Argentina (Aug 17) & New Zealand (Aug 19). JST timings, squad & streaming.",
    url: `${BASE}/hockey-world-cup-2026-schedule-japan`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Schedule Japan: Time Table & Fixtures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan Hockey World Cup 2026 Schedule: Time & Matches",
    description: "Japan Hockey World Cup 2026 Schedule: Pool A/B fixtures vs Netherlands (Aug 15), Argentina (Aug 17) & New Zealand (Aug 19). JST timings, squad & streaming.",
    images: ["/og-image.jpg"],
  },
};

export default function JapanHockeyPage() {
  const faqItems = [
    {
      question: "When is Japan's first match in the Hockey World Cup 2026?",
      answer:
        "The Japanese Men's team will play their first Pool A match against Argentina on August 16, 2026, at the Wagener Stadium. The Japanese Women's team will play their opening match against Australia on August 15, 2026.",
    },
    {
      question: "Which pools are the Japanese hockey teams in for the 2026 World Cup?",
      answer:
        "Both the Japanese Men's and Women's national teams are placed in Pool A. The men face Netherlands, Argentina, and New Zealand. The women face Netherlands, Australia, and Chile.",
    },
    {
      question: "Where will Japan play their group stage matches?",
      answer:
        "All of Japan's group stage matches for both the men's and women's tournaments will be held at the Wagener Hockey Stadium in Amstelveen, Netherlands.",
    },
    {
      question: "How can I watch Japan's matches live in the World Cup?",
      answer:
        "Broadcast rights are usually handled by FIH Watch.Hockey app globally. In Japan, check local sports networks for specific FIH Hockey World Cup 2026 broadcasting schedules as the tournament approaches.",
    },
    {
      question: "What are Japan's chances of qualifying for the knockout stage?",
      answer:
        "Placed in a highly competitive Pool A alongside heavyweights like the Netherlands and Australia (for women) or Argentina (for men), Japan will need a strong showing against lower or mid-ranked teams to secure a playoff spot for the Quarter-Finals.",
    }
  ];

  const menMatches = [
    { date: "August 16, 2026", time: "16:00 CET", opponent: "🇦🇷 Argentina", pool: "Pool A", venue: "Wagener Stadium", type: "Pool Stage" },
    { date: "August 18, 2026", time: "14:00 CET", opponent: "🇳🇿 New Zealand", pool: "Pool A", venue: "Wagener Stadium", type: "Pool Stage" },
    { date: "August 20, 2026", time: "15:00 CET", opponent: "🇳🇱 Netherlands", pool: "Pool A", venue: "Wagener Stadium", type: "Pool Stage" },
    { date: "Aug 22-24, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
  ];

  const womenMatches = [
    { date: "August 15, 2026", time: "07:00 CET", opponent: "🇦🇺 Australia", pool: "Pool A", venue: "Wagener Stadium", type: "Pool Stage" },
    { date: "August 17, 2026", time: "06:30 CET", opponent: "🇨🇱 Chile", pool: "Pool A", venue: "Wagener Stadium", type: "Pool Stage" },
    { date: "August 19, 2026", time: "15:00 CET", opponent: "🇳🇱 Netherlands", pool: "Pool A", venue: "Wagener Stadium", type: "Pool Stage" },
    { date: "Aug 21-23, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
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
                  { "@type": "ListItem", "position": 2, "name": "Teams", "item": "https://hockeyworldcup2026schedule.com/teams" },
                  { "@type": "ListItem", "position": 3, "name": "Japan Match Schedule", "item": "https://hockeyworldcup2026schedule.com/hockey-world-cup-2026-schedule-japan" }
                ]
              },
              {
                "@type": "SportsTeam",
                "name": "Japan National Field Hockey Team",
                "sport": "Field Hockey",
                "memberOf": {
                  "@type": "SportsOrganization",
                  "name": "International Hockey Federation",
                  "url": "https://fih.hockey"
                }
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
          <p className="hero-subtitle">🏑 Pool A — Official Schedule</p>
          <h1 className="hero-title">Hockey World Cup 2026 Schedule Japan</h1>
          <p className="hero-description">
            Complete Japan men's & women's fixture guide, full time table, CET match timings, results, and tournament analysis.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✔️ Verified: <strong>Marc Devos (Belgian Hockey Analyst)</strong></div>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#fixtures" className="cta-button primary-cta">View Time Table & Results</a>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.2rem", marginBottom: "4rem" }}>
          {[
            { icon: "🌍", label: "Pool", value: "Pool A" },
            { icon: "🏟️", label: "Venue", value: "Wagener Stadium, Amstelveen" },
            { icon: "📅", label: "Pool Stage Dates", value: "Aug 15–20, 2026" },
            { icon: "⚔️", label: "Men's Rivals", value: "NED, ARG, NZL" },
            { icon: "⚔️", label: "Women's Rivals", value: "NED, AUS, CHI" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                borderRadius: "16px",
                padding: "1.4rem 1rem",
                textAlign: "center",
                boxShadow: "0 2px 12px rgba(15,23,42,0.04)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.4rem" }}>{stat.icon}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.3rem" }}>{stat.label}</div>
              <div style={{ fontSize: "1rem", fontWeight: "800", color: "var(--text-main)" }}>{stat.value}</div>
            </div>
          ))}
        </section>

        <section id="fixtures" style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇯🇵 Japan Men's Schedule — Pool A
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#c00030", color: "white" }}>
                  {["Date", "Time (CET)", "Opponent", "Stage", "Venue"].map((h) => (
                    <th key={h} style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "700" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {menMatches.map((m, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "0.9rem 1rem", fontWeight: "700", color: "var(--text-main)", whiteSpace: "nowrap" }}>{m.date}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "#c00030", fontWeight: "600" }}>{m.time}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>{m.opponent}</td>
                    <td style={{ padding: "0.9rem 1rem" }}>
                      <span style={{ background: m.type === "Pool Stage" ? "rgba(192,0,48,0.1)" : "rgba(2,132,199,0.1)", color: m.type === "Pool Stage" ? "#c00030" : "#0284c7", borderRadius: "8px", padding: "0.2rem 0.6rem", fontSize: "0.8rem", fontWeight: "600" }}>{m.type}</span>
                    </td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>{m.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #f43f5e", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇯🇵 Japan Women's Schedule — Pool A
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#f43f5e", color: "white" }}>
                  {["Date", "Time (CET)", "Opponent", "Stage", "Venue"].map((h) => (
                    <th key={h} style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "700" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {womenMatches.map((m, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "0.9rem 1rem", fontWeight: "700", color: "var(--text-main)", whiteSpace: "nowrap" }}>{m.date}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "#f43f5e", fontWeight: "600" }}>{m.time}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>{m.opponent}</td>
                    <td style={{ padding: "0.9rem 1rem" }}>
                      <span style={{ background: m.type === "Pool Stage" ? "rgba(244,63,94,0.1)" : "rgba(2,132,199,0.1)", color: m.type === "Pool Stage" ? "#f43f5e" : "#0284c7", borderRadius: "8px", padding: "0.2rem 0.6rem", fontSize: "0.8rem", fontWeight: "600" }}>{m.type}</span>
                    </td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>{m.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — Japan at HWC 2026
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", marginBottom: "1.2rem" }}>📌 Related Pages</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              { href: "/schedule", label: "📅 Full Tournament Schedule" },
              { href: "/pool-a", label: "🟡 Pool A Standings" },
              { href: "/venues/wagener-stadium-guide", label: "🏟️ Wagener Stadium Guide" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "var(--bg-tertiary)", color: "var(--text-main)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "0.5rem 1rem", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none", transition: "all 0.2s" }}>
                {link.label}
              </a>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
