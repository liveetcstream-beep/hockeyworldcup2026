"use client";

import React, { useState, useEffect } from "react";

export default function PoolClient({ poolName, initialTeams, menFixtures, womenFixtures, getFixtureLink }) {
  const [standings, setStandings] = useState(initialTeams);
  const [fixtures, setFixtures] = useState({ men: menFixtures, women: womenFixtures });
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchLiveScores = async () => {
    try {
      const res = await fetch("/api/live-scores", { cache: "no-store" });
      if (!res.ok) return;
      const json = await res.json();
      
      const allLiveAndCompleted = [
        ...(json.completedMatches || []),
        ...(json.liveMatches || [])
      ];

      if (allLiveAndCompleted.length > 0) {
        // Deep clone initial standings
        const updatedStandings = JSON.parse(JSON.stringify(initialTeams));

        // Update fixtures and recalculate standings
        const updatedMen = menFixtures.map(f => {
          const matched = allLiveAndCompleted.find(lm => {
            const mText = (lm.teamA + " vs " + lm.teamB).toLowerCase();
            const fText = f.match.toLowerCase();
            return fText.includes(lm.teamA?.toLowerCase()) && fText.includes(lm.teamB?.toLowerCase());
          });

          if (matched) {
            return {
              ...f,
              score: `${matched.scoreA} – ${matched.scoreB}`,
              status: matched.status === "LIVE" ? "LIVE" : "FT"
            };
          }
          return f;
        });

        // Recalculate standings table from matches
        allLiveAndCompleted.forEach(m => {
          const tAIndex = updatedStandings.findIndex(t => m.teamA?.toLowerCase().includes(t.name.toLowerCase()));
          const tBIndex = updatedStandings.findIndex(t => m.teamB?.toLowerCase().includes(t.name.toLowerCase()));

          if (tAIndex !== -1 && tBIndex !== -1 && m.scoreA !== undefined && m.scoreB !== undefined) {
            const sA = parseInt(m.scoreA, 10);
            const sB = parseInt(m.scoreB, 10);

            const tA = updatedStandings[tAIndex];
            const tB = updatedStandings[tBIndex];

            // Only count if not already counted statically
            tA.played = Math.max(tA.played, 1);
            tB.played = Math.max(tB.played, 1);

            tA.gf = sA; tA.ga = sB; tA.gd = sA - sB;
            tB.gf = sB; tB.ga = sA; tB.gd = sB - sA;

            if (sA > sB) { tA.won = 1; tA.pts = 3; tB.lost = 1; tB.pts = 0; }
            else if (sB > sA) { tB.won = 1; tB.pts = 3; tA.lost = 1; tA.pts = 0; }
            else { tA.drawn = 1; tA.pts = 1; tB.drawn = 1; tB.pts = 1; }
          }
        });

        // Sort standings by PTS -> GD -> GF
        updatedStandings.sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);

        setStandings(updatedStandings);
        setFixtures({ men: updatedMen, women: womenFixtures });
        setLastUpdated(new Date());
      }
    } catch (e) {
      console.warn("Pool live sync pause:", e.message);
    }
  };

  useEffect(() => {
    fetchLiveScores();
    const interval = setInterval(fetchLiveScores, 10000);
    return () => clearInterval(interval);
  }, [poolName]);

  return (
    <div>
      {/* Real-time TMS Pool Sync Status Banner */}
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "0.85rem 1.25rem", marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#10b981", fontWeight: "700" }}>
          <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", animation: "pulse 1.5s infinite" }}></span>
          🟢 FIH TMS Pool Auto-Sync Active · Updated {Math.floor((new Date() - lastUpdated) / 1000)}s ago
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
          🏆 Official Tie-Breakers: Points &rarr; Goal Difference &rarr; Goals Scored
        </div>
      </div>

      {/* Live Standings Table */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1.2rem" }}>
          📊 {poolName} Live Points Table & Qualification Standings
        </h2>
        <div style={{ overflowX: "auto", border: "1px solid var(--border-color)", borderRadius: "16px", background: "var(--bg-secondary)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "var(--bg-tertiary)", color: "var(--text-muted)", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                <th style={{ padding: "0.85rem 1rem", textAlign: "left" }}>Pos & Team</th>
                <th style={{ padding: "0.85rem" }}>P</th>
                <th style={{ padding: "0.85rem" }}>W</th>
                <th style={{ padding: "0.85rem" }}>D</th>
                <th style={{ padding: "0.85rem" }}>L</th>
                <th style={{ padding: "0.85rem" }}>GF</th>
                <th style={{ padding: "0.85rem" }}>GA</th>
                <th style={{ padding: "0.85rem" }}>GD</th>
                <th style={{ padding: "0.85rem", fontWeight: "900", color: "var(--primary)" }}>PTS</th>
                <th style={{ padding: "0.85rem", textAlign: "right" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team, idx) => (
                <tr key={idx} style={{ borderTop: "1px solid var(--border-color)", background: idx === 0 ? "rgba(16, 185, 129, 0.05)" : idx <= 2 ? "rgba(56, 189, 248, 0.03)" : "transparent" }}>
                  <td style={{ padding: "1rem", textAlign: "left", fontWeight: "800", color: "var(--text-main)", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", width: "18px" }}>#{idx + 1}</span>
                    <span style={{ fontSize: "1.2rem" }}>{team.flag}</span>
                    <a href={team.slug ? `/hockey-world-cup-2026-schedule-${team.slug}` : "#"} style={{ color: "var(--text-main)", textDecoration: "none" }}>
                      {team.name}
                    </a>
                  </td>
                  <td style={{ padding: "1rem", color: "var(--text-muted)" }}>{team.played || 0}</td>
                  <td style={{ padding: "1rem", color: "var(--text-main)", fontWeight: "700" }}>{team.won || 0}</td>
                  <td style={{ padding: "1rem", color: "var(--text-muted)" }}>{team.drawn || 0}</td>
                  <td style={{ padding: "1rem", color: "var(--text-muted)" }}>{team.lost || 0}</td>
                  <td style={{ padding: "1rem", color: "var(--text-muted)" }}>{team.gf || 0}</td>
                  <td style={{ padding: "1rem", color: "var(--text-muted)" }}>{team.ga || 0}</td>
                  <td style={{ padding: "1rem", fontWeight: "700", color: team.gd > 0 ? "#10b981" : team.gd < 0 ? "#ef4444" : "var(--text-muted)" }}>
                    {team.gd > 0 ? `+${team.gd}` : team.gd}
                  </td>
                  <td style={{ padding: "1rem", fontWeight: "900", color: "var(--primary)", fontSize: "1.05rem" }}>{team.pts || 0}</td>
                  <td style={{ padding: "1rem", textAlign: "right" }}>
                    <span style={{
                      fontSize: "0.72rem", fontWeight: "800", padding: "0.2rem 0.55rem", borderRadius: "6px",
                      background: idx === 0 ? "rgba(16, 185, 129, 0.15)" : idx <= 2 ? "rgba(56, 189, 248, 0.15)" : "rgba(239, 68, 68, 0.12)",
                      color: idx === 0 ? "#10b981" : idx <= 2 ? "#38bdf8" : "#f87171"
                    }}>
                      {idx === 0 ? "DIRECT QF" : idx <= 2 ? "CROSSOVER" : "9TH-16TH"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Fixtures List */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1.2rem" }}>
          🏑 {poolName} Match Fixtures & Live Scorelines
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
          {fixtures.men.map((f, i) => {
            const link = getFixtureLink ? getFixtureLink(f.match) : null;
            return (
              <div key={i} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px", padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "0.6rem" }}>
                  <span>📅 {f.date}</span>
                  <span style={{ fontWeight: "700", color: f.status === "FT" ? "#38bdf8" : f.status === "LIVE" ? "#ef4444" : "var(--primary)" }}>
                    {f.status === "FT" ? "FINAL (FT)" : f.status === "LIVE" ? "🔴 LIVE" : f.time}
                  </span>
                </div>
                <div style={{ fontSize: "1rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "0.5rem" }}>
                  {f.match} {f.score && <span style={{ color: "var(--primary)", marginLeft: "0.5rem" }}>({f.score})</span>}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>📍 {f.venue}</div>
                {link && (
                  <a href={link} style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: "700", textDecoration: "none" }}>
                    Read Match Preview & H2H →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
