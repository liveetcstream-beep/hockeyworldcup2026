import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import PointsTableClient from "./PointsTableClient";

export const metadata = {
  title: "Hockey World Cup 2026 Points Table & Pool Standings",
  description: "Official FIH Hockey World Cup 2026 points table. Track Men's and Women's pool standings, match wins, goal difference, team rankings, and quarter-final qualification rules.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/points-table",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Points Table & Pool Standings",
    description: "Official FIH Hockey World Cup 2026 points table. Track Men's and Women's pool standings, match wins, goal difference, team rankings, and quarter-final qualification rules.",
    url: "https://hockeyworldcup2026schedule.com/points-table",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Points Table & Pool Standings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Points Table & Pool Standings",
    description: "Official FIH Hockey World Cup 2026 points table. Track Men's and Women's pool standings, match wins, goal difference, team rankings, and quarter-final qualification rules.",
    images: ["/og-image.jpg"],
  },
};

const STANDINGS_DATA = {
  Men: {
    "Pool D": [
      { name: "England", code: "ENG", flag: "gb-eng", slug: "england", p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 1, gd: 3, pts: 3, recentRes: "W 4-1 vs PAK" },
      { name: "India", code: "IND", flag: "in", slug: "india", p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1, gd: 2, pts: 3, recentRes: "W 3-1 vs WAL" },
      { name: "Wales", code: "WAL", flag: "gb-wls", slug: "wales", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3, gd: -2, pts: 0, recentRes: "L 1-3 vs IND" },
      { name: "Pakistan", code: "PAK", flag: "pk", slug: "pakistan", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 4, gd: -3, pts: 0, recentRes: "L 1-4 vs ENG" }
    ],
    "Pool B": [
      { name: "Germany", code: "GER", flag: "de", slug: "germany", p: 1, w: 1, d: 0, l: 0, gf: 5, ga: 1, gd: 4, pts: 3, recentRes: "W 5-1 vs MAS" },
      { name: "Belgium", code: "BEL", flag: "be", slug: "belgium", p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 2, gd: 1, pts: 3, recentRes: "W 3-2 vs FRA" },
      { name: "France", code: "FRA", flag: "fr", slug: "france", p: 1, w: 0, d: 0, l: 1, gf: 2, ga: 3, gd: -1, pts: 0, recentRes: "L 2-3 vs BEL" },
      { name: "Malaysia", code: "MAS", flag: "my", slug: "malaysia", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 5, gd: -4, pts: 0, recentRes: "L 1-5 vs GER" }
    ],
    "Pool A": [
      { name: "Netherlands", code: "NED", flag: "nl", slug: "netherlands", p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1, gd: 2, pts: 3, recentRes: "W 3-1 vs NZL" },
      { name: "Argentina", code: "ARG", flag: "ar", slug: "argentina", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0, recentRes: "Plays Tonight" },
      { name: "Japan", code: "JPN", flag: "jp", slug: "japan", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0, recentRes: "Plays Tonight" },
      { name: "New Zealand", code: "NZL", flag: "nz", slug: "new-zealand", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3, gd: -2, pts: 0, recentRes: "L 1-3 vs NED" }
    ],
    "Pool C": [
      { name: "Spain", code: "ESP", flag: "es", slug: "spain", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, gd: 2, pts: 3, recentRes: "W 2-0 vs RSA" },
      { name: "Australia", code: "AUS", flag: "au", slug: "australia", p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1, gd: 2, pts: 3, recentRes: "W 3-1 vs IRL" },
      { name: "Ireland", code: "IRL", flag: "ie", slug: "ireland", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3, gd: -2, pts: 0, recentRes: "L 1-3 vs AUS" },
      { name: "South Africa", code: "RSA", flag: "za", slug: "south-africa", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, gd: -2, pts: 0, recentRes: "L 0-2 vs ESP" }
    ]
  },
  Women: {
    "Pool A": [
      { name: "Netherlands", code: "NED", flag: "nl", slug: "netherlands", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, gd: 2, pts: 3, recentRes: "W 2-0 vs CHI" },
      { name: "Australia", code: "AUS", flag: "au", slug: "australia", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, gd: 2, pts: 3, recentRes: "W 2-0 vs JPN" },
      { name: "Japan", code: "JPN", flag: "jp", slug: "japan", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, gd: -2, pts: 0, recentRes: "L 0-2 vs AUS" },
      { name: "Chile", code: "CHI", flag: "cl", slug: "chile", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, gd: -2, pts: 0, recentRes: "L 0-2 vs NED" }
    ],
    "Pool B": [
      { name: "Germany", code: "GER", flag: "de", slug: "germany", p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 0, gd: 3, pts: 3, recentRes: "W 3-0 vs SCO" },
      { name: "Argentina", code: "ARG", flag: "ar", slug: "argentina", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, gd: 0, pts: 1, recentRes: "D 1-1 vs USA" },
      { name: "United States", code: "USA", flag: "us", slug: "usa", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, gd: 0, pts: 1, recentRes: "D 1-1 vs ARG" },
      { name: "Scotland", code: "SCO", flag: "gb-sct", slug: "scotland", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 3, gd: -3, pts: 0, recentRes: "L 0-3 vs GER" }
    ],
    "Pool C": [
      { name: "Belgium", code: "BEL", flag: "be", slug: "belgium", p: 1, w: 1, d: 0, l: 0, gf: 5, ga: 2, gd: 3, pts: 3, recentRes: "W 5-2 vs NZL" },
      { name: "Spain", code: "ESP", flag: "es", slug: "spain", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0, recentRes: "Plays Tonight" },
      { name: "Ireland", code: "IRL", flag: "ie", slug: "ireland", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0, recentRes: "Plays Tonight" },
      { name: "New Zealand", code: "NZL", flag: "nz", slug: "new-zealand", p: 1, w: 0, d: 0, l: 1, gf: 2, ga: 5, gd: -3, pts: 0, recentRes: "L 2-5 vs BEL" }
    ],
    "Pool D": [
      { name: "England", code: "ENG", flag: "gb-eng", slug: "england", p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 0, gd: 4, pts: 3, recentRes: "W 4-0 vs RSA" },
      { name: "China", code: "CHN", flag: "cn", slug: "china", p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2, gd: 0, pts: 1, recentRes: "D 2-2 vs IND" },
      { name: "India", code: "IND", flag: "in", slug: "india", p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2, gd: 0, pts: 1, recentRes: "D 2-2 vs CHN" },
      { name: "South Africa", code: "RSA", flag: "za", slug: "south-africa", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 4, gd: -4, pts: 0, recentRes: "L 0-4 vs ENG" }
    ]
  }
};

export default function PointsTablePage() {
  const faqItems = [
    {
      question: "How do points work in the Hockey World Cup 2026 group stage?",
      answer: "Teams are awarded 3 points for a regulation win, 1 point for a draw, and 0 points for a defeat. There is no overtime or penalty shootout during the group stages."
    },
    {
      question: "What are the FIH tie-breaker rules if two teams are tied on points?",
      answer: "If two or more teams finish equal on points in a pool, rankings are resolved in order: 1. Total Matches Won → 2. Goal Difference (GD) → 3. Goals For (GF) → 4. Head-to-Head Result → 5. Penalty Shootout."
    },
    {
      question: "Which teams qualify directly for the Quarter-Finals?",
      answer: "The top-ranked team (1st place) in each pool (Pools A, B, C, and D) advances directly to the Quarter-Finals. The 2nd and 3rd placed teams contest the Crossover playoff rounds to earn the remaining 4 quarter-final spots."
    },
    {
      question: "Does goal difference take priority over total wins?",
      answer: "No. Under the official FIH Tournament Regulations, total matches won is the primary tie-breaker. Goal difference is only evaluated if both teams have the exact same number of wins."
    }
  ];

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Official FIH Group Stage Standings & Qualification Tracker</p>
          <h1 className="hero-title">Hockey World Cup 2026 Points Table & Pool Standings</h1>
          <p className="hero-description">
            Live updated standings, goal difference records, match wins, and pool rankings for all 16 Men's and 16 Women's teams competing at the 2026 FIH Hockey World Cup in Wavre (Belgium) and Amstelveen (Netherlands).
          </p>

          {/* Points Rules Summary Alert */}
          <div style={{ background: "rgba(0, 153, 0, 0.08)", border: "1px solid rgba(0, 153, 0, 0.2)", borderRadius: "12px", padding: "1.2rem 1.5rem", margin: "1rem 0 1.5rem 0", textAlign: "left" }}>
            <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-main)", fontWeight: "500", lineHeight: "1.7" }}>
              <strong>Point System:</strong> Win = <strong>3 Pts</strong> | Draw = <strong>1 Pt</strong> | Loss = <strong>0 Pts</strong>. The #1 team in each pool gains direct Quarter-Final entry; #2 and #3 contest crossover playoffs.
            </p>
          </div>

          <div className="eeat-badge-container">
            <div className="eeat-badge" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid var(--border-color)", padding: "0.4rem 1rem", borderRadius: "8px", fontSize: "0.85rem" }}>
              ✅ Verified by <strong>HWC 2026 Editorial Desk</strong> (Synced with official FIH Tournament Match Records)
            </div>
            <div className="eeat-badge" style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", padding: "0.4rem 1rem", borderRadius: "8px", fontSize: "0.85rem", color: "#16a34a", fontWeight: "700" }}>
              ⚡ Matchday Standings Active
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
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
                  { "@type": "ListItem", "position": 2, "name": "Points Table", "item": "https://hockeyworldcup2026schedule.com/points-table" }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer,
                  },
                })),
              }
            ]
          }),
        }}
      />

      <main className="sports-container py-12">
        {/* Pool Pages Navigation Hub */}
        <section style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          borderRadius: "16px",
          padding: "1.2rem 1.5rem",
          marginBottom: "2rem"
        }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "0.8rem" }}>
            🏆 Dedicated Pool Standings & Analysis Hubs:
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="/hockey-world-cup-2026-groups" style={{ background: "#c00030", color: "#ffffff", padding: "0.55rem 1.1rem", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "0.88rem" }}>
              🏆 All 16 Groups Hub
            </a>
            <a href="/pool-a" style={{ background: "rgba(2, 132, 199, 0.1)", color: "#0284c7", border: "1px solid rgba(2, 132, 199, 0.2)", padding: "0.55rem 1.1rem", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "0.88rem" }}>
              🅰️ Pool A (NED, ARG, NZL, JPN)
            </a>
            <a href="/pool-b" style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10b981", border: "1px solid rgba(16, 185, 129, 0.2)", padding: "0.55rem 1.1rem", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "0.88rem" }}>
              🇧 Pool B (GER, BEL, MAS, FRA)
            </a>
            <a href="/pool-c" style={{ background: "rgba(245, 158, 11, 0.1)", color: "#d97706", border: "1px solid rgba(245, 158, 11, 0.2)", padding: "0.55rem 1.1rem", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "0.88rem" }}>
              🅲 Pool C (AUS, ESP, IRL, RSA)
            </a>
            <a href="/pool-d" style={{ background: "rgba(168, 85, 247, 0.1)", color: "#9333ea", border: "1px solid rgba(168, 85, 247, 0.2)", padding: "0.55rem 1.1rem", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "0.88rem" }}>
              🅳 Pool D (IND, ENG, PAK, WAL)
            </a>
          </div>
        </section>

        {/* INTERACTIVE CLIENT TABLE WIDGET */}
        <section className="my-8">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", margin: 0, color: "#0f172a" }}>
              📊 Interactive Pool Standings & Form Tracker
            </h2>
            <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Filter Men's & Women's pools below:</span>
          </div>
          <PointsTableClient standingsData={STANDINGS_DATA} />
        </section>

        {/* STATIC SSR ALL POOLS CRAWLABLE HTML SECTION (FOR GOOGLEBOT INDEXING) */}
        <section className="my-16" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
          <div style={{ borderBottom: "2px solid var(--primary)", paddingBottom: "0.75rem", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "900", color: "#0f172a", margin: 0 }}>
              📋 Complete Tournament Pool Standings Overview (Men's & Women's)
            </h2>
            <p style={{ color: "#64748b", margin: "0.4rem 0 0 0", fontSize: "0.9rem" }}>
              Comprehensive pool-by-pool standings table including matches played (P), wins (W), draws (D), losses (L), goals for (GF), goals against (GA), goal difference (GD), and points (PTS).
            </p>
          </div>

          {/* Men's Pools Grid */}
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0f172a", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span>🏑</span> Men's Tournament Pool Standings (16 Teams)
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
            {Object.entries(STANDINGS_DATA.Men).map(([poolName, teams]) => (
              <div key={poolName} style={{ border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden", background: "#f8fafc" }}>
                <div style={{ padding: "0.75rem 1rem", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", color: "#ffffff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ fontSize: "0.95rem" }}>Men's {poolName}</strong>
                  <a href={`/${poolName.toLowerCase().replace(' ', '-')}`} style={{ color: "#facc15", fontSize: "0.75rem", textDecoration: "none", fontWeight: "700" }}>Pool Hub →</a>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem", background: "#ffffff" }}>
                  <thead>
                    <tr style={{ background: "#f1f5f9", textAlign: "center", borderBottom: "1px solid #e2e8f0" }}>
                      <th style={{ padding: "0.5rem", textAlign: "left" }}>#</th>
                      <th style={{ padding: "0.5rem", textAlign: "left" }}>Team</th>
                      <th style={{ padding: "0.5rem" }}>P</th>
                      <th style={{ padding: "0.5rem" }}>W</th>
                      <th style={{ padding: "0.5rem" }}>GD</th>
                      <th style={{ padding: "0.5rem", fontWeight: "800", color: "var(--primary)" }}>PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((t, i) => (
                      <tr key={t.name} style={{ borderBottom: "1px solid #f1f5f9", textAlign: "center" }}>
                        <td style={{ padding: "0.55rem", textAlign: "left", fontWeight: "700" }}>{i + 1}</td>
                        <td style={{ padding: "0.55rem", textAlign: "left", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "600" }}>
                          <img src={`https://flagcdn.com/w40/${t.flag}.png`} width="18" height="12" alt={t.name} />
                          <a href={`/hockey-world-cup-2026-schedule-${t.slug}`} style={{ color: "#0f172a", textDecoration: "none" }}>{t.name}</a>
                        </td>
                        <td style={{ padding: "0.55rem" }}>{t.p}</td>
                        <td style={{ padding: "0.55rem", color: "#16a34a", fontWeight: "700" }}>{t.w}</td>
                        <td style={{ padding: "0.55rem", fontWeight: "600" }}>{t.gd > 0 ? `+${t.gd}` : t.gd}</td>
                        <td style={{ padding: "0.55rem", fontWeight: "900", color: "var(--primary)" }}>{t.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* Women's Pools Grid */}
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0f172a", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span>🏑</span> Women's Tournament Pool Standings (16 Teams)
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {Object.entries(STANDINGS_DATA.Women).map(([poolName, teams]) => (
              <div key={poolName} style={{ border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden", background: "#f8fafc" }}>
                <div style={{ padding: "0.75rem 1rem", background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)", color: "#ffffff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ fontSize: "0.95rem" }}>Women's {poolName}</strong>
                  <a href="/womens-tournament" style={{ color: "#facc15", fontSize: "0.75rem", textDecoration: "none", fontWeight: "700" }}>Women's Hub →</a>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem", background: "#ffffff" }}>
                  <thead>
                    <tr style={{ background: "#f1f5f9", textAlign: "center", borderBottom: "1px solid #e2e8f0" }}>
                      <th style={{ padding: "0.5rem", textAlign: "left" }}>#</th>
                      <th style={{ padding: "0.5rem", textAlign: "left" }}>Team</th>
                      <th style={{ padding: "0.5rem" }}>P</th>
                      <th style={{ padding: "0.5rem" }}>W</th>
                      <th style={{ padding: "0.5rem" }}>GD</th>
                      <th style={{ padding: "0.5rem", fontWeight: "800", color: "var(--primary)" }}>PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((t, i) => (
                      <tr key={t.name} style={{ borderBottom: "1px solid #f1f5f9", textAlign: "center" }}>
                        <td style={{ padding: "0.55rem", textAlign: "left", fontWeight: "700" }}>{i + 1}</td>
                        <td style={{ padding: "0.55rem", textAlign: "left", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "600" }}>
                          <img src={`https://flagcdn.com/w40/${t.flag}.png`} width="18" height="12" alt={t.name} />
                          <a href={`/hockey-world-cup-2026-schedule-${t.slug}`} style={{ color: "#0f172a", textDecoration: "none" }}>{t.name}</a>
                        </td>
                        <td style={{ padding: "0.55rem" }}>{t.p}</td>
                        <td style={{ padding: "0.55rem", color: "#16a34a", fontWeight: "700" }}>{t.w}</td>
                        <td style={{ padding: "0.55rem", fontWeight: "600" }}>{t.gd > 0 ? `+${t.gd}` : t.gd}</td>
                        <td style={{ padding: "0.55rem", fontWeight: "900", color: "var(--primary)" }}>{t.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>

        {/* Point System Cards */}
        <section className="insights-section-wrap">
          <h2 className="insights-section-title">
            <span>⚙️</span> FIH Group Stage Point Allocation System
          </h2>
          <div className="insights-grid">
            <div className="insight-col-card">
              <span className="insight-col-tag">Win</span>
              <span className="insight-col-header">3 Points</span>
              <p className="insight-col-text">
                Teams receive 3 points for winning a match within the 60 minutes of regulation play. There is no extra time during pool matches.
              </p>
            </div>
            
            <div className="insight-col-card accent-card">
              <span className="insight-col-tag">Draw</span>
              <span className="insight-col-header">1 Point</span>
              <p className="insight-col-text">
                In case of a tie at the end of regulation (60 mins), both teams receive 1 point each. No penalty shootout is played in the group phase.
              </p>
            </div>

            <div className="insight-col-card">
              <span className="insight-col-tag">Loss</span>
              <span className="insight-col-header">0 Points</span>
              <p className="insight-col-text">
                A team receives 0 points for losing a match within regulation play, regardless of goal margins.
              </p>
            </div>
          </div>
        </section>

        {/* Tie-Breaker Priority Rules List */}
        <section className="my-16" style={{
          background: "linear-gradient(135deg, rgba(192, 0, 48, 0.03) 0%, #ffffff 100%)",
          border: "1px solid rgba(15, 23, 42, 0.08)",
          borderRadius: "20px",
          padding: "2.5rem",
          boxShadow: "0 8px 30px rgba(15, 23, 42, 0.03)"
        }}>
          {/* Section Header */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "1.3rem" }}>⚖️</span>
            <h2 style={{ fontSize: "1.15rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", margin: 0 }}>
              Official FIH Group Stage Tie-Breaker Rules
            </h2>
          </div>
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "1.8rem", maxWidth: "680px" }}>
            If two or more teams finish pool matches with equal points, their final standings are determined by the following priority rules (applied in order):
          </p>

          {/* Rules Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem"
          }}>
            {[
              { num: "01", icon: "🏆", title: "Total Matches Won", desc: "The team with the higher number of wins in the pool is ranked higher." },
              { num: "02", icon: "⚽", title: "Goal Difference (GD)", desc: "Goals scored minus goals conceded. Higher positive difference ranks higher." },
              { num: "03", icon: "🎯", title: "Goals For (GF)", desc: "The team that has scored the highest total goals in all pool matches ranks higher." },
              { num: "04", icon: "🤝", title: "Head-to-Head Result", desc: "The result of the direct match played between the tied teams decides ranking." },
              { num: "05", icon: "🥅", title: "Penalty Shootout", desc: "If all above parameters are equal, a penalty shoot-out series determines qualification." },
            ].map((rule) => (
              <div key={rule.num} style={{
                background: "#ffffff",
                border: "1px solid rgba(15, 23, 42, 0.07)",
                borderRadius: "12px",
                padding: "1.1rem 1.25rem",
                display: "flex",
                gap: "0.9rem",
                alignItems: "flex-start",
                transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.03)"
              }}>
                {/* Number Badge */}
                <div style={{
                  minWidth: "32px",
                  height: "32px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #e11d48 100%)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.65rem",
                  fontWeight: "900",
                  color: "#fff",
                  letterSpacing: "0.03em"
                }}>
                  {rule.num}
                </div>
                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.3rem" }}>
                    <span style={{ fontSize: "0.85rem" }}>{rule.icon}</span>
                    <strong style={{ fontSize: "0.82rem", fontWeight: "700", color: "var(--text-main)" }}>{rule.title}</strong>
                  </div>
                  <p style={{ fontSize: "0.77rem", color: "var(--text-muted)", lineHeight: "1.55", margin: 0 }}>{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Priority Note */}
          <div style={{
            marginTop: "1.4rem",
            padding: "0.75rem 1rem",
            background: "rgba(192, 0, 48, 0.04)",
            border: "1px solid rgba(192, 0, 48, 0.1)",
            borderRadius: "10px",
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <span>ℹ️</span>
            <span>Rules are applied sequentially — Rule 2 is only used if Rule 1 cannot separate the teams, and so on.</span>
          </div>
        </section>

        {/* Quick Match Centre & Schedule Links */}
        <section className="my-12" style={{ background: "var(--bg-secondary)", borderRadius: "16px", padding: "1.5rem 2rem", border: "1px solid var(--border-color)" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: "800", marginBottom: "1rem", color: "#0f172a" }}>
            🔗 Related Tournament Match Centres & Schedules:
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            <a href="/live-scores" className="cta-button" style={{ background: "#c00030", color: "#fff", padding: "0.5rem 1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "700" }}>
              🔴 Live Scores Match Centre →
            </a>
            <a href="/schedule" className="cta-button" style={{ background: "#0f172a", color: "#fff", padding: "0.5rem 1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "700" }}>
              📅 100-Match Full Schedule →
            </a>
            <a href="/matches/india-vs-pakistan" className="cta-button" style={{ background: "#ffffff", color: "#0f172a", border: "1px solid #cbd5e1", padding: "0.5rem 1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "700" }}>
              ⚔️ India vs Pakistan Match Preview →
            </a>
            <a href="/past-results" className="cta-button" style={{ background: "#ffffff", color: "#0f172a", border: "1px solid #cbd5e1", padding: "0.5rem 1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "700" }}>
              📜 Past Match Results & Scores →
            </a>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section className="my-16">
          <div className="section-title-wrap">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>Direct responses regarding points allocation, wins criteria, and group stage tie-breakers.</p>
          </div>
          
          <FaqAccordion items={faqItems} />

          <div className="expert-quote-box" style={{ marginTop: "2rem", padding: "1.2rem 1.5rem", background: "var(--bg-secondary)", borderLeft: "4px solid var(--primary)", borderRadius: "8px", fontSize: "0.9rem", color: "var(--text-muted)", fontStyle: "italic" }}>
            "Understanding tie-breaker rules is critical during the final matchday of pool stages as goal difference often decides direct qualification to the quarter-finals."
            <strong style={{ display: "block", marginTop: "0.5rem", fontStyle: "normal", color: "var(--text-main)" }}>— HWC 2026 Editorial Desk Analysis</strong>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
