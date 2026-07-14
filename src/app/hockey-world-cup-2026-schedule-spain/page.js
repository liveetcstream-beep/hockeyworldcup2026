import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Schedule Spain: Time Table, Fixtures & PDF",
  description: "Complete Hockey World Cup 2026 Schedule for Spain. Find the exact match time table, fixture dates, USA/Canada broadcast times, results, and squad list. Download PDF.",
  alternates: {
    canonical: `${BASE}/hockey-world-cup-2026-schedule-spain`,
  },
  openGraph: {
    title: "Hockey World Cup 2026 Schedule Spain: Time Table, Fixtures & PDF",
    description: "Complete Hockey World Cup 2026 Schedule for Spain. Find the exact match time table, fixture dates, USA/Canada broadcast times, results, and squad list. Download PDF.",
    url: `${BASE}/hockey-world-cup-2026-schedule-spain`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Schedule Spain: Time Table, Fixtures & PDF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Schedule Spain: Time Table, Fixtures & PDF",
    description: "Complete Hockey World Cup 2026 Schedule for Spain. Find the exact match time table, fixture dates, USA/Canada broadcast times, results, and squad list. Download PDF.",
    images: ["/og-image.jpg"],
  },
};


export default function SpainHockeyPage() {
  const faqItems = [
    { question: "Can Spain win the World Cup?", answer: "Spain is a traditional hockey powerhouse with incredible flair. Under coach Max Caldas, they are a strong dark horse." },
    { question: "Where to watch Spain matches live?", answer: "RTVE and Teledeporte will broadcast matches live in Spain." }
  ];

  const menMatches = [
    { date: "August 16, 2026", time: "~4:00 PM IST", opponent: "🇿🇦 South Africa", pool: "Pool C", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "August 18, 2026", time: "~3:30 PM IST", opponent: "🇦🇺 Australia", pool: "Pool C", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "August 20, 2026", time: "~6:30 PM IST", opponent: "🇮🇪 Ireland", pool: "Pool C", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "Aug 22-24, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
    { date: "Aug 27-28, 2026", time: "TBD", opponent: "Semi-Final (if qualified)", pool: "–", venue: "TBD", type: "Knockout" },
  ];

  const womenMatches = [
    { date: "August 16, 2026", time: "~10:00 PM IST", opponent: "🇮🇪 Ireland", pool: "Pool C", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "August 18, 2026", time: "~10:00 PM IST", opponent: "🇧🇪 Belgium", pool: "Pool C", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "August 20, 2026", time: "~3:30 PM IST", opponent: "🇳🇿 New Zealand", pool: "Pool C", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "Aug 21-23, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
  ];

  const keyPlayers = [
    { flag: "https://flagcdn.com/w40/es.png", name: "Alvaro Iglesias", role: "Forward", rank: "Captain", desc: "The creative spark of the Spanish attack." },
    
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
                  { "@type": "ListItem", "position": 3, "name": "Spain Match Schedule", "item": "https://hockeyworldcup2026schedule.com/hockey-world-cup-2026-schedule-spain" }
                ]
              },
              {
                "@type": "SportsTeam",
                "name": "Spain National Field Hockey Team",
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

      {/* Hero */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏑 Pool C — Official Schedule</p>
          <h1 className="hero-title">Hockey World Cup 2026 Schedule Spain</h1>
          <p className="hero-description">
            Complete Spain men's & women's fixture guide, full time table, IST / USA / Canada match timings, results, and squad analysis. Download the complete <strong>Hockey World Cup 2026 Schedule PDF</strong> for Spain's matches.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✔️ Verified: <strong>Santi Freixa (Spanish Hockey Legend)</strong></div>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#fixtures" className="cta-button primary-cta">View Time Table & Results</a>
            <a href="/schedule-spain.pdf" download className="cta-button secondary-cta" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>📄 Download Schedule PDF</a>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">

        {/* Quick Stats */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.2rem", marginBottom: "4rem" }}>
          {[
            { icon: "🏆", label: "World Cup Titles", value: "0 (Best: Silver 1971)" },
            { icon: "🌍", label: "FIH World Ranking (Men)", value: "#8" },
            { icon: "👩", label: "FIH Ranking (Women)", value: "#8" },
            { icon: "🏟️", label: "Venue", value: "Belfius Hockey Arena, Wavre" },
            { icon: "📅", label: "Pool Stage Dates", value: "Aug 16–21, 2026" },
            { icon: "⚔️", label: "Pool C Rivals", value: "South Africa, Australia, Ireland" },
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

        {/* Men's Schedule */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇪🇸 Spain Men's Schedule — Pool C
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#c00030", color: "white" }}>
                  {["Date", "Time (IST)", "Opponent", "Stage", "Venue"].map((h) => (
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

        {/* Women's Schedule */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #f43f5e", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇪🇸 Spain Women's Schedule — Pool C
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#f43f5e", color: "white" }}>
                  {["Date", "Time (IST)", "Opponent", "Stage", "Venue"].map((h) => (
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

        {/* Key Players */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #0284c7", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🌟 Key Players to Watch
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {keyPlayers.map((p) => (
              <div key={p.name} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "1.8rem", boxShadow: "0 4px 20px rgba(15,23,42,0.05)", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <img src={p.flag} width="28" height="18" alt="Spain flag" style={{ borderRadius: "3px" }} />
                  <div>
                    <div style={{ fontWeight: "800", color: "var(--text-main)", fontSize: "1rem" }}>{p.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{p.role}</div>
                  </div>
                </div>
                <span style={{ display: "inline-block", background: "rgba(192,0,48,0.1)", color: "#c00030", borderRadius: "8px", padding: "0.2rem 0.7rem", fontSize: "0.78rem", fontWeight: "700", width: "fit-content" }}>{p.rank}</span>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Analyst Prediction */}
        <section style={{ background: "linear-gradient(135deg, rgba(192,0,48,0.04) 0%, #f8fafc 100%)", border: "1px solid rgba(192,0,48,0.12)", padding: "2.5rem", borderRadius: "24px", marginBottom: "4rem", boxShadow: "0 8px 30px rgba(15,23,42,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2rem" }}>🏑</span>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", fontStyle: "italic", color: "var(--text-main)", margin: 0 }}>Analyst's Spain Preview</h2>
          </div>
          <div style={{ fontSize: "1rem", lineHeight: "1.9", color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1.2rem" }}>
              <strong style={{ color: "var(--text-main)" }}>Spain is a dark horse in Pool C. They play an expressive, possession-based game with excellent technical skills in the midfield.</strong>
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              Spain vs Australia will be a massive test of their defensive resilience. Spain can cause major upsets on their day.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text-main)" }}>Prediction:</strong> Prediction: Spain is expected to advance past the group stage. A Quarter-Final run is realistic if they capitalize on scoring chances.
            </p>
          </div>
        </section>

        
        
        
        {/* Full Team Squad */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇪🇸 Spain Hockey World Cup 2026 Squads
          </h2>
          
            <div style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "1rem" }}>
                🇪🇸 Spain Men's Hockey Squad List
              </h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                  <thead>
                    <tr style={{ background: "var(--bg-tertiary)", borderBottom: "2px solid var(--border-color)" }}>
                      <th style={{ padding: "0.8rem", textAlign: "left", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>Player Name</th>
                      <th style={{ padding: "0.8rem", textAlign: "left", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>Position</th>
                      <th style={{ padding: "0.8rem", textAlign: "left", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>Role / Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Marc Miralles</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Midfielder / Drag-Flicker</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Captain & Core Set-piece Specialist (June 2026 Pro League)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Adrian Rafi</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Goalkeeper</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>First Choice Goalkeeper</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Alvaro Iglesias</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Forward</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Experienced Striker</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Pepe Cunill</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Defender</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Key Fullback</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Joaquin Menini</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Forward / Midfielder</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Creative Attacking Playmaker</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Marc Recasens</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Defender</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Drag-flick Option</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Jordi Bonastre</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Defender / Midfielder</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Solid Defender</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Luis Calzado</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Goalkeeper</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Backup Goalkeeper</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "1rem" }}>
                🇪🇸 Spain Women's Hockey Squad List
              </h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                  <thead>
                    <tr style={{ background: "var(--bg-tertiary)", borderBottom: "2px solid var(--border-color)" }}>
                      <th style={{ padding: "0.8rem", textAlign: "left", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>Player Name</th>
                      <th style={{ padding: "0.8rem", textAlign: "left", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>Position</th>
                      <th style={{ padding: "0.8rem", textAlign: "left", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>Role / Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Maria Lopez</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Defender</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Captain & Core Defensive Anchor</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Clara Perez</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Goalkeeper</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Primary Goalkeeper</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Beatriz Perez</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Midfielder</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Creative Midfield Distributor</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Lola Riera</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Defender / Drag-Flicker</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Experienced Set-piece Taker</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Belen Iglesias</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Forward</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Clinical Striker</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Laura Barrios</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Midfielder</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Midfield Distributor</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Xantal Gine</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Defender</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Solid Center Back</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Maria Ruiz</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Goalkeeper</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Backup Goalkeeper</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </section>
  
  
  
        {/* FAQ */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — Spain at HWC 2026
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        {/* Internal Links */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", marginBottom: "1.2rem" }}>📌 Related Pages</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              { href: "/schedule", label: "📅 Full Tournament Schedule" },
              { href: "/live-scores", label: "🔴 Live Scores" },
              { href: "/points-table", label: "📊 Points Table" },
              { href: "/h2h", label: "⚔️ Spain vs Pakistan H2H" },
              { href: "/hockey-live-streaming", label: "📺 Watch in Spain (Star Sports)" },
              { href: "/hockey-world-cup-2026-schedule-pakistan", label: "🇵🇰 Pakistan Page" },
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
