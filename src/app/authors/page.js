import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Authors & Editorial Team | Hockey World Cup 2026 Hub",
  description: "Meet the editorial team behind Hockey World Cup 2026 Hub — veteran journalists and technical analysts who verify every schedule, player stat, and match...",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/authors",
  },
  openGraph: {
    title: "Authors & Editorial Team | Hockey World Cup 2026 Hub",
    description: "Meet the editorial team behind Hockey World Cup 2026 Hub — veteran journalists and technical analysts covering the FIH Hockey World Cup 2026.",
    url: "https://hockeyworldcup2026schedule.com/authors",
  },
};

const authors = [
  {
    emoji: "✍️",
    name: "Marc Devos",
    role: "Senior Field Hockey Journalist & Editorial Director",
    location: "Brussels, Belgium",
    experience: "15+ Years Covering FIH",
    credential: "Accredited FIH Tournament Journalist",
    summary:
      "Marc Devos has covered field hockey at the highest international level since 2008 — including FIH World Cups in The Hague (2014), Bhubaneswar (2018 & 2023), and multiple EuroHockey Championships. He leads all editorial content on this portal, including fixture schedules, match previews, team form guides, and venue information. His editorial independence from the FIH and national federations ensures all coverage is unbiased and reader-first.",
    focus: ["Fixture Schedule Accuracy", "Match Preview & Tactical Analysis", "Venue & Travel Guides", "Pool & Group Stage Analysis"],
    href: "/authors/marc-devos",
    gradient: "linear-gradient(135deg, #0b1f3a 0%, #1a2e4a 100%)",
  },
  {
    emoji: "📋",
    name: "Bram van de Meer",
    role: "Technical Field Hockey Analyst & Roster Auditor",
    location: "Eindhoven, Netherlands",
    experience: "15+ Years in Hockey Analysis",
    credential: "Former Hoofdklasse Transition Coach",
    summary:
      "Bram van de Meer brings a practitioner's eye to field hockey data. As a former transition coach with youth academies in Eindhoven affiliated with the Dutch Hoofdklasse, he understands what statistics actually mean in match context. He audits every player profile published on this portal — verifying international caps, career goals, penalty corner conversion rates, and pre-tournament fitness data against official FIH sources. If a number is on this site, Bram has checked it.",
    focus: ["Player Statistics Verification", "Penalty Corner Conversion Data", "Injury & Fitness Tracking", "Spatial & Positional Metrics"],
    href: "/authors/bram-van-de-meer",
    gradient: "linear-gradient(135deg, #1a2a4a 0%, #0e1c34 100%)",
  },
];

export default function AuthorsIndexPage() {
  return (
    <>
      <Header />

      <main className="sports-container py-12" style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Authors</span>
        </nav>

        {/* Page Header */}
        <div style={{ marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, color: "var(--text-main)", marginBottom: "1rem" }}>
            Editorial Team
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: "1.8", maxWidth: "700px" }}>
            Every schedule, player statistic, and match preview on this portal is produced and verified by a two-person team with genuine, first-hand expertise in field hockey. No AI-generated stats. No copy-pasted press releases. No anonymous bylines.
          </p>
        </div>

        {/* Editorial Standards Banner */}
        <div style={{
          background: "linear-gradient(135deg, rgba(192,0,48,0.08) 0%, rgba(15,23,42,0.6) 100%)",
          border: "1px solid rgba(192,0,48,0.2)",
          borderRadius: "16px",
          padding: "1.5rem 2rem",
          marginBottom: "3rem",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "center"
        }}>
          {[
            { icon: "✅", label: "FIH TMS Verified", desc: "All fixtures cross-referenced" },
            { icon: "🎙️", label: "Pitch-Side Experience", desc: "First-hand tournament coverage" },
            { icon: "🔍", label: "3-Step Data Audit", desc: "Player stats triple checked" },
            { icon: "📋", label: "Correction Policy", desc: "Errors fixed within 24 hours" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.8rem", flex: "1", minWidth: "160px" }}>
              <span style={{ fontSize: "1.6rem" }}>{item.icon}</span>
              <div>
                <strong style={{ color: "var(--text-main)", fontSize: "0.88rem", display: "block" }}>{item.label}</strong>
                <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Author Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "3rem" }}>
          {authors.map((author) => (
            <article key={author.name} style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              borderRadius: "24px",
              padding: "2.5rem",
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              alignItems: "flex-start"
            }}>
              {/* Avatar */}
              <div style={{
                width: "90px", height: "90px", borderRadius: "50%",
                background: author.gradient,
                border: "3px solid var(--primary)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "2.5rem", flexShrink: 0
              }}>
                {author.emoji}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: "260px" }}>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--text-main)", marginBottom: "0.3rem" }}>
                  {author.name}
                </h2>
                <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1rem" }}>
                  {author.role}
                </p>

                {/* Badges */}
                <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "1.2rem" }}>
                  {[
                    { icon: "📍", label: author.location },
                    { icon: "⏳", label: author.experience },
                    { icon: "🏑", label: author.credential },
                  ].map((badge) => (
                    <span key={badge.label} style={{
                      display: "inline-flex", alignItems: "center", gap: "0.35rem",
                      background: "var(--bg-tertiary)", border: "1px solid var(--border-color)",
                      borderRadius: "20px", padding: "0.3rem 0.8rem",
                      fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600
                    }}>
                      {badge.icon} {badge.label}
                    </span>
                  ))}
                </div>

                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                  {author.summary}
                </p>

                {/* Focus Areas */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "0.6rem" }}>
                    Focus Areas
                  </span>
                  <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                    {author.focus.map((f) => (
                      <span key={f} style={{
                        background: "var(--bg-tertiary)", border: "1px solid var(--border-color)",
                        borderRadius: "8px", padding: "0.25rem 0.7rem",
                        fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600
                      }}>{f}</span>
                    ))}
                  </div>
                </div>

                <a href={author.href} style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "var(--primary)", color: "#fff",
                  borderRadius: "12px", padding: "0.6rem 1.4rem",
                  textDecoration: "none", fontWeight: 700, fontSize: "0.88rem",
                  transition: "opacity 0.2s"
                }}>
                  Read Full Profile →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Why Our Team Section */}
        <section style={{
          background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
          borderRadius: "20px", padding: "2rem 2.5rem", marginBottom: "2rem"
        }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            Why We Use Named, Credentialed Authors
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "0.92rem", marginBottom: "1rem" }}>
            Google's Search Quality Rater Guidelines place enormous emphasis on Experience, Expertise, Authoritativeness, and Trustworthiness — what they call E-E-A-T. For sports information specifically, this means readers and search engines alike need to know that the person writing about field hockey has genuine knowledge of the sport, not just SEO targeting.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "0.92rem", marginBottom: "1rem" }}>
            Marc Devos has physically attended FIH World Cups. Bram van de Meer has coached on a field hockey pitch. These are not biographical embellishments — they are the reason the data on this portal is more reliable than sites that automate hockey statistics from unreliable third-party feeds.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "0.92rem" }}>
            If you find an error anywhere on this portal, contact us at{" "}
            <a href="mailto:editor@hockeyworldcup2026schedule.com" style={{ color: "var(--primary)", fontWeight: 700, wordBreak: "break-all" }}>
              editor@hockeyworldcup2026schedule.com
            </a>. Marc personally reviews all correction submissions within 24 hours.
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}
