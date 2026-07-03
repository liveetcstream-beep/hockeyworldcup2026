"use client";

import React, { useState, useMemo } from "react";

const ALL_MATCHES = [
  { id: 1, date: "August 15, 2026", timeCET: "13:00", teamA: "India", flagA: "in", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 2, date: "August 15, 2026", timeCET: "15:30", teamA: "Germany", flagA: "de", teamB: "Malaysia", flagB: "my", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 3, date: "August 15, 2026", timeCET: "18:30", teamA: "Argentina", flagA: "ar", teamB: "United States", flagB: "us", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 4, date: "August 15, 2026", timeCET: "21:00", teamA: "England", flagA: "gb-eng", teamB: "Pakistan", flagB: "pk", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 5, date: "August 16, 2026", timeCET: "13:00", teamA: "Belgium", flagA: "be", teamB: "England", flagB: "gb-eng", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 6, date: "August 16, 2026", timeCET: "15:30", teamA: "Australia", flagA: "au", teamB: "Argentina", flagB: "ar", gender: "Men", pool: "Pool C", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 7, date: "August 16, 2026", timeCET: "18:00", teamA: "Germany", flagA: "de", teamB: "Japan", flagB: "jp", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 8, date: "August 17, 2026", timeCET: "12:00", teamA: "United States", flagA: "us", teamB: "Scotland", flagB: "gb-sct", gender: "Women", pool: "Pool C", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 9, date: "August 17, 2026", timeCET: "15:30", teamA: "France", flagA: "fr", teamB: "New Zealand", flagB: "nz", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 10, date: "August 17, 2026", timeCET: "18:00", teamA: "Australia", flagA: "au", teamB: "Netherlands", flagB: "nl", gender: "Women", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 11, date: "August 18, 2026", timeCET: "13:00", teamA: "Netherlands", flagA: "nl", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool D", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 12, date: "August 18, 2026", timeCET: "15:30", teamA: "South Korea", flagA: "kr", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool D", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 13, date: "August 18, 2026", timeCET: "18:00", teamA: "Australia", flagA: "au", teamB: "United States", flagB: "us", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 14, date: "August 19, 2026", timeCET: "13:00", teamA: "India", flagA: "in", teamB: "Spain", flagB: "es", gender: "Men", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 15, date: "August 19, 2026", timeCET: "15:00", teamA: "United States", flagA: "us", teamB: "Germany", flagB: "de", gender: "Women", pool: "Pool C", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 16, date: "August 19, 2026", timeCET: "18:00", teamA: "Pakistan", flagA: "pk", teamB: "India", flagB: "in", gender: "Men", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 17, date: "August 20, 2026", timeCET: "13:00", teamA: "England", flagA: "gb-eng", teamB: "Germany", flagB: "de", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 18, date: "August 20, 2026", timeCET: "15:30", teamA: "Argentina", flagA: "ar", teamB: "New Zealand", flagB: "nz", gender: "Men", pool: "Pool C", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 19, date: "August 20, 2026", timeCET: "18:00", teamA: "Belgium", flagA: "be", teamB: "China", flagB: "cn", gender: "Women", pool: "Pool A", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 20, date: "August 21, 2026", timeCET: "13:00", teamA: "2nd Pool A", flagA: "un", teamB: "3rd Pool B", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 21, date: "August 21, 2026", timeCET: "18:00", teamA: "2nd Pool B", flagA: "un", teamB: "3rd Pool A", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 22, date: "August 23, 2026", timeCET: "15:30", teamA: "Winner Pool A", flagA: "un", teamB: "Winner Crossover 1", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 23, date: "August 24, 2026", timeCET: "18:00", teamA: "Winner Pool B", flagA: "un", teamB: "Winner Crossover 2", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 24, date: "August 27, 2026", timeCET: "18:00", teamA: "Winner QF 1", flagA: "un", teamB: "Winner QF 2", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 25, date: "August 27, 2026", timeCET: "18:00", teamA: "Winner QF 3", flagA: "un", teamB: "Winner QF 4", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 26, date: "August 30, 2026", timeCET: "19:00", teamA: "Winner SF 1", flagA: "un", teamB: "Winner SF 2", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" }
];

const ITEMS_PER_PAGE = 13;

export default function ScheduleClient() {
  const [selectedTimezone, setSelectedTimezone] = useState("CET");
  const [genderFilter, setGenderFilter] = useState("All");
  const [poolFilter, setPoolFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Timezone Converter Logic
  const getConvertedTime = (timeCET, tz) => {
    if (tz === "CET") return `${timeCET} CET`;
    const [h, m] = timeCET.split(":").map(Number);
    if (tz === "PST") {
      const newH = (h + 3) % 24;
      return `${String(newH).padStart(2, "0")}:${String(m).padStart(2, "0")} PST`;
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
    if (tz === "EST") {
      let newH = h - 6;
      if (newH < 0) newH += 24;
      const period = newH >= 12 ? "PM" : "AM";
      const displayH = newH % 12 === 0 ? 12 : newH % 12;
      return `${String(displayH).padStart(2, "0")}:${String(m).padStart(2, "0")} ${period} EDT`;
    }
    return timeCET;
  };

  const getFlagUrl = (flagCode) => {
    if (flagCode === "un") return "https://flagcdn.com/w40/un.png";
    return `https://flagcdn.com/w40/${flagCode}.png`;
  };

  // Filter & Search matches
  const filteredMatches = useMemo(() => {
    return ALL_MATCHES.filter((match) => {
      const matchesGender = genderFilter === "All" || match.gender === genderFilter;
      const matchesPool = poolFilter === "All" || match.pool === poolFilter;
      const matchesSearch = 
        match.teamA.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.teamB.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.venue.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesGender && matchesPool && matchesSearch;
    });
  }, [genderFilter, poolFilter, searchTerm]);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [genderFilter, poolFilter, searchTerm]);

  // Pagination bounds
  const totalPages = Math.ceil(filteredMatches.length / ITEMS_PER_PAGE) || 1;
  const paginatedMatches = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredMatches.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredMatches, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {/* Interactive Timezone & Search Bar Row */}
      <section className="mb-8">
        <div className="timezone-card" style={{ padding: "1.8rem" }}>
          <div className="timezone-header" style={{ marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
            <h3 className="text-lg font-bold text-white">Filter & Search Fixtures</h3>
            <div className="timezone-select-wrapper">
              <span className="timezone-label-text">Select Timezone:</span>
              <select 
                className="timezone-select" 
                value={selectedTimezone} 
                onChange={(e) => setSelectedTimezone(e.target.value)}
                aria-label="Select Timezone"
              >
                <option value="CET">Central European Time (CET)</option>
                <option value="IST">Indian Standard Time (IST)</option>
                <option value="PST">Pakistan Standard Time (PST)</option>
                <option value="EST">US Eastern Time (EDT)</option>
              </select>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", width: "100%" }}>
            {/* Search Bar */}
            <div style={{ flex: "1 1 300px" }}>
              <input
                type="text"
                placeholder="🔍 Search by team name or venue..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "#fff",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              />
            </div>

            {/* Gender Filter */}
            <div style={{ flex: "1 1 150px" }}>
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                style={{
                  width: "100%",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "#fff",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <option value="All">All Genders</option>
                <option value="Men">Men's Tournament</option>
                <option value="Women">Women's Tournament</option>
              </select>
            </div>

            {/* Pool Filter */}
            <div style={{ flex: "1 1 150px" }}>
              <select
                value={poolFilter}
                onChange={(e) => setPoolFilter(e.target.value)}
                style={{
                  width: "100%",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "#fff",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <option value="All">All Stages / Pools</option>
                <option value="Pool A">Pool A</option>
                <option value="Pool B">Pool B</option>
                <option value="Pool C">Pool C</option>
                <option value="Pool D">Pool D</option>
                <option value="Knockouts">Knockouts / Finals</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Fixtures List Section */}
      <section style={{ marginBottom: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <h2 className="text-xl font-bold text-white">Match Fixtures</h2>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "600" }}>
            Showing {filteredMatches.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}-
            {Math.min(currentPage * ITEMS_PER_PAGE, filteredMatches.length)} of {filteredMatches.length} matches
          </span>
        </div>

        {paginatedMatches.length === 0 ? (
          <div className="text-center py-12" style={{ background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border-color)", padding: "3rem 1rem" }}>
            <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>🏑</span>
            <h3 className="text-lg font-bold text-white mb-2">No Matches Found</h3>
            <p className="text-sm text-slate-400">We couldn't find any matches matching your search or filters. Try adjusting your search query.</p>
          </div>
        ) : (
          <div className="schedule-grid" style={{ display: "grid", gap: "1.5rem" }}>
            {paginatedMatches.map((match) => (
              <div key={match.id} className="match-card">
                <div className="match-meta">
                  <span>🗓️ {match.date}</span>
                  <span className="text-sky-400 font-bold">⏱️ Timings: {getConvertedTime(match.timeCET, selectedTimezone)}</span>
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
                  <span className="channel-tag">{match.pool}</span>
                </div>
                <div className="match-actions">
                  <a href="/broadcasters" className="match-btn match-btn-primary">Watch Live</a>
                  <a href="https://fih.hockey" target="_blank" rel="noopener noreferrer" className="match-btn match-btn-secondary">Official Stats</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Pagination Controls */}
      {filteredMatches.length > ITEMS_PER_PAGE && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem", marginTop: "2rem", marginBottom: "3rem" }}>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            style={{
              background: currentPage === 1 ? "rgba(255,255,255,0.02)" : "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              color: currentPage === 1 ? "var(--text-muted)" : "#fff",
              padding: "0.6rem 1.5rem",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              transition: "all 0.2s ease",
            }}
          >
            ← Previous
          </button>
          
          <span style={{ fontSize: "0.9rem", color: "#fff", fontWeight: "600" }}>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            style={{
              background: currentPage === totalPages ? "rgba(255,255,255,0.02)" : "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              color: currentPage === totalPages ? "var(--text-muted)" : "#fff",
              padding: "0.6rem 1.5rem",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Next →
          </button>
        </div>
      )}

      {/* PDF Schedule Download Section for SEO */}
      <section style={{ 
        background: "rgba(14, 165, 233, 0.05)", 
        border: "1px dashed var(--primary)", 
        borderRadius: "16px", 
        padding: "2.2rem 1.5rem", 
        textAlign: "center", 
        marginTop: "1rem", 
        marginBottom: "3rem" 
      }}>
        <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}>📄</span>
        <h3 className="text-xl font-bold text-white mb-2" style={{ fontStyle: "italic" }}>Save Full Hockey World Cup 2026 Schedule (PDF)</h3>
        <p className="text-sm text-slate-300" style={{ maxWidth: "580px", margin: "0 auto 1.5rem auto", lineHeight: "1.6" }}>
          Need a print-friendly copy of the 2026 match schedule? You can download, print, or save the complete fixture list (with Amstelveen and Wavre stadium codes) directly as a PDF file on your device.
        </p>
        <button 
          onClick={() => window.print()} 
          className="view-more-btn"
          style={{ cursor: "pointer", border: "none", display: "inline-flex" }}
        >
          💾 Print & Save PDF Fixtures
        </button>
      </section>
    </>
  );
}
