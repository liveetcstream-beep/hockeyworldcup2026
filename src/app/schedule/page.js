import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScheduleClient from "./ScheduleClient";
import FaqAccordion from "../components/FaqAccordion";
import { getPublishedNews } from "../../data/newsUtils";

export const metadata = {
  title: "Hockey World Cup 2026 Full Schedule: Fixtures & PDF Download",
  description: "Official FIH Hockey World Cup 2026 schedule. Access the complete match calendar, pool fixtures, kickoff times, and download the full PDF time table.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/schedule",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Full Schedule: Fixtures & PDF Download",
    description: "Official FIH Hockey World Cup 2026 schedule. Access the complete match calendar, pool fixtures, kickoff times, and download the full PDF time table.",
    url: "https://hockeyworldcup2026schedule.com/schedule",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Full Schedule: Fixtures & PDF Download",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Full Schedule: Fixtures & PDF Download",
    description: "Official FIH Hockey World Cup 2026 schedule. Access the complete match calendar, pool fixtures, kickoff times, and download the full PDF time table.",
    images: ["/og-image.jpg"],
  },
};


export default function SchedulePage() {
  const faqItems = [
    {
      question: "When does the FIH Hockey World Cup 2026 start and end?",
      answer: "The tournament officially begins on Saturday, August 15, 2026, and concludes with the Men's Grand Final on Sunday, August 30, 2026. Pool stage matches run from August 15 to August 24, followed by knockouts."
    },
    {
      question: "Where can I download the Hockey World Cup 2026 schedule PDF?",
      answer: "You can download a print-friendly version of the complete 100-match fixture list as a PDF directly from our website. Just use the 'Print & Save PDF Fixtures' button inside our interactive schedule tool above."
    },
    {
      question: "What is the USA (USWNT) match schedule and kick-off times?",
      answer: "The United States Women's National Team (USWNT) competes in Pool B alongside Germany, Argentina, and Scotland. Key pushback times: Argentina vs USA on August 15 at 14:30 CET (08:30 AM ET), USA vs Scotland on August 17 at 08:00 CET (02:00 AM ET), USA vs Germany on August 19 at 11:00 CET (05:00 AM ET)."
    },
    {
      question: "How can I purchase official tickets for the 2026 matches?",
      answer: "Official tickets are managed via the unified tournament booking portal at tickets.hockeyworldcup2026.com. Avoid third-party scalpers or unauthorized resale platforms to ensure valid entry at Wagener Stadium and Belfius Hockey Arena."
    },
    {
      question: "What is the tournament format for the 2026 World Cup?",
      answer: "The 16 teams are split into 4 pools of 4 teams. The top team in each pool qualifies directly for the Quarter-Finals. The second and third-placed teams play in crossover playoffs to secure the remaining Quarter-Final spots, while the fourth-placed team is eliminated."
    }
  ];

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Official FIH Tournament Bracket & Fixtures</p>
          <h1 className="hero-title">
            Hockey World Cup 2026 Full Match Schedule & Time Table
          </h1>
          <p className="hero-description">
            Get the complete, verified 100-match tournament schedule for the Men's and Women's FIH Hockey World Cups in Belgium & Netherlands. Filter by team, track USA time zones (EDT/ET), view group stages, and download the print-friendly PDF guide.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Verified by: <strong>Marc Devos, Senior Hockey Journalist</strong>
            </div>
            <div className="eeat-badge">
              ⚡ Venues: <strong>Wagener Stadium (1182 AM Amstelveen) & Belfius Arena (1300 Wavre)</strong>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
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
                  { "@type": "ListItem", "position": 2, "name": "Schedule", "item": "https://hockeyworldcup2026schedule.com/schedule" }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer,
                  },
                })),
              },
              {
                "@type": "SportsEvent",
                "name": "FIH Hockey World Cup 2026 Tournament Schedule",
                "startDate": "2026-08-15T10:00:00+02:00",
                "endDate": "2026-08-30T21:00:00+02:00",
                "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
                "eventStatus": "https://schema.org/EventScheduled",
                "location": [
                  {
                    "@type": "Place",
                    "name": "Wagener Stadium",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Amstelveen",
                      "addressCountry": "NL"
                    }
                  },
                  {
                    "@type": "Place",
                    "name": "Belfius Hockey Arena",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Wavre",
                      "addressCountry": "BE"
                    }
                  }
                ]
              }
            ]
          }),
        }}
      />

      <main className="sports-container py-12">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Hockey World Cup 2026 Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Match Schedule</span>
        </nav>

        {/* TOURNAMENT LIVE MATCHDAY STATUS BANNER */}
        <section style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "1.5rem 2rem",
          marginBottom: "2.5rem",
          color: "#ffffff"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-block", width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 10px #22c55e" }}></span>
              <strong style={{ fontSize: "1.1rem", letterSpacing: "0.02em" }}>TOURNAMENT MATCHDAYS LIVE — STAGE 1 (POOLS)</strong>
            </div>
            <a href="/live-scores" style={{ background: "var(--primary)", color: "#ffffff", padding: "0.45rem 1rem", borderRadius: "8px", fontWeight: "800", fontSize: "0.85rem", textDecoration: "none" }}>
              🔴 Open Live Score Centre →
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            <div style={{ background: "rgba(255,255,255,0.05)", padding: "0.9rem 1.2rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", fontWeight: "700" }}>Pool D Men</span>
              <div style={{ fontWeight: "800", fontSize: "0.95rem", margin: "0.2rem 0" }}>England (4) - (1) Pakistan</div>
              <span style={{ fontSize: "0.75rem", color: "#22c55e", fontWeight: "700" }}>✅ Completed Match Result</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", padding: "0.9rem 1.2rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", fontWeight: "700" }}>Pool D Men</span>
              <div style={{ fontWeight: "800", fontSize: "0.95rem", margin: "0.2rem 0" }}>India (3) - (1) Wales</div>
              <span style={{ fontSize: "0.75rem", color: "#22c55e", fontWeight: "700" }}>✅ Completed Match Result</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", padding: "0.9rem 1.2rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", fontWeight: "700" }}>Pool B Men</span>
              <div style={{ fontWeight: "800", fontSize: "0.95rem", margin: "0.2rem 0" }}>Belgium (3) - (2) France</div>
              <span style={{ fontSize: "0.75rem", color: "#22c55e", fontWeight: "700" }}>✅ Completed Match Result</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", padding: "0.9rem 1.2rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", fontWeight: "700" }}>Pool B Men</span>
              <div style={{ fontWeight: "800", fontSize: "0.95rem", margin: "0.2rem 0" }}>Germany (5) - (1) Malaysia</div>
              <span style={{ fontSize: "0.75rem", color: "#22c55e", fontWeight: "700" }}>✅ Completed Match Result</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.2rem", paddingTop: "0.8rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <a href="/points-table" style={{ color: "#facc15", fontSize: "0.85rem", fontWeight: "700", textDecoration: "none" }}>
              📊 Check Updated Pool Standings →
            </a>
            <a href="/matches/india-vs-pakistan" style={{ color: "#facc15", fontSize: "0.85rem", fontWeight: "700", textDecoration: "none" }}>
              ⚔️ Next Blockbuster: India vs Pakistan Preview →
            </a>
          </div>
        </section>

        {/* Client Schedule Filter & Pagination Section */}
        <ScheduleClient />

        {/* LATEST NEWS & TOURNAMENT UPDATES SECTION */}
        <section id="schedule-news" className="my-16">
          <div className="section-title-wrap">
            <h2>Latest Tournament News &amp; Fixture Updates</h2>
            <p>Stay informed with team announcements, squad changes, injury reports, and matchday guidelines.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getPublishedNews().slice(0, 3).map((article) => (
              <div key={article.slug} className="local-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Dynamic SVG / Scorecard Header Container */}
                <div style={{ position: 'relative', height: '160px', width: '100%', marginBottom: '1rem', overflow: 'hidden', borderRadius: '12px', background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <a href={`/news/${article.slug}`} style={{ textDecoration: "none", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "1rem" }}>
                    {article.title.toLowerCase().includes(" vs ") || article.slug.includes("-vs-") ? (
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                        <div style={{ textAlign: "center", flex: 1 }}>
                          <span style={{ fontSize: "1.8rem", display: "block" }}>🏑</span>
                          <span style={{ color: "#e2e8f0", fontSize: "0.8rem", fontWeight: "800", marginTop: "0.2rem" }}>
                            {article.title.split(" vs ")[0] || "Team A"}
                          </span>
                        </div>
                        <div style={{ textAlign: "center", padding: "0 0.4rem" }}>
                          <span style={{ background: "linear-gradient(135deg, #c00030 0%, #a00028 100%)", color: "white", padding: "0.25rem 0.6rem", borderRadius: "10px", fontSize: "0.75rem", fontWeight: "900" }}>
                            {article.category === "Match Report" ? "FINAL" : "PREVIEW"}
                          </span>
                        </div>
                        <div style={{ textAlign: "center", flex: 1 }}>
                          <span style={{ fontSize: "1.8rem", display: "block" }}>🏆</span>
                          <span style={{ color: "#e2e8f0", fontSize: "0.8rem", fontWeight: "800", marginTop: "0.2rem" }}>
                            {article.title.split(" vs ")[1]?.split(" ")[0] || "Team B"}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div style={{ textAlign: "center", padding: "0.5rem" }}>
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c00030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 0.4rem auto", display: "block" }}>
                          <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l5 5v11a2 2 0 0 1-2 2z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                        </svg>
                        <span style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase" }}>
                          HWC 2026 News
                        </span>
                      </div>
                    )}
                  </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.4rem', display: 'block' }}>{article.category}</span>
                  <h3 style={{ fontSize: '1rem', lineHeight: '1.4', margin: '0 0 0.6rem 0', color: 'var(--text-main)' }}>{article.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.2rem' }}>{article.excerpt}</p>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>⏱️ {article.readTime}</span>
                    <a href={`/news/${article.slug}`} className="cta-button primary-cta" style={{ fontSize: '0.75rem', padding: '0.35rem 0.7rem', borderRadius: '6px' }}>Read Article →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Key Dates & Silo Block */}
        <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="local-card" style={{ padding: "2rem" }}>
              <div className="local-icon">📅</div>
              <h3 className="text-white mt-4 mb-2">Key Dates &amp; Stages</h3>
              <ul className="pool-list" style={{ marginTop: "1rem" }}>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.03)", color: "var(--text-muted)" }}>
                  <strong className="text-white">Opening Pool Stage (Pools A–D):</strong> August 15 – August 20, 2026
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.03)", color: "var(--text-muted)" }}>
                  <strong className="text-white">Second Group Phase (Pools E–H):</strong> August 21 – August 24, 2026
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.03)", color: "var(--text-muted)" }}>
                  <strong className="text-white">Classification Matches (9th–16th):</strong> Aug 27 (Women) &amp; Aug 28 (Men)
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.03)", color: "var(--text-muted)" }}>
                  <strong className="text-white">Semifinals:</strong> Aug 27 (Women) &amp; Aug 28 (Men)
                </li>
                <li style={{ padding: "0.5rem 0", color: "var(--text-muted)" }}>
                  <strong className="text-white">Grand Finals:</strong> Aug 29 (Women, NED) &amp; Aug 30 (Men, BEL)
                </li>
              </ul>
            </div>

            <div className="local-card" style={{ padding: "2rem" }}>
              <div className="local-icon">🇺🇸</div>
              <h3 className="text-white mt-4 mb-2">USA Broadcast &amp; ET Schedule</h3>
              <p className="text-sm text-slate-400" style={{ marginTop: "1rem", lineHeight: "1.6" }}>
                For fans in the United States tracking the USWNT (United States Women's National Team), match schedules are broadcasted live across CBS Sports Network and streamed online via Watch.Hockey.
              </p>
              <p className="text-sm text-slate-400" style={{ marginTop: "0.5rem", lineHeight: "1.6" }}>
                To make viewing easy, select <strong>US Eastern Time (EDT)</strong> in our timezone selector above to view converted times.
              </p>
            </div>
          </div>
        </section>

        {/* Informational Rich Content Section */}
        <section className="guidelines-card">
          <h2>Important Matchday Attendance Guidelines</h2>
          <p>
            If you are traveling to Wagener Stadium (Amstelveen) or Belfius Hockey Arena (Wavre), please note that gates open exactly 90 minutes before scheduled pushback.
          </p>
          <p>
            Local timezone notice: the official tournament clock runs on Central European Summer Time (CEST / UTC+2). If you are viewing streams from India, Pakistan, or the Americas, please use the interactive timezone selector on this page to prevent confusion.
          </p>
          <div className="expert-quote-box">
            "With back-to-back doubleheaders scheduled in both Belgium and the Netherlands, player recovery times are extremely short. A team's depth in their tournament squad will be the ultimate deciding factor in the Second Stage and Semi-Final rounds."
            <strong>— HWC 2026 Editorial Desk</strong>
          </div>
        </section>

        {/* FAQs SECTION */}
        <section className="my-16">
          <div className="section-title-wrap">
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common queries regarding match timings, venues, and qualification rules.</p>
          </div>

          <FaqAccordion items={faqItems} />
        </section>
      </main>

      <Footer />
    </>
  );
}
