const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\\\Users\\\\hp\\\\AndroidStudioProjects\\\\Event Blogging\\\\src\\\\app';

const teamsData = [
  'pakistan', 'belgium', 'germany', 'netherlands', 'australia', 'england', 
  'argentina', 'spain', 'malaysia', 'france', 'ireland', 'south-africa', 
  'new-zealand', 'chile', 'wales'
];

teamsData.forEach(slug => {
  const pagePath = path.join(srcDir, `hockey-world-cup-2026-schedule-${slug}`, 'page.js');
  if (!fs.existsSync(pagePath)) return;
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Fix the canonical and OG urls
  content = content.replace(/canonical: `\$\{BASE\}\/hockey-world-cup-2026-schedule-india`,/g, `canonical: \`\$\{BASE\}/hockey-world-cup-2026-schedule-${slug}\`,`);
  content = content.replace(/url: `\$\{BASE\}\/hockey-world-cup-2026-schedule-india`,/g, `url: \`\$\{BASE\}/hockey-world-cup-2026-schedule-${slug}\`,`);
  
  // Also check if any Internal Links at the bottom (like the "Germany vs Pakistan H2H") still say "India" incorrectly
  // e.g. { href: "/h2h", label: "⚔️ Germany vs Pakistan H2H" }, (wait, my original script didn't modify internal links properly, let's see)
  
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`Updated SEO URLs for ${slug}`);
});
