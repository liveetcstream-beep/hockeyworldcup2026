"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

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
              <span className="ticker-badge live">● LIVE</span>
              <span className="ticker-match">🇮🇳 IND 2 - 1 PAK 🇵🇰</span>
              <span className="ticker-time">FT (Men)</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-badge ended">ENDED</span>
              <span className="ticker-match">🇩🇪 GER 3 - 2 BEL 🇧🇪</span>
              <span className="ticker-time">Shootout</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-badge upcoming">AUG 15</span>
              <span className="ticker-match">🇳🇱 NED vs ARG 🇦🇷</span>
              <span className="ticker-time">19:30 Local</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-badge upcoming">AUG 16</span>
              <span className="ticker-match">🇦🇺 AUS vs ESP 🇪🇸</span>
              <span className="ticker-time">17:00 Local</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-badge live">● LIVE</span>
              <span className="ticker-match">🇳🇱 NED (W) 1 - 0 AUS (W) 🇦🇺</span>
              <span className="ticker-time">Q3</span>
            </div>
            {/* Duplicate for smooth scroll transition */}
            <div className="ticker-item">
              <span className="ticker-badge live">● LIVE</span>
              <span className="ticker-match">🇮🇳 IND 2 - 1 PAK 🇵🇰</span>
              <span className="ticker-time">FT (Men)</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-badge ended">ENDED</span>
              <span className="ticker-match">🇩🇪 GER 3 - 2 BEL 🇧🇪</span>
              <span className="ticker-time">Shootout</span>
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

              {/* Schedule & Standing Mega Menu */}
              <li className="mega-menu-trigger">
                <span className="mega-trigger-label">
                  Schedules & Pools
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <div className="mega-dropdown">
                  <div className="mega-grid">
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
                      <h4>📊 Standings by Pool</h4>
                      <ul>
                        <li><a href="/hockey-world-cup-2026-groups">All Pool Standings Hub</a></li>
                        <li><a href="/pool-a">🔴 Pool A Standings</a></li>
                        <li><a href="/pool-b">🔵 Pool B Standings</a></li>
                        <li><a href="/pool-c">🟢 Pool C Standings</a></li>
                        <li><a href="/pool-d">🟡 Pool D Standings</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Teams Directory Mega Menu */}
              <li className="mega-menu-trigger">
                <span className="mega-trigger-label">
                  Teams Hubs
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <div className="mega-dropdown width-md">
                  <div className="mega-grid cols-3">
                    <div className="mega-column">
                      <h4>🏃‍♂️ Pools A & B</h4>
                      <ul>
                        <li><a href="/hockey-world-cup-2026-schedule-netherlands">🇳🇱 Netherlands</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-argentina">🇦🇷 Argentina</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-chile">🇨🇱 Chile</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-new-zealand">🇳🇿 New Zealand</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-germany">🇩🇪 Germany</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-belgium">🇧🇪 Belgium</a></li>
                      </ul>
                    </div>
                    <div className="mega-column">
                      <h4>🏃‍♂️ Pools C & D</h4>
                      <ul>
                        <li><a href="/hockey-world-cup-2026-schedule-australia">🇦🇺 Australia</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-india">🇮🇳 India</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-england">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-pakistan">🇵🇰 Pakistan</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-spain">🇪🇸 Spain</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-wales">🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales</a></li>
                      </ul>
                    </div>
                    <div className="mega-column highlighted-col">
                      <h4>⭐ Quick Links</h4>
                      <ul>
                        <li><a href="/teams" className="accent-link">All 16 Squads Directory →</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-malaysia">🇲🇾 Malaysia schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-france">🇫🇷 France schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-ireland">🇮🇪 Ireland schedule</a></li>
                        <li><a href="/hockey-world-cup-2026-schedule-south-africa">🇿🇦 South Africa schedule</a></li>
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
          <li><a href="/hockey-world-cup-2026-schedule-india" onClick={() => setIsMobileOpen(false)}>🇮🇳 India Hub</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-pakistan" onClick={() => setIsMobileOpen(false)}>🇵🇰 Pakistan Hub</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-belgium" onClick={() => setIsMobileOpen(false)}>🇧🇪 Belgium Hub</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-germany" onClick={() => setIsMobileOpen(false)}>🇩🇪 Germany Hub</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-netherlands" onClick={() => setIsMobileOpen(false)}>🇳🇱 Netherlands Hub</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-australia" onClick={() => setIsMobileOpen(false)}>🇦🇺 Australia Hub</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-england" onClick={() => setIsMobileOpen(false)}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 England Hub</a></li>
          <li><a href="/hockey-world-cup-2026-schedule-argentina" onClick={() => setIsMobileOpen(false)}>🇦🇷 Argentina Hub</a></li>

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

      {/* 4. Styled Embedded CSS specifically for Micro Ticker and Mega Menu */}
      <style jsx global>{`
        /* Score Ticker Styling */
        .ticker-bar {
          background: #030508;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          height: 38px;
          overflow: hidden;
          position: relative;
          z-index: 1001;
        }

        .ticker-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .ticker-wrapper {
          display: flex;
          align-items: center;
          gap: 3rem;
          white-space: nowrap;
          animation: tickerScroll 25s linear infinite;
        }

        .ticker-wrapper:hover {
          animation-play-state: paused;
        }

        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          color: #a0aec0;
          font-weight: 500;
        }

        .ticker-badge {
          font-size: 0.6rem;
          font-weight: 800;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .ticker-badge.live {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
          animation: pulseTicker 1.5s infinite;
        }

        .ticker-badge.ended {
          background: rgba(160, 174, 192, 0.15);
          color: #a0aec0;
        }

        .ticker-badge.upcoming {
          background: rgba(56, 189, 248, 0.1);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.2);
        }

        .ticker-match {
          color: #ffffff;
          font-weight: 700;
        }

        .ticker-time {
          color: #718096;
        }

        @keyframes tickerScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes pulseTicker {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }

        /* Desktop Mega Menu Refactoring */
        .mega-menu-trigger {
          position: relative;
        }

        .mega-trigger-label {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 1.5rem 0;
          transition: color 0.3s ease;
          white-space: nowrap;
          user-select: none;
        }

        .mega-menu-trigger:hover .mega-trigger-label {
          color: #ffffff;
        }

        .mega-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(15px);
          background: rgba(7, 10, 18, 0.99);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-top: 2px solid var(--primary);
          border-radius: 12px;
          min-width: 460px;
          padding: 1.8rem;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
          z-index: 1000;
        }

        .mega-dropdown.width-md {
          min-width: 620px;
        }

        .mega-menu-trigger:hover .mega-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0px);
        }

        .mega-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .mega-grid.cols-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .mega-column h4 {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          margin-bottom: 0.8rem;
          font-weight: 800;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.4rem;
        }

        .mega-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .mega-column a {
          display: block;
          font-size: 0.85rem;
          color: #e2e8f0;
          text-decoration: none;
          padding: 0.3rem 0;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .mega-column a:hover {
          color: var(--primary);
          transform: translateX(3px);
        }

        .highlighted-col {
          background: rgba(255, 255, 255, 0.02);
          padding: 0.8rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.03);
        }

        .accent-link {
          color: var(--primary) !important;
          font-weight: bold;
        }

        /* Search input styling */
        .header-right-widgets {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .search-form {
          position: relative;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.2rem 0.5rem;
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .search-form:focus-within {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .search-input {
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-size: 0.8rem;
          width: 160px;
          transition: width 0.3s ease;
          padding: 0.3rem 0.2rem;
        }

        .search-input:focus {
          width: 220px;
        }

        .search-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          color: #ffffff;
          font-size: 0.85rem;
        }

        .search-suggestions-box {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 0.5rem;
          background: #0d121e;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          width: 280px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          z-index: 1002;
          overflow: hidden;
          padding: 0.4rem 0;
        }

        .search-suggestions-box.empty {
          color: #718096;
          font-size: 0.75rem;
          padding: 0.8rem 1rem;
          text-align: center;
        }

        .suggestion-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1rem;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .suggestion-item:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .suggestion-item span {
          font-size: 1.1rem;
        }

        .suggestion-item strong {
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 600;
        }

        /* Glowing Live Match CTA Button */
        .live-match-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #c00030 0%, #7a001a 100%);
          color: #ffffff !important;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none;
          box-shadow: 0 0 12px rgba(192, 0, 48, 0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .live-match-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 18px rgba(192, 0, 48, 0.6);
        }

        .ping-dot-animation {
          width: 8px;
          height: 8px;
          background-color: #4ade80;
          border-radius: 50%;
          position: relative;
        }

        .ping-dot-animation::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #4ade80;
          border-radius: 50%;
          animation: pingPulse 1.2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes pingPulse {
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        /* Pulse dot for live dropdown links */
        .live-item-link {
          display: flex !important;
          align-items: center;
          gap: 0.5rem;
          color: #38bdf8 !important;
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          background-color: #ef4444;
          border-radius: 50%;
          animation: blinkDot 1s infinite alternate;
        }

        @keyframes blinkDot {
          0% { opacity: 0.4; }
          100% { opacity: 1; }
        }

        .hot-tag {
          font-size: 0.55rem;
          font-weight: 900;
          background: #ef4444;
          color: #ffffff;
          padding: 0.1rem 0.3rem;
          border-radius: 3px;
          margin-left: 0.4rem;
          vertical-align: middle;
        }

        /* Mobile Adjustments */
        .mobile-section-header {
          color: var(--text-muted);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 1.2rem 1.5rem 0.3rem !important;
          fontWeight: 700;
          pointer-events: none;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          margin-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
