const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const srcDir = 'c:\\\\Users\\\\hp\\\\AndroidStudioProjects\\\\Event Blogging\\\\src\\\\app';
const publicDir = 'c:\\\\Users\\\\hp\\\\AndroidStudioProjects\\\\Event Blogging\\\\public';

const ALL_MATCHES = [
  // ==================== WOMEN'S TOURNAMENT FIXTURES (Matches 1 to 50) ====================
  { id: 1, date: "August 15, 2026", timeCET: "07:00", teamA: "Australia", flagA: "au", teamB: "Japan", flagB: "jp", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 2, date: "August 15, 2026", timeCET: "08:30", teamA: "Germany", flagA: "de", teamB: "Scotland", flagB: "gb-sct", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 3, date: "August 15, 2026", timeCET: "13:00", teamA: "Netherlands", flagA: "nl", teamB: "Chile", flagB: "cl", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 4, date: "August 15, 2026", timeCET: "14:30", teamA: "Argentina", flagA: "ar", teamB: "United States", flagB: "us", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 5, date: "August 16, 2026", timeCET: "07:00", teamA: "England", flagA: "gb-eng", teamB: "South Africa", flagB: "za", gender: "Women", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 6, date: "August 16, 2026", timeCET: "10:00", teamA: "China", flagA: "cn", teamB: "India", flagB: "in", gender: "Women", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 7, date: "August 16, 2026", timeCET: "14:30", teamA: "Belgium", flagA: "be", teamB: "New Zealand", flagB: "nz", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 8, date: "August 16, 2026", timeCET: "17:30", teamA: "Spain", flagA: "es", teamB: "Ireland", flagB: "ie", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 9, date: "August 17, 2026", timeCET: "06:30", teamA: "Chile", flagA: "cl", teamB: "Japan", flagB: "jp", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 10, date: "August 17, 2026", timeCET: "08:00", teamA: "United States", flagA: "us", teamB: "Scotland", flagB: "gb-sct", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 11, date: "August 17, 2026", timeCET: "14:00", teamA: "Germany", flagA: "de", teamB: "Argentina", flagB: "ar", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 12, date: "August 17, 2026", timeCET: "15:00", teamA: "Australia", flagA: "au", teamB: "Netherlands", flagB: "nl", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 13, date: "August 18, 2026", timeCET: "08:00", teamA: "New Zealand", flagA: "nz", teamB: "Ireland", flagB: "ie", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 14, date: "August 18, 2026", timeCET: "09:30", teamA: "England", flagA: "gb-eng", teamB: "China", flagB: "cn", gender: "Women", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 15, date: "August 18, 2026", timeCET: "12:00", teamA: "India", flagA: "in", teamB: "South Africa", flagB: "za", gender: "Women", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 16, date: "August 18, 2026", timeCET: "17:30", teamA: "Spain", flagA: "es", teamB: "Belgium", flagB: "be", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 17, date: "August 19, 2026", timeCET: "06:30", teamA: "Chile", flagA: "cl", teamB: "Australia", flagB: "au", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 18, date: "August 19, 2026", timeCET: "08:00", teamA: "Argentina", flagA: "ar", teamB: "Scotland", flagB: "gb-sct", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 19, date: "August 19, 2026", timeCET: "11:00", teamA: "United States", flagA: "us", teamB: "Germany", flagB: "de", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 20, date: "August 19, 2026", timeCET: "15:00", teamA: "Netherlands", flagA: "nl", teamB: "Japan", flagB: "jp", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 21, date: "August 20, 2026", timeCET: "06:30", teamA: "China", flagA: "cn", teamB: "South Africa", flagB: "za", gender: "Women", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 22, date: "August 20, 2026", timeCET: "11:00", teamA: "New Zealand", flagA: "nz", teamB: "Spain", flagB: "es", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 23, date: "August 20, 2026", timeCET: "12:00", teamA: "India", flagA: "in", teamB: "England", flagB: "gb-eng", gender: "Women", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 24, date: "August 20, 2026", timeCET: "17:30", teamA: "Belgium", flagA: "be", teamB: "Ireland", flagB: "ie", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  // ==================== MEN'S TOURNAMENT FIXTURES (Matches 51 to 100) ====================
  { id: 51, date: "August 15, 2026", timeCET: "10:00", teamA: "India", flagA: "in", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 52, date: "August 15, 2026", timeCET: "11:30", teamA: "Germany", flagA: "de", teamB: "Malaysia", flagB: "my", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 53, date: "August 15, 2026", timeCET: "16:00", teamA: "England", flagA: "gb-eng", teamB: "Pakistan", flagB: "pk", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 54, date: "August 15, 2026", timeCET: "18:00", teamA: "Belgium", flagA: "be", teamB: "France", flagB: "fr", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 55, date: "August 16, 2026", timeCET: "08:30", teamA: "Australia", flagA: "au", teamB: "Ireland", flagB: "ie", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 56, date: "August 16, 2026", timeCET: "11:30", teamA: "Spain", flagA: "es", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 57, date: "August 16, 2026", timeCET: "13:00", teamA: "Netherlands", flagA: "nl", teamB: "New Zealand", flagB: "nz", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 58, date: "August 16, 2026", timeCET: "16:00", teamA: "Argentina", flagA: "ar", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 59, date: "August 17, 2026", timeCET: "09:30", teamA: "Pakistan", flagA: "pk", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 60, date: "August 17, 2026", timeCET: "11:00", teamA: "France", flagA: "fr", teamB: "Malaysia", flagB: "my", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 61, date: "August 17, 2026", timeCET: "12:00", teamA: "India", flagA: "in", teamB: "England", flagB: "gb-eng", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 62, date: "August 17, 2026", timeCET: "17:30", teamA: "Germany", flagA: "de", teamB: "Belgium", flagB: "be", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 63, date: "August 18, 2026", timeCET: "06:30", teamA: "New Zealand", flagA: "nz", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 64, date: "August 18, 2026", timeCET: "11:00", teamA: "Spain", flagA: "es", teamB: "Australia", flagB: "au", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 65, date: "August 18, 2026", timeCET: "14:00", teamA: "Ireland", flagA: "ie", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 66, date: "August 18, 2026", timeCET: "15:00", teamA: "Argentina", flagA: "ar", teamB: "Netherlands", flagB: "nl", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 67, date: "August 19, 2026", timeCET: "09:30", teamA: "England", flagA: "gb-eng", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 68, date: "August 19, 2026", timeCET: "12:00", teamA: "Pakistan", flagA: "pk", teamB: "India", flagB: "in", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 69, date: "August 19, 2026", timeCET: "14:00", teamA: "France", flagA: "fr", teamB: "Germany", flagB: "de", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 70, date: "August 19, 2026", timeCET: "17:30", teamA: "Belgium", flagA: "be", teamB: "Malaysia", flagB: "my", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 71, date: "August 20, 2026", timeCET: "08:00", teamA: "Australia", flagA: "au", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 72, date: "August 20, 2026", timeCET: "09:30", teamA: "New Zealand", flagA: "nz", teamB: "Argentina", flagB: "ar", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 73, date: "August 20, 2026", timeCET: "14:00", teamA: "Ireland", flagA: "ie", teamB: "Spain", flagB: "es", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 74, date: "August 20, 2026", timeCET: "15:00", teamA: "Netherlands", flagA: "nl", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" }
];

const teamsData = [
  { slug: 'india', name: 'India', emoji: '🇮🇳' },
  { slug: 'pakistan', name: 'Pakistan', emoji: '🇵🇰' },
  { slug: 'belgium', name: 'Belgium', emoji: '🇧🇪' },
  { slug: 'germany', name: 'Germany', emoji: '🇩🇪' },
  { slug: 'netherlands', name: 'Netherlands', emoji: '🇳🇱' },
  { slug: 'australia', name: 'Australia', emoji: '🇦🇺' },
  { slug: 'england', name: 'England', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { slug: 'argentina', name: 'Argentina', emoji: '🇦🇷' },
  { slug: 'spain', name: 'Spain', emoji: '🇪🇸' },
  { slug: 'malaysia', name: 'Malaysia', emoji: '🇲🇾' },
  { slug: 'france', name: 'France', emoji: '🇫🇷' },
  { slug: 'ireland', name: 'Ireland', emoji: '🇮🇪' },
  { slug: 'south-africa', name: 'South Africa', emoji: '🇿🇦' },
  { slug: 'new-zealand', name: 'New Zealand', emoji: '🇳🇿' },
  { slug: 'chile', name: 'Chile', emoji: '🇨🇱' },
  { slug: 'wales', name: 'Wales', emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' }
];

function getEmoji(countryName) {
  const match = teamsData.find(t => t.name === countryName);
  return match ? match.emoji : '🏳️';
}

function timeCETtoIST(cet) {
  let [h, m] = cet.split(':').map(Number);
  h += 4;
  m += 30;
  if (m >= 60) { h += 1; m -= 60; }
  const ampm = h >= 12 && h < 24 ? 'PM' : 'AM';
  let h12 = h % 12;
  if (h12 === 0) h12 = 12;
  const ms = m.toString().padStart(2, '0');
  return `~${h12}:${ms} ${ampm} IST`;
}

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

teamsData.forEach(team => {
  const pagePath = path.join(srcDir, `hockey-world-cup-2026-schedule-${team.slug}`, 'page.js');
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Filter Men matches
  const menFixtures = ALL_MATCHES.filter(m => m.gender === 'Men' && (m.teamA === team.name || m.teamB === team.name));
  const menPool = menFixtures.length > 0 ? menFixtures[0].pool : "Not Participating";

  let menArrayStr = "[\n";
  const mRivals = new Set();
  menFixtures.forEach(m => {
    const opp = m.teamA === team.name ? m.teamB : m.teamA;
    mRivals.add(opp);
    menArrayStr += `    { date: "${m.date}", time: "${timeCETtoIST(m.timeCET)}", opponent: "${getEmoji(opp)} ${opp}", pool: "${m.pool}", venue: "${m.venue.replace(', Amstelveen (NED)', '').replace(', Wavre (BEL)', '')}", type: "Pool Stage" },\n`;
  });
  if (menFixtures.length > 0) {
    menArrayStr += `    { date: "Aug 22-24, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },\n`;
    menArrayStr += `    { date: "Aug 27-28, 2026", time: "TBD", opponent: "Semi-Final (if qualified)", pool: "–", venue: "TBD", type: "Knockout" },\n`;
  }
  menArrayStr += "  ]";

  // Filter Women matches
  const womenFixtures = ALL_MATCHES.filter(m => m.gender === 'Women' && (m.teamA === team.name || m.teamB === team.name));
  const womenPool = womenFixtures.length > 0 ? womenFixtures[0].pool : "Not Participating";

  let womenArrayStr = "[\n";
  const wRivals = new Set();
  womenFixtures.forEach(m => {
    const opp = m.teamA === team.name ? m.teamB : m.teamA;
    wRivals.add(opp);
    womenArrayStr += `    { date: "${m.date}", time: "${timeCETtoIST(m.timeCET)}", opponent: "${getEmoji(opp)} ${opp}", pool: "${m.pool}", venue: "${m.venue.replace(', Amstelveen (NED)', '').replace(', Wavre (BEL)', '')}", type: "Pool Stage" },\n`;
  });
  if (womenFixtures.length > 0) {
    womenArrayStr += `    { date: "Aug 21-23, 2026", time: "TBD", opponent: "Second Stage", pool: "Group E/F", venue: "TBD", type: "Second Stage" },\n`;
  }
  womenArrayStr += "  ]";

  // Replace menMatches and womenMatches arrays precisely
  content = content.replace(/const menMatches = \[\s*\{[\s\S]*?\s*\];/g, `const menMatches = ${menArrayStr};`);
  content = content.replace(/const womenMatches = \[\s*\{[\s\S]*?\s*\];/g, `const womenMatches = ${womenArrayStr};`);

  // Fix Men's <h2>
  content = content.replace(/<h2([^>]*)>[^<]*Men's Schedule [—\-][^<]*<\/h2>/, `<h2$1>\n            ${team.emoji} ${team.name} Men's Schedule — ${menPool}\n          </h2>`);

  // Fix Women's <h2>
  content = content.replace(/<h2([^>]*)>[^<]*Women's Schedule [—\-][^<]*<\/h2>/, `<h2$1>\n            ${team.emoji} ${team.name} Women's Schedule — ${womenPool}\n          </h2>`);

  // Fix Hero Pool Details
  content = content.replace(/<p className="hero-subtitle">🏑 Pool [A-D] —[^<]*<\/p>/, `<p className="hero-subtitle">🏑 ${menPool !== "Not Participating" ? menPool : womenPool} — Official Schedule</p>`);

  // Fix "Pool Rivals" Quick Stats Box
  const rivals = [...new Set([...Array.from(mRivals), ...Array.from(wRivals)])].join(', ');
  content = content.replace(/\{ icon: "⚔️", label: "Pool .*? Rivals", value: "[^"]*" \}/, `{ icon: "⚔️", label: "${menPool !== "Not Participating" ? menPool : womenPool} Rivals", value: "${rivals}" }`);

  // Fix PDF Download link dynamically per team
  content = content.replace(/href="\/schedule\.pdf"/g, `href="/schedule-${team.slug}.pdf"`);

  fs.writeFileSync(pagePath, content, 'utf8');

  // ============== GENERATE PDF =================
  const pdfPath = path.join(publicDir, `schedule-${team.slug}.pdf`);
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
  const stream = fs.createWriteStream(pdfPath);
  doc.pipe(stream);

  doc.fontSize(24).fillColor('#0a1428').text(`Hockey World Cup 2026`, { align: 'center' });
  doc.fontSize(16).fillColor('#c00030').text(`${team.name} Official Match Schedule`, { align: 'center' });
  doc.moveDown(2);

  if (menFixtures.length > 0) {
    doc.fontSize(14).fillColor('#0a1428').text(`${team.name} Men's Fixtures (${menPool})`, { underline: true });
    doc.moveDown(0.5);
    menFixtures.forEach(m => {
      const opp = m.teamA === team.name ? m.teamB : m.teamA;
      doc.fontSize(11).fillColor('#333333').text(`${m.date} | ${m.timeCET} CET | vs ${opp} | ${m.venue}`);
      doc.moveDown(0.2);
    });
    doc.moveDown(2);
  }

  if (womenFixtures.length > 0) {
    doc.fontSize(14).fillColor('#0a1428').text(`${team.name} Women's Fixtures (${womenPool})`, { underline: true });
    doc.moveDown(0.5);
    womenFixtures.forEach(m => {
      const opp = m.teamA === team.name ? m.teamB : m.teamA;
      doc.fontSize(11).fillColor('#333333').text(`${m.date} | ${m.timeCET} CET | vs ${opp} | ${m.venue}`);
      doc.moveDown(0.2);
    });
  }

  doc.moveDown(3);
  doc.fontSize(10).fillColor('#888888').text('Downloaded from HockeyWorldCup2026Schedule.com', { align: 'center' });

  doc.end();

  console.log(`Successfully updated arrays & PDF for ${team.name}`);
});
