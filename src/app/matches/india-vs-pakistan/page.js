import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "India vs Pakistan Hockey World Cup 2026: Time, Timings & Previews",
  description: "Heading to India vs Pakistan hockey clash at HWC 2026? Get the exact match timings, live streaming info, head-to-head records, and predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/india-vs-pakistan",
  },
  openGraph: {
    title: "India vs Pakistan Hockey World Cup 2026: Time, Timings & Previews",
    description: "Heading to India vs Pakistan hockey clash at HWC 2026? Get the exact match timings, live streaming info, head-to-head records, and predictions.",
    url: "https://hockeyworldcup2026schedule.com/matches/india-vs-pakistan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "India vs Pakistan Hockey World Cup 2026: Time, Timings & Previews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "India vs Pakistan Hockey World Cup 2026: Time, Timings & Previews",
    description: "Heading to India vs Pakistan hockey clash at HWC 2026? Get the exact match timings, live streaming info, head-to-head records, and predictions.",
    images: ["/og-image.jpg"],
  },
};


export default function MatchPreviewPage() {
  const faqItems = [
  {
    "q": "What time does India vs Pakistan match start?",
    "a": "The match starts at 14:00 CET, which translates to 17:30 IST (Indian Standard Time) and 17:00 PST (Pakistan Standard Time)."
  },
  {
    "q": "Where is the match being played?",
    "a": "The match will take place at the Wagener Hockey Stadium in Amstelveen, Netherlands."
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
                  { "@type": "ListItem", "position": 3, "name": "India vs Pakistan Guide", "item": "https://hockeyworldcup2026schedule.com/matches/india-vs-pakistan" }
                ]
              },
              {
                "@type": "SportsEvent",
                "name": "India vs Pakistan (Men) - FIH Hockey World Cup 2026",
                "startDate": "2026-08-19T14:00:00+02:00",
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
          <h1 className="hero-title">India vs Pakistan (Men) Pre-Match Guide</h1>
          <p className="hero-description">
            Your detailed tactical guide to the massive India vs Pakistan (Men) showdown at the 2026 Hockey World Cup. Get timings, head-to-head records, predictions, and streaming channels.
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>India vs Pakistan Guide</span>
        </nav>

        {/* Quick Details Grid */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.2rem", marginBottom: "4rem" }}>
          {[
            { icon: "📅", label: "Date", value: "August 19, 2026" },
            { icon: "🕒", label: "Start Time", value: "14:00 CET / 17:30 IST / 17:00 PST" },
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
            This is the match everyone has been waiting for. When India and Pakistan face off on the hockey turf, rankings go completely out the window. India enters this match with the confidence of their recent Olympic performances, relying on Harmanpreet Singh's drag-flick efficiency. On the other hand, Pakistan is riding a wave of young talent led by Hannan Shahid. The main battle will be in the midfield, where India's experience will try to contain Pakistan's rapid counter-attacks.
          </p>
        </section>

        {/* Head-to-Head */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Head-to-Head Records
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            India won 4 of the last 6 encounters, but Pakistan's recent Pro League resurgence makes this a highly unpredictable match.
          </p>
        </section>

        {/* Matchday Challenges & Pain Points */}
        <section style={{ background: "rgba(192,0,48,0.03)", border: "1px solid rgba(192,0,48,0.1)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
            ⚠️ Tactical Challenges & Key Areas
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8", margin: 0 }}>
            Both teams struggle with card discipline under high emotional pressure. In matches like this, a single yellow card can completely change the momentum. Additionally, converting penalty corners under intense pressure will decide the outcome.
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
            <li><strong>Official Broadcast Networks:</strong> Star Sports & Disney+ Hotstar in India; PTV Sports & Watch.Hockey in Pakistan; TNT Sports in the UK; Fox Sports in Australia.</li>
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
