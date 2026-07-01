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
            <li><a href="/#schedule">Schedule</a></li>
            <li><a href="/teams">Pools & Teams</a></li>
            <li><a href="/broadcasters">Broadcasters</a></li>
            <li><a href="/venues">Stadiums</a></li>
            <li><a href="/live-scores">Live Scores</a></li>
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
