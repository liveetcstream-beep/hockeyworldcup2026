const TEAM_MAP = {
  "AUS": { name: "Australia", flag: "au" },
  "JPN": { name: "Japan", flag: "jp" },
  "GER": { name: "Germany", flag: "de" },
  "SCO": { name: "Scotland", flag: "gb-sct" },
  "NED": { name: "Netherlands", flag: "nl" },
  "CHI": { name: "Chile", flag: "cl" },
  "ARG": { name: "Argentina", flag: "ar" },
  "USA": { name: "USA", flag: "us" },
  "ENG": { name: "England", flag: "gb-eng" },
  "RSA": { name: "South Africa", flag: "za" },
  "CHN": { name: "China", flag: "cn" },
  "IND": { name: "India", flag: "in" },
  "BEL": { name: "Belgium", flag: "be" },
  "NZL": { name: "New Zealand", flag: "nz" },
  "ESP": { name: "Spain", flag: "es" },
  "IRL": { name: "Ireland", flag: "ie" },
  "IE":  { name: "Ireland", flag: "ie" },
  "PAK": { name: "Pakistan", flag: "pk" },
  "WAL": { name: "Wales", flag: "gb-wls" },
  "FRA": { name: "France", flag: "fr" },
  "MAS": { name: "Malaysia", flag: "my" }
};

export async function fetchFIHTMSLiveScores() {
  const matches = [];
  const urls = [
    { url: "https://tms.fih.ch/competitions/1867/matches", gender: "Women" },
    { url: "https://tms.fih.ch/competitions/1866/matches", gender: "Men" }
  ];

  for (const item of urls) {
    try {
      const res = await fetch(item.url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
        },
        cache: "no-store"
      });

      if (!res.ok) continue;
      const html = await res.text();

      // Extract all match panels from FIH TMS HTML
      const panelChunkRegex = /<div class="panel panel-default\s*([^">]*)">[\s\S]*?<div class="panel-body"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;

      let chunkMatch;
      while ((chunkMatch = panelChunkRegex.exec(html)) !== null) {
        const extraClasses = chunkMatch[1] || "";
        const bodyHtml = chunkMatch[2] || "";

        // Extract match link and team codes
        const matchInfoRegex = /<a href="https:\/\/tms\.fih\.ch\/matches\/(\d+)"><b>([A-Z]{3})\s*-\s*([A-Z]{3})<\/a><\/b>/i;
        const infoMatch = matchInfoRegex.exec(bodyHtml);
        if (!infoMatch) continue;

        const matchId = infoMatch[1];
        const teamCodeA = infoMatch[2];
        const teamCodeB = infoMatch[3];

        const teamAInfo = TEAM_MAP[teamCodeA] || { name: teamCodeA, flag: teamCodeA.toLowerCase() };
        const teamBInfo = TEAM_MAP[teamCodeB] || { name: teamCodeB, flag: teamCodeB.toLowerCase() };

        let status = "FINAL";
        if (extraClasses.includes("panel-live")) {
          status = "LIVE";
        } else if (extraClasses.includes("panel-future")) {
          status = "UPCOMING";
        }

        // Extract score e.g. <b>2 - 0</b>
        let scoreA = 0;
        let scoreB = 0;
        const scoreRegex = /<b>(\d+)\s*-\s*(\d+)<\/b>/i;
        const scoreMatch = scoreRegex.exec(bodyHtml);
        if (scoreMatch) {
          scoreA = parseInt(scoreMatch[1], 10);
          scoreB = parseInt(scoreMatch[2], 10);
        }

        // Extract pool designation e.g. <BR>\s*A\s*<BR>
        let pool = "";
        const poolRegex = /<BR>\s*([ABCD])\s*<BR>/i;
        const poolMatch = poolRegex.exec(bodyHtml);
        if (poolMatch) {
          pool = `Pool ${poolMatch[1].toUpperCase()} (${item.gender})`;
        }

        matches.push({
          id: parseInt(matchId, 10),
          tmsId: matchId,
          status,
          match: `${teamAInfo.name} vs ${teamBInfo.name}`,
          gender: `${item.gender}'s World Cup`,
          pool: pool || `${item.gender}'s Tournament`,
          scoreA,
          scoreB,
          teamA: teamAInfo.name,
          flagA: teamAInfo.flag,
          teamB: teamBInfo.name,
          flagB: teamBInfo.flag,
          tmsUrl: `https://tms.fih.ch/matches/${matchId}`,
          source: "FIH TMS Official Stream"
        });
      }
    } catch (err) {
      console.error(`Error scraping FIH TMS URL ${item.url}:`, err);
    }
  }

  return matches;
}
