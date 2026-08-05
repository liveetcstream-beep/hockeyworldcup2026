const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/news.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace export const with module.exports to import in node
content = content.replace('export const newsArticles =', 'module.exports =');
const newsArticles = eval(content);

const now = new Date('2026-07-18T01:52:38+05:00'); // Simulated local time
const actualNow = new Date(); // Actual machine time
console.log('Target Local Date (July 18, 2026):', now.toDateString());
console.log('Actual Machine Date:', actualNow.toDateString());

console.log('\n--- Published Articles ---');
newsArticles.forEach(art => {
  const artDate = new Date(art.date);
  if (artDate <= actualNow) {
    console.log(`[PUBLISHED] ${art.date} - ${art.title} (slug: ${art.slug})`);
  } else {
    console.log(`[SCHEDULED] ${art.date} - ${art.title} (slug: ${art.slug})`);
  }
});
