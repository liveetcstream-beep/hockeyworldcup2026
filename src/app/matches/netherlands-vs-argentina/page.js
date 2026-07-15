import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Netherlands vs Argentina Hockey World Cup 2026 Preview",
  description: "Detailed preview of Netherlands vs Argentina men's match at HWC 2026. Find head-to-head statistics, player analysis, timings, and predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/netherlands-vs-argentina",
  },
  openGraph: {
    title: "Netherlands vs Argentina Hockey World Cup 2026 Preview",
    description: "Detailed preview of Netherlands vs Argentina men's match at HWC 2026. Find head-to-head statistics, player analysis, timings, and predictions.",
    url: "https://hockeyworldcup2026schedule.com/matches/netherlands-vs-argentina",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Netherlands vs Argentina Hockey World Cup 2026 Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netherlands vs Argentina Hockey World Cup 2026 Preview",
    description: "Detailed preview of Netherlands vs Argentina men's match at HWC 2026. Find head-to-head statistics, player analysis, timings, and predictions.",
    images: ["/og-image.jpg"],
  },
};

export default function MatchPreviewPage() {
  const faqItems = [
    {
      "q": "What is the head-to-head record between the Netherlands and Argentina in men's hockey?",
      "a": "Historically, the Netherlands leads the World Cup head-to-head with 6 wins in 8 matches. However, recent Pro League matchups are highly competitive, with Argentina winning 3-2 and drawing 1-1 in December 2025."
    },
    {
      "q": "Where can I find live scores and results for Netherlands vs Argentina men's hockey matches?",
      "a": "Official live scores and reports are provided on the FIH website (Watch.Hockey) and real-time trackers like Flashscore or AiScore."
    },
    {
      "q": "What are some notable recent matches between the two teams?",
      "a": "Notable recent games include the December 2025 double-header in Santiago del Estero, where Argentina won 3-2 and drew 1-1 (winning the shootout 4-2)."
    },
    {
      "q": "Have the Netherlands and Argentina played each other in the Olympics?",
      "a": "Yes, they have met in multiple Olympic tournaments dating back to 1968, though their modern rivalry is mostly structured around annual FIH Pro League matches."
    }
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
                  { "@type": "ListItem", "position": 2, "name": "Matches", "item": "https://hockeyworldcup2026schedule.com/matches" },
                  { "@type": "ListItem", "position": 3, "name": "Netherlands vs Argentina Guide", "item": "https://hockeyworldcup2026schedule.com/matches/netherlands-vs-argentina" }
                ]
              },
              {
                "@type": "SportsEvent",
                "name": "Netherlands vs Argentina (Men) - FIH Hockey World Cup 2026",
                "startDate": "2026-08-18T17:00:00+02:00",
                "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
                "eventStatus": "https://schema.org/EventScheduled",
                "location": {
                  "@type": "Place",
                  "name": "Wagener Stadium, Amstelveen",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Amstelveen",
                    "addressCountry": "NL"
                  }
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                  "@type": "Question",
                  "name": item.question || item.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer || item.a
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
          <p className="hero-subtitle">🏑 Blockbuster Match Previews</p>
          <h1 className="hero-title">Netherlands vs Argentina Hockey World Cup 2026 Pre-Match Guide</h1>
          <p className="hero-description">
            Your detailed tactical guide to the massive Netherlands vs Argentina (Men) showdown at the 2026 Hockey World Cup. Get timings, head-to-head records, predictions, and streaming channels.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Analyst: <strong>Marc Devos (Senior Hockey Journalist)</strong>
            </div>
            <div className="eeat-badge">
              ⚡ Status: <strong>Fixtures Confirmed</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* 1. Breadcrumbs */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Hockey World Cup 2026 Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <a href="/schedule" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Schedule</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Netherlands vs Argentina</span>
        </nav>

        {/* 2. Date, Time & Venue Block */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginBottom: "3rem" }}>
          {[
            { icon: "📅", label: "Date & Timing", value: "August 18, 2026 - 17:00 CET" },
            { icon: "🕒", label: "Local Kickoff Times", value: "17:00 CET (Netherlands) / 12:00 ART (Argentina)" },
            { icon: "🏟️", label: "Stadium & Venue", value: "Wagener Stadium, Amstelveen (NED)" },
            { icon: "📺", label: "Official Broadcast", value: "NOS, ESPN Star+, Watch.Hockey" }
          ].map((stat) => (
            <div key={stat.label} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem", textAlign: "center" }}>
              <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}>{stat.icon}</span>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.05em", display: "block", marginBottom: "0.3rem" }}>{stat.label}</span>
              <strong style={{ color: "var(--text-main)", fontSize: "0.95rem", lineHeight: "1.4", display: "block" }}>{stat.value}</strong>
            </div>
          ))}
        </section>

        {/* 3. Match Overview */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Match Overview
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            The Netherlands face Argentina in a crucial Pool A fixture on August 18, 2026, at the Wagener Stadium in Amstelveen. Both teams are seeking points to secure top placement. Played in front of a passionate Dutch crowd, this matchup highlights contrasting tactical approaches, with the Netherlands looking to press high while Argentina aims to defend deeply.
          </p>
        </section>

        {/* 4. Team Form */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Team Form
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🇳🇱 Netherlands (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['W', 'W', 'L', 'W', 'W'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The Dutch enter this matchup in solid physical shape, though their recent defeats in the Pro League to Argentina show they are vulnerable on transition.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🇦🇷 Argentina (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['W', 'W', 'W', 'L', 'W'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                Los Leones are in rich form, coming off back-to-back positive results against the Netherlands (3-2 win and 1-1 draw) in December 2025.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Head-to-Head Summary */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Head-to-Head Records
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            In recent matchups, Argentina has proved to be a difficult opponent for the Dutch team, including multiple shootout wins in Pro League cycles:
          </p>
          <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "12px", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid var(--border-color)" }}>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--text-main)" }}>Date</th>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--text-main)" }}>Tournament</th>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--text-main)" }}>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>December 13, 2025</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>FIH Pro League</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>Argentina won 3 - 2</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>December 10, 2025</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>FIH Pro League</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>Draw 1 - 1 (Argentina won 4-2 SO)</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>June 2025</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>FIH Pro League</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>Draw 1 - 1 (Netherlands won 3-0 SO)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Key Players */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Key Players to Watch
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🇳🇱 Thierry Brinkman (Netherlands)</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The Dutch captain leads their midfield coordination and attacking transitions. His ability to penetrate the circle is vital to unlocking defensive low-blocks.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🇦🇷 Maico Casella (Argentina)</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                Argentina's key striker. Casella's physical presence inside the 23-meter area and penalty corner efficiency are critical to converting Los Leones' counter-attacks.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Tactical Preview */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Tactical Preview
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            The Netherlands aims to run a high-intensity transition game, utilizing short passes to stretch Argentina's backline. The Dutch wingbacks will look to push high to isolate Argentina's defenders, attempting to create direct entries into the circle.
          </p>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>
            Argentina will employ a disciplined defensive structure, looking to disrupt the Dutch midfield build-up and launch direct counter-attacks through Casella. Keeping card discipline under high defensive pressure is essential for Argentina.
          </p>
        </section>

        {/* 8. Pool Impact */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Pool Impact & Standings Implications
          </h2>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>
            In Pool A (featuring the Netherlands, Argentina, Germany, and Spain), this matchup holds significant weight. The winner will put themselves in a strong position to secure a direct spot in the Quarter-Finals. The loser will likely have to play a crossover playoff match.
          </p>
        </section>

        {/* 9. Prediction (Opinion) */}
        <section style={{ background: "rgba(192,0,48,0.03)", border: "1px solid rgba(192,0,48,0.1)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
            📢 Analyst Opinion & Prediction
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8", marginBottom: "1rem" }}>
            <strong>Note:</strong> The following prediction represents the editorial opinion of our senior hockey analysts and should not be used as official tournament projection.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8", margin: 0 }}>
            While Argentina's recent Pro League double-header (3-2 win and shootout win) proves they have the blueprint to defeat the Dutch, playing in front of a home crowd at Amstelveen favors the Netherlands. We expect a hard-fought, physical match that the Netherlands should win by a narrow margin.
            <br /><br />
            <strong>Predicted Score:</strong> Netherlands 3 - 2 Argentina
          </p>
        </section>

        {/* 10. FAQs */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqItems.map((item, idx) => (
              <div key={idx} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "1.2rem" }}>
                <h4 style={{ color: "var(--text-main)", fontWeight: "700", margin: "0 0 0.5rem 0", fontSize: "1rem" }}>{item.q || item.question}</h4>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>{item.a || item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Related Pages */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Related Pages
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            <a href="/hockey-world-cup-2026-schedule-netherlands" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🇳🇱 Netherlands Schedule Hub</span>
              <span>→</span>
            </a>
            <a href="/hockey-world-cup-2026-schedule-argentina" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🇦🇷 Argentina Schedule Hub</span>
              <span>→</span>
            </a>
            <a href="/h2h" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>⚔️ Head-to-Head Records</span>
              <span>→</span>
            </a>
            <a href="/pool-a" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>📈 Pool A Standings</span>
              <span>→</span>
            </a>
            <a href="/live-scores" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🔴 Live Scoreboard</span>
              <span>→</span>
            </a>
            <a href="/past-results" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>📊 Past HWC Results</span>
              <span>→</span>
            </a>
            <a href="/venues/wagener-stadium-guide" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🏟️ Wagener Stadium Visitor Guide</span>
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
