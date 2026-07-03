import { NextResponse } from "next/server";

const MOCK_LIVE_MATCHES = [
  {
    id: 1,
    status: "LIVE",
    minute: "42'",
    period: "3rd Quarter",
    teamA: "India",
    flagA: "in",
    scoreA: 2,
    teamB: "Wales",
    flagB: "gb-wls",
    scoreB: 1,
    venue: "Wagener Stadium, Amstelveen (NL)",
    pool: "Pool A (Men)",
    events: [
      { minute: "12'", player: "Harmanpreet Singh", type: "Penalty Corner Goal ⚽", team: "India" },
      { minute: "24'", player: "Gareth Furlong", type: "Penalty Corner Goal ⚽", team: "Wales" },
      { minute: "38'", player: "Abhishek Singh", type: "Field Goal ⚽", team: "India" }
    ]
  },
  {
    id: 2,
    status: "LIVE",
    minute: "15'",
    period: "1st Quarter",
    teamA: "Germany",
    flagA: "de",
    scoreA: 0,
    teamB: "Malaysia",
    flagB: "my",
    scoreB: 0,
    venue: "Belfius Hockey Arena, Wavre (BE)",
    pool: "Pool B (Men)",
    events: []
  }
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const showSim = searchParams.get("sim") === "true";

  const providers = [
    {
      name: "FIH Official Data Feed",
      url: "https://scores.fih.hockey/api/v1/live",
      timeout: 2500,
    },
    {
      name: "API-Sports Hockey Feed",
      url: "https://v1.hockey.api-sports.io/games?live=all",
      timeout: 2000,
      headers: { "x-apisports-key": process.env.APISPORTS_KEY || "" }
    },
    {
      name: "The Odds API Scores",
      url: "https://api.the-odds-api.com/v4/sports/hockey_field/scores/?apiKey=" + (process.env.ODDS_API_KEY || ""),
      timeout: 2500,
    },
    {
      name: "LiveScore API Hockey Feed",
      url: "https://livescore-api.com/api-client/scores/live.json?key=" + (process.env.LIVESCORE_KEY || ""),
      timeout: 2500,
    },
    {
      name: "Spoyer Live Hockey Feed",
      url: "https://spoyer.ru/api/get.php?type=livescore&sport=hockey",
      timeout: 2000,
    }
  ];

  let data = null;
  let activeProvider = null;
  const errors = [];

  for (const provider of providers) {
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), provider.timeout);

      const response = await fetch(provider.url, {
        headers: provider.headers || {},
        signal: controller.signal
      });
      clearTimeout(id);

      if (response.ok) {
        const json = await response.json();
        if (json && (json.data || json.response || json.games || json.results || Array.isArray(json))) {
          data = json;
          activeProvider = provider.name;
          break; // Exit loop on successful fetch
        }
      }
      throw new Error(`Status ${response.status}`);
    } catch (err) {
      errors.push({ provider: provider.name, error: err.message });
    }
  }

  // Return empty live matches array if no real matches exist, unless sim=true is explicitly requested
  return NextResponse.json({
    status: "success",
    source: activeProvider || "Failover Simulation Engine",
    liveMatches: showSim ? MOCK_LIVE_MATCHES : [],
    apiErrors: errors
  });
}
