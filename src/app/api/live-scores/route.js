import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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
      scorers: "Stuart Rushmere (12'), Sam Ward (28' PC), Samuel Hooper (31'), James Albery (47') | Rehman Abdul Afraz (50')",
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
      scorers: "Sanjay (8'), Harmanpreet Singh (11' PC, 43' PC) | Sam Welsh (56')",
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
      scoreB: 2,
      teamA: "Belgium",
      flagA: "be",
      teamB: "France",
      flagB: "fr",
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "18:00",
      scorers: "Nelson Onana (17'), Roman Duvekot (44'), Alexander Hendrickx (56' PC) | Eliot Curty (3'), Timothée Clément (18')",
      stats: { possession: "61% - 39%", penaltyCorners: "6 (2) - 3 (2)", shotsOnTarget: "9 - 5", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/belgium-vs-france-result-score-august-15-hwc-2026"
    },
    {
      id: 104,
      status: "FINAL",
      match: "Germany vs Malaysia",
      gender: "Men",
      pool: "Pool B",
      scoreA: 5,
      scoreB: 1,
      teamA: "Germany",
      flagA: "de",
      teamB: "Malaysia",
      flagB: "my",
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "11:30",
      scorers: "Jakob Brilla (04'), Christopher Ruhr (07'), Justus Weigand (10'), Justus Warweg (34'), Paul-Philipp Kaufmann (51') | Azrai Aizad Abu Kamal (40')",
      stats: { possession: "62% - 38%", penaltyCorners: "7 (2) - 2 (0)", shotsOnTarget: "12 - 3", yellowCards: 1, redCards: 0 },
      recapUrl: "/news/germany-vs-malaysia-result-score-august-15-hwc-2026"
    },
    {
      id: 105,
      status: "FINAL",
      match: "Netherlands vs Chile",
      gender: "Women",
      pool: "Pool A",
      scoreA: 2,
      scoreB: 0,
      teamA: "Netherlands",
      flagA: "nl",
      teamB: "Chile",
      flagB: "cl",
      venue: "Wagener Stadium, Amstelveen (NED)",
      timeCET: "13:00",
      scorers: "Felice Albers (19'), Yibbi Jansen (44' PC)",
      stats: { possession: "68% - 32%", penaltyCorners: "8 (1) - 1 (0)", shotsOnTarget: "14 - 2", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/netherlands-vs-chile-women-result-score-august-15-hwc-2026"
    },
    {
      id: 106,
      status: "FINAL",
      match: "Germany vs Scotland",
      gender: "Women",
      pool: "Pool B",
      scoreA: 3,
      scoreB: 0,
      teamA: "Germany",
      flagA: "de",
      teamB: "Scotland",
      flagB: "gb-sct",
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "08:30",
      scorers: "Charlotte Stapenhorst (06', 29'), Nike Lorenz (48' PC)",
      stats: { possession: "64% - 36%", penaltyCorners: "6 (1) - 2 (0)", shotsOnTarget: "11 - 2", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/germany-vs-scotland-women-result-score-august-15-hwc-2026"
    },
    {
      id: 107,
      status: "FINAL",
      match: "Argentina vs United States",
      gender: "Women",
      pool: "Pool B",
      scoreA: 1,
      scoreB: 1,
      teamA: "Argentina",
      flagA: "ar",
      teamB: "United States",
      flagB: "us",
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "14:30",
      scorers: "Agustina Gorzelany (14' PC) | Ashley Sessa (44')",
      stats: { possession: "55% - 45%", penaltyCorners: "5 (1) - 4 (0)", shotsOnTarget: "7 - 5", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/argentina-vs-usa-women-result-score-august-15-hwc-2026"
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
      scorers: "Claire Colwill (27' PC, 50' PC)",
      stats: { possession: "54% - 46%", penaltyCorners: "5 (2) - 3 (0)", shotsOnTarget: "7 - 4", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/australia-vs-japan-women-result-score-august-15-hwc-2026"
    }
  ],
  "2026-08-16": [
    // 1. Completed Matchday 2 Morning Fixtures
    {
      id: 200,
      status: "FINAL",
      match: "England vs South Africa",
      gender: "Women",
      pool: "Pool D (Women)",
      scoreA: 4,
      scoreB: 0,
      teamA: "England",
      flagA: "gb-eng",
      teamB: "South Africa",
      flagB: "za",
      venue: "Wagener Stadium, Amstelveen (NED)",
      timeCET: "09:30",
      scorers: "Giselle Ansley (14' PC), Hannah Martin (28'), Lily Owsley (41'), Tess Howard (52')",
      stats: { possession: "62% - 38%", penaltyCorners: "6 (1) - 2 (0)", shotsOnTarget: "11 - 2", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/england-vs-south-africa-women-result-score-august-16-hwc-2026"
    },
    {
      id: 201,
      status: "FINAL",
      match: "Australia vs Ireland",
      gender: "Men",
      pool: "Pool C (Men)",
      scoreA: 2,
      scoreB: 1,
      teamA: "Australia",
      flagA: "au",
      teamB: "Ireland",
      flagB: "ie",
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "11:00",
      scorers: "Blake Govers (11' PC), Jeremy Hayward (35') | Lee Cole (24' PC)",
      stats: { possession: "59% - 41%", penaltyCorners: "5 (1) - 2 (1)", shotsOnTarget: "9 - 3", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/australia-vs-ireland-result-score-august-16-hwc-2026"
    },

    {
      id: 203,
      status: "UPCOMING",
      match: "Spain vs South Africa",
      gender: "Men",
      pool: "Pool C (Men)",
      scoreA: 0,
      scoreB: 0,
      teamA: "Spain",
      flagA: "es",
      teamB: "South Africa",
      flagB: "za",
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "14:30",
      scorers: "",
      stats: { possession: "50% - 50%", penaltyCorners: "0 - 0", shotsOnTarget: "0 - 0", yellowCards: 0, redCards: 0 },
      recapUrl: "/news/spain-vs-south-africa-result-score-august-16-hwc-2026"
    },

    // 2. Currently Active Live Matches (Pushback 13:00 CET / 16:00 PKT)
    {
      id: 202,
      status: "LIVE",
      period: "1st Quarter",
      minute: "12'",
      quarterNumber: 1,
      elapsedMinutes: 12,
      gender: "Women",
      pool: "Pool D (Women)",
      teamA: "China",
      flagA: "cn",
      scoreA: 0,
      teamB: "India",
      flagB: "in",
      scoreB: 0,
      venue: "Wagener Stadium, Amstelveen (NED)",
      timeCET: "13:00",
      localTimes: "16:00 PKT / 16:30 IST",
      stats: { possession: "49% - 51%", penaltyCorners: "1 (0) - 1 (0)", shotsOnTarget: "2 - 2", yellowCards: 0, redCards: 0 },
      events: [],
      previewUrl: "/news/china-vs-india-women-result-score-august-16-hwc-2026"
    },
    {
      id: 204,
      status: "LIVE",
      period: "1st Quarter",
      minute: "10'",
      quarterNumber: 1,
      elapsedMinutes: 10,
      gender: "Men",
      pool: "Pool A (Men)",
      teamA: "Netherlands",
      flagA: "nl",
      scoreA: 1,
      teamB: "New Zealand",
      flagB: "nz",
      scoreB: 0,
      venue: "Wagener Stadium, Amstelveen (NED)",
      timeCET: "13:00",
      scorers: "Thierry Brinkman (08')",
      stats: { possession: "63% - 37%", penaltyCorners: "2 (0) - 0 (0)", shotsOnTarget: "4 - 1", yellowCards: 0, redCards: 0 },
      events: [
        { minute: "08'", player: "Thierry Brinkman", type: "Field Goal ⚽", team: "Netherlands" }
      ],
      previewUrl: "/matches/germany-vs-netherlands"
    },

    // 3. Upcoming Today Afternoon & Evening Matches
    {
      id: 205,
      status: "UPCOMING",
      period: "Pushback 14:30 CET",
      minute: "Starts 5:30 PM PKT (18:00 IST)",
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
      minute: "Starts 7:00 PM PKT (19:30 IST)",
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
    },
    {
      id: 207,
      status: "UPCOMING",
      period: "Pushback 17:30 CET",
      minute: "Starts 8:30 PM PKT (21:00 IST)",
      gender: "Women",
      pool: "Pool C (Women)",
      teamA: "Spain",
      flagA: "es",
      scoreA: 0,
      teamB: "Ireland",
      flagB: "ie",
      scoreB: 0,
      venue: "Belfius Hockey Arena, Wavre (BEL)",
      timeCET: "17:30",
      stats: { possession: "0% - 0%", penaltyCorners: "0 - 0", shotsOnTarget: "0 - 0", yellowCards: 0, redCards: 0 },
      events: [],
      previewUrl: "/pool-c"
    }
  ]
};

export async function GET(request) {
  try {
    let todayMatches = ALL_TOURNAMENT_MATCHDAYS["2026-08-16"] || [];
    let yesterdayMatches = ALL_TOURNAMENT_MATCHDAYS["2026-08-15"] || [];

    // Attempt to load real-time state from fihLiveData.json if updated by daemon
    try {
      const dataFilePath = path.join(process.cwd(), "src/data/fihLiveData.json");
      if (fs.existsSync(dataFilePath)) {
        const fileContent = fs.readFileSync(dataFilePath, "utf8");
        const parsed = JSON.parse(fileContent);
        if (parsed.matchday2 && Array.isArray(parsed.matchday2) && parsed.matchday2.length > 0) {
          todayMatches = parsed.matchday2;
        }
      }
    } catch (readErr) {
      // Graceful fallback to static database
    }

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

