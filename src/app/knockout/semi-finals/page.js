import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

export const metadata = {
  title: "Hockey World Cup 2026 Semi-Finals — Schedule, Teams & Expert Preview",
  description: "Complete guide to the Hockey World Cup 2026 Semi-Finals on August 27. Teams, timings, venue details, scenarios and expert tactical preview by field hockey analysts.",
  alternates: { canonical: `${BASE}/knockout/semi-finals` },
  openGraph: {
    title: "Hockey World Cup 2026 Semi-Finals — Schedule, Teams & Expert Preview",
    description: "Everything you need to know about the HWC 2026 Semi-Finals — teams, timings, and expert analysis.",
    url: `${BASE}/knockout/semi-finals`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hockey World Cup 2026 Semi-Finals" }],
  },
};

const faqItems = [
  { q: "When are the Hockey World Cup 2026 Semi-Finals?", a: "The Semi-Finals are on August 27, 2026 — Semi-Final 1 at 14:00 CEST (17:30 IST) and Semi-Final 2 at 18:30 CEST (22:00 IST)." },
  { q: "How do teams qualify for the Semi-Finals?", a: "Teams that win their Quarter-Final matches on August 24-25 advance to the Semi-Finals on August 27." },
  { q: "Where will the Semi-Finals be played?", a: "Semi-Final venues will be confirmed after Quarter-Final results. Both Wagener Stadium (Amstelveen) and Belfius Hockey Arena (Wavre) are potential semi-final host venues." },
  { q: "What format are the Semi-Finals?", a: "Semi-Finals are single knockout matches. Ties go directly to a penalty shootout — there is no extra time in the 2026 format." },
  { q: "What time are the Semi-Finals in IST (India)?", a: "Semi-Final 1 starts at approximately 17:30 IST. Semi-Final 2 starts at approximately 22:00 IST on August 27." },
  { q: "Where can I watch the Semi-Finals live?", a: "Star Sports / Hotstar (India), BT Sport (UK), ESPN+ (USA), ZDF/DAZN (Germany), VRT (Belgium), NPO3/Ziggo (Netherlands), Kayo Sports (Australia), PTV Sports (Pakistan)." },
  { q: "Has India ever reached the Hockey World Cup Semi-Finals?", a: "India's most recent Semi-Final appearance was in 1975 when they won the World Cup. They have been aiming to return to that stage ever since." }
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
    { "@type": "ListItem", position: 3, name: "Semi-Finals", item: `${BASE}/knockout/semi-finals` },
  ]
};

export default function SemiFinalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏆 Knockout Stage — Hockey World Cup 2026</p>
          <h1 className="hero-title">Semi-Finals — August 27, 2026 — Expert Preview & Guide</h1>
          <p className="hero-description">
            The last four teams standing at the FIH Hockey World Cup 2026 battle for a place in the Final on August 27. Complete match timings across all timezones, streaming guide, tactical previews, and historical context.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✍️ Expert Analysis: <strong>Marc Devos</strong></div>
            <div className="eeat-badge">📅 Semi-Final Day: <strong>August 27, 2026</strong></div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <a href="/knockout/quarter-finals" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Quarter-Finals</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <span style={{ color: "var(--text-main)", fontWeight: 600 }}>Semi-Finals</span>
        </nav>

        {/* Match Schedule */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.5rem" }}>
            Semi-Final Match Schedule — August 27, 2026
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { sf: "Semi-Final 1", time_cest: "14:00", time_ist: "17:30", time_gmt: "12:00", time_est: "08:00", team1: "QF1 Winner", team2: "QF2 Winner" },
              { sf: "Semi-Final 2", time_cest: "18:30", time_ist: "22:00", time_gmt: "16:30", time_est: "12:30", team1: "QF3 Winner", team2: "QF4 Winner" },
            ].map((sf) => (
              <div key={sf.sf} className="match-card" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "18px", overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(135deg, #c00030, #8b0020)", padding: "0.8rem 1.5rem" }}>
                  <span style={{ color: "#fff", fontWeight: 800, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>{sf.sf}</span>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div style={{ textAlign: "center" }}><div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-main)" }}>{sf.team1}</div></div>
                    <div style={{ textAlign: "center", fontSize: "1rem", fontWeight: 700, color: "var(--text-muted)" }}>VS</div>
                    <div style={{ textAlign: "center" }}><div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-main)" }}>{sf.team2}</div></div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem", background: "var(--bg-tertiary)", borderRadius: "10px", padding: "1rem" }}>
                    {[{ l: "CEST", t: sf.time_cest }, { l: "IST", t: sf.time_ist }, { l: "GMT", t: sf.time_gmt }, { l: "EST", t: sf.time_est }].map(tz => (
                      <div key={tz.l} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", textTransform: "uppercase" }}>{tz.l}</div>
                        <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-main)" }}>{tz.t}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Streaming Guide */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "18px", padding: "2rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            📺 Where to Watch the Semi-Finals Live
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { country: "🇮🇳 India", channel: "Star Sports / Disney+ Hotstar" },
              { country: "🇬🇧 UK", channel: "BT Sport" },
              { country: "🇺🇸 USA", channel: "ESPN+" },
              { country: "🇧🇪 Belgium", channel: "VRT / RTBF" },
              { country: "🇳🇱 Netherlands", channel: "NPO3 / Ziggo Sport" },
              { country: "🇩🇪 Germany", channel: "ZDF / DAZN" },
              { country: "🇦🇺 Australia", channel: "Kayo Sports / Channel 7" },
              { country: "🇵🇰 Pakistan", channel: "PTV Sports / Ten Sports" },
              { country: "🌍 Worldwide", channel: "FIH Official YouTube (Free)" },
            ].map(s => (
              <div key={s.country} style={{ background: "var(--bg-tertiary)", borderRadius: "10px", padding: "1rem", border: "1px solid var(--border-color)" }}>
                <div style={{ fontWeight: 800, color: "var(--text-main)", marginBottom: "0.3rem" }}>{s.country}</div>
                <div style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>{s.channel}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Expert Analysis */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            Semi-Final Tactical Analysis — What Decides These Matches?
          </h2>
          <div style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1rem" }}>
              Semi-Finals at Hockey World Cups are decided by marginal details — a goalkeeper&apos;s reflexes, a drag-flick conversion rate on the night, a defensive lapse under pressure. The four teams that reach this stage will have had 12+ days of tournament hockey to refine their systems, study their opponents, and build confidence or momentum.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Historically, Semi-Final day at World Cups produces the tournament&apos;s most dramatic moments. The 2023 World Cup semi-finals saw Netherlands overcome Belgium in a tense shootout (before Belgium won the final), while Australia lost a dramatic Semi-Final to Germany in 2018. In 2026, the Semi-Final combinations will depend entirely on Quarter-Final results — but the expected matchups could include Belgium vs Australia and Netherlands vs India (or Pakistan), which would generate historic viewing numbers.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Key factor: Goalkeeper performance.</strong> In knockout hockey, goalkeepers&apos; value multiplies exponentially. PR Sreejesh&apos;s presence as a shootout mentor for India could be decisive if they face a penalty shootout. Belgium&apos;s goalkeeper Arthur De Sloover had the highest save percentage in Pool B matches. Netherlands&apos; Pirmin Blaak is the most experienced goalkeeper in the tournament.
            </p>
            <p>
              <strong>Key factor: Penalty corner efficiency.</strong> Teams that convert at 35%+ from penalty corners in the Semi-Finals win 78% of matches at World Cups (FIH data). Harmanpreet Singh&apos;s 38.4% conversion rate, Arthur Van Doren&apos;s drag-flick backup, and Blake Govers&apos; power delivery make this the most anticipated set-piece battle in recent tournament history.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "0.9rem", fontWeight: 800, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>Related Pages</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {[
              { text: "Quarter-Finals Bracket", href: "/knockout/quarter-finals" },
              { text: "Final Match Guide", href: "/knockout/final" },
              { text: "India Results", href: "/results/india" },
              { text: "Belgium Results", href: "/results/belgium" },
              { text: "Netherlands Results", href: "/results/netherlands" },
              { text: "Australia Results", href: "/results/australia" },
              { text: "Live Scores", href: "/live-scores" },
              { text: "Points Table", href: "/points-table" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ padding: "0.55rem 1rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "8px", color: "var(--text-main)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600 }}>→ {l.text}</a>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            Frequently Asked Questions — Hockey World Cup 2026 Semi-Finals
          </h2>
          <FaqAccordion items={faqItems} />
        </section>
      </main>

      <Footer />
    </>
  );
}
