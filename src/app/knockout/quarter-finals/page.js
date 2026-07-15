import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Quarter-Finals — Bracket, Schedule & Scenarios",
  description: "Complete guide to the Hockey World Cup 2026 Quarter-Finals. Bracket structure, qualification scenarios from all four pools, match timings, venue details and expert analysis.",
  alternates: { canonical: `${BASE}/knockout/quarter-finals` },
  openGraph: {
    title: "Hockey World Cup 2026 Quarter-Finals — Bracket, Schedule & Scenarios",
    description: "Complete guide to the HWC 2026 Quarter-Finals — bracket, qualification paths, timings and venue details.",
    url: `${BASE}/knockout/quarter-finals`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hockey World Cup 2026 Quarter-Finals Bracket" }],
  },
};

const faqItems = [
  { q: "When are the Hockey World Cup 2026 Quarter-Finals?", a: "The Quarter-Finals are scheduled for August 24–25, 2026 across both host venues — Wagener Stadium in Amstelveen and Belfius Hockey Arena in Wavre." },
  { q: "How many teams qualify for the Quarter-Finals?", a: "Eight teams qualify for the Quarter-Finals: the top two from each of the four pool stages (Pools A, B, C, and D)." },
  { q: "What format are the Quarter-Finals?", a: "Quarter-Finals are single knockout matches. The winner progresses to the Semi-Finals on August 27. There is no extra time — tied matches go directly to a penalty shootout." },
  { q: "Can India qualify for the Hockey World Cup Quarter-Finals?", a: "Yes. India needs a top-two finish in Pool D (ahead of either Pakistan, England, or Wales) to qualify for the Quarter-Finals." },
  { q: "Who do Pool D winners play in the Quarter-Finals?", a: "Pool D winners play the runner-up of Pool C in a Quarter-Final. Pool D runners-up play the winner of Pool C." },
  { q: "Will India vs Netherlands happen in the Quarter-Finals?", a: "If India tops Pool D and Netherlands tops Pool A, they would be in opposite sides of the bracket. They would only meet in the Final, not the Quarter-Finals or Semi-Finals." },
  { q: "What time are the Quarter-Finals in IST?", a: "Quarter-Final timings in IST will be 15:30 and 19:30 approximately. Official match times will be confirmed by FIH closer to the tournament." }
];

const qualificationPaths = [
  { pool: "Pool A", venue: "Wagener Stadium, Amstelveen", teams: ["Netherlands 🇳🇱", "Argentina 🇦🇷", "Spain 🇪🇸", "South Africa 🇿🇦"], qfPath: "Pool A Top 2 → QF spots 1 & 4" },
  { pool: "Pool B", venue: "Belfius Hockey Arena, Wavre", teams: ["Belgium 🇧🇪", "Germany 🇩🇪", "France 🇫🇷", "Malaysia 🇲🇾"], qfPath: "Pool B Top 2 → QF spots 2 & 3" },
  { pool: "Pool C", venue: "Belfius Hockey Arena, Wavre", teams: ["Australia 🇦🇺", "New Zealand 🇳🇿", "Ireland 🇮🇪", "Chile 🇨🇱"], qfPath: "Pool C Top 2 → QF spots 5 & 8" },
  { pool: "Pool D", venue: "Wagener Stadium, Amstelveen", teams: ["India 🇮🇳", "Pakistan 🇵🇰", "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿"], qfPath: "Pool D Top 2 → QF spots 6 & 7" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
};
const bcSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Knockout", item: `${BASE}/knockout` },
    { "@type": "ListItem", position: 3, name: "Quarter-Finals", item: `${BASE}/knockout/quarter-finals` },
  ]
};

export default function QuarterFinalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏆 Knockout Stage — Hockey World Cup 2026</p>
          <h1 className="hero-title">Quarter-Finals — Bracket, Scenarios & Match Guide</h1>
          <p className="hero-description">
            Your complete guide to the Hockey World Cup 2026 Quarter-Finals. How teams qualify from each pool, the bracket structure, match timings across all timezones, venue details, and expert scenario analysis.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✍️ Analysis by <strong>Marc Devos</strong></div>
            <div className="eeat-badge">📅 Schedule: <strong>Aug 24–25, 2026</strong></div>
            <div className="eeat-badge">🎓 Source: <strong>FIH Official Format</strong></div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <span style={{ color: "var(--text-muted)", textDecoration: "none" }}>Knockout</span>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <span style={{ color: "var(--text-main)", fontWeight: 600 }}>Quarter-Finals</span>
        </nav>

        {/* How Qualification Works */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            How Do Teams Qualify for the Quarter-Finals?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            The Hockey World Cup 2026 features 16 nations split into four pools of four teams each. The top two finishers from each pool advance directly to the Quarter-Finals — a total of eight teams. The remaining two teams from each pool are eliminated. There is no second-chance cross-over stage in the 2026 format (unlike some previous tournaments), making every group stage point critically important.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Pool standings are determined by points (Win = 3, Draw = 1, Loss = 0), then by goal difference, then by goals scored, then by head-to-head result. This means late pool matches — particularly India vs Pakistan on August 19 — can have massive qualification implications depending on earlier results.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.2rem" }}>
            {qualificationPaths.map((pool) => (
              <div key={pool.pool} style={{
                background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
                borderRadius: "14px", padding: "1.5rem",
              }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--primary)", marginBottom: "0.8rem" }}>{pool.pool}</h3>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "0.8rem" }}>📍 {pool.venue}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 0.8rem 0" }}>
                  {pool.teams.map(t => <li key={t} style={{ fontSize: "0.9rem", padding: "0.3rem 0", borderBottom: "1px solid var(--border-color)", color: "var(--text-main)" }}>{t}</li>)}
                </ul>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontStyle: "italic" }}>➡️ {pool.qfPath}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bracket Visual */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "18px", padding: "2rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.5rem" }}>
            Quarter-Final Bracket — Aug 24–25, 2026
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              { match: "QF 1", time: "Aug 24 — 14:00 CEST", team1: "Pool A Winner", team2: "Pool B Runner-Up", venue: "TBD" },
              { match: "QF 2", time: "Aug 24 — 18:30 CEST", team1: "Pool B Winner", team2: "Pool A Runner-Up", venue: "TBD" },
              { match: "QF 3", time: "Aug 25 — 14:00 CEST", team1: "Pool C Winner", team2: "Pool D Runner-Up", venue: "TBD" },
              { match: "QF 4", time: "Aug 25 — 18:30 CEST", team1: "Pool D Winner", team2: "Pool C Runner-Up", venue: "TBD" },
            ].map((qf) => (
              <div key={qf.match} style={{
                background: "var(--bg-tertiary)", borderRadius: "12px",
                border: "1px solid var(--border-color)", padding: "1.2rem",
              }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.6rem" }}>
                  {qf.match}
                </div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.3rem" }}>
                  {qf.team1}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>vs</div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.8rem" }}>
                  {qf.team2}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>🕐 {qf.time}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Scenario Analysis */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            Quarter-Final Scenario Analysis — What India, Belgium and Australia Need
          </h2>
          <div style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>India (Pool D):</strong> India needs to finish in the top two of Pool D — either by winning two matches or winning one and drawing one against England, Pakistan, or Wales. If India tops Pool D, they will play Pool C&apos;s runner-up in QF 4 — most likely Ireland or New Zealand, both of whom India has historical advantages against. A Pool D runner-up finish leads to QF 3 against Pool C winners — potentially Australia, the world&apos;s second-ranked team. India&apos;s path is significantly better as a pool winner.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Belgium (Pool B):</strong> Belgium almost certainly tops Pool B — their squad depth and home advantage make finishing second very unlikely. As Pool B winners, Belgium plays Pool A&apos;s runner-up in QF 2, which could be Argentina or Spain. A Belgium vs Argentina quarter-final is one of the most compelling matchups of the knockout round.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Netherlands (Pool A):</strong> Netherlands are expected to top Pool A on home turf. As Pool A winners, they play Pool B&apos;s runner-up in QF 1 — potentially Germany or France. Netherlands vs Germany in a Quarter-Final would be a European heavyweight clash for the ages.
            </p>
            <p>
              <strong>Australia (Pool C):</strong> Australia should comfortably top Pool C. As Pool C winners, they play Pool D&apos;s runner-up in QF 3 — potentially Pakistan or England. Australia vs Pakistan would be an entertaining contrast of styles: Australia&apos;s high-press against Pakistan&apos;s counter-attacking setup.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "0.9rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "1rem" }}>Related Pages</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {[
              { text: "Semi-Finals Preview", href: "/knockout/semi-finals" },
              { text: "Final Guide", href: "/knockout/final" },
              { text: "Pool D Standings", href: "/pool-d" },
              { text: "Points Table", href: "/points-table" },
              { text: "India Results", href: "/results/india" },
              { text: "Belgium Results", href: "/results/belgium" },
              { text: "Live Scores", href: "/live-scores" },
            ].map(link => (
              <a key={link.href} href={link.href} style={{ padding: "0.55rem 1rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "8px", color: "var(--text-main)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600 }}>
                → {link.text}
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            Frequently Asked Questions — Hockey World Cup 2026 Quarter-Finals
          </h2>
          <FaqAccordion items={faqItems} />
        </section>
      </main>

      <Footer />
    </>
  );
}
