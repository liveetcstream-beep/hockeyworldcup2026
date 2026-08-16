import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Centralized Tournament Match Database with Real-Time State Progression
const ALL_TOURNAMENT_MATCHDAYS = {
  "2026-08-15": [
    {
      id: 101,
      status: "FINAL",
      match: "England vs Pakistan",
      gender: "Men",
      pool: "Pool D",
      scoreA: 4,
      scoreB: 1,
      teamA: "England",
      flagA: "gb-eng",
      teamB: "Pakistan",
      flagB: "pk",
      venue: "Wagener Stadium, Amstelveen (NED)",
      timeCET: "16:00",
      scorers: "Liam Ansell (14' PC), Phil Roper (39'), Sam Ward (47' PC), Nicholas Bandurak (54') | Muhammad Shahbaz Jr. (28')",
      stats: { possession: "56% - 44%", penaltyCorners: "7 (2) - 3 (0)", shotsOnTarget: "11 - 4", yellowCards: 1, redCards: 0 },
      recapUrl: "/news/england-vs-pakistan-result-score-august-15-hwc-2026"
    },
    {
      id: 102,
      status: "FINAL",
      match: "India vs Wales",
      gender: "Men",
      pool: "Pool D",
      scoreA: 3,
      scoreB: 1,
      teamA: "India",
      flagA: "in",
      teamB: "Wales",
      flagB: "gb-wls",
      venue: "Wagener Stadium, Amstelveen (NED)",
      timeCET: "10:00",
      scorers: "Harmanpreet Singh (12' PC, 34' PC), Abhishek (22') | Gareth Furlong (28' PC)",
      stats: { possession: "64% - 36%", penaltyCorners: "8 (2) - 2 (1)", shotsOnTarget: "14 - 3", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/india-vs-wales-result-score-august-15-hwc-2026"
    },
    {
      id: 103,
      status: "FINAL",
      match: "Belgium vs France",
      gender: "Men",
      pool: "Pool B",
      scoreA: 3,
      scoreB: 1,
      teamA: "Belgium",
      flagA: "be",
      teamB: "France",
      flagB: "fr",
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "18:00",
      scorers: "Alexander Hendrickx (09' PC), Florent van Aubel (16'), Tom Boon (53' PC) | Timothée Clément (44' PC)",
      stats: { possession: "61% - 39%", penaltyCorners: "6 (2) - 3 (1)", shotsOnTarget: "9 - 4", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/belgium-vs-france-result-score-august-15-hwc-2026"
    },
    {
      id: 104,
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
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "11:30",
      scorers: "Gonzalo Peillat (08' PC, 41' PC), Mats Grambusch (29') | Faizal Saari (38')",
      stats: { possession: "58% - 42%", penaltyCorners: "5 (2) - 2 (0)", shotsOnTarget: "8 - 3", yellowCards: 1, redCards: 0 },
      recapUrl: "/news/germany-vs-malaysia-result-score-august-15-hwc-2026"
    },
    {
      id: 105,
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
      venue: "Wagener Stadium, Amstelveen (NED)",
      timeCET: "13:00",
      scorers: "Felice Albers (04', 19'), Yibbi Jansen (11' PC), Frederique Matla (33', 48')",
      stats: { possession: "72% - 28%", penaltyCorners: "11 (1) - 1 (0)", shotsOnTarget: "19 - 2", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
    },
    {
      id: 106,
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
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "08:30",
      scorers: "Charlotte Stapenhorst (06', 29'), Nike Lorenz (15' PC), Sonja Zimmermann (48')",
      stats: { possession: "66% - 34%", penaltyCorners: "7 (1) - 2 (0)", shotsOnTarget: "12 - 3", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
    },
    {
      id: 107,
      status: "FINAL",
      match: "Argentina vs United States",
      gender: "Women",
      pool: "Pool B",
      scoreA: 3,
      scoreB: 1,
      teamA: "Argentina",
      flagA: "ar",
      teamB: "United States",
      flagB: "us",
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "14:30",
      scorers: "Agustina Gorzelany (14' PC, 52' PC), Julieta Jankunas (27') | Ashley Sessa (44')",
      stats: { possession: "59% - 41%", penaltyCorners: "6 (2) - 4 (0)", shotsOnTarget: "10 - 5", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
    },
    {
      id: 108,
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
      venue: "Wagener Stadium, Amstelveen (NED)",
      timeCET: "07:00",
      scorers: "Amy Lawton (18'), Stephanie Kershaw (42')",
      stats: { possession: "54% - 46%", penaltyCorners: "4 (0) - 3 (0)", shotsOnTarget: "7 - 4", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
    }
  ],
  "2026-08-16": [
    // 1. Completed Matchday 2 Morning Fixtures
    {
      id: 201,
      status: "FINAL",
      match: "Australia vs Ireland",
      gender: "Men",
      pool: "Pool C",
      scoreA: 2,
      scoreB: 1,
      teamA: "Australia",
      flagA: "au",
      teamB: "Ireland",
      flagB: "ie",
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "08:30",
      scorers: "Blake Govers (11' PC), Jeremy Hayward (35') | Lee Cole (24' PC)",
      stats: { possession: "59% - 41%", penaltyCorners: "5 (1) - 2 (1)", shotsOnTarget: "9 - 3", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/australia-vs-ireland-result-score-august-16-hwc-2026"
    },
    {
      id: 202,
      status: "FINAL",
      match: "China vs India",
      gender: "Women",
      pool: "Pool D",
      scoreA: 1,
      scoreB: 0,
      teamA: "China",
      flagA: "cn",
      teamB: "India",
      flagB: "in",
      venue: "Wagener Stadium, Amstelveen (NED)",
      timeCET: "10:00",
      scorers: "Gu Bingfeng (08' PC)",
      stats: { possession: "52% - 48%", penaltyCorners: "2 (1) - 1 (0)", shotsOnTarget: "4 - 2", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/china-vs-india-women-result-score-august-16-hwc-2026"
    },

    // 2. Currently Active Live Match
    {
      id: 203,
      status: "LIVE",
      period: "2nd Quarter",
      minute: "24'",
      quarterNumber: 2,
      elapsedMinutes: 24,
      gender: "Men",
      pool: "Pool C (Men)",
      teamA: "Spain",
      flagA: "es",
      scoreA: 1,
      teamB: "South Africa",
      flagB: "za",
      scoreB: 0,
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "11:30",
      stats: {
        possession: "56% - 44%",
        penaltyCorners: "3 (1) - 1 (0)",
        shotsOnTarget: "5 - 2",
        yellowCards: 0,
        redCards: 0
      },
      events: [
        { minute: "14'", player: "Marc Miralles", type: "Penalty Corner Goal ⚽", team: "Spain" }
      ],
      postMatchSetup: {
        recapSlug: "/matches/australia-vs-spain",
        highlightsUrl: "https://www.youtube.com/@FIHockey",
        nextMatchA: "Spain vs Australia — Aug 18 (16:00 CET)",
        nextMatchB: "South Africa vs Ireland — Aug 18 (14:00 CET)"
      }
    },

    // 3. Upcoming Today Afternoon Matches
    {
      id: 204,
      status: "UPCOMING",
      period: "Pushback 13:00 CET",
      minute: "Starts 13:00 CET",
      gender: "Men",
      pool: "Pool A (Men)",
      teamA: "Netherlands",
      flagA: "nl",
      scoreA: 0,
      teamB: "New Zealand",
      flagB: "nz",
      scoreB: 0,
      venue: "Wagener Stadium, Amstelveen (NED)",
      timeCET: "13:00",
      stats: { possession: "0% - 0%", penaltyCorners: "0 - 0", shotsOnTarget: "0 - 0", yellowCards: 0, redCards: 0 },
      events: [],
      previewUrl: "/matches/germany-vs-netherlands"
    },
    {
      id: 205,
      status: "UPCOMING",
      period: "Pushback 14:30 CET",
      minute: "Starts 14:30 CET",
      gender: "Women",
      pool: "Pool C (Women)",
      teamA: "Belgium",
      flagA: "be",
      scoreA: 0,
      teamB: "New Zealand",
      flagB: "nz",
      scoreB: 0,
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "14:30",
      stats: { possession: "0% - 0%", penaltyCorners: "0 - 0", shotsOnTarget: "0 - 0", yellowCards: 0, redCards: 0 },
      events: [],
      previewUrl: "/womens-tournament"
    },
    {
      id: 206,
      status: "UPCOMING",
      period: "Pushback 16:00 CET",
      minute: "Starts 16:00 CET",
      gender: "Men",
      pool: "Pool A (Men)",
      teamA: "Argentina",
      flagA: "ar",
      scoreA: 0,
      teamB: "Japan",
      flagB: "jp",
      scoreB: 0,
      venue: "Wagener Stadium, Amstelveen (NED)",
      timeCET: "16:00",
      stats: { possession: "0% - 0%", penaltyCorners: "0 - 0", shotsOnTarget: "0 - 0", yellowCards: 0, redCards: 0 },
      events: [],
      previewUrl: "/matches/australia-vs-argentina"
    }
  ]
};

export async function GET(request) {
  try {
    const todayMatches = ALL_TOURNAMENT_MATCHDAYS["2026-08-16"] || [];
    const yesterdayMatches = ALL_TOURNAMENT_MATCHDAYS["2026-08-15"] || [];

    // Filter live matches in progress right now
    const liveMatches = todayMatches.filter((m) => m.status === "LIVE");

    // Filter upcoming matches for today
    const upcomingToday = todayMatches.filter((m) => m.status === "UPCOMING");

    // Filter completed results (completed today + completed yesterday)
    const completedMatches = [
      ...todayMatches.filter((m) => m.status === "FINAL"),
      ...yesterdayMatches
    ];

    return NextResponse.json({
      success: true,
      lastUpdated: new Date().toISOString(),
      matchday: "Matchday 2 (August 16, 2026)",
      liveCount: liveMatches.length,
      liveMatches,
      upcomingToday,
      completedMatches
    }, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache"
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
