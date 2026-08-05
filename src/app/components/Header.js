"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isTeamsMobileOpen, setIsTeamsMobileOpen] = useState(false);

  const teamsList = [
    { name: "India", slug: "india", flag: "🇮🇳" },
    { name: "Pakistan", slug: "pakistan", flag: "🇵🇰" },
    { name: "Belgium", slug: "belgium", flag: "🇧🇪" },
    { name: "Germany", slug: "germany", flag: "🇩🇪" },
    { name: "Netherlands", slug: "netherlands", flag: "🇳🇱" },
    { name: "Australia", slug: "australia", flag: "🇦🇺" },
    { name: "England", slug: "england", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Argentina", slug: "argentina", flag: "🇦🇷" },
    { name: "Spain", slug: "spain", flag: "🇪🇸" },
    { name: "Malaysia", slug: "malaysia", flag: "🇲🇾" },
    { name: "France", slug: "france", flag: "🇫🇷" },
    { name: "Ireland", slug: "ireland", flag: "🇮🇪" },
    { name: "South Africa", slug: "south-africa", flag: "🇿🇦" },
    { name: "New Zealand", slug: "new-zealand", flag: "🇳🇿" },
    { name: "Chile", slug: "chile", flag: "🇨🇱" },
    { name: "Wales", slug: "wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" }
  ];

  const filteredSuggestions = searchQuery
    ? teamsList.filter((team) =>
        team.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    if (!query) return;

    const matchedTeam = teamsList.find(
      (t) => t.name.toLowerCase().includes(query) || query.includes(t.slug)
    );

    if (matchedTeam) {
      window.location.href = `/hockey-world-cup-2026-schedule-${matchedTeam.slug}`;
    } else if (query.includes("ticket") || query.includes("price")) {
      window.location.href = "/tickets";
    } else if (query.includes("stream") || query.includes("live") || query.includes("channel")) {
      window.location.href = "/hockey-live-streaming";
    } else {
      window.location.href = `/schedule?q=${encodeURIComponent(searchQuery)}`;
    }
    setShowSuggestions(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* 1. Micro Score Ticker Bar (Top level header) */}
      <div className="ticker-bar">
        <div className="ticker-container">
          <div className="ticker-wrapper">
            <div className="ticker-item">
              <span className="ticker-badge upcoming">AUG 15</span>
              <span className="ticker-match">🇮🇳 IND vs WAL 🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
              <span className="ticker-time">10:00 Local</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-badge upcoming">AUG 15</span>
              <span className="ticker-match">🇩🇪 GER vs MAS 🇲🇾</span>
              <span className="ticker-time">11:30 Local</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-badge upcoming">AUG 15</span>
              <span className="ticker-match">🇳🇱 NED vs CHI 🇨🇱 (W)</span>
              <span className="ticker-time">13:00 Local</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-badge upcoming">AUG 15</span>
              <span className="ticker-match">🏴󠁧󠁢󠁥󠁮󠁧󠁿 ENG vs PAK 🇵🇰</span>
              <span className="ticker-time">16:00 Local</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-badge upcoming">AUG 15</span>
              <span className="ticker-match">🇧🇪 BEL vs FRA 🇫🇷</span>
              <span className="ticker-time">18:00 Local</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-badge upcoming">AUG 16</span>
              <span className="ticker-match">🇦🇺 AUS vs IRL 🇮🇪</span>
              <span className="ticker-time">08:30 Local</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-badge upcoming">AUG 16</span>
              <span className="ticker-match">🇳🇱 NED vs NZL 🇳🇿</span>
              <span className="ticker-time">13:00 Local</span>
            </div>
            {/* Duplicate for smooth scroll transition loop */}
            <div className="ticker-item">
              <span className="ticker-badge upcoming">AUG 15</span>
              <span className="ticker-match">🇮🇳 IND vs WAL 🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
              <span className="ticker-time">10:00 Local</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-badge upcoming">AUG 15</span>
              <span className="ticker-match">🇩🇪 GER vs MAS 🇲🇾</span>
              <span className="ticker-time">11:30 Local</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header className="sports-header main-nav-sticky">
        <div className="sports-container header-flex">
          {/* Logo */}
          <a href="/" className="logo-text">
            <span dangerouslySetInnerHTML={{ __html: "&#x1F3D1;" }} /> HOCKEY<span>WORLD2026</span>
            <span className="logo-badge">Hub</span>
          </a>

          {/* Desktop Navigation Link Directory */}
          <nav className="desktop-only">
            <ul className="sports-nav">
              <li className="mega-menu-trigger">
                <a href="/schedule" className="mega-trigger-label flex items-center gap-1">
                  Schedule <span style={{ fontSize: "0.65rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-xl">
                  <div className="mega-grid cols-4">
                    <div className="mega-column">
                      <h4>📆 Match Dates</h4>
                      <ul>
                        <li><a href="/schedule/date/august-15-matches">Aug 15 Matches</a></li>
                        <li><a href="/schedule/date/august-16-matches">Aug 16 Matches</a></li>
                        <li><a href="/schedule/date/august-17-matches">Aug 17 Matches</a></li>
                        <li><a href="/schedule/date/august-18-matches">Aug 18 Matches</a></li>
                        <li><a href="/schedule/date/august-19-matches">Aug 19 Matches</a></li>
                        <li><a href="/schedule/date/august-20-matches">Aug 20 Matches</a></li>
                        <li><a href="/schedule" className="accent-link">Full Schedule Hub →</a></li>
                      </ul>
                    </div>

                    <div className="mega-column">
                      <h4>🏆 Men's Teams (A-N)</h4>
                      <ul>
                        <li><a href="/hockey-world-cup-2026-schedule-india">🇮🇳 India Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-pakistan">🇵🇰 Pakistan Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-belgium">🇧🇪 Belgium Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-germany">🇩🇪 Germany Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-netherlands">🇳🇱 Netherlands Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-australia">🇦🇺 Australia Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-argentina">🇦🇷 Argentina Schedule</a></li>
                      </ul>
                    </div>

                    <div className="mega-column">
                      <h4>🏑 Men's Teams (E-W)</h4>
                      <ul>
                        <li><a href="/hockey-world-cup-2026-schedule-england">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-spain">🇪🇸 Spain Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-malaysia">🇲🇾 Malaysia Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-france">🇫🇷 France Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-japan">🇯🇵 Japan Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-ireland">🇮🇪 Ireland Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-wales">🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales Schedule</a></li>
                      </ul>
                    </div>

                    <div className="mega-column highlighted-col">
                      <h4>🌍 More & Women's</h4>
                      <ul>
                        <li><a href="/hockey-world-cup-2026-schedule-south-africa">🇿🇦 South Africa</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-new-zealand">🇳🇿 New Zealand</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-chile">🇨🇱 Chile Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-usa">🇺🇸 USA Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-scotland">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-china">🇨🇳 China Schedule</a></li>
                        <li><a href="/teams" className="accent-link">All 20 Team Hubs →</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mega-menu-trigger">
                <a href="/points-table" className="mega-trigger-label flex items-center gap-1">
                  Points Table <span style={{ fontSize: "0.65rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-2">
                    <div className="mega-column">
                      <h4>🏆 Pool Groups Hub</h4>
                      <ul>
                        <li><a href="/hockey-world-cup-2026-groups"> All 16 Pool Groups Hub</a></li>
                        <li><a href="/points-table" className="accent-link"> Full Standings & Tie-Breakers →</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>📊 Standings by Pool</h4>
                      <ul>
                        <li><a href="/pool-a">🅰️ Pool A (NED, ARG, NZL, CHI)</a></li>
                        <li><a href="/pool-b">🇧️ Pool B (GER, BEL, MAS, FRA)</a></li>
                        <li><a href="/pool-c">🅲 Pool C (AUS, ESP, IRL, RSA)</a></li>
                        <li><a href="/pool-d">🅳 Pool D (IND, ENG, PAK, WAL)</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mega-menu-trigger">
                <a href="/rankings" className="mega-trigger-label flex items-center gap-1">
                  Rankings <span style={{ fontSize: "0.65rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-2">
                    <div className="mega-column">
                      <h4>📊 FIH World Rankings</h4>
                      <ul>
                        <li><a href="/rankings">🏆 Men's World Rankings</a></li>
                        <li><a href="/rankings">👩 Women's World Rankings</a></li>
                        <li><a href="/points-table">📈 Group Stage Points Table</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>⭐ Team Rankings Guides</h4>
                      <ul>
                        <li><a href="/hockey-world-cup-2026-schedule-india">🇮🇳 India (#5 Men / #9 Women)</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-pakistan">🇵🇰 Pakistan (#16 Men)</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-netherlands">🇳🇱 Netherlands (#1 World No.1)</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-germany">🇩🇪 Germany (#3 Defending Champ)</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="mega-menu-trigger">
                <a href="/live-scores" className="mega-trigger-label flex items-center gap-1">
                  Live Scores <span style={{ fontSize: "0.65rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-2">
                    <div className="mega-column">
                      <h4>🔴 Real-Time Match Center</h4>
                      <ul>
                        <li><a href="/live-scores">⚡ Live Match Center</a></li>
                        <li><a href="/past-results">📜 Past Match Results</a></li>
                        <li><a href="/hockey-live-streaming">📺 Live Broadcast & TV Guide</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>⚔️ Blockbuster Matches</h4>
                      <ul>
                        <li><a href="/matches/india-vs-pakistan">🇮🇳 IND vs PAK 🇵🇰 (Aug 19)</a></li>
                        <li><a href="/matches/germany-vs-belgium">🇩🇪 GER vs BEL 🇧🇪 (Aug 17)</a></li>
                        <li><a href="/matches/india-vs-wales">🇮🇳 IND vs WAL 🏴󠁧󠁢󠁷󠁬󠁳󠁿 (Aug 15)</a></li>
                        <li><a href="/matches/pakistan-vs-wales">🇵🇰 PAK vs WAL 🏴󠁧󠁢󠁷󠁬󠁳󠁿 (Aug 17)</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="mega-menu-trigger">
                <a href="/teams" className="mega-trigger-label flex items-center gap-1">
                  Teams <span style={{ fontSize: "0.65rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-2">
                    <div className="mega-column">
                      <h4>🏃‍♂️ Qualified Teams Hub</h4>
                      <ul>
                        <li><a href="/teams">👥 All 20 Qualified Teams</a></li>
                        <li><a href="/players">⭐ 80+ Player Profiles & Rosters</a></li>
                        <li><a href="/h2h">⚔️ Head-to-Head Comparisons</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>🏑 Squad Rosters</h4>
                      <ul>
                        <li><a href="/players/harmanpreet-singh">🇮🇳 Harmanpreet Singh (India)</a></li>
                        <li><a href="/players/hardik-singh">🇮🇳 Hardik Singh (India)</a></li>
                        <li><a href="/players/mandeep-singh">🇮🇳 Mandeep Singh (India)</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-pakistan">🇵🇰 Pakistan 18-Player Squad</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="mega-menu-trigger">
                <a href="/tickets" className="mega-trigger-label flex items-center gap-1">
                  Tickets <span style={{ fontSize: "0.65rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-2">
                    <div className="mega-column">
                      <h4>🎟️ Booking & Pricing</h4>
                      <ul>
                        <li><a href="/tickets">🎫 Official Ticket Price Guide</a></li>
                        <li><a href="/venues/wagener-stadium-guide">🏟️ Wagener Stadium Seats (NED)</a></li>
                        <li><a href="/venues/belfius-arena-guide">🏟️ Belfius Arena Seats (BEL)</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>🏆 Knockout Stage Tickets</h4>
                      <ul>
                        <li><a href="/knockout/quarter-finals">🔥 Quarter-Final Tickets</a></li>
                        <li><a href="/knockout/semi-finals">⚡ Semi-Final Tickets</a></li>
                        <li><a href="/knockout/final">👑 Grand Final Tickets</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="mega-menu-trigger">
                <a href="/venues" className="mega-trigger-label flex items-center gap-1">
                  Venues <span style={{ fontSize: "0.65rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-2">
                    <div className="mega-column">
                      <h4>🏟️ Host Stadiums</h4>
                      <ul>
                        <li><a href="/venues">🏟️ All Host Venues Guide</a></li>
                        <li><a href="/venues/wagener-stadium-guide">🇳🇱 Wagener Stadium (Amstelveen)</a></li>
                        <li><a href="/venues/belfius-arena-guide">🇧🇪 Belfius Arena (Wavre)</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>✈️ Travel & Parking</h4>
                      <ul>
                        <li><a href="/tickets">🎟️ Stadium Ticket Gates</a></li>
                        <li><a href="/venues/wagener-stadium-guide">🚇 Metro & Parking (Amstelveen)</a></li>
                        <li><a href="/venues/belfius-arena-guide">🚌 Travel & Parking (Wavre)</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="mega-menu-trigger">
                <a href="/news" className="mega-trigger-label flex items-center gap-1">
                  News <span style={{ fontSize: "0.65rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-2">
                    <div className="mega-column">
                      <h4>📰 Latest Updates</h4>
                      <ul>
                        <li><a href="/news">📢 All Tournament News</a></li>
                        <li><a href="/news/india-announces-world-cup-squad">🇮🇳 India Squad Announcement</a></li>
                        <li><a href="/news/germany-injury-update">🇩🇪 Germany Injury Update</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>✍️ Editorial Desk</h4>
                      <ul>
                        <li><a href="/authors/bram-van-de-meer">✍️ Bram van de Meer (Analyst)</a></li>
                        <li><a href="/authors/marc-devos">✍️ Marc Devos (Senior Journalist)</a></li>
                        <li><a href="/authors">👥 Meet All Authors</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="mega-menu-trigger">
                <a href="/history" className="mega-trigger-label flex items-center gap-1">
                  History <span style={{ fontSize: "0.65rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-2">
                    <div className="mega-column">
                      <h4>🏆 Tournament Archives</h4>
                      <ul>
                        <li><a href="/history">📜 All-Time Champions List (1971-2026)</a></li>
                        <li><a href="/history">🏆 Men's World Cup Winners</a></li>
                        <li><a href="/history">👑 Women's World Cup Winners</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>📊 Historical Records</h4>
                      <ul>
                        <li><a href="/past-results">🥇 Past Tournament Results</a></li>
                        <li><a href="/prize-money">💰 Prize Money & Trophy Record</a></li>
                        <li><a href="/format">⚙️ World Cup Format History</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Search Box & CTA Section */}
          <div className="header-right-widgets">
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="search-form desktop-only">
              <input
                type="text"
                placeholder="Search team or tickets..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="search-input"
              />
              <button type="submit" className="search-btn">🔍</button>

              {/* Search Autocomplete Suggestions */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="search-suggestions-box">
                  {filteredSuggestions.map((team) => (
                    <div
                      key={team.slug}
                      className="suggestion-item"
                      onClick={() => {
                        window.location.href = `/hockey-world-cup-2026-schedule-${team.slug}`;
                        setShowSuggestions(false);
                        setSearchQuery("");
                      }}
                    >
                      <span>{team.flag}</span>
                      <strong>{team.name} Squad & Guide</strong>
                    </div>
                  ))}
                </div>
              )}
              {showSuggestions && searchQuery && filteredSuggestions.length === 0 && (
                <div className="search-suggestions-box empty">
                  No match found. Press Enter to search schedule.
                </div>
              )}
            </form>

            {/* Glowing CTA Button */}
            <a href="/live-scores" className="live-match-cta">
              <span className="ping-dot-animation"></span>
              ⚡ Live Scores
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="menu-toggle-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle Navigation Menu"
            >
              &#9776;
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer Overlay */}
      <div className={`mobile-nav-overlay ${isMobileOpen ? "open" : ""}`}>
        <div className="mobile-nav-header">
          <a href="/" className="logo-text" onClick={() => setIsMobileOpen(false)}>
            <span dangerouslySetInnerHTML={{ __html: "&#x1F3D1;" }} /> HOCKEY<span>WORLD2026</span>
          </a>
          <button
            className="mobile-nav-close"
            onClick={toggleMobileMenu}
            aria-label="Close Navigation Menu"
          >
            &#10005;
          </button>
        </div>

        {/* Mobile Search */}
        <div style={{ padding: "0 1.5rem 1rem 1.5rem" }}>
          <form onSubmit={handleSearchSubmit} className="search-form" style={{ width: "100%", margin: 0 }}>
            <input
              type="text"
              placeholder="Search team (e.g. India)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              style={{ width: "100%", height: "40px" }}
            />
            <button type="submit" className="search-btn">🔍</button>
          </form>
        </div>

        <ul className="mobile-nav-links">
          <li><a href="/" onClick={() => setIsMobileOpen(false)}>🏠 Home</a></li>
          
          <li className="mobile-section-header">📅 Schedules & Pools</li>
          <li><a href="/schedule" onClick={() => setIsMobileOpen(false)}>📅 Full Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-groups" onClick={() => setIsMobileOpen(false)}>🏆 All Pool Groups</a></li>
          <li><a href="/format" onClick={() => setIsMobileOpen(false)}>⚙️ Tournament Format</a></li>
          <li><a href="/points-table" onClick={() => setIsMobileOpen(false)}>📈 Points Table</a></li>
          <li><a href="/rankings" onClick={() => setIsMobileOpen(false)}>📊 FIH World Rankings</a></li>
          <li><a href="/h2h" onClick={() => setIsMobileOpen(false)}>⚔️ Head-to-Head Records</a></li>

          <li className="mobile-section-header">🏃‍♂️ Team Profiles</li>
          <li><a href="/teams" onClick={() => setIsMobileOpen(false)}>🏃‍♂️ All Qualified Teams Hub</a></li>
          
          <li style={{ padding: "0 1.5rem" }}>
            <button 
              onClick={() => setIsTeamsMobileOpen(!isTeamsMobileOpen)} 
              className="mobile-collapsible-trigger"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#fff",
                font: "inherit",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "14px",
                marginBottom: "8px"
              }}
            >
              <span>🏑 View All 16 Schedules</span>
              <span style={{ fontSize: "10px", transition: "transform 0.2s", transform: isTeamsMobileOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
            </button>
          </li>
          
          {isTeamsMobileOpen && (
            <li>
              <div className="mobile-teams-grid" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                padding: "0.5rem 1.5rem 1.2rem 1.5rem"
              }}>
                {teamsList.map((team) => (
                  <a
                    key={team.slug}
                    href={`/hockey-world-cup-2026-schedule-${team.slug}`}
                    onClick={() => {
                      setIsMobileOpen(false);
                      setIsTeamsMobileOpen(false);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 12px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      borderRadius: "6px",
                      fontSize: "12px",
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: "500"
                    }}
                  >
                    <span>{team.flag}</span>
                    <span>{team.name}</span>
                  </a>
                ))}
              </div>
            </li>
          )}

          <li className="mobile-section-header">⚡ Live Centre</li>
          <li><a href="/live-scores" onClick={() => setIsMobileOpen(false)}>🔴 Live Scoreboard</a></li>
          <li><a href="/hockey-live-streaming" onClick={() => setIsMobileOpen(false)}>📺 Hockey Live Streaming</a></li>
          <li><a href="/tickets" onClick={() => setIsMobileOpen(false)}>🎟️ Tickets & Seating Pricing</a></li>
          <li><a href="/venues" onClick={() => setIsMobileOpen(false)}>🗺️ Stadium Venues Hub</a></li>

          <li className="mobile-section-header">🔥 Blockbuster Previews</li>
          <li><a href="/matches/india-vs-pakistan" onClick={() => setIsMobileOpen(false)}>🇮🇳 India vs Pakistan 🇵🇰</a></li>
          <li><a href="/matches/germany-vs-belgium" onClick={() => setIsMobileOpen(false)}>🇩🇪 Germany vs Belgium 🇧🇪</a></li>
          <li><a href="/matches/netherlands-vs-australia-women" onClick={() => setIsMobileOpen(false)}>🇳🇱 Netherlands vs Australia 🇦🇺</a></li>
          <li><a href="/matches/india-vs-england" onClick={() => setIsMobileOpen(false)}>🇮🇳 India vs England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</a></li>
          <li><a href="/matches/netherlands-vs-argentina" onClick={() => setIsMobileOpen(false)}>🇳🇱 Netherlands vs Argentina 🇦🇷</a></li>

          <li className="mobile-section-header">🏆 History & Archive</li>
          <li><a href="/history" onClick={() => setIsMobileOpen(false)}>🏆 World Cup Winners</a></li>
          <li><a href="/past-results" onClick={() => setIsMobileOpen(false)}>📊 2023 World Cup Stats</a></li>

          <li><a href="/news" onClick={() => setIsMobileOpen(false)}>📰 News & Articles</a></li>
        </ul>
      </div>
    </>
  );
}
