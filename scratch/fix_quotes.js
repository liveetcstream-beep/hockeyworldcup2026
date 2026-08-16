const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'src', 'app');

const files = fs.readdirSync(appDir).filter(f => f.startsWith('hockey-world-cup-2026-schedule-'));

files.forEach(dir => {
  const pagePath = path.join(appDir, dir, 'page.js');
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Fix Women"s -> Women's
  content = content.replace(/Women"s/g, "Women's");
  content = content.replace(/men"s/g, "men's");

  fs.writeFileSync(pagePath, content, 'utf8');
});

console.log('Fixed quotes in schedule pages.');
