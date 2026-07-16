import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Pakistan vs Wales Hockey World Cup 2026 Preview & Prediction",
  description: "Detailed Pakistan vs Wales Hockey World Cup 2026 match preview. Access PKT kick-off times, head-to-head records, squads, and expert tactical predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/pakistan-vs-wales",
  },
  openGraph: {
    title: "Pakistan vs Wales Hockey World Cup 2026 Preview & Prediction",
    description: "Detailed Pakistan vs Wales Hockey World Cup 2026 match preview. Access PKT kick-off times, head-to-head records, squads, and expert tactical predictions.",
    url: "https://hockeyworldcup2026schedule.com/matches/pakistan-vs-wales",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pakistan vs Wales Hockey World Cup 2026 Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakistan vs Wales Hockey World Cup 2026 Preview & Prediction",
    description: "Detailed Pakistan vs Wales Hockey World Cup 2026 match preview. Access PKT kick-off times, head-to-head records, squads, and expert tactical predictions.",
    images: ["/og-image.jpg"],
  },
};

export default function PakistanVsWalesPreviewPage() {
  const faqItems = [
    {
      q: "When is the Pakistan vs Wales match in the Hockey World Cup 2026?",
      a: "The Pakistan vs Wales Men's Pool D match is scheduled for Monday, August 17, 2026, at 09:30 CET local Dutch time. For fans in Pakistan, the match kicks off at 12:30 PKT (13:00 IST)."
    },
    {
      q: "Where is the Pakistan vs Wales match being played?",
      a: "The match will take place at the Wagener Stadium in Amstelveen, Netherlands, known for its high-performance water-based synthetic turf."
    },
    {
      q: "Which TV channel will broadcast Pakistan vs Wales in Pakistan?",
      a: "In Pakistan, PTV Sports will broadcast the match live on television. Live digital streaming is available on the Watch.Hockey platform."
    },
    {
      q: "What is the head-to-head record between Pakistan and Wales in men's hockey?",
      a: "Pakistan and Wales have had limited senior international matchups. Their last major encounter was at the 2018 Commonwealth Games, where they played out a high-scoring 1-1 draw."
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
                  { "@type": "ListItem", "position": 3, "name": "Pakistan vs Wales Preview", "item": "https://hockeyworldcup2026schedule.com/matches/pakistan-vs-wales" }
                ]
              },
              {
                "@type": "SportsEvent",
                "name": "Pakistan vs Wales (Men) - FIH Hockey World Cup 2026",
                "startDate": "2026-08-17T09:30:00+02:00",
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
          <p className="hero-subtitle">🏑 Pool D Key Matchups</p>
          <h1 className="hero-title">Pakistan vs Wales Hockey World Cup 2026 Preview</h1>
          <p className="hero-description">
            Your comprehensive tactical guide to the Pakistan vs Wales (Men) group stage clash at the 2026 Hockey World Cup. Access PKT kickoff times, squad profiles, head-to-head records, and predictions.
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Pakistan vs Wales</span>
        </nav>

        {/* 2. Key Facts Block */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginBottom: "3rem" }}>
          {[
            { icon: "📅", label: "Date & Timing", value: "Monday, August 17, 2026" },
            { icon: "🕒", label: "PKT Kickoff Time", value: "12:30 PKT (09:30 CET Local)" },
            { icon: "🏟️", label: "Stadium & Venue", value: "Wagener Stadium, Amstelveen (NED)" },
            { icon: "📺", label: "Broadcaster (Pakistan)", value: "PTV Sports / Watch.Hockey" }
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
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            When is Pakistan vs Wales Hockey World Cup match?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            The crucial Men's Pool D match between <strong>Pakistan and Wales</strong> will be played on <strong>August 17, 2026</strong>, starting at <strong>12:30 PKT</strong> (which is 09:30 CET local Dutch time). The game is hosted at the <strong>Wagener Stadium in Amstelveen, Netherlands</strong>. With both teams fighting to secure crossover qualifications in Pool D alongside India and England, this match represents a critical opportunity for Pakistan to collect points.
          </p>
        </section>

        {/* 4. Head-to-Head History */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            What is the head-to-head record between Pakistan and Wales in hockey?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Historically, senior international fixtures between Pakistan and Wales are rare. Their last major tournament encounter took place during the Gold Coast 2018 Commonwealth Games, resulting in a 1-1 draw. In youth-level Pro League warm-ups, Pakistan's transition pace has occasionally given them the upper hand, though Wales has built a highly structured defensive system.
          </p>
        </section>

        {/* 5. Team Squads & Tactical News */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Who has been named in the squads for both teams?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Pakistan enters the tournament with an 18-player roster selected by head coach <strong>Roelant Oltmans</strong>, led by dynamic forward <strong>Hannan Shahid</strong> and drag-flick vice-captain <strong>Sufyan Khan</strong>. Wales, coached by <strong>Danny Newcombe</strong>, relies on veteran defensive structure with captain <strong>Rupert Shipperley</strong> and midfield control via <strong>Jacob Draper</strong>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🇵🇰 Pakistan Key Players</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                <strong>Sufyan Khan:</strong> The young fullback is Pakistan's primary drag-flick asset. His circle interventions and clearing distributions are critical under heavy counter-pressing.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales Key Players</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                <strong>Jacob Draper:</strong> His playmaking shifts in midfield will dictate how Wales controls possession transitions against Pakistan's pressing units.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Streaming Options */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Where to watch Pakistan vs Wales live streaming?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Fans in Pakistan can watch the broadcast live on <strong>PTV Sports</strong>. Live digital streaming will be accessible through the official FIH channel <strong>Watch.Hockey</strong>. Detailed match score notifications will be updated in real-time on our live score portal.
          </p>
        </section>

        {/* 7. Spectator Warnings */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            ℹ️ Spectator Guide & Amstelveen Warnings
          </h3>
          <ul style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8", margin: 0, paddingLeft: "1.2rem" }}>
            <li><strong>Timezone Difference:</strong> Local time is 09:30 CET. Ensure timezone clocks are verified for 12:30 PKT kickoff in Pakistan.</li>
            <li><strong>Ticket Name Verifications:</strong> Wagener Stadium security forces random passport verifications to counter third-party scalper ticketing options.</li>
            <li><strong>Wagener Stadium Access:</strong> Public transport via Amsterdam metro route 25 is highly recommended to reach the Amstelveen area safely.</li>
          </ul>
        </section>

        {/* 8. Prediction */}
        <section style={{ background: "rgba(0,153,0,0.03)", border: "1px solid rgba(0,153,0,0.1)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
            🔮 Tactical Prediction & Score Projection
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8", margin: 0 }}>
            Pakistan's transition speeds under Hannan Shahid are set to test the low-lying defensive lines of Danny Newcombe's Wales. However, Wales' strength lies in structured counter-attacks. If Pakistan can prevent turnovers in the midfield block and convert Sufyan Khan's penalty corners early, they should secure a tight victory.
            <br /><br />
            <strong>Predicted Score:</strong> Pakistan 3 - 2 Wales
          </p>
        </section>

        {/* 9. FAQs List */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
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
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Related Pages
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            <a href="/hockey-world-cup-2026-schedule-pakistan" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🇵🇰 Pakistan Schedule Hub</span>
              <span>→</span>
            </a>
            <a href="/hockey-world-cup-2026-schedule-wales" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", textDecoration: "none", color: "var(--text-main)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.2s" }}>
              <span>🏴󠁧󠁢‍♀️ Wales Schedule Hub</span>
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
