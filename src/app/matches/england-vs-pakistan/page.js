import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "England vs Pakistan Hockey World Cup 2026 Match Preview",
  description: "Complete preview of the England vs Pakistan men's match at HWC 2026. Get live stream details, match timings, starting lineups, and predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/england-vs-pakistan",
  },
  openGraph: {
    title: "England vs Pakistan Hockey World Cup 2026 Match Preview",
    description: "Complete preview of the England vs Pakistan men's match at HWC 2026. Get live stream details, match timings, starting lineups, and predictions.",
    url: "https://hockeyworldcup2026schedule.com/matches/england-vs-pakistan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "England vs Pakistan Hockey World Cup 2026 Match Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "England vs Pakistan Hockey World Cup 2026 Match Preview",
    description: "Complete preview of the England vs Pakistan men's match at HWC 2026. Get live stream details, match timings, starting lineups, and predictions.",
    images: ["/og-image.jpg"],
  },
};

export default function MatchPreviewPage() {
  const faqItems = [
    {
      "q": "What is the recent head-to-head record between England and Pakistan in men's hockey?",
      "a": "England has dominated recent 2026 encounters, defeating Pakistan 7-0 and 2-1 in the FIH Pro League in June, and 4-1 in the World Cup Qualifiers Final in Egypt in March."
    },
    {
      "q": "Did Pakistan qualify for the FIH Hockey World Cup 2026?",
      "a": "Yes, despite losing the qualifiers final 4-1 to England, Pakistan successfully secured their ticket to the 2026 World Cup by reaching the semi-finals of the qualifying event in Egypt."
    },
    {
      "q": "When and where is the England vs. Pakistan World Cup match?",
      "a": "The teams face each other in their opening Pool D campaign on Saturday, August 15, 2026, at the Wagener Hockey Stadium in Amstelveen, Netherlands."
    },
    {
      "q": "Where can I watch the England vs. Pakistan match live?",
      "a": "The match will air live on TNT Sports in the UK, PTV Sports in Pakistan, and stream internationally on the Watch.Hockey platform."
    },
    {
      "q": "What time does the England vs Pakistan match start?",
      "a": "The match kicks off at 16:30 local time (CET) in Amstelveen, which is 19:30 PKT in Pakistan, 20:00 IST in India, and 10:30 EST in the USA."
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
                  { "@type": "ListItem", "position": 3, "name": "England vs Pakistan Guide", "item": "https://hockeyworldcup2026schedule.com/matches/england-vs-pakistan" }
                ]
              },
              {
                "@type": "SportsEvent",
                "name": "England vs Pakistan (Men) - FIH Hockey World Cup 2026",
                "startDate": "2026-08-15T16:00:00+02:00",
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
          <h1 className="hero-title">England vs Pakistan Hockey World Cup 2026 Pre-Match Guide</h1>
          <p className="hero-description">
            Your detailed tactical guide to the massive England vs Pakistan (Men) showdown at the 2026 Hockey World Cup. Get timings, head-to-head records, predictions, and streaming channels.
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>England vs Pakistan</span>
        </nav>

        {/* 2. Date, Time & Venue Block */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginBottom: "3rem" }}>
          {[
            { icon: "📅", label: "Date & Timing", value: "August 15, 2026 - 16:00 CET" },
            { icon: "🕒", label: "Local Kickoff Times", value: "16:00 CET (Netherlands) / 19:30 PST (Pakistan)" },
            { icon: "🏟️", label: "Stadium & Venue", value: "Wagener Stadium, Amstelveen (NED)" },
            { icon: "📺", label: "Official Broadcast", value: "TNT Sports, PTV Sports, Watch.Hockey" }
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
            England and Pakistan resume their international rivalry on August 15, 2026, at the Wagener Stadium in Amstelveen. This opening Pool D fixture matches England's structured, set-piece heavy tactical organization against Pakistan's vertical transition speed and counter-attacking prowess. Both teams are looking to secure three points early.
          </p>
        </section>

        {/* 4. Team Form */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Team Form
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 England (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['W', 'W', 'W', 'L', 'W'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                England enters in excellent form, having registered consecutive wins in the Pro League (7-0 and 2-1) in June 2026, showcasing high tactical discipline.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🇵🇰 Pakistan (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['L', 'L', 'L', 'W', 'L'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                Pakistan has struggled with consistency in the Pro League but remains dangerous in tournament play, boasting a fast, young attacking forward line.
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
            England holds a distinct advantage in recent head-to-head fixtures during the 2026 campaign, winning qualifiers and Pro League encounters:
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
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>June 27, 2026</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>FIH Pro League</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>England won 7 - 0</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>June 24, 2026</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>FIH Pro League</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>England won 2 - 1</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>March 7, 2026</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>World Cup Qualifiers (Final)</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>England won 4 - 1</td>
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
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 Phil Roper (England)</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                Roper's tactical awareness in midfield and clinical circles entries make him a key playmaker. His ability to draw defenders and deliver quick passes is vital.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🇵🇰 Hannan Shahid (Pakistan)</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The young forward has been the shining light in Pakistan's attack. His explosive speed and high-dribble rates make him a constant threat on counter-transitions.
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
            England will look to control the tempo through a structured mid-court press, seeking to win possession in the middle third. Their offensive pattern relies on overlapping wing progressions to isolate defenders and draw set-pieces.
          </p>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>
            Pakistan must maintain defensive discipline in the final quarter, an area where they have historically conceded late goals. They will look to absorb the English press and utilize the speed of Hannan Shahid to attack on the counter.
          </p>
        </section>

        {/* 8. Pool Impact */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Pool Impact & Standings Implications
          </h2>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>
            In Pool D (featuring England, Pakistan, India, and Wales), securing an opening day victory is essential. With India also in the group, the winner will put themselves in a prime position to challenge for the top seed. The loser will face high pressure to qualify via the crossovers.
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
            England enter as favorites given their dominant 2026 record, including the 7-0 Pro League win in June. However, Pakistan is capable of playing high-intensity tournament hockey. We expect a hard-fought match that England should win.
            <br /><br />
            <strong>Predicted Score:</strong> England 3 - 1 Pakistan
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
            <a href="/hockey-world-cup-2026-schedule-england" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🏴󠁧󠁢󠁥󠁮󠁧󠁿 England Schedule Hub</span>
              <span>→</span>
            </a>
            <a href="/hockey-world-cup-2026-schedule-pakistan" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🇵🇰 Pakistan Schedule Hub</span>
              <span>→</span>
            </a>
            <a href="/h2h" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>⚔️ Head-to-Head Records</span>
              <span>→</span>
            </a>
            <a href="/pool-d" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>📈 Pool D Standings</span>
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
