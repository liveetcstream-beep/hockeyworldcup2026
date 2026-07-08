const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\\\Users\\\\hp\\\\AndroidStudioProjects\\\\Event Blogging\\\\src\\\\app';

const statsData = {
  "india": { titles: "1 (1975)", mRank: "#5", wRank: "#9", venue: "Wagener Stadium, Amstelveen" },
  "pakistan": { titles: "4 (1971, 1978, 1982, 1994)", mRank: "#15", wRank: "N/A", venue: "Wagener Stadium, Amstelveen" },
  "belgium": { titles: "1 (2018)", mRank: "#2", wRank: "#4", venue: "Belfius Hockey Arena, Wavre" },
  "germany": { titles: "3 (2002, 2006, 2023)", mRank: "#4", wRank: "#3", venue: "Belfius Hockey Arena, Wavre" },
  "netherlands": { titles: "3 (1973, 1990, 1998)", mRank: "#1", wRank: "#1", venue: "Wagener Stadium, Amstelveen" },
  "australia": { titles: "3 (1986, 2010, 2014)", mRank: "#3", wRank: "#5", venue: "Belfius Hockey Arena, Wavre" },
  "england": { titles: "0 (Best: Silver 1986)", mRank: "#6", wRank: "#7", venue: "Wagener Stadium, Amstelveen" },
  "argentina": { titles: "0 (Best: Bronze 2014)", mRank: "#7", wRank: "#2", venue: "Wagener & Belfius" },
  "spain": { titles: "0 (Best: Silver 1971)", mRank: "#8", wRank: "#8", venue: "Belfius Hockey Arena, Wavre" },
  "malaysia": { titles: "0 (Best: 4th)", mRank: "#13", wRank: "N/A", venue: "Belfius Hockey Arena, Wavre" },
  "france": { titles: "0 (Best: 7th)", mRank: "#9", wRank: "#20", venue: "Belfius Hockey Arena, Wavre" },
  "ireland": { titles: "0", mRank: "#11", wRank: "#12", venue: "Belfius Hockey Arena, Wavre" },
  "south-africa": { titles: "0", mRank: "#14", wRank: "#20", venue: "Belfius Hockey Arena, Wavre" },
  "new-zealand": { titles: "0", mRank: "#10", wRank: "#11", venue: "Wagener Stadium, Amstelveen" },
  "chile": { titles: "0", mRank: "#22", wRank: "#14", venue: "Wagener Stadium, Amstelveen" },
  "wales": { titles: "0", mRank: "#16", wRank: "#25", venue: "Wagener Stadium, Amstelveen" }
};

Object.keys(statsData).forEach(slug => {
  const pagePath = path.join(srcDir, `hockey-world-cup-2026-schedule-${slug}`, 'page.js');
  if (!fs.existsSync(pagePath)) return;
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  const d = statsData[slug];

  // Fix Titles
  content = content.replace(/\{ icon: "🏆", label: "World Cup Titles", value: "[^"]*" \}/, `{ icon: "🏆", label: "World Cup Titles", value: "${d.titles}" }`);
  
  // Fix Men Rank
  content = content.replace(/\{ icon: "🌍", label: "FIH World Ranking \(Men\)", value: "[^"]*" \}/, `{ icon: "🌍", label: "FIH World Ranking (Men)", value: "${d.mRank}" }`);
  
  // Fix Women Rank
  content = content.replace(/\{ icon: "👩", label: "FIH Ranking \(Women\)", value: "[^"]*" \}/, `{ icon: "👩", label: "FIH Ranking (Women)", value: "${d.wRank}" }`);
  content = content.replace(/\{ icon: "👩", label: "FIH Ranking \(Women\)", value: "[^"]*" \}/, `{ icon: "👩", label: "FIH Ranking (Women)", value: "${d.wRank}" }`);
  
  // Fix Venue
  content = content.replace(/\{ icon: "🏟️", label: "Venue", value: "[^"]*" \}/, `{ icon: "🏟️", label: "Venue", value: "${d.venue}" }`);
  
  // Wait, the icons may have been modified or maybe emojis. Let's do a more robust regex if they are missing.
  // Actually, they exactly match what we saw in the file:
  // { icon: "🏆", label: "World Cup Titles", value: "1 (1975)" }
  // { icon: "🌍", label: "FIH World Ranking (Men)", value: "#5" }
  // { icon: "👩", label: "FIH Ranking (Women)", value: "#6" }
  // { icon: "🏟️", label: "Venue", value: "Wagener Stadium, Amstelveen" }

  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`Updated stats for ${slug}`);
});
