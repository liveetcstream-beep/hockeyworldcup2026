"use client";

import React, { useState, useMemo } from "react";

import { ALL_MATCHES, WARMUP_MATCHES } from "../../data/allMatches";

const ITEMS_PER_PAGE = 15;

const getMatchPreviewLink = (match) => {
  const teamA = match.teamA.toLowerCase();
  const teamB = match.teamB.toLowerCase();
  const gender = match.gender.toLowerCase();

  if (teamA === "pakistan" && teamB === "india" && gender === "men") return "/matches/india-vs-pakistan";
  if (teamA === "india" && teamB === "pakistan" && gender === "men") return "/matches/india-vs-pakistan";

  if (teamA === "india" && teamB === "wales" && gender === "men") return "/matches/india-vs-wales";
  if (teamA === "wales" && teamB === "india" && gender === "men") return "/matches/india-vs-wales";

  if (teamA === "pakistan" && teamB === "wales" && gender === "men") return "/matches/pakistan-vs-wales";
  if (teamA === "wales" && teamB === "pakistan" && gender === "men") return "/matches/pakistan-vs-wales";

  if (teamA === "germany" && teamB === "belgium" && gender === "men") return "/matches/germany-vs-belgium";
  if (teamA === "belgium" && teamB === "germany" && gender === "men") return "/matches/germany-vs-belgium";

  if (teamA === "australia" && teamB === "netherlands" && gender === "women") return "/matches/netherlands-vs-australia-women";
  if (teamA === "netherlands" && teamB === "australia" && gender === "women") return "/matches/netherlands-vs-australia-women";

  if (teamA === "india" && teamB === "england" && gender === "men") return "/matches/india-vs-england";
  if (teamA === "england" && teamB === "india" && gender === "men") return "/matches/india-vs-england";

  if (teamA === "argentina" && teamB === "netherlands" && gender === "men") return "/matches/netherlands-vs-argentina";
  if (teamA === "netherlands" && teamB === "argentina" && gender === "men") return "/matches/netherlands-vs-argentina";

  if (teamA === "spain" && teamB === "australia" && gender === "men") return "/matches/australia-vs-spain";
  if (teamA === "australia" && teamB === "spain" && gender === "men") return "/matches/australia-vs-spain";

  if (teamA === "belgium" && teamB === "france" && gender === "men") return "/matches/belgium-vs-france";
  if (teamA === "france" && teamB === "belgium" && gender === "men") return "/matches/belgium-vs-france";

  if (teamA === "england" && teamB === "pakistan" && gender === "men") return "/matches/england-vs-pakistan";
  if (teamA === "pakistan" && teamB === "england" && gender === "men") return "/matches/england-vs-pakistan";

  if (teamA === "india" && teamB === "england" && gender === "women") return "/matches/india-vs-england-women";
  if (teamA === "england" && teamB === "india" && gender === "women") return "/matches/india-vs-england-women";

  return null;
};

export default function ScheduleClient() {
  const [selectedTimezone, setSelectedTimezone] = useState("CET");
  const [genderFilter, setGenderFilter] = useState("All");
  const [poolFilter, setPoolFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("official");
  const [printGender, setPrintGender] = useState("Men");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab === "warmup") {
        setActiveTab("warmup");
      }
    }
  }, []);

  const handlePrint = (gender) => {
    setPrintGender(gender);
    setTimeout(() => {
      window.print();
    }, 150);
  };

  // Timezone Converter Logic (PST/Pakistan Time is CET + 3 hours)
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
    const list = ALL_MATCHES.filter((match) => {
      const matchesGender = genderFilter === "All" || match.gender === genderFilter;
      const matchesPool = poolFilter === "All" || match.pool === poolFilter;
      const matchesSearch = 
        match.teamA.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.teamB.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.venue.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesGender && matchesPool && matchesSearch;
    });

    // Chronological date & time sorting
    return list.sort((a, b) => {
      const dayA = parseInt(a.date.match(/\d+/)[0]);
      const dayB = parseInt(b.date.match(/\d+/)[0]);
      if (dayA !== dayB) return dayA - dayB;
      
      const [hA, mA] = a.timeCET.split(":").map(Number);
      const [hB, mB] = b.timeCET.split(":").map(Number);
      return (hA * 60 + mA) - (hB * 60 + mB);
    });
  }, [genderFilter, poolFilter, searchTerm]);
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [genderFilter, poolFilter, searchTerm]);

  // Scroll to tabs top when page changes
  React.useEffect(() => {
    if (isMounted) {
      const element = document.getElementById("fixtures-tabs");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [currentPage, isMounted]);

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
                className="sports-input"
              />
            </div>

            {/* Gender Filter */}
            <div style={{ flex: "1 1 150px" }}>
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="sports-select"
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
                className="sports-select"
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

      {/* Tabs Switcher for Official vs Warm-Up Matches */}
      <div id="fixtures-tabs" style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <button
          onClick={() => setActiveTab("official")}
          style={{
            flex: "1",
            padding: "1rem",
            borderRadius: "12px",
            background: activeTab === "official" ? "linear-gradient(135deg, var(--primary) 0%, #0284c7 100%)" : "var(--bg-secondary)",
            border: activeTab === "official" ? "none" : "1px solid var(--border-color)",
            color: activeTab === "official" ? "#ffffff" : "var(--text-main)",
            fontWeight: "800",
            fontSize: "0.95rem",
            cursor: "pointer",
            boxShadow: activeTab === "official" ? "0 4px 15px rgba(192, 0, 48, 0.25)" : "none",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "0.03em"
          }}
        >
          🏆 Official Tournament Fixtures
        </button>
        <button
          onClick={() => setActiveTab("warmup")}
          style={{
            flex: "1",
            padding: "1rem",
            borderRadius: "12px",
            background: activeTab === "warmup" ? "linear-gradient(135deg, var(--primary) 0%, #0284c7 100%)" : "var(--bg-secondary)",
            border: activeTab === "warmup" ? "none" : "1px solid var(--border-color)",
            color: activeTab === "warmup" ? "#ffffff" : "var(--text-main)",
            fontWeight: "800",
            fontSize: "0.95rem",
            cursor: "pointer",
            boxShadow: activeTab === "warmup" ? "0 4px 15px rgba(192, 0, 48, 0.25)" : "none",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "0.03em"
          }}
        >
          🏒 Pre-Tournament Warm-Up Matches
        </button>
      </div>

      {/* Fixtures List Section */}
      {activeTab === "official" ? (
        <section style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h2 className="text-xl font-bold text-white">Official Tournament Fixtures</h2>
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
                    {getMatchPreviewLink(match) ? (
                      <a href={getMatchPreviewLink(match)} className="match-btn match-btn-primary" style={{ background: "linear-gradient(135deg, #c00030 0%, #a00028 100%)" }}>Match Preview</a>
                    ) : (
                      <a href="/hockey-live-streaming" className="match-btn match-btn-primary">Watch Live</a>
                    )}
                    <a href="https://fih.hockey" target="_blank" rel="noopener noreferrer" className="match-btn match-btn-secondary">Official Stats</a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {filteredMatches.length > ITEMS_PER_PAGE && (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem", marginTop: "2rem", marginBottom: "3rem" }}>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                style={{
                  background: currentPage === 1 ? "rgba(15, 23, 42, 0.02)" : "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  color: currentPage === 1 ? "var(--text-muted)" : "var(--text-main)",
                  padding: "0.6rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                ← Previous
              </button>
              
              <span style={{ fontSize: "0.9rem", color: "var(--text-main)", fontWeight: "600" }}>
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                style={{
                  background: currentPage === totalPages ? "rgba(15, 23, 42, 0.02)" : "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  color: currentPage === totalPages ? "var(--text-muted)" : "var(--text-main)",
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
        </section>
      ) : (
        <section style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h2 className="text-xl font-bold text-white">Pre-Tournament Warm-Up Matches</h2>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "600" }}>
              Showing {WARMUP_MATCHES.length} matches
            </span>
          </div>

          <div className="schedule-grid" style={{ display: "grid", gap: "1.5rem" }}>
            {WARMUP_MATCHES.map((match) => (
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
                  {getMatchPreviewLink(match) ? (
                    <a href={getMatchPreviewLink(match)} className="match-btn match-btn-primary" style={{ background: "linear-gradient(135deg, #c00030 0%, #a00028 100%)" }}>Match Preview</a>
                  ) : (
                    <a href="/hockey-live-streaming" className="match-btn match-btn-primary">Watch Live</a>
                  )}
                  <a href="https://fih.hockey" target="_blank" rel="noopener noreferrer" className="match-btn match-btn-secondary">Official Stats</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PDF Schedule Download Section for SEO */}
      <section style={{ 
        background: "rgba(192, 0, 48, 0.03)", 
        border: "1px dashed var(--primary)", 
        borderRadius: "16px", 
        padding: "2.2rem 1.5rem", 
        textAlign: "center", 
        marginTop: "1rem", 
        marginBottom: "3rem" 
      }}>
        <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}>📄</span>
        <h3 className="text-xl font-bold mb-2" style={{ fontStyle: "italic", color: "var(--text-main)" }}>Save Official Hockey World Cup 2026 Schedule (PDF)</h3>
        <p className="text-sm" style={{ maxWidth: "580px", margin: "0 auto 1.5rem auto", lineHeight: "1.6", color: "var(--text-muted)" }}>
          Choose your gender category below to download, print, or save a beautifully colored, high-quality A4 PDF schedule of the matches on your device.
        </p>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <button 
            onClick={() => handlePrint("Men")} 
            className="view-more-btn"
            style={{ cursor: "pointer", border: "none", background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)", boxShadow: "0 4px 15px rgba(14, 165, 233, 0.3)" }}
          >
            🚹 Save Men's Schedule (PDF)
          </button>
          <button 
            onClick={() => handlePrint("Women")} 
            className="view-more-btn"
            style={{ cursor: "pointer", border: "none", background: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)", boxShadow: "0 4px 15px rgba(244, 63, 94, 0.3)" }}
          >
            🚺 Save Women's Schedule (PDF)
          </button>
        </div>
      </section>

      {/* PRINT-ONLY CONTAINER FOR SAVING/PRINTING BEAUTIFUL PDF */}
      <div className={`print-only-schedule print-mode-${printGender.toLowerCase()}`}>
        <div className="print-header">
          <div className="print-header-top">
            <span className="print-badge-fih">FIH OFFICIAL</span>
          </div>
          <h1>{printGender}'s Hockey World Cup 2026</h1>
          <p>Official Tournament Fixtures & Match Schedule</p>
          <p style={{ fontSize: "0.85rem", marginTop: "10px", opacity: 0.9 }}>
            Co-Hosted by Belgium & Netherlands | Times shown in: {selectedTimezone} Time
          </p>
        </div>

        {/* Selected Gender Schedule list */}
        <div className="print-section-title">{printGender}'s Tournament Fixtures</div>
        <div className="print-grid">
          {ALL_MATCHES.filter(m => m.gender === printGender).map(match => (
            <div key={match.id} className={`print-match-card print-pool-${match.pool.replace(/\s+/g, '-').toLowerCase()}`}>
              <div className="print-match-meta">
                <span>🗓️ {match.date}</span>
                <span className="print-match-time">⏱️ {getConvertedTime(match.timeCET, selectedTimezone)}</span>
              </div>
              <div className="print-match-teams">
                <div className="print-team">
                  <img src={getFlagUrl(match.flagA)} width="20" height="13" alt="" style={{ borderRadius: "2px" }} />
                  <span>{match.teamA}</span>
                </div>
                <span className="print-vs">VS</span>
                <div className="print-team">
                  <img src={getFlagUrl(match.flagB)} width="20" height="13" alt="" style={{ borderRadius: "2px" }} />
                  <span>{match.teamB}</span>
                </div>
              </div>
              <div className="print-match-footer">
                <span className="print-venue">🏟️ {match.venue}</span>
                <span>Match #{match.gender === "Women" ? match.id : match.id - 50} ({match.pool})</span>
              </div>
            </div>
          ))}
        </div>

        {/* Warm-Up Section */}
        <div className="print-section-title" style={{ pageBreakBefore: "always" }}>Pre-Tournament Warm-Up Matches ({printGender})</div>
        <div className="print-grid">
          {WARMUP_MATCHES.filter(m => m.gender === printGender).map(match => (
            <div key={match.id} className={`print-match-card print-pool-warm-up`}>
              <div className="print-match-meta">
                <span>🗓️ {match.date}</span>
                <span className="print-match-time">⏱️ {getConvertedTime(match.timeCET, selectedTimezone)}</span>
              </div>
              <div className="print-match-teams">
                <div className="print-team">
                  <img src={getFlagUrl(match.flagA)} width="20" height="13" alt="" style={{ borderRadius: "2px" }} />
                  <span>{match.teamA}</span>
                </div>
                <span className="print-vs">VS</span>
                <div className="print-team">
                  <img src={getFlagUrl(match.flagB)} width="20" height="13" alt="" style={{ borderRadius: "2px" }} />
                  <span>{match.teamB}</span>
                </div>
              </div>
              <div className="print-match-footer">
                <span className="print-venue">🏟️ {match.venue}</span>
                <span>Warm-Up Match</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
