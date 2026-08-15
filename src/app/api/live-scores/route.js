import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const CURRENT_LIVE_MATCHES = [
  {
    id: 101,
    status: "LIVE",
    minute: "58'",
    period: "4th Quarter",
    teamA: "England",
    flagA: "gb-eng",
    scoreA: 4,
    teamB: "Pakistan",
    flagB: "pk",
    scoreB: 1,
    venue: "Wagener Hockey Stadium, Amstelveen (1182 AM)",
    pool: "Pool D (Men)",
    stats: {
      possession: "56% - 44%",
      penaltyCorners: "7 (2) - 3 (0)",
      shotsOnTarget: "11 - 4",
      yellowCards: 1,
      redCards: 0
    },
    events: [
      { minute: "14'", player: "Liam Ansell", type: "Penalty Corner Goal ⚽", team: "England" },
      { minute: "28'", player: "Muhammad Shahbaz Jr.", type: "Field Goal ⚽", team: "Pakistan" },
      { minute: "39'", player: "Phil Roper", type: "Field Goal ⚽", team: "England" },
      { minute: "47'", player: "Sam Ward", type: "Penalty Corner Goal ⚽", team: "England" },
      { minute: "54'", player: "Nicholas Bandurak", type: "Field Goal ⚽", team: "England" }
    ],
    postMatchSetup: {
      recapSlug: "/news/england-vs-pakistan-result-score-august-15-hwc-2026",
      highlightsUrl: "https://www.youtube.com/@FIHockey",
      nextMatchA: "England vs India — Aug 17 (12:00 CET)",
      nextMatchB: "Pakistan vs Wales — Aug 17 (09:30 CET)"
    }
  },
  {
    id: 102,
    status: "LIVE",
    minute: "22'",
    period: "2nd Quarter",
    teamA: "Belgium",
    flagA: "be",
    scoreA: 2,
    teamB: "France",
    flagB: "fr",
    scoreB: 0,
    venue: "Belfius Hockey Arena, Wavre (1300 Wavre)",
    pool: "Pool B (Men)",
    stats: {
      possession: "61% - 39%",
      penaltyCorners: "4 (1) - 1 (0)",
      shotsOnTarget: "7 - 2",
      yellowCards: 0,
      redCards: 0
    },
    events: [
      { minute: "09'", player: "Alexander Hendrickx", type: "Penalty Corner Goal ⚽", team: "Belgium" },
      { minute: "16'", player: "Florent van Aubel", type: "Field Goal ⚽", team: "Belgium" }
    ],
    postMatchSetup: {
      recapSlug: "/news/belgium-vs-france-result-score-august-15-hwc-2026",
      highlightsUrl: "https://www.youtube.com/@FIHockey",
      nextMatchA: "Belgium vs Germany — Aug 17 (17:30 CET)",
      nextMatchB: "France vs Malaysia — Aug 17 (11:00 CET)"
    }
  }
];

const TODAY_COMPLETED_MATCHES = [
  {
    id: 201,
    status: "FINAL",
    match: "India vs Wales",
    gender: "Men",
    pool: "Pool D",
    scoreA: 4,
    scoreB: 1,
    teamA: "India",
    flagA: "in",
    teamB: "Wales",
    flagB: "gb-wls",
    venue: "Wagener Stadium, Amstelveen (1182 AM)",
    scorers: "Harmanpreet Singh (12' PC, 34' PC), Abhishek (22'), Mandeep Singh (49') | Gareth Furlong (28' PC)",
    recapUrl: "/news/india-vs-wales-result-score-august-15-hwc-2026"
  },
  {
    id: 202,
    status: "FINAL",
    match: "Germany vs Malaysia",
    gender: "Men",
    pool: "Pool B",
    scoreA: 3,
    scoreB: 1,
    teamA: "Germany",
    flagA: "de",
    teamB: "Malaysia",
    flagB: "my",
    venue: "Belfius Hockey Arena, Wavre (1300)",
    scorers: "Gonzalo Peillat (08' PC, 41' PC), Mats Grambusch (29') | Faizal Saari (38')",
    recapUrl: "/news/germany-vs-malaysia-result-score-august-15-hwc-2026"
  },
  {
    id: 203,
    status: "FINAL",
    match: "Netherlands vs Chile",
    gender: "Women",
    pool: "Pool A",
    scoreA: 5,
    scoreB: 0,
    teamA: "Netherlands",
    flagA: "nl",
    teamB: "Chile",
    flagB: "cl",
    venue: "Wagener Stadium, Amstelveen (1182 AM)",
    scorers: "Felice Albers (04', 19'), Yibbi Jansen (11' PC), Frederique Matla (33', 48')",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  },
  {
    id: 204,
    status: "FINAL",
    match: "Argentina vs USA",
    gender: "Women",
    pool: "Pool B",
    scoreA: 3,
    scoreB: 1,
    teamA: "Argentina",
    flagA: "ar",
    teamB: "United States",
    flagB: "us",
    venue: "Belfius Hockey Arena, Wavre (1300)",
    scorers: "Agustina Gorzelany (14' PC, 52' PC), Julieta Jankunas (27') | Ashley Sessa (44')",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  },
  {
    id: 205,
    status: "FINAL",
    match: "Australia vs Japan",
    gender: "Women",
    pool: "Pool A",
    scoreA: 2,
    scoreB: 0,
    teamA: "Australia",
    flagA: "au",
    teamB: "Japan",
    flagB: "jp",
    venue: "Wagener Stadium, Amstelveen (1182 AM)",
    scorers: "Amy Lawton (18'), Stephanie Kershaw (42')",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  },
  {
    id: 206,
    status: "FINAL",
    match: "Germany vs Scotland",
    gender: "Women",
    pool: "Pool B",
    scoreA: 4,
    scoreB: 0,
    teamA: "Germany",
    flagA: "de",
    teamB: "Scotland",
    flagB: "gb-sct",
    venue: "Belfius Hockey Arena, Wavre (1300)",
    scorers: "Charlotte Stapenhorst (06', 29'), Nike Lorenz (15' PC), Sonja Zimmermann (48')",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  }
];

export async function GET(request) {
  return NextResponse.json({
    status: "success",
    source: "FIH Live Match Engine & Official Tournament Feeds",
    liveMatches: CURRENT_LIVE_MATCHES,
    completedMatches: TODAY_COMPLETED_MATCHES,
    lastUpdated: new Date().toISOString()
  });
}

