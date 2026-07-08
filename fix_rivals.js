const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\\\Users\\\\hp\\\\AndroidStudioProjects\\\\Event Blogging\\\\src\\\\app';

const ALL_MATCHES = [
  // Men's matches
  { id: 51, teamA: "India", teamB: "Wales", gender: "Men", pool: "Pool D" },
  { id: 52, teamA: "Germany", teamB: "Malaysia", gender: "Men", pool: "Pool B" },
  { id: 53, teamA: "England", teamB: "Pakistan", gender: "Men", pool: "Pool D" },
  { id: 54, teamA: "Belgium", teamB: "France", gender: "Men", pool: "Pool B" },
  { id: 55, teamA: "Australia", teamB: "Ireland", gender: "Men", pool: "Pool C" },
  { id: 56, teamA: "Spain", teamB: "South Africa", gender: "Men", pool: "Pool C" },
  { id: 57, teamA: "Netherlands", teamB: "New Zealand", gender: "Men", pool: "Pool A" },
  { id: 58, teamA: "Argentina", teamB: "Japan", gender: "Men", pool: "Pool A" },
  { id: 59, teamA: "Pakistan", teamB: "Wales", gender: "Men", pool: "Pool D" },
  { id: 60, teamA: "France", teamB: "Malaysia", gender: "Men", pool: "Pool B" },
  { id: 61, teamA: "India", teamB: "England", gender: "Men", pool: "Pool D" },
  { id: 62, teamA: "Germany", teamB: "Belgium", gender: "Men", pool: "Pool B" },
  { id: 63, teamA: "New Zealand", teamB: "Japan", gender: "Men", pool: "Pool A" },
  { id: 64, teamA: "Spain", teamB: "Australia", gender: "Men", pool: "Pool C" },
  { id: 65, teamA: "Ireland", teamB: "South Africa", gender: "Men", pool: "Pool C" },
  { id: 66, teamA: "Argentina", teamB: "Netherlands", gender: "Men", pool: "Pool A" },
  { id: 67, teamA: "England", teamB: "Wales", gender: "Men", pool: "Pool D" },
  { id: 68, teamA: "Pakistan", teamB: "India", gender: "Men", pool: "Pool D" },
  { id: 69, teamA: "France", teamB: "Germany", gender: "Men", pool: "Pool B" },
  { id: 70, teamA: "Belgium", teamB: "Malaysia", gender: "Men", pool: "Pool B" },
  { id: 71, teamA: "Australia", teamB: "South Africa", gender: "Men", pool: "Pool C" },
  { id: 72, teamA: "New Zealand", teamB: "Argentina", gender: "Men", pool: "Pool A" },
  { id: 73, teamA: "Ireland", teamB: "Spain", gender: "Men", pool: "Pool C" },
  { id: 74, teamA: "Netherlands", teamB: "Japan", gender: "Men", pool: "Pool A" },
  
  // Women's matches
  { id: 1, teamA: "Australia", teamB: "Japan", gender: "Women", pool: "Pool A" },
  { id: 2, teamA: "Germany", teamB: "Scotland", gender: "Women", pool: "Pool B" },
  { id: 3, teamA: "Netherlands", teamB: "Chile", gender: "Women", pool: "Pool A" },
  { id: 4, teamA: "Argentina", teamB: "United States", gender: "Women", pool: "Pool B" },
  { id: 5, teamA: "England", teamB: "South Africa", gender: "Women", pool: "Pool D" },
  { id: 6, teamA: "China", teamB: "India", gender: "Women", pool: "Pool D" },
  { id: 7, teamA: "Belgium", teamB: "New Zealand", gender: "Women", pool: "Pool C" },
  { id: 8, teamA: "Spain", teamB: "Ireland", gender: "Women", pool: "Pool C" },
  { id: 9, teamA: "Chile", teamB: "Japan", gender: "Women", pool: "Pool A" },
  { id: 10, teamA: "United States", teamB: "Scotland", gender: "Women", pool: "Pool B" },
  { id: 11, teamA: "Germany", teamB: "Argentina", gender: "Women", pool: "Pool B" },
  { id: 12, teamA: "Australia", teamB: "Netherlands", gender: "Women", pool: "Pool A" },
  { id: 13, teamA: "New Zealand", teamB: "Ireland", gender: "Women", pool: "Pool C" },
  { id: 14, teamA: "England", teamB: "China", gender: "Women", pool: "Pool D" },
  { id: 15, teamA: "India", teamB: "South Africa", gender: "Women", pool: "Pool D" },
  { id: 16, teamA: "Spain", teamB: "Belgium", gender: "Women", pool: "Pool C" },
  { id: 17, teamA: "Chile", teamB: "Australia", gender: "Women", pool: "Pool A" },
  { id: 18, teamA: "Argentina", teamB: "Scotland", gender: "Women", pool: "Pool B" },
  { id: 19, teamA: "United States", teamB: "Germany", gender: "Women", pool: "Pool B" },
  { id: 20, teamA: "Netherlands", teamB: "Japan", gender: "Women", pool: "Pool A" },
  { id: 21, teamA: "China", teamB: "South Africa", gender: "Women", pool: "Pool D" },
  { id: 22, teamA: "New Zealand", teamB: "Spain", gender: "Women", pool: "Pool C" },
  { id: 23, teamA: "India", teamB: "England", gender: "Women", pool: "Pool D" },
  { id: 24, teamA: "Belgium", teamB: "Ireland", gender: "Women", pool: "Pool C" }
];

const teamsData = [
  { slug: 'india', name: 'India' },
  { slug: 'pakistan', name: 'Pakistan' },
  { slug: 'belgium', name: 'Belgium' },
  { slug: 'germany', name: 'Germany' },
  { slug: 'netherlands', name: 'Netherlands' },
  { slug: 'australia', name: 'Australia' },
  { slug: 'england', name: 'England' },
  { slug: 'argentina', name: 'Argentina' },
  { slug: 'spain', name: 'Spain' },
  { slug: 'malaysia', name: 'Malaysia' },
  { slug: 'france', name: 'France' },
  { slug: 'ireland', name: 'Ireland' },
  { slug: 'south-africa', name: 'South Africa' },
  { slug: 'new-zealand', name: 'New Zealand' },
  { slug: 'chile', name: 'Chile' },
  { slug: 'wales', name: 'Wales' }
];

teamsData.forEach(team => {
  const pagePath = path.join(srcDir, `hockey-world-cup-2026-schedule-${team.slug}`, 'page.js');
  if (!fs.existsSync(pagePath)) return;
  
  let content = fs.readFileSync(pagePath, 'utf8');

  // Find Men's opponents
  const menFixtures = ALL_MATCHES.filter(m => m.gender === 'Men' && (m.teamA === team.name || m.teamB === team.name));
  const mRivals = new Set();
  menFixtures.forEach(m => {
    mRivals.add(m.teamA === team.name ? m.teamB : m.teamA);
  });

  // Find Women's opponents
  const womenFixtures = ALL_MATCHES.filter(m => m.gender === 'Women' && (m.teamA === team.name || m.teamB === team.name));
  const wRivals = new Set();
  womenFixtures.forEach(m => {
    wRivals.add(m.teamA === team.name ? m.teamB : m.teamA);
  });

  let rivalsStr = "";
  if (menFixtures.length > 0) {
    rivalsStr = Array.from(mRivals).join(', ');
  } else if (womenFixtures.length > 0) {
    rivalsStr = Array.from(wRivals).join(', ');
  }

  // Quick Stats replacement
  content = content.replace(/(\{ icon: "⚔️", label: "Pool [A-D] Rivals", value: ")[^"]*(" \})/, `$1${rivalsStr}$2`);

  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`Updated rivals for ${team.slug}: ${rivalsStr}`);
});
