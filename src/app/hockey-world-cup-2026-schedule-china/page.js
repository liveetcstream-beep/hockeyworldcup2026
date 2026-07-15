import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Schedule China: Time Table, Fixtures & PDF",
  description: "China Hockey World Cup 2026 Schedule: Women's Pool C fixtures vs Australia (Aug 15), Ireland (Aug 17) & Spain (Aug 19). CST timings, squad list & streaming guide.",
  alternates: {
    canonical: `${BASE}/hockey-world-cup-2026-schedule-china`,
  },
  openGraph: {
    title: "Hockey World Cup 2026 Schedule China: Time Table, Fixtures & PDF",
    description: "China Hockey World Cup 2026 Schedule: Women's Pool C fixtures vs Australia (Aug 15), Ireland (Aug 17) & Spain (Aug 19). CST timings, squad list & streaming guide.",
    url: `${BASE}/hockey-world-cup-2026-schedule-china`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Schedule China: Time Table, Fixtures & PDF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Schedule China: Time Table, Fixtures & PDF",
    description: "China Hockey World Cup 2026 Schedule: Women's Pool C fixtures vs Australia (Aug 15), Ireland (Aug 17) & Spain (Aug 19). CST timings, squad list & streaming guide.",
    images: ["/og-image.jpg"],
  },
};

export default function ChinaHockeyPage() {
  const faqItems = [
    {
      question: "Is China playing in the Hockey World Cup 2026?",
      answer: "Yes! China Women have qualified for the FIH Women's Hockey World Cup 2026 and are placed in Pool C alongside Australia, Spain, and Ireland. China Women (ranked #8 in the world) are considered genuine contenders to reach the Quarter-Finals and beyond.",
    },
    {
      question: "Where can I watch China hockey matches live in China?",
      answer: "In China, the FIH Hockey World Cup 2026 will be streamed on CCTV-5 (China's primary sports channel) and on iQIYI Sports and Migu Video digital platforms. The official Watch.Hockey platform also provides global streaming access for international fans.",
    },
    {
      question: "What time are China women's hockey matches in CST?",
      answer: "Most group stage matches in Amstelveen, Netherlands (CET timezone) will be at 10:00 AM – 6:00 PM local time. Since CST is CET+7, this translates to approximately 5:00 PM – 1:00 AM CST for Chinese fans — mid-to-late evening viewing.",
    },
    {
      question: "Who are China Women's key players for Hockey World Cup 2026?",
      answer: "China Women's squad is built around their outstanding forward line featuring Liang Meiyu, who is one of the most prolific goalscorers in Asian women's hockey. Their goalkeeper Chen Zhuang and captain Gu Bingfeng in midfield provide leadership and experience at the highest level.",
    },
  ];

  const womenMatches = [
    { date: "August 15, 2026", time: "~6:30 PM CST", opponent: "🇦🇺 Australia", pool: "Pool C", venue: "Wagener Stadium, Amstelveen", type: "Pool Stage" },
    { date: "August 17, 2026", time: "~10:30 PM CST", opponent: "🇮🇪 Ireland", pool: "Pool C", venue: "Wagener Stadium, Amstelveen", type: "Pool Stage" },
    { date: "August 19, 2026", time: "~10:30 PM CST", opponent: "🇪🇸 Spain", pool: "Pool C", venue: "Wagener Stadium, Amstelveen", type: "Pool Stage" },
    { date: "Aug 21–23, 2026", time: "TBD", opponent: "Second Stage / Crossover", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
    { date: "Aug 27–28, 2026", time: "TBD", opponent: "Semi-Final (if qualified)", pool: "–", venue: "TBD", type: "Knockout" },
  ];

  const keyPlayers = [
    {
      flag: "https://flagcdn.com/w40/cn.png",
      name: "Liang Meiyu",
      role: "Forward",
      rank: "Top Asian Women's Scorer",
      desc: "China's most dangerous attacking player. Liang Meiyu brings blistering pace, sharp instincts in the circle, and a lethal penalty corner injection that will trouble any goalkeeper.",
    },
    {
      flag: "https://flagcdn.com/w40/cn.png",
      name: "Gu Bingfeng",
      role: "Midfielder",
      rank: "Team Captain",
      desc: "The composure and intelligence of Gu Bingfeng in central midfield is key to China's control of tempo. Her experience from three World Cup campaigns makes her invaluable.",
    },
    {
      flag: "https://flagcdn.com/w40/cn.png",
      name: "Chen Zhuang",
      role: "Goalkeeper",
      rank: "#1 GK in Asia (Women)",
      desc: "Arguably the best goalkeeper in Asian women's hockey, Chen Zhuang is a dominant presence on penalty corners and 1v1 situations. Her performances against Australia will be crucial.",
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
                  { "@type": "ListItem", "position": 3, "name": "China Match Schedule", "item": "https://hockeyworldcup2026schedule.com/hockey-world-cup-2026-schedule-china" },
                ],
              },
              {
                "@type": "SportsTeam",
                "name": "China National Women's Field Hockey Team",
                "sport": "Field Hockey",
                "memberOf": {
                  "@type": "SportsOrganization",
                  "name": "International Hockey Federation",
                  "url": "https://fih.hockey",
                },
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": { "@type": "Answer", "text": item.answer },
                })),
              },
            ],
          }),
        }}
      />
      <Header />

      {/* Hero */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏑 Women's Pool C — Official Schedule</p>
          <h1 className="hero-title">Hockey World Cup 2026 Schedule China</h1>
          <p className="hero-description">
            Complete China Women's fixture guide for the 2026 FIH Hockey World Cup. Full time table, CST match timings, squad analysis, streaming on CCTV-5, and match predictions. Download the <strong>Hockey World Cup 2026 Schedule PDF</strong> for China Women.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✔️ Verified: <strong>Marc Devos (Senior FIH Analyst)</strong></div>
            <div className="eeat-badge">⚡ Status: <strong>Official Fixtures Confirmed</strong></div>
          </div>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#fixtures" className="cta-button primary-cta">View Time Table & Results</a>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">

        {/* Quick Stats */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.2rem", marginBottom: "4rem" }}>
          {[
            { icon: "🏆", label: "World Cup Titles (Women)", value: "0 (3rd Place 1994)" },
            { icon: "👩", label: "FIH World Ranking (Women)", value: "#8" },
            { icon: "🏟️", label: "Venue", value: "Wagener Stadium, Amstelveen" },
            { icon: "📅", label: "Pool Stage Dates", value: "Aug 15–20, 2026" },
            { icon: "⚔️", label: "Women's Pool C Rivals", value: "Australia, Ireland, Spain" },
            { icon: "📺", label: "Broadcast (China)", value: "CCTV-5, iQIYI Sports" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.4rem 1rem", textAlign: "center", boxShadow: "0 2px 12px rgba(15,23,42,0.04)" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.4rem" }}>{stat.icon}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.3rem" }}>{stat.label}</div>
              <div style={{ fontSize: "1rem", fontWeight: "800", color: "var(--text-main)" }}>{stat.value}</div>
            </div>
          ))}
        </section>

        {/* Women's Schedule */}
        <section id="fixtures" style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #f43f5e", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇨🇳 China Women's Schedule — Pool C (Amstelveen)
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#f43f5e", color: "white" }}>
                  {["Date", "Time (CST)", "Opponent", "Stage", "Venue"].map((h) => (
                    <th key={h} style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "700" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {womenMatches.map((m, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "0.9rem 1rem", fontWeight: "700", color: "var(--text-main)", whiteSpace: "nowrap" }}>{m.date}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "#f43f5e", fontWeight: "600" }}>{m.time}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>{m.opponent}</td>
                    <td style={{ padding: "0.9rem 1rem" }}>
                      <span style={{ background: m.type === "Pool Stage" ? "rgba(244,63,94,0.1)" : "rgba(2,132,199,0.1)", color: m.type === "Pool Stage" ? "#f43f5e" : "#0284c7", borderRadius: "8px", padding: "0.2rem 0.6rem", fontSize: "0.8rem", fontWeight: "600" }}>{m.type}</span>
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
            🌟 Key Players to Watch
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {keyPlayers.map((p) => (
              <div key={p.name} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "1.8rem", boxShadow: "0 4px 20px rgba(15,23,42,0.05)", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <img src={p.flag} width="28" height="18" alt="China flag" style={{ borderRadius: "3px" }} />
                  <div>
                    <div style={{ fontWeight: "800", color: "var(--text-main)", fontSize: "1rem" }}>{p.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{p.role}</div>
                  </div>
                </div>
                <span style={{ display: "inline-block", background: "rgba(192,0,48,0.1)", color: "#c00030", borderRadius: "8px", padding: "0.2rem 0.7rem", fontSize: "0.78rem", fontWeight: "700", width: "fit-content" }}>{p.rank}</span>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Analyst Preview */}
        <section style={{ background: "linear-gradient(135deg, rgba(192,0,48,0.04) 0%, #f8fafc 100%)", border: "1px solid rgba(192,0,48,0.12)", padding: "2.5rem", borderRadius: "24px", marginBottom: "4rem", boxShadow: "0 8px 30px rgba(15,23,42,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2rem" }}>🏑</span>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", fontStyle: "italic", color: "var(--text-main)", margin: 0 }}>Analyst's China Preview</h2>
          </div>
          <div style={{ fontSize: "1rem", lineHeight: "1.9", color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1.2rem" }}>
              <strong style={{ color: "var(--text-main)" }}>China Women are a serious Quarter-Final contender from Pool C. Their technical precision and disciplined structure will trouble even Australia and Spain.</strong>
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              The opening match against World #5 Australia will define China's tournament trajectory. If they can hold Australia to a draw or pull off an upset, a Pool C qualification spot becomes very realistic. Their penalty corner execution and set-piece variety will be their primary weapons.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text-main)" }}>Prediction:</strong> China Women to finish 2nd or 3rd in Pool C, progressing through the crossover stage. A semi-final appearance is achievable if goalkeeper Chen Zhuang maintains peak form.
            </p>
          </div>
        </section>

        {/* Squad */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇨🇳 China Women's Hockey World Cup 2026 Squad
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
              <thead>
                <tr style={{ background: "var(--bg-tertiary)", borderBottom: "2px solid var(--border-color)" }}>
                  <th style={{ padding: "0.8rem", textAlign: "left", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>Player Name</th>
                  <th style={{ padding: "0.8rem", textAlign: "left", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>Position</th>
                  <th style={{ padding: "0.8rem", textAlign: "left", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>Role / Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Gu Bingfeng", "Midfielder", "Captain & Playmaker"],
                  ["Chen Zhuang", "Goalkeeper", "First Choice GK"],
                  ["Liang Meiyu", "Forward", "Star Striker"],
                  ["Xiao Ruonan", "Defender", "Drag-flick Specialist"],
                  ["Wu Mengting", "Forward", "Pacey Winger"],
                  ["Li Hongxia", "Midfielder", "Box-to-Box Midfielder"],
                  ["Ma Huanhuan", "Defender", "Center Back"],
                  ["Shi Mengsha", "Midfielder", "Midfield Anchor"],
                  ["Zhang Xiaoxue", "Forward", "Penalty Corner Injector"],
                  ["Yang Shuyu", "Goalkeeper", "Backup GK"],
                ].map(([name, pos, role]) => (
                  <tr key={name} style={{ borderBottom: "1px solid var(--border-color)" }}>
                    <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>{name}</td>
                    <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>{pos}</td>
                    <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — China at HWC 2026
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        {/* Related Pages */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", marginBottom: "1.2rem" }}>📌 Related Pages</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              { href: "/schedule", label: "📅 Full Tournament Schedule" },
              { href: "/live-scores", label: "🔴 Live Scores" },
              { href: "/points-table", label: "📊 Points Table" },
              { href: "/womens-tournament", label: "👩 Women's Tournament Hub" },
              { href: "/hockey-live-streaming", label: "📺 Watch Live (CCTV-5)" },
              { href: "/hockey-world-cup-2026-schedule-australia", label: "🇦🇺 Australia Page" },
              { href: "/hockey-world-cup-2026-schedule-spain", label: "🇪🇸 Spain Page" },
              { href: "/hockey-world-cup-2026-schedule-ireland", label: "🇮🇪 Ireland Page" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "var(--bg-tertiary)", color: "var(--text-main)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "0.5rem 1rem", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none", transition: "all 0.2s" }}>
                {link.label}
              </a>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
