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
    "q": "What is the historical significance of this match?",
    "a": "This is a clash between the two most successful teams in Women's Hockey World Cup history. They have met in numerous World Cup and Olympic finals."
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
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Netherlands vs Australia Women</span>
        </nav>

        {/* Quick Details Grid */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.2rem", marginBottom: "4rem" }}>
          {[
            { icon: "📅", label: "Date", value: "August 17, 2026" },
            { icon: "🕒", label: "Start Time", value: "15:00 CET" },
            { icon: "🏟️", label: "Venue", value: "Wagener Stadium, Amstelveen" },
            { icon: "📺", label: "Live Stream", value: "Available on Watch.Hockey" }
          ].map((stat) => (
            <div key={stat.label} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.2rem", textAlign: "center" }}>
              <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "0.5rem" }}>{stat.icon}</span>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.05em", display: "block", marginBottom: "0.2rem" }}>{stat.label}</span>
              <strong style={{ color: "var(--text-main)", fontSize: "0.95rem" }}>{stat.value}</strong>
            </div>
          ))}
        </section>

        {/* Tactical Preview */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Match Preview & Team News
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            This is the biggest rivalry in Women's hockey. The Hockeyroos bring physical intensity and high work rates to challenge the highly technical Dutch side. Played at Amstelveen, the atmosphere will be electric. Australia's defense will look to limit Yibbi Jansen's drag-flick opportunities, while trying to exploit Dutch defensive transitions.
          </p>
        </section>

        {/* Head-to-Head */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Head-to-Head Records
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Matches between these two are always close, but the Dutch have edged out the Hockeyroos in their last 3 tournament finals.
          </p>
        </section>

        {/* Matchday Challenges & Pain Points */}
        <section style={{ background: "rgba(192,0,48,0.03)", border: "1px solid rgba(192,0,48,0.1)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
            ⚠️ Tactical Challenges & Key Areas
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8", margin: 0 }}>
            Australia must maintain extreme focus for all 60 minutes; a single lapse against the Dutch attack can result in multiple quick goals. The Dutch must manage the high-pressure expectations of the home crowd.
          </p>
        </section>

        {/* Broadcasters Info */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Where to Watch: TV Channels & Live Streams
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            You can watch this blockbuster match live on the following channels:
          </p>
          <ul style={{ color: "var(--text-muted)", paddingLeft: "1.2rem" }}>
            <li><strong>Official Broadcast Networks:</strong> NOS in the Netherlands; Fox Sports & Kayo in Australia; Watch.Hockey internationally.</li>
            <li style={{ marginTop: "0.5rem" }}><strong>Digital Streams:</strong> Stream live internationally on the FIH official platform <em>Watch.Hockey</em> (subject to geo-blocking restrictions in certain territories).</li>
          </ul>
        </section>

        {/* FAQ Section */}
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
      </main>

      <Footer />
    </>
  );
}
