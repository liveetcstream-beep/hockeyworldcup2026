const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src/app');

// 1. Fix Header.js
const headerPath = path.join(srcDir, 'components/Header.js');
let headerContent = fs.readFileSync(headerPath, 'utf8');

// Fix logo
headerContent = headerContent.replace(/ðŸ ’/g, '🏑');
headerContent = headerContent.replace(/ðŸ ´ó  §ó  ¢ó  ¥ó  ®ó  §ó  ¿/g, '🏴󠁧󠁢󠁥󠁮󠁧󠁿');

// Insert the 16 team links properly
const teamsData = [
  { slug: 'india', name: 'India', emoji: '🇮🇳' },
  { slug: 'pakistan', name: 'Pakistan', emoji: '🇵🇰' },
  { slug: 'belgium', name: 'Belgium', emoji: '🇧🇪' },
  { slug: 'germany', name: 'Germany', emoji: '🇩🇪' },
  { slug: 'netherlands', name: 'Netherlands', emoji: '🇳🇱' },
  { slug: 'australia', name: 'Australia', emoji: '🇦🇺' },
  { slug: 'england', name: 'England', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { slug: 'argentina', name: 'Argentina', emoji: '🇦🇷' },
  { slug: 'spain', name: 'Spain', emoji: '🇪🇸' },
  { slug: 'malaysia', name: 'Malaysia', emoji: '🇲🇾' },
  { slug: 'france', name: 'France', emoji: '🇫🇷' },
  { slug: 'ireland', name: 'Ireland', emoji: '🇮🇪' },
  { slug: 'south-africa', name: 'South Africa', emoji: '🇿🇦' },
  { slug: 'new-zealand', name: 'New Zealand', emoji: '🇳🇿' },
  { slug: 'chile', name: 'Chile', emoji: '🇨🇱' },
  { slug: 'wales', name: 'Wales', emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' }
];

const headerEntries = teamsData.map(t => 
  `                  <li><a href="/hockey-world-cup-2026-schedule-${t.slug}">${t.emoji} ${t.name} Schedule</a></li>`
).join('\n');

const scheduleDropdownHtml = `              {/* Schedule Dropdown */}
              <li className="nav-item-dropdown">
                <span className="dropdown-trigger">
                  Team Schedules 
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
${headerEntries}
                  <li><a href="/schedule">📅 Full Tournament Schedule</a></li>
                </ul>
              </li>`;

// Regex to replace from {/* Schedule Dropdown ... to the end of the </li>
headerContent = headerContent.replace(/\{\/\* Schedule Dropdown[\s\S]*?<\/ul>\s*<\/li>/, scheduleDropdownHtml);
fs.writeFileSync(headerPath, headerContent, 'utf8');


// 2. Fix Hero Section Styles across all 16 pages
const teamPages = teamsData.map(t => `hockey-world-cup-2026-schedule-${t.slug}`);

teamPages.forEach(dir => {
  const pagePath = path.join(srcDir, dir, 'page.js');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    // Remove the custom dark inline style from section
    content = content.replace(/<section className="hero-section" style={{[^}]*}}>/g, '<section className="hero-section">');
    // Also remove any variations
    content = content.replace(/<section className="hero-section" style=\{[^}]*\}>/g, '<section className="hero-section">');
    
    // Make sure we fix any stray mojibake in team pages too
    content = content.replace(/ðŸ ’/g, '🏑');
    content = content.replace(/ðŸ ´ó  §ó  ¢ó  ¥ó  ®ó  §ó  ¿/g, '🏴󠁧󠁢󠁥󠁮󠁧󠁿');
    
    fs.writeFileSync(pagePath, content, 'utf8');
  }
});

// 3. Fix Layout / Global files logo if broken
['layout.js', 'page.js', 'components/Footer.js'].forEach(file => {
  const p = path.join(srcDir, file);
  if (fs.existsSync(p)) {
    let c = fs.readFileSync(p, 'utf8');
    c = c.replace(/ðŸ ’/g, '🏑');
    fs.writeFileSync(p, c, 'utf8');
  }
});

console.log("Fixed everything!");
