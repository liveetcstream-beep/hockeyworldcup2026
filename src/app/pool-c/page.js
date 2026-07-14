import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Hockey World Cup 2026 Pool C: Standings & Matches",
  description: "Get the complete Pool C standings and match fixtures for the 2026 FIH Hockey World Cup. Track teams, rankings, results, and expert predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/pool-c",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Pool C: Standings & Matches",
    description: "Get the complete Pool C standings and match fixtures for the 2026 FIH Hockey World Cup. Track teams, rankings, results, and expert predictions.",
    url: "https://hockeyworldcup2026schedule.com/pool-c",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Pool C: Standings & Matches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Pool C: Standings & Matches",
    description: "Get the complete Pool C standings and match fixtures for the 2026 FIH Hockey World Cup. Track teams, rankings, results, and expert predictions.",
    images: ["/og-image.jpg"],
  },
};


export default function PoolCPage() {
  const menFixtures = [
    { date: "August 16, 2026", time: "08:30 CET", match: "Australia 🇦🇺 vs Ireland 🇮🇪", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 16, 2026", time: "11:30 CET", match: "Spain 🇪🇸 vs South Africa 🇿🇦", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 18, 2026", time: "14:30 CET", match: "Spain 🇪🇸 vs Australia 🇦🇺", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 18, 2026", time: "16:00 CET", match: "Ireland 🇮🇪 vs South Africa 🇿🇦", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 20, 2026", time: "08:00 CET", match: "Australia 🇦🇺 vs South Africa 🇿🇦", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 20, 2026", time: "14:30 CET", match: "Ireland 🇮🇪 vs Spain 🇪🇸", venue: "Belfius Hockey Arena, Wavre" }
  ];

  const womenFixtures = [
    { date: "August 16, 2026", time: "14:30 CET", match: "Belgium 🇧🇪 vs New Zealand 🇳🇿", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 16, 2026", time: "17:30 CET", match: "Spain 🇪🇸 vs Ireland 🇮🇪", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 18, 2026", time: "08:00 CET", match: "New Zealand 🇳🇿 vs Ireland 🇮🇪", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 18, 2026", time: "17:30 CET", match: "Spain 🇪🇸 vs Belgium 🇧🇪", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 20, 2026", time: "11:00 CET", match: "New Zealand 🇳🇿 vs Spain 🇪🇸", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 20, 2026", time: "17:30 CET", match: "Belgium 🇧🇪 vs Ireland 🇮🇪", venue: "Belfius Hockey Arena, Wavre" }
  ];

  const faqItems = [
    { question: "Where are the Pool C matches hosted?", answer: "All Pool C matches for both Men's and Women's tournaments are played at the Belfius Hockey Arena in Wavre, Belgium." },
    { question: "Are Australia's Kookaburras favored to win Pool C?", answer: "Yes, the Australian Men's team (Kookaburras) are strong favorites to win Pool C, but they face tricky European opposition in Spain and Ireland, alongside a highly athletic South African squad." },
    { question: "How many teams qualify from Pool C?", answer: "The top team in Pool C qualifies directly for the Quarter-Finals. The second and third-placed teams enter the crossovers, while the fourth-placed team is eliminated." }
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
                  { "@type": "ListItem", "position": 2, "name": "Pool C Standings", "item": "https://hockeyworldcup2026schedule.com/pool-c" }
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
          <p className="hero-subtitle">🏆 Tournament Pools & Standings</p>
          <h1 className="hero-title">Hockey World Cup 2026 Pool C Standings & Matches</h1>
          <p className="hero-description">
            Complete group match schedule fixtures, standings, team tactical previews, and predictions for Pool C at the 2026 FIH Hockey World Cup in Wavre, Belgium.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Analyst: <strong>Bram van de Meer (Field Hockey Analyst)</strong>
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Pool C Details</span>
        </nav>

        {/* Pool C Overview */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Pool C: Speed & Agility
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Pool C brings together high-speed, physical hockey styles. In the <strong>Men's tournament</strong>, the legendary <strong>Australia</strong> (Kookaburras) face the tactically disciplined <strong>Spain</strong>, the defensive grid of <strong>Ireland</strong>, and the explosive pace of <strong>South Africa</strong>.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            In the <strong>Women's tournament</strong>, the hosts <strong>Belgium</strong> (Red Panthers) will enjoy home field advantage in Wavre as they battle the athletic <strong>New Zealand</strong>, <strong>Spain</strong>, and <strong>Ireland</strong>. The battles in this pool will showcase transition speed and physical stamina.
          </p>
        </section>

        {/* Qualification Scenarios */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "0.8rem" }}>
            📈 Pool C Qualification Scenarios
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
            To secure direct entry into the Quarter-Finals, finishing first in the pool standings is critical. The runner-up and third-placed teams will enter the sudden-death crossovers (competing against teams from Pool B). The team that finishes fourth in the pool is immediately knocked out of medal contention.
          </p>
        </section>

        {/* Men's Fixtures */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Men's Pool C Match Schedule
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#c00030", color: "white" }}>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Date</th>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Time (CET)</th>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Matchup</th>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Venue</th>
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
            Women's Pool C Match Schedule
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#c00030", color: "white" }}>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Date</th>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Time (CET)</th>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Matchup</th>
                  <th style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700" }}>Venue</th>
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
            Pool C Tactical Predictions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>Men's Outlook: Australia Favorites</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                Australia's Kookaburras (led by drag-flicker Blake Govers) should top Pool C comfortably. The battle for second will be intense between Spain and Ireland. Spain holds the edge in offensive transition, but Ireland's defensive grit under goalkeeper David Harte makes them tough to break.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>Women's Outlook: Belgium's Home Advantage</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                Belgium's Red Panthers are primed to win Pool C at home. New Zealand represents a major obstacle, but the Belgian crowd at Wavre will carry the team through. Expect Belgium to top, with Spain and New Zealand fighting for the crossover seeds.
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
