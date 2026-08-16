/**
 * Official FIH Points Table & Standings Auto-Calculation Engine
 * 
 * Rules:
 * - Win = 3 points
 * - Draw = 1 point
 * - Loss = 0 points
 * - GD = GF - GA
 * 
 * Official FIH Tie-Breaker Order:
 * 1. Total Points (pts)
 * 2. Total Matches Won (w)
 * 3. Goal Difference (gd)
 * 4. Goals For (gf)
 * 5. Head-to-head
 */

// Initial official team pool registries
export const OFFICIAL_POOLS = {
  Men: {
    "Pool A": [
      { name: "Netherlands", code: "NED", flag: "nl", slug: "netherlands" },
      { name: "Argentina", code: "ARG", flag: "ar", slug: "argentina" },
      { name: "New Zealand", code: "NZL", flag: "nz", slug: "new-zealand" },
      { name: "Japan", code: "JPN", flag: "jp", slug: "japan" }
    ],
    "Pool B": [
      { name: "Germany", code: "GER", flag: "de", slug: "germany" },
      { name: "Belgium", code: "BEL", flag: "be", slug: "belgium" },
      { name: "France", code: "FRA", flag: "fr", slug: "france" },
      { name: "Malaysia", code: "MAS", flag: "my", slug: "malaysia" }
    ],
    "Pool C": [
      { name: "Australia", code: "AUS", flag: "au", slug: "australia" },
      { name: "Spain", code: "ESP", flag: "es", slug: "spain" },
      { name: "South Africa", code: "RSA", flag: "za", slug: "south-africa" },
      { name: "Ireland", code: "IRL", flag: "ie", slug: "ireland" }
    ],
    "Pool D": [
      { name: "England", code: "ENG", flag: "gb-eng", slug: "england" },
      { name: "India", code: "IND", flag: "in", slug: "india" },
      { name: "Wales", code: "WAL", flag: "gb-wls", slug: "wales" },
      { name: "Pakistan", code: "PAK", flag: "pk", slug: "pakistan" }
    ]
  },
  Women: {
    "Pool A": [
      { name: "Netherlands", code: "NED", flag: "nl", slug: "netherlands" },
      { name: "Australia", code: "AUS", flag: "au", slug: "australia" },
      { name: "Japan", code: "JPN", flag: "jp", slug: "japan" },
      { name: "Chile", code: "CHI", flag: "cl", slug: "chile" }
    ],
    "Pool B": [
      { name: "Germany", code: "GER", flag: "de", slug: "germany" },
      { name: "Argentina", code: "ARG", flag: "ar", slug: "argentina" },
      { name: "United States", code: "USA", flag: "us", slug: "usa" },
      { name: "Scotland", code: "SCO", flag: "gb-sct", slug: "scotland" }
    ],
    "Pool C": [
      { name: "Belgium", code: "BEL", flag: "be", slug: "belgium" },
      { name: "Spain", code: "ESP", flag: "es", slug: "spain" },
      { name: "New Zealand", code: "NZL", flag: "nz", slug: "new-zealand" },
      { name: "Ireland", code: "IRL", flag: "ie", slug: "ireland" }
    ],
    "Pool D": [
      { name: "China", code: "CHN", flag: "cn", slug: "china" },
      { name: "India", code: "IND", flag: "in", slug: "india" },
      { name: "England", code: "ENG", flag: "gb-eng", slug: "england" },
      { name: "South Africa", code: "RSA", flag: "za", slug: "south-africa" }
    ]
  }
};

/**
 * Calculates complete standings tables for both genders and all 4 pools
 * dynamically and mathematically from an array of match records.
 */
export function calculateTournamentStandings(allMatches) {
  const standings = {
    Men: {},
    Women: {}
  };

  // 1. Initialize empty tables with all registered teams
  for (const gender of ["Men", "Women"]) {
    for (const [poolName, teams] of Object.entries(OFFICIAL_POOLS[gender])) {
      standings[gender][poolName] = teams.map(t => ({
        ...t,
        p: 0,
        w: 0,
        d: 0,
        l: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        pts: 0,
        recentRes: "Upcoming"
      }));
    }
  }

  // 2. Filter completed matches
  const completed = (allMatches || []).filter(m => m.status === "FINAL");

  // 3. Accumulate points and goals
  completed.forEach(match => {
    const genderKey = (match.gender || "").toLowerCase().includes("women") ? "Women" : "Men";
    
    // Extract normalized pool name e.g. "Pool A" from "Pool A (Men)"
    let poolKey = match.pool || "";
    const poolMatch = poolKey.match(/Pool [ABCD]/i);
    if (poolMatch) {
      poolKey = poolMatch[0].toUpperCase().replace("POOL ", "Pool ");
    }

    const poolTable = standings[genderKey]?.[poolKey];
    if (!poolTable) return;

    const teamAObj = poolTable.find(t => 
      t.name.toLowerCase() === (match.teamA || "").toLowerCase() ||
      t.code.toLowerCase() === (match.teamA || "").toLowerCase()
    );
    const teamBObj = poolTable.find(t => 
      t.name.toLowerCase() === (match.teamB || "").toLowerCase() ||
      t.code.toLowerCase() === (match.teamB || "").toLowerCase()
    );

    if (teamAObj && teamBObj) {
      const scoreA = Number(match.scoreA) || 0;
      const scoreB = Number(match.scoreB) || 0;

      teamAObj.p += 1;
      teamBObj.p += 1;
      teamAObj.gf += scoreA;
      teamAObj.ga += scoreB;
      teamBObj.gf += scoreB;
      teamBObj.ga += scoreA;

      if (scoreA > scoreB) {
        teamAObj.w += 1;
        teamAObj.pts += 3;
        teamBObj.l += 1;
        teamAObj.recentRes = `W ${scoreA}-${scoreB} vs ${teamBObj.code}`;
        teamBObj.recentRes = `L ${scoreB}-${scoreA} vs ${teamAObj.code}`;
      } else if (scoreB > scoreA) {
        teamBObj.w += 1;
        teamBObj.pts += 3;
        teamAObj.l += 1;
        teamBObj.recentRes = `W ${scoreB}-${scoreA} vs ${teamAObj.code}`;
        teamAObj.recentRes = `L ${scoreA}-${scoreB} vs ${teamBObj.code}`;
      } else {
        teamAObj.d += 1;
        teamAObj.pts += 1;
        teamBObj.d += 1;
        teamBObj.pts += 1;
        teamAObj.recentRes = `D ${scoreA}-${scoreB} vs ${teamBObj.code}`;
        teamBObj.recentRes = `D ${scoreB}-${scoreA} vs ${teamAObj.code}`;
      }

      teamAObj.gd = teamAObj.gf - teamAObj.ga;
      teamBObj.gd = teamBObj.gf - teamBObj.ga;
    }
  });

  // 4. Sort each pool table by official FIH criteria: Points -> Wins -> Goal Diff -> Goals For
  for (const gender of ["Men", "Women"]) {
    for (const poolName of Object.keys(standings[gender])) {
      standings[gender][poolName].sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.w !== a.w) return b.w - a.w;
        if (b.gd !== a.gd) return b.gd - a.gd;
        return b.gf - a.gf;
      });
    }
  }

  return standings;
}
