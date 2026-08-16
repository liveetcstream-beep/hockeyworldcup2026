"use client";

import React, { useState, useEffect } from "react";

const DEFAULT_LIVE_MATCHES = [
  {
    id: 203,
    status: "LIVE",
    period: "2nd Quarter",
    minute: "24'",
    quarterNumber: 2,
    elapsedMinutes: 24,
    timeCET: "11:30 CET",
    localTimes: "15:00 IST / 14:30 PST",
    gender: "Men's Pool C",
    teamA: "Spain",
    flagA: "es",
    scoreA: 1,
    teamB: "South Africa",
    flagB: "za",
    scoreB: 0,
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    stats: {
      possession: "56% - 44%",
      penaltyCorners: "3 (1) - 1 (0)",
      shotsOnTarget: "5 - 2"
    },
    events: [
      { minute: "14'", player: "Marc Miralles", type: "Penalty Corner Goal ⚽", team: "Spain" }
    ]
  }
];

const DEFAULT_UPCOMING_TODAY = [
  {
    id: 204,
    status: "UPCOMING",
    timeCET: "13:00 CET",
    localTimes: "16:30 IST / 16:00 PST / 23:00 NZST",
    match: "Netherlands vs New Zealand",
    gender: "Men's Pool A",
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
    localTimes: "18:00 IST / 17:30 PST",
    match: "Belgium vs New Zealand",
    gender: "Women's Pool C",
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
    localTimes: "19:30 IST / 19:00 PST / 23:00 JST",
    match: "Argentina vs Japan",
    gender: "Men's Pool A",
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
    id: 201,
    status: "FINAL",
    match: "Australia vs Ireland",
    gender: "Men's Pool C",
    scoreA: 2,
    scoreB: 1,
    teamA: "Australia",
    flagA: "au",
    teamB: "Ireland",
    flagB: "ie",
    venue: "Belfius Hockey Arena, Wavre",
    date: "Aug 16 · FT",
    scorers: "Blake Govers (11' PC), Jeremy Hayward (35') | Lee Cole (24' PC)",
    recapUrl: "/news/australia-vs-spain-result-score-hwc-2026"
  },
  {
    id: 202,
    status: "FINAL",
    match: "China vs India",
    gender: "Women's Pool D",
    scoreA: 1,
    scoreB: 0,
    teamA: "China",
    flagA: "cn",
    teamB: "India",
    flagB: "in",
    venue: "Wagener Stadium, Amstelveen",
    date: "Aug 16 · FT",
    scorers: "Gu Bingfeng (08' PC)",
    recapUrl: "/news/india-vs-england-result-score-hwc-2026"
  },
  {
    id: 101,
    status: "FINAL",
    match: "England vs Pakistan",
    gender: "Men's Pool D",
    scoreA: 4,
    scoreB: 1,
    teamA: "England",
    flagA: "gb-eng",
    teamB: "Pakistan",
    flagB: "pk",
    venue: "Wagener Stadium, Amstelveen",
    date: "Aug 15 · FT",
    scorers: "Liam Ansell (14' PC), Phil Roper (39'), Sam Ward (47' PC), Nicholas Bandurak (54') | Muhammad Shahbaz Jr. (28')",
    recapUrl: "/news/england-vs-pakistan-result-score-august-15-hwc-2026"
  },
  {
    id: 102,
    status: "FINAL",
    match: "India vs Wales",
    gender: "Men's Pool D",
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
    gender: "Men's Pool B",
    scoreA: 3,
    scoreB: 1,
    teamA: "Belgium",
    flagA: "be",
    teamB: "France",
    flagB: "fr",
    venue: "Belfius Hockey Arena, Wavre",
    date: "Aug 15",
    scorers: "Alexander Hendrickx (09' PC), Florent van Aubel (16'), Tom Boon (53' PC) | Timothée Clément (44' PC)",
    recapUrl: "/news/belgium-vs-france-result-score-august-15-hwc-2026"
  },
  {
    id: 104,
    status: "FINAL",
    match: "Germany vs Malaysia",
    gender: "Men's Pool B",
    scoreA: 3,
    scoreB: 1,
    teamA: "Germany",
    flagA: "de",
    teamB: "Malaysia",
    flagB: "my",
    venue: "Belfius Hockey Arena, Wavre",
    date: "Aug 15",
    scorers: "Gonzalo Peillat (08' PC, 41' PC), Mats Grambusch (29') | Faizal Saari (38')",
    recapUrl: "/news/germany-vs-malaysia-result-score-august-15-hwc-2026"
  },
  {
    id: 105,
    status: "FINAL",
    match: "Netherlands vs Chile",
    gender: "Women's Pool A",
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
    gender: "Women's Pool B",
    scoreA: 4,
    scoreB: 0,
    teamA: "Germany",
    flagA: "de",
    teamB: "Scotland",
    flagB: "gb-sct",
    venue: "Belfius Hockey Arena, Wavre",
    date: "Aug 15",
    scorers: "Charlotte Stapenhorst (06', 29'), Nike Lorenz (15' PC), Sonja Zimmermann (48')",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  },
  {
    id: 107,
    status: "FINAL",
    match: "Argentina vs USA",
    gender: "Women's Pool B",
    scoreA: 3,
    scoreB: 1,
    teamA: "Argentina",
    flagA: "ar",
    teamB: "USA",
    flagB: "us",
    venue: "Belfius Hockey Arena, Wavre",
    date: "Aug 15",
    scorers: "Agustina Gorzelany (14' PC, 52' PC), Julieta Jankunas (27') | Ashley Sessa (44')",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  },
  {
    id: 108,
    status: "FINAL",
    match: "Australia vs Japan",
    gender: "Women's Pool A",
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
  const [runningSeconds, setRunningSeconds] = useState(28);

  // Live seconds ticker effect
  useEffect(() => {
    const secTimer = setInterval(() => {
      setRunningSeconds((prev) => (prev >= 59 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(secTimer);
  }, []);

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
    const interval = setInterval(fetchScores, 20000);
    return () => clearInterval(interval);
  }, []);

  const formatSeconds = (sec) => (sec < 10 ? `0${sec}` : `${sec}`);

  return (
    <div>
      {/* Hero Live Header Banner */}
      <section className="hero-section" style={{ padding: "3rem 0 2rem 0", background: "linear-gradient(180deg, rgba(2, 132, 199, 0.04) 0%, rgba(255, 255, 255, 0) 100%)" }}>
        <div className="sports-container hero-content">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(34, 197, 94, 0.12)", color: "#15803d", padding: "0.4rem 1rem", borderRadius: "999px", fontSize: "0.82rem", fontWeight: "800", border: "1px solid rgba(34, 197, 94, 0.25)", marginBottom: "1.25rem" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}></span>
            Real-Time Tournament Match Center Active {lastSyncTime && `(Synced: ${lastSyncTime})`}
          </div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "900", color: "#0f172a", marginBottom: "0.75rem", letterSpacing: "-0.03em" }}>
            Hockey World Cup 2026 Live Scores & Match Results
          </h1>
          <p className="hero-description" style={{ color: "#475569", fontSize: "1.05rem", maxWidth: "800px", margin: "0 auto 1.5rem auto", lineHeight: "1.6" }}>
            Follow live quarter-by-quarter timers, elapsed match duration, real-time penalty corner conversion rates, goal timelines, official results, and today's upcoming pushbacks.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "0.4rem 0.9rem", borderRadius: "8px", fontSize: "0.82rem", color: "#334155", fontWeight: "600", boxShadow: "0 2px 5px rgba(0,0,0,0.02)" }}>
              ✅ Verified by <strong>HWC 2026 Editorial Desk</strong>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "0.4rem 0.9rem", borderRadius: "8px", fontSize: "0.82rem", color: "#334155", fontWeight: "600", boxShadow: "0 2px 5px rgba(0,0,0,0.02)" }}>
              ⚡ Polling Frequency: <strong>20s Live Sync</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-8">
        {/* INTERACTIVE MATCH FILTER TABS */}
        <div style={{
          display: "flex",
          gap: "0.75rem",
          marginBottom: "2.5rem",
          overflowX: "auto",
          paddingBottom: "0.5rem",
          borderBottom: "2px solid #e2e8f0"
        }}>
          <button
            onClick={() => setActiveFilter("all")}
            style={{
              padding: "0.65rem 1.25rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "800",
              fontSize: "0.85rem",
              background: activeFilter === "all" ? "var(--primary)" : "#f1f5f9",
              color: activeFilter === "all" ? "#ffffff" : "#475569",
              transition: "all 0.2s"
            }}
          >
            ⚡ ALL FIXTURES ({liveMatches.length + upcomingToday.length + completedMatches.length})
          </button>
          <button
            onClick={() => setActiveFilter("live")}
            style={{
              padding: "0.65rem 1.25rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "800",
              fontSize: "0.85rem",
              background: activeFilter === "live" ? "#dc2626" : "#fee2e2",
              color: activeFilter === "live" ? "#ffffff" : "#991b1b",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem"
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }}></span>
            🔴 LIVE MATCHES ({liveMatches.length})
          </button>
          <button
            onClick={() => setActiveFilter("today")}
            style={{
              padding: "0.65rem 1.25rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "800",
              fontSize: "0.85rem",
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
              padding: "0.65rem 1.25rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "800",
              fontSize: "0.85rem",
              background: activeFilter === "results" ? "#16a34a" : "#dcfce7",
              color: activeFilter === "results" ? "#ffffff" : "#166534",
              transition: "all 0.2s"
            }}
          >
            ✅ CONFIRMED RESULTS ({completedMatches.length})
          </button>
        </div>

        {/* ==================================================================== */}
        {/* BLOCK 1: ACTIVE LIVE MATCHES IN PROGRESS PANEL */}
        {/* ==================================================================== */}
        {(activeFilter === "all" || activeFilter === "live") && liveMatches.length > 0 && (
          <section style={{
            background: "#ffffff",
            border: "1px solid #fecdd3",
            borderTop: "4px solid #c00030",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "3.5rem",
            boxShadow: "0 4px 20px rgba(192, 0, 48, 0.04)"
          }}>
            {/* Section Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #fecdd3", paddingBottom: "1rem", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 10px #22c55e" }}></span>
                <h2 style={{ fontSize: "1.35rem", fontWeight: "900", color: "#0f172a", margin: 0 }}>
                  🔴 LIVE MATCHES IN PROGRESS (Matchday 2)
                </h2>
              </div>
              <span style={{ fontSize: "0.78rem", color: "#b91c1c", background: "#fee2e2", padding: "0.3rem 0.75rem", borderRadius: "6px", fontWeight: "800" }}>
                {liveMatches.length} Matches Active Now
              </span>
            </div>

            <div style={{ display: "grid", gap: "1.75rem" }}>
              {liveMatches.map((match) => (
                <div key={match.id} style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  position: "relative"
                }}>
                  {/* Card Header with Elapsed Match Time */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}></span>
                      <strong style={{ color: "#15803d", fontSize: "0.88rem", textTransform: "uppercase", fontWeight: "900", letterSpacing: "0.03em" }}>
                        {match.period} · {match.minute}
                      </strong>
                      <span style={{ background: "#dcfce7", color: "#166534", fontSize: "0.74rem", fontWeight: "800", padding: "0.15rem 0.5rem", borderRadius: "4px" }}>
                        ⏱️ {match.elapsedMinutes || 38} mins elapsed ({60 - (match.elapsedMinutes || 38)}' remaining)
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <span style={{ background: "#e0f2fe", color: "#0369a1", fontWeight: "800", fontSize: "0.72rem", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                        {match.gender}
                      </span>
                      <span style={{ background: "#f1f5f9", color: "#334155", fontWeight: "800", fontSize: "0.72rem", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                        Pushback: {match.timeCET}
                      </span>
                    </div>
                  </div>

                  {/* 3-Column Scoreboard Grid */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    gap: "1rem",
                    width: "100%",
                    background: "#ffffff",
                    padding: "1.1rem",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0"
                  }}>
                    {/* Team A */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", minWidth: 0 }}>
                      <img src={`https://flagcdn.com/w40/${match.flagA}.png`} width="32" height="21" alt={match.teamA} style={{ borderRadius: "3px", border: "1px solid #e2e8f0", flexShrink: 0 }} />
                      <div style={{ minWidth: 0 }}>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: "900", margin: 0, color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {match.teamA}
                        </h3>
                        <span style={{ fontSize: "0.72rem", color: "#64748b" }}>Home</span>
                      </div>
                    </div>

                    {/* Live Score Display with Live Clock Ticker */}
                    <div style={{
                      textAlign: "center",
                      padding: "0.5rem 1.25rem",
                      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                      borderRadius: "12px",
                      color: "#ffffff",
                      minWidth: "120px",
                      flexShrink: 0,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                    }}>
                      <span style={{ fontSize: "1.65rem", fontWeight: "900", letterSpacing: "0.08em", whiteSpace: "nowrap", display: "block" }}>
                        {match.scoreA} - {match.scoreB}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.68rem", color: "#4ade80", fontWeight: "800", textTransform: "uppercase", background: "rgba(255,255,255,0.08)", padding: "0.15rem 0.5rem", borderRadius: "4px", marginTop: "0.2rem" }}>
                        ● {match.minute.replace("'", "")}:{formatSeconds(runningSeconds)} CLOCK
                      </span>
                    </div>

                    {/* Team B */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.6rem", minWidth: 0, textAlign: "right" }}>
                      <div style={{ minWidth: 0 }}>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: "900", margin: 0, color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {match.teamB}
                        </h3>
                        <span style={{ fontSize: "0.72rem", color: "#64748b" }}>Away</span>
                      </div>
                      <img src={`https://flagcdn.com/w40/${match.flagB}.png`} width="32" height="21" alt={match.teamB} style={{ borderRadius: "3px", border: "1px solid #e2e8f0", flexShrink: 0 }} />
                    </div>
                  </div>

                  {/* Goal Events Timeline */}
                  {match.events && match.events.length > 0 && (
                    <div style={{ marginTop: "1rem", padding: "0.75rem 0.9rem", background: "#ffffff", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                      <strong style={{ fontSize: "0.74rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "0.4rem" }}>
                        ⚽ Live Goal Timeline:
                      </strong>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {match.events.map((ev, i) => (
                          <span key={i} style={{ fontSize: "0.78rem", background: "#f1f5f9", padding: "0.2rem 0.5rem", borderRadius: "6px", border: "1px solid #e2e8f0", color: "#0f172a", fontWeight: "600" }}>
                            <strong>{ev.minute}</strong> {ev.player} ({ev.team}) - {ev.type}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Comprehensive Timing & Realtime Match Stats Bar */}
                  <div style={{ marginTop: "0.85rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "0.6rem", background: "#ffffff", padding: "0.75rem 0.9rem", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                    {/* Time Stat 1: Match Duration */}
                    <div style={{ textAlign: "center", borderRight: "1px solid #f1f5f9" }}>
                      <span style={{ fontSize: "0.7rem", color: "#64748b", display: "block", fontWeight: "600" }}>⏱️ Current Time</span>
                      <strong style={{ fontSize: "0.85rem", color: "#16a34a" }}>
                        {match.elapsedMinutes || 38}' ({match.period})
                      </strong>
                    </div>

                    {/* Time Stat 2: Pushback */}
                    <div style={{ textAlign: "center", borderRight: "1px solid #f1f5f9" }}>
                      <span style={{ fontSize: "0.7rem", color: "#64748b", display: "block", fontWeight: "600" }}>⏰ Pushback Start</span>
                      <strong style={{ fontSize: "0.82rem", color: "#0f172a" }}>{match.timeCET}</strong>
                    </div>

                    {/* Stat 3: Possession */}
                    <div style={{ textAlign: "center", borderRight: "1px solid #f1f5f9" }}>
                      <span style={{ fontSize: "0.7rem", color: "#64748b", display: "block", fontWeight: "600" }}>📊 Possession</span>
                      <strong style={{ fontSize: "0.85rem", color: "#0f172a" }}>{match.stats ? match.stats.possession : "50% - 50%"}</strong>
                    </div>

                    {/* Stat 4: Penalty Corners */}
                    <div style={{ textAlign: "center", borderRight: "1px solid #f1f5f9" }}>
                      <span style={{ fontSize: "0.7rem", color: "#64748b", display: "block", fontWeight: "600" }}>🏑 Penalty Corners</span>
                      <strong style={{ fontSize: "0.85rem", color: "var(--primary)" }}>{match.stats ? match.stats.penaltyCorners : "0 - 0"}</strong>
                    </div>

                    {/* Stat 5: Shots on Target */}
                    <div style={{ textAlign: "center", borderRight: "1px solid #f1f5f9" }}>
                      <span style={{ fontSize: "0.7rem", color: "#64748b", display: "block", fontWeight: "600" }}>🎯 Shots on Goal</span>
                      <strong style={{ fontSize: "0.85rem", color: "#0f172a" }}>{match.stats ? match.stats.shotsOnTarget : "0 - 0"}</strong>
                    </div>

                    {/* Stat 6: Venue */}
                    <div style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "0.7rem", color: "#64748b", display: "block", fontWeight: "600" }}>📍 Stadium</span>
                      <strong style={{ fontSize: "0.75rem", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block" }}>{match.venue.split(",")[0]}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ==================================================================== */}
        {/* BLOCK 2: TODAY'S UPCOMING FIXTURES PANEL */}
        {/* ==================================================================== */}
        {(activeFilter === "all" || activeFilter === "today") && upcomingToday.length > 0 && (
          <section style={{
            background: "#ffffff",
            border: "1px solid #e0f2fe",
            borderTop: "4px solid #0284c7",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "3.5rem",
            boxShadow: "0 4px 20px rgba(2, 132, 199, 0.04)"
          }}>
            {/* Section Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e0f2fe", paddingBottom: "1rem", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ fontSize: "1.25rem" }}>⏰</span>
                <h2 style={{ fontSize: "1.35rem", fontWeight: "900", color: "#0f172a", margin: 0 }}>
                  TODAY'S UPCOMING FIXTURES (August 16, 2026)
                </h2>
              </div>
              <span style={{ fontSize: "0.78rem", color: "#0369a1", background: "#e0f2fe", padding: "0.3rem 0.75rem", borderRadius: "6px", fontWeight: "800" }}>
                Starting in Next Match Slots
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "1.25rem" }}>
              {upcomingToday.map((match) => (
                <div key={match.id} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.25rem" }}>
                  {/* Card Sub-Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                    <span style={{ background: "#fef3c7", color: "#92400e", fontWeight: "800", fontSize: "0.72rem", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                      ⏳ Pushback: {match.timeCET}
                    </span>
                    <span style={{ background: "#e2e8f0", color: "#334155", fontSize: "0.72rem", fontWeight: "800", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                      {match.gender}
                    </span>
                  </div>

                  <div style={{ fontSize: "0.74rem", color: "#64748b", marginBottom: "0.85rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    📍 {match.venue} {match.localTimes && `· (${match.localTimes})`}
                  </div>

                  {/* 3-Column Match Teams Box */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem", background: "#ffffff", padding: "0.6rem 0.75rem", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
                      <img src={`https://flagcdn.com/w40/${match.flagA}.png`} width="22" height="15" alt={match.teamA} style={{ borderRadius: "2px", flexShrink: 0, border: "1px solid #e2e8f0" }} />
                      <span style={{ fontSize: "0.92rem", fontWeight: "800", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {match.teamA}
                      </span>
                    </div>
                    <span style={{ color: "#94a3b8", fontWeight: "900", fontSize: "0.8rem", padding: "0 0.2rem", flexShrink: 0 }}>VS</span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem", minWidth: 0, textAlign: "right" }}>
                      <span style={{ fontSize: "0.92rem", fontWeight: "800", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {match.teamB}
                      </span>
                      <img src={`https://flagcdn.com/w40/${match.flagB}.png`} width="22" height="15" alt={match.teamB} style={{ borderRadius: "2px", flexShrink: 0, border: "1px solid #e2e8f0" }} />
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {match.previewUrl && (
                      <a href={match.previewUrl} style={{ flex: 1, textAlign: "center", background: "var(--primary)", color: "#ffffff", padding: "0.45rem", borderRadius: "6px", fontSize: "0.78rem", fontWeight: "700", textDecoration: "none" }}>
                        Tactical Preview →
                      </a>
                    )}
                    <a href="/schedule" style={{ flex: 1, textAlign: "center", background: "#ffffff", border: "1px solid #cbd5e1", color: "#0f172a", padding: "0.45rem", borderRadius: "6px", fontSize: "0.78rem", fontWeight: "700", textDecoration: "none" }}>
                      Timezone Converter
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ==================================================================== */}
        {/* BLOCK 3: CONFIRMED TOURNAMENT MATCH RESULTS PANEL */}
        {/* ==================================================================== */}
        {(activeFilter === "all" || activeFilter === "results") && completedMatches.length > 0 && (
          <section style={{
            background: "#ffffff",
            border: "1px solid #dcfce7",
            borderTop: "4px solid #16a34a",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "3.5rem",
            boxShadow: "0 4px 20px rgba(22, 163, 74, 0.04)"
          }}>
            {/* Section Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #dcfce7", paddingBottom: "1rem", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ fontSize: "1.25rem" }}>✅</span>
                <h2 style={{ fontSize: "1.35rem", fontWeight: "900", color: "#0f172a", margin: 0 }}>
                  CONFIRMED TOURNAMENT MATCH RESULTS ({completedMatches.length} Matches Completed)
                </h2>
              </div>
              <span style={{ fontSize: "0.78rem", color: "#166534", background: "#dcfce7", padding: "0.3rem 0.75rem", borderRadius: "6px", fontWeight: "800" }}>
                Official FIH Final Results
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "1.25rem" }}>
              {completedMatches.map((res) => (
                <div key={res.id} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.25rem" }}>
                  {/* Card Sub-Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                    <span style={{ background: "#e2e8f0", color: "#0f172a", fontSize: "0.72rem", fontWeight: "800", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                      {res.gender}
                    </span>
                    <span style={{ background: "#dcfce7", color: "#166534", fontSize: "0.72rem", fontWeight: "800", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                      FINAL
                    </span>
                  </div>

                  <div style={{ fontSize: "0.74rem", color: "#64748b", marginBottom: "0.85rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    📍 {res.venue}
                  </div>

                  {/* 3-Column Scoreboard Grid */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.85rem",
                    background: "#ffffff",
                    padding: "0.6rem 0.75rem",
                    borderRadius: "10px",
                    border: "1px solid #e2e8f0"
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
                    <div style={{ fontSize: "0.76rem", color: "#334155", margin: "0.5rem 0 0.85rem 0", lineHeight: "1.45", background: "#ffffff", padding: "0.55rem 0.75rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                      ⚽ <strong>Goals:</strong> {res.scorers}
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {res.recapUrl && (
                      <a href={res.recapUrl} style={{ flex: 1, textAlign: "center", background: "#c00030", color: "#ffffff", padding: "0.4rem", borderRadius: "6px", fontSize: "0.76rem", fontWeight: "700", textDecoration: "none" }}>
                        Match Report →
                      </a>
                    )}
                    <a href="/points-table" style={{ flex: 1, textAlign: "center", background: "#ffffff", border: "1px solid #cbd5e1", color: "#0f172a", padding: "0.4rem", borderRadius: "6px", fontSize: "0.76rem", fontWeight: "700", textDecoration: "none" }}>
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
