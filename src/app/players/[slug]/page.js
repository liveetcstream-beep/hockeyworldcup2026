import React from "react";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";
import { players, getPlayerBySlug, allPlayerSlugs } from "../../../data/players";

const BASE = "https://hockeyworldcup2026schedule.com";

// ─── Static Params ──────────────────────────────────────────
export async function generateStaticParams() {
  return allPlayerSlugs;
}

// ─── Dynamic Metadata ────────────────────────────────────────
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const p = getPlayerBySlug(resolvedParams.slug);
  if (!p) return { title: "Player Not Found" };
  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: { canonical: `${BASE}/players/${p.slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `${BASE}/players/${p.slug}`,
      type: "profile",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: p.metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: p.metaTitle,
      description: p.metaDesc,
      images: ["/og-image.jpg"],
    },
  };
}

// ─── Page ────────────────────────────────────────────────────
export default async function PlayerProfilePage({ params }) {
  const resolvedParams = await params;
  const p = getPlayerBySlug(resolvedParams.slug);
  if (!p) return notFound();

  // JSON-LD schemas
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    nationality: p.team,
    jobTitle: p.position,
    description: p.metaDesc,
    url: `${BASE}/players/${p.slug}`,
    sport: "Field Hockey",
    memberOf: {
      "@type": "SportsTeam",
      name: `${p.team} National Hockey Team`,
      sport: "Field Hockey",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Players", item: `${BASE}/players` },
      { "@type": "ListItem", position: 3, name: p.name, item: `${BASE}/players/${p.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const teamColors = {
    India: { primary: "#0033A0", accent: "#FF9933", bg: "rgba(0,51,160,0.08)" },
    Pakistan: { primary: "#01411C", accent: "#FFFFFF", bg: "rgba(1,65,28,0.08)" },
    Belgium: { primary: "#C00030", accent: "#F9D616", bg: "rgba(192,0,48,0.08)" },
    Netherlands: { primary: "#FF6600", accent: "#003087", bg: "rgba(255,102,0,0.08)" },
    Germany: { primary: "#000000", accent: "#DD0000", bg: "rgba(0,0,0,0.08)" },
    Australia: { primary: "#003087", accent: "#FFCD00", bg: "rgba(0,48,135,0.08)" },
    Argentina: { primary: "#74ACDF", accent: "#FFFFFF", bg: "rgba(116,172,223,0.08)" },
    England: { primary: "#012169", accent: "#CF142B", bg: "rgba(1,33,105,0.08)" },
    Spain: { primary: "#AA151B", accent: "#F1BF00", bg: "rgba(170,21,27,0.08)" },
    France: { primary: "#002395", accent: "#ED2939", bg: "rgba(0,35,149,0.08)" },
    Malaysia: { primary: "#CC0001", accent: "#FFCC00", bg: "rgba(204,0,1,0.08)" },
    Ireland: { primary: "#169B62", accent: "#FFFFFF", bg: "rgba(22,155,98,0.08)" },
    Wales: { primary: "#C8102E", accent: "#FFFFFF", bg: "rgba(200,16,46,0.08)" },
    "South Africa": { primary: "#007A4D", accent: "#FFB81C", bg: "rgba(0,122,77,0.08)" },
    "New Zealand": { primary: "#000000", accent: "#FFFFFF", bg: "rgba(0,0,0,0.08)" },
    Chile: { primary: "#D52B1E", accent: "#003087", bg: "rgba(213,43,30,0.08)" },
  };
  const tc = teamColors[p.team] || { primary: "#c00030", accent: "#ffffff", bg: "rgba(192,0,48,0.08)" };

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      {/* ── HERO BANNER ── */}
      <section style={{
        background: `linear-gradient(135deg, ${tc.primary}22 0%, var(--bg-primary) 60%)`,
        borderBottom: `3px solid ${tc.primary}44`,
        padding: "3.5rem 0 2.5rem",
      }}>
        <div className="sports-container">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
            <a href="/players" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Players</a>
            <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
            <span style={{ color: "var(--text-main)", fontWeight: 600 }}>{p.name}</span>
          </nav>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "flex-start" }}>
            {/* Flag Avatar */}
            <div style={{
              width: "110px", height: "110px",
              borderRadius: "50%",
              background: tc.bg,
              border: `3px solid ${tc.primary}55`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "3.5rem",
              flexShrink: 0,
            }}>
              {p.flag}
            </div>

            {/* Player Identity */}
            <div style={{ flex: 1, minWidth: "260px" }}>
              {p.role && (
                <span style={{
                  display: "inline-block",
                  background: `${tc.primary}22`,
                  color: tc.primary,
                  fontSize: "0.72rem", fontWeight: 800,
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  padding: "0.3rem 0.8rem", borderRadius: "6px",
                  marginBottom: "0.8rem",
                  border: `1px solid ${tc.primary}44`,
                }}>
                  {p.role}
                </span>
              )}
              <h1 style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900, color: "var(--text-main)",
                lineHeight: 1.15, marginBottom: "0.5rem",
              }}>
                {p.name}
              </h1>
              <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "1rem" }}>
                {p.flag} {p.team} · {p.position} · #{p.jerseyNumber}
              </p>

              {/* E-E-A-T Strip */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "1rem",
                padding: "0.8rem 1rem",
                background: "var(--bg-secondary)",
                borderRadius: "10px",
                border: "1px solid var(--border-color)",
                fontSize: "0.82rem",
              }}>
                <span>✍️ Written by <strong>Marc Devos</strong> — Senior Hockey Analyst</span>
                <span>📅 Last Updated: <strong>July 2026</strong></span>
                <span>🎓 Source: <strong>FIH Official Data</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS CARD ── */}
      <section style={{ background: tc.bg, borderBottom: `1px solid ${tc.primary}22`, padding: "1.8rem 0" }}>
        <div className="sports-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "1rem",
          }}>
            {[
              { label: "International Caps", value: p.caps, icon: "🏑" },
              { label: "International Goals", value: p.goals, icon: "⚽" },
              { label: "Age", value: p.age, icon: "🎂" },
              { label: "World Cup Apps", value: p.worldCupAppearances ?? "2026 Debut", icon: "🏆" },
              { label: "Current Club", value: p.currentClub?.split("(")[0]?.trim() ?? "N/A", icon: "🏟️" },
              { label: "Hometown", value: p.hometown?.split(",")[0] ?? "N/A", icon: "📍" },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                borderRadius: "12px",
                padding: "1rem",
                textAlign: "center",
              }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "0.3rem" }}>{stat.icon}</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "var(--text-main)", lineHeight: 1.2 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "0.3rem" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="sports-container" style={{ padding: "3rem 0 4rem" }}>
        <div className="p-seo-layout" style={{ gap: "3rem" }}>

          {/* ── ARTICLE BODY ── */}
          <article style={{ minWidth: 0 }}>

            {/* Intro */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
                Who Is {p.name}? (The Complete 2026 Profile)
              </h2>
              <div style={{ fontSize: "1.02rem", lineHeight: 1.85, color: "var(--text-muted)" }}
                dangerouslySetInnerHTML={{ __html: p.intro?.replace(/\n\n/g, "<br/><br/>") ?? "" }} />
            </section>

            <hr style={{ borderColor: "var(--border-color)", margin: "2rem 0" }} />

            {/* Playing Style */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
                Playing Style & Tactical Role at the 2026 World Cup
              </h2>
              <div style={{ fontSize: "1.02rem", lineHeight: 1.85, color: "var(--text-muted)" }}
                dangerouslySetInnerHTML={{ __html: p.playingStyle?.replace(/\n\n/g, "<br/><br/>") ?? "" }} />
            </section>

            <hr style={{ borderColor: "var(--border-color)", margin: "2rem 0" }} />

            {/* Form 2026 */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
                {p.name}&apos;s Form in July 2026 — Is He Ready?
              </h2>
              {/* Pain-Point Box */}
              <div style={{
                background: `${tc.primary}11`,
                border: `1px solid ${tc.primary}33`,
                borderRadius: "12px", padding: "1rem 1.2rem",
                marginBottom: "1.2rem", fontSize: "0.9rem",
              }}>
                <strong>❓ Fan Question:</strong> &quot;Is {p.name} fit for the Hockey World Cup 2026?&quot;
                <br />
                <strong>✅ Answer:</strong> See the July 2026 form update below.
              </div>
              <div style={{ fontSize: "1.02rem", lineHeight: 1.85, color: "var(--text-muted)" }}
                dangerouslySetInnerHTML={{ __html: p.form2026?.replace(/\n\n/g, "<br/><br/>") ?? "" }} />
            </section>

            <hr style={{ borderColor: "var(--border-color)", margin: "2rem 0" }} />

            {/* World Cup Preview */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
                What to Expect from {p.name} at Hockey World Cup 2026?
              </h2>
              <div style={{ fontSize: "1.02rem", lineHeight: 1.85, color: "var(--text-muted)" }}
                dangerouslySetInnerHTML={{ __html: p.worldCupPreview?.replace(/\n\n/g, "<br/><br/>") ?? "" }} />
            </section>

            <hr style={{ borderColor: "var(--border-color)", margin: "2rem 0" }} />

            {/* Career */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
                Career Milestones & International Record
              </h2>
              <div style={{ fontSize: "1.02rem", lineHeight: 1.85, color: "var(--text-muted)" }}
                dangerouslySetInnerHTML={{ __html: p.careerMilestones?.replace(/\n\n/g, "<br/><br/>") ?? "" }} />
            </section>

            <hr style={{ borderColor: "var(--border-color)", margin: "2rem 0" }} />

            {/* FAQs */}
            <section style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
                Frequently Asked Questions About {p.name}
              </h2>
              <FaqAccordion items={p.faqs} />
            </section>

          </article>

          {/* ── SIDEBAR ── */}
          <aside style={{ position: "sticky", top: "100px" }}>

            {/* Quick Facts Card */}
            <div style={{
              background: "var(--bg-secondary)",
              border: `2px solid ${tc.primary}44`,
              borderRadius: "16px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Quick Facts
              </h3>
              {[
                { label: "Full Name", value: p.name },
                { label: "Born", value: p.born ?? "N/A" },
                { label: "Hometown", value: p.hometown ?? "N/A" },
                { label: "Position", value: p.position },
                { label: "Jersey #", value: `#${p.jerseyNumber}` },
                { label: "Current Club", value: p.currentClub ?? "N/A" },
                { label: "Penalty Corner Rate", value: p.penaltyCornerRate ?? "N/A" },
              ].map((row) => (
                <div key={row.label} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "0.55rem 0",
                  borderBottom: "1px solid var(--border-color)",
                  fontSize: "0.88rem",
                }}>
                  <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>{row.label}</span>
                  <span style={{ color: "var(--text-main)", fontWeight: 700, textAlign: "right", maxWidth: "55%" }}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* Internal Links Hub */}
            <div style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              borderRadius: "16px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "1rem" }}>
                Related Pages
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {p.internalLinks?.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} style={{
                      display: "block",
                      padding: "0.6rem 0.9rem",
                      background: "var(--bg-tertiary)",
                      borderRadius: "8px",
                      color: "var(--text-main)",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      transition: "background 0.2s",
                    }}>
                      → {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live Score CTA */}
            <a href="/live-scores" style={{
              display: "block",
              background: "linear-gradient(135deg, #c00030 0%, #8b0020 100%)",
              color: "#fff",
              textDecoration: "none",
              padding: "1rem 1.2rem",
              borderRadius: "12px",
              textAlign: "center",
              fontWeight: 800,
              fontSize: "0.95rem",
              marginBottom: "1rem",
              boxShadow: "0 4px 20px rgba(192,0,48,0.3)",
            }}>
              🔴 Live Score Tracker →
            </a>

            {/* Tags */}
            {p.tags && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {p.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: "0.75rem", fontWeight: 700,
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "6px", padding: "0.3rem 0.7rem",
                    color: "var(--text-muted)",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </aside>

        </div>
      </main>

      <Footer />
    </>
  );
}
