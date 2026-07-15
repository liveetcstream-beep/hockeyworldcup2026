import React from "react";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FaqAccordion from "../../../components/FaqAccordion";
import { matchDays, getMatchDayBySlug, allDateSlugs } from "../../../../data/datepages";

const BASE = "https://hockeyworldcup2026schedule.com";

export async function generateStaticParams() {
  return allDateSlugs;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const day = getMatchDayBySlug(resolvedParams.date);
  if (!day) return { title: "Match Day Not Found" };
  return {
    title: day.metaTitle,
    description: day.metaDesc,
    alternates: { canonical: `${BASE}/schedule/date/${day.slug}` },
    openGraph: {
      title: day.metaTitle,
      description: day.metaDesc,
      url: `${BASE}/schedule/date/${day.slug}`,
    },
    twitter: { card: "summary_large_image", title: day.metaTitle, description: day.metaDesc },
  };
}

export default async function DateMatchPage({ params }) {
  const resolvedParams = await params;
  const day = getMatchDayBySlug(resolvedParams.date);
  if (!day) return notFound();

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: day.metaTitle,
    description: day.metaDesc,
    url: `${BASE}/schedule/date/${day.slug}`,
    itemListElement: day.matches.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SportsEvent",
        name: `${m.team1} vs ${m.team2}`,
        startDate: `2026-${day.date.replace("August ", "08-").padStart(5, "0").replace("August ", "")}T${m.time_gmt}:00Z`,
        location: { "@type": "Place", name: m.venue },
        competitor: [
          { "@type": "SportsTeam", name: m.team1 },
          { "@type": "SportsTeam", name: m.team2 },
        ],
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Schedule", item: `${BASE}/schedule` },
      { "@type": "ListItem", position: 3, name: day.date, item: `${BASE}/schedule/date/${day.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: day.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      {/* HERO */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">📅 Day {day.dayNumber} — Hockey World Cup 2026</p>
          <h1 className="hero-title">Hockey World Cup 2026 Matches on {day.date} — Timings & Schedule</h1>
          <p className="hero-description">
            Complete fixture schedule for {day.date} at the FIH Hockey World Cup 2026 — all match timings in IST, CEST, GMT and EST, broadcast channels, and editorial match previews.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✍️ Expert Coverage by <strong>Marc Devos</strong></div>
            <div className="eeat-badge">📅 Updated: <strong>July 2026</strong></div>
            <div className="eeat-badge">🎓 Source: <strong>FIH Official Schedule</strong></div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <a href="/schedule" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Schedule</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <span style={{ color: "var(--text-main)", fontWeight: 600 }}>{day.date}</span>
        </nav>

        {/* Timezone Table Header */}
        <div style={{
          background: "linear-gradient(135deg, #c00030 0%, #8b0020 100%)",
          borderRadius: "14px", padding: "1.2rem 1.5rem",
          marginBottom: "2rem", color: "#fff",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
        }}>
          {[
            { label: "CEST (Belgium/Netherlands)", offset: "+2" },
            { label: "IST (India)", offset: "+5:30" },
            { label: "GMT (UK)", offset: "±0" },
            { label: "EST (USA East)", offset: "-4" },
            { label: "AEST (Australia)", offset: "+10" },
          ].map((tz) => (
            <div key={tz.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.7rem", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.06em" }}>{tz.label}</div>
              <div style={{ fontSize: "1rem", fontWeight: 800 }}>UTC {tz.offset}</div>
            </div>
          ))}
        </div>

        {/* Match Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
          {day.matches.map((match, idx) => (
            <div key={idx} className="match-card" style={{
              background: "var(--bg-secondary)",
              borderRadius: "18px",
              border: "1px solid var(--border-color)",
              overflow: "hidden",
            }}>
              {/* Pool Header Bar */}
              <div style={{
                background: "linear-gradient(135deg, #c00030 0%, #8b0020 100%)",
                padding: "0.6rem 1.5rem",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ color: "#fff", fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {match.pool}
                </span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.78rem" }}>{match.venue}</span>
              </div>

              <div style={{ padding: "1.5rem" }}>
                {/* Teams Row */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto 1fr",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.3rem" }}>{match.flag1}</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-main)" }}>{match.team1}</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {match.result ? (
                      <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary)" }}>{match.result}</div>
                    ) : (
                      <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-muted)" }}>VS</div>
                    )}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.3rem" }}>{match.flag2}</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-main)" }}>{match.team2}</div>
                  </div>
                </div>

                {/* Timezone Grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                  gap: "0.8rem",
                  marginBottom: "1.2rem",
                  padding: "1rem",
                  background: "var(--bg-tertiary)",
                  borderRadius: "10px",
                }}>
                  {[
                    { label: "CEST", time: match.time_cest },
                    { label: "IST", time: match.time_ist },
                    { label: "GMT", time: match.time_gmt },
                    { label: "EST", time: match.time_est },
                    { label: "AEST", time: match.time_aest },
                  ].filter(t => t.time).map((tz) => (
                    <div key={tz.label} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{tz.label}</div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-main)" }}>{tz.time}</div>
                    </div>
                  ))}
                </div>

                {/* Streaming Options */}
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.6rem" }}>
                    📺 Where to Watch
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {match.streaming?.map((s) => (
                      <span key={s.country} style={{
                        fontSize: "0.8rem", fontWeight: 600,
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "6px", padding: "0.3rem 0.7rem",
                        color: "var(--text-main)",
                      }}>
                        {s.country}: {s.channel}
                      </span>
                    ))}
                  </div>
                </div>

                {match.matchPreviewUrl && (
                  <a href={match.matchPreviewUrl} style={{
                    display: "inline-block",
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px", padding: "0.6rem 1.2rem",
                    color: "var(--text-main)", textDecoration: "none",
                    fontSize: "0.88rem", fontWeight: 700,
                  }}>
                    Read Match Preview →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Section */}
        <section style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          borderRadius: "18px",
          padding: "2.5rem",
          marginBottom: "3rem",
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            {day.date} — Expert Match Day Analysis
          </h2>
          <div style={{ fontSize: "1.02rem", lineHeight: 1.85, color: "var(--text-muted)" }}
            dangerouslySetInnerHTML={{ __html: day.editorial?.replace(/\n\n/g, "<br/><br/>") ?? "" }} />
        </section>

        {/* Internal Links */}
        <section style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          borderRadius: "14px", padding: "1.5rem",
          marginBottom: "2.5rem",
        }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "1rem" }}>
            Related Pages
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {day.internalLinks?.map((link) => (
              <a key={link.href} href={link.href} style={{
                padding: "0.55rem 1rem",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
                color: "var(--text-main)",
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
              }}>
                → {link.text}
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            Frequently Asked Questions — {day.date}
          </h2>
          <FaqAccordion items={day.faqs} />
        </section>
      </main>

      <Footer />
    </>
  );
}
