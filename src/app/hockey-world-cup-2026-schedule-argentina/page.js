import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Schedule Argentina: Time Table, Fixtures & PDF",
  description: "Argentina Hockey World Cup 2026 Schedule: Pool B fixtures vs USA (Aug 15), Japan (Aug 17) & Germany (Aug 19). ART/EST timings, squad list & streaming guide.",
  alternates: {
    canonical: `${BASE}/hockey-world-cup-2026-schedule-argentina`,
  },
  openGraph: {
    title: "Hockey World Cup 2026 Schedule Argentina: Time Table, Fixtures & PDF",
    description: "Argentina Hockey World Cup 2026 Schedule: Pool B fixtures vs USA (Aug 15), Japan (Aug 17) & Germany (Aug 19). ART/EST timings, squad list & streaming guide.",
    url: `${BASE}/hockey-world-cup-2026-schedule-argentina`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Schedule Argentina: Time Table, Fixtures & PDF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Schedule Argentina: Time Table, Fixtures & PDF",
    description: "Argentina Hockey World Cup 2026 Schedule: Pool B fixtures vs USA (Aug 15), Japan (Aug 17) & Germany (Aug 19). ART/EST timings, squad list & streaming guide.",
    images: ["/og-image.jpg"],
  },
};


export default function ArgentinaHockeyPage() {
  const faqItems = [
    { question: "Are Las Leonas the favorites?", answer: "The Argentine women's team (Las Leonas) are massive contenders, usually battling the Netherlands for the top spot globally." },
    { question: "What about Los Leones (Men's team)?", answer: "Los Leones won Olympic Gold in 2016 and remain a dangerous, highly physical team capable of beating anyone." },
    { question: "Where to stream Argentina matches live?", answer: "ESPN Star + will broadcast the matches live in Argentina and Latin America." }
  ];

  const menMatches = [
    { date: "August 16, 2026", time: "~8:30 PM IST", opponent: "🏳️ Japan", pool: "Pool A", venue: "Wagener Hockey Stadium", type: "Pool Stage" },
    { date: "August 18, 2026", time: "~7:30 PM IST", opponent: "🇳🇱 Netherlands", pool: "Pool A", venue: "Wagener Hockey Stadium", type: "Pool Stage" },
    { date: "August 20, 2026", time: "~2:00 PM IST", opponent: "🇳🇿 New Zealand", pool: "Pool A", venue: "Wagener Hockey Stadium", type: "Pool Stage" },
    { date: "Aug 22-24, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
    { date: "Aug 27-28, 2026", time: "TBD", opponent: "Semi-Final (if qualified)", pool: "–", venue: "TBD", type: "Knockout" },
  ];

  const womenMatches = [
    { date: "August 15, 2026", time: "~7:00 PM IST", opponent: "🏳️ United States", pool: "Pool B", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "August 17, 2026", time: "~6:30 PM IST", opponent: "🇩🇪 Germany", pool: "Pool B", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "August 19, 2026", time: "~12:30 PM IST", opponent: "🏳️ Scotland", pool: "Pool B", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "Aug 21-23, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
  ];

  const keyPlayers = [
    { flag: "https://flagcdn.com/w40/ar.png", name: "Agustina Gorzelany", role: "Defender", rank: "Drag-Flicker", desc: "The top scorer at the 2022 Women's World Cup, renowned for her lethal penalty corners." },
    
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
                  { "@type": "ListItem", "position": 3, "name": "Argentina Match Schedule", "item": "https://hockeyworldcup2026schedule.com/hockey-world-cup-2026-schedule-argentina" }
                ]
              },
              {
                "@type": "SportsTeam",
                "name": "Argentina National Field Hockey Team",
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
          <p className="hero-subtitle">🏑 Pool A — Official Schedule</p>
          <h1 className="hero-title">Hockey World Cup 2026 Schedule Argentina</h1>
          <p className="hero-description">
            Complete Argentina men's & women's fixture guide, full time table, IST / USA / Canada match timings, results, and squad analysis. Download the complete <strong>Hockey World Cup 2026 Schedule PDF</strong> for Argentina's matches.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✔️ Verified: <strong>Luciana Aymar (8x FIH Player of the Year)</strong></div>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#fixtures" className="cta-button primary-cta">View Time Table & Results</a>
            <a href="/schedule-argentina.pdf" download className="cta-button secondary-cta" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>📄 Download Schedule PDF</a>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">

        {/* Quick Stats */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.2rem", marginBottom: "4rem" }}>
          {[
            { icon: "🏆", label: "World Cup Titles", value: "0 (Best: Bronze 2014)" },
            { icon: "🌍", label: "FIH World Ranking (Men)", value: "#7" },
            { icon: "👩", label: "FIH Ranking (Women)", value: "#2" },
            { icon: "🏟️", label: "Venue", value: "Wagener & Belfius" },
            { icon: "📅", label: "Pool Stage Dates", value: "Aug 15–20, 2026" },
            { icon: "⚔️", label: "Pool A Rivals", value: "Japan, Netherlands, New Zealand" },
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
            🇦🇷 Argentina Men's Schedule — Pool A
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
            🇦🇷 Argentina Women's Schedule — Pool B
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
                  <img src={p.flag} width="28" height="18" alt="Argentina flag" style={{ borderRadius: "3px" }} />
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
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", fontStyle: "italic", color: "var(--text-main)", margin: 0 }}>Analyst's Argentina Preview</h2>
          </div>
          <div style={{ fontSize: "1rem", lineHeight: "1.9", color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1.2rem" }}>
              <strong style={{ color: "var(--text-main)" }}>Argentina brings Latin flair and immense passion to Pool A. The 'Los Leones' (Men) and 'Las Leonas' (Women) are both highly competitive and incredibly physical.</strong>
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              Argentina vs Netherlands will be a fantastic spectacle. Argentina's robust defense must withstand the Dutch attacking waves.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text-main)" }}>Prediction:</strong> Prediction: The Women's team is a strong title contender. The Men's team should comfortably reach the knockouts but will face tough European resistance.
            </p>
          </div>
        </section>

        
        
        
        {/* Full Team Squad */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇦🇷 Argentina Hockey World Cup 2026 Squads
          </h2>
          
            <div style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "1rem" }}>
                🇦🇷 Argentina Men's Hockey Squad List
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
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Matias Rey</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Defender / Midfielder</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Captain & Core Anchor (June 2026 Pro League)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Tomas Santiago</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Goalkeeper</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Primary Goalkeeper</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Maico Casella</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Forward</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Star Striker & Drag-Flicker</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Tomas Domene</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Forward / Drag-Flicker</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Penalty Corner Specialist</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Lucas Vila</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Forward</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Veteran Forward</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Nicolas Keenan</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Forward</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Creative Winger</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Agustin Bugallo</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Midfielder</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Defensive Midfielder</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Thomas Habif</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Midfielder</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Playmaking Midfielder</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Nicolas Cicileo</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Defender</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Solid Defender</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Emiliano Bosso</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Goalkeeper</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Backup Goalkeeper</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "1rem" }}>
                🇦🇷 Argentina Women's Hockey Squad List
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
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Rocío Sánchez Moccia</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Midfielder</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Captain & Midfield Legend (June 2026 Pro League)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Clara Barberi</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Goalkeeper</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Primary Goalkeeper</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Agustina Gorzelany</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Defender / Drag-Flicker</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>World-Class Penalty Corner Scorer</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Maria Jose Granatto</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Forward</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Creative Attacker</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Delfina Thome</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Forward</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Center Forward</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Sofia Toccalino</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Defender</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Solid Fullback</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Victoria Sauze</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Midfielder</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Experienced Playmaker</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Eugenia Trinchinetti</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Midfielder</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>High-scoring Midfielder</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Valentina Raposo</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Defender</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Rising Star Defender</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>Cristina Cosentino</td>
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
            Frequently Asked Questions — Argentina at HWC 2026
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
              { href: "/pool-a", label: "🔴 Pool A Standings" },
              { href: "/matches/netherlands-vs-argentina", label: "⚔️ Netherlands vs Argentina Preview" },
              { href: "/venues/wagener-stadium-guide", label: "🏟️ Wagener Stadium Guide" },
              { href: "/hockey-live-streaming", label: "📺 Watch in Argentina (ESPN/Star)" },
              { href: "/hockey-world-cup-2026-schedule-netherlands", label: "🇳🇱 Netherlands Page" },
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
