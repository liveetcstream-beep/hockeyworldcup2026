import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Groups: All Pools Men's & Women's",
  description: "Complete FIH Hockey World Cup 2026 pool groups for Men's & Women's. See Pools A, B, C, D teams, match fixtures, and qualification rules.",
  alternates: {
    canonical: `${BASE}/hockey-world-cup-2026-groups`,
  },
  openGraph: {
    title: "Hockey World Cup 2026 Groups: All Pools Men's & Women's",
    description: "Complete FIH Hockey World Cup 2026 pool groups for Men's & Women's. See Pools A, B, C, D teams, match fixtures, and qualification rules.",
    url: `${BASE}/hockey-world-cup-2026-groups`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Groups: All Pools Men's & Women's",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Groups: All Pools Men's & Women's",
    description: "Complete FIH Hockey World Cup 2026 pool groups for Men's & Women's. See Pools A, B, C, D teams, match fixtures, and qualification rules.",
    images: ["/og-image.jpg"],
  },
};

const mensPools = [
  {
    pool: "A", color: "#0284c7",
    teams: [
      { code: "nl", name: "Netherlands", rank: "#2 (3613.06 pts)" },
      { code: "ar", name: "Argentina", rank: "#7 (3264.51 pts)" },
      { code: "nz", name: "New Zealand", rank: "#11 (2736.73 pts)" },
      { code: "jp", name: "Japan", rank: "#16 (2411.96 pts)" },
    ],
    danger: "Netherlands — Co-Hosts & 3-Time Champions",
  },
  {
    pool: "B", color: "#7c3aed",
    teams: [
      { code: "be", name: "Belgium", rank: "#1 (World No. 1, 3838.25 pts)" },
      { code: "de", name: "Germany", rank: "#5 (Reigning Champions, 3406.20 pts)" },
      { code: "fr", name: "France", rank: "#9 (2795.56 pts)" },
      { code: "my", name: "Malaysia", rank: "#14 (2451.93 pts)" },
    ],
    danger: "Belgium vs Germany — Rematch of 2023 World Cup Final",
  },
  {
    pool: "C", color: "#d97706",
    teams: [
      { code: "au", name: "Australia", rank: "#4 (3494.67 pts)" },
      { code: "es", name: "Spain", rank: "#6 (3296.83 pts)" },
      { code: "ie", name: "Ireland", rank: "#10 (2795.27 pts)" },
      { code: "za", name: "South Africa", rank: "#13 (2541.82 pts)" },
    ],
    danger: "Australia — 3-Time World Champions",
  },
  {
    pool: "D", color: "#c00030",
    teams: [
      { code: "gb-eng", name: "England", rank: "#3 (3599.34 pts)" },
      { code: "in", name: "India", rank: "#8 (3233.64 pts)" },
      { code: "pk", name: "Pakistan", rank: "#12 (4-Time Champions, 2549.86 pts)" },
      { code: "gb-wls", name: "Wales", rank: "#15 (2428.82 pts)" },
    ],
    danger: "India vs Pakistan — Biggest Asian Derby in Amstelveen",
  },
];

const womensPools = [
  {
    pool: "A", color: "#f43f5e",
    teams: [
      { code: "nl", name: "Netherlands", rank: "#1 (Defending Champions, 3640 pts)" },
      { code: "au", name: "Australia", rank: "#5 (2870 pts)" },
      { code: "cl", name: "Chile", rank: "#14 (1820 pts)" },
      { code: "jp", name: "Japan", rank: "#10 (2250 pts)" },
    ],
    danger: "Netherlands vs Australia — High-Pace Clash",
  },
  {
    pool: "B", color: "#7c3aed",
    teams: [
      { code: "ar", name: "Argentina", rank: "#2 (Las Leonas, 3120 pts)" },
      { code: "de", name: "Germany", rank: "#4 (2890 pts)" },
      { code: "us", name: "United States", rank: "#11 (2180 pts)" },
      { code: "gb-sct", name: "Scotland", rank: "#15 (1740 pts)" },
    ],
    danger: "Argentina vs Germany — Pool B Showdown",
  },
  {
    pool: "C", color: "#d97706",
    teams: [
      { code: "be", name: "Belgium", rank: "#3 (Red Panthers, 2980 pts)" },
      { code: "es", name: "Spain", rank: "#8 (2580 pts)" },
      { code: "nz", name: "New Zealand", rank: "#12 (2090 pts)" },
      { code: "ie", name: "Ireland", rank: "#13 (2010 pts)" },
    ],
    danger: "Belgium — Home Advantage at Belfius Arena",
  },
  {
    pool: "D", color: "#c00030",
    teams: [
      { code: "cn", name: "China", rank: "#6 (Olympic Silver Medalists, 2740 pts)" },
      { code: "gb-eng", name: "England", rank: "#7 (2690 pts)" },
      { code: "in", name: "India", rank: "#9 (2490 pts)" },
      { code: "za", name: "South Africa", rank: "#16 (1680 pts)" },
    ],
    danger: "China vs India — Marquee Asian Rivalry",
  },
];

export default function GroupsPage() {
  const faqItems = [
    {
      question: "Hockey World Cup 2026 mein kitne pools hain?",
      answer:
        "FIH Hockey World Cup 2026 mein 4 pools hain (A, B, C, D) — Men's aur Women's dono tournaments ke liye. Har pool mein 4 teams hain. Total 16 men's teams aur 16 women's teams (20 unique countries) participate kar rahi hain.",
    },
    {
      question: "Pool se kaise teams qualify karti hain next stage ke liye?",
      answer:
        "Har pool se top 2 teams Second Group Phase mein qualify karti hain. Pools A & D ke top 2 teams Pool E banate hain (Amstelveen), aur Pools B & C ke top 2 teams Pool F banate hain (Wavre). Pools E aur F ke top 2 teams direct Semi-Finals mein advance karte hain.",
    },
    {
      question: "India aur Pakistan ek hi pool mein hain?",
      answer:
        "Haan! India aur Pakistan dono Men's Pool D mein hain — jinke saath Wales aur England bhi hain. India vs Pakistan Pool D derby 19 August ko Wagener Stadium Amstelveen mein 15:00 CEST (18:30 IST / 18:00 PKT) par schedule hai.",
    },
    {
      question: "Germany Pool B mein Belgium ke saath hai — yeh kyon dangerous draw hai?",
      answer:
        "Germany (reigning 2023 World Champions, Rank #5) aur Belgium (World Rank #1, co-host) Pool B mein hain. Germany vs Belgium Pool B match 17 August ko 20:30 CEST par Belfius Hockey Arena Wavre mein hoga.",
    },
    {
      question: "Grand Finals kab aur kahan khele jaenge?",
      answer:
        "Women's Grand Final Saturday, 29 August 2026 ko Wagener Stadium Amstelveen mein hoga. Men's Grand Final Sunday, 30 August 2026 ko 16:30 CEST par Belfius Hockey Arena Wavre mein hoga.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏑 Pool Draw · Belgium &amp; Netherlands 2026</p>
          <h1 className="hero-title">Hockey World Cup 2026 — All Groups &amp; Pools</h1>
          <p className="hero-description">
            Complete pool groups for FIH Hockey World Cup 2026. Men's and Women's Pool A, B, C, D with all 16 qualified nations, rankings, key rivalries, and Second Stage qualification rules.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✍️ Verified by: <strong>Marc Devos, Senior Hockey Journalist</strong></div>
            <div className="eeat-badge">⚡ Official Source: <strong>FIH TMS &amp; Schedule v2</strong></div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Tournament Format Quick Explainer */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", marginBottom: "1.2rem" }}>📋 Official 2026 Tournament Pathway</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              { step: "1", label: "Pool Stage (Aug 15–20)", desc: "4 pools × 4 teams. Round-robin within pool. Top 2 from each pool advance to Championship Pools E & F.", color: "#0284c7" },
              { step: "2", label: "Second Stage (Aug 21–24)", desc: "Pools A+D form Pool E (Amstelveen). Pools B+C form Pool F (Wavre). Top 2 from E & F reach Semi-Finals.", color: "#7c3aed" },
              { step: "3", label: "Semi-Finals (Aug 27–28)", desc: "Women's Semi-Finals Aug 27 (Amstelveen); Men's Semi-Finals Aug 28 (Wavre).", color: "#d97706" },
              { step: "4", label: "Grand Finals (Aug 29–30)", desc: "Women's Final Saturday Aug 29 (Amstelveen); Men's Final Sunday Aug 30 (Wavre, 16:30 CEST).", color: "#c00030" },
            ].map((s) => (
              <div key={s.step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: s.color, color: "white", fontWeight: "900", fontSize: "1.1rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.step}</div>
                <div>
                  <div style={{ fontWeight: "700", color: "var(--text-main)", fontSize: "0.9rem", marginBottom: "0.3rem" }}>{s.label}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.6" }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Men's Pools */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #0284c7", paddingLeft: "1rem", marginBottom: "2rem" }}>
            🏑 Men's Tournament — All 4 Pools
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {mensPools.map((pool) => (
              <div key={pool.pool} style={{ background: "var(--bg-secondary)", border: `2px solid ${pool.color}22`, borderTop: `4px solid ${pool.color}`, borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                <div style={{ background: `${pool.color}15`, padding: "1rem 1.4rem", borderBottom: `1px solid ${pool.color}22` }}>
                  <div style={{ fontWeight: "900", fontSize: "1.3rem", color: pool.color, fontStyle: "italic" }}>Pool {pool.pool}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>⚡ {pool.danger}</div>
                </div>
                <div style={{ padding: "0" }}>
                  {pool.teams.map((t, i) => (
                    <div key={t.code} style={{ display: "flex", alignItems: "center", gap: "0.9rem", padding: "0.85rem 1.4rem", borderBottom: i < pool.teams.length - 1 ? "1px solid var(--border-color)" : "none", background: i === 0 ? `${pool.color}06` : "transparent" }}>
                      <span style={{ width: "20px", textAlign: "center", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-muted)" }}>{i + 1}</span>
                      <img src={`https://flagcdn.com/w40/${t.code}.png`} width="24" height="16" alt={`${t.name} flag`} style={{ borderRadius: "2px" }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: "700", color: "var(--text-main)", fontSize: "0.95rem" }}>{t.name}</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{t.rank}</div>
                      </div>
                      {i === 0 && <span style={{ background: pool.color, color: "white", borderRadius: "6px", padding: "0.15rem 0.5rem", fontSize: "0.7rem", fontWeight: "700" }}>Top Seed</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Women's Pools */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #f43f5e", paddingLeft: "1rem", marginBottom: "2rem" }}>
            🏑 Women's Tournament — All 4 Pools
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {womensPools.map((pool) => (
              <div key={pool.pool} style={{ background: "var(--bg-secondary)", border: `2px solid #f43f5e22`, borderTop: `4px solid #f43f5e`, borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                <div style={{ background: `#f43f5e15`, padding: "1rem 1.4rem", borderBottom: `1px solid #f43f5e22` }}>
                  <div style={{ fontWeight: "900", fontSize: "1.3rem", color: "#f43f5e", fontStyle: "italic" }}>Pool {pool.pool}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>⚡ {pool.danger}</div>
                </div>
                <div>
                  {pool.teams.map((t, i) => (
                    <div key={t.code} style={{ display: "flex", alignItems: "center", gap: "0.9rem", padding: "0.85rem 1.4rem", borderBottom: i < pool.teams.length - 1 ? "1px solid var(--border-color)" : "none", background: i === 0 ? `#f43f5e06` : "transparent" }}>
                      <span style={{ width: "20px", textAlign: "center", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-muted)" }}>{i + 1}</span>
                      <img src={`https://flagcdn.com/w40/${t.code}.png`} width="24" height="16" alt={`${t.name} flag`} style={{ borderRadius: "2px" }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: "700", color: "var(--text-main)", fontSize: "0.95rem" }}>{t.name}</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{t.rank}</div>
                      </div>
                      {i === 0 && <span style={{ background: "#f43f5e", color: "white", borderRadius: "6px", padding: "0.15rem 0.5rem", fontSize: "0.7rem", fontWeight: "700" }}>Top Seed</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Clashes */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🔥 Must-Watch Pool Stage Clashes
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.2rem" }}>
            {[
              { match: "🇮🇳 India vs 🇵🇰 Pakistan", pool: "Men's Pool D", why: "The sub-continental derby at Wagener Stadium on Aug 19 (15:00 CEST / 18:30 IST).", heat: "🔥🔥🔥🔥🔥" },
              { match: "🇩🇪 Germany vs 🇧🇪 Belgium", pool: "Men's Pool B", why: "Reigning 2023 champions vs co-host nation at Belfius Arena on Aug 17 (20:30 CEST).", heat: "🔥🔥🔥🔥" },
              { match: "🇳🇱 Netherlands vs 🇦🇺 Australia", pool: "Women's Pool A", why: "World's two best women's teams at Wagener Stadium on Aug 17 (18:00 CEST).", heat: "🔥🔥🔥🔥🔥" },
              { match: "🇦🇺 Australia vs 🇮🇪 Ireland", pool: "Men's Pool C", why: "Australia edged Ireland 2-1 in Wavre on Aug 16.", heat: "🔥🔥🔥" },
              { match: "🇨🇳 China vs 🇮🇳 India", pool: "Women's Pool D", why: "Asian rivals and Olympic silver medalists clash in Amstelveen on Aug 16 (13:00 CEST).", heat: "🔥🔥🔥🔥" },
              { match: "🇦🇷 Argentina vs 🇩🇪 Germany", pool: "Women's Pool B", why: "Two powerhouse women's hockey nations in Pool B clash on Aug 17 (17:00 CEST).", heat: "🔥🔥🔥🔥" },
            ].map((clash) => (
              <div key={clash.match} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.4rem", boxShadow: "0 4px 16px rgba(15,23,42,0.05)" }}>
                <div style={{ fontWeight: "800", fontSize: "1rem", color: "var(--text-main)", marginBottom: "0.4rem" }}>{clash.match}</div>
                <div style={{ fontSize: "0.75rem", background: "rgba(192,0,48,0.1)", color: "#c00030", borderRadius: "6px", padding: "0.2rem 0.6rem", display: "inline-block", fontWeight: "600", marginBottom: "0.6rem" }}>{clash.pool}</div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6", margin: "0 0 0.5rem 0" }}>{clash.why}</p>
                <div style={{ fontSize: "1.1rem" }}>{clash.heat}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — HWC 2026 Groups
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        {/* Internal Links */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", marginBottom: "1.2rem" }}>📌 Explore More</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              { href: "/schedule", label: "📅 Full Match Schedule" },
              { href: "/live-scores", label: "🔴 Live Scores" },
              { href: "/points-table", label: "📊 Points Table & Standings" },
              { href: "/h2h", label: "⚔️ Head-to-Head Records" },
              { href: "/format", label: "🏆 Tournament Format Explained" },
              { href: "/hockey-world-cup-2026-schedule-india", label: "🇮🇳 India Team Guide" },
              { href: "/hockey-world-cup-2026-schedule-pakistan", label: "🇵🇰 Pakistan Team Guide" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "var(--bg-tertiary)", color: "var(--text-main)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "0.5rem 1rem", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none" }}>
                {link.label}
              </a>
            ))}
          </div>
        </section>

      
        {/* Tournament Rules & Venue Postal Codes */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem 2rem", margin: "2rem 0" }}>
          <h3 style={{ color: "var(--text-main)", fontSize: "1.2rem", fontWeight: "800", marginBottom: "0.8rem" }}>
            📌 FIH Tournament Format & Venue Logistics
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.7", marginBottom: "1rem" }}>
            The 16 competing teams are split into 4 pools of 4. Pool winners advance directly to the Quarter-Finals. Second and third-placed teams compete in crossover playoff matches. Tie-breakers: Total Points &gt; Total Wins &gt; Goal Difference &gt; Goals Scored &gt; Head-to-Head Record.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "600" }}>
            <span>📍 Wagener Stadium: Nieuwe Kalfjeslaan 21, 1182 AM Amstelveen (NL)</span>
            <span>📍 Belfius Hockey Arena: Avenue de la Toison d'Or, 1300 Wavre (BE)</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
