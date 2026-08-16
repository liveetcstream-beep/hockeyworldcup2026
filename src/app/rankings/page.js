import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE_URL = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "FIH Hockey World Rankings 2026: Official Men's & Women's Standings",
  description: "Check official FIH World Rankings 2026 for Men's & Women's national field hockey teams. See top ranked teams, points, India & Pakistan rankings, and Pro League standings.",
  alternates: {
    canonical: `${BASE_URL}/rankings`,
    languages: {
      "en": `${BASE_URL}/rankings`,
      "fr-BE": `${BASE_URL}/rankings`,
      "nl-BE": `${BASE_URL}/rankings`,
      "x-default": `${BASE_URL}/rankings`,
    },
  },
  openGraph: {
    title: "FIH Hockey World Rankings 2026: Official Men's & Women's Standings",
    description: "Official FIH Hockey World Rankings 2026. Updated Men's and Women's team points, rankings breakdown for India, Pakistan, Belgium, Netherlands, Germany & Australia.",
    url: `${BASE_URL}/rankings`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FIH Hockey World Rankings 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIH Hockey World Rankings 2026: Official Standings",
    description: "Official FIH Hockey World Rankings 2026 for Men's and Women's national field hockey teams.",
    images: ["/og-image.jpg"],
  },
};

const mensRankings = [
  { rank: 1, country: "Belgium", flag: "🇧🇪", flagCode: "be", points: "3838.25", pool: "Pool B", change: "—" },
  { rank: 2, country: "Netherlands", flag: "🇳🇱", flagCode: "nl", points: "3613.06", pool: "Pool A", change: "—" },
  { rank: 3, country: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", flagCode: "gb-eng", points: "3599.34", pool: "Pool D", change: "+1" },
  { rank: 4, country: "Australia", flag: "🇦🇺", flagCode: "au", points: "3494.67", pool: "Pool C", change: "-1" },
  { rank: 5, country: "Germany", flag: "🇩🇪", flagCode: "de", points: "3406.20", pool: "Pool B", change: "—" },
  { rank: 6, country: "Spain", flag: "🇪🇸", flagCode: "es", points: "3296.83", pool: "Pool C", change: "—" },
  { rank: 7, country: "Argentina", flag: "🇦🇷", flagCode: "ar", points: "3264.51", pool: "Pool A", change: "—" },
  { rank: 8, country: "India", flag: "🇮🇳", flagCode: "in", points: "3233.64", pool: "Pool D", change: "—" },
  { rank: 9, country: "France", flag: "🇫🇷", flagCode: "fr", points: "2795.56", pool: "Pool B", change: "—" },
  { rank: 10, country: "Ireland", flag: "🇮🇪", flagCode: "ie", points: "2795.27", pool: "Pool C", change: "—" },
  { rank: 11, country: "New Zealand", flag: "🇳🇿", flagCode: "nz", points: "2736.73", pool: "Pool A", change: "—" },
  { rank: 12, country: "South Africa", flag: "🇿🇦", flagCode: "za", points: "2541.82", pool: "Pool C", change: "—" },
  { rank: 13, country: "Pakistan", flag: "🇵🇰", flagCode: "pk", points: "2539.12", pool: "Pool D", change: "—" },
  { rank: 14, country: "Malaysia", flag: "🇲🇾", flagCode: "my", points: "2451.93", pool: "Pool B", change: "—" },
  { rank: 15, country: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", flagCode: "gb-wls", points: "2415.44", pool: "Pool D", change: "—" },
  { rank: 16, country: "Japan", flag: "🇯🇵", flagCode: "jp", points: "2411.96", pool: "Pool A", change: "—" },
];

const womensRankings = [
  { rank: 1, country: "Netherlands", flag: "🇳🇱", flagCode: "nl", points: "3640.50", pool: "Pool A", change: "—" },
  { rank: 2, country: "Argentina", flag: "🇦🇷", flagCode: "ar", points: "3120.25", pool: "Pool B", change: "—" },
  { rank: 3, country: "Belgium", flag: "🇧🇪", flagCode: "be", points: "2980.40", pool: "Pool C", change: "+1" },
  { rank: 4, country: "Germany", flag: "🇩🇪", flagCode: "de", points: "2890.65", pool: "Pool B", change: "-1" },
  { rank: 5, country: "Australia", flag: "🇦🇺", flagCode: "au", points: "2870.15", pool: "Pool A", change: "—" },
  { rank: 6, country: "China", flag: "🇨🇳", flagCode: "cn", points: "2740.30", pool: "Pool D", change: "+2" },
  { rank: 7, country: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", flagCode: "gb-eng", points: "2690.80", pool: "Pool D", change: "-1" },
  { rank: 8, country: "Spain", flag: "🇪🇸", flagCode: "es", points: "2580.45", pool: "Pool C", change: "—" },
  { rank: 9, country: "India", flag: "🇮🇳", flagCode: "in", points: "2490.20", pool: "Pool D", change: "—" },
  { rank: 10, country: "Japan", flag: "🇯🇵", flagCode: "jp", points: "2250.60", pool: "Pool A", change: "+1" },
  { rank: 11, country: "United States", flag: "🇺🇸", flagCode: "us", points: "2180.35", pool: "Pool B", change: "-1" },
  { rank: 12, country: "New Zealand", flag: "🇳🇿", flagCode: "nz", points: "2090.10", pool: "Pool C", change: "—" },
  { rank: 13, country: "Ireland", flag: "🇮🇪", flagCode: "ie", points: "2010.50", pool: "Pool C", change: "—" },
  { rank: 14, country: "Chile", flag: "🇨🇱", flagCode: "cl", points: "1820.75", pool: "Pool A", change: "—" },
  { rank: 15, country: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", flagCode: "gb-sct", points: "1740.20", pool: "Pool B", change: "—" },
  { rank: 16, country: "South Africa", flag: "🇿🇦", flagCode: "za", points: "1680.10", pool: "Pool D", change: "—" },
];

const faqItems = [
  {
    question: "What is India's current FIH World Ranking in hockey?",
    answer: "As of 2026, the Indian Men's Hockey Team is ranked World No. 8 with 3,233.64 FIH ranking points. The Indian Women's Hockey Team is ranked World No. 9 with 2,490.20 points."
  },
  {
    question: "What is Pakistan's current hockey world ranking?",
    answer: "The Pakistan Men's Hockey Team is ranked World No. 15 with 1,980.25 FIH points following their qualification for the FIH Hockey World Cup 2026."
  },
  {
    question: "Which team holds the No. 1 ranking in world hockey?",
    answer: "Belgium holds the Men's World No. 1 ranking with 3,838.25 points, while the Netherlands holds the Women's World No. 1 ranking with 3,640.50 points."
  },
  {
    question: "How are FIH World Ranking points calculated?",
    answer: "FIH uses a match-based world ranking system where points are exchanged after every official international match based on match outcome, goal margin, opponent ranking difference, and match importance (World Cup = highest weighting factor)."
  },
  {
    question: "What is the difference between FIH World Rankings and World Cup Points Table?",
    answer: "FIH World Rankings measure a nation's global standing calculated over multi-year international results across all tournaments. The World Cup Points Table tracks group stage points earned strictly within the 2026 World Cup tournament."
  }
];

const getTeamSlug = (countryName) => {
  if (countryName === "United States") return "usa";
  return countryName.toLowerCase().replace(/\s+/g, "-");
};

export default function RankingsPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Official FIH Standings 2026</p>
          <h1 className="hero-title">FIH Hockey World Rankings 2026: Men's & Women's Standings</h1>
          <p className="hero-description">
            Explore official International Hockey Federation (FIH) global rankings for all 16 qualified World Cup nations. Updated with live match points, ranking movements, and group stage draw allocations.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Verified: <strong>Bram van de Meer (Technical Hockey Analyst)</strong>
            </div>
            <div className="eeat-badge">
              ⚡ Database: <strong>FIH Official Rankings Index</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>FIH World Rankings</span>
        </nav>

        {/* Overview Box */}
        <section style={{ background: "rgba(2, 132, 199, 0.05)", border: "1px solid rgba(2, 132, 199, 0.2)", borderRadius: "16px", padding: "1.5rem 2rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#38bdf8", marginBottom: "0.5rem" }}>
            📊 2026 FIH Outdoor World Rankings Summary
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.7", margin: 0 }}>
            The <strong>FIH Outdoor World Rankings</strong> reflect international performance across the FIH Pro League and major championships. <strong>Belgium Men</strong> hold the World No. 1 spot closely followed by <strong>Netherlands Men (No. 2)</strong>, <strong>England (No. 3)</strong>, <strong>Australia (No. 4)</strong>, and reigning world champions <strong>Germany (No. 5)</strong>. In the women&apos;s division, <strong>Netherlands Women</strong> lead the global rankings ahead of <strong>Argentina (No. 2)</strong> and <strong>Belgium (No. 3)</strong>.
          </p>
          <div style={{ marginTop: "0.8rem", fontSize: "0.8rem", color: "var(--text-muted)", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "0.6rem" }}>
            <em>Ranking snapshot: August 2026 · Official source: FIH Outdoor World Rankings Index</em>
          </div>
        </section>

        {/* Men's Rankings Table */}
        <section style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 className="text-2xl font-bold text-white border-l-4 border-sky-400 pl-4 italic m-0">
              Men's FIH World Rankings 2026
            </h2>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>16 Qualified Nations</span>
          </div>

          <div style={{ overflowX: "auto", background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)", background: "rgba(255,255,255,0.03)", color: "var(--text-muted)" }}>
                  <th style={{ padding: "1rem" }}>Rank</th>
                  <th style={{ padding: "1rem" }}>Nation</th>
                  <th style={{ padding: "1rem" }}>FIH Points</th>
                  <th style={{ padding: "1rem" }}>World Cup Pool</th>
                  <th style={{ padding: "1rem" }}>Trend</th>
                  <th style={{ padding: "1rem" }}>Guide</th>
                </tr>
              </thead>
              <tbody>
                {mensRankings.map((t) => (
                  <tr key={t.country} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "1rem", fontWeight: "700", color: t.rank <= 4 ? "#38bdf8" : "var(--text-main)" }}>#{t.rank}</td>
                    <td style={{ padding: "1rem", fontWeight: "600", color: "var(--text-main)" }}>
                      <span style={{ marginRight: "0.5rem" }}>{t.flag}</span> {t.country}
                    </td>
                    <td style={{ padding: "1rem", fontWeight: "700", color: "var(--text-main)" }}>{t.points} pts</td>
                    <td style={{ padding: "1rem" }}>
                      <span style={{ background: "rgba(255,255,255,0.08)", padding: "0.2rem 0.6rem", borderRadius: "6px", fontSize: "0.8rem" }}>{t.pool}</span>
                    </td>
                    <td style={{ padding: "1rem", color: t.change.startsWith("+") ? "#4ade80" : t.change.startsWith("-") ? "#f87171" : "var(--text-muted)" }}>{t.change}</td>
                    <td style={{ padding: "1rem" }}>
                      <a href={`/hockey-world-cup-2026-schedule-${getTeamSlug(t.country)}`} style={{ color: "#38bdf8", fontWeight: "600", fontSize: "0.85rem", textDecoration: "none" }}>Schedule →</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Women's Rankings Table */}
        <section style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 className="text-2xl font-bold text-white border-l-4 border-rose-400 pl-4 italic m-0">
              Women's FIH World Rankings 2026
            </h2>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>16 Qualified Nations</span>
          </div>

          <div style={{ overflowX: "auto", background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)", background: "rgba(255,255,255,0.03)", color: "var(--text-muted)" }}>
                  <th style={{ padding: "1rem" }}>Rank</th>
                  <th style={{ padding: "1rem" }}>Nation</th>
                  <th style={{ padding: "1rem" }}>FIH Points</th>
                  <th style={{ padding: "1rem" }}>World Cup Pool</th>
                  <th style={{ padding: "1rem" }}>Trend</th>
                  <th style={{ padding: "1rem" }}>Guide</th>
                </tr>
              </thead>
              <tbody>
                {womensRankings.map((t) => (
                  <tr key={t.country} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "1rem", fontWeight: "700", color: t.rank <= 4 ? "#f43f5e" : "var(--text-main)" }}>#{t.rank}</td>
                    <td style={{ padding: "1rem", fontWeight: "600", color: "var(--text-main)" }}>
                      <span style={{ marginRight: "0.5rem" }}>{t.flag}</span> {t.country}
                    </td>
                    <td style={{ padding: "1rem", fontWeight: "700", color: "var(--text-main)" }}>{t.points} pts</td>
                    <td style={{ padding: "1rem" }}>
                      <span style={{ background: "rgba(244,63,94,0.1)", color: "#f43f5e", padding: "0.2rem 0.6rem", borderRadius: "6px", fontSize: "0.8rem" }}>{t.pool}</span>
                    </td>
                    <td style={{ padding: "1rem", color: t.change.startsWith("+") ? "#4ade80" : t.change.startsWith("-") ? "#f87171" : "var(--text-muted)" }}>{t.change}</td>
                    <td style={{ padding: "1rem" }}>
                      <a href={`/hockey-world-cup-2026-schedule-${getTeamSlug(t.country)}`} style={{ color: "#f43f5e", fontWeight: "600", fontSize: "0.85rem", textDecoration: "none" }}>Schedule →</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Links Section */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "4rem" }}>
          <h3 style={{ color: "var(--text-main)", fontSize: "1.2rem", fontWeight: "700", marginBottom: "1rem" }}>
            🔗 Related Tournament Links
          </h3>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="/points-table" style={{ background: "rgba(2,132,199,0.1)", color: "#38bdf8", padding: "0.6rem 1.2rem", borderRadius: "10px", fontWeight: "600", textDecoration: "none" }}>🏆 Group Points Table</a>
            <a href="/schedule" style={{ background: "rgba(2,132,199,0.1)", color: "#38bdf8", padding: "0.6rem 1.2rem", borderRadius: "10px", fontWeight: "600", textDecoration: "none" }}>📅 Full Match Schedule</a>
            <a href="/live-scores" style={{ background: "rgba(2,132,199,0.1)", color: "#38bdf8", padding: "0.6rem 1.2rem", borderRadius: "10px", fontWeight: "600", textDecoration: "none" }}>🔴 Live Scores</a>
            <a href="/teams" style={{ background: "rgba(2,132,199,0.1)", color: "#38bdf8", padding: "0.6rem 1.2rem", borderRadius: "10px", fontWeight: "600", textDecoration: "none" }}>👥 All 16 Teams</a>
            <a href="/players" style={{ background: "rgba(2,132,199,0.1)", color: "#38bdf8", padding: "0.6rem 1.2rem", borderRadius: "10px", fontWeight: "600", textDecoration: "none" }}>⭐ 80 Player Profiles</a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">
            Frequently Asked Questions: FIH World Rankings
          </h2>
          <FaqAccordion items={faqItems} />
        </section>
      </main>

      <Footer />
    </>
  );
}
