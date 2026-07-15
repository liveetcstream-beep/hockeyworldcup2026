import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Germany vs Netherlands Hockey World Cup 2026 Match Preview",
  description: "Tactical preview of Germany vs Netherlands men's match at HWC 2026. Check head-to-head records, squad lineups, kickoff times, and expert predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/germany-vs-netherlands",
  },
  openGraph: {
    title: "Germany vs Netherlands Hockey World Cup 2026 Match Preview",
    description: "Tactical preview of Germany vs Netherlands men's match at HWC 2026. Check head-to-head records, squad lineups, kickoff times, and expert predictions.",
    url: "https://hockeyworldcup2026schedule.com/matches/germany-vs-netherlands",
  },
  twitter: {
    card: "summary_large_image",
    title: "Germany vs Netherlands Hockey World Cup 2026 Match Preview",
    description: "Tactical preview of Germany vs Netherlands men's match at HWC 2026. Check head-to-head records, squad lineups, kickoff times, and expert predictions.",
  },
};

export default function MatchPreviewPage() {
  const faqItems = [
    {
      "q": "What is the head-to-head record between Germany and Netherlands?",
      "a": "Germany and the Netherlands share one of the most intense rivalries in hockey. In their recent 2025-26 Pro League encounters, Germany defeated the Netherlands 3-2 in Berlin, while the Dutch won the return leg 4-2 in Utrecht."
    },
    {
      "q": "Who are the key players to watch in Germany vs Netherlands?",
      "a": "For Germany, keep an eye on drag-flicker Tom Grambusch and playmaker Niklas Wellen. For the Netherlands, key targets include drag-flicker Jip Janssen and midfielder Thierry Brinkman."
    },
    {
      "q": "Where is Germany vs Netherlands being played?",
      "a": "The match will be hosted at the Wagener Stadium in Amstelveen, Netherlands — a home venue for the Dutch side."
    },
    {
      "q": "What time does Germany vs Netherlands start?",
      "a": "The match kicks off at 18:30 local time (CET) in Amstelveen, which is 22:00 IST in India and 12:30 EST in the USA."
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
                  { "@type": "ListItem", "position": 3, "name": "Germany vs Netherlands Guide", "item": "https://hockeyworldcup2026schedule.com/matches/germany-vs-netherlands" }
                ]
              },
              {
                "@type": "SportsEvent",
                "name": "Germany vs Netherlands (Men) - FIH Hockey World Cup 2026",
                "startDate": "2026-08-20T18:30:00+02:00",
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
          <p className="hero-subtitle">🏑 Blockbuster Match Previews</p>
          <h1 className="hero-title">Germany vs Netherlands Hockey World Cup 2026 Pre-Match Guide</h1>
          <p className="hero-description">
            Your detailed tactical guide to the massive Germany vs Netherlands (Men) showdown at the 2026 Hockey World Cup. Get timings, head-to-head records, predictions, and streaming channels.
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Germany vs Netherlands</span>
        </nav>

        {/* 2. Date, Time & Venue Block */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginBottom: "3rem" }}>
          {[
            { icon: "📅", label: "Date & Timing", value: "August 20, 2026 - 18:30 CET" },
            { icon: "🕒", label: "Local Kickoff Times", value: "18:30 local / 22:00 IST / 12:30 EST" },
            { icon: "🏟️", label: "Stadium & Venue", value: "Wagener Stadium, Amstelveen (NED)" },
            { icon: "📺", label: "Official Broadcast", value: "Ziggo Sport, NPO, ARD/ZDF, Watch.Hockey" }
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
            Two European powerhouses, Germany (reigning World Champions) and the Netherlands (host nation), clash in what promises to be one of the most high-octane group stage matches of the tournament. The Netherlands will leverage their massive home crowd advantage in Amstelveen, while Germany relies on their legendary defensive stability and clinical penalty corner conversions to quieten the stands.
          </p>
        </section>

        {/* 4. Team Form */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Team Form
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🇩🇪 Germany (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['W', 'L', 'W', 'W', 'W'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                Germany has remained robust throughout the FIH Pro League campaign, demonstrating outstanding resilience in transition defence.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🇳🇱 Netherlands (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['W', 'W', 'W', 'L', 'W'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The Dutch team, led by Jeroen Delmee, has showcased highly fluid attacking transitions, scoring a tournament-high average of goals per game.
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
