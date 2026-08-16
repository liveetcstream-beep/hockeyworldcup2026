import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Finals — Dates, Venues, Tickets & Global Schedule",
  description: "Complete guide to the FIH Hockey World Cup 2026 Finals: Women's Grand Final (Aug 29, Amstelveen) and Men's Grand Final (Aug 30, Wavre). Kickoff times in CEST, IST & PKT, tickets, and broadcaster channels.",
  alternates: { canonical: `${BASE}/knockout/final` },
  openGraph: {
    title: "Hockey World Cup 2026 Finals — Dates, Venues, Tickets & Global Schedule",
    description: "Everything about the HWC 2026 Finals: Women's Final (Aug 29 at Wagener Stadium) and Men's Final (Aug 30 at Belfius Arena).",
    url: `${BASE}/knockout/final`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hockey World Cup 2026 Final Guide" }],
  },
};

const faqItems = [
  { q: "When and where is the Women's Hockey World Cup 2026 Final?", a: "The Women's Grand Final (Match W50) takes place on Saturday, August 29, 2026 at 16:00 CEST (19:30 IST / 19:00 PKT) at the Wagener Hockey Stadium in Amstelveen, Netherlands. The Bronze Medal Match (Match W49) is at 13:00 CEST." },
  { q: "When and where is the Men's Hockey World Cup 2026 Final?", a: "The Men's Grand Final (Match M50) takes place on Sunday, August 30, 2026 at 16:30 CEST (20:00 IST / 19:30 PKT) at the Belfius Hockey Arena in Wavre, Belgium. The Bronze Medal Match (Match M49) is at 14:00 CEST." },
  { q: "How can I watch the Finals live in India and South Asia?", a: "The Finals will be broadcast live across Star Sports Select channels and streamed online on JioHotstar in India and South Asia." },
  { q: "Where can I buy official tickets for the Grand Finals?", a: "Final tickets are available exclusively through host federation portals: tickets.hockeyworldcup2026.be (Wavre/Belgium) and tickets.hockeyworldcup2026.nl (Amstelveen/Netherlands)." },
  { q: "Who is the defending champion in Men's Hockey World Cup?", a: "Germany is the defending champion, having won the 2023 FIH Men's Hockey World Cup in Bhubaneswar/Rourkela, India by defeating Belgium in a penalty shootout (3-3 FT, 5-4 SO)." },
  { q: "Who has won the most Men's Hockey World Cups?", a: "Pakistan holds the record with 4 titles (1971, 1978, 1982, 1994). Netherlands, Germany, and Australia have each won 3 titles, Belgium 1 title (2018), and India 1 title (1975)." },
  { q: "Who has won the most Women's Hockey World Cups?", a: "Netherlands Women are the most successful team with 9 titles (1974, 1978, 1983, 1986, 1990, 2006, 2014, 2018, 2022)." }
];

const pastWinners = [
  { year: "2023", winner: "Germany 🇩🇪", runner_up: "Belgium 🇧🇪", venue: "Bhubaneswar/Rourkela, India" },
  { year: "2018", winner: "Belgium 🇧🇪", runner_up: "Netherlands 🇳🇱", venue: "Bhubaneswar, India" },
  { year: "2014", winner: "Australia 🇦🇺", runner_up: "Netherlands 🇳🇱", venue: "The Hague, Netherlands" },
  { year: "2010", winner: "Australia 🇦🇺", runner_up: "Germany 🇩🇪", venue: "New Delhi, India" },
  { year: "2006", winner: "Germany 🇩🇪", runner_up: "Australia 🇦🇺", venue: "Mönchengladbach, Germany" },
  { year: "2002", winner: "Germany 🇩🇪", runner_up: "Australia 🇦🇺", venue: "Kuala Lumpur, Malaysia" },
  { year: "1998", winner: "Netherlands 🇳🇱", runner_up: "Spain 🇪🇸", venue: "Utrecht, Netherlands" },
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
          <p className="hero-subtitle">🏆 Grand Finals — FIH Hockey World Cup 2026</p>
          <h1 className="hero-title">Hockey World Cup 2026 Finals — Dates, Venues &amp; Match Guide</h1>
          <p className="hero-description">
            Complete guide to the FIH Hockey World Cup 2026 Grand Finals: Women's Final on Saturday, August 29 in Amstelveen, and Men's Final on Sunday, August 30 in Wavre. Kickoff times across all timezones, ticketing, and live broadcaster channels.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">👩 Women's Final: <strong>Sat, Aug 29 · 16:00 CEST (Amstelveen)</strong></div>
            <div className="eeat-badge">👨 Men's Final: <strong>Sun, Aug 30 · 16:30 CEST (Wavre)</strong></div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <a href="/format" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Format</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <a href="/knockout/semi-finals" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Semi-Finals</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <span style={{ color: "var(--text-main)", fontWeight: 600 }}>Finals</span>
        </nav>

        {/* Final Timing Box */}
        <section style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3rem"
        }}>
          {/* Women's Final Card */}
          <div style={{
            background: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",
            borderRadius: "18px", padding: "2rem", color: "#fff", textAlign: "center",
            boxShadow: "0 10px 25px rgba(244, 63, 94, 0.25)"
          }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.9, marginBottom: "0.4rem" }}>
              🏆 Women's World Cup Grand Final (Match W50)
            </div>
            <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.3rem" }}>
              Saturday, August 29, 2026
            </div>
            <p style={{ fontSize: "0.85rem", opacity: 0.9, marginBottom: "1.2rem" }}>
              📍 Wagener Hockey Stadium, Amstelveen (NED)
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.6rem", background: "rgba(0,0,0,0.15)", borderRadius: "10px", padding: "0.8rem" }}>
              <div>
                <div style={{ fontSize: "0.68rem", opacity: 0.8 }}>CEST (Local)</div>
                <div style={{ fontSize: "1.3rem", fontWeight: 900 }}>16:00</div>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", opacity: 0.8 }}>IST (India)</div>
                <div style={{ fontSize: "1.3rem", fontWeight: 900 }}>19:30</div>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", opacity: 0.8 }}>PKT (Pak)</div>
                <div style={{ fontSize: "1.3rem", fontWeight: 900 }}>19:00</div>
              </div>
            </div>
            <div style={{ marginTop: "0.8rem", fontSize: "0.75rem", opacity: 0.85 }}>
              🥉 Bronze Medal Match (W49): 13:00 CEST / 16:30 IST
            </div>
          </div>

          {/* Men's Final Card */}
          <div style={{
            background: "linear-gradient(135deg, #c00030 0%, #8b0020 100%)",
            borderRadius: "18px", padding: "2rem", color: "#fff", textAlign: "center",
            boxShadow: "0 10px 25px rgba(192, 0, 48, 0.25)"
          }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.9, marginBottom: "0.4rem" }}>
              🏆 Men's World Cup Grand Final (Match M50)
            </div>
            <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.3rem" }}>
              Sunday, August 30, 2026
            </div>
            <p style={{ fontSize: "0.85rem", opacity: 0.9, marginBottom: "1.2rem" }}>
              📍 Belfius Hockey Arena, Wavre (BEL)
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.6rem", background: "rgba(0,0,0,0.15)", borderRadius: "10px", padding: "0.8rem" }}>
              <div>
                <div style={{ fontSize: "0.68rem", opacity: 0.8 }}>CEST (Local)</div>
                <div style={{ fontSize: "1.3rem", fontWeight: 900 }}>16:30</div>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", opacity: 0.8 }}>IST (India)</div>
                <div style={{ fontSize: "1.3rem", fontWeight: 900 }}>20:00</div>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", opacity: 0.8 }}>PKT (Pak)</div>
                <div style={{ fontSize: "1.3rem", fontWeight: 900 }}>19:30</div>
              </div>
            </div>
            <div style={{ marginTop: "0.8rem", fontSize: "0.75rem", opacity: 0.85 }}>
              🥉 Bronze Medal Match (M49): 14:00 CEST / 17:30 IST
            </div>
          </div>
        </section>

        {/* Streaming Guide */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "18px", padding: "2rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            📺 Where to Watch the Finals Live — Official Global Broadcasters
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.8rem" }}>
            {[
              { country: "🇮🇳 India", channel: "Star Sports Select / JioHotstar" },
              { country: "🇵🇰 Pakistan", channel: "A Sports / PTV Sports" },
              { country: "🇬🇧 UK", channel: "TNT Sports / BBC iPlayer" },
              { country: "🇺🇸 USA", channel: "CBS Sports Network / Watch.Hockey" },
              { country: "🇧🇪 Belgium", channel: "VRT 1 / RTBF Tipik" },
              { country: "🇳🇱 Netherlands", channel: "NOS Studio Sport / Ziggo Sport" },
              { country: "🇩🇪 Germany", channel: "ZDF Sport / DAZN" },
              { country: "🇦🇺 Australia", channel: "7plus / Fox Sports" },
              { country: "🇳🇿 New Zealand", channel: "Sky Sport NZ" },
              { country: "🇿🇦 South Africa", channel: "SuperSport Variety" },
              { country: "🇲🇾 Malaysia", channel: "Astro Arena" },
              { country: "🌍 Worldwide", channel: "Watch.Hockey (Official FIH App)" },
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
          <div style={{ overflowX: "auto", width: "100%", border: "1px solid var(--border-color)", borderRadius: "16px" }}>
            <div style={{ minWidth: "550px", background: "var(--bg-secondary)" }}>
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
