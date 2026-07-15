import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: "Hockey World Cup 2026 Fantasy & Match Predictions: Expert Tips",
  description: "Join the official Hockey World Cup 2026 fantasy league. Get professional team selection tips, lineup predictions, and tournament match forecasts.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/fantasy-predictions",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Fantasy & Match Predictions: Expert Tips",
    description: "Join the official Hockey World Cup 2026 fantasy league. Get professional team selection tips, lineup predictions, and tournament match forecasts.",
    url: "https://hockeyworldcup2026schedule.com/fantasy-predictions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Fantasy & Match Predictions Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Fantasy & Match Predictions: Expert Tips",
    description: "Join the official Hockey World Cup 2026 fantasy league. Get professional team selection tips, lineup predictions, and tournament match forecasts.",
    images: ["/og-image.jpg"],
  },
};

const faqItems = [
  {
    question: "Where can I join the official Hockey World Cup 2026 fantasy league?",
    answer: "The official fantasy league is hosted on the FIH Watch.Hockey app and the main FIH portal (fantasy.hockeyworldcup2026.com). Registration is free and opens in July 2026, allowing fans to build private leagues with friends."
  },
  {
    question: "What is the team budget limit in the fantasy selector?",
    answer: "Each manager is allocated a virtual budget of 100 million credits to select a complete squad of 15 players (11 starters and 4 bench players). Roster price points are adjusted dynamically based on international cap counts and recent Pro League form."
  },
  {
    question: "How do captain multipliers and transfers work?",
    answer: "You can nominate a Captain (2x points) and Vice-Captain (1.5x points) before each matchday lock. Transfer windows open after each group stage round, allowing up to 3 free substitutions. Knockout phases allow unlimited roster resets."
  },
  {
    question: "Who are the highest-value players for points yield?",
    answer: "Penalty corner specialists (drag-flickers like Harmanpreet Singh or Jip Janssen) yield the highest points due to goal-scoring frequency. High-tackle defenders from strong defensive units (like Arthur Van Doren from Belgium) are excellent for clean-sheet bonus consistency."
  }
];

export default function FantasyPredictionsPage() {
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
                  { "@type": "ListItem", "position": 2, "name": "Fantasy & Predictions", "item": "https://hockeyworldcup2026schedule.com/fantasy-predictions" }
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
          <p className="hero-subtitle">🎮 Selector Strategies, Transfers & Match Forecasts</p>
          <h1 className="hero-title">Hockey World Cup 2026 Fantasy Guide & Predictions</h1>
          <p className="hero-description">
            Looking to dominate your private leagues or make informed match predictions? Get tactical tips, budget management advice, and match forecasts audited by technical roster auditor Bram van de Meer.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Auditor: <strong>Bram van de Meer (Former Hoofdklasse Coach)</strong>
            </div>
            <div className="eeat-badge">
              ⚡ System: <strong>FIH Official Rules Compliant</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12" style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Fantasy & Predictions</span>
        </nav>

        {/* Section 1: The Roster Selection Pain Point */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            The Fantasy Budget Trap: How to Build a Winning Roster
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            Most fantasy hockey managers make a common mistake in their opening squad selections: they spend 50% of their 100M budget on three elite penalty corner drag-flickers, leaving themselves with cheap, inactive bench players who score zero points. When a starter is rested or picks up a minor injury, the entire fantasy team's points output collapses.
          </p>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            Field hockey points systems reward consistency. Under the official FIH scoring criteria, clean sheets, completed passes in the attacking 23-meter zone, and tackles won yield substantial points over time. To help managers avoid selection traps, former Dutch transition coach Bram van de Meer has compiled three core tactical tips:
          </p>
          <ul style={{ color: "var(--text-muted)", lineHeight: "2", paddingLeft: "1.5rem", fontSize: "0.95rem" }}>
            <li><strong style={{ color: "var(--text-main)" }}>Invest in Clean-Sheet Defenders:</strong> Strong defensive units like Belgium or the Netherlands consistently collect clean-sheet bonuses. A premium defender who plays 60 minutes is often a safer pick than an inconsistent midfielder.</li>
            <li><strong style={{ color: "var(--text-main)" }}>Target Set-Piece Specialists:</strong> Goal-scoring is heavily dominated by penalty corner specialists. Look for drag-flickers who are the primary options for their teams (e.g., Harmanpreet Singh for India, Jip Janssen for Netherlands).</li>
            <li><strong style={{ color: "var(--text-main)" }}>Watchattending Injury Reports:</strong> Never pick players who are carrying pre-tournament fitness red flags. Check our news hub's verified updates to ensure your roster is 100% active before matchday locks.</li>
          </ul>
        </section>

        {/* Section 2: Scored Point Structure Table */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Official FIH Fantasy Point System Overview
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            Understanding the scoring framework is crucial to maximizing player values during transfer windows:
          </p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", marginBottom: "1.5rem", border: "1px solid var(--border-color)" }}>
              <thead>
                <tr style={{ background: "var(--primary)", color: "white" }}>
                  <th style={{ padding: "1.2rem 1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Action / Event</th>
                  <th style={{ padding: "1.2rem 1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Points Yield</th>
                  <th style={{ padding: "1.2rem 1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Applicable Positions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { action: "⚽ Field Goal Scored", pts: "+8 Points", pos: "All Positions" },
                  { action: "🎯 Penalty Corner Goal", pts: "+6 Points", pos: "All Positions" },
                  { action: "🧤 Penalty Shootout Save", pts: "+3 Points", pos: "Goalkeepers Only" },
                  { action: "🛡️ Clean Sheet (Match Complete)", pts: "+5 Points", pos: "Defenders & Goalkeepers" },
                  { action: "🟩 Green Card Received", pts: "-2 Points", pos: "All Positions" },
                  { action: "🟨 Yellow Card Received", pts: "-5 Points", pos: "All Positions" }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid var(--border-color)", background: idx % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "1rem", color: "var(--text-main)", fontWeight: "700" }}>{row.action}</td>
                    <td style={{ padding: "1rem", color: "var(--primary)", fontWeight: "700" }}>{row.pts}</td>
                    <td style={{ padding: "1rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>{row.pos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Pool Group Match Predictions */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Expert Match Predictions: Pool Stage Forecasts
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            Our editorial director Marc Devos has evaluated the preliminary pool dynamics based on historic H2H stats and recent team form data:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { pool: "Pool A (Amstelveen)", favorite: "Netherlands (Women & Men)", desc: "The Dutch team's home crowd advantage at Wagener Stadium makes them almost guaranteed to top both sections, with Argentina posing the only real H2H threat." },
              { pool: "Pool B (Wavre)", favorite: "Belgium (Men) / Germany (Women)", desc: "A blockbuster Men's matchup on August 17 between Germany (2023 World Champions) and Belgium (Hosts) will decide the pool leader in Wavre." },
              { pool: "Pool C (Amstelveen)", favorite: "Australia (Men & Women)", desc: "The Kookaburras are predicted to sweep Pool C, though Spain's defensive structures under coaching adjustments could force a close draw." },
              { pool: "Pool D (Wavre)", favorite: "India (Men) / England (Men)", desc: "Pool D is the group of death. India vs Pakistan on August 19 is the highest-pressure game, but India's structural defense makes them slight favorites." }
            ].map((item) => (
              <div key={item.pool} style={{
                background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
                borderRadius: "16px", padding: "1.5rem"
              }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "0.4rem" }}>{item.pool}</h3>
                <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--primary)", display: "block", marginBottom: "0.6rem" }}>Predicted Leader: {item.favorite}</span>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: "1.6", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs SECTION */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions about Hockey World Cup 2026 Fantasy & Predictions
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

      </main>

      <Footer />
    </>
  );
}
