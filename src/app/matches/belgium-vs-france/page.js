import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Belgium vs France Hockey World Cup 2026 Match Preview",
  description: "Co-hosts Belgium face France in their HWC 2026 opening match. Get detailed match previews, head-to-head records, timings, and predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/belgium-vs-france",
  },
  openGraph: {
    title: "Belgium vs France Hockey World Cup 2026 Match Preview",
    description: "Co-hosts Belgium face France in their HWC 2026 opening match. Get detailed match previews, head-to-head records, timings, and predictions.",
    url: "https://hockeyworldcup2026schedule.com/matches/belgium-vs-france",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Belgium vs France Hockey World Cup 2026 Match Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belgium vs France Hockey World Cup 2026 Match Preview",
    description: "Co-hosts Belgium face France in their HWC 2026 opening match. Get detailed match previews, head-to-head records, timings, and predictions.",
    images: ["/og-image.jpg"],
  },
};

export default function MatchPreviewPage() {
  const faqItems = [
    {
      "q": "What is the head-to-head record between Belgium and France in men's hockey?",
      "a": "Belgium holds a dominant record against France in international matches, including a 3-1 and 2-1 victory in their latest Pro League encounters, and a 5-0 win in their recent test matches."
    },
    {
      "q": "When is the next Belgium vs. France hockey match?",
      "a": "Their next official match is confirmed for the opening matchday of the FIH Hockey World Cup on August 15, 2026, at 17:30 CET, hosted at the Belfius Hockey Arena in Wavre, Belgium."
    },
    {
      "q": "Where can I watch Belgium vs. France hockey live?",
      "a": "The match will air live on RTBF and VRT in Belgium, L'Equipe in France, and stream internationally on EuroHockey TV or Watch.Hockey."
    },
    {
      "q": "Have France and Belgium played each other in the Hockey World Cup?",
      "a": "Yes, they have faced each other in previous World Cup cycles, with Belgium's Red Lions consistently holding the upper hand in official tournaments."
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
                  { "@type": "ListItem", "position": 3, "name": "Belgium vs France Guide", "item": "https://hockeyworldcup2026schedule.com/matches/belgium-vs-france" }
                ]
              },
              {
                "@type": "SportsEvent",
                "name": "Belgium vs France (Men) - FIH Hockey World Cup 2026",
                "startDate": "2026-08-15T17:30:00+02:00",
                "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
                "eventStatus": "https://schema.org/EventScheduled",
                "location": {
                  "@type": "Place",
                  "name": "Belfius Hockey Arena, Wavre",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Wavre",
                    "addressCountry": "BE"
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
          <h1 className="hero-title">Belgium vs France Hockey World Cup 2026 Pre-Match Guide</h1>
          <p className="hero-description">
            Your detailed tactical guide to the massive Belgium vs France (Men) showdown at the 2026 Hockey World Cup. Get timings, head-to-head records, predictions, and streaming channels.
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Belgium vs France</span>
        </nav>

        {/* 2. Date, Time & Venue Block */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginBottom: "3rem" }}>
          {[
            { icon: "📅", label: "Date & Timing", value: "August 15, 2026 - 17:30 CET" },
            { icon: "🕒", label: "Local Kickoff Times", value: "17:30 CET (Belgium / France) / 21:00 IST (India)" },
            { icon: "🏟️", label: "Stadium & Venue", value: "Belfius Hockey Arena, Wavre (BEL)" },
            { icon: "📺", label: "Official Broadcast", value: "RTBF, VRT, L'Equipe, Watch.Hockey" }
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
            The opening match of the 2026 Hockey World Cup for co-hosts Belgium takes place on August 15, 2026, against neighbors France. Playing in Wavre at the brand-new Belfius Hockey Arena, the Red Lions will seek to secure a victory in front of their home crowd. France enters the tournament with a growing reputation, aiming to challenge their highly decorated neighbors.
          </p>
        </section>

        {/* 4. Team Form */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Team Form
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🇧🇪 Belgium (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['W', 'W', 'W', 'W', 'L'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                Belgium is in spectacular form, being crowned the 2025–26 FIH Pro League Champions in June 2026. Their depth and experienced core make them top contenders.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🇫🇷 France (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['W', 'L', 'W', 'L', 'W'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                France is showing steady growth under Victor Charlet, having finished a respectable 4th in the EuroHockey Championship 2025 (ahead of Belgium in 5th).
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
            While France defeated Belgium in the EuroHockey 2025 standings, Belgium has dominated head-to-head matches in the Pro League and official test series:
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
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>May 29, 2022</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>FIH Pro League</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>Belgium won 3 - 1</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>May 28, 2022</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>FIH Pro League</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>Belgium won 2 - 1</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>April 2021</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>International Test</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>Belgium won 5 - 0</td>
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
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🇧🇪 Arthur Van Doren (Belgium)</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The veteran defender serves as the heartbeat of the Red Lions' build-up play. His interceptive skills and distribution are unmatched globally.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🇫🇷 Victor Charlet (France)</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                France's captain and premier drag-flicker. Charlet's penalty corner execution is France's primary scoring threat, and his leadership organizes the French defense.
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
            Belgium will seek to dominate the midfield channels, utilizing Arthur Van Doren and Victor Wegnez to run patient possession circles. The Red Lions' main objective is to stretch France's backline early and win early penalty corners.
          </p>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>
            France will look to run a compact, low defensive block. They will try to frustrate Belgium's build-up and capitalize on counter-pressing opportunities. Preventing Charlet from conceding cards is a high priority, as Belgium is highly structured at exploiting player advantages.
          </p>
        </section>

        {/* 8. Pool Impact */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Pool Impact & Standings Implications
          </h2>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>
            In Pool B (featuring Belgium, Germany, France, and Chile), securing points in the opening matchup is critical. The winner will put themselves in a prime position to challenge Germany for the direct Quarter-Final spot. The loser will likely have to navigate the crossover playoff matches.
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
            While France has shown significant progress in recent tournaments (including EuroHockey 2025), Belgium's experience, home turf advantage in Wavre, and their Pro League Championship run in June 2026 make them heavy favorites. We predict a comfortable win for the Red Lions.
            <br /><br />
            <strong>Predicted Score:</strong> Belgium 4 - 1 France
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
            <a href="/hockey-world-cup-2026-schedule-belgium" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🇧🇪 Belgium Schedule Hub</span>
              <span>→</span>
            </a>
            <a href="/hockey-world-cup-2026-schedule-france" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🇫🇷 France Schedule Hub</span>
              <span>→</span>
            </a>
            <a href="/h2h" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>⚔️ Head-to-Head Records</span>
              <span>→</span>
            </a>
            <a href="/pool-b" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>📈 Pool B Standings</span>
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
            <a href="/venues/belfius-arena-guide" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🏟️ Belfius Hockey Arena Guide</span>
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
