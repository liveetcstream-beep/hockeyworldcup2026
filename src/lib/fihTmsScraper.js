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

      // Extract match panels using regex parsing (fast & dependency-free)
      const panelRegex = /<div class="panel panel-default\s*([^">]*)"[\s\S]*?<a href="https:\/\/tms\.fih\.ch\/matches\/(\d+)"><b>([A-Z]{3})\s*-\s*([A-Z]{3})<\/a><\/b>[\s\S]*?<b>(\d+\s*-\s*\d+)<\/b>([\s\S]*?)<\/div>\s*<\/div>/gi;

      let match;
      while ((match = panelRegex.exec(html)) !== null) {
        const extraClasses = match[1] || "";
        const matchId = match[2];
        const teamCodeA = match[3];
        const teamCodeB = match[4];
        const scoreStr = match[5];
        const detailsBlock = match[6] || "";

        const [scoreA, scoreB] = scoreStr.split("-").map((s) => parseInt(s.trim(), 10));

        const teamAInfo = TEAM_MAP[teamCodeA] || { name: teamCodeA, flag: teamCodeA.toLowerCase() };
        const teamBInfo = TEAM_MAP[teamCodeB] || { name: teamCodeB, flag: teamCodeB.toLowerCase() };

        let status = "FINAL";
        if (extraClasses.includes("panel-live")) {
          status = "LIVE";
        } else if (extraClasses.includes("panel-future")) {
          status = "UPCOMING";
        }

        matches.push({
          id: parseInt(matchId, 10),
          tmsId: matchId,
          status,
          match: `${teamAInfo.name} vs ${teamBInfo.name}`,
          gender: `${item.gender}'s World Cup`,
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
