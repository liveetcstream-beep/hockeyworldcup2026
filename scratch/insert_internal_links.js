const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../src/app');
const dirs = fs.readdirSync(dirPath);

const targetBlock = '      <main className="sports-container py-12">';
const insertBlock = `
        {/* Full Schedule Internal Link Banner */}
        <div style={{
          background: "linear-gradient(90deg, #c00030 0%, #1e1b4b 100%)",
          borderRadius: "16px",
          padding: "1.5rem",
          marginBottom: "2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          boxShadow: "0 4px 15px rgba(192, 0, 48, 0.15)",
          border: "1px solid rgba(192, 0, 48, 0.2)"
        }}>
          <div>
            <h3 style={{ color: "white", fontSize: "1.2rem", fontWeight: "800", margin: 0 }}>Looking for the Complete Tournament Schedule?</h3>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.9rem", margin: "0.2rem 0 0 0" }}>Get the full timetable, group matches, and local timezone converter for all 16 countries.</p>
          </div>
          <a href="/schedule" style={{
            background: "white",
            color: "#c00030",
            fontWeight: "800",
            padding: "0.75rem 1.5rem",
            borderRadius: "9999px",
            textDecoration: "none",
            fontSize: "0.9rem",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            transition: "all 0.2s ease"
          }}>View Full Schedule</a>
        </div>
`;

let count = 0;
dirs.forEach(dir => {
  if (dir.startsWith('hockey-world-cup-2026-schedule-')) {
    const filePath = path.join(dirPath, dir, 'page.js');
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes(targetBlock) && !content.includes('Full Schedule Internal Link Banner')) {
        content = content.replace(targetBlock, targetBlock + insertBlock);
        fs.writeFileSync(filePath, content, 'utf8');
        count++;
        console.log(`Successfully updated: ${dir}`);
      }
    }
  }
});

console.log(`Finished! Updated ${count} team schedule files with the internal link banner.`);
