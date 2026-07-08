"use client";

import React, { useState } from "react";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <header className="sports-header">
        <div className="sports-container header-flex">
          <a href="/" className="logo-text">
            <span dangerouslySetInnerHTML={{ __html: "&#x1F3D1;" }} /> HOCKEY<span>WORLD2026</span>
            <span className="logo-badge">Hub</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav>
            <ul className="sports-nav">
              <li><a href="/">Home</a></li>
              
                            {/* Schedule Dropdown */}
              <li className="nav-item-dropdown">
                <span className="dropdown-trigger">
                  Team Schedules 
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
                  <li><a href="/hockey-world-cup-2026-schedule-india">🇮🇳 India Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-pakistan">🇵🇰 Pakistan Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-belgium">🇧🇪 Belgium Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-germany">🇩🇪 Germany Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-netherlands">🇳🇱 Netherlands Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-australia">🇦🇺 Australia Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-england">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-argentina">🇦🇷 Argentina Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-spain">🇪🇸 Spain Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-malaysia">🇲🇾 Malaysia Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-france">🇫🇷 France Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-ireland">🇮🇪 Ireland Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-south-africa">🇿🇦 South Africa Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-new-zealand">🇳🇿 New Zealand Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-chile">🇨🇱 Chile Schedule</a></li>
                  <li><a href="/hockey-world-cup-2026-schedule-wales">🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales Schedule</a></li>
                  <li><a href="/schedule">📅 Full Tournament Schedule</a></li>
                </ul>
              </li>

              {/* Tournament Dropdown */}
              <li className="nav-item-dropdown">
                <span className="dropdown-trigger">
                  Tournament 
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
                  <li><a href="/hockey-world-cup-2026-groups">All Pool Groups (Men & Women)</a></li>
                  <li><a href="/pool-a">📊 Pool A Standings</a></li>
                  <li><a href="/pool-b">📊 Pool B Standings</a></li>
                  <li><a href="/pool-c">📊 Pool C Standings</a></li>
                  <li><a href="/pool-d">📊 Pool D Standings</a></li>
                  <li><a href="/format">Tournament Crossover Rules</a></li>
                  <li><a href="/points-table">Points Table Standing Rules</a></li>
                  <li><a href="/h2h">Head-to-Head (H2H) Records</a></li>
                </ul>
              </li>

              {/* Teams Dropdown */}
              <li className="nav-item-dropdown">
                <span className="dropdown-trigger">
                  Teams 
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
                  <li><a href="/teams">All 16 Qualified Nations</a></li>
                  <li><a href="/teams#stars">Star Players to Watch</a></li>
                </ul>
              </li>

              {/* Venues Dropdown */}
              <li className="nav-item-dropdown">
                <span className="dropdown-trigger">
                  Stadiums 
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
                  <li><a href="/venues/wagener-stadium-guide">🇳🇱 Wagener Stadium Guide</a></li>
                  <li><a href="/venues/belfius-arena-guide">🇧🇪 Belfius Arena Guide</a></li>
                  <li><a href="/venues">🗺️ All Stadium Venues</a></li>
                </ul>
              </li>

              {/* Broadcasting Dropdown */}
              <li className="nav-item-dropdown">
                <span className="dropdown-trigger">
                  Live Centre 
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
                  <li><a href="/live-scores"><span dangerouslySetInnerHTML={{ __html: "&#x1F534;" }} /> Live Scoreboard</a></li>
                  <li><a href="/broadcasters">Broadcaster Directory</a></li>
                  <li><a href="/tickets">Official Tickets & Pricing</a></li>
                  <li><a href="/broadcasters#vpn">VPN Stream Guide</a></li>
                </ul>
              </li>

              {/* Stats Dropdown */}
              <li className="nav-item-dropdown">
                <span className="dropdown-trigger">
                  History & Stats 
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
                  <li><a href="/history">World Cup Winners (1971-2026)</a></li>
                  <li><a href="/past-results">2023 World Cup Stats</a></li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Desktop Right Side Live Badge */}
          <div className="live-indicator">
            <span className="live-dot"></span>
            Live Updates
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            className="menu-toggle-btn" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle Navigation Menu"
          >
            &#9776;
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
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
                <ul className="mobile-nav-links">
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
                   <li style={{ color: "var(--text-muted)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: "0.8rem 1.5rem 0.3rem", fontWeight: "700", pointerEvents: "none" }}>Tournament</li>
          <li><a href="/schedule" onClick={() => setIsMobileOpen(false)}>📅 Full Match Schedule</a></li>
          <li><a href="/hockey-world-cup-2026-groups" onClick={() => setIsMobileOpen(false)}>🏆 All Pool Groups</a></li>
          <li><a href="/pool-a" onClick={() => setIsMobileOpen(false)}>📊 Pool A Standings</a></li>
          <li><a href="/pool-b" onClick={() => setIsMobileOpen(false)}>📊 Pool B Standings</a></li>
          <li><a href="/pool-c" onClick={() => setIsMobileOpen(false)}>📊 Pool C Standings</a></li>
          <li><a href="/pool-d" onClick={() => setIsMobileOpen(false)}>📊 Pool D Standings</a></li>
          <li><a href="/format" onClick={() => setIsMobileOpen(false)}>Tournament Format</a></li>
          <li><a href="/points-table" onClick={() => setIsMobileOpen(false)}>Points Table Rules</a></li>
          <li><a href="/teams" onClick={() => setIsMobileOpen(false)}>All Qualified Nations</a></li>
          <li><a href="/h2h" onClick={() => setIsMobileOpen(false)}>Head-to-Head Records</a></li>
          
          <li style={{ color: "var(--text-muted)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: "0.8rem 1.5rem 0.3rem", fontWeight: "700", pointerEvents: "none" }}>Live & Info</li>
          <li><a href="/live-scores" onClick={() => setIsMobileOpen(false)} dangerouslySetInnerHTML={{ __html: "&#x1F534; Live Scoreboard" }} /></li>
          <li><a href="/venues/wagener-stadium-guide" onClick={() => setIsMobileOpen(false)}>🇳🇱 Wagener Stadium Guide</a></li>
          <li><a href="/venues/belfius-arena-guide" onClick={() => setIsMobileOpen(false)}>🇧🇪 Belfius Arena Guide</a></li>
          <li><a href="/venues" onClick={() => setIsMobileOpen(false)}>🗺️ All Stadium Venues</a></li>
          <li><a href="/tickets" onClick={() => setIsMobileOpen(false)}>Tickets & Pricing</a></li>
          <li><a href="/broadcasters" onClick={() => setIsMobileOpen(false)}>Broadcaster Directory</a></li>
          <li><a href="/history" onClick={() => setIsMobileOpen(false)}>Past Winners (1971-2026)</a></li>
          <li><a href="/past-results" onClick={() => setIsMobileOpen(false)}>2023 World Cup Stats</a></li>
        </ul>
      </div>
    </>
  );
}

