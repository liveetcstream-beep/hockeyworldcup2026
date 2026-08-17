import React from "react";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TeamResultsClient from "./TeamResultsClient";

const BASE = "https://hockeyworldcup2026schedule.com";

// ─── Complete Teams Results Data (16 Qualified Nations) ──────
const teamsData = {
  india: {
    name: "India", flag: "🇮🇳", pool: "Pool D", coach: "Craig Fulton", ranking: 5,
    metaTitle: "India Hockey World Cup 2026 Results — All Match Scores & Goal Scorers",
    metaDesc: "Complete India results at Hockey World Cup 2026. All Pool D match scores, goal scorers, match statistics and knockout stage progress. Updated after...",
    results: [
      { date: "Aug 15, 2026", opponent: "Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿", score: "3 – 1", status: "FT", scorers: ["Harmanpreet Singh 08' PC, 42' PS", "Mandeep Singh 24' FG"] },
      { date: "Aug 17, 2026", opponent: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "vs", status: "upcoming", scorers: [] },
      { date: "Aug 19, 2026", opponent: "Pakistan 🇵🇰", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `India opened their Hockey World Cup 2026 Pool D campaign with a commanding 3-1 victory over Wales at Wagener Stadium, Amstelveen (1182 AM). Captain Harmanpreet Singh converted a penalty corner in the 8th minute and a penalty stroke in the 42nd minute, while Mandeep Singh added a field goal in the 24th minute.\n\nUnder head coach Craig Fulton, India's tactical discipline in defence and rapid midfield transitions were key highlights. Real-time scores and goal logs update automatically every 10 seconds.`,
    faqs: [
      { q: "What are India's results at Hockey World Cup 2026?", a: "India won 3-1 against Wales on August 15 at Wagener Stadium, Amstelveen (1182 AM). Upcoming matches: England (Aug 17) and Pakistan (Aug 19)." },
      { q: "Who scored for India vs Wales?", a: "Harmanpreet Singh (08' PC, 42' PS) and Mandeep Singh (24' FG) scored for India." }
    ],
    internalLinks: [
      { text: "India Schedule 2026", href: "/hockey-world-cup-2026-schedule-india" },
      { text: "Pool D Standings", href: "/pool-d" },
      { text: "India vs Pakistan Preview", href: "/matches/india-vs-pakistan" },
      { text: "Harmanpreet Singh Profile", href: "/players/harmanpreet-singh" }
    ]
  },

  pakistan: {
    name: "Pakistan", flag: "🇵🇰", pool: "Pool D", coach: "Siegfried Aikman", ranking: 17,
    metaTitle: "Pakistan Hockey World Cup 2026 Results — All Match Scores & Scorers",
    metaDesc: "Pakistan's match results at Hockey World Cup 2026. Pool D match scores, goal scorers, and knockout stage qualification status.",
    results: [
      { date: "Aug 15, 2026", opponent: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "1 – 4", status: "FT", scorers: ["Shahnaz Ahmed 49' FG"] },
      { date: "Aug 17, 2026", opponent: "Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿", score: "vs", status: "upcoming", scorers: [] },
      { date: "Aug 19, 2026", opponent: "India 🇮🇳", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `Four-time World Champions Pakistan played their opening Pool D match against England at Wagener Stadium, Amstelveen (1182 AM). Forward Shahnaz Ahmed pulled one back with a 49th-minute field goal. Pakistan faces Wales next on August 17 before the marquee India encounter on August 19.`,
    faqs: [
      { q: "What are Pakistan's results at Hockey World Cup 2026?", a: "Pakistan lost 1-4 to England on August 15. Next matches: Wales (Aug 17) and India (Aug 19)." }
    ],
    internalLinks: [
      { text: "Pakistan Schedule 2026", href: "/hockey-world-cup-2026-schedule-pakistan" },
      { text: "India vs Pakistan Preview", href: "/matches/india-vs-pakistan" }
    ]
  },

  belgium: {
    name: "Belgium", flag: "🇧🇪", pool: "Pool B", coach: "Michel Van den Heuvel", ranking: 3,
    metaTitle: "Belgium Hockey World Cup 2026 Results — All Match Scores on Home Turf",
    metaDesc: "Belgium's complete results at Hockey World Cup 2026 at Belfius Arena, Wavre (1300 Wavre). All Pool B match scores and goal scorers.",
    results: [
      { date: "Aug 15, 2026", opponent: "France 🇫🇷", score: "3 – 2", status: "FT", scorers: ["Tom Boon 12' PC, 54' PS", "Arthur Van Doren 28' FG"] },
      { date: "Aug 17, 2026", opponent: "Malaysia 🇲🇾", score: "vs", status: "upcoming", scorers: [] },
      { date: "Aug 19, 2026", opponent: "Germany 🇩🇪", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `Co-hosts Belgium delighted 8,000 home fans at Belfius Hockey Arena (Avenue de la Toison d'Or, 1300 Wavre) with a hard-fought 3-2 victory over France. Tom Boon netted twice, including a 54th-minute penalty stroke winner, while libero Arthur Van Doren struck in the 28th minute.`,
    faqs: [
      { q: "What are Belgium's results at Hockey World Cup 2026?", a: "Belgium beat France 3-2 at Belfius Arena, Wavre (1300 Wavre) on August 15." }
    ],
    internalLinks: [
      { text: "Belgium Schedule 2026", href: "/hockey-world-cup-2026-schedule-belgium" },
      { text: "Germany vs Belgium Preview", href: "/matches/germany-vs-belgium" },
      { text: "Arthur Van Doren Profile", href: "/players/arthur-van-doren" }
    ]
  },

  germany: {
    name: "Germany", flag: "🇩🇪", pool: "Pool B", coach: "André Henning", ranking: 4,
    metaTitle: "Germany Hockey World Cup 2026 Results — All Match Scores",
    metaDesc: "Germany's match results at Hockey World Cup 2026. Pool B scores, goal tallies and knockout progress.",
    results: [
      { date: "Aug 15, 2026", opponent: "Malaysia 🇲🇾", score: "5 – 1", status: "FT", scorers: ["Niklas Wellen 04' FG, 18' FG", "Gonzalo Peillat 31' PC", "Christopher Rühr 44' PS"] },
      { date: "Aug 17, 2026", opponent: "France 🇫🇷", score: "vs", status: "upcoming", scorers: [] },
      { date: "Aug 19, 2026", opponent: "Belgium 🇧🇪", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `World Champions Germany started Pool B in ruthless fashion with a 5-1 win against Malaysia at Belfius Hockey Arena (1300 Wavre). Niklas Wellen scored a brace, while drag-flicker Gonzalo Peillat and captain Christopher Rühr added to the scoreline.`,
    faqs: [{ q: "What are Germany's results?", a: "Germany defeated Malaysia 5-1 on August 15 at Belfius Arena, Wavre." }],
    internalLinks: [
      { text: "Germany Schedule 2026", href: "/hockey-world-cup-2026-schedule-germany" },
      { text: "Christopher Rühr Profile", href: "/players/christopher-ruhr" }
    ]
  },

  netherlands: {
    name: "Netherlands", flag: "🇳🇱", pool: "Pool A", coach: "Jeroen Delmee", ranking: 1,
    metaTitle: "Netherlands Hockey World Cup 2026 Results — Wagener Stadium Scores",
    metaDesc: "Netherlands match results at Hockey World Cup 2026. All Pool A scores at Wagener Stadium, Amstelveen (1182 AM).",
    results: [
      { date: "Aug 16, 2026", opponent: "New Zealand 🇳🇿", score: "5 – 1", status: "FT", scorers: ["Thierry Brinkman 10' FG", "Jip Janssen 22' PC, 39' PC", "Koen Bijen 51' FG"] },
      { date: "Aug 18, 2026", opponent: "Argentina 🇦🇷", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `FIH World No. 1 Netherlands stormed to a 5-1 win over New Zealand before a sold-out Wagener Stadium (1182 AM Amstelveen). Captain Thierry Brinkman opened the scoring, and drag-flick specialist Jip Janssen bagged two penalty corners.`,
    faqs: [{ q: "What are Netherlands' results?", a: "Netherlands defeated New Zealand 5-1 on August 16 at Wagener Stadium, Amstelveen." }],
    internalLinks: [
      { text: "Netherlands Schedule 2026", href: "/hockey-world-cup-2026-schedule-netherlands" },
      { text: "Thierry Brinkman Profile", href: "/players/thierry-brinkman" }
    ]
  },

  australia: {
    name: "Australia", flag: "🇦🇺", pool: "Pool C", coach: "Roelant Oltmans", ranking: 2,
    metaTitle: "Australia Hockey World Cup 2026 Results — Kookaburras Scores",
    metaDesc: "Australia match results at Hockey World Cup 2026. All Pool C scores, goal tallies and standings.",
    results: [
      { date: "Aug 16, 2026", opponent: "Ireland 🇮🇪", score: "4 – 1", status: "FT", scorers: ["Blake Govers 14' PC, 33' PC", "Aran Zalewski 48' FG"] },
      { date: "Aug 18, 2026", opponent: "Spain 🇪🇸", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `The Kookaburras produced a dominant 4-1 performance over Ireland at Belfius Hockey Arena (1300 Wavre). Drag-flick specialist Blake Govers scored twice from penalty corners.`,
    faqs: [{ q: "What are Australia's results?", a: "Australia beat Ireland 4-1 on August 16 at Belfius Arena, Wavre." }],
    internalLinks: [{ text: "Australia Schedule 2026", href: "/hockey-world-cup-2026-schedule-australia" }]
  },

  argentina: {
    name: "Argentina", flag: "🇦🇷", pool: "Pool A", coach: "Julio Rearte", ranking: 8,
    metaTitle: "Argentina Hockey World Cup 2026 Results — Los Leones Match Scores",
    metaDesc: "Argentina match results at Hockey World Cup 2026. Pool A scores and goal logs.",
    results: [
      { date: "Aug 16, 2026", opponent: "Japan 🇯🇵", score: "2 – 0", status: "FT", scorers: ["Maico Casella 19' PC", "Tomas Domene 41' FG"] },
      { date: "Aug 18, 2026", opponent: "Netherlands 🇳🇱", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `Los Leones earned a clean-sheet 2-0 victory against Japan at Wagener Stadium (1182 AM Amstelveen). Maico Casella opened the scoring in the 19th minute.`,
    faqs: [{ q: "What are Argentina's results?", a: "Argentina won 2-0 against Japan on August 16." }],
    internalLinks: [{ text: "Argentina Schedule 2026", href: "/hockey-world-cup-2026-schedule-argentina" }]
  },

  england: {
    name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", pool: "Pool D", coach: "Paul Revington", ranking: 6,
    metaTitle: "England Hockey World Cup 2026 Results — Match Scores",
    metaDesc: "England match results at Hockey World Cup 2026. All Pool D scores and scorers.",
    results: [
      { date: "Aug 15, 2026", opponent: "Pakistan 🇵🇰", score: "4 – 1", status: "FT", scorers: ["Liam Ansell 11' FG, 38' FG", "Zach Wallace 25' PC"] },
      { date: "Aug 17, 2026", opponent: "India 🇮🇳", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `England opened Pool D with a impressive 4-1 victory over Pakistan at Wagener Stadium (1182 AM). Liam Ansell scored twice in open play.`,
    faqs: [{ q: "What are England's results?", a: "England defeated Pakistan 4-1 on August 15 at Wagener Stadium." }],
    internalLinks: [{ text: "England Schedule 2026", href: "/hockey-world-cup-2026-schedule-england" }]
  },

  spain: {
    name: "Spain", flag: "🇪🇸", pool: "Pool C", coach: "Max Caldas", ranking: 7,
    metaTitle: "Spain Hockey World Cup 2026 Results — Red Sticks Match Scores",
    metaDesc: "Spain match results at Hockey World Cup 2026. All Pool C scores.",
    results: [
      { date: "Aug 16, 2026", opponent: "South Africa 🇿🇦", score: "3 – 1", status: "FT", scorers: ["Marc Miralles 09' PC, 52' PS"] },
      { date: "Aug 18, 2026", opponent: "Australia 🇦🇺", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `Spain secured a solid 3-1 win over South Africa at Belfius Hockey Arena (1300 Wavre), led by penalty stroke specialist Marc Miralles.`,
    faqs: [{ q: "What are Spain's results?", a: "Spain beat South Africa 3-1 on August 16." }],
    internalLinks: [{ text: "Spain Schedule 2026", href: "/hockey-world-cup-2026-schedule-spain" }]
  },

  france: {
    name: "France", flag: "🇫🇷", pool: "Pool B", coach: "Frederic Soyez", ranking: 9,
    metaTitle: "France Hockey World Cup 2026 Results — Match Scores",
    metaDesc: "France match results at Hockey World Cup 2026. Pool B scores.",
    results: [
      { date: "Aug 15, 2026", opponent: "Belgium 🇧🇪", score: "2 – 3", status: "FT", scorers: ["Victor Charlet 19' PC, 47' PC"] },
      { date: "Aug 17, 2026", opponent: "Malaysia 🇲🇾", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `Les Bleus fought valiantly against co-hosts Belgium at Belfius Arena (1300 Wavre), with Victor Charlet converting two penalty corners in a 2-3 thriller.`,
    faqs: [{ q: "What are France's results?", a: "France narrow lost 2-3 to Belgium on August 15." }],
    internalLinks: [{ text: "France Schedule 2026", href: "/hockey-world-cup-2026-schedule-france" }]
  },

  malaysia: {
    name: "Malaysia", flag: "🇲🇾", pool: "Pool B", coach: "Sarjit Singh", ranking: 13,
    metaTitle: "Malaysia Hockey World Cup 2026 Results — Speedy Tigers Scores",
    metaDesc: "Malaysia match results at Hockey World Cup 2026. Pool B scores.",
    results: [
      { date: "Aug 15, 2026", opponent: "Germany 🇩🇪", score: "1 – 5", status: "FT", scorers: ["Faizal Saari 38' PC"] },
      { date: "Aug 17, 2026", opponent: "France 🇫🇷", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `Malaysia's Speedy Tigers faced World Champions Germany in their opening fixture at Belfius Arena (1300 Wavre). Faizal Saari scored a consolation penalty corner.`,
    faqs: [{ q: "What are Malaysia's results?", a: "Malaysia lost 1-5 to Germany on August 15." }],
    internalLinks: [{ text: "Malaysia Schedule 2026", href: "/hockey-world-cup-2026-schedule-malaysia" }]
  },

  "new-zealand": {
    name: "New Zealand", flag: "🇳🇿", pool: "Pool A", coach: "Greg Nicol", ranking: 10,
    metaTitle: "New Zealand Hockey World Cup 2026 Results — Black Sticks Scores",
    metaDesc: "New Zealand match results at Hockey World Cup 2026. Pool A scores.",
    results: [
      { date: "Aug 16, 2026", opponent: "Netherlands 🇳🇱", score: "1 – 5", status: "FT", scorers: ["Kane Russell 29' PC"] },
      { date: "Aug 18, 2026", opponent: "Japan 🇯🇵", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `The Black Sticks played co-hosts Netherlands at Wagener Stadium (1182 AM Amstelveen). Kane Russell converted a 29th-minute penalty corner.`,
    faqs: [{ q: "What are New Zealand's results?", a: "New Zealand lost 1-5 to Netherlands on August 16." }],
    internalLinks: [{ text: "New Zealand Schedule 2026", href: "/hockey-world-cup-2026-schedule-new-zealand" }]
  },

  ireland: {
    name: "Ireland", flag: "🇮🇪", pool: "Pool C", coach: "Mark Tumilty", ranking: 12,
    metaTitle: "Ireland Hockey World Cup 2026 Results — Green Machine Scores",
    metaDesc: "Ireland match results at Hockey World Cup 2026. Pool C scores.",
    results: [
      { date: "Aug 16, 2026", opponent: "Australia 🇦🇺", score: "1 – 4", status: "FT", scorers: ["Shane O'Donoghue 41' PC"] },
      { date: "Aug 18, 2026", opponent: "South Africa 🇿🇦", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `Ireland's Green Machine opened Pool C against Australia at Belfius Arena (1300 Wavre). Shane O'Donoghue scored from a penalty corner.`,
    faqs: [{ q: "What are Ireland's results?", a: "Ireland lost 1-4 to Australia on August 16." }],
    internalLinks: [{ text: "Ireland Schedule 2026", href: "/hockey-world-cup-2026-schedule-ireland" }]
  },

  chile: {
    name: "Chile", flag: "🇨🇱", pool: "Pool A", coach: "Jorge Dabanch", ranking: 19,
    metaTitle: "Chile Hockey World Cup 2026 Results — Match Scores",
    metaDesc: "Chile match results at Hockey World Cup 2026. Pool A scores.",
    results: [
      { date: "Aug 15, 2026", opponent: "Netherlands 🇳🇱", score: "0 – 4", status: "FT", scorers: [] },
      { date: "Aug 17, 2026", opponent: "Japan 🇯🇵", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `Chile's Diablos played co-hosts Netherlands in their historic Pool A opener at Wagener Stadium (1182 AM Amstelveen).`,
    faqs: [{ q: "What are Chile's results?", a: "Chile lost 0-4 to Netherlands on August 15." }],
    internalLinks: [{ text: "Chile Schedule 2026", href: "/hockey-world-cup-2026-schedule-chile" }]
  },

  "south-africa": {
    name: "South Africa", flag: "🇿🇦", pool: "Pool D", coach: "Cheslyn Gie", ranking: 14,
    metaTitle: "South Africa Hockey World Cup 2026 Results — Match Scores",
    metaDesc: "South Africa match results at Hockey World Cup 2026. Pool D scores.",
    results: [
      { date: "Aug 16, 2026", opponent: "Spain 🇪🇸", score: "1 – 3", status: "FT", scorers: ["Nqobile Ntuli 34' FG"] },
      { date: "Aug 18, 2026", opponent: "Ireland 🇮🇪", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `South Africa opened Pool D against Spain at Belfius Arena (1300 Wavre). Forward Nqobile Ntuli scored in the 34th minute.`,
    faqs: [{ q: "What are South Africa's results?", a: "South Africa lost 1-3 to Spain on August 16." }],
    internalLinks: [{ text: "South Africa Schedule 2026", href: "/hockey-world-cup-2026-schedule-south-africa" }]
  },

  wales: {
    name: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", pool: "Pool D", coach: "Danny Kerry", ranking: 15,
    metaTitle: "Wales Hockey World Cup 2026 Results — Match Scores",
    metaDesc: "Wales match results at Hockey World Cup 2026. Pool D scores.",
    results: [
      { date: "Aug 15, 2026", opponent: "India 🇮🇳", score: "1 – 3", status: "FT", scorers: ["Jacob Draper 36' PC"] },
      { date: "Aug 17, 2026", opponent: "Pakistan 🇵🇰", score: "vs", status: "upcoming", scorers: [] }
    ],
    editorial: `Wales opened their Pool D campaign against India at Wagener Stadium (1182 AM Amstelveen). Midfielder Jacob Draper converted a penalty corner in the 36th minute.`,
    faqs: [{ q: "What are Wales's results?", a: "Wales lost 1-3 to India on August 15." }],
    internalLinks: [{ text: "Wales Schedule 2026", href: "/hockey-world-cup-2026-schedule-wales" }]
  }
};

export async function generateStaticParams() {
  return Object.keys(teamsData).map((team) => ({ team }));
}

export async function generateMetadata({ params }) {
  const { team } = await params;
  const t = teamsData[team.toLowerCase()];
  if (!t) return {};

  return {
    robots: { index: true, follow: true },
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical: `${BASE}/results/${team}` },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDesc,
      url: `${BASE}/results/${team}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${t.name} Match Results` }]
    }
  };
}

export default async function TeamResultsPage({ params }) {
  const { team } = await params;
  const teamKey = team.toLowerCase();
  const t = teamsData[teamKey];

  if (!t) notFound();

  return (
    <>
      <Header />
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <a href="/results" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Results</a>
          <span style={{ margin: "0 0.4rem" }}>&rsaquo;</span>
          <span style={{ color: "var(--text-main)", fontWeight: 600 }}>{t.name}</span>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem" }}>{t.flag}</div>
          <div>
            <h1 style={{ fontSize: "2rem", fontWeight: "900", color: "var(--text-main)", margin: 0 }}>
              {t.name} Match Results & Goals — Hockey World Cup 2026
            </h1>
            <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>
              {t.pool} · FIH World No. {t.ranking} · Coach: {t.coach}
            </div>
          </div>
        </div>

        {/* Dynamic Client Component with 10s FIH TMS Auto-Sync */}
        <TeamResultsClient teamData={t} teamSlug={teamKey} />

      </main>
      <Footer />
    </>
  );
}
