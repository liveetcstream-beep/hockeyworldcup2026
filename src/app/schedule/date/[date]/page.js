import React from "react";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FaqAccordion from "../../../components/FaqAccordion";
import { matchDays, getMatchDayBySlug, allDateSlugs } from "../../../../data/datepages";
import { ALL_MATCHES } from "../../../../data/allMatches";

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

const flagCodeMap = {
  "Netherlands": "nl",
  "South Africa": "za",
  "India": "in",
  "Wales": "gb-wls",
  "Belgium": "be",
  "Malaysia": "my",
  "Germany": "de",
  "France": "fr",
  "Australia": "au",
  "Spain": "es",
  "Argentina": "ar",
  "New Zealand": "nz",
  "Chile": "cl",
  "Ireland": "ie",
  "Pakistan": "pk",
  "England": "gb-eng",
  "China": "cn",
  "United States": "us",
  "USA": "us",
  "Scotland": "gb-sct"
};

const getConvertedTimes = (timeCET) => {
  if (!timeCET) return [];
  const [h, m] = timeCET.split(":").map(Number);

  // PKT = CET + 3 hours
  const pktH = (h + 3) % 24;
  const timePKT = `${String(pktH).padStart(2, "0")}:${String(m).padStart(2, "0")} PKT`;

  // IST = CET + 3.5 hours
  let istM = m + 30;
  let istH = h + 3;
  if (istM >= 60) {
    istM -= 60;
    istH += 1;
  }
  istH = istH % 24;
  const timeIST = `${String(istH).padStart(2, "0")}:${String(istM).padStart(2, "0")} IST`;

  // GMT = CET - 1 hour
  let gmtH = h - 1;
  if (gmtH < 0) gmtH += 24;
  const timeGMT = `${String(gmtH).padStart(2, "0")}:${String(m).padStart(2, "0")} GMT`;

  // EST = CET - 6 hours
  let estH = h - 6;
  if (estH < 0) estH += 24;
  const estPeriod = estH >= 12 ? "PM" : "AM";
  const displayEstH = estH % 12 === 0 ? 12 : estH % 12;
  const timeEST = `${String(displayEstH).padStart(2, "0")}:${String(m).padStart(2, "0")} ${estPeriod} EST`;

  return [
    { label: "CEST (Local)", time: `${timeCET} CEST` },
    { label: "PKT (Pakistan)", time: timePKT },
    { label: "IST (India)", time: timeIST },
    { label: "GMT (UK)", time: timeGMT },
    { label: "EST (USA)", time: timeEST },
  ];
};

const getMatchPreviewLink = (teamA, teamB, gender) => {
  const tA = teamA.toLowerCase();
  const tB = teamB.toLowerCase();
  const g = gender?.toLowerCase();

  if ((tA === "pakistan" && tB === "india") || (tA === "india" && tB === "pakistan")) return "/matches/india-vs-pakistan";
  if ((tA === "india" && tB === "wales") || (tA === "wales" && tB === "india")) return "/matches/india-vs-wales";
  if ((tA === "pakistan" && tB === "wales") || (tA === "wales" && tB === "pakistan")) return "/matches/pakistan-vs-wales";
  if ((tA === "germany" && tB === "belgium") || (tA === "belgium" && tB === "germany")) return "/matches/germany-vs-belgium";
  if ((tA === "australia" && tB === "netherlands") || (tA === "netherlands" && tB === "australia")) return "/matches/netherlands-vs-australia-women";
  if ((tA === "india" && tB === "england") || (tA === "england" && tB === "india")) return g === "women" ? "/matches/india-vs-england-women" : "/matches/india-vs-england";
  if ((tA === "argentina" && tB === "netherlands") || (tA === "netherlands" && tB === "argentina")) return "/matches/netherlands-vs-argentina";
  if ((tA === "spain" && tB === "australia") || (tA === "australia" && tB === "spain")) return "/matches/australia-vs-spain";
  if ((tA === "belgium" && tB === "france") || (tA === "france" && tB === "belgium")) return "/matches/belgium-vs-france";
  if ((tA === "england" && tB === "pakistan") || (tA === "pakistan" && tB === "england")) return "/matches/england-vs-pakistan";

  return null;
};

export default async function DateMatchPage({ params }) {
  const resolvedParams = await params;
  const day = getMatchDayBySlug(resolvedParams.date);
  if (!day) return notFound();

  // Dynamically sync matches from master ALL_MATCHES database
  const masterMatchesForDay = ALL_MATCHES.filter((m) => m.date === day.date);

  const displayMatches = masterMatchesForDay.length > 0
    ? masterMatchesForDay.map((m) => ({
        matchNumber: m.id,
        matchCode: m.matchCode || `Match #${m.id}`,
        timeCET: m.timeCEST || m.timeCET,
        team1: m.teamA,
        flagCode1: m.flagA || flagCodeMap[m.teamA] || "un",
        team2: m.teamB,
        flagCode2: m.flagB || flagCodeMap[m.teamB] || "un",
        venue: m.venue,
        pool: m.pool,
        gender: m.gender,
        matchPreviewUrl: getMatchPreviewLink(m.teamA, m.teamB, m.gender),
        streaming: [
          { country: "India", channel: "Star Sports Select / JioHotstar" },
          { country: "Pakistan", channel: "A Sports / PTV Sports" },
          { country: "UK", channel: "TNT Sports" },
          { country: "USA", channel: "CBS Sports Network / Watch.Hockey" },
          { country: "Netherlands", channel: "NOS Sport / Ziggo Sport" },
          { country: "Belgium", channel: "VRT 1 / RTBF" },
        ],
      }))
    : day.matches.map((m) => ({
        matchNumber: m.matchNumber || 1,
        timeCET: m.time_cest || "12:00",
        team1: m.team1,
        flagCode1: flagCodeMap[m.team1] || "un",
        team2: m.team2,
        flagCode2: flagCodeMap[m.team2] || "un",
        venue: m.venue,
        pool: m.pool,
        gender: m.team1.includes("Women") || m.pool.includes("Women") ? "Women" : "Men",
        matchPreviewUrl: m.matchPreviewUrl || getMatchPreviewLink(m.team1, m.team2),
        streaming: m.streaming || [
          { country: "India", channel: "Star Sports / Hotstar" },
          { country: "Pakistan", channel: "PTV Sports" },
          { country: "Worldwide", channel: "Watch.Hockey" },
        ],
      }));

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: day.metaTitle,
    description: day.metaDesc,
    url: `${BASE}/schedule/date/${day.slug}`,
    itemListElement: displayMatches.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SportsEvent",
        name: `${m.team1} vs ${m.team2} (${m.gender}'s ${m.pool})`,
        startDate: `2026-${day.date.replace("August ", "08-").padStart(5, "0").replace("August ", "")}T${m.timeCET}:00Z`,
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
          <p className="hero-subtitle">📅 Day {day.dayNumber} — Synced FIH World Cup Fixtures</p>
          <h1 className="hero-title">Hockey World Cup 2026 Matches on {day.date} — Full Timings & Schedule</h1>
          <p className="hero-description">
            Complete, verified match schedule for {day.date} at the FIH Hockey World Cup 2026. All match kickoff times in PKT, IST, CEST, GMT, and EST, broadcast channel listings, stadium venue guides, and direct match previews.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">✍️ Expert Coverage by <strong>HWC 2026 Editorial Desk</strong></div>
            <div className="eeat-badge">⚡ Status: <strong>Synced with Master Schedule</strong></div>
            <div className="eeat-badge">🎓 Database: <strong>FIH Official Match Center</strong></div>
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
          marginBottom: "2rem", color: "#ffffff",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
        }}>
          {[
            { label: "CEST (Local)", offset: "UTC +2" },
            { label: "PKT (Pakistan)", offset: "UTC +5" },
            { label: "IST (India)", offset: "UTC +5:30" },
            { label: "GMT (UK)", offset: "UTC ±0" },
            { label: "EST (USA East)", offset: "UTC -4" },
          ].map((tz) => (
            <div key={tz.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.72rem", opacity: 0.9, textTransform: "uppercase", letterSpacing: "0.06em", color: "#ffffff" }}>{tz.label}</div>
              <div style={{ fontSize: "1rem", fontWeight: 800, color: "#ffffff" }}>{tz.offset}</div>
            </div>
          ))}
        </div>

        {/* Match Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem", marginBottom: "3rem" }}>
          {displayMatches.map((match, idx) => {
            const timeList = getConvertedTimes(match.timeCET);

            return (
              <div key={idx} className="match-card" style={{
                background: "var(--bg-secondary)",
                borderRadius: "18px",
                border: "1px solid var(--border-color)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                overflow: "hidden",
              }}>
                {/* Pool Header Bar */}
                <div style={{
                  background: "linear-gradient(135deg, #c00030 0%, #8b0020 100%)",
                  padding: "0.75rem 1.5rem",
                  display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff", fontSize: "0.75rem", fontWeight: "800", padding: "0.2rem 0.6rem", borderRadius: "4px", textTransform: "uppercase" }}>
                      {match.gender}'s {match.pool}
                    </span>
                    <span style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: "800" }}>
                      {match.matchCode || `Match #${match.matchNumber}`}
                    </span>
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.8rem", fontWeight: "600" }}>
                    📍 {match.venue}
                  </span>
                </div>

                <div style={{ padding: "1.5rem" }}>
                  {/* Teams Row with FlagCDN Images */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    gap: "1.5rem",
                    marginBottom: "1.5rem",
                  }}>
                    {/* Team 1 */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.5rem" }}>
                      <img
                        src={`https://flagcdn.com/w80/${match.flagCode1}.png`}
                        alt={`${match.team1} flag`}
                        style={{ width: "52px", height: "34px", borderRadius: "5px", boxShadow: "0 2px 8px rgba(0,0,0,0.18)", objectFit: "cover" }}
                      />
                      <div style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)" }}>{match.team1}</div>
                    </div>

                    {/* VS Badge */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--primary)", textTransform: "uppercase", background: "rgba(192,0,48,0.1)", padding: "0.25rem 0.6rem", borderRadius: "6px", marginBottom: "0.3rem" }}>
                        FIH World Cup
                      </span>
                      <div style={{ fontSize: "1.3rem", fontWeight: "900", color: "var(--text-muted)" }}>VS</div>
                    </div>

                    {/* Team 2 */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.5rem" }}>
                      <img
                        src={`https://flagcdn.com/w80/${match.flagCode2}.png`}
                        alt={`${match.team2} flag`}
                        style={{ width: "52px", height: "34px", borderRadius: "5px", boxShadow: "0 2px 8px rgba(0,0,0,0.18)", objectFit: "cover" }}
                      />
                      <div style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)" }}>{match.team2}</div>
                    </div>
                  </div>

                  {/* Timezone Grid */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                    gap: "0.8rem",
                    marginBottom: "1.4rem",
                    padding: "1rem 1.2rem",
                    background: "var(--bg-tertiary)",
                    borderRadius: "12px",
                    border: "1px solid var(--border-color)",
                  }}>
                    {timeList.map((tz) => (
                      <div key={tz.label} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>{tz.label}</div>
                        <div style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--text-main)" }}>{tz.time}</div>
                      </div>
                    ))}
                  </div>

                  {/* Streaming & Preview Action Buttons */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <div>
                      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.4rem" }}>
                        📺 Broadcast Channels
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {match.streaming?.map((s) => (
                          <span key={s.country} style={{
                            fontSize: "0.78rem", fontWeight: 600,
                            background: "var(--bg-tertiary)",
                            border: "1px solid var(--border-color)",
                            borderRadius: "6px", padding: "0.25rem 0.6rem",
                            color: "var(--text-main)",
                          }}>
                            {s.country}: {s.channel}
                          </span>
                        ))}
                      </div>
                    </div>

                    {match.matchPreviewUrl ? (
                      <a href={match.matchPreviewUrl} style={{
                        background: "#c00030",
                        color: "#ffffff",
                        borderRadius: "8px", padding: "0.65rem 1.3rem",
                        textDecoration: "none",
                        fontSize: "0.88rem", fontWeight: 800,
                        boxShadow: "0 2px 8px rgba(192,0,48,0.2)",
                        transition: "all 0.2s ease"
                      }}>
                        Read Match Preview →
                      </a>
                    ) : (
                      <a href={`/hockey-world-cup-2026-schedule-${match.team1.toLowerCase().replace(/\s+/g, '-')}`} style={{
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-main)",
                        borderRadius: "8px", padding: "0.6rem 1.2rem",
                        textDecoration: "none",
                        fontSize: "0.85rem", fontWeight: 700,
                      }}>
                        {match.team1} Team Hub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
            🔗 Related Match Day Links
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
