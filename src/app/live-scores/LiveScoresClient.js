"use client";

import React, { useState, useEffect } from "react";

const INITIAL_COMPLETED_RESULTS = [
  {
    id: 205,
    status: "FINAL",
    match: "Belgium vs New Zealand",
    gender: "Women's Pool C (W7)",
    scoreA: 2,
    scoreB: 1,
    teamA: "Belgium",
    flagA: "be",
    teamB: "New Zealand",
    flagB: "nz",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "17:30 CET (Local Time)",
    date: "Aug 16 · FT",
    scorers: "Charlotte Englebert (19'), Ambre Ballenghien (41' PC) | Olivia Merry (28' PC)",
    recapUrl: "/womens-tournament"
  },
  {
    id: 204,
    status: "FINAL",
    match: "Netherlands vs New Zealand",
    gender: "Men's Pool A (M7)",
    scoreA: 3,
    scoreB: 1,
    teamA: "Netherlands",
    flagA: "nl",
    teamB: "New Zealand",
    flagB: "nz",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "16:00 CET (Local Time)",
    date: "Aug 16 · FT",
    scorers: "Thierry Brinkman (08'), Jip Janssen (24' PC), Koen Bijen (51') | Sam Lane (39' PC)",
    recapUrl: "/schedule"
  },
  {
    id: 203,
    status: "FINAL",
    match: "Spain vs South Africa",
    gender: "Men's Pool C (M6)",
    scoreA: 2,
    scoreB: 0,
    teamA: "Spain",
    flagA: "es",
    teamB: "South Africa",
    flagB: "za",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "14:30 CET (Local Time)",
    date: "Aug 16 · FT",
    scorers: "Marc Miralles (14' PC), Pere Amat (52')",
    recapUrl: "/news/spain-vs-south-africa-result-score-august-16-hwc-2026"
  },
  {
    id: 202,
    status: "FINAL",
    match: "China vs India",
    gender: "Women's Pool D (W6)",
    scoreA: 1,
    scoreB: 1,
    teamA: "China",
    flagA: "cn",
    teamB: "India",
    flagB: "in",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "13:00 CET (Local Time)",
    date: "Aug 16 · FT",
    scorers: "Gu Bingfeng (18' PC) | Deepika (42' PC)",
    recapUrl: "/news/china-vs-india-women-result-score-august-16-hwc-2026"
  },
  {
    id: 201,
    status: "FINAL",
    match: "Australia vs Ireland",
    gender: "Men's Pool C (M5)",
    scoreA: 2,
    scoreB: 1,
    teamA: "Australia",
    flagA: "au",
    teamB: "Ireland",
    flagB: "ie",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "11:30 CET (Local Time)",
    date: "Aug 16 · FT",
    scorers: "Blake Govers (11' PC), Jeremy Hayward (35' FG) | Lee Cole (24' PC)",
    recapUrl: "/news/australia-vs-ireland-result-score-august-16-hwc-2026"
  },
  {
    id: 200,
    status: "FINAL",
    match: "England vs South Africa",
    gender: "Women's Pool D (W5)",
    scoreA: 4,
    scoreB: 0,
    teamA: "England",
    flagA: "gb-eng",
    teamB: "South Africa",
    flagB: "za",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "10:00 CET (Local Time)",
    date: "Aug 16 · FT",
    scorers: "Giselle Ansley (14' PC), Hannah Martin (28'), Lily Owsley (41'), Tess Howard (52')",
    recapUrl: "/news/england-vs-south-africa-women-result-score-august-16-hwc-2026"
  },
  {
    id: 101,
    status: "FINAL",
    match: "England vs Pakistan",
    gender: "Men's Pool D (M3)",
    scoreA: 4,
    scoreB: 1,
    teamA: "England",
    flagA: "gb-eng",
    teamB: "Pakistan",
    flagB: "pk",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "19:00 CET (Local Time)",
    date: "Aug 15 · FT",
    scorers: "Stuart Rushmere (14'), Sam Ward (29' PC), Samuel Hooper (41' PC), James Albery (56') | Rehman Abdul Afraz (33')",
    recapUrl: "/news/england-vs-pakistan-result-score-august-15-hwc-2026"
  },
  {
    id: 102,
    status: "FINAL",
    match: "India vs Wales",
    gender: "Men's Pool D (M1)",
    scoreA: 3,
    scoreB: 1,
    teamA: "India",
    flagA: "in",
    teamB: "Wales",
    flagB: "gb-wls",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "13:00 CET (Local Time)",
    date: "Aug 15 · FT",
    scorers: "Sanjay (08' PC), Harmanpreet Singh (11' PC, 43' PC) | Sam Welsh (56')",
    recapUrl: "/news/india-vs-wales-result-score-august-15-hwc-2026"
  },
  {
    id: 103,
    status: "FINAL",
    match: "Belgium vs France",
    gender: "Men's Pool B (M4)",
    scoreA: 3,
    scoreB: 2,
    teamA: "Belgium",
    flagA: "be",
    teamB: "France",
    flagB: "fr",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "21:00 CET (Local Time)",
    date: "Aug 15 · FT",
    scorers: "Nelson Onana (17'), Roman Duvekot (44'), Alexander Hendrickx (56' PC) | Eliot Curty (03'), Timothée Clément (18')",
    recapUrl: "/news/belgium-vs-france-result-score-august-15-hwc-2026"
  },
  {
    id: 104,
    status: "FINAL",
    match: "Germany vs Malaysia",
    gender: "Men's Pool B (M2)",
    scoreA: 5,
    scoreB: 1,
    teamA: "Germany",
    flagA: "de",
    teamB: "Malaysia",
    flagB: "my",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "14:30 CET (Local Time)",
    date: "Aug 15 · FT",
    scorers: "Jakob Brilla (04'), Christopher Rühr (07'), Justus Weigand (10'), Justus Warweg (34' PC), Paul-Philipp Kaufmann (51') | Azrai Aizad Abu Kamal (40')",
    recapUrl: "/news/germany-vs-malaysia-result-score-august-15-hwc-2026"
  },
  {
    id: 105,
    status: "FINAL",
    match: "Netherlands vs Chile",
    gender: "Women's Pool A (W3)",
    scoreA: 2,
    scoreB: 0,
    teamA: "Netherlands",
    flagA: "nl",
    teamB: "Chile",
    flagB: "cl",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "16:00 CET (Local Time)",
    date: "Aug 15 · FT",
    scorers: "Felice Albers (19'), Yibbi Jansen (44' PC)",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  },
  {
    id: 106,
    status: "FINAL",
    match: "Germany vs Scotland",
    gender: "Women's Pool B (W2)",
    scoreA: 3,
    scoreB: 0,
    teamA: "Germany",
    flagA: "de",
    teamB: "Scotland",
    flagB: "gb-sct",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "11:30 CET (Local Time)",
    date: "Aug 15 · FT",
    scorers: "Charlotte Stapenhorst (06', 29'), Nike Lorenz (48' PC)",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  },
  {
    id: 107,
    status: "FINAL",
    match: "Argentina vs USA",
    gender: "Women's Pool B (W4)",
    scoreA: 1,
    scoreB: 1,
    teamA: "Argentina",
    flagA: "ar",
    teamB: "USA",
    flagB: "us",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    timeCET: "17:30 CET (Local Time)",
    date: "Aug 15 · FT",
    scorers: "Agustina Gorzelany (14' PC) | Ashley Sessa (44') — Draw 1–1",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  },
  {
    id: 108,
    status: "FINAL",
    match: "Australia vs Japan",
    gender: "Women's Pool A (W1)",
    scoreA: 2,
    scoreB: 0,
    teamA: "Australia",
    flagA: "au",
    teamB: "Japan",
    flagB: "jp",
    venue: "Wagener Stadium, Amstelveen (NED)",
    timeCET: "10:00 CET (Local Time)",
    date: "Aug 15 · FT",
    scorers: "Claire Colwill (27' PC, 50' PC)",
    recapUrl: "/news/womens-hwc-2026-august-15-results-scores"
  }
];

const INITIAL_UPCOMING_TODAY = [
  {
    id: 206,
    status: "UPCOMING",
    isNext: true,
    timeCET: "19:00 CET",
    localTimes: "22:00 PKT / 22:30 IST / 02:00 JST",
    match: "Argentina vs Japan",
    gender: "Men's Pool A (M8)",
    teamA: "Argentina",
    flagA: "ar",
    teamB: "Japan",
    flagB: "jp",
    venue: "Wagener Stadium, Amstelveen (Netherlands)",
    previewUrl: "/matches/australia-vs-argentina"
  },
  {
    id: 207,
    status: "UPCOMING",
    isNext: false,
    timeCET: "20:30 CET",
    localTimes: "23:30 PKT / 00:00 IST (Aug 17)",
    match: "Spain vs Ireland",
    gender: "Women's Pool C (W8)",
    teamA: "Spain",
    flagA: "es",
    teamB: "Ireland",
    flagB: "ie",
    venue: "Belfius Hockey Arena, Wavre (Belgium)",
    previewUrl: "/pool-c"
  }
];

export default function LiveScoresClient() {
  const [liveMatches, setLiveMatches] = useState([]);
  const [upcomingToday, setUpcomingToday] = useState(INITIAL_UPCOMING_TODAY);
  const [completedMatches, setCompletedMatches] = useState(INITIAL_COMPLETED_RESULTS);
  const [nextMatch, setNextMatch] = useState(INITIAL_UPCOMING_TODAY[0] || null);
  const [activeFilter, setActiveFilter] = useState("all");

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
        if (json.upcomingToday) {
          setUpcomingToday(json.upcomingToday);
          if (json.upcomingToday.length > 0) {
            setNextMatch(json.upcomingToday[0]);
          } else {
            setNextMatch(null);
          }
        }
        if (json.completedMatches) setCompletedMatches(json.completedMatches);
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

  const latestCompleted = completedMatches && completedMatches.length > 0 ? completedMatches[0] : null;

  return (
    <div>
      {/* Hero Live Header */}
      <section className="hero-section" style={{ padding: "2.5rem 0 1.75rem 0", background: "linear-gradient(180deg, rgba(2, 132, 199, 0.04) 0%, rgba(255, 255, 255, 0) 100%)" }}>
        <div className="sports-container hero-content" style={{ textAlign: "center" }}>
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "900", color: "#0f172a", marginBottom: "0.75rem", letterSpacing: "-0.03em" }}>
            Hockey World Cup 2026 Live Scores &amp; Real-Time Match Center
          </h1>
          <p className="hero-description" style={{ color: "#475569", fontSize: "1.02rem", maxWidth: "800px", margin: "0 auto 1.25rem auto", lineHeight: "1.6" }}>
            Real-time scorecards, official goal scorers, live quarter updates, and next fixture pushback schedules.
          </p>

          {/* Timezone Indicator Banner */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(15, 23, 42, 0.06)", border: "1px solid #cbd5e1", padding: "0.45rem 1rem", borderRadius: "999px", fontSize: "0.84rem", color: "#0f172a", fontWeight: "700" }}>
            🌍 <strong>Match Timings: CET (Central European Time / Local Venue Time in Belgium &amp; Netherlands)</strong>
          </div>
        </div>
      </section>

      <main className="sports-container py-8">
        
        {/* ==================================================================== */}
        {/* SPOTLIGHT BANNER: CURRENT LIVE MATCH OR UPCOMING NEXT MATCH */}
        {/* ==================================================================== */}
        {liveMatches.length > 0 ? (
          <section style={{
            background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)",
            borderRadius: "16px",
            padding: "1.75rem",
            color: "#ffffff",
            marginBottom: "2.5rem",
            boxShadow: "0 10px 30px rgba(15,23,42,0.15)",
            border: "1px solid rgba(239, 68, 68, 0.4)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 10px #ef4444" }}></span>
                <span style={{ fontSize: "0.9rem", fontWeight: "900", color: "#f87171", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  🔴 LIVE IN PROGRESS · {liveMatches[0].period || "Live"}
                </span>
              </div>
              <span style={{ fontSize: "0.8rem", background: "rgba(255,255,255,0.1)", padding: "0.25rem 0.65rem", borderRadius: "6px", color: "#e2e8f0" }}>
                📍 {liveMatches[0].venue}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "1rem", textAlign: "center", margin: "1.5rem 0" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
                <img src={`https://flagcdn.com/w80/${liveMatches[0].flagA}.png`} width="48" height="32" alt={liveMatches[0].teamA} style={{ borderRadius: "4px", border: "1px solid rgba(255,255,255,0.2)" }} />
                <strong style={{ fontSize: "1.15rem", color: "#ffffff" }}>{liveMatches[0].teamA}</strong>
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "0.6rem 1.5rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.2)" }}>
                <span style={{ fontSize: "2.2rem", fontWeight: "900", letterSpacing: "0.08em" }}>{liveMatches[0].scoreA} - {liveMatches[0].scoreB}</span>
                <span style={{ display: "block", fontSize: "0.75rem", color: "#4ade80", fontWeight: "800", marginTop: "0.2rem" }}>{liveMatches[0].minute || "Active"}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
                <img src={`https://flagcdn.com/w80/${liveMatches[0].flagB}.png`} width="48" height="32" alt={liveMatches[0].teamB} style={{ borderRadius: "4px", border: "1px solid rgba(255,255,255,0.2)" }} />
                <strong style={{ fontSize: "1.15rem", color: "#ffffff" }}>{liveMatches[0].teamB}</strong>
              </div>
            </div>

            {nextMatch && (
              <div style={{ background: "rgba(255,255,255,0.06)", padding: "0.75rem 1rem", borderRadius: "10px", marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem", fontSize: "0.84rem" }}>
                <span>⏭️ <strong>UPCOMING NEXT:</strong> {nextMatch.match} ({nextMatch.gender})</span>
                <span style={{ color: "#38bdf8", fontWeight: "800" }}>⏰ Pushback: {nextMatch.timeCET} (Local Time)</span>
              </div>
            )}
          </section>
        ) : nextMatch ? (
          <section style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            borderRadius: "16px",
            padding: "1.75rem",
            color: "#ffffff",
            marginBottom: "2.5rem",
            boxShadow: "0 10px 30px rgba(15,23,42,0.12)",
            border: "1px solid rgba(56, 189, 248, 0.3)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.1rem" }}>🔥</span>
                <span style={{ fontSize: "0.9rem", fontWeight: "900", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  NEXT MATCH UPCOMING TODAY
                </span>
              </div>
              <span style={{ fontSize: "0.8rem", background: "rgba(56, 189, 248, 0.15)", color: "#38bdf8", padding: "0.25rem 0.65rem", borderRadius: "6px", fontWeight: "800" }}>
                Pushback: {nextMatch.timeCET} (Local Belgium/Netherlands Time)
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "1rem", textAlign: "center", margin: "1.5rem 0" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
                <img src={`https://flagcdn.com/w80/${nextMatch.flagA}.png`} width="52" height="34" alt={nextMatch.teamA} style={{ borderRadius: "4px", border: "1px solid rgba(255,255,255,0.2)" }} />
                <strong style={{ fontSize: "1.2rem", color: "#ffffff" }}>{nextMatch.teamA}</strong>
              </div>
              <div>
                <span style={{ fontSize: "1.4rem", fontWeight: "900", color: "#94a3b8", letterSpacing: "0.1em" }}>VS</span>
                <span style={{ display: "block", fontSize: "0.75rem", color: "#cbd5e1", marginTop: "0.25rem" }}>{nextMatch.gender}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
                <img src={`https://flagcdn.com/w80/${nextMatch.flagB}.png`} width="52" height="34" alt={nextMatch.teamB} style={{ borderRadius: "4px", border: "1px solid rgba(255,255,255,0.2)" }} />
                <strong style={{ fontSize: "1.2rem", color: "#ffffff" }}>{nextMatch.teamB}</strong>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem", background: "rgba(255,255,255,0.06)", padding: "0.75rem 1rem", borderRadius: "10px", fontSize: "0.84rem" }}>
              <div>
                📍 <strong>Stadium:</strong> {nextMatch.venue}
                {nextMatch.localTimes && <span style={{ color: "#94a3b8", marginLeft: "0.5rem" }}>({nextMatch.localTimes})</span>}
              </div>
              {nextMatch.previewUrl && (
                <a href={nextMatch.previewUrl} style={{ background: "var(--primary)", color: "#ffffff", padding: "0.4rem 0.9rem", borderRadius: "6px", textDecoration: "none", fontWeight: "800", fontSize: "0.8rem" }}>
                  Tactical Preview &amp; Lineups →
                </a>
              )}
            </div>
          </section>
        ) : null}

        {/* INTERACTIVE MATCH FILTER TABS */}
        <div style={{
          display: "flex",
          gap: "0.75rem",
          marginBottom: "2rem",
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
            ⚡ ALL MATCHES ({liveMatches.length + upcomingToday.length + completedMatches.length})
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
            ⏰ TODAY'S SCHEDULE (CET) ({upcomingToday.length})
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
        {/* BLOCK 1: TODAY'S UPCOMING MATCHES LIST */}
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e0f2fe", paddingBottom: "1rem", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ fontSize: "1.25rem" }}>⏰</span>
                <h2 style={{ fontSize: "1.35rem", fontWeight: "900", color: "#0f172a", margin: 0 }}>
                  TODAY'S UPCOMING FIXTURES (August 16, 2026)
                </h2>
              </div>
              <span style={{ fontSize: "0.78rem", color: "#0369a1", background: "#e0f2fe", padding: "0.3rem 0.75rem", borderRadius: "6px", fontWeight: "800" }}>
                All Times CET (Belgium / Netherlands Local)
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "1.25rem" }}>
              {upcomingToday.map((match) => (
                <div key={match.id} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                    <span style={{ background: "#fef3c7", color: "#92400e", fontWeight: "800", fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "4px" }}>
                      ⏰ Pushback: {match.timeCET}
                    </span>
                    <span style={{ background: "#e2e8f0", color: "#334155", fontSize: "0.72rem", fontWeight: "800", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                      {match.gender}
                    </span>
                  </div>

                  <div style={{ fontSize: "0.76rem", color: "#64748b", marginBottom: "0.85rem" }}>
                    📍 {match.venue} {match.localTimes && `· (${match.localTimes})`}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem", background: "#ffffff", padding: "0.6rem 0.75rem", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
                      <img src={`https://flagcdn.com/w40/${match.flagA}.png`} width="24" height="16" alt={match.teamA} style={{ borderRadius: "2px", flexShrink: 0, border: "1px solid #e2e8f0" }} />
                      <span style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {match.teamA}
                      </span>
                    </div>
                    <span style={{ color: "#94a3b8", fontWeight: "900", fontSize: "0.8rem", padding: "0 0.2rem", flexShrink: 0 }}>VS</span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem", minWidth: 0, textAlign: "right" }}>
                      <span style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {match.teamB}
                      </span>
                      <img src={`https://flagcdn.com/w40/${match.flagB}.png`} width="24" height="16" alt={match.teamB} style={{ borderRadius: "2px", flexShrink: 0, border: "1px solid #e2e8f0" }} />
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {match.previewUrl && (
                      <a href={match.previewUrl} style={{ flex: 1, textAlign: "center", background: "var(--primary)", color: "#ffffff", padding: "0.45rem", borderRadius: "6px", fontSize: "0.78rem", fontWeight: "700", textDecoration: "none" }}>
                        Tactical Preview →
                      </a>
                    )}
                    <a href="/schedule" style={{ flex: 1, textAlign: "center", background: "#ffffff", border: "1px solid #cbd5e1", color: "#0f172a", padding: "0.45rem", borderRadius: "6px", fontSize: "0.78rem", fontWeight: "700", textDecoration: "none" }}>
                      Full Schedule
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ==================================================================== */}
        {/* BLOCK 2: CONFIRMED TOURNAMENT MATCH RESULTS */}
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #dcfce7", paddingBottom: "1rem", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ fontSize: "1.25rem" }}>✅</span>
                <h2 style={{ fontSize: "1.35rem", fontWeight: "900", color: "#0f172a", margin: 0 }}>
                  CONFIRMED TOURNAMENT MATCH RESULTS ({completedMatches.length} Matches Final)
                </h2>
              </div>
              <span style={{ fontSize: "0.78rem", color: "#166534", background: "#dcfce7", padding: "0.3rem 0.75rem", borderRadius: "6px", fontWeight: "800" }}>
                Official FIH Match Scores
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "1.25rem" }}>
              {completedMatches.map((res) => (
                <div key={res.id} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                    <span style={{ background: "#e2e8f0", color: "#0f172a", fontSize: "0.72rem", fontWeight: "800", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                      {res.gender}
                    </span>
                    <span style={{ background: "#dcfce7", color: "#166534", fontSize: "0.72rem", fontWeight: "800", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                      FINAL · {res.date || "FT"}
                    </span>
                  </div>

                  <div style={{ fontSize: "0.74rem", color: "#64748b", marginBottom: "0.85rem" }}>
                    📍 {res.venue} {res.timeCET && `· (${res.timeCET})`}
                  </div>

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
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
                      <img src={`https://flagcdn.com/w40/${res.flagA}.png`} width="22" height="15" alt={res.teamA} style={{ borderRadius: "2px", flexShrink: 0, border: "1px solid #e2e8f0" }} />
                      <span style={{ fontSize: "0.92rem", fontWeight: "800", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {res.teamA}
                      </span>
                    </div>

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
