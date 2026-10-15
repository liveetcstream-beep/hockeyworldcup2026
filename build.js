// build.js — deploy-time trust-signal patches for Cozy Plate Recipes.
// Applies the real-author byline to all article pages at every Vercel build.
// Idempotent: re-running changes nothing (string replacements only match the old values).
const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'posts');
let changed = 0;

for (const f of fs.readdirSync(postsDir)) {
  if (!f.endsWith('.html')) continue;
  const p = path.join(postsDir, f);
  let h = fs.readFileSync(p, 'utf8');
  const orig = h;
  // JSON-LD: generic Organization author -> real Person author
  h = h.split('"author": { "@type": "Organization", "name": "Cozy Plate Recipes", "url": "https://hockeyworldcup2026schedule.com" }')
       .join('"author": { "@type": "Person", "name": "Muhammad Bilal", "url": "https://hockeyworldcup2026schedule.com/about-us" }');
  // Visible byline: editorial team -> real person
  h = h.split('<div class="author-avatar-md">CP</div>')
       .join('<div class="author-avatar-md">MB</div>');
  h = h.split('<span>Cozy Plate Recipes Editorial Team</span>')
       .join('<span>Muhammad Bilal</span>');
  if (h !== orig) {
    fs.writeFileSync(p, h);
    changed++;
  }
}

console.log(`[build] author-byline patches applied to ${changed} article(s)`);
