import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Hockey World Cup 2026 Pool A: Standings, Fixtures & Predictions",
  description: "Get the complete outlook for Pool A at the 2026 FIH Hockey World Cup. Includes Men's and Women's team standings, live match schedules, and predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/pool-a",
  },
};

export default function PoolAPage() {
  const menFixtures = [
    { date: "August 16, 2026", time: "13:00 CET", match: "Netherlands 🇳🇱 vs New Zealand 🇳🇿", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 16, 2026", time: "16:00 CET", match: "Argentina 🇦🇷 vs Japan 🇯🇵", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 18, 2026", time: "14:00 CET", match: "New Zealand 🇳🇿 vs Japan 🇯🇵", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 18, 2026", time: "17:00 CET", match: "Argentina 🇦🇷 vs Netherlands 🇳🇱", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 20, 2026", time: "14:00 CET", match: "New Zealand 🇳🇿 vs Argentina 🇦🇷", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 20, 2026", time: "15:00 CET", match: "Netherlands 🇳🇱 vs Japan 🇯🇵", venue: "Wagener Stadium, Amstelveen" }
  ];

  const womenFixtures = [
    { date: "August 15, 2026", time: "07:00 CET", match: "Australia 🇦🇺 vs Japan 🇯🇵", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 15, 2026", time: "13:00 CET", match: "Netherlands 🇳🇱 vs Chile 🇨🇱", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 17, 2026", time: "06:30 CET", match: "Chile 🇨🇱 vs Japan 🇯🇵", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 17, 2026", time: "15:00 CET", match: "Australia 🇦🇺 vs Netherlands 🇳🇱", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 19, 2026", time: "06:30 CET", match: "Chile 🇨🇱 vs Australia 🇦🇺", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 19, 2026", time: "15:00 CET", match: "Netherlands 🇳🇱 vs Japan 🇯🇵", venue: "Wagener Stadium, Amstelveen" }
  ];

  const faqItems = [
    { question: "How many teams from Pool A qualify for the Quarter-Finals?", answer: "The top team in Pool A qualifies directly for the Quarter-Finals. The teams finishing second and third will play in the crossover playoffs to secure a spot in the Quarter-Finals. The bottom team is eliminated." },
    { question: "Where will Pool A matches be played?", answer: "All Pool A matches (both Men's and Women's tournaments) will be held at the Wagener Hockey Stadium in Amstelveen, Netherlands." },
    { question: "Who are the favorites to win Pool A?", answer: "The Netherlands are the overwhelming favorites in both the Men's and Women's sections, especially with the home crowd advantage in Amstelveen. Argentina represents their biggest challenge in both categories." }
  ];

  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏆 Tournament Pools & Standings</p>
          <h1 className="hero-title">Hockey World Cup 2026 Pool A Analysis</h1>
          <p className="hero-description">
            Your hub for Pool A standings, match fixtures, tactical previews, and predictions for both Men's and Women's tournaments.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Analyst: <strong>Bram van de Meer (Dutch Tactical Coach)</strong>
            </div>
            <div className="eeat-badge">
              📅 Updated: <strong>July 2026</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Pool A Details</span>
        </nav>

        {/* Pool A Overview */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Pool A: Contenders & Teams
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Pool A brings together an incredible mix of styles. In the <strong>Men's tournament</strong>, the hosts <strong>Netherlands</strong> will compete with the physical <strong>New Zealand</strong>, the passionate <strong>Argentina</strong>, and the fast-paced <strong>Japan</strong>. 
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            In the <strong>Women's tournament</strong>, the reigning champions <strong>Netherlands</strong> are joined by their classic rivals <strong>Australia</strong>, along with <strong>Japan</strong> and South American dark horses <strong>Chile</strong>. All matches in this group are set to take place at the historic Wagener Stadium.
          </p>
        </section>

        {/* Qualification Scenarios */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "0.8rem" }}>
            📈 Pool A Qualification Scenarios
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
            The tournament format is unforgiving. To advance directly to the Quarter-Finals, a team must finish <strong>first in the pool standings</strong>. Teams finishing second and third face the sudden-death crossover matches (e.g. 2nd Pool A vs 3rd Pool D). The team that finishes at the bottom of the standings is knocked out and will play in the 9th-16th placement matches.
          </p>
        </section>

        {/* Men's Fixtures */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Men's Pool A Match Schedule
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#c00030", color: "white" }}>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: "700" }}>Date</th>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: "700" }}>Time (CET)</th>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: "700" }}>Matchup</th>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: "700" }}>Venue</th>
                </tr>
              </thead>
              <tbody>
                {menFixtures.map((m, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid var(--border-color)", background: idx % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "700" }}>{m.date}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "#c00030", fontWeight: "600" }}>{m.time}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>{m.match}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>{m.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Women's Fixtures */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Women's Pool A Match Schedule
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#c00030", color: "white" }}>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: "700" }}>Date</th>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: "700" }}>Time (CET)</th>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: "700" }}>Matchup</th>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: "700" }}>Venue</th>
                </tr>
              </thead>
              <tbody>
                {womenFixtures.map((m, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid var(--border-color)", background: idx % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "700" }}>{m.date}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "#c00030", fontWeight: "600" }}>{m.time}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>{m.match}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>{m.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Predictions & Tactical Analysis */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Pool A Tactical Predictions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>Men's Outlook: Dutch Dominance?</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                The Netherlands Men are expected to top Pool A, but Argentina's counter-attacking style remains a major threat. New Zealand's physical game will test the Dutch defenders, but home turf and penalty corners from Jip Janssen should see the Dutch through to first place.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>Women's Outlook: The Classic Rivalry</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                The Netherlands vs Australia Women's game on August 17 is arguably the biggest matchup in the group stage. The Dutch possess incredible firepower with Yibbi Jansen, but Australia's defensive organization will make it tight. Expect both to advance, with the Dutch taking the top spot.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqItems.map((item, idx) => (
              <div key={idx} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "1.2rem" }}>
                <h4 style={{ color: "var(--text-main)", fontWeight: "700", margin: "0 0 0.5rem 0", fontSize: "1rem" }}>{item.question}</h4>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
