"use client";

import React, { useState } from "react";

export default function ScheduleAndConverter() {
  const [selectedTimezone, setSelectedTimezone] = useState("CEST");

  // Official Opening Day Matches (August 15, 2026 — Local CEST, UTC+2)
  const OFFICIAL_OPENING_MATCHES = [
    { id: 1, matchCode: "W1", date: "August 15, 2026", timeCEST: "10:00", teamA: "Australia", flagA: "au", teamB: "Japan", flagB: "jp", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
    { id: 2, matchCode: "W2", date: "August 15, 2026", timeCEST: "11:30", teamA: "Germany", flagA: "de", teamB: "Scotland", flagB: "gb-sct", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
    { id: 51, matchCode: "M1", date: "August 15, 2026", timeCEST: "13:00", teamA: "India", flagA: "in", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
    { id: 52, matchCode: "M2", date: "August 15, 2026", timeCEST: "14:30", teamA: "Germany", flagA: "de", teamB: "Malaysia", flagB: "my", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
    { id: 3, matchCode: "W3", date: "August 15, 2026", timeCEST: "16:00", teamA: "Netherlands", flagA: "nl", teamB: "Chile", flagB: "cl", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
    { id: 4, matchCode: "W4", date: "August 15, 2026", timeCEST: "17:30", teamA: "Argentina", flagA: "ar", teamB: "United States", flagB: "us", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
    { id: 53, matchCode: "M3", date: "August 15, 2026", timeCEST: "19:00", teamA: "England", flagA: "gb-eng", teamB: "Pakistan", flagB: "pk", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
    { id: 54, matchCode: "M4", date: "August 15, 2026", timeCEST: "21:00", teamA: "Belgium", flagA: "be", teamB: "France", flagB: "fr", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" }
  ];

  // Timezone Converter Logic (From CEST UTC+2)
  const getConvertedTime = (timeCEST, tz) => {
    if (!timeCEST) return "";
    if (tz === "CEST" || tz === "CET") return `${timeCEST} CEST (Local)`;
    const [h, m] = timeCEST.split(":").map(Number);
    if (tz === "PKT" || tz === "PST") {
      const newH = (h + 3) % 24;
      return `${String(newH).padStart(2, "0")}:${String(m).padStart(2, "0")} PKT`;
    }
    if (tz === "IST") {
      let newM = m + 30;
      let newH = h + 3;
      if (newM >= 60) {
        newM -= 60;
        newH += 1;
      }
      newH = newH % 24;
      return `${String(newH).padStart(2, "0")}:${String(newM).padStart(2, "0")} IST`;
    }
    if (tz === "EST" || tz === "EDT") {
      let newH = h - 6;
      if (newH < 0) newH += 24;
      const period = newH >= 12 ? "PM" : "AM";
      const displayH = newH % 12 === 0 ? 12 : newH % 12;
      return `${String(displayH).padStart(2, "0")}:${String(m).padStart(2, "0")} ${period} EDT`;
    }
    if (tz === "AEST") {
      const newH = (h + 8) % 24;
      return `${String(newH).padStart(2, "0")}:${String(m).padStart(2, "0")} AEST`;
    }
    return `${timeCEST} CEST`;
  };

  const getFlagUrl = (flagCode) => {
    return `https://flagcdn.com/w40/${flagCode}.png`;
  };

  return (
    <>
      {/* TIMEZONE CONVERTER SECTION */}
      <section id="timezone" className="my-12">
        <div className="section-title-wrap">
          <h2>Convert Match Timings to Your Local Time</h2>
          <p>Don't miss a single penalty corner. Select your region below to update the schedule automatically.</p>
        </div>

        <div className="timezone-card">
          <div className="timezone-header">
            <h3 className="text-xl font-bold">Interactive Timezone Selector</h3>
            <div className="timezone-select-wrapper">
              <span className="timezone-label-text">Viewing In:</span>
              <select 
                className="timezone-select" 
                value={selectedTimezone} 
                onChange={(e) => setSelectedTimezone(e.target.value)}
                aria-label="Select Timezone"
              >
                <option value="CET">Central European (CET) - Local Venue</option>
                <option value="IST">Indian Standard Time (IST)</option>
                <option value="PST">Pakistan Standard Time (PST)</option>
                <option value="EST">US Eastern Time (EDT)</option>
              </select>
            </div>
          </div>

          <div className="timezone-grid">
            <div className={`timezone-item ${selectedTimezone === 'CET' ? 'active-timezone' : ''}`}>
              <div className="tz-name">Local Time (CET)</div>
              <div className="tz-time">Venue Standard</div>
              <div className="tz-label">Stadium Local Start</div>
            </div>
            <div className={`timezone-item ${selectedTimezone === 'PST' ? 'active-timezone' : ''}`}>
              <div className="tz-name">Pakistan Time (PST)</div>
              <div className="tz-time">GMT+5 Standard</div>
              <div className="tz-label">PKT Timezone</div>
            </div>
            <div className={`timezone-item ${selectedTimezone === 'IST' ? 'active-timezone' : ''}`}>
              <div className="tz-name">Indian Time (IST)</div>
              <div className="tz-time">GMT+5:30 Standard</div>
              <div className="tz-label">IST Timezone</div>
            </div>
            <div className={`timezone-item ${selectedTimezone === 'EST' ? 'active-timezone' : ''}`}>
              <div className="tz-name">US Eastern (EDT)</div>
              <div className="tz-time">GMT-4 Daylight</div>
              <div className="tz-label">EDT Timezone</div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SCHEDULE SECTION */}
      <section id="fixtures" className="my-16" data-nosnippet>
        <div className="section-title-wrap">
          <h2>Opening Matchday Schedule (August 15, 2026)</h2>
          <p>Official fixtures for the initial matchday of both Men's and Women's tournaments.</p>
        </div>

        <div className="schedule-grid">
          {OFFICIAL_OPENING_MATCHES.map((match) => (
            <div key={match.id} className="match-card">
              <div className="match-meta">
                <span>🗓️ Saturday, {match.date} · <strong>{match.matchCode}</strong></span>
                <span className="text-sky-400 font-bold">⏱️ {getConvertedTime(match.timeCEST || match.timeCET, selectedTimezone)}</span>
              </div>
              <div className="match-teams-container">
                <div className="team-display">
                  <div className="team-badge-wrap">
                    <img src={getFlagUrl(match.flagA)} width="36" height="24" alt={`${match.teamA} flag`} style={{ borderRadius: "4px" }} />
                  </div>
                  <span className="team-name">{match.teamA} ({match.gender})</span>
                </div>
                <div className="vs-badge">VS</div>
                <div className="team-display">
                  <div className="team-badge-wrap">
                    <img src={getFlagUrl(match.flagB)} width="36" height="24" alt={`${match.teamB} flag`} style={{ borderRadius: "4px" }} />
                  </div>
                  <span className="team-name">{match.teamB} ({match.gender})</span>
                </div>
              </div>
              <div className="match-details-row">
                <span className="match-venue">🏟️ {match.venue}</span>
                <span className="channel-tag" style={{ background: match.gender === "Women" ? "rgba(244, 63, 94, 0.15)" : "rgba(14, 165, 233, 0.15)", color: match.gender === "Women" ? "#f43f5e" : "#0ea5e9" }}>
                  {match.gender}'s {match.pool}
                </span>
              </div>
              <div className="match-actions">
                <a href="/hockey-live-streaming" className="match-btn match-btn-primary">Watch Live</a>
                <a href="/live-scores" className="match-btn match-btn-secondary">Match Center</a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}>
          <a href="/schedule" className="view-more-btn">
            View Full 100-Match Schedule (50 Men · 50 Women) →
          </a>
        </div>
      </section>

      {/* MATCH LIVE UPDATES PREVIEW SECTION */}
      <section id="live-updates-preview" className="my-12" style={{ borderTop: "1px solid var(--border-color)", paddingTop: "3rem" }}>
        <div className="section-title-wrap">
          <h2>Tournament Live Match Centre</h2>
          <p>Real-time updates, scoreboards, and instant match reports during matches.</p>
        </div>

        <div style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          borderRadius: "24px",
          padding: "2.5rem",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.04)",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            top: "1rem",
            right: "1.5rem",
            background: "rgba(192, 0, 48, 0.06)",
            border: "1px solid rgba(192, 0, 48, 0.15)",
            color: "var(--primary)",
            fontSize: "0.75rem",
            fontWeight: "800",
            padding: "0.25rem 0.75rem",
            borderRadius: "30px",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}>
            <span className="pulse-dot" style={{ backgroundColor: "var(--primary)" }}></span> Real-Time Coverage Active
          </div>

          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🏑</div>
          <h3 className="text-2xl font-bold mb-3" style={{ fontStyle: "italic", color: "var(--text-main)" }}>
            Real-Time Scores &amp; Ball-by-Ball Updates
          </h3>
          <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 2rem auto", fontSize: "0.95rem", lineHeight: "1.7" }}>
            Follow all 100 matches live with verified goal events, quarter time tracking, penalty corner stats, and post-match analytical reports.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="/live-scores" className="cta-button primary-cta" style={{
              background: "linear-gradient(135deg, var(--primary) 0%, #7a001a 100%)",
              boxShadow: "0 4px 15px rgba(192, 0, 48, 0.2)",
              color: "#fff",
              padding: "0.8rem 1.6rem",
              borderRadius: "10px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "0.9rem"
            }}>
              ⚡ Access Live Scoreboard
            </a>
            <a href="/points-table" className="cta-button secondary-cta" style={{
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border-color)",
              color: "var(--text-main)",
              padding: "0.8rem 1.6rem",
              borderRadius: "10px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "0.9rem"
            }}>
              📊 Points Table &amp; Standings
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
