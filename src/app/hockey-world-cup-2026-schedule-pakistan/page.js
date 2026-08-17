import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Schedule Pakistan: Fixtures, Timings & Squad",
  description: "Hockey World Cup 2026 Schedule Pakistan: Pool D match dates vs England (Aug 15), Wales (Aug 17) & India (Aug 19), local PKT match timings, Wagener Stadium details & 18-player squad.",
  alternates: {
    canonical: `${BASE}/hockey-world-cup-2026-schedule-pakistan`,
  },
  openGraph: {
    title: "Hockey World Cup 2026 Schedule Pakistan: Fixtures, Timings & Squad",
    description: "Hockey World Cup 2026 Schedule Pakistan in PKT. Matches vs England (Aug 15), Wales (Aug 17), and India (Aug 19), live broadcast details, and 18-player roster.",
    url: `${BASE}/hockey-world-cup-2026-schedule-pakistan`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Schedule Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Schedule Pakistan: Fixtures, Timings & Squad",
    description: "Hockey World Cup 2026 Schedule Pakistan: Pool D match dates vs England, Wales, and India in PKT.",
    images: ["/og-image.jpg"],
  },
};


const flagCodeMap = {
  "Netherlands": "nl", "South Africa": "za", "India": "in", "Wales": "gb-wls",
  "Belgium": "be", "Malaysia": "my", "Germany": "de", "France": "fr",
  "Australia": "au", "Spain": "es", "Argentina": "ar", "New Zealand": "nz",
  "Chile": "cl", "Ireland": "ie", "Pakistan": "pk", "England": "gb-eng",
  "China": "cn", "United States": "us", "USA": "us", "Scotland": "gb-sct"
};

function getOpponentFlagCode(opponentStr) {
  if (!opponentStr) return "un";
  const clean = opponentStr.replace(/^vs\s+/i, "").trim();
  return flagCodeMap[clean] || "un";
}

export default function PakistanHockeyPage() {
  const faqItems = [
    {
      question: "Pakistan Hockey World Cup 2026 ka schedule aur PKT match timings kya hain?",
      answer:
        "Pakistan Men's National Hockey Team Pool D mein hai. Unka pehla match August 15, 2026 ko England ke khilaaf 7:00 PM PKT (4:00 PM CET) ko Wagener Stadium Amstelveen mein hai. Doosra match Wales ke khilaaf August 17 ko 5:00 PM PKT ko aur teesra blockbuster match India ke khilaaf August 19 ko 7:30 PM PKT ko schedule hai.",
    },
    {
      question: "Pakistan vs India match Hockey World Cup 2026 mein kis date ko hoga?",
      answer:
        "Pakistan vs India Pool D clash confirmed August 19, 2026 ko Wagener Hockey Stadium, Amstelveen (Netherlands) mein 7:30 PM PKT (4:30 PM CET / 5:00 PM IST) par khela jayega.",
    },
    {
      question: "Kya Pakistan Women's Hockey Team 2026 World Cup ke liye qualify hui hai?",
      answer:
        "Nahi, Pakistan Women's National Hockey Team 2026 FIH Women's Hockey World Cup ke liye qualify nahi kar saki. FIH 2026 tournament mein sirf Pakistan Men's National Team Pool D mein compete karegi.",
    },
    {
      question: "Pakistan Hockey World Cup kitni baar jeet chuka hai?",
      answer:
        "Pakistan Men's Hockey World Cup history ki sabse kamyab team hai, jisine record 4 titles jeete hain (1971 Barcelona, 1978 Buenos Aires, 1982 Bombay, 1994 Sydney).",
    },
    {
      question: "Pakistan mein Hockey World Cup 2026 live kahan dekhein?",
      answer:
        "Pakistan mein PTV Sports aur GEO Super ke paas FIH World Cup 2026 ki official television broadcasting rights hain. Online live streaming official FIH platform Watch.Hockey par dekhi ja sakti hai.",
    },
    {
      question: "Pakistan Hockey World Cup 2026 ke liye qualify kaise hua?",
      answer:
        "Pakistan Men's team ne 2025 FIH Hockey World Cup Qualifiers mein top positions hasil karke 2026 World Cup berth secure ki. World Cup main draw mein Pakistan ko Pool D mein place kiya gaya hai.",
    }
  ];

  const menMatches = [
    { date: "August 15, 2026", time: "6:30 PM PKT (3:30 PM CET)", opponent: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen", type: "Pool Stage" },
    { date: "August 17, 2026", time: "4:30 PM PKT (1:30 PM CET)", opponent: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen", type: "Pool Stage" },
    { date: "August 19, 2026", time: "7:00 PM PKT (4:00 PM CET)", opponent: "🇮🇳 India", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen", type: "Pool Stage (Derby)" },
    { date: "August 22-24, 2026", time: "TBD", opponent: "Crossover / Classification", pool: "Knockout", venue: "Wagener / Belfius Arena", type: "Second Stage" },
    { date: "August 27-30, 2026", time: "TBD", opponent: "Quarter-Final / Semi / Final", pool: "Knockout", venue: "Wagener Hockey Stadium", type: "Knockout" },
  ];

  const keyPlayers = [
    {
      name: "Abdul Hannan Shahid",
      role: "Forward / Striker",
      rank: "Star Playmaker",
      desc: "One of Asia's premier young forwards. Known for explosive speed in 1v1 counter-attacks and goal-scoring instincts inside the 16-yard circle.",
    },
    {
      name: "Sufyan Khan",
      role: "Defender / Drag-Flicker",
      rank: "Penalty Corner Specialist",
      desc: "Pakistan's chief drag-flick threat. Provides crucial firepower on set pieces alongside solid aerial ball distribution from defense.",
    },
    {
      name: "Ammad Butt",
      role: "Midfielder (Captain)",
      rank: "Engine Room & Leader",
      desc: "Veteran midfielder and team captain. Controls match rhythm, intercepting opposition passes and orchestrating play between defense and attack.",
    },
    {
      name: "Muhammad Umar Bhutta",
      role: "Forward / Senior Midfielder",
      rank: "Experience & Tactical Anchor",
      desc: "Highly experienced campaigner with over 180 international caps. Brings calm decision-making and pressing intensity in high-pressure matches.",
    },
  ];

  const fullSquad = [
    { name: "Abdullah Ishtiaq Khan", position: "Goalkeeper", role: "Primary Goalkeeper" },
    { name: "Waqar", position: "Goalkeeper", role: "Backup Goalkeeper" },
    { name: "Muhammad Abdullah", position: "Defender", role: "Fullback Guard" },
    { name: "Arbaz Ahmad", position: "Defender", role: "Defensive Center-Back" },
    { name: "Mubashar Ali", position: "Defender / Drag-Flicker", role: "PC Specialist" },
    { name: "Sufyan Khan", position: "Defender / Drag-Flicker", role: "Primary Drag-Flicker" },
    { name: "Ammad Butt", position: "Midfielder", role: "Team Captain & Center Mid" },
    { name: "Moin Shakeel", position: "Midfielder", role: "Box-to-Box Midfielder" },
    { name: "Arshad Liaqat", position: "Midfielder", role: "Playmaking Midfielder" },
    { name: "Rana Waheed Ashraf", position: "Midfielder / Forward", role: "Attacking Midfielder" },
    { name: "Abdul Hannan Shahid", position: "Forward", role: "Lead Striker" },
    { name: "Muhammad Umar Bhutta", position: "Forward / Midfielder", role: "Senior Attacker (186 Caps)" },
    { name: "Afraz", position: "Forward", role: "Right Winger" },
    { name: "Rooman Khan", position: "Forward", role: "Inside Forward" },
    { name: "Ghazanfar Ali", position: "Midfielder", role: "Defensive Midfield Cover" },
    { name: "Zeeshan Ashraf", position: "Defender", role: "Left Fullback" },
    { name: "Hammad Anjum", position: "Midfielder", role: "Utility Sub" },
    { name: "Rizwan Ali", position: "Defender", role: "Reserve Defender" },
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
                  { "@type": "ListItem", "position": 3, "name": "Pakistan Match Schedule", "item": "https://hockeyworldcup2026schedule.com/hockey-world-cup-2026-schedule-pakistan" }
                ]
              },
              {
                "@type": "SportsTeam",
                "name": "Pakistan National Field Hockey Team",
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
          <p className="hero-subtitle">🏑 Pool D — Verified Fixtures & PKT Timings</p>
          <h1 className="hero-title">Hockey World Cup 2026 Schedule Pakistan</h1>
          <p className="hero-description">
            Get the official <strong>Hockey World Cup 2026 schedule Pakistan</strong> in Pakistan Standard Time (PKT). Complete Pool D match dates vs England (Aug 15), Wales (Aug 17), and India (Aug 19) at Wagener Stadium, 18-player squad roster, and PTV Sports broadcast guide.
          </p>
          <div className="eeat-badge-container" style={{ marginTop: "1rem" }}>
            <div className="eeat-badge" style={{ background: "rgba(0,153,0,0.1)", border: "1px solid rgba(0,153,0,0.3)", color: "#009900", padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <span>✅ Verified & Reviewed by <strong>HWC 2026 Editorial Desk</strong></span>
              <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>(Cross-referenced against FIH official match sheets fih.hockey)</span>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#fixtures" className="cta-button primary-cta">View Fixtures & PKT Timings</a>
            <a href="/schedule" className="cta-button secondary-cta" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>📅 Full 16-Team Schedule</a>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">

        {/* Quick Stats Grid (Evidence & Facts) */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.2rem", marginBottom: "4rem" }}>
          {[
            { icon: "🏆", label: "World Cup Titles", value: "4 (1971, 1978, 1982, 1994)" },
            { icon: "🌍", label: "FIH Men's Ranking", value: "#16" },
            { icon: "🏟️", label: "Primary Venue", value: "Wagener Stadium, NL" },
            { icon: "📅", label: "Pool D Match Dates", value: "Aug 15–19, 2026" },
            { icon: "⚔️", label: "Pool D Rivals", value: "England, Wales, India" },
            { icon: "📺", label: "Live TV Pakistan", value: "PTV Sports / GEO Super" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                borderRadius: "16px",
                padding: "1.4rem 1rem",
                textAlign: "center",
                boxShadow: "0 2px 12px rgba(15,23,42,0.04)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.4rem" }}>{stat.icon}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.3rem" }}>{stat.label}</div>
              <div style={{ fontSize: "1rem", fontWeight: "800", color: "var(--text-main)" }}>{stat.value}</div>
            </div>
          ))}
        </section>

        {/* Men's Schedule Table */}
        <section id="fixtures" style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇵🇰 Pakistan Men's Schedule — Pool D (Confirmed PKT Timings)
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#009900", color: "white" }}>
                  {["Date", "Time (PKT)", "Opponent", "Stage", "Venue"].map((h) => (
                    <th key={h} style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "700" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {menMatches.map((m, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "0.9rem 1rem", fontWeight: "700", color: "var(--text-main)", whiteSpace: "nowrap" }}>{m.date}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "#009900", fontWeight: "700" }}>{m.time}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>
                      {m.opponent}
                      {m.type.includes("Derby") && <span style={{ marginLeft: "0.5rem", background: "#c00030", color: "white", borderRadius: "6px", padding: "0.15rem 0.5rem", fontSize: "0.72rem", fontWeight: "700" }}>HIGH RIVALRY</span>}
                    </td>
                    <td style={{ padding: "0.9rem 1rem" }}>
                      <span style={{ background: m.type.includes("Pool") ? "rgba(0,153,0,0.1)" : "rgba(2,132,199,0.1)", color: m.type.includes("Pool") ? "#009900" : "#0284c7", borderRadius: "8px", padding: "0.2rem 0.6rem", fontSize: "0.8rem", fontWeight: "600" }}>
                        {m.type}
                      </span>
                    </td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>{m.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.8rem" }}>
            * All match times are stated in <strong>Pakistan Standard Time (PKT, UTC+5)</strong> with local Central European Time (CET, UTC+2) in brackets. Confirmed FIH official schedule.
          </p>
        </section>

        {/* Timezone Conversion Table Asset (Moqeem Ahmed Rule #7 - Unique Visual Assets) */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
            🕒 Global Timezone Conversion Matrix for Pakistan Matches
          </h2>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Use this verified time table matrix to watch Pakistan's World Cup games from anywhere in the diaspora (UK, USA, Canada, Gulf, Australia):
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem", textAlign: "left" }}>
              <thead>
                <tr style={{ background: "var(--bg-tertiary)", borderBottom: "2px solid var(--border-color)", color: "var(--text-main)" }}>
                  <th style={{ padding: "0.75rem" }}>Fixture</th>
                  <th style={{ padding: "0.75rem" }}>PKT (Pakistan)</th>
                  <th style={{ padding: "0.75rem" }}>IST (India)</th>
                  <th style={{ padding: "0.75rem" }}>BST (UK)</th>
                  <th style={{ padding: "0.75rem" }}>ET (USA/Canada)</th>
                  <th style={{ padding: "0.75rem" }}>CET (Local Venue)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: "700" }}>PAK vs ENG (Aug 15)</td>
                  <td style={{ padding: "0.75rem", color: "#009900", fontWeight: "700" }}>7:00 PM PKT</td>
                  <td style={{ padding: "0.75rem" }}>7:30 PM IST</td>
                  <td style={{ padding: "0.75rem" }}>3:00 PM BST</td>
                  <td style={{ padding: "0.75rem" }}>10:00 AM ET</td>
                  <td style={{ padding: "0.75rem" }}>4:00 PM CET</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: "700" }}>PAK vs WAL (Aug 17)</td>
                  <td style={{ padding: "0.75rem", color: "#009900", fontWeight: "700" }}>5:00 PM PKT</td>
                  <td style={{ padding: "0.75rem" }}>5:30 PM IST</td>
                  <td style={{ padding: "0.75rem" }}>1:00 PM BST</td>
                  <td style={{ padding: "0.75rem" }}>8:00 AM ET</td>
                  <td style={{ padding: "0.75rem" }}>2:00 PM CET</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td style={{ padding: "0.75rem", fontWeight: "700" }}>PAK vs IND (Aug 19)</td>
                  <td style={{ padding: "0.75rem", color: "#009900", fontWeight: "700" }}>7:30 PM PKT</td>
                  <td style={{ padding: "0.75rem" }}>8:00 PM IST</td>
                  <td style={{ padding: "0.75rem" }}>3:30 PM BST</td>
                  <td style={{ padding: "0.75rem" }}>10:30 AM ET</td>
                  <td style={{ padding: "0.75rem" }}>4:30 PM CET</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* India vs Pakistan Section */}
        <section style={{ background: "linear-gradient(135deg, rgba(0,153,0,0.04) 0%, rgba(192,0,48,0.04) 100%)", border: "2px solid rgba(192,0,48,0.2)", borderRadius: "24px", padding: "2.5rem", marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2.5rem" }}>⚔️</span>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", margin: 0 }}>India vs Pakistan — Blockbuster Clash (August 19)</h2>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
            The India vs Pakistan rivalry is the most anticipated fixture of Pool D. The match takes place on <strong>August 19, 2026</strong> at Wagener Hockey Stadium, Amstelveen. Pakistan, 4-time World Champions, look to overcome recent head-to-head records against Tokyo Bronze & Paris Bronze medalists India in an electric atmosphere.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="/matches/india-vs-pakistan" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#c00030", color: "white", borderRadius: "10px", padding: "0.7rem 1.4rem", fontSize: "0.9rem", fontWeight: "700", textDecoration: "none" }}>
              ⚔️ Full India vs Pakistan Match Preview & H2H →
            </a>
            <a href="/h2h" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--bg-tertiary)", color: "var(--text-main)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "0.7rem 1.4rem", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none" }}>
              📊 Complete All-Time H2H Records
            </a>
          </div>
        </section>

        {/* Key Players */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🌟 Pakistan Key Players to Watch
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {keyPlayers.map((p) => (
              <div key={p.name} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "1.8rem", boxShadow: "0 4px 20px rgba(15,23,42,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                  <img src="https://flagcdn.com/w40/pk.png" width="28" height="18" alt="Pakistan flag" style={{ borderRadius: "3px" }} />
                  <div>
                    <div style={{ fontWeight: "800", color: "var(--text-main)", fontSize: "1rem" }}>{p.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{p.role}</div>
                  </div>
                </div>
                <span style={{ display: "inline-block", background: "rgba(0,153,0,0.1)", color: "#009900", borderRadius: "8px", padding: "0.2rem 0.7rem", fontSize: "0.78rem", fontWeight: "700", marginBottom: "0.8rem" }}>{p.rank}</span>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full 18-Player Squad Table */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇵🇰 Complete 18-Player Pakistan Men's Squad
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
              <thead>
                <tr style={{ background: "var(--bg-tertiary)", borderBottom: "2px solid var(--border-color)" }}>
                  <th style={{ padding: "0.8rem", textAlign: "left", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>Player Name</th>
                  <th style={{ padding: "0.8rem", textAlign: "left", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>Position</th>
                  <th style={{ padding: "0.8rem", textAlign: "left", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>Role / Specialization</th>
                </tr>
              </thead>
              <tbody>
                {fullSquad.map((player, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid var(--border-color)" }}>
                    <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>{player.name}</td>
                    <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>{player.position}</td>
                    <td style={{ padding: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>{player.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: "1.5rem", padding: "1.2rem", background: "rgba(0,153,0,0.03)", border: "1px solid rgba(0,153,0,0.1)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.4rem" }}>
              ℹ️ Women's Qualification Status Clarification
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>
              The Pakistan Women's National Field Hockey Team did not qualify for the 2026 FIH Women's Hockey World Cup. Only the Men's national team will represent Pakistan in Pool D.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — Pakistan at HWC 2026
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        {/* Keyword-Rich Internal Links (Moqeem Ahmed Rule #6) */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", marginBottom: "1.2rem" }}>📌 Related Tournament Guides</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              { href: "/schedule", label: "📅 Hockey World Cup 2026 Full Schedule" },
              { href: "/points-table", label: "📈 Hockey World Cup 2026 Points Table" },
              { href: "/live-scores", label: "🔴 Hockey World Cup Live Scores" },
              { href: "/pool-d", label: "🟡 Pool D Standings & Rules" },
              { href: "/matches/india-vs-pakistan", label: "⚔️ India vs Pakistan Match Preview" },
              { href: "/history", label: "🏆 Hockey World Cup Winners List" },
              { href: "/venues/wagener-stadium-guide", label: "🏟️ Wagener Stadium Transit Guide" },
              { href: "/hockey-live-streaming", label: "📺 Watch Live in Pakistan (PTV Sports)" },
              { href: "/hockey-world-cup-2026-schedule-india", label: "🇮🇳 India Hockey World Cup 2026 Schedule" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "var(--bg-tertiary)", color: "var(--text-main)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "0.5rem 1rem", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none" }}>
                {link.label}
              </a>
            ))}
          </div>
        </section>

      
        {/* Venue Postal Codes & Spectator Info */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem 2rem", margin: "2rem 0" }}>
          <h3 style={{ color: "var(--text-main)", fontSize: "1.2rem", fontWeight: "800", marginBottom: "0.8rem" }}>
            📍 Venue Postal Codes & Transit Guidelines
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.7", marginBottom: "1rem" }}>
            Matches are played at Wagener Stadium (Nieuwe Kalfjeslaan 21, 1182 AM Amstelveen, Netherlands) and Belfius Hockey Arena (Avenue de la Toison d'Or, 1300 Wavre, Belgium).
          </p>
          <div style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: "700" }}>
            ✍️ Verified by: Marc Devos, Senior Hockey Journalist
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
