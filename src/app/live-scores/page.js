import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import LiveScoresClient from "./LiveScoresClient";

export const metadata = {
  title: "Hockey World Cup 2026 Live Scores: Real-Time Match Updates & Results",
  description: "Follow FIH Hockey World Cup 2026 live scores in real-time. Get instant match results, goal scorers, penalty corners, starting lineups, and pool standings.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/live-scores",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Live Scores: Real-Time Match Updates & Results",
    description: "Follow FIH Hockey World Cup 2026 live scores in real-time. Get instant match results, goal scorers, penalty corners, starting lineups, and pool standings.",
    url: "https://hockeyworldcup2026schedule.com/live-scores",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Live Scores & Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Live Scores: Real-Time Match Updates & Results",
    description: "Follow FIH Hockey World Cup 2026 live scores in real-time. Get instant match results, goal scorers, penalty corners, starting lineups, and pool standings.",
    images: ["/og-image.jpg"],
  },
};

const COMPLETED_MATCH_RESULTS = [
  {
    id: 1,
    match: "England vs Pakistan",
    gender: "Men's Pool D",
    scoreA: 4,
    scoreB: 1,
    teamA: "England",
    flagA: "gb-eng",
    teamB: "Pakistan",
    flagB: "pk",
    venue: "Wagener Stadium, Amstelveen",
    scorers: "Liam Ansell (14' PC), Phil Roper (39'), Sam Ward (47' PC), Nicholas Bandurak (54') | Muhammad Shahbaz Jr. (28')",
    previewUrl: "/matches/england-vs-pakistan",
    recapUrl: "/news/england-vs-pakistan-result-score-august-15-hwc-2026"
  },
  {
    id: 2,
    match: "India vs Wales",
    gender: "Men's Pool D",
    scoreA: 3,
    scoreB: 1,
    teamA: "India",
    flagA: "in",
    teamB: "Wales",
    flagB: "gb-wls",
    venue: "Wagener Stadium, Amstelveen",
    scorers: "Harmanpreet Singh (12' PC, 34' PC), Abhishek (22') | Gareth Furlong (28' PC)",
    previewUrl: "/matches/india-vs-wales",
    recapUrl: "/news/india-vs-wales-result-score-august-15-hwc-2026"
  },
  {
    id: 3,
    match: "Belgium vs France",
    gender: "Men's Pool B",
    scoreA: 3,
    scoreB: 1,
    teamA: "Belgium",
    flagA: "be",
    teamB: "France",
    flagB: "fr",
    venue: "Belfius Hockey Arena, Wavre",
    scorers: "Alexander Hendrickx (09' PC), Florent van Aubel (16'), Tom Boon (53' PC) | Timothée Clément (44' PC)",
    previewUrl: "/matches/belgium-vs-france",
    recapUrl: "/news/belgium-vs-france-result-score-august-15-hwc-2026"
  },
  {
    id: 4,
    match: "Germany vs Malaysia",
    gender: "Men's Pool B",
    scoreA: 3,
    scoreB: 1,
    teamA: "Germany",
    flagA: "de",
    teamB: "Malaysia",
    flagB: "my",
    venue: "Belfius Hockey Arena, Wavre",
    scorers: "Gonzalo Peillat (08' PC, 41' PC), Mats Grambusch (29') | Faizal Saari (38')",
    previewUrl: "/matches/germany-vs-belgium",
    recapUrl: "/news/germany-vs-malaysia-result-score-august-15-hwc-2026"
  },
  {
    id: 5,
    match: "Netherlands vs Chile",
    gender: "Women's Pool A",
    scoreA: 5,
    scoreB: 0,
    teamA: "Netherlands",
    flagA: "nl",
    teamB: "Chile",
    flagB: "cl",
    venue: "Wagener Stadium, Amstelveen",
    scorers: "Felice Albers (04', 19'), Yibbi Jansen (11' PC), Frederique Matla (33', 48')",
    previewUrl: "/matches/netherlands-vs-australia-women",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  },
  {
    id: 6,
    match: "Argentina vs USA",
    gender: "Women's Pool B",
    scoreA: 3,
    scoreB: 1,
    teamA: "Argentina",
    flagA: "ar",
    teamB: "United States",
    flagB: "us",
    venue: "Belfius Hockey Arena, Wavre",
    scorers: "Agustina Gorzelany (14' PC, 52' PC), Julieta Jankunas (27') | Ashley Sessa (44')",
    previewUrl: "/matches/australia-vs-argentina",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  }
];

const UPCOMING_BLOCKBUSTER_MATCHES = [
  {
    title: "India vs Pakistan (Men's Pool D)",
    date: "Wednesday, August 19, 2026",
    time: "14:00 CET (17:30 IST / 17:00 PST)",
    venue: "Wagener Stadium, Amstelveen",
    slug: "/matches/india-vs-pakistan",
    teams: "IND vs PAK"
  },
  {
    title: "Germany vs Belgium (Men's Pool B)",
    date: "Monday, August 17, 2026",
    time: "17:30 CET (21:00 IST / 11:30 AM EDT)",
    venue: "Belfius Hockey Arena, Wavre",
    slug: "/matches/germany-vs-belgium",
    teams: "GER vs BEL"
  },
  {
    title: "Netherlands vs Australia (Women's Pool A)",
    date: "Tuesday, August 18, 2026",
    time: "19:30 CET (23:00 IST / 03:30 AEST)",
    venue: "Wagener Stadium, Amstelveen",
    slug: "/matches/netherlands-vs-australia-women",
    teams: "NED vs AUS"
  },
  {
    title: "Australia vs Spain (Men's Pool C)",
    date: "Tuesday, August 18, 2026",
    time: "16:00 CET (19:30 IST / 00:00 AEST)",
    venue: "Wagener Stadium, Amstelveen",
    slug: "/matches/australia-vs-spain",
    teams: "AUS vs ESP"
  }
];

export default function LiveScoresPage() {
  const faqItems = [
    {
      question: "How to check real-time Hockey World Cup 2026 live scores?",
      answer: "Our live match centre updates every 30 seconds with official tournament logs, including real-time goal notifications, yellow/green cards, video referrals, penalty corners, and quarter timelines."
    },
    {
      question: "Where can I find full match results and goal scorers?",
      answer: "All completed match results with exact goal times, penalty corner conversion metrics, and detailed match analysis reports are listed on this live scores hub and our dedicated Past Results page."
    },
    {
      question: "What time is India vs Pakistan hockey clash at HWC 2026?",
      answer: "The blockbuster India vs Pakistan Pool D match will take place on August 19, 2026, at 14:00 CET (17:30 IST in India / 17:00 PST in Pakistan) at Wagener Stadium, Amstelveen."
    },
    {
      question: "How do live match scores affect the tournament Points Table?",
      answer: "Each regulation victory awards 3 points to the winner, while drawn games grant 1 point to each nation. Real-time standings update instantaneously on our Points Table page after each quarter."
    }
  ];

  return (
    <>
      <Header />

      {/* JSON-LD Schema */}
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
                  { "@type": "ListItem", "position": 2, "name": "Live Scores", "item": "https://hockeyworldcup2026schedule.com/live-scores" }
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

      {/* Real-Time Client Component with Live WebSockets/Polling Tracker */}
      <LiveScoresClient />

      {/* STATIC SSR TEXT & TOURNAMENT HUBS SECTION (FOR GOOGLEBOT INDEXING & SPECTATORS) */}
      <div className="sports-container pb-16">
        {/* UPCOMING BLOCKBUSTER MATCHES PREVIEW LINKS */}
        <section style={{ background: "#ffffff", borderRadius: "16px", padding: "2rem", border: "1px solid #e2e8f0", marginBottom: "3.5rem", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem", borderBottom: "2px solid #0f172a", paddingBottom: "0.75rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: "900", color: "#0f172a", margin: 0 }}>
              🔥 Featured Blockbuster Match Centers & Tactical Guides
            </h2>
            <a href="/schedule" style={{ color: "var(--primary)", fontWeight: "800", fontSize: "0.85rem", textDecoration: "none" }}>
              View Complete 100-Match Schedule →
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" }}>
            {UPCOMING_BLOCKBUSTER_MATCHES.map((m) => (
              <div key={m.slug} style={{ background: "#ffffff", borderRadius: "12px", padding: "1.2rem", border: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: "800", textTransform: "uppercase" }}>{m.teams}</span>
                <h3 style={{ fontSize: "1rem", fontWeight: "800", margin: "0.3rem 0 0.5rem 0", color: "#0f172a" }}>{m.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#64748b", margin: "0 0 0.4rem 0" }}>🕒 {m.time}</p>
                <p style={{ fontSize: "0.82rem", color: "#64748b", margin: "0 0 0.8rem 0" }}>📍 {m.venue}</p>
                <a href={m.slug} style={{ display: "inline-block", background: "var(--primary)", color: "#ffffff", padding: "0.4rem 0.8rem", borderRadius: "6px", fontSize: "0.8rem", fontWeight: "700", textDecoration: "none" }}>
                  Match Preview & Tactical Guide →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* TOURNAMENT NAVIGATION HUB */}
        <section className="my-12" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", borderRadius: "16px", padding: "2rem", color: "#ffffff" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", marginBottom: "0.8rem" }}>
            🏆 Essential Tournament Hubs & Quick Links
          </h3>
          <p style={{ fontSize: "0.88rem", color: "#94a3b8", marginBottom: "1.5rem" }}>
            Navigate all official Hockey World Cup 2026 data centers, pool rankings, team schedules, and streaming channels:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            <a href="/schedule" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0.6rem 1.1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "700" }}>
              📅 100-Match Fixtures & PDF
            </a>
            <a href="/points-table" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0.6rem 1.1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "700" }}>
              📊 Points Table & Standings
            </a>
            <a href="/hockey-world-cup-2026-groups" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0.6rem 1.1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "700" }}>
              🏆 All 16 Pool Groups
            </a>
            <a href="/past-results" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0.6rem 1.1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "700" }}>
              📜 Historical Results & Champions
            </a>
            <a href="/hockey-live-streaming" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0.6rem 1.1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "700" }}>
              📺 TV & Live Streaming Guide
            </a>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="my-16">
          <div className="section-title-wrap">
            <h2>Frequently Asked Questions (Live Scores & Results)</h2>
            <p>Direct answers regarding matchday timelines, goal logs, and scoreboard synchronization.</p>
          </div>
          <FaqAccordion items={faqItems} />
        </section>
      </div>

      <Footer />
    </>
  );
}
