const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'src', 'app');
const files = fs.readdirSync(appDir).filter(f => f.startsWith('hockey-world-cup-2026-schedule-'));

let count = 0;

files.forEach(dir => {
  const pagePath = path.join(appDir, dir, 'page.js');
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Add className="cta-banner-heading" and ensure color is #ffffff
  content = content.replace(
    /<h3 style=\{\{ color: "(white|#ffffff)",/g,
    '<h3 className="cta-banner-heading" style={{ color: "#ffffff",'
  );

  fs.writeFileSync(pagePath, content, 'utf8');
  count++;
});

console.log(`Updated ${count} pages with cta-banner-heading class and #ffffff color.`);
