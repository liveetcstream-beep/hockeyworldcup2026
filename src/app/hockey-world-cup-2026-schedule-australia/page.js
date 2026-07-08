import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Schedule Australia: Time Table, Fixtures & PDF",
  description:
    "Complete Hockey World Cup 2026 Schedule for Australia. Find the exact match time table, fixture dates, USA/Canada broadcast times, results, and squad list. Download PDF.",
  alternates: {
    canonical: `${BASE}/hockey-world-cup-2026-schedule-india`,
  },
  openGraph: {
    title: "Hockey World Cup 2026 Schedule Australia: Time Table, Fixtures & PDF",
    description:
      "Complete Hockey World Cup 2026 Schedule for Australia. Find the exact match time table, fixture dates, USA/Canada broadcast times, results, and squad list.",
    url: `${BASE}/hockey-world-cup-2026-schedule-india`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function AustraliaHockeyPage() {
  const faqItems = [
    { question: "What is the Australian hockey team called?", answer: "The Australian Men's team is known as the Kookaburras, and the Women's team is called the Hockeyroos." },
    { question: "Will Australia play in Belgium or Netherlands?", answer: "Australia's Pool C matches will predominantly take place at the Belfius Arena in Wavre, Belgium." },
    { question: "Who is Australia's biggest threat in Pool C?", answer: "Spain presents the biggest challenge in the group stage for the Kookaburras." },
  ];

  const menMatches = [
    { date: "August 16, 2026", time: "~1:00 PM IST", opponent: "🇮🇪 Ireland", pool: "Pool C", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "August 18, 2026", time: "~3:30 PM IST", opponent: "🇪🇸 Spain", pool: "Pool C", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "August 20, 2026", time: "~12:30 PM IST", opponent: "🇿🇦 South Africa", pool: "Pool C", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "Aug 22-24, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
    { date: "Aug 27-28, 2026", time: "TBD", opponent: "Semi-Final (if qualified)", pool: "–", venue: "TBD", type: "Knockout" },
  ];

  const womenMatches = [
    { date: "August 15, 2026", time: "~11:30 AM IST", opponent: "🏳️ Japan", pool: "Pool A", venue: "Wagener Hockey Stadium", type: "Pool Stage" },
    { date: "August 17, 2026", time: "~7:30 PM IST", opponent: "🇳🇱 Netherlands", pool: "Pool A", venue: "Wagener Hockey Stadium", type: "Pool Stage" },
    { date: "August 19, 2026", time: "~11:00 AM IST", opponent: "🇨🇱 Chile", pool: "Pool A", venue: "Wagener Hockey Stadium", type: "Pool Stage" },
    { date: "Aug 21-23, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
  ];

  const keyPlayers = [
    { flag: "https://flagcdn.com/w40/au.png", name: "Blake Govers", role: "Forward", rank: "Star Striker", desc: "A prolific goalscorer known for his thunderous strikes from the top of the D." },
    { flag: "https://flagcdn.com/w40/au.png", name: "Jane Claxton", role: "Midfielder", rank: "Hockeyroos Captain", desc: "The heart of the Australian women's midfield with over 200 caps." }
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏑 Pool C — Official Schedule</p>
          <h1 className="hero-title">Hockey World Cup 2026 Schedule Australia</h1>
          <p className="hero-description">
            Complete Australia men's & women's fixture guide, full time table, IST / USA / Canada match timings, results, and squad analysis. Download the complete <strong>Hockey World Cup 2026 Schedule PDF</strong> for Australia's matches.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✔️ Verified: <strong>Jamie Dwyer (5x FIH Player of the Year)</strong></div>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#fixtures" className="cta-button primary-cta">View Time Table & Results</a>
            <a href="/schedule-australia.pdf" download className="cta-button secondary-cta" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>📄 Download Schedule PDF</a>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">

        {/* Quick Stats */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.2rem", marginBottom: "4rem" }}>
          {[
            { icon: "🏆", label: "World Cup Titles", value: "1 (1975)" },
            { icon: "🌍", label: "FIH World Ranking (Men)", value: "#4" },
            { icon: "👩", label: "FIH Ranking (Women)", value: "#6" },
            { icon: "🏟️", label: "Venue", value: "Wagener Stadium, Amstelveen" },
            { icon: "📅", label: "Pool Stage Dates", value: "Aug 16–21, 2026" },
            { icon: "⚔️", label: "Pool C Rivals", value: "Ireland, Spain, South Africa, Japan, Netherlands, Chile" },
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
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇦🇺 Australia Men's Schedule — Pool C
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#c00030", color: "white" }}>
                  {["Date", "Time (IST)", "Opponent", "Stage", "Venue"].map((h) => (
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

        {/* Women's Schedule */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #f43f5e", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇦🇺 Australia Women's Schedule — Pool A
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#f43f5e", color: "white" }}>
                  {["Date", "Time (IST)", "Opponent", "Stage", "Venue"].map((h) => (
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
                  <img src={p.flag} width="28" height="18" alt="Australia flag" style={{ borderRadius: "3px" }} />
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

        {/* Analyst Prediction */}
        <section style={{ background: "linear-gradient(135deg, rgba(192,0,48,0.04) 0%, #f8fafc 100%)", border: "1px solid rgba(192,0,48,0.12)", padding: "2.5rem", borderRadius: "24px", marginBottom: "4rem", boxShadow: "0 8px 30px rgba(15,23,42,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2rem" }}>🏑</span>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", fontStyle: "italic", color: "var(--text-main)", margin: 0 }}>Analyst's Australia Preview</h2>
          </div>
          <div style={{ fontSize: "1rem", lineHeight: "1.9", color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1.2rem" }}>
              <strong style={{ color: "var(--text-main)" }}>Pool D is Australia's toughest-ever World Cup group draw.</strong> Facing Pakistan, England, and Wales means all three games are pressure matches with no easy points. Australia's strength lies in their structured penalty corner execution led by Harmanpreet Singh and fast counter-attack transitions.
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              The key match is <strong style={{ color: "#c00030" }}>Australia vs Pakistan</strong> — a rivalry that transcends sport. With both teams in the same pool, a direct Pool D clash is guaranteed. Australia holds a strong recent head-to-head record, winning 7 of the last 10 senior matches.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text-main)" }}>Prediction:</strong> Australia qualifies for the Second Stage from Pool D, likely finishing 2nd behind England. Quarter-final qualification is realistic; a semi-final run depends on form against top European opposition. Australia Women have the squad to surprise — watch for an upset against China.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — Australia at HWC 2026
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        {/* Internal Links */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", marginBottom: "1.2rem" }}>📌 Related Pages</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              { href: "/schedule", label: "📅 Full Tournament Schedule" },
              { href: "/live-scores", label: "🔴 Live Scores" },
              { href: "/points-table", label: "📊 Points Table" },
              { href: "/h2h", label: "⚔️ Australia vs Pakistan H2H" },
              { href: "/broadcasters", label: "📺 Watch in Australia (Star Sports)" },
              { href: "/hockey-world-cup-2026-schedule-pakistan", label: "🇵🇰 Pakistan Page" },
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
