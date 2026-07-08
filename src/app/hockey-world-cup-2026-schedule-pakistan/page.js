import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Schedule Pakistan: Time Table, Fixtures & PDF",
  description:
    "Complete Hockey World Cup 2026 Schedule for Pakistan. Find the exact match time table, fixture dates, USA/Canada broadcast times, results, and squad list. Download PDF.",
  alternates: {
    canonical: `${BASE}/hockey-world-cup-2026-schedule-pakistan`,
  },
  openGraph: {
    title: "Hockey World Cup 2026 Schedule Pakistan: Time Table, Fixtures & PDF",
    description:
      "Complete Hockey World Cup 2026 Schedule for Pakistan. Find the exact match time table, fixture dates, USA/Canada broadcast times, results, and squad list.",
    url: `${BASE}/hockey-world-cup-2026-schedule-pakistan`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PakistanHockeyPage() {
  const faqItems = [
    {
      question: "Pakistan Hockey World Cup 2026 schedule kya hai?",
      answer:
        "Pakistan Men's team Pool D mein hai aur unka pehla match August 2026 mein Amstelveen ke Wagener Stadium mein hoga. Pool D mein Pakistan ke saath India, England aur Wales hain. Pakistan Women's team bhi is tournament mein qualify hui hain.",
    },
    {
      question: "Pakistan aur India ka match Hockey World Cup 2026 mein kab hoga?",
      answer:
        "Pakistan vs India Pool D clash August 20, 2026 ke aaspaas expected hai Wagener Stadium, Amstelveen mein. Yeh match Hockey World Cup history ka sabse bada rivalry match hoga â€” dono teams Pool D mein hain.",
    },
    {
      question: "Pakistan Hockey World Cup kitni baar jeet chuka hai?",
      answer:
        "Pakistan ne Men's Hockey World Cup sabse zyada baar jeeta hai â€” 4 baar (1971, 1978, 1982, 1994). Pakistan hockey ki golden era 1970s aur 1980s mein thi. Lekin recent years mein ranking aur performance girna ek challenge raha hai.",
    },
    {
      question: "Pakistan Hockey World Cup 2026 kahan dekh saktay hain Pakistan mein?",
      answer:
        "Pakistan mein PTV Sports aur GEO Super ke paas FIH Hockey World Cup 2026 ki broadcasting rights hain. Online streaming ke liye official FIH streaming platform watch.hockey available hai. Pakistan ke matches PST timezone mein evening mein hote hain.",
    },
    {
      question: "Pakistan Hockey World Cup 2026 mein qualify kaise hua?",
      answer:
        "Pakistan Men's team ne 2025 FIH Hockey World Cup Qualifier mein top performance de ke 2026 World Cup ke liye qualify kiya. Pool D mein placement FIH world rankings ke basis pe hoti hai.",
    },
  ];

  const menMatches = [
    { date: "Aug 16, 2026", time: "~3:30 PM PKT", opponent: "ðŸ´ó §ó ¢ó ·ó ¬ó ³ó ¿ Wales", pool: "Pool D", venue: "Wagener Stadium, Amstelveen", type: "Pool Stage" },
    { date: "Aug 18, 2026", time: "~3:30 PM PKT", opponent: "ðŸ´ó §ó ¢ó ¥ó ®ó §ó ¿ England", pool: "Pool D", venue: "Wagener Stadium, Amstelveen", type: "Pool Stage" },
    { date: "Aug 20, 2026", time: "~3:30 PM PKT", opponent: "ðŸ‡®ðŸ‡³ India", pool: "Pool D", venue: "Wagener Stadium, Amstelveen", type: "Pool Stage âš”ï¸ Derby" },
    { date: "Aug 22-24, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
  ];

  const keyPlayers = [
    {
      name: "Muhammad Umar Bhutta",
      role: "Goalkeeper",
      rank: "Veteran Keeper",
      desc: "Pakistan's experienced goalkeeper and a crucial part of the national team's defensive setup. Known for commanding his area and stopping high-pressure penalty corner shots.",
    },
    {
      name: "Muhammad Arslan Qadir",
      role: "Midfielder",
      rank: "Engine Room",
      desc: "Dynamic central midfielder who controls Pakistan's pace of play. His box-to-box energy and ability to win the ball back makes him vital for Pakistan's pressing game.",
    },
    {
      name: "Ali Shan",
      role: "Forward",
      rank: "Speed Threat",
      desc: "Pacey forward with excellent 1v1 skills. His ability to accelerate in transition and create chances from wide positions makes him one of Pakistan's most dangerous attacking options.",
    },
    {
      name: "Sufyan Khan",
      role: "Drag-Flicker",
      rank: "Penalty Corner Specialist",
      desc: "Pakistan's primary penalty corner taker. His powerful and accurate drag-flick has been a consistent scoring route for the team in international tournaments.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏑 Pool D — Wagener Stadium, Amstelveen</p>
          <h1 className="hero-title">Hockey World Cup 2026 Schedule Pakistan</h1>
          <p className="hero-description">
            Complete Pakistan men's hockey fixture guide, full time table, PST / USA / Canada match timings, results, and squad analysis. Download the complete <strong>Hockey World Cup 2026 Schedule PDF</strong> for Pakistan's matches.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✔️ Verified: <strong>Marc Devos (Belgian Hockey Analyst)</strong></div>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#fixtures" className="cta-button primary-cta">View Time Table & Results</a>
            <a href="#" className="cta-button secondary-cta" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>📄 Download Schedule PDF</a>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">

        {/* Quick Stats */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.2rem", marginBottom: "4rem" }}>
          {[
            { icon: "ðŸ†", label: "World Cup Titles", value: "4 (Most Ever)" },
            { icon: "ðŸŒ", label: "FIH Ranking (Men)", value: "#18" },
            { icon: "ðŸŸï¸", label: "Men's Venue", value: "Wagener Stadium" },
            { icon: "ðŸ“…", label: "Pool Stage Dates", value: "Aug 16â€“20, 2026" },
            { icon: "âš”ï¸", label: "Pool D Rivals", value: "India, England, Wales" },
            { icon: "ðŸ“º", label: "Watch In Pakistan", value: "PTV Sports / GEO Super" },
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

        {/* Men's Schedule */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            ðŸ‡µðŸ‡° Pakistan Men's Schedule â€” Pool D (PKT Timings)
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
                    <td style={{ padding: "0.9rem 1rem", color: "#009900", fontWeight: "600" }}>{m.time}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>
                      {m.opponent}
                      {m.type.includes("Derby") && <span style={{ marginLeft: "0.5rem", background: "#c00030", color: "white", borderRadius: "6px", padding: "0.15rem 0.5rem", fontSize: "0.72rem", fontWeight: "700" }}>DERBY</span>}
                    </td>
                    <td style={{ padding: "0.9rem 1rem" }}>
                      <span style={{ background: m.type.includes("Pool") ? "rgba(0,153,0,0.1)" : "rgba(2,132,199,0.1)", color: m.type.includes("Pool") ? "#009900" : "#0284c7", borderRadius: "8px", padding: "0.2rem 0.6rem", fontSize: "0.8rem", fontWeight: "600" }}>
                        {m.type.includes("Derby") ? "Pool Stage" : m.type}
                      </span>
                    </td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>{m.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.8rem" }}>
            * PKT = Pakistan Standard Time (UTC+5). Timings are approximate pending official FIH confirmation.
          </p>
        </section>

        {/* India vs Pakistan Section */}
        <section style={{ background: "linear-gradient(135deg, rgba(0,153,0,0.04) 0%, rgba(192,0,48,0.04) 100%)", border: "2px solid rgba(192,0,48,0.2)", borderRadius: "24px", padding: "2.5rem", marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2.5rem" }}>âš”ï¸</span>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", margin: 0 }}>India vs Pakistan â€” The Greatest Rivalry</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "1.5rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <div style={{ textAlign: "center", background: "var(--bg-secondary)", borderRadius: "16px", padding: "1.5rem" }}>
              <img src="https://flagcdn.com/w80/in.png" width="50" height="33" alt="India flag" style={{ borderRadius: "4px", marginBottom: "0.8rem" }} />
              <div style={{ fontSize: "2rem", fontWeight: "900", color: "#c00030" }}>7</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>India Wins (Last 10)</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: "900", color: "var(--text-muted)", fontSize: "1.2rem" }}>vs</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>2018â€“2024</div>
            </div>
            <div style={{ textAlign: "center", background: "var(--bg-secondary)", borderRadius: "16px", padding: "1.5rem" }}>
              <img src="https://flagcdn.com/w80/pk.png" width="50" height="33" alt="Pakistan flag" style={{ borderRadius: "4px", marginBottom: "0.8rem" }} />
              <div style={{ fontSize: "2rem", fontWeight: "900", color: "#009900" }}>0</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Pakistan Wins (Last 10)</div>
            </div>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8", margin: 0 }}>
            The sub-continental rivalry has been overwhelmingly India-dominated in recent years. Pakistan needs to break this drought at the 2026 World Cup. However, tournament pressure and the electric atmosphere in Amstelveen could change dynamics â€” Pakistan have historically performed better in major events.
          </p>
          <div style={{ marginTop: "1.2rem" }}>
            <a href="/h2h" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#c00030", color: "white", borderRadius: "10px", padding: "0.6rem 1.2rem", fontSize: "0.9rem", fontWeight: "700", textDecoration: "none" }}>
              ðŸ“Š Full H2H Stats & Records â†’
            </a>
          </div>
        </section>

        {/* Key Players */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            ðŸŒŸ Pakistan Key Players to Watch
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

        {/* FAQ */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #009900", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions â€” Pakistan at HWC 2026
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        {/* Internal Links */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", marginBottom: "1.2rem" }}>ðŸ“Œ Related Pages</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              { href: "/schedule", label: "ðŸ“… Full Tournament Schedule" },
              { href: "/live-scores", label: "ðŸ”´ Live Scores" },
              { href: "/points-table", label: "ðŸ“Š Points Table" },
              { href: "/h2h", label: "âš”ï¸ Pakistan vs India H2H" },
              { href: "/broadcasters", label: "ðŸ“º Watch in Pakistan (PTV Sports)" },
              { href: "/hockey-world-cup-2026-schedule-india", label: "ðŸ‡®ðŸ‡³ India Page" },
              { href: "/hockey-world-cup-2026-groups", label: "ðŸ‘ All Pool Groups" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "var(--bg-tertiary)", color: "var(--text-main)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "0.5rem 1rem", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none" }}>
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
