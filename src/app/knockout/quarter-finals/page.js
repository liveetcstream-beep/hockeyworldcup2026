import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
  title: "Hockey World Cup 2026 Second Stage (Pools E–H) — Format & Schedule",
  description: "Official guide to the Hockey World Cup 2026 Second Group Stage (Pools E, F, G, H). Discover how top pool finishers qualify directly for the Semi-Finals.",
  alternates: { canonical: `${BASE}/knockout/quarter-finals` },
  openGraph: {
    title: "Hockey World Cup 2026 Second Stage (Pools E–H) — Format & Schedule",
    description: "Complete guide to the HWC 2026 Second Stage (Pools E, F, G, H) — qualification paths to the Semi-Finals, match dates, and venue details.",
    url: `${BASE}/knockout/quarter-finals`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hockey World Cup 2026 Second Stage Pools" }],
  },
};

const faqItems = [
  { q: "Are there Quarter-Finals in the FIH Hockey World Cup 2026?", a: "No. The 2026 FIH Hockey World Cup uses a Second Group Phase (Pools E, F, G, H) from August 21–24 instead of traditional single-elimination quarter-finals. The top two teams from Pools E and F qualify directly for the Semi-Finals." },
  { q: "How are Pools E and F formed in the Second Stage?", a: "Pool E is formed by the top 2 teams from Pool A and Pool D (playing at Wagener Stadium, Amstelveen). Pool F is formed by the top 2 teams from Pool B and Pool C (playing at Belfius Arena, Wavre). Teams carry forward their head-to-head results from the opening phase." },
  { q: "What are Pools G and H?", a: "Pools G and H are the classification pools for teams finishing 3rd and 4th in their opening pools. Pool G (Bottom 2 of A & D) and Pool H (Bottom 2 of B & C) determine the 9th–16th world ranking placements." },
  { q: "When do the Second Stage matches take place?", a: "Second Group Stage matches take place from August 21 to August 24, 2026. Women's classification and Semi-Finals follow on August 27, and Men's on August 28." },
  { q: "How many teams from Pools E & F reach the Semi-Finals?", a: "The top two teams in Pool E and the top two teams in Pool F advance directly to the Semi-Finals (1st E vs 2nd F, and 1st F vs 2nd E)." }
];

const secondStagePools = [
  { pool: "Pool E (Championship Group 1)", venue: "Wagener Stadium, Amstelveen (NED)", composition: "Top 2 from Pool A + Top 2 from Pool D", prize: "Top 2 advance to Semi-Finals 🏆", color: "#0284c7" },
  { pool: "Pool F (Championship Group 2)", venue: "Belfius Hockey Arena, Wavre (BEL)", composition: "Top 2 from Pool B + Top 2 from Pool C", prize: "Top 2 advance to Semi-Finals 🏆", color: "#c00030" },
  { pool: "Pool G (Classification Group 1)", venue: "Wagener Stadium, Amstelveen (NED)", composition: "3rd & 4th from Pool A + 3rd & 4th from Pool D", prize: "Playoffs for 9th–16th place 📊", color: "#64748b" },
  { pool: "Pool H (Classification Group 2)", venue: "Belfius Hockey Arena, Wavre (BEL)", composition: "3rd & 4th from Pool B + 3rd & 4th from Pool C", prize: "Playoffs for 9th–16th place 📊", color: "#64748b" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
};

export default function QuarterFinalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏆 Second Group Phase — Hockey World Cup 2026</p>
          <h1 className="hero-title">Second Stage (Pools E–H) — Format &amp; Qualification Guide</h1>
          <p className="hero-description">
            Complete explanation of the FIH Hockey World Cup 2026 Second Group Phase. How the top 8 teams battle in Pools E &amp; F for direct Semi-Final berths, while Pools G &amp; H compete for 9th–16th classification.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">📅 Dates: <strong>August 21–24, 2026</strong></div>
            <div className="eeat-badge">🏟️ Venues: <strong>Amstelveen (E/G) &amp; Wavre (F/H)</strong></div>
            <div className="eeat-badge">🎓 Format: <strong>Second Group Phase</strong></div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <a href="/format" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Format</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <span style={{ color: "var(--text-main)", fontWeight: 600 }}>Second Stage Pools (E–H)</span>
        </nav>

        {/* Format Explanation */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            Why There Are No Traditional Quarter-Finals in 2026
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Under the official FIH 2026 tournament structure, the competition replaces single-elimination quarter-finals and crossover playoffs with a comprehensive <strong>Second Group Phase (August 21–24, 2026)</strong>. This guarantees every qualified team plays a minimum of 5 competitive international matches while maintaining the integrity of multi-game qualification.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.2rem" }}>
            {secondStagePools.map((item) => (
              <div key={item.pool} style={{
                background: "var(--bg-secondary)", border: `1px solid ${item.color}40`,
                borderTop: `4px solid ${item.color}`,
                borderRadius: "14px", padding: "1.5rem",
              }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "0.5rem" }}>
                  {item.pool}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.8rem" }}>
                  📍 {item.venue}
                </p>
                <div style={{ background: "var(--bg-tertiary)", padding: "0.75rem", borderRadius: "8px", fontSize: "0.85rem", marginBottom: "0.8rem", color: "var(--text-main)" }}>
                  <strong>Teams:</strong> {item.composition}
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: item.color }}>
                  {item.prize}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Progression into Semi-Finals */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "18px", padding: "2rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
            🛣️ Road to the Semi-Finals &amp; Grand Final
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            <div style={{ background: "var(--bg-tertiary)", padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
              <strong style={{ color: "#38bdf8", display: "block", marginBottom: "0.4rem" }}>Semi-Final 1 (Match 47)</strong>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)" }}>Winner Pool E vs Runner-up Pool F</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>Wagener Stadium, Amstelveen</div>
            </div>
            <div style={{ background: "var(--bg-tertiary)", padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
              <strong style={{ color: "#f43f5e", display: "block", marginBottom: "0.4rem" }}>Semi-Final 2 (Match 48)</strong>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)" }}>Winner Pool F vs Runner-up Pool E</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>Belfius Hockey Arena, Wavre</div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            Frequently Asked Questions — Second Stage &amp; Semi-Finals
          </h2>
          <FaqAccordion items={faqItems.map(f => ({ question: f.q, answer: f.a }))} />
        </section>
      </main>

      <Footer />
    </>
  );
}
