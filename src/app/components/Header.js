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
              <li><a href="/">Home</a></li>

              {/* Schedules Dropdown */}
              <li className="mega-menu-trigger">
                <span className="mega-trigger-label">
                  Schedules
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-3">
                    <div className="mega-column">
                      <h4>📅 Tournament Calendar</h4>
                      <ul>
                        <li><a href="/schedule">Match Schedule & Timings</a></li>
                        <li><a href="/format">⚙️ Tournament Format & Bracket</a></li>
                        <li><a href="/points-table">📈 Points Standing Rules</a></li>
                        <li><a href="/h2h">⚔️ Head-to-Head (H2H) History</a></li>
                      </ul>
                    </div>
                    <div className="mega-column">
                      <h4>🏑 Pools A & B Schedules</h4>
                      <ul>
                        <li><a href="/hockey-world-cup-2026-schedule-netherlands">🇳🇱 Netherlands Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-argentina">🇦🇷 Argentina Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-chile">🇨🇱 Chile Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-new-zealand">🇳🇿 New Zealand Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-germany">🇩🇪 Germany Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-belgium">🇧🇪 Belgium Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-malaysia">🇲🇾 Malaysia Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-france">🇫🇷 France Schedule</a></li>
                      </ul>
                    </div>
                    <div className="mega-column">
                      <h4>🏑 Pools C & D Schedules</h4>
                      <ul>
                        <li><a href="/hockey-world-cup-2026-schedule-australia">🇦🇺 Australia Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-spain">🇪🇸 Spain Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-ireland">🇮🇪 Ireland Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-south-africa">🇿🇦 South Africa Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-india">🇮🇳 India Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-wales">🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-england">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England Schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-pakistan">🇵🇰 Pakistan Schedule</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Team Hubs & Pools Dropdown */}
              <li className="mega-menu-trigger">
                <span className="mega-trigger-label">
                  Team Hubs & Pools
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <div className="mega-dropdown">
                  <div className="mega-grid">
                    <div className="mega-column">
                      <h4>📊 Standings by Pool</h4>
                      <ul>
                        <li><a href="/hockey-world-cup-2026-groups">All Pool Standings Hub</a></li>
                        <li><a href="/pool-a">🔴 Pool A Standings</a></li>
                        <li><a href="/pool-b">🔵 Pool B Standings</a></li>
                        <li><a href="/pool-c">🟢 Pool C Standings</a></li>
                        <li><a href="/pool-d">🟡 Pool D Standings</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>🏃‍♂️ Team Squads</h4>
                      <ul>
                        <li><a href="/teams" className="accent-link">All 16 Squads Directory →</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Live Centre & Previews Mega Menu */}
              <li className="mega-menu-trigger">
                <span className="mega-trigger-label">
                  Matchday Live
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <div className="mega-dropdown">
                  <div className="mega-grid">
                    <div className="mega-column">
                      <h4>📺 Coverage & Access</h4>
                      <ul>
                        <li><a href="/live-scores" className="live-item-link"><span className="pulse-dot"></span> Live Scoreboard</a></li>
                        <li><a href="/hockey-live-streaming">📺 Live Streaming Guide</a></li>
                        <li><a href="/tickets">🎟️ Tickets & Seating Pricing <span className="hot-tag">BUY</span></a></li>
                        <li><a href="/venues">🗺️ Stadium Travel Guides</a></li>
                      </ul>
                    </div>
                    <div className="mega-column">
                      <h4>🔥 Blockbuster Previews <span className="hot-tag">HOT</span></h4>
                      <ul>
                        <li><a href="/matches/india-vs-pakistan">🇮🇳 India vs Pakistan 🇵🇰</a></li>
                        <li><a href="/matches/germany-vs-belgium">🇩🇪 Germany vs Belgium 🇧🇪</a></li>
                        <li><a href="/matches/netherlands-vs-australia-women">🇳🇱 Netherlands vs Australia (W)</a></li>
                        <li><a href="/matches/india-vs-england">🇮🇳 India vs England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</a></li>
                        <li><a href="/matches/netherlands-vs-argentina">🇳🇱 Netherlands vs Argentina 🇦🇷</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Stats Dropdown */}
              <li className="nav-item-dropdown">
                <span className="dropdown-trigger">
                  History & Stats
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
                  <li><a href="/history">🏆 World Cup Winners</a></li>
                  <li><a href="/past-results">📊 2023 World Cup Stats</a></li>
                </ul>
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
          <li><a href="/schedule" onClick={() => setIsMobileOpen(false)}>📅 Full Match Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-groups" onClick={() => setIsMobileOpen(false)}>🏆 All Pool Groups</a></li>
          <li><a href="/format" onClick={() => setIsMobileOpen(false)}>⚙️ Tournament Format</a></li>
          <li><a href="/points-table" onClick={() => setIsMobileOpen(false)}>📈 Points Table Rules</a></li>
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
        </ul>
      </div>
    </>
  );
}
