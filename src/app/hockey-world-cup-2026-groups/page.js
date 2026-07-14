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
      { code: "nl", name: "Netherlands", rank: "#1" },
      { code: "ar", name: "Argentina", rank: "#3" },
      { code: "cl", name: "Chile", rank: "#12" },
      { code: "nz", name: "New Zealand", rank: "#9" },
    ],
    danger: "Netherlands — World No.1 favorites",
  },
  {
    pool: "B", color: "#7c3aed",
    teams: [
      { code: "de", name: "Germany", rank: "#2 (Reigning Champions)" },
      { code: "my", name: "Malaysia", rank: "#10" },
      { code: "be", name: "Belgium", rank: "#3" },
      { code: "fr", name: "France", rank: "#11" },
    ],
    danger: "Germany vs Belgium — Pool of Death",
  },
  {
    pool: "C", color: "#d97706",
    teams: [
      { code: "au", name: "Australia", rank: "#4" },
      { code: "ie", name: "Ireland", rank: "#8" },
      { code: "es", name: "Spain", rank: "#7" },
      { code: "za", name: "South Africa", rank: "#15" },
    ],
    danger: "Australia — Perennial contenders",
  },
  {
    pool: "D", color: "#c00030",
    teams: [
      { code: "in", name: "India", rank: "#5" },
      { code: "gb-wls", name: "Wales", rank: "#14" },
      { code: "gb-eng", name: "England", rank: "#6" },
      { code: "pk", name: "Pakistan", rank: "#18" },
    ],
    danger: "India vs Pakistan Derby — Biggest Rivalry",
  },
];

const womensPools = [
  {
    pool: "A", color: "#f43f5e",
    teams: [
      { code: "nl", name: "Netherlands", rank: "#1 (Defending Champions)" },
      { code: "au", name: "Australia", rank: "#2" },
      { code: "jp", name: "Japan", rank: "#8" },
      { code: "cl", name: "Chile", rank: "#16" },
    ],
    danger: "Netherlands vs Australia — World's Best",
  },
  {
    pool: "B", color: "#7c3aed",
    teams: [
      { code: "ar", name: "Argentina", rank: "#3" },
      { code: "de", name: "Germany", rank: "#4" },
      { code: "gb-sct", name: "Scotland", rank: "#10" },
      { code: "us", name: "United States", rank: "#7" },
    ],
    danger: "Argentina — Strong South American squad",
  },
  {
    pool: "C", color: "#d97706",
    teams: [
      { code: "be", name: "Belgium", rank: "#5" },
      { code: "es", name: "Spain", rank: "#6" },
      { code: "nz", name: "New Zealand", rank: "#9" },
      { code: "fr", name: "France", rank: "#11" },
    ],
    danger: "Belgium — Home advantage at Wavre",
  },
  {
    pool: "D", color: "#c00030",
    teams: [
      { code: "cn", name: "China", rank: "#6" },
      { code: "in", name: "India", rank: "#6" },
      { code: "gb-eng", name: "England", rank: "#12" },
      { code: "za", name: "South Africa", rank: "#14" },
    ],
    danger: "China vs India — Asian Clash",
  },
];

export default function GroupsPage() {
  const faqItems = [
    {
      question: "Hockey World Cup 2026 mein kitne pools hain?",
      answer:
        "FIH Hockey World Cup 2026 mein 4 pools hain (A, B, C, D) — Men's aur Women's dono tournaments ke liye. Har pool mein 4 teams hain. Total 16 men's teams aur 16 women's teams participate kar rahi hain.",
    },
    {
      question: "Pool se kaise teams qualify karti hain next stage ke liye?",
      answer:
        "Har pool se top 2 teams Second Stage mein qualify karti hain. Pool A aur Pool D ke winners/runners-up Group E banate hain. Pool B aur C ke winners/runners-up Group F banate hain. Group E aur F ke top 2 teams semi-final mein jaate hain.",
    },
    {
      question: "India aur Pakistan ek hi pool mein hain?",
      answer:
        "Haan! India aur Pakistan dono Men's Pool D mein hain — jinke saath Wales aur England bhi hain. Yeh ek historic draw hai — India vs Pakistan Pool D derby iss tournament ka biggest match hoga.",
    },
    {
      question: "Germany Pool B mein Belgium ke saath hai — yeh kyon khatra hai?",
      answer:
        "Germany (reigning World Champions, Rank #2) aur Belgium (World Rank #3, co-host) Pool B mein hain. Germany vs Belgium Pool B match iss World Cup ka most-watched European match hoga. Dono teams semi-final favorites hain.",
    },
    {
      question: "Worst pool draw kiska hai Hockey World Cup 2026 mein?",
      answer:
        "Men's Pool B — Germany, Belgium, Malaysia, France — sabse tough pool hai. Germany aur Belgium dono potential champions hain. Pool D bhi kafi mushkil hai — India, Pakistan, England sab competitive teams hain.",
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
            <div className="eeat-badge">✍️ Verified: <strong>Marc Devos (Belgian Hockey Analyst)</strong></div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">

        {/* Tournament Format Quick Explainer */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", marginBottom: "1.2rem" }}>📋 How Qualification Works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              { step: "1", label: "Pool Stage (Aug 15–20)", desc: "4 pools × 4 teams. Round-robin within pool. Top 2 from each pool qualify for Second Stage.", color: "#0284c7" },
              { step: "2", label: "Second Stage (Aug 22–24)", desc: "Pool A+D → Group E. Pool B+C → Group F. Each team plays 2 matches. Top 2 from E & F reach semis.", color: "#7c3aed" },
              { step: "3", label: "Semi-Finals (Aug 27)", desc: "E1 vs F2 and F1 vs E2. Winners go to the Final. Losers play Bronze medal match.", color: "#d97706" },
              { step: "4", label: "Grand Final (Aug 30)", desc: "Men's Final at Belfius Arena, Wavre. Women's Final at Wagener Stadium, Amstelveen.", color: "#c00030" },
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
              { match: "🇮🇳 India vs 🇵🇰 Pakistan", pool: "Men's Pool D", why: "The sub-continental derby. World Cup's most-watched rivalry. India leads recent H2H 7-0.", heat: "🔥🔥🔥🔥🔥" },
              { match: "🇩🇪 Germany vs 🇧🇪 Belgium", pool: "Men's Pool B", why: "Reigning champions vs co-host nation. European grudge match.", heat: "🔥🔥🔥🔥" },
              { match: "🇳🇱 Netherlands vs 🇦🇺 Australia", pool: "Women's Pool A", why: "World's two best women's teams. No. 1 vs No. 2 — all-time classic.", heat: "🔥🔥🔥🔥🔥" },
              { match: "🇦🇺 Australia vs 🇮🇪 Ireland", pool: "Men's Pool C", why: "Australia always favorites — but Ireland known for upsets.", heat: "🔥🔥🔥" },
              { match: "🇨🇳 China vs 🇮🇳 India", pool: "Women's Pool D", why: "Asian rivals. Both teams have World Cup upset potential.", heat: "🔥🔥🔥🔥" },
              { match: "🇦🇷 Argentina vs 🇩🇪 Germany", pool: "Women's Pool B", why: "Two traditionally strong women's hockey nations in direct clash.", heat: "🔥🔥🔥🔥" },
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

      </main>
      <Footer />
    </>
  );
}
