import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Hockey World Cup 2026 Pool D: Standings, Fixtures & Predictions",
  description: "Get the complete outlook for Pool D (Group of Death) at the 2026 FIH Hockey World Cup. Includes Men's and Women's team standings, live match schedules, and predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/pool-d",
  },
};

export default function PoolDPage() {
  const menFixtures = [
    { date: "August 15, 2026", time: "10:00 CET", match: "India 🇮🇳 vs Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 15, 2026", time: "16:00 CET", match: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs Pakistan 🇵🇰", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 17, 2026", time: "09:30 CET", match: "Pakistan 🇵🇰 vs Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 17, 2026", time: "12:30 CET", match: "India 🇮🇳 vs England 🏴󠁧󠁢󠁥󠁮󠁧󠁿", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 19, 2026", time: "12:30 CET", match: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 19, 2026", time: "14:00 CET", match: "Pakistan 🇵🇰 vs India 🇮🇳", venue: "Wagener Stadium, Amstelveen" }
  ];

  const womenFixtures = [
    { date: "August 16, 2026", time: "07:00 CET", match: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs South Africa 🇿🇦", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 16, 2026", time: "10:00 CET", match: "China 🇨🇳 vs India 🇮🇳", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 18, 2026", time: "09:30 CET", match: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs China 🇨🇳", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 18, 2026", time: "12:00 CET", match: "India 🇮🇳 vs South Africa 🇿🇦", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 20, 2026", time: "06:30 CET", match: "China 🇨🇳 vs South Africa 🇿🇦", venue: "Wagener Stadium, Amstelveen" },
    { date: "August 20, 2026", time: "12:00 CET", match: "India 🇮🇳 vs England 🏴󠁧󠁢󠁥󠁮󠁧󠁿", venue: "Wagener Stadium, Amstelveen" }
  ];

  const faqItems = [
    { question: "Why is Pool D called the 'Group of Death'?", answer: "Pool D in the Men's tournament features traditional Asian hockey giants India and Pakistan, alongside a highly disciplined England squad and a robust Welsh team. With only three qualifying spots and intense historic rivalries, it is the hardest group to predict." },
    { question: "When is the India vs Pakistan Men's match?", answer: "The blockbuster clash between India and Pakistan is scheduled for August 19, 2026, at 14:00 CET at the Wagener Stadium in Amstelveen." },
    { question: "Where are the Pool D matches played?", answer: "All group stage matches for Pool D (both Men's and Women's tournaments) will take place at the Wagener Hockey Stadium in Amstelveen, Netherlands." }
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
                  { "@type": "ListItem", "position": 2, "name": "Pool D Standings", "item": "https://hockeyworldcup2026schedule.com/pool-d" }
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
          <h1 className="hero-title">Hockey World Cup 2026 Pool D Analysis</h1>
          <p className="hero-description">
            Complete fixtures schedule, standings, tactical matchups, and match predictions for the brutal Pool D (Group of Death) at the 2026 Hockey World Cup.
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Pool D Details</span>
        </nav>

        {/* Pool D Overview */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Pool D: The Group of Death
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Pool D is the most highly anticipated group of the 2026 Hockey World Cup. In the <strong>Men's tournament</strong>, it features the ultimate historic rivalry between <strong>India</strong> and <strong>Pakistan</strong>, combined with the structural strength of <strong>England</strong> and the fighting spirit of <strong>Wales</strong>.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            In the <strong>Women's tournament</strong>, the group is equally fierce, featuring the defensive solidity of <strong>England</strong>, a rapidly rising <strong>Indian squad</strong>, a highly disciplined <strong>Chinese team</strong> coached by Alyson Annan, and <strong>South Africa</strong>. Every matchday at Wagener Stadium will have massive implications.
          </p>
        </section>

        {/* Qualification Scenarios */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "0.8rem" }}>
            📈 Pool D Qualification Scenarios
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
            Finishing first is paramount to bypass the crossover stage and head straight to the Quarter-Finals. The 2nd and 3rd placed teams will cross over to play qualifiers from Pool A. The team finishing at the bottom of the pool stands will be immediately knocked out, ending their World Cup campaign.
          </p>
        </section>

        {/* Men's Fixtures */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Men's Pool D Match Schedule
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
            Women's Pool D Match Schedule
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
            Pool D Tactical Predictions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>Men's Outlook: The Ultimate Rivalry</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                India and England will battle closely for the top spot. England's structured defense makes them incredibly tough to play against, but India's flair and drag-flicks from Harmanpreet Singh are major threats. Pakistan is the true dark horse; if their young attackers click, they can easily cause an upset and finish second.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>Women's Outlook: England & India</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                England's defensive consistency under Hollie Pearne-Webb makes them favorites, but the Indian Women's team (captained by Salima Tete) has the speed to unlock them. China, under coach Alyson Annan, is highly disciplined and can surprise both teams. Expect a highly close three-way struggle.
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
