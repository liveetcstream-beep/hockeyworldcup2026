import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Bram van de Meer — Technical Field Hockey Analyst | Hockey World Cup 2026 Hub",
  description: "Bram van de Meer is a former Dutch Hoofdklasse transition coach and Technical Analyst at Hockey World Cup 2026 Hub. 15+ years auditing player stats...",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/authors/bram-van-de-meer",
  },
  openGraph: {
    title: "Bram van de Meer — Technical Field Hockey Analyst | Hockey World Cup 2026 Hub",
    description: "Bram van de Meer is a former Dutch Hoofdklasse transition coach and Technical Analyst at Hockey World Cup 2026 Hub. 15+ years auditing player stats...",
    url: "https://hockeyworldcup2026schedule.com/authors/bram-van-de-meer",
  },
};

const faqs = [
  {
    q: "Who is Bram van de Meer?",
    a: "Bram van de Meer is a former field hockey transition coach from the Netherlands with over 15 years of experience in the Dutch Hoofdklasse. He now serves as the Technical Analyst at Hockey World Cup 2026 Hub, where he is responsible for verifying all player statistics, penalty corner conversion data, squad fitness updates, and head-to-head ratios published on the portal."
  },
  {
    q: "What does Bram van de Meer specialize in?",
    a: "Bram specializes in player profiling at the elite international level — particularly set-piece conversion ratios (penalty corner drag-flick accuracy), circle entry frequency metrics, spatial positioning analysis during defensive transitions, and pre-tournament fitness validation for squad members. He uses a proprietary checklist matched against the official FIH Tournament Management System (TMS) data."
  },
  {
    q: "How does Bram van de Meer verify player statistics?",
    a: "Every player statistic published on this portal — including international caps, career goals, and club affiliations — is cross-referenced against three sources: the official FIH Player Database, national federation squad announcements, and the club records from the Dutch Hoofdklasse or relevant Pro League platforms where applicable."
  },
  {
    q: "Has Bram van de Meer coached at professional level?",
    a: "Yes. Bram worked as an assistant transition coach with youth academies and reserve squads in Utrecht and Eindhoven — two cities that are home to top-level Dutch Hoofdklasse clubs. His coaching background gives him practical insight into what tactical statistics actually mean in match context, rather than just surface-level numbers."
  },
  {
    q: "Why should I trust the player data on this website?",
    a: "Our player statistics go through a structured audit layer managed by Bram van de Meer before publication. This process involves checking team-announced squad lists against FIH registration databases, verifying goal tally accuracy from official match reports, and flagging any player injury or fitness concerns through pre-tournament press conference monitoring."
  }
];

export default function BramVanDeMeerAuthorPage() {
  return (
    <>
      <Header />

      <main className="sports-container py-12" style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <a href="/authors" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Authors</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Bram van de Meer</span>
        </nav>

        {/* Author Hero Card */}
        <section style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          borderRadius: "24px",
          padding: "3rem 2.5rem",
          marginBottom: "3rem",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "flex-start"
        }}>
          <div style={{
            width: "100px", height: "100px", borderRadius: "50%",
            background: "linear-gradient(135deg, #1a2a4a 0%, #0e1c34 100%)",
            border: "3px solid var(--primary)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "3rem", flexShrink: 0
          }}>
            📋
          </div>
          <div style={{ flex: 1, minWidth: "260px" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text-main)", marginBottom: "0.4rem" }}>
              Bram van de Meer
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--primary)", fontWeight: 700, marginBottom: "1rem" }}>
              Technical Field Hockey Analyst & Roster Auditor
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {[
                { icon: "📍", label: "Eindhoven, Netherlands" },
                { icon: "⏳", label: "15+ Years in Hockey Analysis" },
                { icon: "🏑", label: "Former Hoofdklasse Coach" },
                { icon: "✅", label: "FIH Data Verified" },
              ].map((badge) => (
                <span key={badge.label} style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  background: "var(--bg-tertiary)", border: "1px solid var(--border-color)",
                  borderRadius: "20px", padding: "0.35rem 0.9rem",
                  fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600
                }}>
                  {badge.icon} {badge.label}
                </span>
              ))}
            </div>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.85", fontSize: "0.95rem" }}>
              Bram van de Meer spent over a decade working inside the Dutch field hockey infrastructure — first as a player in the regional leagues around Utrecht, then transitioning into coaching roles within youth development programs at clubs in Eindhoven affiliated with the Dutch Hoofdklasse system. He brings a practitioner's understanding of what field hockey data actually means. When Bram reports that a player converted 7 of 11 penalty corner drag-flick attempts in the FIH Pro League 2025-26 season, that number has been manually cross-referenced against official match records — not generated from a scraper.
            </p>
          </div>
        </section>

        {/* Section 1: Background Story */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            From the Turf to the Database: Bram's Analytical Journey
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            Most sports analysts come from journalism backgrounds. Bram van de Meer comes from the opposite end — the training pitch. During his years coaching transition units at youth academies in Eindhoven, Bram began tracking why certain players consistently lost possession in the 23-meter zone during recovery phases. What started as handwritten session notes turned into a structured data methodology that he now applies to international squad profiling.
          </p>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            The field hockey world has a common problem that fans and readers rarely see: official-looking statistics that are actually inaccurate. A player's international cap count on one website might differ by 3-4 caps from what the FIH's own database shows, because different sources count friendly match appearances differently. A player listed as "fully fit" by a media outlet might have been carrying a minor hamstring strain discussed in a press conference that ran in Dutch — never translated into English coverage.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            This is exactly the gap Bram fills at Hockey World Cup 2026 Hub. Every player profile published here — from Harmanpreet Singh's drag-flick conversion rate to Arthur Van Doren's defensive interception statistics — passes through a three-layer verification system Bram developed over years of practical work in the sport.
          </p>
        </section>

        {/* Section 2: What He Actually Does */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            What Bram Actually Audits on This Portal
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
            {[
              {
                icon: "🎯",
                title: "Penalty Corner Conversion Data",
                body: "Bram tracks every drag-flick attempt and outcome in FIH Pro League 2025-26 data. Reported conversion rates reflect only official tournament matches — not practice or warm-up sessions."
              },
              {
                icon: "🩺",
                title: "Pre-Tournament Injury & Fitness Status",
                body: "Bram monitors team press conferences, national federation bulletins, and Dutch-language hockey media for squad fitness updates. If a player is carrying a concern, our profiles will reflect that — not just what the official squad release says."
              },
              {
                icon: "📊",
                title: "International Caps & Career Goals",
                body: "Every caps and goals number is cross-referenced against the FIH official player database and national federation records. Discrepancies between sources are noted and the conservative figure is used."
              },
              {
                icon: "🔍",
                title: "Spatial & Positional Metrics",
                body: "Drawing on his coaching background, Bram evaluates how players operate within their team's tactical structure — particularly circle entry positioning, press trigger points, and counter-attack initiation rates."
              }
            ].map((item) => (
              <div key={item.title} style={{
                background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
                borderRadius: "16px", padding: "1.5rem"
              }}>
                <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "0.8rem" }}>{item.icon}</span>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "0.6rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.7", margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Why It Matters */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Why Accurate Hockey Data Actually Matters to You
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            If you've ever argued with a friend about whether Harmanpreet Singh has over 200 international caps or only 180, you already understand the problem. Inaccurate data is everywhere in field hockey coverage — partly because the sport doesn't have the same media infrastructure as football, and partly because so many statistics live in PDFs published on federation websites in multiple languages.
          </p>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            For fans making real decisions — whether to buy tournament tickets, which matches to prioritize watching, or simply who to back in their fantasy hockey competition — unreliable data creates real frustration. Bram's audit process exists specifically to address this. Our player profiles are not built by scraping Wikipedia. They are built by a person who has held a coach's clipboard on a Hoofdklasse training pitch and understands what these numbers actually represent.
          </p>
          <div style={{
            background: "linear-gradient(135deg, rgba(192,0,48,0.08) 0%, rgba(15,23,42,0.5) 100%)",
            border: "1px solid rgba(192,0,48,0.2)", borderRadius: "16px", padding: "1.5rem 2rem",
            marginBottom: "1.5rem"
          }}>
            <p style={{ color: "var(--text-main)", fontSize: "1rem", fontStyle: "italic", lineHeight: "1.8", margin: 0 }}>
              "In field hockey, the difference between a 34% and a 41% penalty corner conversion rate is not a rounding error — it's the difference between a team that wins close matches and one that loses them. Those numbers need to be right."
            </p>
            <strong style={{ color: "var(--primary)", display: "block", marginTop: "0.8rem", fontSize: "0.9rem" }}>
              — Bram van de Meer, Technical Analyst
            </strong>
          </div>
        </section>

        {/* Section 4: HWC 2026 Specific Work */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Bram's Focus at the FIH Hockey World Cup 2026
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            For the FIH Hockey World Cup 2026, held across two host venues — the <strong style={{ color: "var(--text-main)" }}>Wagener Stadium in Amstelveen</strong> and the <strong style={{ color: "var(--text-main)" }}>Belfius Hockey Arena in Wavre</strong> — Bram has prepared individual statistical profiles for all 21 players we cover in our player directory. His priorities for this tournament are:
          </p>
          <ul style={{ color: "var(--text-muted)", lineHeight: "2", paddingLeft: "1.5rem", fontSize: "0.95rem", marginBottom: "1.2rem" }}>
            <li><strong style={{ color: "var(--text-main)" }}>Pool stage group dynamics:</strong> Tracking how Pool D (India, Pakistan, England, Wales) shapes up based on pre-tournament form data — particularly head-to-head records between India and Pakistan in FIH World Cups dating back to 1975.</li>
            <li><strong style={{ color: "var(--text-main)" }}>Drag-flicker performance benchmarking:</strong> Specific focus on Harmanpreet Singh (India), Alexander Hendrickx (Belgium), and Jip Janssen (Netherlands) — three penalty corner specialists whose accuracy will likely determine which nation reaches the final.</li>
            <li><strong style={{ color: "var(--text-main)" }}>Goalkeeper save rate monitoring:</strong> PR Sreejesh (India) and Pirmin Blaak (Netherlands) are among the most analytically interesting goalkeepers in the tournament. Bram maintains running data on their shot-stopping rates in penalty shootout scenarios.</li>
            <li><strong style={{ color: "var(--text-main)" }}>Fitness red-flag tracking:</strong> Pre-tournament physiotherapy bulletins, training session load reports, and coach press conference injury disclosures are monitored daily from the July 2026 preparation camps through to August 31.</li>
          </ul>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            All player profiles on this portal will be updated by Bram within 12 hours of any significant injury or squad change disclosure that affects a featured player's World Cup participation.
          </p>
        </section>

        {/* Section 5: Trust Signals */}
        <section style={{
          background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
          borderRadius: "20px", padding: "2rem 2.5rem", marginBottom: "3rem"
        }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.5rem" }}>
            Editorial Standards & Data Sourcing Methodology
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { step: "Step 1", title: "Primary Source Check", desc: "All statistics start at official sources — FIH Player Database, national federation squad announcements, and official club records from the Dutch Hoofdklasse or relevant Pro League tables." },
              { step: "Step 2", title: "Cross-Reference Verification", desc: "Primary source data is checked against two secondary sources. Where discrepancies exist, the official FIH figure takes precedence. All discrepancies are noted internally." },
              { step: "Step 3", title: "Match Context Validation", desc: "Stats are validated in match context. A player with 180 caps but only 12 World Cup appearances has a very different profile from one with 180 caps and 40 World Cup appearances. We capture this nuance." },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                <span style={{
                  background: "var(--primary)", color: "#fff", fontSize: "0.7rem", fontWeight: 800,
                  textTransform: "uppercase", padding: "0.3rem 0.6rem", borderRadius: "6px",
                  flexShrink: 0, letterSpacing: "0.03em", marginTop: "0.1rem"
                }}>{item.step}</span>
                <div>
                  <strong style={{ color: "var(--text-main)", fontSize: "0.9rem" }}>{item.title}: </strong>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.7" }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions About Bram van de Meer
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {faqs.map((item, idx) => (
              <div key={idx} style={{
                background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
                borderRadius: "16px", padding: "1.5rem 2rem"
              }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "0.7rem" }}>
                  {item.q}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.7", margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section style={{
          background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
          borderRadius: "16px", padding: "1.5rem 2rem"
        }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
            Explore Content Audited by Bram
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              { label: "🏃‍♂️ Player Profiles Directory", href: "/players" },
              { label: "🇮🇳 Harmanpreet Singh Profile", href: "/players/harmanpreet-singh" },
              { label: "🇳🇱 Arthur Van Doren Profile", href: "/players/arthur-van-doren" },
              { label: "📊 India Results Tracker", href: "/results/india" },
              { label: "✍️ Marc Devos — Senior Journalist", href: "/authors/marc-devos" },
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

      </main>

      <Footer />
    </>
  );
}
