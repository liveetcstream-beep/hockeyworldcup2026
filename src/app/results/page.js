import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const faqItems = [
  {
    question: "Where can I find match results for specific teams in the Hockey World Cup 2026?",
    answer: "You can find team-specific results on our results hub by clicking on any of the 16 qualified countries' cards. This displays their full match results, list of goal scorers, cards received, and pool standings."
  },
  {
    question: "How quickly are the match results updated on the portal?",
    answer: "All match results, goal tallies, and points table adjustments are updated within minutes of the official match pushback completion in Amstelveen and Wavre."
  },
  {
    question: "How are the points in group standings calculated?",
    answer: "In the group stages, teams receive 3 points for a win, 1 point for a draw, and 0 points for a loss. Shootout wins in crossover or knockout matches determine qualification progress but do not change pool standings points."
  }
];

export const metadata = {
  title: "Hockey World Cup 2026 Results: All Match Scores & Group Standings",
  description: "Get the complete results of the FIH Hockey World Cup 2026. View all match scores, goal scorers, points table adjustments, and knockout progress for all...",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/results",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Results: All Match Scores & Group Standings",
    description: "Get the complete results of the FIH Hockey World Cup 2026. View all match scores, goal scorers, points table adjustments, and knockout progress for all...",
    url: "https://hockeyworldcup2026schedule.com/results",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Match Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Results: All Match Scores & Group Standings",
    description: "Get the complete results of the FIH Hockey World Cup 2026. View all match scores, goal scorers, points table adjustments, and knockout progress for all...",
    images: ["/og-image.jpg"],
  },
};

export default function ResultsIndexPage() {
  const teamsList = [
    { name: "India", slug: "india", flag: "🇮🇳", pool: "Pool D" },
    { name: "Pakistan", slug: "pakistan", flag: "🇵🇰", pool: "Pool D" },
    { name: "Belgium", slug: "belgium", flag: "🇧🇪", pool: "Pool B" },
    { name: "Germany", slug: "germany", flag: "🇩🇪", pool: "Pool B" },
    { name: "Netherlands", slug: "netherlands", flag: "🇳🇱", pool: "Pool A" },
    { name: "Australia", slug: "australia", flag: "🇦🇺", pool: "Pool C" },
    { name: "England", slug: "england", flag: "🏴", pool: "Pool D" }, // Note: Flag is simplified for system compatibility
    { name: "Argentina", slug: "argentina", flag: "🇦🇷", pool: "Pool A" },
    { name: "Spain", slug: "spain", flag: "🇪🇸", pool: "Pool C" },
    { name: "Malaysia", slug: "malaysia", flag: "🇲🇾", pool: "Pool B" },
    { name: "France", slug: "france", flag: "🇫🇷", pool: "Pool B" },
    { name: "Ireland", slug: "ireland", flag: "🇮🇪", pool: "Pool C" },
    { name: "South Africa", slug: "south-africa", flag: "🇿🇦", pool: "Pool D" },
    { name: "New Zealand", slug: "new-zealand", flag: "🇳🇿", pool: "Pool A" },
    { name: "Chile", slug: "chile", flag: "🇨🇱", pool: "Pool A" },
    { name: "Wales", slug: "wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", pool: "Pool D" }
  ];

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
                  { "@type": "ListItem", "position": 2, "name": "Match Results", "item": "https://hockeyworldcup2026schedule.com/results" }
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
          <p className="hero-subtitle">📊 Live Scores, Summaries & Stats</p>
          <h1 className="hero-title">Hockey World Cup 2026 Team Results</h1>
          <p className="hero-description">
            Track match results, goal scorers, cards, and tournament standings for all 16 nations competing at the FIH Hockey World Cup 2026. Select a country to view their specific campaign tracking.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">Updated after every match</div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Results Tracker</span>
        </nav>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "var(--text-main)",
            marginBottom: "1.5rem",
            borderLeft: "4px solid var(--primary)",
            paddingLeft: "1rem"
          }}>
            Filter Results by Country
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {teamsList.map((team) => (
              <a
                key={team.slug}
                href={`/results/${team.slug}`}
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  transition: "transform 0.2s, border-color 0.2s"
                }}
                className="match-card"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontSize: "2rem" }}>{team.flag}</span>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-main)", margin: 0 }}>
                      {team.name}
                    </h3>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                      {team.pool}
                    </span>
                  </div>
                </div>
                <span style={{ color: "var(--primary)", fontWeight: "bold", fontSize: "1.2rem" }}>→</span>
              </a>
            ))}
          </div>
        </section>

        {/* FAQs SECTION */}
        <section className="my-16">
          <div className="section-title-wrap">
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions about match results, update frequency, and standings calculations.</p>
          </div>

          <FaqAccordion items={faqItems} />
        </section>
      </main>

      <Footer />
    </>
  );
}
