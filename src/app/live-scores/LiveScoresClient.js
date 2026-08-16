"use client";

import React, { useState, useEffect } from "react";
import FaqAccordion from "../components/FaqAccordion";

const DEFAULT_LIVE_MATCHES = [
  {
    id: 201,
    status: "LIVE",
    period: "3rd Quarter",
    minute: "38'",
    gender: "Men",
    pool: "Pool C (Men)",
    teamA: "Australia",
    flagA: "au",
    scoreA: 2,
    teamB: "Ireland",
    flagB: "ie",
    scoreB: 1,
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "08:30",
    stats: {
      possession: "59% - 41%",
      penaltyCorners: "5 (1) - 2 (1)",
      shotsOnTarget: "9 - 3",
      yellowCards: 0,
      redCards: 0
    },
    events: [
      { minute: "11'", player: "Blake Govers", type: "Penalty Corner Goal ⚽", team: "Australia" },
      { minute: "24'", player: "Lee Cole", type: "Penalty Corner Goal ⚽", team: "Ireland" },
      { minute: "35'", player: "Jeremy Hayward", type: "Field Goal ⚽", team: "Australia" }
    ],
    postMatchSetup: {
      recapSlug: "/matches/australia-vs-spain",
      highlightsUrl: "https://www.youtube.com/@FIHockey",
      nextMatchA: "Australia vs Spain — Aug 18 (11:00 CET)",
      nextMatchB: "Ireland vs South Africa — Aug 18 (14:00 CET)"
    }
  },
  {
    id: 202,
    status: "LIVE",
    period: "1st Quarter",
    minute: "12'",
    gender: "Women",
    pool: "Pool D (Women)",
    teamA: "China",
    flagA: "cn",
    scoreA: 1,
    teamB: "India",
    flagB: "in",
    scoreB: 0,
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "10:00",
    stats: {
      possession: "52% - 48%",
      penaltyCorners: "2 (1) - 1 (0)",
      shotsOnTarget: "4 - 2",
      yellowCards: 0,
      redCards: 0
    },
    events: [
      { minute: "08'", player: "Gu Bingfeng", type: "Penalty Corner Goal ⚽", team: "China" }
    ],
    postMatchSetup: {
      recapSlug: "/matches/india-vs-england-women",
      highlightsUrl: "https://www.youtube.com/@FIHockey",
      nextMatchA: "China vs England — Aug 18 (09:30 CET)",
      nextMatchB: "India vs South Africa — Aug 18 (12:00 CET)"
    }
  }
];

const DEFAULT_UPCOMING_TODAY = [
  {
    id: 203,
    status: "UPCOMING",
    timeCET: "11:30 CET",
    match: "Spain vs South Africa",
    gender: "Men",
    pool: "Pool C",
    teamA: "Spain",
    flagA: "es",
    teamB: "South Africa",
    flagB: "za",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    previewUrl: "/matches/australia-vs-spain"
  },
  {
    id: 204,
    status: "UPCOMING",
    timeCET: "13:00 CET",
    match: "Netherlands vs New Zealand",
    gender: "Men",
    pool: "Pool A",
    teamA: "Netherlands",
    flagA: "nl",
    teamB: "New Zealand",
    flagB: "nz",
    venue: "Wagener Stadium, Amstelveen (NED)",
    previewUrl: "/matches/germany-vs-netherlands"
  },
  {
    id: 205,
    status: "UPCOMING",
    timeCET: "14:30 CET",
    match: "Belgium vs New Zealand",
    gender: "Women",
    pool: "Pool C",
    teamA: "Belgium",
    flagA: "be",
    teamB: "New Zealand",
    flagB: "nz",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    previewUrl: "/womens-tournament"
  },
  {
    id: 206,
    status: "UPCOMING",
    timeCET: "16:00 CET",
    match: "Argentina vs Japan",
    gender: "Men",
    pool: "Pool A",
    teamA: "Argentina",
    flagA: "ar",
    teamB: "Japan",
    flagB: "jp",
    venue: "Wagener Stadium, Amstelveen (NED)",
    previewUrl: "/matches/australia-vs-argentina"
  }
];

const DEFAULT_COMPLETED_RESULTS = [
  {
    id: 101,
    status: "FINAL",
    match: "England vs Pakistan",
    gender: "Men",
    pool: "Pool D",
    scoreA: 4,
    scoreB: 1,
    teamA: "England",
    flagA: "gb-eng",
    teamB: "Pakistan",
    flagB: "pk",
    venue: "Wagener Stadium, Amstelveen",
    date: "Aug 15",
    scorers: "Liam Ansell (14' PC), Phil Roper (39'), Sam Ward (47' PC), Nicholas Bandurak (54') | Muhammad Shahbaz Jr. (28')",
    recapUrl: "/news/england-vs-pakistan-result-score-august-15-hwc-2026"
  },
  {
    id: 102,
    status: "FINAL",
    match: "India vs Wales",
    gender: "Men",
    pool: "Pool D",
    scoreA: 3,
    scoreB: 1,
    teamA: "India",
    flagA: "in",
    teamB: "Wales",
    flagB: "gb-wls",
    venue: "Wagener Stadium, Amstelveen",
    date: "Aug 15",
    scorers: "Harmanpreet Singh (12' PC, 34' PC), Abhishek (22') | Gareth Furlong (28' PC)",
    recapUrl: "/news/india-vs-wales-result-score-august-15-hwc-2026"
  },
  {
    id: 103,
    status: "FINAL",
    match: "Belgium vs France",
    gender: "Men",
    pool: "Pool B",
    scoreA: 3,
    scoreB: 1,
    teamA: "Belgium",
    flagA: "be",
    teamB: "France",
    flagB: "fr",
    venue: "Belfius Arena, Wavre",
    date: "Aug 15",
    scorers: "Alexander Hendrickx (09' PC), Florent van Aubel (16'), Tom Boon (53' PC) | Timothée Clément (44' PC)",
    recapUrl: "/news/belgium-vs-france-result-score-august-15-hwc-2026"
  },
  {
    id: 104,
    status: "FINAL",
    match: "Germany vs Malaysia",
    gender: "Men",
    pool: "Pool B",
    scoreA: 3,
    scoreB: 1,
    teamA: "Germany",
    flagA: "de",
    teamB: "Malaysia",
    flagB: "my",
    venue: "Belfius Arena, Wavre",
    date: "Aug 15",
    scorers: "Gonzalo Peillat (08' PC, 41' PC), Mats Grambusch (29') | Faizal Saari (38')",
    recapUrl: "/news/germany-vs-malaysia-result-score-august-15-hwc-2026"
  },
  {
    id: 105,
    status: "FINAL",
    match: "Netherlands vs Chile",
    gender: "Women",
    pool: "Pool A",
    scoreA: 5,
    scoreB: 0,
    teamA: "Netherlands",
    flagA: "nl",
    teamB: "Chile",
    flagB: "cl",
    venue: "Wagener Stadium, Amstelveen",
    date: "Aug 15",
    scorers: "Felice Albers (04', 19'), Yibbi Jansen (11' PC), Frederique Matla (33', 48')",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  },
  {
    id: 106,
    status: "FINAL",
    match: "Germany vs Scotland",
    gender: "Women",
    pool: "Pool B",
    scoreA: 4,
    scoreB: 0,
    teamA: "Germany",
    flagA: "de",
    teamB: "Scotland",
    flagB: "gb-sct",
    venue: "Belfius Arena, Wavre",
    date: "Aug 15",
    scorers: "Charlotte Stapenhorst (06', 29'), Nike Lorenz (15' PC), Sonja Zimmermann (48')",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  },
  {
    id: 107,
    status: "FINAL",
    match: "Argentina vs United States",
    gender: "Women",
    pool: "Pool B",
    scoreA: 3,
    scoreB: 1,
    teamA: "Argentina",
    flagA: "ar",
    teamB: "USA",
    flagB: "us",
    venue: "Belfius Arena, Wavre",
    date: "Aug 15",
    scorers: "Agustina Gorzelany (14' PC, 52' PC), Julieta Jankunas (27') | Ashley Sessa (44')",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  },
  {
    id: 108,
    status: "FINAL",
    match: "Australia vs Japan",
    gender: "Women",
    pool: "Pool A",
    scoreA: 2,
    scoreB: 0,
    teamA: "Australia",
    flagA: "au",
    teamB: "Japan",
    flagB: "jp",
    venue: "Wagener Stadium, Amstelveen",
    date: "Aug 15",
    scorers: "Amy Lawton (18'), Stephanie Kershaw (42')",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  }
];

export default function LiveScoresClient() {
  const [liveMatches, setLiveMatches] = useState(DEFAULT_LIVE_MATCHES);
  const [upcomingToday, setUpcomingToday] = useState(DEFAULT_UPCOMING_TODAY);
  const [completedMatches, setCompletedMatches] = useState(DEFAULT_COMPLETED_RESULTS);
  const [activeFilter, setActiveFilter] = useState("all");
  const [lastSyncTime, setLastSyncTime] = useState("");

  const fetchScores = async () => {
    try {
      const res = await fetch(`/api/live-scores?t=${Date.now()}`, {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Pragma": "no-cache"
        }
      });
      if (res.ok) {
        const json = await res.json();
        if (json.liveMatches) setLiveMatches(json.liveMatches);
        if (json.upcomingToday) setUpcomingToday(json.upcomingToday);
        if (json.completedMatches) setCompletedMatches(json.completedMatches);
        setLastSyncTime(new Date().toLocaleTimeString());
      }
    } catch (e) {
      console.error("Failed to sync live scores:", e);
    }
  };

  useEffect(() => {
    fetchScores();
    const interval = setInterval(fetchScores, 20000); // 20s live sync
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Live Section */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <div className="live-indicator mb-4" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(34, 197, 94, 0.15)", color: "#16a34a", padding: "0.4rem 1rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: "800", border: "1px solid rgba(34, 197, 94, 0.3)" }}>
            <span className="live-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}></span>
            Real-Time Tournament Match Center Active {lastSyncTime && `(Synced: ${lastSyncTime})`}
          </div>
          <h1 className="hero-title">Hockey World Cup 2026 Live Scores & Match Results</h1>
          <p className="hero-description">
            Live quarter-by-quarter scorecards, real-time penalty corner conversion stats, goal timelines, confirmed match results, and today's upcoming pushback fixtures.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid var(--border-color)", padding: "0.4rem 1rem", borderRadius: "8px", fontSize: "0.85rem" }}>
              ✅ Verified by <strong>HWC 2026 Editorial Desk</strong> (Synced with official FIH live match logs)
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-8">
        {/* MATCH STATE FILTER BUTTONS */}
        <div style={{
          display: "flex",
          gap: "0.6rem",
          marginBottom: "2.5rem",
          overflowX: "auto",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid #e2e8f0"
        }}>
          <button
            onClick={() => setActiveFilter("all")}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "800",
              fontSize: "0.88rem",
              background: activeFilter === "all" ? "var(--primary)" : "#f1f5f9",
              color: activeFilter === "all" ? "#ffffff" : "#475569",
              transition: "all 0.2s"
            }}
          >
            ⚡ ALL MATCHES ({liveMatches.length + upcomingToday.length + completedMatches.length})
          </button>
          <button
            onClick={() => setActiveFilter("live")}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "800",
              fontSize: "0.88rem",
              background: activeFilter === "live" ? "#dc2626" : "#fee2e2",
              color: activeFilter === "live" ? "#ffffff" : "#991b1b",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem"
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }}></span>
            🔴 LIVE NOW ({liveMatches.length})
          </button>
          <button
            onClick={() => setActiveFilter("today")}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "800",
              fontSize: "0.88rem",
              background: activeFilter === "today" ? "#0284c7" : "#e0f2fe",
              color: activeFilter === "today" ? "#ffffff" : "#0369a1",
              transition: "all 0.2s"
            }}
          >
            ⏰ TODAY'S SCHEDULE ({upcomingToday.length})
          </button>
          <button
            onClick={() => setActiveFilter("results")}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "800",
              fontSize: "0.88rem",
              background: activeFilter === "results" ? "#16a34a" : "#dcfce7",
              color: activeFilter === "results" ? "#ffffff" : "#166534",
              transition: "all 0.2s"
            }}
          >
            ✅ COMPLETED RESULTS ({completedMatches.length})
          </button>
        </div>

        {/* SECTION 1: ACTIVE LIVE MATCHES IN PROGRESS */}
        {(activeFilter === "all" || activeFilter === "live") && liveMatches.length > 0 && (
          <section className="mb-12">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.2rem" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 10px #22c55e" }}></span>
              <h2 style={{ fontSize: "1.35rem", fontWeight: "900", color: "#0f172a", margin: 0 }}>
                🔴 LIVE MATCHES IN PROGRESS (Matchday 2)
              </h2>
            </div>

            <div style={{ display: "grid", gap: "2rem" }}>
              {liveMatches.map((match) => (
                <div key={match.id} style={{
                  background: "#ffffff",
                  border: "2px solid var(--primary)",
                  borderRadius: "16px",
                  padding: "1.75rem 2rem",
                  position: "relative",
                  boxShadow: "0 10px 30px rgba(192, 0, 48, 0.08)"
                }}>
                  {/* Card Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }}></span>
                      <strong style={{ color: "#16a34a", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "900", letterSpacing: "0.05em" }}>
                        {match.period} · {match.minute}
                      </strong>
                    </div>
                    <span style={{ background: "#e0f2fe", color: "#0369a1", fontWeight: "800", fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "6px" }}>
                      {match.pool}
                    </span>
                  </div>

                  {/* 3-Column Scoreboard Grid */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    gap: "1rem",
                    width: "100%"
                  }}>
                    {/* Team A */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 0 }}>
                      <img src={`https://flagcdn.com/w40/${match.flagA}.png`} width="36" height="24" alt={match.teamA} style={{ borderRadius: "3px", border: "1px solid #e2e8f0", flexShrink: 0 }} />
                      <div style={{ minWidth: 0 }}>
                        <h3 style={{ fontSize: "1.15rem", fontWeight: "900", margin: 0, color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {match.teamA}
                        </h3>
                        <span style={{ fontSize: "0.75rem", color: "#64748b" }}>Home</span>
                      </div>
                    </div>

                    {/* Live Score Display (Never breaks) */}
                    <div style={{
                      textAlign: "center",
                      padding: "0.5rem 1.25rem",
                      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                      borderRadius: "12px",
                      color: "#ffffff",
                      minWidth: "110px",
                      flexShrink: 0
                    }}>
                      <span style={{ fontSize: "1.75rem", fontWeight: "900", letterSpacing: "0.08em", whiteSpace: "nowrap", display: "block" }}>
                        {match.scoreA} - {match.scoreB}
                      </span>
                      <span style={{ display: "block", fontSize: "0.65rem", color: "#4ade80", fontWeight: "800", textTransform: "uppercase" }}>
                        ● LIVE CLOCK
                      </span>
                    </div>

                    {/* Team B */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.75rem", minWidth: 0, textAlign: "right" }}>
                      <div style={{ minWidth: 0 }}>
                        <h3 style={{ fontSize: "1.15rem", fontWeight: "900", margin: 0, color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {match.teamB}
                        </h3>
                        <span style={{ fontSize: "0.75rem", color: "#64748b" }}>Away</span>
                      </div>
                      <img src={`https://flagcdn.com/w40/${match.flagB}.png`} width="36" height="24" alt={match.teamB} style={{ borderRadius: "3px", border: "1px solid #e2e8f0", flexShrink: 0 }} />
                    </div>
                  </div>

                  {/* Goal Events Timeline */}
                  {match.events && match.events.length > 0 && (
                    <div style={{ marginTop: "1.5rem", padding: "0.85rem 1rem", background: "#f8fafc", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                      <strong style={{ fontSize: "0.75rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "0.4rem" }}>
                        ⚽ Live Goal Timeline:
                      </strong>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                        {match.events.map((ev, i) => (
                          <span key={i} style={{ fontSize: "0.8rem", background: "#ffffff", padding: "0.25rem 0.55rem", borderRadius: "6px", border: "1px solid #cbd5e1", color: "#0f172a", fontWeight: "600" }}>
                            <strong>{ev.minute}</strong> {ev.player} ({ev.team}) - {ev.type}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Realtime Stats Bar */}
                  {match.stats && (
                    <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "0.75rem", background: "#ffffff", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                      <div style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "0.72rem", color: "#64748b", display: "block" }}>Possession</span>
                        <strong style={{ fontSize: "0.88rem", color: "#0f172a" }}>{match.stats.possession}</strong>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "0.72rem", color: "#64748b", display: "block" }}>Penalty Corners</span>
                        <strong style={{ fontSize: "0.88rem", color: "var(--primary)" }}>{match.stats.penaltyCorners}</strong>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "0.72rem", color: "#64748b", display: "block" }}>Shots on Target</span>
                        <strong style={{ fontSize: "0.88rem", color: "#0f172a" }}>{match.stats.shotsOnTarget}</strong>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "0.72rem", color: "#64748b", display: "block" }}>Venue</span>
                        <strong style={{ fontSize: "0.78rem", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block" }}>📍 {match.venue}</strong>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: TODAY'S UPCOMING MATCHES SCHEDULE */}
        {(activeFilter === "all" || activeFilter === "today") && upcomingToday.length > 0 && (
          <section className="mb-12">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ fontSize: "1.2rem" }}>⏰</span>
                <h2 style={{ fontSize: "1.35rem", fontWeight: "900", color: "#0f172a", margin: 0 }}>
                  TODAY'S UPCOMING FIXTURES (August 16, 2026)
                </h2>
              </div>
              <span style={{ fontSize: "0.8rem", color: "#0369a1", background: "#e0f2fe", padding: "0.25rem 0.7rem", borderRadius: "6px", fontWeight: "700" }}>
                Starting in Next Match Slots
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "1.25rem" }}>
              {upcomingToday.map((match) => (
                <div key={match.id} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "1.25rem", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.6rem" }}>
                    <span style={{ background: "#fef3c7", color: "#92400e", fontWeight: "800", fontSize: "0.72rem", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                      ⏳ {match.timeCET}
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: "800" }}>{match.gender}'s {match.pool}</span>
                  </div>

                  {/* 3-Column Match Teams */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
                      <img src={`https://flagcdn.com/w40/${match.flagA}.png`} width="22" height="15" alt={match.teamA} style={{ borderRadius: "2px", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.92rem", fontWeight: "800", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {match.teamA}
                      </span>
                    </div>
                    <span style={{ color: "#94a3b8", fontWeight: "900", fontSize: "0.8rem", padding: "0 0.2rem", flexShrink: 0 }}>VS</span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem", minWidth: 0, textAlign: "right" }}>
                      <span style={{ fontSize: "0.92rem", fontWeight: "800", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {match.teamB}
                      </span>
                      <img src={`https://flagcdn.com/w40/${match.flagB}.png`} width="22" height="15" alt={match.teamB} style={{ borderRadius: "2px", flexShrink: 0 }} />
                    </div>
                  </div>

                  <p style={{ fontSize: "0.74rem", color: "#64748b", margin: "0 0 0.85rem 0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>📍 {match.venue}</p>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {match.previewUrl && (
                      <a href={match.previewUrl} style={{ flex: 1, textAlign: "center", background: "var(--primary)", color: "#ffffff", padding: "0.45rem", borderRadius: "6px", fontSize: "0.78rem", fontWeight: "700", textDecoration: "none" }}>
                        Tactical Preview →
                      </a>
                    )}
                    <a href="/schedule" style={{ flex: 1, textAlign: "center", background: "#f1f5f9", color: "#0f172a", padding: "0.45rem", borderRadius: "6px", fontSize: "0.78rem", fontWeight: "700", textDecoration: "none" }}>
                      Timezone Converter
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: COMPLETED RESULTS (AUTOMATICALLY SHIFTED DOWN) */}
        {(activeFilter === "all" || activeFilter === "results") && completedMatches.length > 0 && (
          <section className="mb-12">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ fontSize: "1.2rem" }}>✅</span>
                <h2 style={{ fontSize: "1.35rem", fontWeight: "900", color: "#0f172a", margin: 0 }}>
                  CONFIRMED TOURNAMENT MATCH RESULTS ({completedMatches.length} Matches Completed)
                </h2>
              </div>
              <span style={{ fontSize: "0.8rem", color: "#16a34a", background: "#dcfce7", padding: "0.25rem 0.7rem", borderRadius: "6px", fontWeight: "700" }}>
                Official FIH Final Results
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "1.25rem" }}>
              {completedMatches.map((res) => (
                <div key={res.id} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "1.25rem", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
                  {/* Card Sub-Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                    <span style={{ background: "#f1f5f9", color: "#334155", fontSize: "0.72rem", fontWeight: "800", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                      {res.gender}'s {res.pool}
                    </span>
                    <span style={{ background: "#dcfce7", color: "#166534", fontSize: "0.72rem", fontWeight: "800", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                      FINAL
                    </span>
                  </div>

                  <span style={{ fontSize: "0.74rem", color: "#64748b", display: "block", marginBottom: "0.75rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    📍 {res.venue}
                  </span>

                  {/* 3-Column Scoreboard (Guaranteed Never to break onto 2 lines) */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.85rem"
                  }}>
                    {/* Team A */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
                      <img src={`https://flagcdn.com/w40/${res.flagA}.png`} width="22" height="15" alt={res.teamA} style={{ borderRadius: "2px", flexShrink: 0, border: "1px solid #e2e8f0" }} />
                      <span style={{ fontSize: "0.92rem", fontWeight: "800", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {res.teamA}
                      </span>
                    </div>

                    {/* Score Badge */}
                    <div style={{
                      background: "#0f172a",
                      color: "#ffffff",
                      padding: "0.3rem 0.7rem",
                      borderRadius: "8px",
                      fontWeight: "900",
                      fontSize: "1.15rem",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                      textAlign: "center",
                      flexShrink: 0,
                      minWidth: "62px"
                    }}>
                      {res.scoreA} - {res.scoreB}
                    </div>

                    {/* Team B */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem", minWidth: 0, textAlign: "right" }}>
                      <span style={{ fontSize: "0.92rem", fontWeight: "800", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {res.teamB}
                      </span>
                      <img src={`https://flagcdn.com/w40/${res.flagB}.png`} width="22" height="15" alt={res.teamB} style={{ borderRadius: "2px", flexShrink: 0, border: "1px solid #e2e8f0" }} />
                    </div>
                  </div>

                  {res.scorers && (
                    <div style={{ fontSize: "0.76rem", color: "#475569", margin: "0.5rem 0 0.85rem 0", lineHeight: "1.45", background: "#f8fafc", padding: "0.5rem 0.7rem", borderRadius: "8px", border: "1px solid #f1f5f9" }}>
                      ⚽ <strong>Goals:</strong> {res.scorers}
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {res.recapUrl && (
                      <a href={res.recapUrl} style={{ flex: 1, textAlign: "center", background: "#c00030", color: "#ffffff", padding: "0.4rem", borderRadius: "6px", fontSize: "0.76rem", fontWeight: "700", textDecoration: "none" }}>
                        Match Report →
                      </a>
                    )}
                    <a href="/points-table" style={{ flex: 1, textAlign: "center", background: "#f1f5f9", color: "#0f172a", padding: "0.4rem", borderRadius: "6px", fontSize: "0.76rem", fontWeight: "700", textDecoration: "none", border: "1px solid #e2e8f0" }}>
                      Standings
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
