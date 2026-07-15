import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Final — Date, Venue, Tickets & Streaming Guide",
  description: "Complete guide to the Hockey World Cup 2026 Final on August 31. Venue, match timings in IST and CEST, tickets, streaming options, trophy history and expert prediction.",
  alternates: { canonical: `${BASE}/knockout/final` },
  openGraph: {
    title: "Hockey World Cup 2026 Final — Date, Venue, Tickets & Streaming Guide",
    description: "Everything about the HWC 2026 Final on August 31 — venue, timings, tickets and streaming.",
    url: `${BASE}/knockout/final`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hockey World Cup 2026 Final Guide" }],
  },
};

const faqItems = [
  { q: "When is the Hockey World Cup 2026 Final?", a: "The Hockey World Cup 2026 Final is on August 31, 2026 at 18:30 CEST (22:00 IST / 16:30 GMT)." },
  { q: "Where is the Hockey World Cup 2026 Final being played?", a: "The Final venue will be confirmed after the Semi-Finals. Both Wagener Stadium (Amstelveen, Netherlands) and Belfius Hockey Arena (Wavre, Belgium) are candidates." },
  { q: "How can I watch the Final in India?", a: "The Final will be broadcast live on Star Sports and streamed on Disney+ Hotstar in India. It starts at 22:00 IST." },
  { q: "Are there tickets still available for the Hockey World Cup Final?", a: "Final tickets have extremely limited availability. Check the official portal tickets.hockeyworldcup2026.com immediately — do not buy from secondary markets as personalized verification is active." },
  { q: "What time is the Hockey World Cup 2026 Final in Pakistan?", a: "The Final starts at 20:30 PKT (Pakistan Standard Time, UTC+5) — same as 22:00 IST." },
  { q: "Has India ever played in the Hockey World Cup Final?", a: "Yes. India played in the Hockey World Cup Final in 1975 and won — beating Pakistan 2-1 in Kuala Lumpur. That remains India's only World Cup title." },
  { q: "Who has won the most Hockey World Cups?", a: "Pakistan has won the Men's Hockey World Cup the most times — four titles (1971, 1978, 1982, 1994). Netherlands has won 3 times, Germany 3 times, Australia 3 times." },
  { q: "What is the prize money for the Hockey World Cup 2026 Final winner?", a: "The winner of the Hockey World Cup 2026 receives the FIH World Cup Trophy and the top prize money tier. FIH's prize pool for the 2026 event was $4.5M USD total." }
];

const pastWinners = [
  { year: "2023", winner: "Belgium 🇧🇪", runner_up: "Australia 🇦🇺", venue: "Bhubaneswar/Rourkela, India" },
  { year: "2018", winner: "Belgium 🇧🇪", runner_up: "Netherlands 🇳🇱", venue: "Bhubaneswar, India" },
  { year: "2014", winner: "Australia 🇦🇺", runner_up: "Netherlands 🇳🇱", venue: "The Hague, Netherlands" },
  { year: "2010", winner: "Australia 🇦🇺", runner_up: "Netherlands 🇳🇱", venue: "Moenchengladbach, Germany" },
  { year: "2006", winner: "Germany 🇩🇪", runner_up: "Australia 🇦🇺", venue: "Mönchengladbach, Germany" },
  { year: "2002", winner: "Germany 🇩🇪", runner_up: "Netherlands 🇳🇱", venue: "Kuala Lumpur, Malaysia" },
  { year: "1994", winner: "Pakistan 🇵🇰", runner_up: "Netherlands 🇳🇱", venue: "Sydney, Australia" },
  { year: "1975", winner: "India 🇮🇳", runner_up: "Pakistan 🇵🇰", venue: "Kuala Lumpur, Malaysia" },
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
    { "@type": "ListItem", position: 3, name: "Final", item: `${BASE}/knockout/final` },
  ]
};

export default function FinalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏆 Grand Final — Hockey World Cup 2026</p>
          <h1 className="hero-title">Hockey World Cup 2026 Final — August 31 Complete Guide</h1>
          <p className="hero-description">
            Everything you need for the Hockey World Cup 2026 Final on August 31 — match timings in every timezone, venue information, ticket details, streaming guide, prize money, and the full history of World Cup champions.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">📅 Final Date: <strong>August 31, 2026</strong></div>
            <div className="eeat-badge">🏟️ Venue: <strong>TBD (Wavre or Amstelveen)</strong></div>
            <div className="eeat-badge">🕐 Kickoff: <strong>18:30 CEST / 22:00 IST</strong></div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <a href="/knockout/quarter-finals" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Quarter-Finals</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <a href="/knockout/semi-finals" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Semi-Finals</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <span style={{ color: "var(--text-main)", fontWeight: 600 }}>Final</span>
        </nav>

        {/* Final Timing Box */}
        <section style={{
          background: "linear-gradient(135deg, #c00030 0%, #8b0020 100%)",
          borderRadius: "18px", padding: "2.5rem", marginBottom: "3rem", color: "#fff", textAlign: "center",
        }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.8, marginBottom: "0.5rem" }}>
            🏆 Grand Final — FIH Hockey World Cup 2026
          </div>
          <div style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
            August 31, 2026
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1.5rem", maxWidth: "700px", margin: "0 auto" }}>
            {[
              { label: "CEST (Local)", time: "18:30" },
              { label: "IST (India)", time: "22:00" },
              { label: "GMT (UK)", time: "16:30" },
              { label: "EST (USA)", time: "12:30" },
              { label: "PKT (Pakistan)", time: "20:30" },
              { label: "AEST (AUS)", time: "02:30+1" },
            ].map(tz => (
              <div key={tz.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.72rem", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.06em" }}>{tz.label}</div>
                <div style={{ fontSize: "1.8rem", fontWeight: 900 }}>{tz.time}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Streaming Guide */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "18px", padding: "2rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            📺 Where to Watch the Final Live — Complete Streaming Guide
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.8rem" }}>
            {[
              { country: "🇮🇳 India", channel: "Star Sports / Disney+ Hotstar" },
              { country: "🇵🇰 Pakistan", channel: "PTV Sports / Ten Sports" },
              { country: "🇬🇧 UK", channel: "BT Sport" },
              { country: "🇺🇸 USA", channel: "ESPN+" },
              { country: "🇧🇪 Belgium", channel: "VRT / RTBF" },
              { country: "🇳🇱 Netherlands", channel: "NPO3 / Ziggo Sport" },
              { country: "🇩🇪 Germany", channel: "ZDF / DAZN" },
              { country: "🇦🇺 Australia", channel: "Kayo Sports / Channel 7" },
              { country: "🇳🇿 New Zealand", channel: "Sky Sport NZ" },
              { country: "🇿🇦 South Africa", channel: "SuperSport" },
              { country: "🇲🇾 Malaysia", channel: "RTM / Astro" },
              { country: "🌍 Worldwide", channel: "FIH YouTube (FREE)" },
            ].map(s => (
              <div key={s.country} style={{ background: "var(--bg-tertiary)", borderRadius: "10px", padding: "1rem", border: "1px solid var(--border-color)" }}>
                <div style={{ fontWeight: 800, color: "var(--text-main)", fontSize: "0.9rem", marginBottom: "0.2rem" }}>{s.country}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{s.channel}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Expert Preview */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            Who Will Win the Hockey World Cup 2026? Expert Prediction & Analysis
          </h2>
          <div style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Belgium</strong> enters as the betting favourite — defending champions playing on home soil in Wavre, with Arthur Van Doren leading the best defensive structure in world hockey. The crowd factor at Belfius Hockey Arena has been the single most underrated variable in modern World Cup analysis. Belgium&apos;s home fans are among the most knowledgeable and vocal in Europe — they create a genuine 12th player advantage.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Netherlands</strong> are the statistical favourite based on the 2025-26 FIH Pro League (which they won), their FIH World No. 1 ranking, and the fact that Thierry Brinkman is in career-best form. Playing at Wagener Stadium in Amstelveen — essentially their home ground — gives them the same crowd-advantage factor as Belgium at Wavre.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Australia</strong> are the dark horse — three-time champions who have been World Cup Final runners-up three times in the last 12 years. Blake Govers&apos; penalty corner accuracy and the Kookaburras&apos; physical superiority make them capable of defeating anyone on a given day.
            </p>
            <p>
              <strong>India&apos;s historical perspective:</strong> India last won the World Cup in 1975 — 51 years ago. A 2026 title would be the most celebrated moment in Indian sporting history since the 1983 Cricket World Cup. The nation that gave the world hockey&apos;s golden era (1928–1956: six consecutive Olympic golds) deserves a World Cup return to glory. Whether 2026 is that year depends on Harmanpreet Singh&apos;s drag-flick conversion, Craig Fulton&apos;s tactics, and whether India can maintain concentration across 60 minutes of Final-intensity pressure.
            </p>
          </div>
        </section>

        {/* Past Winners Table */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            Hockey World Cup Winners — Full History
          </h2>
          <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr 1fr", background: "var(--bg-tertiary)", padding: "0.8rem 1.2rem", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--text-muted)" }}>
              <span>Year</span><span>Champion</span><span>Runner-Up</span><span>Venue</span>
            </div>
            {pastWinners.map((r, i) => (
              <div key={r.year} style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr 1fr", padding: "0.9rem 1.2rem", borderTop: i > 0 ? "1px solid var(--border-color)" : "none", alignItems: "center" }}>
                <span style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--primary)" }}>{r.year}</span>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)" }}>{r.winner}</span>
                <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>{r.runner_up}</span>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{r.venue}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tickets */}
        <section style={{
          background: "var(--bg-secondary)", border: "2px solid var(--primary)",
          borderRadius: "18px", padding: "2rem", marginBottom: "3rem",
        }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
            🎫 Final Tickets — How to Get Them
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
            Final tickets for the Hockey World Cup 2026 are among the most sought-after sports tickets in Europe this summer. Prices start from €80 for standing areas and go up to €250 for premium grandstand seats. All tickets must be purchased through the official portal only — secondary market tickets will be deactivated at the turnstile due to personalized name verification.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="/tickets" style={{ padding: "0.8rem 1.5rem", background: "var(--primary)", color: "#fff", borderRadius: "10px", textDecoration: "none", fontWeight: 800, fontSize: "0.95rem" }}>
              🎫 Ticket Buying Guide →
            </a>
            <a href="/venues/wagener-stadium-guide" style={{ padding: "0.8rem 1.5rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", color: "var(--text-main)", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
              🏟️ Wagener Stadium Guide →
            </a>
            <a href="/venues/belfius-arena-guide" style={{ padding: "0.8rem 1.5rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", color: "var(--text-main)", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
              🏟️ Belfius Arena Guide →
            </a>
          </div>
        </section>

        {/* Internal Links */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "0.9rem", fontWeight: 800, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>Related Pages</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {[
              { text: "Semi-Finals Preview", href: "/knockout/semi-finals" },
              { text: "Quarter-Finals Bracket", href: "/knockout/quarter-finals" },
              { text: "India Results", href: "/results/india" },
              { text: "Belgium Results", href: "/results/belgium" },
              { text: "August 31 Match Schedule", href: "/schedule/date/august-31-matches" },
              { text: "Live Score Tracker", href: "/live-scores" },
              { text: "Points Table", href: "/points-table" },
              { text: "Ticket Guide", href: "/tickets" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ padding: "0.55rem 1rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "8px", color: "var(--text-main)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600 }}>→ {l.text}</a>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            Frequently Asked Questions — Hockey World Cup 2026 Final
          </h2>
          <FaqAccordion items={faqItems} />
        </section>
      </main>

      <Footer />
    </>
  );
}
