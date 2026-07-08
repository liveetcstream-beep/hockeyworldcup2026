const fs = require('fs');
const path = require('path');

const headerPath = path.join('c:', 'Users', 'hp', 'AndroidStudioProjects', 'Event Blogging', 'src', 'app', 'components', 'Header.js');
let content = fs.readFileSync(headerPath, 'utf8');

// Replace mojibake buttons
content = content.replace(/â˜°/g, '&#9776;'); // Hamburger
content = content.replace(/âœ•/g, '&#10005;'); // Close

// Replace Field Hockey Emoji with HTML entity in both logos
content = content.replace(/<span>🏑<\/span>/g, '<span dangerouslySetInnerHTML={{ __html: "&#x1F3D1;" }} />');

// Rebuild the mobile drawer links completely
const mobileNavLinks = `        <ul className="mobile-nav-links">
          <li><a href="/" onClick={() => setIsMobileOpen(false)} dangerouslySetInnerHTML={{ __html: "&#x1F3E0; Home" }} /></li>
          
          <li style={{ color: "var(--text-muted)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: "0.8rem 1.5rem 0.3rem", fontWeight: "700", pointerEvents: "none" }}>Team Schedules</li>
          <li><a href="/hockey-world-cup-2026-schedule-india" onClick={() => setIsMobileOpen(false)}>🇮🇳 India Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-pakistan" onClick={() => setIsMobileOpen(false)}>🇵🇰 Pakistan Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-belgium" onClick={() => setIsMobileOpen(false)}>🇧🇪 Belgium Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-germany" onClick={() => setIsMobileOpen(false)}>🇩🇪 Germany Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-netherlands" onClick={() => setIsMobileOpen(false)}>🇳🇱 Netherlands Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-australia" onClick={() => setIsMobileOpen(false)}>🇦🇺 Australia Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-england" onClick={() => setIsMobileOpen(false)}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 England Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-argentina" onClick={() => setIsMobileOpen(false)}>🇦🇷 Argentina Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-spain" onClick={() => setIsMobileOpen(false)}>🇪🇸 Spain Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-malaysia" onClick={() => setIsMobileOpen(false)}>🇲🇾 Malaysia Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-france" onClick={() => setIsMobileOpen(false)}>🇫🇷 France Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-ireland" onClick={() => setIsMobileOpen(false)}>🇮🇪 Ireland Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-south-africa" onClick={() => setIsMobileOpen(false)}>🇿🇦 South Africa Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-new-zealand" onClick={() => setIsMobileOpen(false)}>🇳🇿 New Zealand Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-chile" onClick={() => setIsMobileOpen(false)}>🇨🇱 Chile Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-wales" onClick={() => setIsMobileOpen(false)}>🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales Schedule</a></li>

          <li style={{ color: "var(--text-muted)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: "0.8rem 1.5rem 0.3rem", fontWeight: "700", pointerEvents: "none" }}>Tournament</li>
          <li><a href="/schedule" onClick={() => setIsMobileOpen(false)}>📅 Full Match Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-groups" onClick={() => setIsMobileOpen(false)}>🏆 All Pool Groups</a></li>
          <li><a href="/format" onClick={() => setIsMobileOpen(false)}>Tournament Format</a></li>
          <li><a href="/points-table" onClick={() => setIsMobileOpen(false)}>Points Table Rules</a></li>
          <li><a href="/teams" onClick={() => setIsMobileOpen(false)}>All Qualified Nations</a></li>
          <li><a href="/h2h" onClick={() => setIsMobileOpen(false)}>Head-to-Head Records</a></li>
          
          <li style={{ color: "var(--text-muted)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: "0.8rem 1.5rem 0.3rem", fontWeight: "700", pointerEvents: "none" }}>Live & Info</li>
          <li><a href="/live-scores" onClick={() => setIsMobileOpen(false)} dangerouslySetInnerHTML={{ __html: "&#x1F534; Live Scoreboard" }} /></li>
          <li><a href="/venues" onClick={() => setIsMobileOpen(false)}>Stadium Guides</a></li>
          <li><a href="/tickets" onClick={() => setIsMobileOpen(false)}>Tickets & Pricing</a></li>
          <li><a href="/broadcasters" onClick={() => setIsMobileOpen(false)}>Broadcaster Directory</a></li>
          <li><a href="/history" onClick={() => setIsMobileOpen(false)}>Past Winners (1971-2026)</a></li>
          <li><a href="/past-results" onClick={() => setIsMobileOpen(false)}>2023 World Cup Stats</a></li>
        </ul>`;

content = content.replace(/<ul className="mobile-nav-links">[\s\S]*?<\/ul>/, mobileNavLinks);

// Also fix Live Scoreboard in Desktop nav
content = content.replace(/ðŸ”´ Live Scoreboard/g, '<span dangerouslySetInnerHTML={{ __html: "&#x1F534;" }} /> Live Scoreboard');

fs.writeFileSync(headerPath, content, 'utf8');
console.log('Fixed Header.js icons and mobile nav links!');
