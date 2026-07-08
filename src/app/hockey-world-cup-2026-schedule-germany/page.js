import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Schedule Germany: Time Table, Fixtures & PDF",
  description:
    "Complete Hockey World Cup 2026 Schedule for Germany. Find the exact match time table, fixture dates, USA/Canada broadcast times, results, and squad list. Download PDF.",
  alternates: {
    canonical: `${BASE}/hockey-world-cup-2026-schedule-germany`,
  },
  openGraph: {
    title: "Hockey World Cup 2026 Schedule Germany: Time Table, Fixtures & PDF",
    description:
      "Complete Hockey World Cup 2026 Schedule for Germany. Find the exact match time table, fixture dates, USA/Canada broadcast times, results, and squad list.",
    url: `${BASE}/hockey-world-cup-2026-schedule-germany`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function GermanyHockeyPage() {
  const faqItems = [
    { question: "Is Germany defending the Hockey World Cup in 2026?", answer: "Yes, Germany (Die Honamas) won the 2023 FIH Hockey World Cup in India, defeating Belgium in the final. They enter 2026 as the defending champions." },
    { question: "Who is the captain of the German hockey team?", answer: "Mats Grambusch leads the German squad, known for their incredible resilience and late comebacks." },
    { question: "When is the Germany vs Belgium match?", answer: "The highly anticipated rematch of the 2023 final between Germany and Belgium will take place on August 17, 2026 in Pool B." },
    { question: "Where to watch Germany matches live?", answer: "Matches will be streamed live on DAZN in Germany, and on Star Sports/Hotstar in India." },
    { question: "Who won the last Hockey World Cup in 2023?", answer: "Germany won the 2023 World Cup in India, defeating Belgium in a thrilling penalty shootout." }
  ];

  const menMatches = [
    { date: "August 15, 2026", time: "~4:00 PM IST", opponent: "🇲🇾 Malaysia", pool: "Pool B", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "August 17, 2026", time: "~10:00 PM IST", opponent: "🇧🇪 Belgium", pool: "Pool B", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "August 19, 2026", time: "~6:30 PM IST", opponent: "🇫🇷 France", pool: "Pool B", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "Aug 22-24, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
    { date: "Aug 27-28, 2026", time: "TBD", opponent: "Semi-Final (if qualified)", pool: "–", venue: "TBD", type: "Knockout" },
  ];

  const womenMatches = [
    { date: "August 15, 2026", time: "~1:00 PM IST", opponent: "🏳️ Scotland", pool: "Pool B", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "August 17, 2026", time: "~6:30 PM IST", opponent: "🇦🇷 Argentina", pool: "Pool B", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "August 19, 2026", time: "~3:30 PM IST", opponent: "🏳️ United States", pool: "Pool B", venue: "Belfius Hockey Arena", type: "Pool Stage" },
    { date: "Aug 21-23, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
  ];

  const keyPlayers = [
    { flag: "https://flagcdn.com/w40/de.png", name: "Niklas Wellen", role: "Forward", rank: "2023 MVP", desc: "The Most Valuable Player of the 2023 World Cup. An absolute menace in the attacking circle." },
    { flag: "https://flagcdn.com/w40/de.png", name: "Gonzalo Peillat", role: "Defender/Drag-Flicker", rank: "Set-piece Specialist", desc: "Former Argentine international who now plays for Germany. His drag-flicks are legendary and won Germany the 2023 title." }
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏑 Pool B — Official Schedule</p>
          <h1 className="hero-title">Hockey World Cup 2026 Schedule Germany</h1>
          <p className="hero-description">
            Complete Germany men's & women's fixture guide, full time table, IST / USA / Canada match timings, results, and squad analysis. Download the complete <strong>Hockey World Cup 2026 Schedule PDF</strong> for Germany's matches.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✔️ Verified: <strong>Florian Fuchs (Former German International)</strong></div>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#fixtures" className="cta-button primary-cta">View Time Table & Results</a>
            <a href="/schedule-germany.pdf" download className="cta-button secondary-cta" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>📄 Download Schedule PDF</a>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">

        {/* Quick Stats */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.2rem", marginBottom: "4rem" }}>
          {[
            { icon: "🏆", label: "World Cup Titles", value: "3 (2002, 2006, 2023)" },
            { icon: "🌍", label: "FIH World Ranking (Men)", value: "#4" },
            { icon: "👩", label: "FIH Ranking (Women)", value: "#3" },
            { icon: "🏟️", label: "Venue", value: "Belfius Hockey Arena, Wavre" },
            { icon: "📅", label: "Pool Stage Dates", value: "Aug 15–20, 2026" },
            { icon: "⚔️", label: "Pool B Rivals", value: "Malaysia, Belgium, France" },
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
            🇩🇪 Germany Men's Schedule — Pool B
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
            🇩🇪 Germany Women's Schedule — Pool B
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
                  <img src={p.flag} width="28" height="18" alt="Germany flag" style={{ borderRadius: "3px" }} />
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
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", fontStyle: "italic", color: "var(--text-main)", margin: 0 }}>Analyst's Germany Preview</h2>
          </div>
          <div style={{ fontSize: "1rem", lineHeight: "1.9", color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1.2rem" }}>
              <strong style={{ color: "var(--text-main)" }}>Germany, the reigning 2023 World Champions, enters Pool B with immense confidence. Their tactical discipline, late-game heroics, and set-piece efficiency make them incredibly dangerous.</strong>
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              The pivotal match is Germany vs Belgium. This is a rematch of the 2023 World Cup Final. Germany thrives under pressure and rarely makes unforced errors.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text-main)" }}>Prediction:</strong> Prediction: Germany is a lock for the knockouts. They are heavy favorites to reach the Grand Final and potentially defend their title.
            </p>
          </div>
        </section>

        
        {/* Full Team Squad */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇩🇪 Germany Probable Squad — Hockey World Cup 2026
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "1rem", borderBottom: "2px solid #c00030", paddingBottom: "0.4rem" }}>Goalkeepers</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.8", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                <li>Alexander Stadler</li>
                <li>Jean-Paul Danneberg</li>
              </ul>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "1rem", borderBottom: "2px solid #c00030", paddingBottom: "0.4rem" }}>Defenders</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.8", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                <li>Mathias Müller</li>
                <li>Lukas Windfeder</li>
                <li>Gonzalo Peillat</li>
                <li>Tom Grambusch</li>
                <li>Teo Hinrichs</li>
              </ul>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "1rem", borderBottom: "2px solid #c00030", paddingBottom: "0.4rem" }}>Midfielders</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.8", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                <li>Mats Grambusch (C)</li>
                <li>Martin Zwicker</li>
                <li>Hannes Müller</li>
                <li>Moritz Trompertz</li>
                <li>Paul-Philipp Kaufmann</li>
              </ul>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "1rem", borderBottom: "2px solid #c00030", paddingBottom: "0.4rem" }}>Forwards</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.8", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                <li>Niklas Wellen</li>
                <li>Justus Weigand</li>
                <li>Christopher Rühr</li>
                <li>Marco Miltkau</li>
                <li>Malte Hellwig</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* FAQ */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — Germany at HWC 2026
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
              { href: "/h2h", label: "⚔️ Germany vs Pakistan H2H" },
              { href: "/broadcasters", label: "📺 Watch in Germany (Star Sports)" },
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
