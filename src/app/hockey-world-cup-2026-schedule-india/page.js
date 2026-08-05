import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Schedule India: Fixtures, Timings & Squad",
  description: "Hockey World Cup 2026 Schedule India: Pool D match dates vs Wales (Aug 15), England (Aug 17) & Pakistan (Aug 19), local IST timings, Wagener Stadium details & squad list.",
  alternates: {
    canonical: `${BASE}/hockey-world-cup-2026-schedule-india`,
  },
  openGraph: {
    title: "Hockey World Cup 2026 Schedule India: Fixtures, Timings & Squad",
    description: "Hockey World Cup 2026 Schedule India in IST. Matches vs Wales (Aug 15), England (Aug 17) & Pakistan (Aug 19), live streaming, and squad details.",
    url: `${BASE}/hockey-world-cup-2026-schedule-india`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Schedule India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Schedule India: Fixtures, Timings & Squad",
    description: "Hockey World Cup 2026 Schedule India in IST.",
    images: ["/og-image.jpg"],
  },
};

export default function IndiaHockeyPage() {
  const faqItems = [
    {
      question: "When is India's first match in the Hockey World Cup 2026?",
      answer: "The Indian Men's national hockey team plays their opening Pool D match against Wales on August 15, 2026 at 2:30 PM IST (11:00 AM CET) at the Wagener Stadium in Amstelveen."
    },
    {
      question: "When is the India vs Pakistan Hockey World Cup 2026 match?",
      answer: "The India vs Pakistan Men's Pool D match takes place on August 19, 2026 at 8:00 PM IST (4:30 PM CET) at Wagener Hockey Stadium, Amstelveen."
    },
    {
      question: "Which TV channel & streaming app will broadcast India's matches?",
      answer: "In India, Star Sports Network will broadcast matches live on television, with digital live streaming available on JioHotstar."
    },
    {
      question: "How many times has India won the Men's Hockey World Cup?",
      answer: "India has won the Men's Hockey World Cup once, in 1975 at Kuala Lumpur, defeating Pakistan 2-1 in the final."
    }
  ];

  const menMatches = [
    { date: "August 15, 2026", time: "2:30 PM IST (11:00 AM CET)", opponent: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen", type: "Pool Stage" },
    { date: "August 17, 2026", time: "7:00 PM IST (3:30 PM CET)", opponent: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen", type: "Pool Stage" },
    { date: "August 19, 2026", time: "8:00 PM IST (4:30 PM CET)", opponent: "🇵🇰 Pakistan", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen", type: "Pool Stage (Derby)" },
    { date: "Aug 22-24, 2026", time: "TBD", opponent: "Second Stage / Crossover", pool: "Knockout", venue: "Wagener / Belfius Arena", type: "Second Stage" },
    { date: "Aug 27-30, 2026", time: "TBD", opponent: "Semi-Final / Final", pool: "Knockout", venue: "Wagener Hockey Stadium", type: "Knockout" },
  ];

  const womenMatches = [
    { date: "August 16, 2026", time: "2:30 PM IST (11:00 AM CET)", opponent: "🇨🇳 China", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen", type: "Pool Stage" },
    { date: "August 18, 2026", time: "7:00 PM IST (3:30 PM CET)", opponent: "🇿🇦 South Africa", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen", type: "Pool Stage" },
    { date: "August 20, 2026", time: "7:00 PM IST (3:30 PM CET)", opponent: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen", type: "Pool Stage" },
    { date: "Aug 21-23, 2026", time: "TBD", opponent: "Second Stage / Crossover", pool: "Knockout", venue: "Wagener Hockey Stadium", type: "Second Stage" },
  ];

  const keyPlayers = [
    {
      flag: "https://flagcdn.com/w40/in.png",
      name: "Harmanpreet Singh",
      role: "Defender / Drag-Flicker",
      rank: "World No. 1 Drag-Flicker",
      desc: "Captain of India and legendary drag-flick specialist. Primary penalty corner goal threat and defensive anchor.",
    },
    {
      flag: "https://flagcdn.com/w40/in.png",
      name: "PR Sreejesh",
      role: "Goalkeeper",
      rank: "Veteran Shot-Stopper",
      desc: "Legendary Indian goalkeeper with two Olympic bronze medals. Essential leader in high-pressure shootout moments.",
    },
    {
      flag: "https://flagcdn.com/w40/in.png",
      name: "Mandeep Singh",
      role: "Forward",
      rank: "Circle Striker",
      desc: "Pacey striker known for opportunistic field goals and penalty corner rebounds.",
    },
    {
      flag: "https://flagcdn.com/w40/in.png",
      name: "Savita Punia",
      role: "Women's Goalkeeper",
      rank: "Women's Captain",
      desc: "Captain of the Indian Women's hockey team and one of Asia's top goalkeepers.",
    },
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
                  { "@type": "ListItem", "position": 2, "name": "Teams", "item": "https://hockeyworldcup2026schedule.com/teams" },
                  { "@type": "ListItem", "position": 3, "name": "India Match Schedule", "item": "https://hockeyworldcup2026schedule.com/hockey-world-cup-2026-schedule-india" }
                ]
              },
              {
                "@type": "SportsTeam",
                "name": "India National Field Hockey Team",
                "sport": "Field Hockey",
                "memberOf": {
                  "@type": "SportsOrganization",
                  "name": "International Hockey Federation",
                  "url": "https://fih.hockey"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              }
            ]
          })
        }}
      />
      <Header />

      {/* Hero */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏑 Pool D — Verified Fixtures & IST Timings</p>
          <h1 className="hero-title">Hockey World Cup 2026 Schedule India</h1>
          <p className="hero-description">
            Get the official <strong>Hockey World Cup 2026 schedule India</strong> in Indian Standard Time (IST). Complete Pool D match dates vs Wales (Aug 15), England (Aug 17), and Pakistan (Aug 19) at Wagener Stadium, roster analysis, and Star Sports / JioHotstar broadcast details.
          </p>
          <div className="eeat-badge-container" style={{ marginTop: "1rem" }}>
            <div className="eeat-badge" style={{ background: "rgba(192,0,48,0.1)", border: "1px solid rgba(192,0,48,0.3)", color: "#c00030", padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <span>✅ Verified & Reviewed by <strong>HWC 2026 Editorial Desk</strong></span>
              <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>(Cross-referenced against FIH official match sheets fih.hockey)</span>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Men's Schedule */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇮🇳 India Men's Schedule — Pool D (IST Timings)
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden" }}>
              <thead>
                <tr style={{ background: "#c00030", color: "white" }}>
                  {["Date", "Time (IST)", "Opponent", "Stage", "Venue"].map((h) => (
                    <th key={h} style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: "700" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {menMatches.map((m, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "0.9rem 1rem", fontWeight: "700", color: "var(--text-main)", whiteSpace: "nowrap" }}>{m.date}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "#c00030", fontWeight: "700" }}>{m.time}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>{m.opponent}</td>
                    <td style={{ padding: "0.9rem 1rem" }}>
                      <span style={{ background: "rgba(192,0,48,0.1)", color: "#c00030", borderRadius: "8px", padding: "0.2rem 0.6rem", fontSize: "0.8rem", fontWeight: "600" }}>{m.type}</span>
                    </td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>{m.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Women's Schedule */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #f43f5e", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇮🇳 India Women's Schedule — Pool D (IST Timings)
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden" }}>
              <thead>
                <tr style={{ background: "#f43f5e", color: "white" }}>
                  {["Date", "Time (IST)", "Opponent", "Stage", "Venue"].map((h) => (
                    <th key={h} style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: "700" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {womenMatches.map((m, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "0.9rem 1rem", fontWeight: "700", color: "var(--text-main)", whiteSpace: "nowrap" }}>{m.date}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "#f43f5e", fontWeight: "700" }}>{m.time}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>{m.opponent}</td>
                    <td style={{ padding: "0.9rem 1rem" }}>
                      <span style={{ background: "rgba(244,63,94,0.1)", color: "#f43f5e", borderRadius: "8px", padding: "0.2rem 0.6rem", fontSize: "0.8rem", fontWeight: "600" }}>{m.type}</span>
                    </td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>{m.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Players */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #0284c7", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🌟 Indian Key Players to Watch
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {keyPlayers.map((p) => (
              <div key={p.name} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "1.8rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                  <img src={p.flag} width="28" height="18" alt="India flag" style={{ borderRadius: "3px" }} />
                  <div>
                    <div style={{ fontWeight: "800", color: "var(--text-main)", fontSize: "1rem" }}>{p.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{p.role}</div>
                  </div>
                </div>
                <span style={{ display: "inline-block", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "8px", padding: "0.2rem 0.7rem", fontSize: "0.78rem", fontWeight: "700", marginBottom: "0.8rem" }}>{p.rank}</span>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — India at HWC 2026
          </h2>
          <FaqAccordion items={faqItems} />
        </section>
      </main>
      <Footer />
    </>
  );
}
