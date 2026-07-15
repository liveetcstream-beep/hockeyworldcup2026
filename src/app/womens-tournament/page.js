import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: "Women's Hockey World Cup 2026: Pools, Standings & Schedule",
  description: "Follow the Women's FIH Hockey World Cup 2026. Get verified match schedules, group standings, pool tables, and expert predictions for the co-hosted...",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/womens-tournament",
  },
  openGraph: {
    title: "Women's Hockey World Cup 2026: Pools, Standings & Schedule",
    description: "Follow the Women's FIH Hockey World Cup 2026. Get verified match schedules, group standings, pool tables, and expert predictions for the co-hosted...",
    url: "https://hockeyworldcup2026schedule.com/womens-tournament",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Women's Hockey World Cup 2026 Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Women's Hockey World Cup 2026: Pools, Standings & Schedule",
    description: "Follow the Women's FIH Hockey World Cup 2026. Get verified match schedules, group standings, pool tables, and expert predictions for the co-hosted...",
    images: ["/og-image.jpg"],
  },
};

const faqItems = [
  {
    question: "Where are the Women's Hockey World Cup 2026 matches being played?",
    answer: "The Women's group stages and crossover matches are split between Wagener Stadium in Amstelveen, Netherlands, and Belfius Hockey Arena in Wavre, Belgium. The semi-finals, bronze medal match, and Grand Final are hosted at Wagener Stadium."
  },
  {
    question: "Who are the favorites to win the Women's World Cup in 2026?",
    answer: "The Netherlands (Oranje Dames) are the absolute favorites, entering the tournament as defending champions and co-hosts. Argentina (Las Leonas), Germany, and Belgium (Red Panthers) represent the strongest challengers."
  },
  {
    question: "Where can I watch the Women's matches live stream online?",
    answer: "Streaming partners include JioCinema (India), VRT MAX & RTBF Auvio (Belgium), NOS App (Netherlands), and the official Watch.Hockey platform globally. Complete TV channel grids are available on our live streaming guide page."
  }
];

const womensPools = [
  {
    name: "Pool A (Amstelveen)",
    teams: [
      { name: "Netherlands", ranking: "#1", flag: "🇳🇱" },
      { name: "Argentina", ranking: "#2", flag: "🇦🇷" },
      { name: "Japan", ranking: "#11", flag: "🇯🇵" },
      { name: "Chile", ranking: "#14", flag: "🇨🇱" }
    ]
  },
  {
    name: "Pool B (Wavre)",
    teams: [
      { name: "Germany", ranking: "#3", flag: "🇩🇪" },
      { name: "Belgium", ranking: "#4", flag: "🇧🇪" },
      { name: "United States", ranking: "#13", flag: "🇺🇸" },
      { name: "Scotland", ranking: "#17", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }
    ]
  },
  {
    name: "Pool C (Amstelveen)",
    teams: [
      { name: "Australia", ranking: "#5", flag: "🇦🇺" },
      { name: "Spain", ranking: "#7", flag: "🇪🇸" },
      { name: "China", ranking: "#8", flag: "🇨🇳" },
      { name: "Ireland", ranking: "#12", flag: "🇮🇪" }
    ]
  },
  {
    name: "Pool D (Wavre)",
    teams: [
      { name: "England", ranking: "#6", flag: "🏴" },
      { name: "India", ranking: "#9", flag: "🇮🇳" },
      { name: "New Zealand", ranking: "#10", flag: "🇳🇿" },
      { name: "South Africa", ranking: "#15", flag: "🇿🇦" }
    ]
  }
];

export default function WomensTournamentHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hockeyworldcup2026schedule.com" },
                  { "@type": "ListItem", "position": 2, "name": "Women's World Cup", "item": "https://hockeyworldcup2026schedule.com/womens-tournament" }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              }
            ]
          })
        }}
      />
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏑 Pools, Roster Reviews & Live Scoreboards</p>
          <h1 className="hero-title">Women's Hockey World Cup 2026 Hub</h1>
          <p className="hero-description">
            Complete, expert coverage of the co-hosted Women's FIH Hockey World Cup in Amstelveen and Wavre. Access verified daily schedules, group stage pool tables, and expert tactical predictions.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Correspondent: <strong>Marc Devos (Accredited FIH Journalist)</strong>
            </div>
            <div className="eeat-badge">
              ⚡ Coverage: <strong>Men's & Women's Parity Guaranteed</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12" style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Women's Tournament</span>
        </nav>

        {/* Section 1: The Media Gap Pain Point */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Bridging the Media Coverage Gap in Women's Field Hockey
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            A common source of frustration for hockey fans is the significant disparity in media coverage between the Men's and Women's tournaments. While Men's matches receive primary television placements and detailed tactical write-ups, Women's group matches are often relegated to secondary streaming feeds with minimal statistical context.
          </p>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            At Hockey World Cup 2026 Hub, we ensure full parity of coverage. Under the direction of senior correspondent Marc Devos, our editorial guidelines require equal depth for both sections. This hub serves as a central directory for the Women's tournament, compiling pool compositions, team form outlines, and travel-spectator guidelines for matches at Wagener Stadium and Belfius Hockey Arena.
          </p>
        </section>

        {/* Section 2: Women's Pools Grid */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Women's Tournament Group Pools & Seedings
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            The 16 qualified nations are divided into four pools of four teams. Seedings are based on official FIH World Rankings as of tournament finalization:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {womensPools.map((pool) => (
              <div key={pool.name} style={{
                background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
                borderRadius: "16px", padding: "1.5rem"
              }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>{pool.name}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {pool.teams.map((t, idx) => (
                    <li key={t.name} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "0.6rem 0", borderBottom: idx === pool.teams.length - 1 ? "none" : "1px solid rgba(255,255,255,0.03)"
                    }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                        {t.flag} {t.name}
                      </span>
                      <strong style={{ color: "var(--primary)", fontSize: "0.9rem" }}>{t.ranking}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Crossover playoff explanation */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Understanding the Crossover and Knockout Formats
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            A common point of confusion is the qualification path after the group stage. Unlike standard round-robin events where the top two teams advance, the FIH uses a crossover format to maximize tournament drama:
          </p>
          <ul style={{ color: "var(--text-muted)", lineHeight: "2", paddingLeft: "1.5rem", fontSize: "0.95rem" }}>
            <li><strong style={{ color: "var(--text-main)" }}>1st Place Finisher:</strong> Qualifies directly for the Quarter-Finals. This places a massive premium on topping your group pool.</li>
            <li><strong style={{ color: "var(--text-main)" }}>2nd and 3rd Place Finishers:</strong> Enter a crossover playoff round (e.g., 2nd of Pool A vs 3rd of Pool B). The winner of this playoff secures the remaining Quarter-Final berths.</li>
            <li><strong style={{ color: "var(--text-main)" }}>4th Place Finisher:</strong> Eliminated directly from the main bracket, proceeding to place classification matches.</li>
          </ul>
        </section>

        {/* Section 4: Live Scoreboards & Previews link directory */}
        <section style={{
          background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
          borderRadius: "16px", padding: "1.5rem 2rem", marginBottom: "3rem"
        }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
            Women's Tournament Matchday Resources
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              { label: "📅 Full Match Schedule", href: "/schedule" },
              { label: "📺 TV & Live Stream Guide", href: "/hockey-live-streaming" },
              { label: "🏃‍♂️ Player Directory Hub", href: "/players" },
              { label: "📊 India Women vs England Women Preview", href: "/matches/india-vs-england-women" },
              { label: "🇺🇸 USWNT Roster & Schedule Page", href: "/pool-b" }
            ].map((link) => (
              <a key={link.href} href={link.href} style={{
                background: "var(--bg-tertiary)", border: "1px solid var(--border-color)",
                borderRadius: "10px", padding: "0.5rem 1rem",
                color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600
              }}>
                {link.label}
              </a>
            ))}
          </div>
        </section>

        {/* FAQs SECTION */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions about Women's Hockey World Cup 2026
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

      </main>

      <Footer />
    </>
  );
}
