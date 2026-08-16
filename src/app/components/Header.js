"use client";

import React, { useState, useEffect } from "react";

const INITIAL_STATIC_TICKER = [
  {
    badge: "FINAL (W7)",
    type: "women",
    match: "BEL 5 - 2 NZL",
    flags: "🇧🇪 🇳🇿",
    link: "/news/belgium-vs-new-zealand-result-score-august-16-hwc-2026"
  },
  {
    badge: "FINAL (M7)",
    type: "final",
    match: "NED 3 - 1 NZL",
    flags: "🇳🇱 🇳🇿",
    link: "/news/netherlands-vs-new-zealand-result-score-august-16-hwc-2026"
  },
  {
    badge: "FINAL (M6)",
    type: "final",
    match: "ESP 2 - 0 RSA",
    flags: "🇪🇸 🇿🇦",
    link: "/news/spain-vs-south-africa-result-score-august-16-hwc-2026"
  },
  {
    badge: "FINAL (M5)",
    type: "final",
    match: "AUS 3 - 1 IRL",
    flags: "🇦🇺 🇮🇪",
    link: "/news/australia-vs-ireland-result-score-august-16-hwc-2026"
  },
  {
    badge: "FINAL (W5)",
    type: "women",
    match: "ENG 4 - 0 RSA",
    flags: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇿🇦",
    link: "/news/england-vs-south-africa-result-score-august-16-hwc-2026"
  },
  {
    badge: "FINAL (W6)",
    type: "women",
    match: "CHN 2 - 2 IND",
    flags: "🇨🇳 🇮🇳",
    link: "/news/china-vs-india-result-score-august-16-hwc-2026"
  },
  {
    badge: "FINAL (M3)",
    type: "final",
    match: "ENG 4 - 1 PAK",
    flags: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇵🇰",
    link: "/news/england-vs-pakistan-result-score-august-15-hwc-2026"
  },
  {
    badge: "FINAL (M1)",
    type: "final",
    match: "IND 3 - 1 WAL",
    flags: "🇮🇳 🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    link: "/news/india-vs-wales-result-score-august-15-hwc-2026"
  },
  {
    badge: "UPCOMING (W8)",
    type: "upcoming",
    match: "ESP vs IRL (20:30 CET · 1h from now)",
    flags: "🇪🇸 🇮🇪",
    link: "/pool-c"
  },
  {
    badge: "UPCOMING (M8)",
    type: "upcoming",
    match: "ARG vs JPN (21:00 CET · 1.5h from now)",
    flags: "🇦🇷 🇯🇵",
    link: "/matches/australia-vs-argentina"
  }
];

const FLAG_MAP = {
  "Belgium": "🇧🇪", "New Zealand": "🇳🇿", "Netherlands": "🇳🇱", "Spain": "🇪🇸",
  "South Africa": "🇿🇦", "Australia": "🇦🇺", "Ireland": "🇮🇪", "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "China": "🇨🇳", "India": "🇮🇳", "Germany": "🇩🇪", "France": "🇫🇷", "Malaysia": "🇲🇾",
  "Pakistan": "🇵🇰", "Wales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "Argentina": "🇦🇷", "Japan": "🇯🇵", "USA": "🇺🇸",
  "Chile": "🇨🇱", "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
};

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isTeamsMobileOpen, setIsTeamsMobileOpen] = useState(false);
  const [liveStatsTicker, setLiveStatsTicker] = useState(INITIAL_STATIC_TICKER);

  useEffect(() => {
    const fetchLiveTickerData = async () => {
      try {
        const res = await fetch(`/api/live-scores?t=${Date.now()}`, { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          const items = [];

          // 1. Add active live matches if any
          if (json.liveMatches && json.liveMatches.length > 0) {
            json.liveMatches.forEach(m => {
              const flagA = FLAG_MAP[m.teamA] || "🏑";
              const flagB = FLAG_MAP[m.teamB] || "🏑";
              items.push({
                badge: "🔴 LIVE IN PROGRESS",
                type: "live",
                match: `${m.teamA} ${m.scoreA} - ${m.scoreB} ${m.teamB}`,
                flags: `${flagA} ${flagB}`,
                link: "/live-scores"
              });
            });
          }

          // 2. Add completed matches (recency sorted)
          if (json.completedMatches && json.completedMatches.length > 0) {
            json.completedMatches.slice(0, 10).forEach(m => {
              const flagA = FLAG_MAP[m.teamA] || "🏑";
              const flagB = FLAG_MAP[m.teamB] || "🏑";
              const isWomen = (m.gender || "").toLowerCase().includes("women");
              items.push({
                badge: `FINAL (${isWomen ? "W" : "M"})`,
                type: isWomen ? "women" : "final",
                match: `${m.teamA} ${m.scoreA} - ${m.scoreB} ${m.teamB}`,
                flags: `${flagA} ${flagB}`,
                link: m.recapUrl || "/past-results"
              });
            });
          }

          // 3. Add upcoming matches
          if (json.upcomingToday && json.upcomingToday.length > 0) {
            json.upcomingToday.forEach(m => {
              const flagA = FLAG_MAP[m.teamA] || "🏑";
              const flagB = FLAG_MAP[m.teamB] || "🏑";
              items.push({
                badge: "UPCOMING",
                type: "upcoming",
                match: `${m.teamA} vs ${m.teamB} (${m.timeCET || "Scheduled"})`,
                flags: `${flagA} ${flagB}`,
                link: "/live-scores"
              });
            });
          }

          if (items.length > 0) {
            setLiveStatsTicker(items);
          }
        }
      } catch (e) {
        console.error("Failed to update top ticker:", e);
      }
    };

    fetchLiveTickerData();
    const interval = setInterval(fetchLiveTickerData, 20000);
    return () => clearInterval(interval);
  }, []);

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
    { name: "Wales", slug: "wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
    { name: "China", slug: "china", flag: "🇨🇳" },
    { name: "USA", slug: "usa", flag: "🇺🇸" },
    { name: "Japan", slug: "japan", flag: "🇯🇵" },
    { name: "Scotland", slug: "scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
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
    } else if (query.includes("score") || query.includes("live")) {
      window.location.href = "/live-scores";
    } else if (query.includes("table") || query.includes("point") || query.includes("standing")) {
      window.location.href = "/points-table";
    } else if (query.includes("stream") || query.includes("channel")) {
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
      {/* 1. RUNNING LIVE STATS & SCORES TOP TICKER */}
      <div className="running-ticker-bar">
        {/* Fixed Left Live Badge */}
        <div className="ticker-live-tag">
          <span className="ticker-live-dot"></span>
          <span className="ticker-live-text">LIVE STATS</span>
        </div>

        {/* Marquee Viewport with Infinite Running Track */}
        <div className="ticker-viewport">
          <div className="ticker-track">
            {/* First Set of Live Ticker Cards */}
            {liveStatsTicker.map((item, index) => (
              <a key={`t1-${index}`} href={item.link} className="ticker-card">
                <span className={`ticker-badge-tag ${item.type}`}>
                  {item.badge}
                </span>
                <span className="ticker-match-name">
                  {item.flags} {item.match}
                </span>
              </a>
            ))}
            {/* Duplicated Set for Seamless Continuous Infinite Scrolling Loop */}
            {liveStatsTicker.map((item, index) => (
              <a key={`t2-${index}`} href={item.link} className="ticker-card" aria-hidden="true">
                <span className={`ticker-badge-tag ${item.type}`}>
                  {item.badge}
                </span>
                <span className="ticker-match-name">
                  {item.flags} {item.match}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2. STREAMLINED & COMPACT MAIN NAVIGATION HEADER */}
      <header className="sports-header main-nav-sticky">
        <div className="sports-container header-flex">
          {/* Logo */}
          <a href="/" className="logo-text">
            <span dangerouslySetInnerHTML={{ __html: "&#x1F3D1;" }} /> HOCKEY<span className="logo-highlight">WORLD2026</span>
            <span className="logo-badge">Hub</span>
          </a>

          {/* Desktop Merged Navigation Directory (5 Clean High-Level Menu Categories) */}
          <nav className="desktop-only">
            <ul className="sports-nav">
              {/* Category 1: Live Scores (Pulsing Highlight) */}
              <li className="mega-menu-trigger">
                <a href="/live-scores" className="mega-trigger-label flex items-center gap-1 live-nav-highlight">
                  <span className="nav-pulse-dot"></span>
                  Live Scores <span style={{ fontSize: "0.6rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-2">
                    <div className="mega-column">
                      <h4>🔴 Real-Time Match Centers</h4>
                      <ul>
                        <li><a href="/live-scores" style={{ fontWeight: "700", color: "#38bdf8" }}>⚡ Live Scores Match Center →</a></li>
                        <li><a href="/past-results">📜 Confirmed Match Results & Scores</a></li>
                        <li><a href="/hockey-live-streaming">📺 Live TV Broadcast Channels</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>⚔️ Blockbuster Match Centers</h4>
                      <ul>
                        <li><a href="/matches/india-vs-pakistan">🇮🇳 IND vs PAK (Aug 19 Derby)</a></li>
                        <li><a href="/matches/germany-vs-belgium">🇩🇪 GER vs BEL (Aug 17 Clash)</a></li>
                        <li><a href="/matches/netherlands-vs-australia-women">🇳🇱 NED vs AUS (Women's Pool A)</a></li>
                        <li><a href="/matches">🔥 All Match Centers Hub →</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Category 2: Schedule & Fixtures (Merged Schedule + Match Dates + Team Calendars) */}
              <li className="mega-menu-trigger">
                <a href="/schedule" className="mega-trigger-label flex items-center gap-1">
                  Schedule <span style={{ fontSize: "0.6rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-xl">
                  <div className="mega-grid cols-3">
                    <div className="mega-column">
                      <h4>📆 Matchdays & Dates</h4>
                      <ul>
                        <li><a href="/schedule">📅 Full 100-Match Fixtures Hub</a></li>
                        <li><a href="/schedule/date/august-15-matches">Aug 15 (Opening Day)</a></li>
                        <li><a href="/schedule/date/august-16-matches">Aug 16 Matches</a></li>
                        <li><a href="/schedule/date/august-17-matches">Aug 17 Matches</a></li>
                        <li><a href="/schedule/date/august-18-matches">Aug 18 Matches</a></li>
                        <li><a href="/schedule/date/august-19-matches">Aug 19 Matches</a></li>
                      </ul>
                    </div>
                    <div className="mega-column">
                      <h4>🏑 Top Men's Schedules</h4>
                      <ul>
                        <li><a href="/hockey-world-cup-2026-schedule-india">🇮🇳 India Full Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-pakistan">🇵🇰 Pakistan Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-germany">🇩🇪 Germany Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-belgium">🇧🇪 Belgium Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-netherlands">🇳🇱 Netherlands Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-australia">🇦🇺 Australia Schedule</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>🏆 Tournament Stages</h4>
                      <ul>
                        <li><a href="/knockout/quarter-finals">🔥 Second Stage (Pools E–H)</a></li>
                        <li><a href="/knockout/semi-finals">⚡ Semi-Finals Schedule</a></li>
                        <li><a href="/knockout/final">👑 Grand Finals (Aug 29 &amp; 30)</a></li>
                        <li><a href="/schedule" className="accent-link">📥 Download Printable PDF →</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Category 3: Standings */}
              <li className="mega-menu-trigger">
                <a href="/points-table" className="mega-trigger-label flex items-center gap-1">
                  Standings <span style={{ fontSize: "0.6rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-2">
                    <div className="mega-column">
                      <h4>📊 Points Table &amp; Groups</h4>
                      <ul>
                        <li><a href="/points-table" style={{ fontWeight: "700", color: "#38bdf8" }}>📈 Complete Points Table &amp; Tie-Breakers →</a></li>
                        <li><a href="/hockey-world-cup-2026-groups">🏆 All 16 Pool Groups Hub</a></li>
                        <li><a href="/rankings">🌐 Official FIH World Rankings</a></li>
                        <li><a href="/womens-tournament">👩 Women's Tournament Standings</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>🏆 Dedicated Pool Standings</h4>
                      <ul>
                        <li><a href="/pool-a">🅰️ Pool A (Men: NED, ARG · Women: NED, AUS)</a></li>
                        <li><a href="/pool-b">🇧️ Pool B (Men: BEL, GER · Women: ARG, GER)</a></li>
                        <li><a href="/pool-c">🅲 Pool C (Men: AUS, ESP · Women: BEL, ESP)</a></li>
                        <li><a href="/pool-d">🅳 Pool D (Men: ENG, IND, PAK · Women: CHN, IND)</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Category 4: Teams */}
              <li className="mega-menu-trigger">
                <a href="/teams" className="mega-trigger-label flex items-center gap-1">
                  Teams <span style={{ fontSize: "0.6rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-2">
                    <div className="mega-column">
                      <h4>👥 Qualified Nations & Rosters</h4>
                      <ul>
                        <li><a href="/teams">🏃 All 20 Qualified Nations Hub</a></li>
                        <li><a href="/players">⭐ 80+ Star Player Profiles</a></li>
                        <li><a href="/h2h">⚔️ Head-to-Head Comparison Tool</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>⭐ Featured Star Profiles</h4>
                      <ul>
                        <li><a href="/players/harmanpreet-singh">🇮🇳 Harmanpreet Singh (India Captain)</a></li>
                        <li><a href="/players/hardik-singh">🇮🇳 Hardik Singh (Midfield Ace)</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-pakistan">🇵🇰 Pakistan 18-Player Squad</a></li>
                        <li><a href="/players">👥 Browse All Player Rosters →</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Category 5: Guide */}
              <li className="mega-menu-trigger">
                <a href="/venues" className="mega-trigger-label flex items-center gap-1">
                  Guide <span style={{ fontSize: "0.6rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-2">
                    <div className="mega-column">
                      <h4>🏟️ Venues & Tickets</h4>
                      <ul>
                        <li><a href="/venues">🏟️ Stadiums & Venues Guide</a></li>
                        <li><a href="/venues/wagener-stadium-guide">🇳🇱 Wagener Stadium (Amstelveen)</a></li>
                        <li><a href="/venues/belfius-arena-guide">🇧🇪 Belfius Arena (Wavre)</a></li>
                        <li><a href="/tickets">🎟️ Ticket Booking & Gate Prices</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>🏆 History & Archives</h4>
                      <ul>
                        <li><a href="/history">📜 All-Time Champions (1971-2026)</a></li>
                        <li><a href="/prize-money">💰 Prize Money & Trophy Breakdown</a></li>
                        <li><a href="/format">⚙️ Tournament Format & Rules</a></li>
                        <li><a href="/fantasy-predictions">🎯 Fantasy Predictions & Odds</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Category 6: News */}
              <li className="mega-menu-trigger">
                <a href="/news" className="mega-trigger-label flex items-center gap-1">
                  News <span style={{ fontSize: "0.6rem", marginLeft: "2px" }}>▼</span>
                </a>
                <div className="mega-dropdown" style={{ minWidth: "320px" }}>
                  <div className="mega-column">
                    <h4>📰 News & Editorial</h4>
                    <ul>
                      <li><a href="/news">📢 All Tournament Breaking News</a></li>
                      <li><a href="/news/england-vs-pakistan-result-score-august-15-hwc-2026">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs Pakistan Match Report</a></li>
                      <li><a href="/news/india-vs-wales-result-score-august-15-hwc-2026">🇮🇳 India vs Wales Match Report</a></li>
                      <li><a href="/authors">✍️ Editorial Desk & Expert Byline</a></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Right Header Widgets: Search Form & Mobile Trigger */}
          <div className="header-right-widgets">
            {/* Compact Search Bar */}
            <form onSubmit={handleSearchSubmit} className="search-form desktop-only">
              <input
                type="text"
                placeholder="Search teams, tickets..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="search-input"
              />
              <button type="submit" className="search-btn" aria-label="Search">🔍</button>

              {/* Autocomplete Dropdown */}
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
                      <strong>{team.name} Schedule & Squad</strong>
                    </div>
                  ))}
                </div>
              )}
            </form>

            {/* Mobile Menu Hamburger */}
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

      {/* 3. MOBILE NAVIGATION DRAWER */}
      <div className={`mobile-nav-overlay ${isMobileOpen ? "open" : ""}`}>
        <div className="mobile-nav-header">
          <a href="/" className="logo-text" onClick={() => setIsMobileOpen(false)}>
            <span dangerouslySetInnerHTML={{ __html: "&#x1F3D1;" }} /> HOCKEY<span className="logo-highlight">WORLD2026</span>
          </a>
          <button
            className="mobile-nav-close"
            onClick={toggleMobileMenu}
            aria-label="Close Navigation Menu"
          >
            &#10005;
          </button>
        </div>

        {/* Mobile Search Input */}
        <div style={{ padding: "0 1.5rem 1rem 1.5rem" }}>
          <form onSubmit={handleSearchSubmit} className="search-form" style={{ width: "100%", margin: 0 }}>
            <input
              type="text"
              placeholder="Search team, schedule, standings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              style={{ width: "100%", height: "40px" }}
            />
            <button type="submit" className="search-btn" aria-label="Search">🔍</button>
          </form>
        </div>

        {/* Mobile Link Items */}
        <ul className="mobile-nav-links">
          <li><a href="/" onClick={() => setIsMobileOpen(false)}>🏠 Home</a></li>
          
          <li className="mobile-section-header">🔴 Live Centres & Scores</li>
          <li><a href="/live-scores" onClick={() => setIsMobileOpen(false)}>⚡ Real-Time Live Scores Hub</a></li>
          <li><a href="/past-results" onClick={() => setIsMobileOpen(false)}>📜 Confirmed Results & Goal Logs</a></li>
          <li><a href="/hockey-live-streaming" onClick={() => setIsMobileOpen(false)}>📺 Live Streaming & TV Channels</a></li>

          <li className="mobile-section-header">📅 Schedules & Pools</li>
          <li><a href="/schedule" onClick={() => setIsMobileOpen(false)}>📅 Full 100-Match Schedule</a></li>
          <li><a href="/points-table" onClick={() => setIsMobileOpen(false)}>📈 Points Table & Pool Standings</a></li>
          <li><a href="/hockey-world-cup-2026-groups" onClick={() => setIsMobileOpen(false)}>🏆 All 16 Pool Groups Hub</a></li>
          <li><a href="/rankings" onClick={() => setIsMobileOpen(false)}>📊 FIH World Rankings</a></li>

          <li className="mobile-section-header">🏑 Team Schedules</li>
          <li style={{ padding: "0 1.5rem" }}>
            <button 
              onClick={() => setIsTeamsMobileOpen(!isTeamsMobileOpen)} 
              className="mobile-collapsible-trigger"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#fff",
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
              <span>🏑 Browse All 16 Team Schedules</span>
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

          <li className="mobile-section-header">🏟️ Guides & Venues</li>
          <li><a href="/venues" onClick={() => setIsMobileOpen(false)}>🏟️ Wagener & Belfius Stadium Guides</a></li>
          <li><a href="/tickets" onClick={() => setIsMobileOpen(false)}>🎟️ Tickets & Seating Pricing</a></li>
          <li><a href="/history" onClick={() => setIsMobileOpen(false)}>🏆 All-Time Champions List</a></li>
          <li><a href="/news" onClick={() => setIsMobileOpen(false)}>📰 News & Articles</a></li>
        </ul>
      </div>
    </>
  );
}
