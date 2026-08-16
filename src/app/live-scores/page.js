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
    id: 205,
    match: "Belgium vs New Zealand",
    gender: "Women's Pool C (W7)",
    scoreA: 5,
    scoreB: 2,
    teamA: "Belgium",
    flagA: "be",
    teamB: "New Zealand",
    flagB: "nz",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "17:30 CEST (Local Time)",
    scorers: "Charlotte Englebert (08' FG, 41' PC), Stephanie Vanden Borre (19' PC, 54' PC), Michelle Struijk (33') | Hope Ralph (24' PC), Olivia Shannon (50' FG)",
    recapUrl: "/news/belgium-vs-new-zealand-result-score-august-16-hwc-2026"
  },
  {
    id: 204,
    match: "Netherlands vs New Zealand",
    gender: "Men's Pool A (M7)",
    scoreA: 5,
    scoreB: 1,
    teamA: "Netherlands",
    flagA: "nl",
    teamB: "New Zealand",
    flagB: "nz",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "16:00 CEST (Local Time)",
    scorers: "Thierry Brinkman (08', 48'), Jip Janssen (24' PC), Koen Bijen (33', 51') | Sam Lane (39' PC)",
    recapUrl: "/news/netherlands-vs-new-zealand-result-score-august-16-hwc-2026"
  },
  {
    id: 203,
    match: "Spain vs South Africa",
    gender: "Men's Pool C (M6)",
    scoreA: 3,
    scoreB: 1,
    teamA: "Spain",
    flagA: "es",
    teamB: "South Africa",
    flagB: "za",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "14:30 CEST (Local Time)",
    scorers: "Marc Miralles (14' PC), Pere Amat (41'), Xavier Gispert (52') | Bradley Sherwood (28' PC)",
    recapUrl: "/news/spain-vs-south-africa-result-score-august-16-hwc-2026"
  },
  {
    id: 202,
    match: "China vs India",
    gender: "Women's Pool D (W6)",
    scoreA: 2,
    scoreB: 2,
    teamA: "China",
    flagA: "cn",
    teamB: "India",
    flagB: "in",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "13:00 CEST (Local Time)",
    scorers: "Gu Bingfeng (18' PC, 48' PC) | Deepika (12' PC), Udita (41' PC)",
    recapUrl: "/news/china-vs-india-women-result-score-august-16-hwc-2026"
  },
  {
    id: 201,
    match: "Australia vs Ireland",
    gender: "Men's Pool C (M5)",
    scoreA: 3,
    scoreB: 1,
    teamA: "Australia",
    flagA: "au",
    teamB: "Ireland",
    flagB: "ie",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "11:30 CEST (Local Time)",
    scorers: "Joel Rintala (11' PC), Blake Govers (35' PC), Tim Brand (52') | Lee Cole (24' PC)",
    recapUrl: "/news/australia-vs-ireland-result-score-august-16-hwc-2026"
  },
  {
    id: 200,
    match: "England vs South Africa",
    gender: "Women's Pool D (W5)",
    scoreA: 4,
    scoreB: 0,
    teamA: "England",
    flagA: "gb-eng",
    teamB: "South Africa",
    flagB: "za",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "10:00 CEST (Local Time)",
    scorers: "Darcy Bourne (10' PC), Tessa Howard (14'), Elizabeth Neal (30' PC), Sophie Hamilton (41')",
    recapUrl: "/news/england-vs-south-africa-result-score-august-16-hwc-2026"
  },
  {
    id: 101,
    match: "England vs Pakistan",
    gender: "Men's Pool D (M3)",
    scoreA: 4,
    scoreB: 1,
    teamA: "England",
    flagA: "gb-eng",
    teamB: "Pakistan",
    flagB: "pk",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "19:00 CEST (Local Time)",
    scorers: "Stuart Rushmere (14'), Sam Ward (29' PC), Samuel Hooper (41' PC), James Albery (56') | Rehman Abdul Afraz (33')",
    recapUrl: "/news/england-vs-pakistan-result-score-august-15-hwc-2026"
  },
  {
    id: 102,
    match: "India vs Wales",
    gender: "Men's Pool D (M1)",
    scoreA: 3,
    scoreB: 1,
    teamA: "India",
    flagA: "in",
    teamB: "Wales",
    flagB: "gb-wls",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "13:00 CEST (Local Time)",
    scorers: "Sanjay (08' PC), Harmanpreet Singh (11' PC, 43' PC) | Sam Welsh (56')",
    recapUrl: "/news/india-vs-wales-result-score-august-15-hwc-2026"
  },
  {
    id: 103,
    match: "Belgium vs France",
    gender: "Men's Pool B (M4)",
    scoreA: 3,
    scoreB: 2,
    teamA: "Belgium",
    flagA: "be",
    teamB: "France",
    flagB: "fr",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "21:00 CEST (Local Time)",
    scorers: "Timothée Clément (03' FG), Nicolas de Kerpel (17' FG), François Curty (18' FG), Arno van Dessel (44' FG), Roman Duvekot (56' FG)",
    recapUrl: "/news/belgium-vs-france-result-score-august-15-hwc-2026"
  },
  {
    id: 104,
    match: "Germany vs Malaysia",
    gender: "Men's Pool B (M2)",
    scoreA: 5,
    scoreB: 1,
    teamA: "Germany",
    flagA: "de",
    teamB: "Malaysia",
    flagB: "my",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "14:30 CEST (Local Time)",
    scorers: "Jakob Brilla (03' PC), Christopher Rühr (04' FG), Justus Weigand (07' FG), Abu Kamal Azrai (39' PC), Justus Warweg (44' FG), Paul-Philipp Kaufmann (52' FG)",
    recapUrl: "/news/germany-vs-malaysia-result-score-august-15-hwc-2026"
  },
  {
    id: 105,
    match: "Netherlands vs Chile",
    gender: "Women's Pool A (W3)",
    scoreA: 2,
    scoreB: 0,
    teamA: "Netherlands",
    flagA: "nl",
    teamB: "Chile",
    flagB: "cl",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "16:00 CEST (Local Time)",
    scorers: "Felice Albers (19'), Yibbi Jansen (44' PC)",
    recapUrl: "/news/netherlands-vs-chile-women-result-score-august-15-hwc-2026"
  },
  {
    id: 106,
    match: "Germany vs Scotland",
    gender: "Women's Pool B (W2)",
    scoreA: 3,
    scoreB: 0,
    teamA: "Germany",
    flagA: "de",
    teamB: "Scotland",
    flagB: "gb-sct",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "11:30 CEST (Local Time)",
    scorers: "Charlotte Stapenhorst (06', 29'), Nike Lorenz (48' PC)",
    recapUrl: "/news/germany-vs-scotland-women-result-score-august-15-hwc-2026"
  },
  {
    id: 107,
    match: "Argentina vs USA",
    gender: "Women's Pool B (W4)",
    scoreA: 1,
    scoreB: 1,
    teamA: "Argentina",
    flagA: "ar",
    teamB: "United States",
    flagB: "us",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "17:30 CEST (Local Time)",
    scorers: "Agustina Bruggesser (14' PC) | Phia Deberdine (44' FG)",
    recapUrl: "/news/argentina-vs-usa-women-result-score-august-15-hwc-2026"
  },
  {
    id: 108,
    match: "Australia vs Japan",
    gender: "Women's Pool A (W1)",
    scoreA: 2,
    scoreB: 0,
    teamA: "Australia",
    flagA: "au",
    teamB: "Japan",
    flagB: "jp",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "10:00 CEST (Local Time)",
    scorers: "Claire Colwill (27' PC, 50' PC)",
    recapUrl: "/news/australia-vs-japan-women-result-score-august-15-hwc-2026"
  }
];

const UPCOMING_BLOCKBUSTER_MATCHES = [
  {
    title: "India vs England (Men's Pool D)",
    date: "Monday, August 17, 2026",
    time: "15:00 CEST (18:30 IST / 14:00 BST)",
    venue: "Wagener Stadium, Amstelveen",
    slug: "/matches/india-vs-england",
    teams: "IND vs ENG"
  },
  {
    title: "Germany vs Belgium (Men's Pool B)",
    date: "Monday, August 17, 2026",
    time: "20:30 CEST (00:00 IST / 14:30 EDT)",
    venue: "Belfius Hockey Arena, Wavre",
    slug: "/matches/germany-vs-belgium",
    teams: "GER vs BEL"
  },
  {
    title: "Netherlands vs Australia (Women's Pool A)",
    date: "Monday, August 17, 2026",
    time: "18:00 CEST (21:30 IST / 02:00 AEST)",
    venue: "Wagener Stadium, Amstelveen",
    slug: "/matches/netherlands-vs-australia-women",
    teams: "NED vs AUS"
  },
  {
    title: "India vs Pakistan (Men's Pool D Derby)",
    date: "Wednesday, August 19, 2026",
    time: "15:00 CEST (18:30 IST / 18:00 PKT)",
    venue: "Wagener Stadium, Amstelveen",
    slug: "/matches/india-vs-pakistan",
    teams: "IND vs PAK"
  },
  {
    title: "Australia vs Spain (Men's Pool C)",
    date: "Tuesday, August 18, 2026",
    time: "14:00 CEST (17:30 IST / 22:00 AEST)",
    venue: "Belfius Hockey Arena, Wavre",
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
      answer: "The blockbuster India vs Pakistan Pool D match will take place on August 19, 2026, at 15:00 CEST (18:30 IST in India / 18:00 PKT in Pakistan) at Wagener Stadium, Amstelveen."
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
      <LiveScoresClient initialCompleted={COMPLETED_MATCH_RESULTS} />

      {/* STATIC SSR TEXT & TOURNAMENT HUBS SECTION (FOR GOOGLEBOT INDEXING & SPECTATORS) */}
      <div className="live-scores-container pb-12">
        {/* UPCOMING BLOCKBUSTER MATCHES PREVIEW LINKS */}
        <section className="live-section-card" style={{ border: "1px solid #e2e8f0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem", borderBottom: "2px solid #0f172a", paddingBottom: "0.75rem" }}>
            <h2 style={{ fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: "900", color: "#0f172a", margin: 0, fontStyle: "normal" }}>
              🔥 Featured Blockbuster Match Centers &amp; Tactical Guides
            </h2>
            <a href="/schedule" style={{ color: "var(--primary)", fontWeight: "800", fontSize: "0.82rem", textDecoration: "none" }}>
              View Complete 100-Match Schedule →
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {UPCOMING_BLOCKBUSTER_MATCHES.map((m) => (
              <div key={m.slug} style={{ background: "#ffffff", borderRadius: "12px", padding: "1.1rem", border: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--primary)", fontWeight: "800", textTransform: "uppercase" }}>{m.teams}</span>
                <h3 style={{ fontSize: "0.98rem", fontWeight: "800", margin: "0.3rem 0 0.5rem 0", color: "#0f172a", fontStyle: "normal" }}>{m.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0 0 0.35rem 0" }}>🕒 {m.time}</p>
                <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0 0 0.75rem 0", overflow: "hidden", textOverflow: "ellipsis" }}>📍 {m.venue}</p>
                <a href={m.slug} style={{ display: "inline-block", background: "var(--primary)", color: "#ffffff", padding: "0.45rem 0.8rem", borderRadius: "6px", fontSize: "0.78rem", fontWeight: "700", textDecoration: "none" }}>
                  Match Preview &amp; Tactical Guide →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* TOURNAMENT NAVIGATION HUB */}
        <section className="live-section-card" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", color: "#ffffff" }}>
          <h3 style={{ fontSize: "clamp(1.1rem, 3vw, 1.25rem)", fontWeight: "800", marginBottom: "0.75rem", fontStyle: "normal" }}>
            🏆 Essential Tournament Hubs &amp; Quick Links
          </h3>
          <p style={{ fontSize: "0.86rem", color: "#94a3b8", marginBottom: "1.25rem" }}>
            Navigate all official Hockey World Cup 2026 data centers, pool rankings, team schedules, and streaming channels:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            <a href="/schedule" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0.5rem 0.9rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.82rem", fontWeight: "700" }}>
              📅 100-Match Fixtures &amp; PDF
            </a>
            <a href="/points-table" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0.5rem 0.9rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.82rem", fontWeight: "700" }}>
              📊 Points Table &amp; Standings
            </a>
            <a href="/hockey-world-cup-2026-groups" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0.5rem 0.9rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.82rem", fontWeight: "700" }}>
              🏆 All 16 Pool Groups
            </a>
            <a href="/past-results" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0.5rem 0.9rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.82rem", fontWeight: "700" }}>
              📜 Historical Results &amp; Champions
            </a>
            <a href="/hockey-live-streaming" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0.5rem 0.9rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.82rem", fontWeight: "700" }}>
              📺 TV &amp; Live Streaming Guide
            </a>
          </div>
        </section>

        {/* FAQs Section */}
        <section style={{ margin: "2.5rem 0 1rem 0" }}>
          <div className="section-title-wrap">
            <h2 style={{ fontSize: "clamp(1.4rem, 4vw, 2.2rem)", fontStyle: "normal" }}>Frequently Asked Questions (Live Scores &amp; Results)</h2>
            <p style={{ fontSize: "clamp(0.85rem, 2.5vw, 1.05rem)" }}>Direct answers regarding matchday timelines, goal logs, and scoreboard synchronization.</p>
          </div>
          <FaqAccordion items={faqItems} />
        </section>
      </div>

      <Footer />
    </>
  );
}
