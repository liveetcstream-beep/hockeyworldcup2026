import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Australia vs Argentina Hockey World Cup 2026 Match Preview",
  description: "Preview the Australia vs Argentina men's match at HWC 2026. Check head-to-head records, squad lineups, match timings, and predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/australia-vs-argentina",
  },
  openGraph: {
    title: "Australia vs Argentina Hockey World Cup 2026 Match Preview",
    description: "Preview the Australia vs Argentina men's match at HWC 2026. Check head-to-head records, squad lineups, match timings, and predictions.",
    url: "https://hockeyworldcup2026schedule.com/matches/australia-vs-argentina",
  },
  twitter: {
    card: "summary_large_image",
    title: "Australia vs Argentina Hockey World Cup 2026 Match Preview",
    description: "Preview the Australia vs Argentina men's match at HWC 2026. Check head-to-head records, squad lineups, match timings, and predictions.",
  },
};

export default function MatchPreviewPage() {
  const faqItems = [
    {
      "q": "What is the head-to-head record between Australia and Argentina?",
      "a": "Australia historically has the upper hand, but Argentina (Los Leones) has repeatedly troubled them in major events. In their recent 2025-26 FIH Pro League matches, Australia won 4-3 in a thrilling game, and Argentina won the reverse fixture on shootouts after a 2-2 draw."
    },
    {
      "q": "Who is the primary penalty corner option for Argentina?",
      "a": "Maico Casella is Argentina's primary set-piece drag-flicker, possessing an extremely quick release."
    },
    {
      "q": "Where is the Australia vs Argentina match being played?",
      "a": "The match will take place at the Belfius Hockey Arena in Wavre, Belgium."
    },
    {
      "q": "What channel is broadcasting the match in Argentina?",
      "a": "ESPN and Disney+ hold the broadcasting rights in Argentina and South America."
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
                  { "@type": "ListItem", "position": 3, "name": "Australia vs Argentina Guide", "item": "https://hockeyworldcup2026schedule.com/matches/australia-vs-argentina" }
                ]
              },
              {
                "@type": "SportsEvent",
                "name": "Australia vs Argentina (Men) - FIH Hockey World Cup 2026",
                "startDate": "2026-08-22T16:00:00+02:00",
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
          <p className="hero-subtitle">🏑 Blockbuster Match Previews</p>
          <h1 className="hero-title">Australia vs Argentina Hockey World Cup 2026 Pre-Match Guide</h1>
          <p className="hero-description">
            Your detailed tactical guide to the massive Australia vs Argentina (Men) showdown at the 2026 Hockey World Cup. Get timings, head-to-head records, predictions, and streaming channels.
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Australia vs Argentina</span>
        </nav>

        {/* 2. Date, Time & Venue Block */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginBottom: "3rem" }}>
          {[
            { icon: "📅", label: "Date & Timing", value: "August 22, 2026 - 16:00 CET" },
            { icon: "🕒", label: "Local Kickoff Times", value: "16:00 local / 19:30 IST / 11:00 ART" },
            { icon: "🏟️", label: "Stadium & Venue", value: "Belfius Hockey Arena, Wavre (BEL)" },
            { icon: "📺", label: "Official Broadcast", value: "Fox Sports, ESPN, Disney+, Watch.Hockey" }
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
            Australia face Argentina in a highly critical clash. The Kookaburras are famous for their unmatched attacking pace, while Argentina is one of the world's most resilient defensive blocks, capable of hitting on counter-attacks through Maico Casella and their experienced midfield units.
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
                {['W', 'W', 'W', 'L', 'W'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The Kookaburras have shown high-volume scoring capability, leading their pool with aggressive circle entries.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🇦🇷 Argentina (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['L', 'W', 'D', 'W', 'D'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : r === 'D' ? '#fbbf24' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                Los Leones are hard to break down, drawing multiple matches against top-tier European teams through structured deep defense.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FAQs */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "2rem" }}>
            {faqItems.map((item, idx) => (
              <div key={idx} style={{ marginBottom: idx === faqItems.length - 1 ? 0 : "1.5rem" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>{idx + 1}. {item.q}</h4>
                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: "1.6", margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
