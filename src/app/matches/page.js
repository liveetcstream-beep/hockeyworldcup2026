import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

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

const matchesList = [
  { slug: "india-vs-pakistan", teams: "India vs Pakistan", category: "Men's Pool D Blockbuster", date: "August 19, 2026", venue: "Wagener Stadium, Amstelveen", icon: "🔥" },
  { slug: "germany-vs-belgium", teams: "Germany vs Belgium", category: "Men's Pool B Blockbuster", date: "August 17, 2026", venue: "Belfius Hockey Arena, Wavre", icon: "⚔️" },
  { slug: "netherlands-vs-australia-women", teams: "Netherlands vs Australia (Women)", category: "Women's Pool C Blockbuster", date: "August 17, 2026", venue: "Wagener Stadium, Amstelveen", icon: "🚺" },
  { slug: "india-vs-england", teams: "India vs England", category: "Men's Pool D", date: "August 17, 2026", venue: "Wagener Stadium, Amstelveen", icon: "🏑" },
  { slug: "netherlands-vs-argentina", teams: "Netherlands vs Argentina", category: "Men's Pool A Blockbuster", date: "August 18, 2026", venue: "Wagener Stadium, Amstelveen", icon: "🇳🇱" },
  { slug: "germany-vs-netherlands", teams: "Germany vs Netherlands", category: "Men's Pool A", date: "August 20, 2026", venue: "Wagener Stadium, Amstelveen", icon: "🇩🇪" },
  { slug: "australia-vs-spain", teams: "Australia vs Spain", category: "Men's Pool C", date: "August 18, 2026", venue: "Wagener Stadium, Amstelveen", icon: "🇦🇺" },
  { slug: "belgium-vs-france", teams: "Belgium vs France", category: "Men's Pool B", date: "August 15, 2026", venue: "Belfius Hockey Arena, Wavre", icon: "🇫🇷" },
  { slug: "england-vs-pakistan", teams: "England vs Pakistan", category: "Men's Pool D", date: "August 15, 2026", venue: "Wagener Stadium, Amstelveen", icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { slug: "india-vs-england-women", teams: "India vs England (Women)", category: "Women's Pool D", date: "August 20, 2026", venue: "Wagener Stadium, Amstelveen", icon: "🇮🇳" },
  { slug: "netherlands-vs-germany-women", teams: "Netherlands vs Germany (Women)", category: "Women's Pool C", date: "August 17, 2026", venue: "Belfius Hockey Arena, Wavre", icon: "🇪🇺" },
  { slug: "australia-vs-argentina", teams: "Australia vs Argentina", category: "Men's Pool C Blockbuster", date: "August 16, 2026", venue: "Belfius Hockey Arena, Wavre", icon: "☀️" },
  { slug: "belgium-vs-netherlands", teams: "Belgium vs Netherlands", category: "Men's Blockbuster Friendly", date: "August 23, 2026", venue: "Belfius Hockey Arena, Wavre", icon: "🏆" }
];

export default function MatchesDirectoryPage() {
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
              ⚡ Coverage: <strong>All Blockbuster Matches Mapped</strong>
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

        {/* Matches Grid */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "var(--text-main)",
            marginBottom: "1.5rem",
            borderLeft: "4px solid var(--primary)",
            paddingLeft: "1rem"
          }}>
            Blockbuster Previews & Tactical Guides
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {matchesList.map((match) => (
              <a
                key={match.slug}
                href={`/matches/${match.slug}`}
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
                      {match.category}
                    </span>
                    <span style={{ fontSize: "1.1rem" }}>{match.icon}</span>
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-main)", margin: "0 0 0.8rem 0" }}>
                    {match.teams}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0 0 0.4rem 0" }}>
                    <strong>Date:</strong> {match.date}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>
                    <strong>Venue:</strong> {match.venue}
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
            ))}
          </div>
        </section>

        {/* FAQs SECTION */}
        <section className="my-16">
          <div className="section-title-wrap">
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common queries about our tactical previews, H2H calculations, and predictions.</p>
          </div>

          <FaqAccordion items={faqItems} />
        </section>
      </main>

      <Footer />
    </>
  );
}
