import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Australia vs Spain Hockey World Cup 2026 Match Preview",
  description: "Preview the Australia vs Spain men's match at HWC 2026. Check head-to-head records, squad lineups, match timings, and predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/australia-vs-spain",
  },
  openGraph: {
    title: "Australia vs Spain Hockey World Cup 2026 Match Preview",
    description: "Preview the Australia vs Spain men's match at HWC 2026. Check head-to-head records, squad lineups, match timings, and predictions.",
    url: "https://hockeyworldcup2026schedule.com/matches/australia-vs-spain",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Australia vs Spain Hockey World Cup 2026 Match Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Australia vs Spain Hockey World Cup 2026 Match Preview",
    description: "Preview the Australia vs Spain men's match at HWC 2026. Check head-to-head records, squad lineups, match timings, and predictions.",
    images: ["/og-image.jpg"],
  },
};

export default function MatchPreviewPage() {
  const faqItems = [
    {
      "q": "What is the head-to-head record between Australia and Spain?",
      "a": "Australia holds a strong historical advantage. In their most recent Pro League matchups in February 2026 in Hobart, Australia defeated Spain 3-1 and 3-0."
    },
    {
      "q": "Have Australia and Spain met in an Olympic final?",
      "a": "While they have played each other in multiple Olympic pools and knockout rounds (including a classic semifinal in 1996), they have not met in a gold medal match recently."
    },
    {
      "q": "Where can I watch match highlights for Australia vs. Spain?",
      "a": "Match highlights are available on the FIH YouTube channel and digital stream recordings on Watch.Hockey."
    },
    {
      "q": "What is the current FIH world ranking of both teams?",
      "a": "Australia is ranked inside the top 5 globally, while Spain sits comfortably inside the top 8, regularly contesting knockout stages."
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
                  { "@type": "ListItem", "position": 3, "name": "Australia vs Spain Guide", "item": "https://hockeyworldcup2026schedule.com/matches/australia-vs-spain" }
                ]
              },
              {
                "@type": "SportsEvent",
                "name": "Australia vs Spain (Men) - FIH Hockey World Cup 2026",
                "startDate": "2026-08-18T14:30:00+02:00",
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
          <h1 className="hero-title">Australia vs Spain Hockey World Cup 2026 Pre-Match Guide</h1>
          <p className="hero-description">
            Your detailed tactical guide to the massive Australia vs Spain (Men) showdown at the 2026 Hockey World Cup. Get timings, head-to-head records, predictions, and streaming channels.
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Australia vs Spain</span>
        </nav>

        {/* 2. Date, Time & Venue Block */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginBottom: "3rem" }}>
          {[
            { icon: "📅", label: "Date & Timing", value: "August 18, 2026 - 14:30 CET" },
            { icon: "🕒", label: "Local Kickoff Times", value: "14:30 CET (Belgium) / 22:30 AEST (Australia)" },
            { icon: "🏟️", label: "Stadium & Venue", value: "Belfius Hockey Arena, Wavre (BEL)" },
            { icon: "📺", label: "Official Broadcast", value: "Fox Sports, Kayo, RTVE, Watch.Hockey" }
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
            Australia face Spain in a highly anticipated Pool C matchup on August 18, 2026, at the Belfius Hockey Arena in Wavre. This fixture is expected to decide the pool winner, as both teams are top contenders. Australia plays a physical, high-pressing game, while Spain relies on technical midfield transition and speed.
          </p>
        </section>

        {/* 4. Team Form */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Team Form
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🇦🇺 Australia (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['W', 'W', 'L', 'W', 'W'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The Kookaburras are in rich form, highlighted by their solid Pro League victories over Spain in Hobart (3-1 and 3-0) in February 2026.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🇪🇸 Spain (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['L', 'L', 'W', 'L', 'W'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The Red Sticks are highly structured but have shown vulnerability under high-pressure presses, seeking to tighten their defense inside the 23-meter line.
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
            Australia has maintained a strong record against Spain in major international competitions, though Spain is capable of pulling off major upsets:
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
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>February 23, 2026</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>FIH Pro League</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>Australia won 3 - 0</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>February 20, 2026</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>FIH Pro League</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>Australia won 3 - 1</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>February 8, 2025</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>FIH Pro League</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>Draw 1 - 1 (Spain won 3-0 SO)</td>
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
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🇦🇺 Blake Govers (Australia)</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                Australia's premier drag-flicker. Govers is incredibly lethal from set-pieces, and his physical presence inside the circle remains a key focus for Spain's defense.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🇪🇸 Alvaro Iglesias (Spain)</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                Spain's experienced striker and captain. Iglesias's tactical runs and clinical finishing are crucial to converting Spain's counter-attacking entries.
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
            Australia will look to run a high-tempo press, seeking to force turnovers in the middle third and transition quickly. Their forward line focuses on physical circle entries to draw defensive fouls and win penalty corners.
          </p>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>
            Spain will rely on a structured defensive block, trying to absorb the Australian press and utilize their midfield speed for counter-attacks. Limiting penalty corners is Spain's primary defensive challenge.
          </p>
        </section>

        {/* 8. Pool Impact */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Pool Impact & Standings Implications
          </h2>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>
            In Pool C (featuring Australia, Spain, Belgium, and France), this matchup holds significant weight. The winner is highly likely to secure a direct spot in the Quarter-Finals, bypassing the playoff rounds. The loser will likely finish 2nd, requiring a crossover playoff match to stay alive.
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
            Given Australia's depth, experience, and dominant recent victories over Spain in Hobart (3-1 and 3-0), they enter the contest as strong favorites. Spain has the tools to make it close, but the Kookaburras' physical pressure should secure the win.
            <br /><br />
            <strong>Predicted Score:</strong> Australia 4 - 2 Spain
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
            <a href="/pool-c" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>📈 Pool C Standings</span>
              <span>→</span>
            </a>
            <a href="/schedule" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>📅 Complete Match Schedule</span>
              <span>→</span>
            </a>
            <a href="/venues/belfius-arena-guide" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🏟️ Belfius Arena Visitor Guide</span>
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
