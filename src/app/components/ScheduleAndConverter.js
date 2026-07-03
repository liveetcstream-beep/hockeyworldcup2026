"use client";

import React, { useState } from "react";

export default function ScheduleAndConverter() {
  const [selectedTimezone, setSelectedTimezone] = useState("CET");

  const matchTimes = {
    CET: ["13:00 CET", "15:30 CET", "18:00 CET"],
    IST: ["16:30 IST", "19:00 IST", "21:30 IST"],
    PST: ["16:00 PST", "18:30 PST", "21:00 PST"],
    EST: ["07:00 AM EDT", "09:30 AM EDT", "12:00 PM EDT"],
  };

  const handleTimezoneChange = (e) => {
    setSelectedTimezone(e.target.value);
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
                onChange={handleTimezoneChange}
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
              <div className="tz-time">13:00 / 18:00</div>
              <div className="tz-label">Stadium Local Start</div>
            </div>
            <div className={`timezone-item ${selectedTimezone === 'PST' ? 'active-timezone' : ''}`}>
              <div className="tz-name">Pakistan Time (PST)</div>
              <div className="tz-time">16:00 / 21:00</div>
              <div className="tz-label">GMT+5 Standard</div>
            </div>
            <div className={`timezone-item ${selectedTimezone === 'IST' ? 'active-timezone' : ''}`}>
              <div className="tz-name">Indian Time (IST)</div>
              <div className="tz-time">16:30 / 21:30</div>
              <div className="tz-label">GMT+5:30 Standard</div>
            </div>
            <div className={`timezone-item ${selectedTimezone === 'EST' ? 'active-timezone' : ''}`}>
              <div className="tz-name">US Eastern (EDT)</div>
              <div className="tz-time">07:00 / 12:00</div>
              <div className="tz-label">GMT-4 Daylight Saving</div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SCHEDULE SECTION */}
      <section id="schedule" className="my-12">
        <div className="section-title-wrap">
          <h2>Opening Matchday Schedule (August 15, 2026)</h2>
          <p>Official fixtures for the initial matches of the Men's and Women's tournaments.</p>
        </div>

        <div className="schedule-grid">
          
          {/* Match 1 */}
          <div className="match-card">
            <div className="match-meta">
              <span>🗓️ Saturday, August 15, 2026</span>
              <span className="text-sky-400 font-bold">⏱️ Timings: {matchTimes[selectedTimezone][0]}</span>
            </div>
            <div className="match-teams-container">
              <div className="team-display">
                <div className="team-badge-wrap">
                  <img src="https://flagcdn.com/w80/in.png" width="36" height="24" alt="India flag" style={{ borderRadius: "4px" }} />
                </div>
                <span className="team-name">India (Men)</span>
              </div>
              <div className="vs-badge">VS</div>
              <div className="team-display">
                <div className="team-badge-wrap">
                  <img src="https://flagcdn.com/w80/gb-wls.png" width="36" height="24" alt="Wales flag" style={{ borderRadius: "4px" }} />
                </div>
                <span className="team-name">Wales (Men)</span>
              </div>
            </div>
            <div className="match-details-row">
              <span className="match-venue">🏟️ Wagener Stadium, Amstelveen (NL)</span>
              <span className="channel-tag">Men's Pool A</span>
            </div>
            <div className="match-actions">
              <a href="/broadcasters" className="match-btn match-btn-primary">Watch Live</a>
              <a href="https://fih.hockey" target="_blank" rel="noopener noreferrer" className="match-btn match-btn-secondary">Official Stats</a>
            </div>
          </div>

          {/* Match 2 */}
          <div className="match-card">
            <div className="match-meta">
              <span>🗓️ Saturday, August 15, 2026</span>
              <span className="text-sky-400 font-bold">⏱️ Timings: {matchTimes[selectedTimezone][1]}</span>
            </div>
            <div className="match-teams-container">
              <div className="team-display">
                <div className="team-badge-wrap">
                  <img src="https://flagcdn.com/w80/de.png" width="36" height="24" alt="Germany flag" style={{ borderRadius: "4px" }} />
                </div>
                <span className="team-name">Germany (Men)</span>
              </div>
              <div className="vs-badge">VS</div>
              <div className="team-display">
                <div className="team-badge-wrap">
                  <img src="https://flagcdn.com/w80/my.png" width="36" height="24" alt="Malaysia flag" style={{ borderRadius: "4px" }} />
                </div>
                <span className="team-name">Malaysia (Men)</span>
              </div>
            </div>
            <div className="match-details-row">
              <span className="match-venue">🏟️ Belfius Hockey Arena, Wavre (BE)</span>
              <span className="channel-tag">Men's Pool B</span>
            </div>
            <div className="match-actions">
              <a href="/broadcasters" className="match-btn match-btn-primary">Watch Live</a>
              <a href="https://fih.hockey" target="_blank" rel="noopener noreferrer" className="match-btn match-btn-secondary">Official Stats</a>
            </div>
          </div>

          {/* Match 3 */}
          <div className="match-card">
            <div className="match-meta">
              <span>🗓️ Saturday, August 15, 2026</span>
              <span className="text-sky-400 font-bold">⏱️ Timings: {matchTimes[selectedTimezone][2]}</span>
            </div>
            <div className="match-teams-container">
              <div className="team-display">
                <div className="team-badge-wrap">
                  <img src="https://flagcdn.com/w80/nl.png" width="36" height="24" alt="Netherlands flag" style={{ borderRadius: "4px" }} />
                </div>
                <span className="team-name">Netherlands (Women)</span>
              </div>
              <div className="vs-badge">VS</div>
              <div className="team-display">
                <div className="team-badge-wrap">
                  <img src="https://flagcdn.com/w80/cl.png" width="36" height="24" alt="Chile flag" style={{ borderRadius: "4px" }} />
                </div>
                <span className="team-name">Chile (Women)</span>
              </div>
            </div>
            <div className="match-details-row">
              <span className="match-venue">🏟️ Wagener Stadium, Amstelveen (NL)</span>
              <span className="channel-tag">Women's Pool A</span>
            </div>
            <div className="match-actions">
              <a href="/broadcasters" className="match-btn match-btn-primary">Watch Live</a>
              <a href="https://fih.hockey" target="_blank" rel="noopener noreferrer" className="match-btn match-btn-secondary">Official Stats</a>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}>
            <a href="/schedule" className="view-more-btn">
              View Full 50-Match Schedule & Fixtures →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
