import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "India vs Wales Hockey World Cup 2026 Preview & Prediction",
  description: "Detailed India vs Wales Hockey World Cup 2026 match preview. Access IST kick-off times, head-to-head records, squads, and expert tactical predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/india-vs-wales",
  },
  openGraph: {
    title: "India vs Wales Hockey World Cup 2026 Preview & Prediction",
    description: "Detailed India vs Wales Hockey World Cup 2026 match preview. Access IST kick-off times, head-to-head records, squads, and expert tactical predictions.",
    url: "https://hockeyworldcup2026schedule.com/matches/india-vs-wales",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "India vs Wales Hockey World Cup 2026 Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "India vs Wales Hockey World Cup 2026 Preview & Prediction",
    description: "Detailed India vs Wales Hockey World Cup 2026 match preview. Access IST kick-off times, head-to-head records, squads, and expert tactical predictions.",
    images: ["/og-image.jpg"],
  },
};

export default function IndiaVsWalesPreviewPage() {
  const faqItems = [
    {
      q: "When is the India vs Wales match in the Hockey World Cup 2026?",
      a: "The India vs Wales Men's Pool D match is scheduled for Saturday, August 15, 2026, at 10:00 CET local Dutch time. For fans in India, the match kicks off at 13:30 IST."
    },
    {
      q: "Where is the India vs Wales match being played?",
      a: "The match will be played at the historic Wagener Stadium in Amstelveen, Netherlands, which features a state-of-the-art water-based artificial turf."
    },
    {
      q: "Which TV channel will broadcast India vs Wales in India?",
      a: "Star Sports Network will broadcast the match live on television in India. Digital live streaming will be available on the Disney+ Hotstar application and website."
    },
    {
      q: "What is the head-to-head record between India and Wales in men's hockey?",
      a: "India has dominated recent matchups, including a 5-1 victory at the 2022 Commonwealth Games and a 4-2 win at the 2023 World Cup pool stage. Wales has yet to defeat India in a senior international tournament."
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
                  { "@type": "ListItem", "position": 3, "name": "India vs Wales Preview", "item": "https://hockeyworldcup2026schedule.com/matches/india-vs-wales" }
                ]
              },
              {
                "@type": "SportsEvent",
                "name": "India vs Wales (Men) - FIH Hockey World Cup 2026",
                "startDate": "2026-08-15T10:00:00+02:00",
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
                  "name": item.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.a
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
          <p className="hero-subtitle">🏑 Pool D Opening Day clash</p>
          <h1 className="hero-title">India vs Wales Hockey World Cup 2026 Preview</h1>
          <p className="hero-description">
            Your detailed tactical guide to the India vs Wales (Men) group stage match at the 2026 Hockey World Cup. Access IST kickoff times, squad selections, head-to-head records, and expert predictions.
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
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <a href="/matches" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Matches</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>India vs Wales</span>
        </nav>

        {/* 2. Key Facts Block */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginBottom: "3rem" }}>
          {[
            { icon: "📅", label: "Date & Timing", value: "Saturday, August 15, 2026" },
            { icon: "🕒", label: "IST Kickoff Time", value: "13:30 IST (10:00 CET Local)" },
            { icon: "🏟️", label: "Stadium & Venue", value: "Wagener Stadium, Amstelveen (NED)" },
            { icon: "📺", label: "Broadcaster (India)", value: "Star Sports / Disney+ Hotstar" }
          ].map((stat) => (
            <div key={stat.label} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem", textAlign: "center" }}>
              <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}>{stat.icon}</span>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.05em", display: "block", marginBottom: "0.3rem" }}>{stat.label}</span>
              <strong style={{ color: "var(--text-main)", fontSize: "0.95rem", lineHeight: "1.4", display: "block" }}>{stat.value}</strong>
            </div>
          ))}
        </section>

        {/* 3. Direct Answer Section (NLP Optimized) */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            When is India vs Wales Hockey World Cup match?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            The highly anticipated Men's Pool D opening stage fixture between <strong>India and Wales</strong> is scheduled to kick off on <strong>August 15, 2026</strong>, at <strong>13:30 IST</strong> (which is 10:00 CET local Dutch time). The game will take place at the <strong>Wagener Stadium in Amstelveen, Netherlands</strong>. This match serves as the tournament opener for both nations, setting the tone for the highly competitive Pool D standings, which also includes England and Pakistan.
          </p>
        </section>

        {/* 4. Head-to-Head History */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            What is the head-to-head record between India and Wales in hockey?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Historically, India has maintained a clean sheet against Wales in senior international tournaments, winning all primary encounters over the last decade. During the 2023 World Cup group stage in Bhubaneswar, India defeated Wales 4-2, and registered a dominant 5-1 victory at the Birmingham 2022 Commonwealth Games.
          </p>
          <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "var(--bg-tertiary)", borderBottom: "1px solid var(--border-color)" }}>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--text-main)" }}>Date</th>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--text-main)" }}>Tournament</th>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--text-main)" }}>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>January 19, 2023</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>FIH Men's World Cup (Bhubaneswar)</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>India won 4 - 2</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>August 4, 2022</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>Commonwealth Games (Birmingham)</td>
                  <td style={{ padding: "0.75rem 1rem", color: "var(--text-main)", fontWeight: "bold" }}>India won 5 - 1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Team Lineups & Squad News */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Who has been named in the squads for both teams?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            India enters the tournament with an 18-player squad selected by head coach <strong>Craig Fulton</strong>. Roster highlights include defensive anchor and drag-flick captain <strong>Harmanpreet Singh</strong> alongside veteran playmaker <strong>Hardik Singh</strong> and shot-stopper <strong>PR Sreejesh</strong>. Wales, coached by <strong>Danny Newcombe</strong>, relies heavily on defensive captain <strong>Rupert Shipperley</strong> and midfield engine <strong>Jacob Draper</strong> to hold off the fast transitions of India's forward line.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🇮🇳 India Key Players</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                <strong>Harmanpreet Singh:</strong> The star defender's drag-flicks on penalty corners are India's primary scoring weapon. His leadership is critical to the backline block.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales Key Players</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                <strong>Rupert Shipperley:</strong> The experienced defender must command the Welsh circle block to neutralize India's rebound threats and circle entries.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Where to watch / Streaming */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Where to watch India vs Wales live streaming?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Indian fans can watch the match live on the <strong>Star Sports Network</strong> on television. Live digital streaming will be broadcasted on the <strong>Disney+ Hotstar</strong> app and website. For viewers in Europe and the UK, live coverage is distributed by the official FIH portal <strong>Watch.Hockey</strong>.
          </p>
        </section>

        {/* 7. Spectator Pain Points */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            ℹ️ Spectator Guide & Transit Warnings
          </h3>
          <ul style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8", margin: 0, paddingLeft: "1.2rem" }}>
            <li><strong>Timezone Conversion:</strong> The kickoff is 10:00 CET local Dutch time. Indian fans must note the 3.5-hour difference, bringing the IST time to 13:30.</li>
            <li><strong>Wagener Stadium Entrance Rules:</strong> Security checks at Amstelveen are rigorous. Ticket name details must match your identification/passport for gate clearance.</li>
            <li><strong>Travel Warning:</strong> Wagener Stadium is situated near Amsterdamse Bos forest park. Public parking is highly limited; visitors are advised to take Amsterdam Metro Line 25 to the Amstelveen area and walk to the pitch gates.</li>
          </ul>
        </section>

        {/* 8. Tactical Prediction */}
        <section style={{ background: "rgba(192,0,48,0.03)", border: "1px solid rgba(192,0,48,0.1)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
            🔮 Expert Score Prediction & Analysis
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8", margin: 0 }}>
            Under coach Craig Fulton, India plays a highly structured, defensive-first transition game. While Wales is known for their physical block defense and low turnover rates under Danny Newcombe, India's superior penalty corner conversion rates anchored by Harmanpreet Singh will likely break the Welsh barrier. We expect India to dominate possession in the final quarters.
            <br /><br />
            <strong>Predicted Score:</strong> India 4 - 1 Wales
          </p>
        </section>

        {/* 9. FAQs List */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqItems.map((item, idx) => (
              <div key={idx} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "1.2rem" }}>
                <h4 style={{ color: "var(--text-main)", fontWeight: "700", margin: "0 0 0.5rem 0", fontSize: "1rem" }}>{item.q}</h4>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Related Pages */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Related Pages
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            <a href="/hockey-world-cup-2026-schedule-india" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🇮🇳 India Schedule Hub</span>
              <span>→</span>
            </a>
            <a href="/hockey-world-cup-2026-schedule-wales" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales Schedule Hub</span>
              <span>→</span>
            </a>
            <a href="/pool-d" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>📈 Pool D Standings</span>
              <span>→</span>
            </a>
            <a href="/schedule" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>📅 Full Tournament Schedule</span>
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
