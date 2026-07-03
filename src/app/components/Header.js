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
            <span>🏒</span> HOCKEY<span>WORLD2026</span>
            <span className="logo-badge">Hub</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav>
            <ul className="sports-nav">
              <li><a href="/">Home</a></li>
              
              {/* Schedule Dropdown */}
              <li className="nav-item-dropdown">
                <span className="dropdown-trigger">
                  Schedule 
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
                  <li><a href="/schedule">Full Match Schedule & Timings</a></li>
                  <li><a href="/format">Tournament Crossover Rules</a></li>
                  <li><a href="/points-table">Points Table Standing Rules</a></li>
                  <li><a href="/teams#pools">Group Stage Pools</a></li>
                </ul>
              </li>

              {/* Teams & H2H Dropdown */}
              <li className="nav-item-dropdown">
                <span className="dropdown-trigger">
                  Teams & H2H 
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
                  <li><a href="/teams">Qualified Nations</a></li>
                  <li><a href="/teams#stars">Star Players to Watch</a></li>
                  <li><a href="/h2h">Head-to-Head (H2H) Records</a></li>
                </ul>
              </li>

              {/* Venues Dropdown */}
              <li className="nav-item-dropdown">
                <span className="dropdown-trigger">
                  Stadiums 
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
                  <li><a href="/venues#wagener">Wagener Stadium (NL)</a></li>
                  <li><a href="/venues#belfius">Belfius Arena (BE)</a></li>
                </ul>
              </li>

              {/* Broadcasting Dropdown */}
              <li className="nav-item-dropdown">
                <span className="dropdown-trigger">
                  Live Centre 
                  <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
                  <li><a href="/broadcasters">Broadcaster Directory</a></li>
                  <li><a href="/tickets">Official Tickets & Pricing</a></li>
                  <li><a href="/broadcasters#vpn">VPN Stream Guide</a></li>
                  <li><a href="/live-scores">Live Scoreboard</a></li>
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
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileOpen ? "open" : ""}`}>
        <div className="mobile-nav-header">
          <a href="/" className="logo-text" onClick={() => setIsMobileOpen(false)}>
            <span>🏒</span> HOCKEY<span>WORLD2026</span>
          </a>
          <button 
            className="mobile-nav-close" 
            onClick={toggleMobileMenu}
            aria-label="Close Navigation Menu"
          >
            ✕
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li><a href="/" onClick={() => setIsMobileOpen(false)}>Home</a></li>
          <li><a href="/schedule" onClick={() => setIsMobileOpen(false)}>Full Match Schedule & Timings</a></li>
          <li><a href="/format" onClick={() => setIsMobileOpen(false)}>Tournament Format / Crossover</a></li>
          <li><a href="/points-table" onClick={() => setIsMobileOpen(false)}>Points Table Rules</a></li>
          <li><a href="/teams" onClick={() => setIsMobileOpen(false)}>Qualified Nations</a></li>
          <li><a href="/h2h" onClick={() => setIsMobileOpen(false)}>Head-to-Head Records</a></li>
          <li><a href="/venues" onClick={() => setIsMobileOpen(false)}>Stadium Guides</a></li>
          <li><a href="/tickets" onClick={() => setIsMobileOpen(false)}>Tickets & Pricing</a></li>
          <li><a href="/broadcasters" onClick={() => setIsMobileOpen(false)}>Broadcaster Directory</a></li>
          <li><a href="/live-scores" onClick={() => setIsMobileOpen(false)}>Live Scoreboard</a></li>
          <li><a href="/history" onClick={() => setIsMobileOpen(false)}>Past Winners (1971-2026)</a></li>
          <li><a href="/past-results" onClick={() => setIsMobileOpen(false)}>2023 World Cup Stats</a></li>
        </ul>
      </div>
    </>
  );
}
