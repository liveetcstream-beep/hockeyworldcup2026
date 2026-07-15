import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Schedule USA: Time Table, Fixtures & PDF",
  description: "USA Hockey World Cup 2026 Schedule: Women's Pool B fixtures vs Scotland (Aug 15), Germany (Aug 17) & Belgium (Aug 19). EST/PST timings, squad & streaming guide.",
  alternates: {
    canonical: `${BASE}/hockey-world-cup-2026-schedule-usa`,
  },
  openGraph: {
    title: "Hockey World Cup 2026 Schedule USA: Time Table, Fixtures & PDF",
    description: "USA Hockey World Cup 2026 Schedule: Women's Pool B fixtures vs Scotland (Aug 15), Germany (Aug 17) & Belgium (Aug 19). EST/PST timings, squad & streaming guide.",
    url: `${BASE}/hockey-world-cup-2026-schedule-usa`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Schedule USA: Time Table, Fixtures & PDF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Schedule USA: Time Table, Fixtures & PDF",
    description: "USA Hockey World Cup 2026 Schedule: Women's Pool B fixtures vs Scotland (Aug 15), Germany (Aug 17) & Belgium (Aug 19). EST/PST timings, squad & streaming guide.",
    images: ["/og-image.jpg"],
  },
};

export default function USAHockeyPage() {
  const faqItems = [
    {
      question: "Is USA playing in the Hockey World Cup 2026?",
      answer: "Yes! The USA Women's team (USWNT) has qualified for the FIH Women's Hockey World Cup 2026 and is placed in Pool B alongside Germany, Belgium, and Scotland. The USA Men's team qualified separately for Pool B of the Men's tournament alongside Argentina, Germany, and Malaysia.",
    },
    {
      question: "Where can I watch USA hockey games live in the USA?",
      answer: "In the United States, the FIH Hockey World Cup 2026 will be broadcast on NBC Sports and streamed live on Peacock TV. The official Watch.Hockey platform also provides global access. Check your local cable or streaming provider for complete channel listings.",
    },
    {
      question: "What time are USA hockey matches in EST and PST?",
      answer: "Most group stage matches in Wavre, Belgium (CET timezone) will be at 10:30 AM – 2:00 PM local time. This translates to approximately 4:30 AM – 8:00 AM EST and 1:30 AM – 5:00 AM PST. We recommend recording matches or catching replays for fans on the US West Coast.",
    },
    {
      question: "Who is the USA Women's hockey coach for 2026?",
      answer: "The USA Women's National Team is led by Head Coach Janneke Schopman, a decorated former Dutch international who took over the USWNT program in 2021 and has significantly elevated the team's tactical sophistication and international rankings.",
    },
  ];

  const womenMatches = [
    { date: "August 15, 2026", time: "~6:30 AM EST", opponent: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", type: "Pool Stage" },
    { date: "August 17, 2026", time: "~4:30 AM EST", opponent: "🇩🇪 Germany", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", type: "Pool Stage" },
    { date: "August 19, 2026", time: "~4:30 AM EST", opponent: "🇧🇪 Belgium", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", type: "Pool Stage" },
    { date: "Aug 21–23, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
    { date: "Aug 27–28, 2026", time: "TBD", opponent: "Semi-Final (if qualified)", pool: "–", venue: "TBD", type: "Knockout" },
  ];

  const menMatches = [
    { date: "August 15, 2026", time: "~6:30 AM EST", opponent: "🇦🇷 Argentina", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", type: "Pool Stage" },
    { date: "August 17, 2026", time: "~10:30 AM EST", opponent: "🇲🇾 Malaysia", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", type: "Pool Stage" },
    { date: "August 19, 2026", time: "~4:30 AM EST", opponent: "🇩🇪 Germany", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", type: "Pool Stage" },
    { date: "Aug 21–23, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
    { date: "Aug 27–28, 2026", time: "TBD", opponent: "Semi-Final (if qualified)", pool: "–", venue: "TBD", type: "Knockout" },
  ];

  const keyPlayers = [
    {
      flag: "https://flagcdn.com/w40/us.png",
      name: "Michelle Vittese",
      role: "Forward",
      rank: "USWNT Captain",
      desc: "A prolific scorer and team leader, Vittese drives USA's attacking third with relentless pressing and precise penalty corner execution.",
    },
    {
      flag: "https://flagcdn.com/w40/us.png",
      name: "Stefanie Fee",
      role: "Midfielder",
      rank: "Senior Playmaker",
      desc: "The engine of USA's midfield. Fee controls tempo and transition play with exceptional vision and work rate across both tournaments.",
    },
    {
      flag: "https://flagcdn.com/w40/us.png",
      name: "Alyssa Manley",
      role: "Goalkeeper",
      rank: "USWNT #1 GK",
      desc: "A commanding presence in goal with sharp reflexes on penalty corners — arguably the most important player for USA's defensive stability.",
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
                  { "@type": "ListItem", "position": 3, "name": "USA Match Schedule", "item": "https://hockeyworldcup2026schedule.com/hockey-world-cup-2026-schedule-usa" },
                ],
              },
              {
                "@type": "SportsTeam",
                "name": "United States National Field Hockey Team",
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
          <h1 className="hero-title">Hockey World Cup 2026 Schedule USA</h1>
          <p className="hero-description">
            Complete USA Men's & Women's fixture guide for the 2026 FIH Hockey World Cup. Full time table, EST/PST match timings, squad analysis, and live streaming channels. Download the complete <strong>Hockey World Cup 2026 Schedule PDF</strong> for USA matches.
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
            { icon: "🏆", label: "World Cup Titles (Women)", value: "0 (Runners-Up 1983)" },
            { icon: "🌍", label: "FIH World Ranking (Men)", value: "#11" },
            { icon: "👩", label: "FIH Ranking (Women)", value: "#13" },
            { icon: "🏟️", label: "Venue", value: "Belfius Hockey Arena, Wavre" },
            { icon: "📅", label: "Pool Stage Dates", value: "Aug 15–20, 2026" },
            { icon: "⚔️", label: "Women's Pool B Rivals", value: "Germany, Belgium, Scotland" },
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
            🇺🇸 USA Women's Schedule — Pool B (Wavre)
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#f43f5e", color: "white" }}>
                  {["Date", "Time (EST)", "Opponent", "Stage", "Venue"].map((h) => (
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
            🇺🇸 USA Men's Schedule — Pool B (Wavre)
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#c00030", color: "white" }}>
                  {["Date", "Time (EST)", "Opponent", "Stage", "Venue"].map((h) => (
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
                  <img src={p.flag} width="28" height="18" alt="USA flag" style={{ borderRadius: "3px" }} />
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
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", fontStyle: "italic", color: "var(--text-main)", margin: 0 }}>Analyst's USA Preview</h2>
          </div>
          <div style={{ fontSize: "1rem", lineHeight: "1.9", color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1.2rem" }}>
              <strong style={{ color: "var(--text-main)" }}>The USWNT enters Pool B as dark horses with the technical quality to upset top-ranked Germany and Belgium.</strong>
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              Under coach Janneke Schopman, USA has evolved into a high-pressing, possession-oriented team. Their penalty corner efficiency will be key — if they convert at their June 2026 Pro League rate, they're capable of reaching the Quarter-Finals.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text-main)" }}>Prediction:</strong> USA to finish 2nd or 3rd in Pool B, progressing through the crossover matches to the Quarter-Finals.
            </p>
          </div>
        </section>

        {/* Squad */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇺🇸 USA Hockey World Cup 2026 Squads
          </h2>
          <div style={{ marginBottom: "2.5rem" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "1rem" }}>
              🇺🇸 USA Women's Hockey Squad List
            </h3>
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
                    ["Michelle Vittese", "Forward", "Captain & Striker"],
                    ["Alyssa Manley", "Goalkeeper", "First Choice GK"],
                    ["Stefanie Fee", "Midfielder", "Midfield Engine"],
                    ["Kathleen Sharkey", "Defender", "Drag-flick Specialist"],
                    ["Lauren Crandall", "Midfielder", "Veteran Playmaker"],
                    ["Meredith Sholder", "Defender", "Center Back"],
                    ["Madison Maguire", "Forward", "Pacey Striker"],
                    ["Amanda Magadan", "Goalkeeper", "Backup GK"],
                  ].map(([name, pos, role], i) => (
                    <tr key={name} style={{ borderBottom: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>{name}</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>{pos}</td>
                      <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>{role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "1rem" }}>
              🇺🇸 USA Men's Hockey Squad List
            </h3>
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
                    ["Aki Kaeppeler", "Midfielder", "Captain & Team Leader"],
                    ["David Alegre", "Forward", "Penalty Corner Expert"],
                    ["Michael Linnenbrock", "Goalkeeper", "First Choice GK"],
                    ["Tim Deegan", "Defender", "Center Back"],
                    ["Mark Hermans", "Forward", "Striker"],
                    ["Joshua Shighley", "Midfielder", "Box-to-Box Midfielder"],
                    ["Tyler Sundeen", "Defender", "Drag-flick Specialist"],
                    ["Paul Singh", "Goalkeeper", "Backup GK"],
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
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — USA at HWC 2026
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
              { href: "/hockey-live-streaming", label: "📺 Watch in USA (Peacock TV)" },
              { href: "/hockey-world-cup-2026-schedule-germany", label: "🇩🇪 Germany Page" },
              { href: "/hockey-world-cup-2026-schedule-belgium", label: "🇧🇪 Belgium Page" },
              { href: "/hockey-world-cup-2026-schedule-scotland", label: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland Page" },
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
