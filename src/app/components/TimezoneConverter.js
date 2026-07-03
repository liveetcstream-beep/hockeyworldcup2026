"use client";

import React, { useState } from "react";

export default function TimezoneConverter() {
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
          <div className="tz-name">Local Time</div>
          <div className="tz-time">{matchTimes[selectedTimezone][0]}</div>
          <div className="tz-label">Match 1 Pushback</div>
        </div>
        <div className={`timezone-item ${selectedTimezone === 'IST' ? 'active-timezone' : ''}`}>
          <div className="tz-name">Pakistan Time</div>
          <div className="tz-time">{matchTimes[selectedTimezone][1]}</div>
          <div className="tz-label">Match 2 Pushback</div>
        </div>
        <div className={`timezone-item ${selectedTimezone === 'PST' ? 'active-timezone' : ''}`}>
          <div className="tz-name">Indian Time (IST)</div>
          <div className="tz-time">{matchTimes[selectedTimezone][2]}</div>
          <div className="tz-label">Match 3 Pushback</div>
        </div>
        <div className={`timezone-item ${selectedTimezone === 'EST' ? 'active-timezone' : ''}`}>
          <div className="tz-name">US Eastern</div>
          <div className="tz-time">{matchTimes[selectedTimezone][0]}</div>
          <div className="tz-label">Local Broadcast</div>
        </div>
      </div>
    </div>
  );
}
