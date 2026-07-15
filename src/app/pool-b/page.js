import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Hockey World Cup 2026 Pool B: Standings & Matches",
  description: "Get the complete Pool B standings and match fixtures for the 2026 FIH Hockey World Cup. Track teams, rankings, results, and expert predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/pool-b",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Pool B: Standings & Matches",
    description: "Get the complete Pool B standings and match fixtures for the 2026 FIH Hockey World Cup. Track teams, rankings, results, and expert predictions.",
    url: "https://hockeyworldcup2026schedule.com/pool-b",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Pool B: Standings & Matches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Pool B: Standings & Matches",
    description: "Get the complete Pool B standings and match fixtures for the 2026 FIH Hockey World Cup. Track teams, rankings, results, and expert predictions.",
    images: ["/og-image.jpg"],
  },
};

const getFixtureLink = (matchText) => {
  const text = matchText.toLowerCase();
  if (text.includes("india") && text.includes("pakistan")) return "/matches/india-vs-pakistan";
  if (text.includes("germany") && text.includes("belgium")) return "/matches/germany-vs-belgium";
  if (text.includes("netherlands") && text.includes("australia") && text.includes("women")) return "/matches/netherlands-vs-australia-women";
  if (text.includes("australia") && text.includes("netherlands") && text.includes("women")) return "/matches/netherlands-vs-australia-women";
  if (text.includes("india") && text.includes("england") && !text.includes("women")) return "/matches/india-vs-england";
  if (text.includes("netherlands") && text.includes("argentina") && !text.includes("women")) return "/matches/netherlands-vs-argentina";
  if (text.includes("argentina") && text.includes("netherlands") && !text.includes("women")) return "/matches/netherlands-vs-argentina";
  if (text.includes("australia") && text.includes("spain") && !text.includes("women")) return "/matches/australia-vs-spain";
  if (text.includes("spain") && text.includes("australia") && !text.includes("women")) return "/matches/australia-vs-spain";
  if (text.includes("belgium") && text.includes("france") && !text.includes("women")) return "/matches/belgium-vs-france";
  if (text.includes("england") && text.includes("pakistan") && !text.includes("women")) return "/matches/england-vs-pakistan";
  if (text.includes("india") && text.includes("england") && text.includes("women")) return "/matches/india-vs-england-women";
  if (text.includes("netherlands") && text.includes("germany") && text.includes("women")) return "/matches/netherlands-vs-germany-women";
  return null;
};

export default function PoolBPage() {
  const menFixtures = [
    { date: "August 15, 2026", time: "11:30 CET", match: "Germany 🇩🇪 vs Malaysia 🇲🇾", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 15, 2026", time: "17:30 CET", match: "Belgium 🇧🇪 vs France 🇫🇷", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 17, 2026", time: "11:00 CET", match: "France 🇫🇷 vs Malaysia 🇲🇾", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 17, 2026", time: "17:00 CET", match: "Germany 🇩🇪 vs Belgium 🇧🇪", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 19, 2026", time: "14:30 CET", match: "France 🇫🇷 vs Germany 🇩🇪", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 19, 2026", time: "17:30 CET", match: "Belgium 🇧🇪 vs Malaysia 🇲🇾", venue: "Belfius Hockey Arena, Wavre" }
  ];

  const womenFixtures = [
    { date: "August 15, 2026", time: "08:30 CET", match: "Germany 🇩🇪 vs Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 15, 2026", time: "14:30 CET", match: "Argentina 🇦🇷 vs United States 🇺🇸", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 17, 2026", time: "08:00 CET", match: "United States 🇺🇸 vs Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 17, 2026", time: "14:00 CET", match: "Germany 🇩🇪 vs Argentina 🇦🇷", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 19, 2026", time: "08:00 CET", match: "Argentina 🇦🇷 vs Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿", venue: "Belfius Hockey Arena, Wavre" },
    { date: "August 19, 2026", time: "11:00 CET", match: "United States 🇺🇸 vs Germany 🇩🇪", venue: "Belfius Hockey Arena, Wavre" }
  ];

  const faqItems = [
    { question: "Where are Pool B matches being played?", answer: "All Pool B group matches will take place at the Belfius Hockey Arena in Wavre, Belgium." },
    { question: "What is the key match to watch in Pool B?", answer: "The Men's matchup between Germany (2023 World Champions) and Belgium (Hosts & 2018 Champions) on August 17 is a massive rematch of the 2023 World Cup Final and will likely decide who tops the pool." },
    { question: "How does qualification work for Pool B?", answer: "The top team in Pool B will advance directly to the Quarter-Finals. The 2nd and 3rd placed teams enter the crossover playoff stage, while the 4th placed team is eliminated." }
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
                  { "@type": "ListItem", "position": 2, "name": "Pool B Standings", "item": "https://hockeyworldcup2026schedule.com/pool-b" }
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
          <h1 className="hero-title">Hockey World Cup 2026 Pool B Standings & Matches</h1>
          <p className="hero-description">
            Complete schedule fixtures, team standings, and tactical match predictions for Pool B at the 2026 FIH Hockey World Cup in Wavre, Belgium.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Analyst: <strong>Jean-Pierre Dubois (Belgian Hockey Analyst)</strong>
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Pool B Details</span>
        </nav>

        {/* Pool B Overview */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Pool B: Battle of the Giants
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Pool B is undoubtedly one of the most exciting groups in the tournament. In the <strong>Men's side</strong>, it features a heavy European battle with <strong><a href="/hockey-world-cup-2026-schedule-belgium" style={{ color: "var(--primary)", textDecoration: "underline", fontWeight: "600" }}>Belgium</a></strong> (co-hosts) and <strong><a href="/hockey-world-cup-2026-schedule-germany" style={{ color: "var(--text-main)", textDecoration: "underline" }}>Germany</a></strong> (reigning champions), alongside the highly unpredictable <strong><a href="/hockey-world-cup-2026-schedule-malaysia" style={{ color: "var(--text-main)", textDecoration: "underline" }}>Malaysia</a></strong> and <strong><a href="/hockey-world-cup-2026-schedule-france" style={{ color: "var(--text-main)", textDecoration: "underline" }}>France</a></strong>.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            In the <strong>Women's side</strong>, the pool brings together <strong><a href="/hockey-world-cup-2026-schedule-germany" style={{ color: "var(--text-main)", textDecoration: "underline" }}>Germany</a></strong>, the legendary <strong><a href="/hockey-world-cup-2026-schedule-argentina" style={{ color: "var(--text-main)", textDecoration: "underline" }}>Argentina</a></strong>, the United States, and Scotland. These matches will test the depth and set-piece efficiency of the squads at the <strong><a href="/venues/belfius-arena-guide" style={{ color: "var(--text-main)", textDecoration: "underline" }}>Belfius Hockey Arena</a></strong> in Wavre.
          </p>
        </section>

        {/* Qualification Scenarios */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "0.8rem" }}>
            📈 Pool B Qualification Scenarios
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
            Securing the top spot in Pool B is vital. The pool winner gains direct access to the Quarter-Finals, earning valuable rest days. The runner-up and third-place teams must survive a stressful crossover match against teams from Pool C. The bottom team is eliminated immediately, heading to the lower-bracket placement matches.
          </p>
        </section>

        {/* Men's Fixtures */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Men's Pool B Match Schedule
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
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>
                      {getFixtureLink(m.match) ? (
                        <a href={getFixtureLink(m.match)} style={{ color: "#ef4444", textDecoration: "underline", fontWeight: "700" }}>
                          {m.match}
                        </a>
                      ) : (
                        m.match
                      )}
                    </td>
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
            Women's Pool B Match Schedule
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
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>
                      {getFixtureLink(m.match) ? (
                        <a href={getFixtureLink(m.match)} style={{ color: "#ef4444", textDecoration: "underline", fontWeight: "700" }}>
                          {m.match}
                        </a>
                      ) : (
                        m.match
                      )}
                    </td>
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
            Pool B Tactical Predictions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>Men's Outlook: Germany vs Belgium</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                This is a toss-up between two of the world's best. Belgium's home advantage at the Belfius Hockey Arena is massive, but Germany's mental toughness in major tournaments makes them incredibly hard to beat. Expect a tight draw or a one-goal margin match on August 17 to decide the pool winner.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>Women's Outlook: Argentina in Control?</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                Argentina's Las Leonas possess too much attacking flair for the rest of Pool B. However, Germany's disciplined defensive block and penalty corners from Nike Lorenz will challenge them. Expect Argentina to finish first, followed closely by Germany.
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
