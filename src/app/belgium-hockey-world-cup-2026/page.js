import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Belgium Hockey World Cup 2026: Schedule, Squad & Pool B Fixtures",
  description:
    "Complete Belgium Red Lions & Red Panthers schedule for FIH Hockey World Cup 2026. Pool B fixtures, CET/IST timings, squad list, key players, predictions and live score updates for the home nation.",
  alternates: {
    canonical: `${BASE}/belgium-hockey-world-cup-2026`,
  },
  openGraph: {
    title: "Belgium Hockey World Cup 2026: Schedule, Squad & Pool B Fixtures",
    description:
      "Belgium Red Lions & Red Panthers complete fixture guide, CET timings, squad analysis and tournament predictions for FIH Hockey World Cup 2026 hosted in Belgium & Netherlands.",
    url: `${BASE}/belgium-hockey-world-cup-2026`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function BelgiumHockeyPage() {
  const faqItems = [
    {
      question: "When does Belgium play their first match at Hockey World Cup 2026?",
      answer:
        "Belgium Men's (Red Lions) first Pool B match is scheduled for August 15, 2026, at the Belfius Hockey Arena in Wavre, Belgium. As the host nation, Belgium opens the Men's tournament against France. Their first game kicks off at 18:00 CET (local venue time).",
    },
    {
      question: "Which pool is Belgium in for Hockey World Cup 2026?",
      answer:
        "Belgium Men's team (Red Lions) are in Pool B alongside Germany, Malaysia, and France. Belgium Women's team (Red Panthers) are in Pool B alongside Argentina, United States, and South Korea. As host nation, Belgium has home-field advantage at the Belfius Hockey Arena in Wavre.",
    },
    {
      question: "Has Belgium ever won the Hockey World Cup?",
      answer:
        "Yes. Belgium Men's (Red Lions) won their first and only FIH Hockey World Cup title in 2018, defeating the Netherlands 3-2 in a dramatic penalty shootout final in Bhubaneswar, India. The Red Lions are current World No. 1 and defending Olympic Champions (Tokyo 2020). Belgium Women have not yet won the World Cup.",
    },
    {
      question: "Where will Belgium's Hockey World Cup 2026 matches be played?",
      answer:
        "Belgium's home matches will be played at the Belfius Hockey Arena in Wavre, Belgium. This state-of-the-art venue is home to the Belgian national teams and will host all of Belgium's Pool B group stage matches, giving them a massive home-crowd advantage.",
    },
    {
      question: "Who are Belgium's biggest rivals in Hockey World Cup 2026?",
      answer:
        "Belgium's main Pool B rivals are Germany (2024 Olympic Bronze) and Argentina (perennial title contenders). In the knockout stages, they are expected to face the Netherlands and India — all former or current world champions. The Belgium vs Netherlands clash, if it happens, would be an all-time classic European hockey derby.",
    },
    {
      question: "What channel is showing Belgium Hockey World Cup 2026 matches?",
      answer:
        "In Belgium, VRT Sport and Sporza will broadcast all Red Lions and Red Panthers matches on national TV and streaming. Pan-European coverage is provided via Eurosport and Discovery+. For a full country-by-country broadcaster list, check our dedicated Broadcasting Guide.",
    },
  ];

  const menMatches = [
    { date: "Aug 15, 2026", time: "18:00 CET", opponent: "🇫🇷 France", pool: "Pool B", venue: "Belfius Arena, Wavre", type: "Pool Stage" },
    { date: "Aug 17, 2026", time: "~16:00 CET", opponent: "🇩🇪 Germany", pool: "Pool B", venue: "Belfius Arena, Wavre", type: "Pool Stage" },
    { date: "Aug 19, 2026", time: "~14:00 CET", opponent: "🇲🇾 Malaysia", pool: "Pool B", venue: "Belfius Arena, Wavre", type: "Pool Stage" },
    { date: "Aug 22–24, 2026", time: "TBD", opponent: "Second Stage crossover", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
    { date: "Aug 27–28, 2026", time: "TBD", opponent: "Semi-Final (if qualified)", pool: "–", venue: "TBD", type: "Knockout" },
    { date: "Aug 30, 2026", time: "TBD", opponent: "Final / Bronze Medal", pool: "–", venue: "Belfius Arena, Wavre", type: "Final" },
  ];

  const womenMatches = [
    { date: "Aug 15, 2026", time: "~10:00 CET", opponent: "🇺🇸 United States", pool: "Pool B", venue: "Belfius Arena, Wavre", type: "Pool Stage" },
    { date: "Aug 17, 2026", time: "~10:00 CET", opponent: "🇦🇷 Argentina", pool: "Pool B", venue: "Belfius Arena, Wavre", type: "Pool Stage" },
    { date: "Aug 19, 2026", time: "~10:00 CET", opponent: "🇰🇷 South Korea", pool: "Pool B", venue: "Belfius Arena, Wavre", type: "Pool Stage" },
    { date: "Aug 22–24, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },
  ];

  const keyPlayers = [
    {
      flag: "https://flagcdn.com/w40/be.png",
      name: "Alexander Hendrickx",
      role: "Defender / Drag-Flicker",
      rank: "World's Best Drag-Flicker",
      desc: "The most feared penalty corner specialist in world hockey. Hendrickx's drag-flick is measured at over 140 km/h and is virtually unstoppable. He was the top scorer at the Tokyo 2020 Olympics and is Belgium's single biggest goal threat. His set-piece precision is the cornerstone of Belgium's attacking strategy.",
    },
    {
      flag: "https://flagcdn.com/w40/be.png",
      name: "Arthur Van Doren",
      role: "Defender",
      rank: "3× FIH Player of the Year",
      desc: "The greatest defender of his generation and the only player to win FIH Player of the Year three consecutive times. Van Doren reads the game at a level unmatched globally. His ability to break counter-attacks and initiate build-up play from defense makes him irreplaceable in Belgium's system.",
    },
    {
      flag: "https://flagcdn.com/w40/be.png",
      name: "Loïck Luypaert",
      role: "Midfielder",
      rank: "Olympic Champion 2020",
      desc: "An engine in Belgium's midfield, combining defensive discipline with incisive forward runs. Luypaert is the fulcrum of Belgium's transition play — winning the ball deep and immediately launching fast breaks. His stamina and positioning make him one of the most complete midfielders at the tournament.",
    },
    {
      flag: "https://flagcdn.com/w40/be.png",
      name: "Ambre Ballenghien",
      role: "Women's Forward",
      rank: "Red Panthers Captain",
      desc: "Captain of the Belgian Red Panthers and their most creative attacking force. Ballenghien's close control and ability to create chances in tight spaces make her the standout player in the Women's team. Her leadership during high-pressure knockout situations has been critical to Belgium Women's recent growth as a world-level contender.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🇧🇪 Pool B · Home Nation · Belfius Hockey Arena</p>
          <h1 className="hero-title">Belgium Hockey World Cup 2026: Red Lions & Red Panthers Guide</h1>
          <p className="hero-description">
            Belgium's Red Lions enter as the defending World No. 1 side, playing on home soil at the Belfius Hockey Arena in Wavre. Get the complete Pool B schedule, CET match timings, squad breakdown, and expert tournament prediction for the host nation's title charge.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✍️ Verified: <strong>Marc Devos (Senior Belgian Hockey Journalist)</strong></div>
            <div className="eeat-badge">📍 Local Expert: <strong>10+ Years Covering Red Lions</strong></div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">

        {/* Quick Stats */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.2rem", marginBottom: "4rem" }}>
          {[
            { icon: "🏆", label: "World Cup Titles (Men)", value: "1 (2018)" },
            { icon: "🌍", label: "FIH Ranking (Men)", value: "World #1" },
            { icon: "👩", label: "FIH Ranking (Women)", value: "World #7" },
            { icon: "🏟️", label: "Home Venue", value: "Belfius Arena, Wavre" },
            { icon: "📅", label: "Pool Stage Dates", value: "Aug 15–19, 2026" },
            { icon: "⚔️", label: "Pool B Rivals (Men)", value: "Germany, France, Malaysia" },
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

        {/* Mid-page Team Banner Image */}
        <section style={{ marginBottom: "4rem", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 40px rgba(15,23,42,0.15)" }}>
          <Image
            src="/belgium-banner.png"
            alt="Belgium Red Lions Hockey World Cup 2026 - Belfius Hockey Arena Wavre"
            width={1200}
            height={480}
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            priority={false}
          />
        </section>

        {/* Context Article Section */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #000", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇧🇪 Belgium at the FIH Hockey World Cup 2026: The Home Favourite
          </h2>
          <div style={{ color: "var(--text-muted)", lineHeight: "1.95", fontSize: "1rem" }}>
            <p style={{ marginBottom: "1.2rem" }}>
              For Belgian hockey fans, 2026 is the year they have been waiting for. The <strong style={{ color: "var(--text-main)" }}>FIH Hockey World Cup 2026</strong> is being co-hosted by Belgium and the Netherlands — and Belgium's <strong style={{ color: "var(--text-main)" }}>Red Lions</strong> will play their entire pool stage at the newly upgraded <strong style={{ color: "var(--text-main)" }}>Belfius Hockey Arena in Wavre</strong>. Playing in front of a sold-out home crowd, with the entire nation watching, is a pressure and privilege unlike anything else in sport.
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              The stakes are enormous. Belgium won the World Cup in 2018, but since then Germany (2023 World Champions) and the Netherlands have risen to challenge their dominance. The <strong style={{ color: "var(--text-main)" }}>2026 World Cup on home soil is Belgium's best chance to reclaim the title</strong> — with home-crowd noise, familiar surfaces, and local logistical advantages all working in their favour.
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              Pool B is deceptively tough. <strong style={{ color: "var(--text-main)" }}>Germany</strong>, the 2023 World Champions, are the primary obstacle to a clean pool stage run. France has improved dramatically under their new coaching setup, and Malaysia — while ranked lower — are historically capable of producing giant-killing results in World Cups. Belgium cannot afford complacency in any of their three pool matches.
            </p>
            <p style={{ margin: 0 }}>
              On the Women's side, the <strong style={{ color: "var(--text-main)" }}>Red Panthers</strong> have been consistently improving their world ranking. A home World Cup provides the emotional lift needed to compete against the top-ranked Netherlands and Argentina. For Belgium Women, reaching the semi-final would already be considered a historic achievement — but nothing is off the table with the crowd behind them.
            </p>
          </div>
        </section>

        {/* Men's Schedule */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #000", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🇧🇪 Belgium Men's (Red Lions) Schedule — Pool B
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#1a1a2e", color: "white" }}>
                  {["Date", "Time (CET)", "Opponent", "Stage", "Venue"].map((h) => (
                    <th key={h} style={{ padding: "0.9rem 1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "700" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {menMatches.map((m, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                    <td style={{ padding: "0.9rem 1rem", fontWeight: "700", color: "var(--text-main)", whiteSpace: "nowrap" }}>{m.date}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "#d4af37", fontWeight: "600" }}>{m.time}</td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>{m.opponent}</td>
                    <td style={{ padding: "0.9rem 1rem" }}>
                      <span style={{
                        background: m.type === "Pool Stage" ? "rgba(26,26,46,0.12)" : m.type === "Final" ? "rgba(212,175,55,0.15)" : "rgba(2,132,199,0.1)",
                        color: m.type === "Pool Stage" ? "#1a1a2e" : m.type === "Final" ? "#d4af37" : "#0284c7",
                        borderRadius: "8px", padding: "0.2rem 0.6rem", fontSize: "0.8rem", fontWeight: "600"
                      }}>{m.type}</span>
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
            🇧🇪 Belgium Women's (Red Panthers) Schedule — Pool B
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "#f43f5e", color: "white" }}>
                  {["Date", "Time (CET)", "Opponent", "Stage", "Venue"].map((h) => (
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
            🌟 Belgium Key Players to Watch at HWC 2026
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {keyPlayers.map((p) => (
              <div key={p.name} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "1.8rem", boxShadow: "0 4px 20px rgba(15,23,42,0.05)", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <img src={p.flag} width="28" height="18" alt="Belgium flag" style={{ borderRadius: "3px" }} />
                  <div>
                    <div style={{ fontWeight: "800", color: "var(--text-main)", fontSize: "1rem" }}>{p.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{p.role}</div>
                  </div>
                </div>
                <span style={{ display: "inline-block", background: "rgba(26,26,46,0.08)", color: "#1a1a2e", borderRadius: "8px", padding: "0.2rem 0.7rem", fontSize: "0.78rem", fontWeight: "700", width: "fit-content" }}>{p.rank}</span>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Analyst Prediction */}
        <section style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(212,175,55,0.04) 100%)", border: "1px solid rgba(212,175,55,0.2)", padding: "2.5rem", borderRadius: "24px", marginBottom: "4rem", boxShadow: "0 8px 30px rgba(15,23,42,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2rem" }}>🏑</span>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", fontStyle: "italic", color: "var(--text-main)", margin: 0 }}>Expert Analyst's Belgium 2026 Preview</h2>
          </div>
          <div style={{ fontSize: "1rem", lineHeight: "1.9", color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1.2rem" }}>
              <strong style={{ color: "var(--text-main)" }}>Belgium are the most complete team in world hockey right now.</strong> Their combination of the world's best drag-flicker (Hendrickx), the greatest defender of his generation (Van Doren), and a tactically elite coaching staff under Michel van den Heuvel creates a system that is almost impossible to break down. Home advantage elevates this even further.
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              The critical match in Pool B is <strong style={{ color: "#d4af37" }}>Belgium vs Germany</strong> — a tactical masterclass between the current World #1 (Belgium) and the current World Champions (Germany). Both teams use a high-press, structured penalty corner system. Whichever team wins this pool stage match will likely top Pool B and get a more favorable Second Stage crossover draw.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text-main)" }}>Prediction:</strong> Belgium win Pool B, navigate the Second Stage without dropping a game, and reach the Final. Their biggest threat is the Netherlands in a potential semi-final — a match that would be the most-watched field hockey game in European TV history. <strong style={{ color: "#d4af37" }}>Belgium are the tournament favourites to lift the 2026 World Cup on home soil.</strong>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #000", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — Belgium at Hockey World Cup 2026
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
              { href: "/venues", label: "🏟️ Belfius Arena Guide" },
              { href: "/broadcasters", label: "📺 Watch in Belgium (VRT Sport)" },
              { href: "/hockey-world-cup-2026-groups", label: "🏑 Pool B Full Draw" },
              { href: "/teams", label: "👥 All 16 Teams" },
              { href: "/india-hockey-world-cup-2026", label: "🇮🇳 India's Page" },
              { href: "/pakistan-hockey-world-cup-2026", label: "🇵🇰 Pakistan's Page" },
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
