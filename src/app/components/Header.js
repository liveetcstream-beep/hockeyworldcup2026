import React from "react";

export default function Header() {
  return (
    <header className="sports-header">
      <div className="sports-container header-flex">
        <a href="/" className="logo-text">
          <span>🏒</span> HOCKEY<span>WORLD2026</span>
          <span className="logo-badge">Hub</span>
        </a>
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
                <li><a href="/#schedule">Opening Day Fixtures</a></li>
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
                <li><a href="/past-results">2023 World Cup Results</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="live-indicator">
          <span className="live-dot"></span>
          Live Updates
        </div>
      </div>
    </header>
  );
}
