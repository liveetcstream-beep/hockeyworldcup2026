import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Australia vs Spain Hockey World Cup 2026: Pre-Match Preview & Timings",
  description: "Preview of the Australia vs Spain Men's match at the 2026 Hockey World Cup. Timings, head-to-head, and streaming channels.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/australia-vs-spain",
  },
  openGraph: {
    title: "Australia vs Spain Hockey World Cup 2026: Pre-Match Preview & Timings",
    description: "Preview of the Australia vs Spain Men's match at the 2026 Hockey World Cup. Timings, head-to-head, and streaming channels.",
    url: "https://hockeyworldcup2026schedule.com/matches/australia-vs-spain",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Australia vs Spain Hockey World Cup 2026: Pre-Match Preview & Timings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Australia vs Spain Hockey World Cup 2026: Pre-Match Preview & Timings",
    description: "Preview of the Australia vs Spain Men's match at the 2026 Hockey World Cup. Timings, head-to-head, and streaming channels.",
    images: ["/og-image.jpg"],
  },
};


export default function MatchPreviewPage() {
  const faqItems = [
  {
    "q": "Where can I watch Australia vs Spain in Australia?",
    "a": "The match will air live on Fox Sports and can be streamed on Kayo Sports."
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
          <h1 className="hero-title">Australia vs Spain (Men) Pre-Match Guide</h1>
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
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Australia vs Spain Guide</span>
        </nav>

        {/* Quick Details Grid */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.2rem", marginBottom: "4rem" }}>
          {[
            { icon: "📅", label: "Date", value: "August 18, 2026" },
            { icon: "🕒", label: "Start Time", value: "14:30 CET" },
            { icon: "🏟️", label: "Venue", value: "Belfius Hockey Arena, Wavre" },
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
            This matchup will likely decide the winner of Pool C. Australia's Kookaburras play a highly physical, pressing game that tests the fitness of any side. Spain, under Marc Miralles, plays a quick transition game with highly skilled midfielders. If Spain can absorb the early Australian press, they can create opportunities on the counter.
          </p>
        </section>

        {/* Head-to-Head */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Head-to-Head Records
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Australia won their last meeting 4-3 in the Pro League, indicating a highly close match.
          </p>
        </section>

        {/* Matchday Challenges & Pain Points */}
        <section style={{ background: "rgba(192,0,48,0.03)", border: "1px solid rgba(192,0,48,0.1)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
            ⚠️ Tactical Challenges & Key Areas
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8", margin: 0 }}>
            Spain has struggled against physical teams that press high up the pitch. Australia must maintain defensive structure and avoid conceding penalty corners to Miralles.
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
            <li><strong>Official Broadcast Networks:</strong> Fox Sports & Kayo in Australia; RTVE in Spain; Watch.Hockey internationally.</li>
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
