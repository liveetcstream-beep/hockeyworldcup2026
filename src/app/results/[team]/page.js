import React from "react";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";

const BASE = "https://hockeyworldcup2026schedule.com";

// ─── Team Results Data ───────────────────────────────────────
const teamsData = {
  india: {
    name: "India", flag: "🇮🇳", pool: "Pool D",
    coach: "Craig Fulton", ranking: 5,
    metaTitle: "India Hockey World Cup 2026 Results — All Match Scores & Goal Scorers",
    metaDesc: "Complete India results at Hockey World Cup 2026. All Pool D match scores, goal scorers, match statistics and knockout stage progress. Updated after each match.",
    poolOpponents: ["Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿", "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Pakistan 🇵🇰"],
    results: [
      { date: "Aug 15", opponent: "Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿", score: "TBD", status: "upcoming", scorers: [] },
      { date: "Aug 17", opponent: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "TBD", status: "upcoming", scorers: [] },
      { date: "Aug 19", opponent: "Pakistan 🇵🇰", score: "TBD", status: "upcoming", scorers: [] },
    ],
    form: [],
    keyPlayers: [
      { name: "Harmanpreet Singh", role: "Captain / Drag-Flicker", slug: "harmanpreet-singh" },
      { name: "Hardik Singh", role: "Vice-Captain / Midfielder", slug: "hardik-singh" },
      { name: "Mandeep Singh", role: "Forward", slug: "mandeep-singh" },
    ],
    editorial: `India enters the Hockey World Cup 2026 as one of the tournament's most watched teams — not just because of their FIH World No. 5 ranking, but because of the billions of fans across South Asia who will be watching every match with intense anticipation. Under coach Craig Fulton, India has built one of their most balanced squads in a decade — strong in defence, dynamic in midfield, and clinical in attack through Harmanpreet Singh's penalty corners.\n\nPool D is India's gateway to the Quarter-Finals. The group contains Pakistan (arch-rivals, equal intensity), England (organised and physical), and Wales (determined underdogs playing with freedom). India needs a minimum of two wins to comfortably secure a top-two finish and direct Quarter-Final qualification.\n\nThis results page will be updated in real time after each India match — goal scorers, match statistics, and post-match analysis will be added within minutes of the final whistle.`,
    faqs: [
      { q: "What are India's results at Hockey World Cup 2026?", a: "India's pool stage results will be updated here in real time. India plays Wales (Aug 15), England (Aug 17), and Pakistan (Aug 19) in Pool D at Wagener Stadium, Amstelveen." },
      { q: "Did India qualify for the Quarter-Finals at Hockey World Cup 2026?", a: "Quarter-Final qualification updates will be added after India's Pool D group stage matches are completed. Check our live scores page for real-time updates." },
      { q: "Who are India's goal scorers at Hockey World Cup 2026?", a: "Goal scorer lists will be updated after each match. Harmanpreet Singh (drag-flicks), Mandeep Singh (open play), and Hardik Singh (midfield runs) are India's primary scoring threats." },
      { q: "Where can I watch India's results live?", a: "Watch India matches live on Star Sports and Disney+ Hotstar. Visit our live scores page for real-time updates." },
      { q: "What is India's head-to-head record against Pakistan at World Cups?", a: "India and Pakistan have played multiple World Cup encounters. See our dedicated Head-to-Head page for the full historical record." }
    ],
    internalLinks: [
      { text: "India Schedule 2026", href: "/hockey-world-cup-2026-schedule-india" },
      { text: "Pool D Standings", href: "/pool-d" },
      { text: "India vs Pakistan Preview", href: "/matches/india-vs-pakistan" },
      { text: "India vs England Preview", href: "/matches/india-vs-england" },
      { text: "Harmanpreet Singh Profile", href: "/players/harmanpreet-singh" },
      { text: "Live Scores", href: "/live-scores" },
      { text: "Points Table", href: "/points-table" }
    ]
  },
  pakistan: {
    name: "Pakistan", flag: "🇵🇰", pool: "Pool D",
    coach: "Siegfried Aikman", ranking: 17,
    metaTitle: "Pakistan Hockey World Cup 2026 Results — All Match Scores & Scorers",
    metaDesc: "Pakistan's full results at Hockey World Cup 2026. Pool D match scores, goal scorers, and knockout stage qualification status. Updated after each match.",
    poolOpponents: ["Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿", "India 🇮🇳", "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿"],
    results: [
      { date: "Aug 16", opponent: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "TBD", status: "upcoming", scorers: [] },
      { date: "Aug 19", opponent: "India 🇮🇳", score: "TBD", status: "upcoming", scorers: [] },
      { date: "Aug 21", opponent: "Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿", score: "TBD", status: "upcoming", scorers: [] },
    ],
    form: [],
    keyPlayers: [
      { name: "Muhammad Rizwan Sr.", role: "Goalkeeper", slug: "muhammad-rizwan-sr" },
      { name: "Shahnaz Ahmed", role: "Forward / Drag-Flicker", slug: "shahnaz-ahmed" },
    ],
    editorial: `Pakistan's Hockey World Cup 2026 campaign carries the weight of a nation that was once the greatest hockey team in the world — four-time World Cup champions, 13-time Olympic participants, and the team that produced Sohail Abbas, arguably the greatest drag-flicker of all time. The challenge for coach Siegfried Aikman is restoring that pride in a Pool D that includes India, England, and Wales.\n\nPakistan's results at this World Cup will define the trajectory of Pakistani hockey for the next Olympic cycle. A Quarter-Final qualification would be a significant achievement given their current FIH ranking of 17. The India vs Pakistan match on August 19 is, as always, the match that will define how the nation views the entire tournament.`,
    faqs: [
      { q: "What are Pakistan's results at Hockey World Cup 2026?", a: "Pakistan's match results will be updated here after each game. They play England (Aug 16), India (Aug 19), and Wales (Aug 21) in Pool D." },
      { q: "Can Pakistan qualify for the Quarter-Finals at Hockey World Cup 2026?", a: "Yes — Pakistan needs to finish in the top two of Pool D. Winning at least two matches (against England and Wales) while competing strongly against India gives them realistic qualification chances." },
      { q: "When is Pakistan vs India at Hockey World Cup 2026?", a: "Pakistan vs India is on August 19, 2026 at 16:00 CEST (19:30 IST) at Wagener Stadium, Amstelveen." },
      { q: "Where can I watch Pakistan matches live?", a: "Watch Pakistan matches on PTV Sports and Ten Sports in Pakistan. Star Sports broadcasts in India. BT Sport in the UK." },
      { q: "Who is Pakistan's coach at Hockey World Cup 2026?", a: "Pakistan is coached by Siegfried Aikman, a Dutch coach who has brought European tactical discipline to the Pakistan national setup." }
    ],
    internalLinks: [
      { text: "Pakistan Schedule 2026", href: "/hockey-world-cup-2026-schedule-pakistan" },
      { text: "Pool D Standings", href: "/pool-d" },
      { text: "India vs Pakistan Preview", href: "/matches/india-vs-pakistan" },
      { text: "England vs Pakistan Preview", href: "/matches/england-vs-pakistan" },
      { text: "Muhammad Rizwan Profile", href: "/players/muhammad-rizwan-sr" },
      { text: "Live Scores", href: "/live-scores" }
    ]
  },
  belgium: {
    name: "Belgium", flag: "🇧🇪", pool: "Pool B",
    coach: "Michel Van den Heuvel", ranking: 3,
    metaTitle: "Belgium Hockey World Cup 2026 Results — All Match Scores on Home Turf",
    metaDesc: "Belgium's complete results at Hockey World Cup 2026 on home turf at Belfius Arena, Wavre. Pool B match scores, goal scorers and knockout progress. Updated live.",
    poolOpponents: ["Germany 🇩🇪", "France 🇫🇷", "Malaysia 🇲🇾"],
    results: [
      { date: "Aug 15", opponent: "Malaysia 🇲🇾", score: "TBD", status: "upcoming", scorers: [] },
      { date: "Aug 19", opponent: "Germany 🇩🇪", score: "TBD", status: "upcoming", scorers: [] },
      { date: "Aug 21", opponent: "France 🇫🇷", score: "TBD", status: "upcoming", scorers: [] },
    ],
    form: [],
    keyPlayers: [
      { name: "Arthur Van Doren", role: "Defender / Libero", slug: "arthur-van-doren" },
    ],
    editorial: `Belgium is the defending co-champion at the Hockey World Cup 2026 — and they are playing on home soil at Belfius Hockey Arena in Wavre. The combination of a world-class squad (led by three-time World Player of the Year Arthur Van Doren) and a home crowd of 8,000 passionate Belgian fans makes Belgium one of the two hottest favourites for the title alongside the Netherlands.\n\nCoach Michel Van den Heuvel has maintained the Red Lions' defensive solidity (the tightest defence in Europe during the 2025-26 Pro League) while developing a more fluid attacking structure that allows forwards like Alexander Stadler to receive balls in deeper positions. Belgium's Pool B campaign begins on August 15 against Malaysia — a match they are expected to win comfortably — before the blockbuster Germany clash on August 19.`,
    faqs: [
      { q: "What are Belgium's results at Hockey World Cup 2026?", a: "Belgium's Pool B results will be updated here after each match. They play Malaysia (Aug 15), Germany (Aug 19), and France (Aug 21) at Belfius Hockey Arena, Wavre." },
      { q: "Is Belgium playing at home at Hockey World Cup 2026?", a: "Yes. Belgium's Pool B matches are at the Belfius Hockey Arena in Wavre — essentially a home ground. Belgium is co-hosting the 2026 World Cup." },
      { q: "Did Belgium win the Hockey World Cup recently?", a: "Yes — Belgium won the Hockey World Cup 2023 in Bhubaneswar/Rourkela. They are the defending champions." },
      { q: "Who is Belgium's best player at the 2026 World Cup?", a: "Arthur Van Doren — three-time FIH World Player of the Year and Belgium's sweeper-libero — is widely considered their most important player." },
      { q: "When is Belgium vs Germany at Hockey World Cup 2026?", a: "Belgium vs Germany is on August 19, 2026 at 14:00 CEST (17:30 IST) at Belfius Hockey Arena, Wavre." }
    ],
    internalLinks: [
      { text: "Belgium Schedule 2026", href: "/hockey-world-cup-2026-schedule-belgium" },
      { text: "Pool B Standings", href: "/pool-b" },
      { text: "Germany vs Belgium Preview", href: "/matches/germany-vs-belgium" },
      { text: "Belgium vs France Preview", href: "/matches/belgium-vs-france" },
      { text: "Arthur Van Doren Profile", href: "/players/arthur-van-doren" },
      { text: "Belfius Arena Guide", href: "/venues/belfius-arena-guide" },
      { text: "Live Scores", href: "/live-scores" }
    ]
  },
};

// Remaining teams with minimal data
const remainingTeams = ["netherlands", "germany", "australia", "argentina", "england", "spain", "france", "malaysia", "ireland", "wales", "south-africa", "new-zealand", "chile"];
const teamDefaults = {
  netherlands: { name: "Netherlands", flag: "🇳🇱", pool: "Pool A", coach: "Jeroen Delmee", ranking: 1 },
  germany: { name: "Germany", flag: "🇩🇪", pool: "Pool B", coach: "André Henning", ranking: 4 },
  australia: { name: "Australia", flag: "🇦🇺", pool: "Pool C", coach: "Roelant Oltmans", ranking: 2 },
  argentina: { name: "Argentina", flag: "🇦🇷", pool: "Pool A", coach: "Julio Rearte", ranking: 8 },
  england: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", pool: "Pool D", coach: "Mark Hager", ranking: 7 },
  spain: { name: "Spain", flag: "🇪🇸", pool: "Pool A", coach: "Max Caldas", ranking: 10 },
  france: { name: "France", flag: "🇫🇷", pool: "Pool B", coach: "Jeroen Delmee", ranking: 11 },
  malaysia: { name: "Malaysia", flag: "🇲🇾", pool: "Pool B", coach: "Dato Rosman Jalil", ranking: 12 },
  ireland: { name: "Ireland", flag: "🇮🇪", pool: "Pool C", coach: "Mark Tumilty", ranking: 9 },
  wales: { name: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", pool: "Pool D", coach: "James Fair", ranking: 18 },
  "south-africa": { name: "South Africa", flag: "🇿🇦", pool: "Pool A", coach: "David Passmore", ranking: 16 },
  "new-zealand": { name: "New Zealand", flag: "🇳🇿", pool: "Pool C", coach: "Greg Nicol", ranking: 13 },
  chile: { name: "Chile", flag: "🇨🇱", pool: "Pool C", coach: "Hugo Müller", ranking: 22 },
};

function getAllTeams() {
  const all = { ...teamsData };
  remainingTeams.forEach((slug) => {
    if (!all[slug]) {
      const td = teamDefaults[slug];
      all[slug] = {
        ...td,
        metaTitle: `${td.name} Hockey World Cup 2026 Results — All Match Scores`,
        metaDesc: `${td.name}'s complete results at Hockey World Cup 2026. ${td.pool} match scores, goal scorers and qualification status. Updated after each match.`,
        poolOpponents: [],
        results: [],
        form: [],
        keyPlayers: [],
        editorial: `${td.name} competes in ${td.pool} at the Hockey World Cup 2026. This page tracks all their match results, goal scorers, and qualification progress in real time throughout the tournament. Bookmark this page and return after each match for the latest updates.`,
        faqs: [
          { q: `What are ${td.name}'s results at Hockey World Cup 2026?`, a: `${td.name}'s match results are tracked on this page and updated after each game. They compete in ${td.pool}.` },
          { q: `Where can I watch ${td.name} matches live?`, a: `Check our hockey live streaming guide for all broadcast channels and streaming options for ${td.name} matches.` },
        ],
        internalLinks: [
          { text: `${td.name} Schedule 2026`, href: `/hockey-world-cup-2026-schedule-${slug.replace("-", "-")}` },
          { text: "Live Scores", href: "/live-scores" },
          { text: "Points Table", href: "/points-table" },
        ]
      };
    }
  });
  return all;
}

export async function generateStaticParams() {
  return Object.keys({ ...teamsData, ...teamDefaults }).map((team) => ({ team }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const all = getAllTeams();
  const t = all[resolvedParams.team];
  if (!t) return { title: "Team Not Found" };
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical: `${BASE}/results/${resolvedParams.team}` },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDesc,
      url: `${BASE}/results/${resolvedParams.team}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: t.metaTitle }],
    },
  };
}

export default async function TeamResultsPage({ params }) {
  const resolvedParams = await params;
  const all = getAllTeams();
  const t = all[resolvedParams.team];
  if (!t) return notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Results", item: `${BASE}/results` },
      { "@type": "ListItem", position: 3, name: t.name, item: `${BASE}/results/${resolvedParams.team}` },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (t.faqs || []).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const statusStyle = {
    win: { bg: "rgba(34,197,94,0.15)", color: "#16a34a", text: "W" },
    loss: { bg: "rgba(239,68,68,0.15)", color: "#dc2626", text: "L" },
    draw: { bg: "rgba(251,191,36,0.15)", color: "#d97706", text: "D" },
    upcoming: { bg: "rgba(100,116,139,0.15)", color: "#64748b", text: "TBD" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      {/* Hero */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏆 {t.pool} · HWC 2026 Results Tracker</p>
          <h1 className="hero-title">{t.flag} {t.name} — Hockey World Cup 2026 Results</h1>
          <p className="hero-description">
            All {t.name} match results at the FIH Hockey World Cup 2026 — goal scorers, match statistics, form guide, and knockout stage progress. Updated after every match.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">FIH World Ranking: <strong>No. {t.ranking}</strong></div>
            <div className="eeat-badge">Coach: <strong>{t.coach}</strong></div>
            <div className="eeat-badge">Pool: <strong>{t.pool}</strong></div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <a href="/results" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Results</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <span style={{ color: "var(--text-main)", fontWeight: 600 }}>{t.name}</span>
        </nav>

        <div className="p-seo-layout">
          <div>
            {/* Results Table */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
                {t.name} Match Results — {t.pool}
              </h2>

              {t.results.length > 0 ? (
                <div style={{ overflowX: "auto", width: "100%", border: "1px solid var(--border-color)", borderRadius: "16px" }}>
                  <div style={{ minWidth: "480px", background: "var(--bg-secondary)" }}>
                    {/* Table Header */}
                    <div style={{
                      display: "grid", gridTemplateColumns: "80px 1fr 120px 60px",
                      background: "var(--bg-tertiary)", padding: "0.8rem 1.2rem",
                      fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--text-muted)",
                    }}>
                      <span>Date</span><span>Opponent</span><span>Score</span><span>Result</span>
                    </div>
                    {t.results.map((r, i) => {
                      const st = statusStyle[r.status] || statusStyle.upcoming;
                      return (
                        <div key={i} style={{
                          display: "grid", gridTemplateColumns: "80px 1fr 120px 60px",
                          padding: "1rem 1.2rem", alignItems: "center",
                          borderTop: i > 0 ? "1px solid var(--border-color)" : "none",
                        }}>
                          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>{r.date}</span>
                          <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)" }}>{r.opponent}</span>
                          <span style={{ fontSize: "1.1rem", fontWeight: 900, color: r.status === "upcoming" ? "var(--text-muted)" : "var(--text-main)" }}>
                            {r.score}
                          </span>
                          <span style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            width: "36px", height: "36px", borderRadius: "50%",
                            background: st.bg, color: st.color, fontWeight: 900, fontSize: "0.85rem",
                          }}>{st.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div style={{
                  background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
                  borderRadius: "14px", padding: "2rem", textAlign: "center", color: "var(--text-muted)",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⏳</div>
                  <p style={{ fontWeight: 600 }}>Results will appear here after each match. Bookmark this page!</p>
                  <a href="/live-scores" style={{ display: "inline-block", marginTop: "1rem", padding: "0.6rem 1.2rem", background: "var(--primary)", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
                    🔴 Live Score Tracker →
                  </a>
                </div>
              )}
            </section>

            {/* Editorial */}
            <section style={{
              background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
              borderRadius: "16px", padding: "2rem", marginBottom: "2.5rem",
            }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
                {t.name}&apos;s Hockey World Cup 2026 — Campaign Analysis
              </h2>
              <div style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--text-muted)" }}
                dangerouslySetInnerHTML={{ __html: t.editorial?.replace(/\n\n/g, "<br/><br/>") ?? "" }} />
            </section>

            {/* Key Players */}
            {t.keyPlayers?.length > 0 && (
              <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
                  Key Players to Watch
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  {t.keyPlayers.map((kp) => (
                    <a key={kp.slug} href={`/players/${kp.slug}`} style={{
                      flex: "1 1 200px",
                      display: "flex", alignItems: "center", gap: "0.8rem",
                      background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
                      borderRadius: "12px", padding: "1rem",
                      textDecoration: "none",
                    }}>
                      <div style={{ fontSize: "2rem" }}>{t.flag}</div>
                      <div>
                        <div style={{ fontWeight: 800, color: "var(--text-main)", fontSize: "0.95rem" }}>{kp.name}</div>
                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{kp.role}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: "100px" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem", marginBottom: "1.2rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "1rem" }}>
                Team Info
              </h3>
              {[
                { label: "Nation", value: `${t.flag} ${t.name}` },
                { label: "Pool", value: t.pool },
                { label: "FIH Ranking", value: `World No. ${t.ranking}` },
                { label: "Coach", value: t.coach },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid var(--border-color)", fontSize: "0.88rem" }}>
                  <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>{row.label}</span>
                  <span style={{ color: "var(--text-main)", fontWeight: 700 }}>{row.value}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px", padding: "1.2rem", marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "0.8rem" }}>Related Pages</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {t.internalLinks?.map((link) => (
                  <a key={link.href} href={link.href} style={{
                    padding: "0.55rem 0.9rem", background: "var(--bg-tertiary)",
                    borderRadius: "8px", color: "var(--text-main)",
                    textDecoration: "none", fontSize: "0.85rem", fontWeight: 600,
                  }}>→ {link.text}</a>
                ))}
              </div>
            </div>

            <a href="/live-scores" style={{
              display: "block", background: "linear-gradient(135deg, #c00030, #8b0020)",
              color: "#fff", textDecoration: "none", padding: "1rem",
              borderRadius: "12px", textAlign: "center", fontWeight: 800, fontSize: "0.9rem",
              boxShadow: "0 4px 20px rgba(192,0,48,0.3)",
            }}>
              🔴 Live Score Tracker →
            </a>
          </aside>
        </div>

        {/* FAQs */}
        {t.faqs?.length > 0 && (
          <section style={{ marginBottom: "2rem", marginTop: "3rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
              Frequently Asked Questions
            </h2>
            <FaqAccordion items={t.faqs} />
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
