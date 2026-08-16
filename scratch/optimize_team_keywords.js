const fs = require('fs');
const path = require('path');

const teamMap = {
  'argentina': 'Argentina',
  'australia': 'Australia',
  'belgium': 'Belgium',
  'chile': 'Chile',
  'china': 'China',
  'england': 'England',
  'france': 'France',
  'germany': 'Germany',
  'india': 'India',
  'ireland': 'Ireland',
  'japan': 'Japan',
  'malaysia': 'Malaysia',
  'netherlands': 'Netherlands',
  'new-zealand': 'New Zealand',
  'pakistan': 'Pakistan',
  'scotland': 'Scotland',
  'south-africa': 'South Africa',
  'spain': 'Spain',
  'usa': 'USA',
  'wales': 'Wales'
};

const appDir = path.join(__dirname, '..', 'src', 'app');

Object.keys(teamMap).forEach(slug => {
  const teamName = teamMap[slug];
  const pagePath = path.join(appDir, `hockey-world-cup-2026-schedule-${slug}`, 'page.js');
  
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Fix double colon or extra spaces in description
  content = content.replace(/Hockey World Cup 2026 Schedule ([A-Za-z\s]+):\s*:\s*/g, 'Hockey World Cup 2026 Schedule $1: ');
  content = content.replace(/Hockey World Cup 2026 Schedule ([A-Za-z\s]+):\s*Official\s+/g, 'Hockey World Cup 2026 Schedule $1: ');

  fs.writeFileSync(pagePath, content, 'utf8');
});

console.log('Descriptions cleaned up successfully.');
