import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Netherlands vs Australia Women Hockey World Cup 2026",
  description: "Preview the marquee Netherlands vs Australia Women match at HWC 2026. Check head-to-head records, squad sheets, match timings, and predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/netherlands-vs-australia-women",
  },
  openGraph: {
    title: "Netherlands vs Australia Women Hockey World Cup 2026",
    description: "Preview the marquee Netherlands vs Australia Women match at HWC 2026. Check head-to-head records, squad sheets, match timings, and predictions.",
    url: "https://hockeyworldcup2026schedule.com/matches/netherlands-vs-australia-women",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Netherlands vs Australia Women Hockey World Cup 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netherlands vs Australia Women Hockey World Cup 2026",
    description: "Preview the marquee Netherlands vs Australia Women match at HWC 2026. Check head-to-head records, squad sheets, match timings, and predictions.",
    images: ["/og-image.jpg"],
  },
};

export default function MatchPreviewPage() {
  const faqItems = [
    {
      "q": "What is the historical significance of the Netherlands vs. Australia rivalry?",
      "a": "The Netherlands and Australia are the two most successful teams in the history of women's field hockey. Their rivalry features a clash of styles: the technical precision of the Dutch versus the physical intensity and high work rate of the Australian Hockeyroos."
    },
    {
      "q": "What is their head-to-head record in recent years?",
      "a": "The Netherlands has maintained a dominant edge. Recent Pro League results in June 2026 include a 6-0 win for the Netherlands and a 1-1 draw (where the Dutch won 3-1 in a penalty shootout)."
    },
    {
      "q": "When is the next Netherlands vs. Australia match?",
      "a": "The teams are scheduled to face each other on August 17, 2026, at 15:00 CET during the FIH Hockey World Cup, held at the Wagener Stadium in Amstelveen, Netherlands."
    },
    {
      "q": "Where can I watch matches between the Netherlands and Australia?",
      "a": "Matches are broadcast live on NOS in the Netherlands, Fox Sports and Kayo in Australia, and internationally on the official FIH platform Watch.Hockey."
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
                  { "@type": "ListItem", "position": 3, "name": "Netherlands vs Australia Women", "item": "https://hockeyworldcup2026schedule.com/matches/netherlands-vs-australia-women" }
                ]
              },
              {
                "@type": "SportsEvent",
                "name": "Netherlands vs Australia (Women) - FIH Hockey World Cup 2026",
                "startDate": "2026-08-17T15:00:00+02:00",
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
          <h1 className="hero-title">Netherlands vs Australia Women World Cup 2026 Pre-Match Guide</h1>
          <p className="hero-description">
            Your detailed tactical guide to the massive Netherlands vs Australia (Women) showdown at the 2026 Hockey World Cup. Get timings, head-to-head records, predictions, and streaming channels.
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Netherlands vs Australia Women</span>
        </nav>

        {/* 2. Date, Time & Venue Block */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginBottom: "3rem" }}>
          {[
            { icon: "📅", label: "Date & Timing", value: "August 17, 2026 - 15:00 CET" },
            { icon: "🕒", label: "Local Kickoff Times", value: "15:00 CET (Netherlands) / 23:00 AEST (Australia)" },
            { icon: "🏟️", label: "Stadium & Venue", value: "Wagener Stadium, Amstelveen (NED)" },
            { icon: "📺", label: "Official Broadcast", value: "NOS, Fox Sports, Kayo, Watch.Hockey" }
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
            One of the classic rivalries in women's field hockey resumes on August 17, 2026, as co-hosts Netherlands face Australia at the Wagener Stadium. Both teams enter the match aiming to secure the top spot in Pool A. The Netherlands will have the support of a passionate home crowd, while the Hockeyroos rely on their physical conditioning and structured defensive organization to disrupt the Dutch attacking rhythm.
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
                {['W', 'W', 'W', 'W', 'W'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: '#22c55e', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The Dutch women are in peerless form, dominating the recent FIH Pro League standings and recording clinical multi-goal wins against top international sides.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🇦🇺 Australia (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['L', 'L', 'W', 'W', 'L'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The Hockeyroos show steady, structured performances but have struggled against high-pressing setups, seeking to fine-tune their transition speed.
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
            The Netherlands women's national team has held a distinct competitive advantage over Australia in recent years, including key Pro League fixtures:
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
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>Netherlands won 1 - 1 (3-1 SO)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>June 24, 2026</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>FIH Pro League</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>Netherlands won 6 - 0</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>July 2022</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>World Cup Semi-Final</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>Netherlands won 1 - 0</td>
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
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🇳🇱 Yibbi Jansen (Netherlands)</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The premier Dutch drag-flicker and corner specialist. Jansen's precision on set-pieces gives the Dutch a highly efficient attacking option.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🇦🇺 Jane Claxton (Australia)</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The veteran midfielder leads the Hockeyroos with her physical presence and high work rate, serving as the link between defense and attack.
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
            The Netherlands focuses on maintaining high possession rates, utilizing wing progressions to enter the circle and draw defensive fouls. Their high press is structured to immediately choke opponent buildup play.
          </p>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>
            Australia must maintain extreme defensive discipline for all 60 minutes. The Hockeyroos will look to absorb the Dutch press and use vertical transition speeds to attack on the counter. Limiting the number of penalty corners conceded to Jansen is a high tactical priority for the Australian backline.
          </p>
        </section>

        {/* 8. Pool Impact */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Pool Impact & Standings Implications
          </h2>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>
            Pool A features the Netherlands, Australia, Germany, and Spain. The team finishing 1st progresses directly to the Quarter-Finals, avoiding the playoff round. A win here is critical to secure the top seed, as the runner-up faces a tough crossover tie against a qualifier from Pool D.
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
            Given the home turf advantage and their dominant head-to-head record (including a 6-0 Pro League win in June 2026), the Netherlands enter as clear favorites. Australia has the defensive structure to make it close, but the Dutch clinical execution should secure the win.
            <br /><br />
            <strong>Predicted Score:</strong> Netherlands 3 - 1 Australia
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
            <a href="/pool-a" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>📈 Pool A Standings</span>
              <span>→</span>
            </a>
            <a href="/schedule" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>📅 Complete Match Schedule</span>
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
