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
  { id: 54, date: "August 15, 2026", timeCET: "17:30", teamA: "Belgium", flagA: "be", teamB: "France", flagB: "fr", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 55, date: "August 16, 2026", timeCET: "08:30", teamA: "Australia", flagA: "au", teamB: "Ireland", flagB: "ie", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 56, date: "August 16, 2026", timeCET: "11:30", teamA: "Spain", flagA: "es", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 57, date: "August 16, 2026", timeCET: "13:00", teamA: "Netherlands", flagA: "nl", teamB: "New Zealand", flagB: "nz", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 58, date: "August 16, 2026", timeCET: "16:00", teamA: "Argentina", flagA: "ar", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 59, date: "August 17, 2026", timeCET: "09:30", teamA: "Pakistan", flagA: "pk", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 60, teamA: "France", teamB: "Malaysia", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)", timeCET: "11:00", date: "August 17, 2026" },
  { id: 61, date: "August 17, 2026", timeCET: "12:30", teamA: "India", flagA: "in", teamB: "England", flagB: "gb-eng", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 62, date: "August 17, 2026", timeCET: "17:00", teamA: "Germany", flagA: "de", teamB: "Belgium", flagB: "be", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 63, date: "August 18, 2026", timeCET: "14:00", teamA: "New Zealand", flagA: "nz", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 64, date: "August 18, 2026", timeCET: "14:30", teamA: "Spain", flagA: "es", teamB: "Australia", flagB: "au", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 65, date: "August 18, 2026", timeCET: "16:00", teamA: "Ireland", flagA: "ie", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 66, date: "August 18, 2026", timeCET: "17:00", teamA: "Argentina", flagA: "ar", teamB: "Netherlands", flagB: "nl", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 67, date: "August 19, 2026", timeCET: "12:30", teamA: "England", flagA: "gb-eng", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 68, date: "August 19, 2026", timeCET: "14:00", teamA: "Pakistan", flagA: "pk", teamB: "India", flagB: "in", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 69, date: "August 19, 2026", timeCET: "14:30", teamA: "France", flagA: "fr", teamB: "Germany", flagB: "de", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 70, date: "August 19, 2026", timeCET: "17:30", teamA: "Belgium", flagA: "be", teamB: "Malaysia", flagB: "my", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 71, date: "August 20, 2026", timeCET: "08:00", teamA: "Australia", flagA: "au", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 72, date: "August 20, 2026", timeCET: "14:00", teamA: "New Zealand", flagA: "nz", teamB: "Argentina", flagB: "ar", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 73, date: "August 20, 2026", timeCET: "14:30", teamA: "Ireland", flagA: "ie", teamB: "Spain", flagB: "es", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 74, date: "August 20, 2026", timeCET: "15:00", teamA: "Netherlands", flagA: "nl", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" }
];

const teams = [
  { name: "India", slug: "india", emoji: "🇮🇳" },
  { name: "Pakistan", slug: "pakistan", emoji: "🇵🇰" },
  { name: "Belgium", slug: "belgium", emoji: "🇧🇪" },
  { name: "Germany", slug: "germany", emoji: "🇩🇪" },
  { name: "Netherlands", slug: "netherlands", emoji: "🇳🇱" },
  { name: "Australia", slug: "australia", emoji: "🇦🇺" },
  { name: "England", slug: "england", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { name: "Argentina", slug: "argentina", emoji: "🇦🇷" },
  { name: "Spain", slug: "spain", emoji: "🇪🇸" },
  { name: "Malaysia", slug: "malaysia", emoji: "🇲🇾" },
  { name: "France", slug: "france", emoji: "🇫🇷" },
  { name: "Ireland", slug: "ireland", emoji: "🇮🇪" },
  { name: "South Africa", slug: "south-africa", emoji: "🇿🇦" },
  { name: "New Zealand", slug: "new-zealand", emoji: "🇳🇿" },
  { name: "Chile", slug: "chile", emoji: "🇨🇱" },
  { name: "Wales", slug: "wales", emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" }
];

function drawTable(doc, startY, headers, rows) {
  const colWidths = [110, 110, 75, 200];
  
  // Header background
  doc.rect(50, startY, 495, 25).fill('#0f172a');
  
  // Header text
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(10);
  let currentX = 55;
  headers.forEach((h, i) => {
    doc.text(h, currentX, startY + 8, { width: colWidths[i], lineBreak: false });
    currentX += colWidths[i];
  });
  
  let currentY = startY + 25;
  
  rows.forEach((row, rowIndex) => {
    // Row background (alternate)
    if (rowIndex % 2 === 1) {
      doc.rect(50, currentY, 495, 25).fill('#f8fafc');
    }
    
    // Draw row content
    currentX = 55;
    row.forEach((val, i) => {
      if (i === 1) {
        doc.fillColor('#c00030').font('Helvetica-Bold');
      } else {
        doc.fillColor('#333333').font('Helvetica');
      }
      doc.fontSize(9).text(val, currentX, currentY + 8, { width: colWidths[i] - 5, lineBreak: false });
      currentX += colWidths[i];
    });
    
    // Bottom border line
    doc.strokeColor('#e2e8f0').lineWidth(0.5).moveTo(50, currentY + 25).lineTo(545, currentY + 25).stroke();
    currentY += 25;
  });
  
  return currentY;
}

teams.forEach(team => {
  const pagePath = path.join(srcDir, `hockey-world-cup-2026-schedule-${team.slug}`, 'page.js');
  if (!fs.existsSync(pagePath)) return;

  const menFixtures = ALL_MATCHES.filter(m => m.gender === "Men" && (m.teamA === team.name || m.teamB === team.name));
  const womenFixtures = ALL_MATCHES.filter(m => m.gender === "Women" && (m.teamA === team.name || m.teamB === team.name));

  // ============== GENERATE PREMIUM DESIGN PDF =================
  const pdfPath = path.join(publicDir, `schedule-${team.slug}.pdf`);
  const doc = new PDFDocument({ size: 'A4', margin: 40 });
  const stream = fs.createWriteStream(pdfPath);
  doc.pipe(stream);

  // Top Banner Background
  doc.rect(40, 40, 515, 80).fill('#0f172a');
  doc.rect(40, 120, 515, 4).fill('#c00030');

  // Title Text inside Banner
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(20).text('FIH HOCKEY WORLD CUP 2026', 60, 58);
  doc.fillColor('#94a3b8').font('Helvetica').fontSize(11).text(`OFFICIAL FIH TOURNAMENT SCHEDULE - ${team.name.toUpperCase()}`, 60, 85);

  let currentY = 150;

  if (menFixtures.length > 0) {
    doc.fillColor('#0f172a').font('Helvetica-Bold').fontSize(14).text(`${team.name} Men's Match Fixtures`, 50, currentY);
    currentY += 22;

    const headers = ["Date", "Opponent", "Time (CET)", "Venue"];
    const rows = menFixtures.map(m => {
      const opp = m.teamA === team.name ? m.teamB : m.teamA;
      // Shorten long venue names
      const ven = m.venue.includes("Amstelveen") ? "Wagener Stadium, Amstelveen" : "Belfius Arena, Wavre";
      return [m.date, `vs ${opp}`, m.timeCET, ven];
    });

    currentY = drawTable(doc, currentY, headers, rows);
    currentY += 30;
  }

  if (womenFixtures.length > 0) {
    // Check if we will overflow the page
    if (currentY > 550) {
      doc.addPage();
      currentY = 50;
    }
    
    doc.fillColor('#0f172a').font('Helvetica-Bold').fontSize(14).text(`${team.name} Women's Match Fixtures`, 50, currentY);
    currentY += 22;

    const headers = ["Date", "Opponent", "Time (CET)", "Venue"];
    const rows = womenFixtures.map(m => {
      const opp = m.teamA === team.name ? m.teamB : m.teamA;
      const ven = m.venue.includes("Amstelveen") ? "Wagener Stadium, Amstelveen" : "Belfius Arena, Wavre";
      return [m.date, `vs ${opp}`, m.timeCET, ven];
    });

    currentY = drawTable(doc, currentY, headers, rows);
  }

  // Draw Footer
  const pageHeight = doc.page.height;
  doc.strokeColor('#cbd5e1').lineWidth(1).moveTo(50, pageHeight - 65).lineTo(545, pageHeight - 65).stroke();
  doc.fillColor('#64748b').font('Helvetica').fontSize(8.5).text('Downloaded from HockeyWorldCup2026Schedule.com | Official Fan Resource', 50, pageHeight - 50, { align: 'center' });

  doc.end();

  console.log(`Generated premium PDF for ${team.name}`);
});
