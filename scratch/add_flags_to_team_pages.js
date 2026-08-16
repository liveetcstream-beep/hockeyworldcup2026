const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'src', 'app');

const flagMap = {
  "Netherlands": "nl", "South Africa": "za", "India": "in", "Wales": "gb-wls",
  "Belgium": "be", "Malaysia": "my", "Germany": "de", "France": "fr",
  "Australia": "au", "Spain": "es", "Argentina": "ar", "New Zealand": "nz",
  "Chile": "cl", "Ireland": "ie", "Pakistan": "pk", "England": "gb-eng",
  "China": "cn", "United States": "us", "USA": "us", "Scotland": "gb-sct"
};

const flagCodeMapStr = `
const flagCodeMap = {
  "Netherlands": "nl", "South Africa": "za", "India": "in", "Wales": "gb-wls",
  "Belgium": "be", "Malaysia": "my", "Germany": "de", "France": "fr",
  "Australia": "au", "Spain": "es", "Argentina": "ar", "New Zealand": "nz",
  "Chile": "cl", "Ireland": "ie", "Pakistan": "pk", "England": "gb-eng",
  "China": "cn", "United States": "us", "USA": "us", "Scotland": "gb-sct"
};

function getOpponentFlagCode(opponentStr) {
  if (!opponentStr) return "un";
  const clean = opponentStr.replace(/^vs\\s+/i, "").trim();
  return flagCodeMap[clean] || "un";
}
`;

const files = fs.readdirSync(appDir).filter(f => f.startsWith('hockey-world-cup-2026-schedule-'));

console.log(`Found ${files.length} team schedule directories.`);

files.forEach(dir => {
  const filePath = path.join(appDir, dir, 'page.js');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if getOpponentFlagCode is already present
  if (!content.includes('function getOpponentFlagCode')) {
    // Insert flagCodeMapStr before export default
    content = content.replace(/(export\s+default\s+function)/, `${flagCodeMapStr}\n$1`);
  }

  // Update table cells rendering m.opponent
  // Target pattern: <td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>{m.opponent}</td>
  const oldTdPattern = /<td style=\{\{\s*padding:\s*"0\.9rem 1rem",\s*color:\s*"var\(--text-main\)",\s*fontWeight:\s*"600"\s*\}\}>\s*\{m\.opponent\}\s*<\/td>/g;
  
  const newTdReplacement = `<td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <img 
                          src={\`https://flagcdn.com/w40/\${getOpponentFlagCode(m.opponent)}.png\`} 
                          alt="" 
                          style={{ width: "22px", height: "15px", borderRadius: "3px", objectFit: "cover", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} 
                        />
                        <span>{m.opponent}</span>
                      </div>
                    </td>`;

  content = content.replace(oldTdPattern, newTdReplacement);

  // Handle specific cases like Pakistan page where m.opponent had extra derby tag
  const pakistanTdPattern = /<td style=\{\{\s*padding:\s*"0\.9rem 1rem",\s*color:\s*"var\(--text-main\)",\s*fontWeight:\s*"600"\s*\}\}>\s*\{m\.opponent\}\s*(\{m\.type\.includes\("Derby"\)[^}]+\}\})\s*<\/td>/g;
  content = content.replace(pakistanTdPattern, `<td style={{ padding: "0.9rem 1rem", color: "var(--text-main)", fontWeight: "600" }}>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <img 
                          src={\`https://flagcdn.com/w40/\${getOpponentFlagCode(m.opponent)}.png\`} 
                          alt="" 
                          style={{ width: "22px", height: "15px", borderRadius: "3px", objectFit: "cover", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} 
                        />
                        <span>{m.opponent}</span>
                      </div>
                      $1
                    </td>`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${dir}/page.js with flag images.`);
});

console.log('All team schedule pages successfully updated!');
