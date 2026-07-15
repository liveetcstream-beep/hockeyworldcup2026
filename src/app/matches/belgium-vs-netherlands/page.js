import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Belgium vs Netherlands Hockey World Cup 2026 Match Preview",
  description: "Preview the massive Belgium vs Netherlands men's hockey match at HWC 2026. Check head-to-head records, squad lineups, match timings, and predictions.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/belgium-vs-netherlands",
  },
  openGraph: {
    title: "Belgium vs Netherlands Hockey World Cup 2026 Match Preview",
    description: "Preview the massive Belgium vs Netherlands men's hockey match at HWC 2026. Check head-to-head records, squad lineups, match timings, and predictions.",
    url: "https://hockeyworldcup2026schedule.com/matches/belgium-vs-netherlands",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belgium vs Netherlands Hockey World Cup 2026 Match Preview",
    description: "Preview the massive Belgium vs Netherlands men's hockey match at HWC 2026. Check head-to-head records, squad lineups, match timings, and predictions.",
  },
};

export default function MatchPreviewPage() {
  const faqItems = [
    {
      "q": "What is the head-to-head record between Belgium and Netherlands?",
      "a": "This is the ultimate lowlands derby and arguably the highest quality match in world hockey. In their recent major matchups, they have split results: Belgium defeated the Netherlands 2-1 in the Pro League in June 2026, while the Netherlands won 3-2 in Utrecht in February 2026."
    },
    {
      "q": "Which stadium is hosting Belgium vs Netherlands?",
      "a": "This match will take place at the Belfius Hockey Arena in Wavre, Belgium."
    },
    {
      "q": "Who is the primary drag-flick threat for Belgium?",
      "a": "Alexander Hendrickx is Belgium's primary set-piece drag-flicker, renowned for his power and precision."
    },
    {
      "q": "What time is kickoff for Belgium vs Netherlands?",
      "a": "The match kicks off at 20:30 CET local time, which is 00:00 IST (midnight) in India and 14:30 EST in the United States."
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
                  { "@type": "ListItem", "position": 3, "name": "Belgium vs Netherlands Guide", "item": "https://hockeyworldcup2026schedule.com/matches/belgium-vs-netherlands" }
                ]
              },
              {
                "@type": "SportsEvent",
                "name": "Belgium vs Netherlands (Men) - FIH Hockey World Cup 2026",
                "startDate": "2026-08-25T20:30:00+02:00",
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
          <h1 className="hero-title">Belgium vs Netherlands Hockey World Cup 2026 Pre-Match Guide</h1>
          <p className="hero-description">
            Your detailed tactical guide to the massive Belgium vs Netherlands (Men) showdown at the 2026 Hockey World Cup. Get timings, head-to-head records, predictions, and streaming channels.
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Belgium vs Netherlands</span>
        </nav>

        {/* 2. Date, Time & Venue Block */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginBottom: "3rem" }}>
          {[
            { icon: "📅", label: "Date & Timing", value: "August 25, 2026 - 20:30 CET" },
            { icon: "🕒", label: "Local Kickoff Times", value: "20:30 local (Belgium) / 00:00 IST / 14:30 EST" },
            { icon: "🏟️", label: "Stadium & Venue", value: "Belfius Hockey Arena, Wavre (BEL)" },
            { icon: "📺", label: "Official Broadcast", value: "Ziggo Sport, RTBF, Sporza, Watch.Hockey" }
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
            Belgium face the Netherlands in the lowlands derby, a match between the reigning co-hosts and two of the hottest favorites to win the tournament. Playing at home in Wavre, the Red Lions will try to contain the explosive Dutch transitional attacks.
          </p>
        </section>

        {/* 4. Team Form */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Team Form
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1.5rem", borderRadius: "12px" }}>
              <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontSize: "1.1rem" }}>🇧🇪 Belgium (Recent Form)</h4>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {['W', 'W', 'W', 'W', 'W'].map((r, i) => (
                  <span key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: r === 'W' ? '#22c55e' : '#ef4444', color: '#fff', display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>{r}</span>
                ))}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: "1.6" }}>
                The Red Lions are undefeated in their last five matches, asserting massive defensive presence on European turf.
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
                The Dutch side has displayed high counter-pressing speeds, converting set-pieces with Jip Janssen.
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
