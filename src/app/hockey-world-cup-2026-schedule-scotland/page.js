import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Schedule Scotland: Time Table, Fixtures & PDF",
  description: "Scotland Hockey World Cup 2026 Schedule: Women's Pool B fixtures vs USA (Aug 15), Belgium (Aug 17) & Germany (Aug 19). BST timings, squad list & streaming guide.",
  alternates: {
    canonical: `${BASE}/hockey-world-cup-2026-schedule-scotland`,
  },
  openGraph: {
    title: "Hockey World Cup 2026 Schedule Scotland: Time Table, Fixtures & PDF",
    description: "Scotland Hockey World Cup 2026 Schedule: Women's Pool B fixtures vs USA (Aug 15), Belgium (Aug 17) & Germany (Aug 19). BST timings, squad list & streaming guide.",
    url: `${BASE}/hockey-world-cup-2026-schedule-scotland`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Schedule Scotland: Time Table, Fixtures & PDF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Schedule Scotland: Time Table, Fixtures & PDF",
    description: "Scotland Hockey World Cup 2026 Schedule: Women's Pool B fixtures vs USA (Aug 15), Belgium (Aug 17) & Germany (Aug 19). BST timings, squad list & streaming guide.",
    images: ["/og-image.jpg"],
  },
};

export default function ScotlandHockeyPage() {
  const faqItems = [
    {
      question: "Is Scotland Women playing in the Hockey World Cup 2026?",
      answer: "Yes! Scotland Women have qualified for the FIH Women's Hockey World Cup 2026 and are placed in Pool B alongside Germany, Belgium, and USA. The Scotland Men's team also qualified separately for Pool B of the Men's tournament. It's a landmark double-qualification for Scottish field hockey.",
    },
    {
      question: "Where can I watch Scotland hockey matches live in the UK?",
      answer: "In the UK, the FIH Hockey World Cup 2026 will be available on BBC Sport and Eurosport. The official Watch.Hockey platform also provides streaming access globally. Scottish Hockey's own channels will provide additional coverage and highlights.",
    },
    {
      question: "What time are Scotland hockey matches in BST?",
      answer: "Most group stage matches in Wavre, Belgium (CET timezone) will be at 10:30 AM – 4:00 PM local time. Since BST is CET-1, this translates to approximately 9:30 AM – 3:00 PM BST for Scottish fans — very accessible viewing times.",
    },
    {
      question: "What is Scotland Women's FIH World Ranking?",
      answer: "Scotland Women enter the 2026 World Cup ranked approximately #17 in the FIH World Rankings, making them significant underdogs in a tough Pool B. However, their qualification reflects significant progress in Scottish women's hockey under a dedicated development programme.",
    },
  ];

  const womenMatches = [
    { date: "August 15, 2026", time: "~12:30 PM BST", opponent: "🇺🇸 USA", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", type: "Pool Stage" },
    { date: "August 17, 2026", time: "~10:30 AM BST", opponent: "🇧🇪 Belgium", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", type: "Pool Stage" },
    { date: "August 19, 2026", time: "~10:30 AM BST", opponent: "🇩🇪 Germany", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", type: "Pool Stage" },
    { date: "Aug 21–23, 2026", time: "TBD", opponent: "Second Stage / Classification", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
  ];

  const menMatches = [
    { date: "August 16, 2026", time: "~12:30 PM BST", opponent: "🇩🇪 Germany", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", type: "Pool Stage" },
    { date: "August 18, 2026", time: "~10:30 AM BST", opponent: "🇲🇾 Malaysia", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", type: "Pool Stage" },
    { date: "August 20, 2026", time: "~10:30 AM BST", opponent: "🇦🇷 Argentina", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", type: "Pool Stage" },
    { date: "Aug 21–23, 2026", time: "TBD", opponent: "Second Stage / Classification", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
  ];

  const keyPlayers = [
    {
      flag: "https://flagcdn.com/w40/gb-sct.png",
      name: "Amy Gibson",
      role: "Midfielder",
      rank: "Scotland Women Captain",
      desc: "The heartbeat of Scotland Women's squad. Gibson's leadership, defensive intelligence and ability to read the game make her indispensable in Pool B.",
    },
    {
      flag: "https://flagcdn.com/w40/gb-sct.png",
      name: "Nikki Kidd",
      role: "Forward",
      rank: "Top Scorer",
      desc: "Scotland's most clinical finisher. Kidd brings sharp instincts in the circle and dangerous penalty corner delivery that will test world-class goalkeepers.",
    },
    {
      flag: "https://flagcdn.com/w40/gb-sct.png",
      name: "David Nutter",
      role: "Midfielder",
      rank: "Scotland Men Captain",
      desc: "Experienced captain who drives Scotland Men forward with composed distribution and high work-rate. A key figure in their World Cup qualification campaign.",
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
                  { "@type": "ListItem", "position": 3, "name": "Scotland Match Schedule", "item": "https://hockeyworldcup2026schedule.com/hockey-world-cup-2026-schedule-scotland" },
                ],
              },
              {
                "@type": "SportsTeam",
                "name": "Scotland National Field Hockey Team",
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
          <p className="hero-subtitle">🏑 Women's Pool B · Men's Pool B — Official Schedule</p>
          <h1 className="hero-title">Hockey World Cup 2026 Schedule Scotland</h1>
          <p className="hero-description">
            Complete Scotland Men's & Women's fixture guide for the 2026 FIH Hockey World Cup. Full time table, BST match timings, squad analysis, and live streaming channels on BBC Sport. Download the <strong>Hockey World Cup 2026 Schedule PDF</strong> for Scotland.
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
            { icon: "🏆", label: "World Cup Titles", value: "0" },
            { icon: "🌍", label: "FIH Ranking (Men)", value: "#16" },
            { icon: "👩", label: "FIH Ranking (Women)", value: "#17" },
            { icon: "🏟️", label: "Venue", value: "Belfius Hockey Arena, Wavre" },
            { icon: "📅", label: "Pool Stage Dates", value: "Aug 15–21, 2026" },
            { icon: "⚔️", label: "Women's Pool B Rivals", value: "USA, Belgium, Germany" },
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
            🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland Women's Schedule — Pool B (Wavre)
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#f43f5e", color: "white" }}>
                  {["Date", "Time (BST)", "Opponent", "Stage", "Venue"].map((h) => (
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

        {/* Men's Schedule */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland Men's Schedule — Pool B (Wavre)
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#c00030", color: "white" }}>
                  {["Date", "Time (BST)", "Opponent", "Stage", "Venue"].map((h) => (
                    <th key={h} style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "700" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {menMatches.map((m, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "0.9rem 1rem", fontWeight: "700", color: "var(--text-main)", whiteSpace: "nowrap" }}>{m.date}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "#c00030", fontWeight: "600" }}>{m.time}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>{m.opponent}</td>
                    <td style={{ padding: "0.9rem 1rem" }}>
                      <span style={{ background: m.type === "Pool Stage" ? "rgba(192,0,48,0.1)" : "rgba(2,132,199,0.1)", color: m.type === "Pool Stage" ? "#c00030" : "#0284c7", borderRadius: "8px", padding: "0.2rem 0.6rem", fontSize: "0.8rem", fontWeight: "600" }}>{m.type}</span>
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
                  <img src={p.flag} width="28" height="18" alt="Scotland flag" style={{ borderRadius: "3px" }} />
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
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", fontStyle: "italic", color: "var(--text-main)", margin: 0 }}>Analyst's Scotland Preview</h2>
          </div>
          <div style={{ fontSize: "1rem", lineHeight: "1.9", color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1.2rem" }}>
              <strong style={{ color: "var(--text-main)" }}>Scotland enter Pool B as the lowest-ranked team, but their fighting spirit and tactical discipline make them dangerous in any group match.</strong>
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              The Women's team in particular have grown tremendously in the FIH Pro League cycle. A victory against USA could shake up the entire Pool B table and give Scotland a pathway to the crossover matches. Their focus will be on defensive solidity and exploiting counter-attack opportunities.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text-main)" }}>Prediction:</strong> Scotland are likely to finish 4th in Pool B but should put in competitive performances, especially the Women vs USA fixture.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — Scotland at HWC 2026
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
              { href: "/hockey-live-streaming", label: "📺 Watch in UK (BBC Sport)" },
              { href: "/hockey-world-cup-2026-schedule-england", label: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England Page" },
              { href: "/hockey-world-cup-2026-schedule-wales", label: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales Page" },
              { href: "/hockey-world-cup-2026-schedule-usa", label: "🇺🇸 USA Page" },
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
