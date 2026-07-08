const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src/app');

const moves = [
  { old: 'india-hockey-world-cup-2026/page.js', new: 'hockey-world-cup-2026-schedule-india/page.js' },
  { old: 'pakistan-hockey-world-cup-2026/page.js', new: 'hockey-world-cup-2026-schedule-pakistan/page.js' },
  { old: 'belgium-hockey-world-cup-2026/page.js', new: 'hockey-world-cup-2026-schedule-belgium/page.js' }
];

moves.forEach(m => {
  const oldPath = path.join(srcDir, m.old);
  const newPath = path.join(srcDir, m.new);
  if (fs.existsSync(oldPath)) {
    const dir = path.dirname(newPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(oldPath, newPath);
  }
});

const filesToUpdate = [
  'components/Header.js',
  'teams/page.js',
  'sitemap.js',
  'hockey-world-cup-2026-groups/page.js',
  'page.js',
  'hockey-world-cup-2026-schedule-india/page.js',
  'hockey-world-cup-2026-schedule-pakistan/page.js',
  'hockey-world-cup-2026-schedule-belgium/page.js'
];

filesToUpdate.forEach(relPath => {
  const fullPath = path.join(srcDir, relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/india-hockey-world-cup-2026/g, 'hockey-world-cup-2026-schedule-india');
    content = content.replace(/pakistan-hockey-world-cup-2026/g, 'hockey-world-cup-2026-schedule-pakistan');
    content = content.replace(/belgium-hockey-world-cup-2026/g, 'hockey-world-cup-2026-schedule-belgium');
    fs.writeFileSync(fullPath, content, 'utf8');
  }
});

console.log("Fixes applied successfully.");
