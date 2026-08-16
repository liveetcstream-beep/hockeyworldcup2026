import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { fetchFIHTMSLiveScores } from "@/lib/fihTmsScraper";
import { sanitizeAndValidateMatches } from "@/lib/matchSanityValidator";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request) {
  try {
    let todayMatches = [];
    
    // Attempt to fetch live scores directly from official FIH TMS
    try {
      const tmsMatches = await fetchFIHTMSLiveScores();
      if (tmsMatches && tmsMatches.length > 0) {
        todayMatches = tmsMatches;
      }
    } catch (e) {
      console.warn("FIH TMS live fetch fallback to local store:", e);
    }

    // Fallback to local data if live fetch returns empty
    if (todayMatches.length === 0) {
      const dataFilePath = path.join(process.cwd(), "src/data/fihLiveData.json");

      if (fs.existsSync(dataFilePath)) {
        const fileContent = fs.readFileSync(dataFilePath, "utf8");
        const parsed = JSON.parse(fileContent);
        if (parsed.matchday2 && Array.isArray(parsed.matchday2) && parsed.matchday2.length > 0) {
          todayMatches = parsed.matchday2;
        }
      }
    }

    // Static verified Matchday 1 (Aug 15) results
    const yesterdayMatches = [
      {
        id: 101,
        status: "FINAL",
        match: "England vs Pakistan",
        gender: "Men's Pool D (M3)",
        scoreA: 4,
        scoreB: 1,
        teamA: "England",
        flagA: "gb-eng",
        teamB: "Pakistan",
        flagB: "pk",
        venue: "Wagener Stadium, Amstelveen (NED)",
        timeCET: "19:00 CET (Local Time)",
        scorers: "Stuart Rushmere (14'), Sam Ward (29' PC), Samuel Hooper (41' PC), James Albery (56') | Rehman Abdul Afraz (33')",
        stats: { possession: "56% - 44%", penaltyCorners: "7 (2) - 3 (0)", shotsOnTarget: "11 - 4" },
        recapUrl: "/news/england-vs-pakistan-result-score-august-15-hwc-2026"
      },
      {
        id: 102,
        status: "FINAL",
        match: "India vs Wales",
        gender: "Men's Pool D (M1)",
        scoreA: 3,
        scoreB: 1,
        teamA: "India",
        flagA: "in",
        teamB: "Wales",
        flagB: "gb-wls",
        venue: "Wagener Stadium, Amstelveen (NED)",
        timeCET: "13:00 CET (Local Time)",
        scorers: "Sanjay (08' PC), Harmanpreet Singh (11' PC, 43' PC) | Sam Welsh (56')",
        stats: { possession: "64% - 36%", penaltyCorners: "8 (2) - 2 (1)", shotsOnTarget: "14 - 3" },
        recapUrl: "/news/india-vs-wales-result-score-august-15-hwc-2026"
      },
      {
        id: 103,
        status: "FINAL",
        match: "Belgium vs France",
        gender: "Men's Pool B (M4)",
        scoreA: 3,
        scoreB: 2,
        teamA: "Belgium",
        flagA: "be",
        teamB: "France",
        flagB: "fr",
        venue: "Belfius Hockey Arena, Wavre (BEL)",
        timeCET: "21:00 CET (Local Time)",
        scorers: "Nelson Onana (17'), Roman Duvekot (44'), Alexander Hendrickx (56' PC) | Eliot Curty (03'), Timothée Clément (18')",
        stats: { possession: "61% - 39%", penaltyCorners: "6 (2) - 3 (2)", shotsOnTarget: "9 - 5" },
        recapUrl: "/news/belgium-vs-france-result-score-august-15-hwc-2026"
      },
      {
        id: 104,
        status: "FINAL",
        match: "Germany vs Malaysia",
        gender: "Men's Pool B (M2)",
        scoreA: 5,
        scoreB: 1,
        teamA: "Germany",
        flagA: "de",
        teamB: "Malaysia",
        flagB: "my",
        venue: "Belfius Hockey Arena, Wavre (BEL)",
        timeCET: "14:30 CET (Local Time)",
        scorers: "Jakob Brilla (04'), Christopher Rühr (07'), Justus Weigand (10'), Justus Warweg (34' PC), Paul-Philipp Kaufmann (51') | Azrai Aizad Abu Kamal (40')",
        stats: { possession: "62% - 38%", penaltyCorners: "7 (2) - 2 (0)", shotsOnTarget: "12 - 3" },
        recapUrl: "/news/germany-vs-malaysia-result-score-august-15-hwc-2026"
      },
      {
        id: 105,
        status: "FINAL",
        match: "Netherlands vs Chile",
        gender: "Women's Pool A (W3)",
        scoreA: 2,
        scoreB: 0,
        teamA: "Netherlands",
        flagA: "nl",
        teamB: "Chile",
        flagB: "cl",
        venue: "Wagener Stadium, Amstelveen (NED)",
        timeCET: "16:00 CET (Local Time)",
        scorers: "Felice Albers (19'), Yibbi Jansen (44' PC)",
        stats: { possession: "68% - 32%", penaltyCorners: "8 (1) - 1 (0)", shotsOnTarget: "14 - 2" },
        recapUrl: "/news/netherlands-vs-chile-women-result-score-august-15-hwc-2026"
      },
      {
        id: 106,
        status: "FINAL",
        match: "Germany vs Scotland",
        gender: "Women's Pool B (W2)",
        scoreA: 3,
        scoreB: 0,
        teamA: "Germany",
        flagA: "de",
        teamB: "Scotland",
        flagB: "gb-sct",
        venue: "Belfius Hockey Arena, Wavre (BEL)",
        timeCET: "11:30 CET (Local Time)",
        scorers: "Charlotte Stapenhorst (06', 29'), Nike Lorenz (48' PC)",
        stats: { possession: "64% - 36%", penaltyCorners: "6 (1) - 2 (0)", shotsOnTarget: "11 - 2" },
        recapUrl: "/news/germany-vs-scotland-women-result-score-august-15-hwc-2026"
      },
      {
        id: 107,
        status: "FINAL",
        match: "Argentina vs United States",
        gender: "Women's Pool B (W4)",
        scoreA: 1,
        scoreB: 1,
        teamA: "Argentina",
        flagA: "ar",
        teamB: "United States",
        flagB: "us",
        venue: "Belfius Hockey Arena, Wavre (BEL)",
        timeCET: "17:30 CET (Local Time)",
        scorers: "Agustina Gorzelany (14' PC) | Ashley Sessa (44')",
        stats: { possession: "55% - 45%", penaltyCorners: "5 (1) - 4 (0)", shotsOnTarget: "7 - 5" },
        recapUrl: "/news/argentina-vs-usa-women-result-score-august-15-hwc-2026"
      },
      {
        id: 108,
        status: "FINAL",
        match: "Australia vs Japan",
        gender: "Women's Pool A (W1)",
        scoreA: 2,
        scoreB: 0,
        teamA: "Australia",
        flagA: "au",
        teamB: "Japan",
        flagB: "jp",
        venue: "Wagener Stadium, Amstelveen (NED)",
        timeCET: "10:00 CET (Local Time)",
        scorers: "Claire Colwill (27' PC, 50' PC)",
        stats: { possession: "54% - 46%", penaltyCorners: "5 (2) - 3 (0)", shotsOnTarget: "7 - 4" },
        recapUrl: "/news/australia-vs-japan-women-result-score-august-15-hwc-2026"
      }
    ];

    // Apply strict automated counter-checks & auto-correction validation
    const { verifiedCompleted, verifiedLive, verifiedUpcoming, nextMatch } = sanitizeAndValidateMatches(todayMatches);

    // Filter completed results (completed today + completed yesterday)
    const completedMatches = [
      ...verifiedCompleted,
      ...yesterdayMatches
    ];

    return NextResponse.json({
      success: true,
      lastUpdated: new Date().toISOString(),
      matchday: "Matchday 2 (August 16, 2026)",
      timezone: "CET / CEST (Host Local Time in Belgium & Netherlands)",
      liveCount: verifiedLive.length,
      liveMatches: verifiedLive,
      nextMatch,
      upcomingToday: verifiedUpcoming,
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
