import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import { ALL_MATCHES } from "../../data/allMatches";

export const metadata = {
  title: "Hockey World Cup 2026 Match Previews & H2H Guides",
  description: "Browse detailed pre-match tactical previews, verified head-to-head records, squad lists, local CET/IST match timings, and expert predictions for the...",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Match Previews & H2H Guides",
    description: "Browse detailed pre-match tactical previews, verified head-to-head records, squad lists, local CET/IST match timings, and expert predictions for the...",
    url: "https://hockeyworldcup2026schedule.com/matches",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Match Previews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Match Previews & H2H Guides",
    description: "Browse detailed pre-match tactical previews, verified head-to-head records, squad lists, local CET/IST match timings, and expert predictions for the...",
    images: ["/og-image.jpg"],
  },
};

const faqItems = [
  {
    question: "Where can I find tactical previews for all Hockey World Cup 2026 matches?",
    answer: "You can find comprehensive pre-match previews for all key group stage and knockout matchups in this matches directory. We cover rosters, formations, and drag-flick success ratios."
  },
  {
    question: "How are the head-to-head records on this site verified?",
    answer: "Every H2H stats card and historic table is audited by our analyst Bram van de Meer against official FIH Tournament Management System (TMS) historical match logs."
  },
  {
    question: "Do you cover both the Men's and Women's match previews?",
    answer: "Yes. In accordance with our editorial gender equality policy, we provide identical depth of coverage for both the Men's and Women's tournament matches."
  },
  {
    question: "How do I convert match kickoff times to my local timezone?",
    answer: "Each individual match preview page features local Central European Time (CET) kickoff times alongside pre-configured conversions for Indian Standard Time (IST) and Eastern Time (ET)."
  },
  {
    question: "Are the predictions on these match pages official?",
    answer: "No. The match score predictions and tactical evaluations represent the professional editorial opinions of our writing staff and should not be used as official tournament projections."
  }
];

// Helper to determine if a match has a dedicated preview folder
const getPreviewSlug = (teamA, teamB, gender) => {
  const tA = teamA.toLowerCase();
  const tB = teamB.toLowerCase();
  const g = gender.toLowerCase();

  if (((tA === "pakistan" && tB === "india") || (tA === "india" && tB === "pakistan")) && g === "men") return "india-vs-pakistan";
  if (((tA === "germany" && tB === "belgium") || (tA === "belgium" && tB === "germany")) && g === "men") return "germany-vs-belgium";
  if (((tA === "australia" && tB === "netherlands") || (tA === "netherlands" && tB === "australia")) && g === "women") return "netherlands-vs-australia-women";
  if (((tA === "india" && tB === "england") || (tA === "england" && tB === "india")) && g === "men") return "india-vs-england";
  if (((tA === "argentina" && tB === "netherlands") || (tA === "netherlands" && tB === "argentina")) && g === "men") return "netherlands-vs-argentina";
  if (((tA === "spain" && tB === "australia") || (tA === "australia" && tB === "spain")) && g === "men") return "australia-vs-spain";
  if (((tA === "belgium" && tB === "france") || (tA === "france" && tB === "belgium")) && g === "men") return "belgium-vs-france";
  if (((tA === "england" && tB === "pakistan") || (tA === "pakistan" && tB === "england")) && g === "men") return "england-vs-pakistan";
  if (((tA === "india" && tB === "england") || (tA === "england" && tB === "india")) && g === "women") return "india-vs-england-women";
  if (((tA === "germany" && tB === "netherlands") || (tA === "netherlands" && tB === "germany")) && g === "men") return "germany-vs-netherlands";
  if (((tA === "netherlands" && tB === "germany") || (tA === "germany" && tB === "netherlands")) && g === "women") return "netherlands-vs-germany-women";
  if (((tA === "australia" && tB === "argentina") || (tA === "argentina" && tB === "australia")) && g === "men") return "australia-vs-argentina";
  if (((tA === "belgium" && tB === "netherlands") || (tA === "netherlands" && tB === "belgium")) && g === "men") return "belgium-vs-netherlands";
  if (((tA === "india" && tB === "wales") || (tA === "wales" && tB === "india")) && g === "men") return "india-vs-wales";
  if (((tA === "pakistan" && tB === "wales") || (tA === "wales" && tB === "pakistan")) && g === "men") return "pakistan-vs-wales";

  return null;
};

export default function MatchesDirectoryPage() {
  // Find all matches that have previews to list them in the "Featured Previews" section
  const featuredPreviews = ALL_MATCHES.filter(match => getPreviewSlug(match.teamA, match.teamB, match.gender) !== null);

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
                  { "@type": "ListItem", "position": 2, "name": "Match Previews", "item": "https://hockeyworldcup2026schedule.com/matches" }
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
          <p className="hero-subtitle">🏟️ Blockbuster Matchups & Head-to-Head Analytics</p>
          <h1 className="hero-title">Hockey World Cup 2026 Match Previews</h1>
          <p className="hero-description">
            Read tactical match previews and head-to-head records compiled by our expert writers. Get the inside track on penalty corner strategies, key roster updates, and predicted starting lineups.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Audited by: <strong>Bram van de Meer (Technical Roster Auditor)</strong>
            </div>
            <div className="eeat-badge">
              ⚡ Coverage: <strong>All 100 Fixtures Mapped</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Match Previews Directory</span>
        </nav>

        {/* 1. Featured Previews */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "var(--text-main)",
            marginBottom: "1.5rem",
            borderLeft: "4px solid var(--primary)",
            paddingLeft: "1rem"
          }}>
            🔥 Active Previews & Tactical Analysis
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {featuredPreviews.map((match) => {
              const slug = getPreviewSlug(match.teamA, match.teamB, match.gender);
              return (
                <a
                  key={match.id}
                  href={`/matches/${slug}`}
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textDecoration: "none",
                    transition: "transform 0.2s, border-color 0.2s"
                  }}
                  className="match-card"
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                      <span style={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        color: "var(--primary)",
                        background: "rgba(192,0,48,0.08)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "6px",
                        textTransform: "uppercase"
                      }}>
                        {match.gender}'s {match.pool}
                      </span>
                      <span style={{ fontSize: "1.1rem" }}>🏑</span>
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-main)", margin: "0 0 0.8rem 0" }}>
                      {match.teamA} vs {match.teamB}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0 0 0.4rem 0" }}>
                      <strong>Date:</strong> {match.date} | {match.timeCET} CET
                    </p>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>
                      <strong>Venue:</strong> {match.venue.split(',')[0]}
                    </p>
                  </div>
                  <span style={{
                    display: "inline-block",
                    marginTop: "1.2rem",
                    color: "var(--primary)",
                    fontWeight: 700,
                    fontSize: "0.9rem"
                  }}>
                    View Tactical Preview →
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* 2. Full 100 Matches Directory List */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "var(--text-main)",
            marginBottom: "1.5rem",
            borderLeft: "4px solid var(--primary)",
            paddingLeft: "1rem"
          }}>
            📋 Complete Tournament Fixtures Index (100 Matches)
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem", lineHeight: "1.6" }}>
            Below is the full schedule of all 100 matches for the co-hosted Hockey World Cups. Click <strong>"Read Preview"</strong> to view tactical guides, injury updates, and lineups for matches that have preview analysis.
          </p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <thead>
                <tr style={{ background: "var(--bg-tertiary)", borderBottom: "2px solid var(--border-color)" }}>
                  <th style={{ padding: "1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-main)", fontWeight: "700" }}>ID</th>
                  <th style={{ padding: "1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-main)", fontWeight: "700" }}>Tournament</th>
                  <th style={{ padding: "1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-main)", fontWeight: "700" }}>Matchup Details</th>
                  <th style={{ padding: "1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-main)", fontWeight: "700" }}>Stage / Pool</th>
                  <th style={{ padding: "1rem", textAlign: "left", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-main)", fontWeight: "700" }}>Date & Time (CET)</th>
                  <th style={{ padding: "1rem", textAlign: "center", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-main)", fontWeight: "700" }}>Preview Status</th>
                </tr>
              </thead>
              <tbody>
                {ALL_MATCHES.map((match, i) => {
                  const slug = getPreviewSlug(match.teamA, match.teamB, match.gender);
                  return (
                    <tr key={match.id} style={{ borderBottom: "1px solid var(--border-color)", background: i % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-tertiary)" }}>
                      <td style={{ padding: "1rem", fontWeight: "700", color: "var(--text-muted)" }}>#{match.id}</td>
                      <td style={{ padding: "1rem", fontWeight: "600" }}>
                        <span style={{
                          fontSize: "0.75rem",
                          fontWeight: "700",
                          color: match.gender === "Men" ? "#0284c7" : "#f43f5e",
                          background: match.gender === "Men" ? "rgba(2,132,199,0.1)" : "rgba(244,63,94,0.1)",
                          borderRadius: "6px",
                          padding: "0.2rem 0.5rem"
                        }}>
                          {match.gender}
                        </span>
                      </td>
                      <td style={{ padding: "1rem", fontWeight: "700", color: "var(--text-main)" }}>
                        {match.teamA} vs {match.teamB}
                      </td>
                      <td style={{ padding: "1rem", color: "var(--text-muted)", fontSize: "0.88rem" }}>{match.pool}</td>
                      <td style={{ padding: "1rem", color: "var(--text-muted)", fontSize: "0.88rem" }}>
                        {match.date.split(',')[0]} at {match.timeCET}
                      </td>
                      <td style={{ padding: "1rem", textAlign: "center" }}>
                        {slug ? (
                          <a href={`/matches/${slug}`} style={{
                            background: "linear-gradient(135deg, #c00030 0%, #a00028 100%)",
                            color: "white",
                            borderRadius: "8px",
                            padding: "0.35rem 0.8rem",
                            fontSize: "0.8rem",
                            fontWeight: "700",
                            textDecoration: "none",
                            display: "inline-block",
                            boxShadow: "0 2px 8px rgba(192,0,48,0.2)"
                          }}>
                            Read Preview →
                          </a>
                        ) : (
                          <span style={{
                            color: "var(--text-muted)",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            background: "var(--bg-tertiary)",
                            border: "1px solid var(--border-color)",
                            borderRadius: "8px",
                            padding: "0.35rem 0.8rem",
                            display: "inline-block"
                          }}>
                            Mapped
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs SECTION */}
        <section className="my-16">
          <div className="section-title-wrap" style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800 }}>Frequently Asked Questions</h2>
            <p style={{ color: "var(--text-muted)" }}>Get answers to common queries about our tactical previews, H2H calculations, and predictions.</p>
          </div>

          <FaqAccordion items={faqItems} />
        </section>
      </main>

      <Footer />
    </>
  );
}
