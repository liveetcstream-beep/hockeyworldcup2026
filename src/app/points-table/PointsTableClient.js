"use client";

import React, { useState, useEffect } from "react";
import { calculateTournamentStandings } from "@/lib/calculateStandings";

export default function PointsTableClient({ standingsData }) {
  const [selectedGender, setSelectedGender] = useState("Men");
  const [selectedPool, setSelectedPool] = useState("Pool D");
  const [liveStandings, setLiveStandings] = useState(standingsData);

  useEffect(() => {
    const fetchScoresAndRecalculate = async () => {
      try {
        const res = await fetch(`/api/live-scores?t=${Date.now()}`, { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          if (json.completedMatches && json.completedMatches.length > 0) {
            const updated = calculateTournamentStandings(json.completedMatches);
            setLiveStandings(updated);
          }
        }
      } catch (e) {
        console.error("Failed to update points table in real time:", e);
      }
    };

    fetchScoresAndRecalculate();
    const interval = setInterval(fetchScoresAndRecalculate, 20000);
    return () => clearInterval(interval);
  }, []);

  const pools = ["Pool A", "Pool B", "Pool C", "Pool D"];
  const currentPoolData = liveStandings[selectedGender]?.[selectedPool] || standingsData[selectedGender]?.[selectedPool] || [];

  return (
    <div style={{ marginTop: "1rem" }}>
      {/* Gender Switcher */}
      <div style={{
        display: "flex",
        border: "1px solid #cbd5e1",
        borderRadius: "10px",
        background: "#f1f5f9",
        overflow: "hidden",
        marginBottom: "1.5rem"
      }}>
        <button
          onClick={() => {
            setSelectedGender("Men");
            setSelectedPool("Pool D");
          }}
          style={{
            flex: 1,
            padding: "1rem",
            border: "none",
            fontWeight: "900",
            fontSize: "1rem",
            cursor: "pointer",
            textAlign: "center",
            transition: "all 0.2s ease",
            background: selectedGender === "Men" ? "var(--primary)" : "transparent",
            color: selectedGender === "Men" ? "#ffffff" : "#475569"
          }}
        >
          🏑 MEN'S WORLD CUP STANDINGS
        </button>
        <button
          onClick={() => {
            setSelectedGender("Women");
            setSelectedPool("Pool A");
          }}
          style={{
            flex: 1,
            padding: "1rem",
            border: "none",
            fontWeight: "900",
            fontSize: "1rem",
            cursor: "pointer",
            textAlign: "center",
            transition: "all 0.2s ease",
            background: selectedGender === "Women" ? "var(--primary)" : "transparent",
            color: selectedGender === "Women" ? "#ffffff" : "#475569"
          }}
        >
          🏑 WOMEN'S WORLD CUP STANDINGS
        </button>
      </div>

      {/* Pool Sub-Tabs */}
      <div style={{
        display: "flex",
        gap: "1rem",
        borderBottom: "2px solid #e2e8f0",
        marginBottom: "1.5rem",
        overflowX: "auto",
        paddingBottom: "0.5rem"
      }}>
        {pools.map((pool) => (
          <button
            key={pool}
            onClick={() => setSelectedPool(pool)}
            style={{
              background: selectedPool === pool ? "#f8fafc" : "transparent",
              border: "none",
              padding: "0.7rem 1.2rem",
              fontSize: "0.95rem",
              fontWeight: "800",
              cursor: "pointer",
              borderRadius: "8px 8px 0 0",
              color: selectedPool === pool ? "var(--primary)" : "#64748b",
              borderBottom: selectedPool === pool ? "3px solid var(--primary)" : "3px solid transparent",
              transition: "all 0.2s ease"
            }}
          >
            {pool}
          </button>
        ))}
      </div>

      {/* Active Table Display */}
      <div className="table-responsive" style={{ border: "1px solid rgba(15, 23, 42, 0.08)", borderRadius: "12px", background: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
        <div style={{ padding: "1rem 1.5rem", background: "#f8fafc", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "800", color: "#0f172a" }}>
            {selectedGender}'s {selectedPool} Official Standings
          </h3>
          <span style={{ fontSize: "0.8rem", color: "#16a34a", fontWeight: "700", background: "#dcfce7", padding: "0.25rem 0.6rem", borderRadius: "6px" }}>
            ⚡ Real-Time Standings Updated
          </span>
        </div>
        <table className="sports-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f1f5f9", textAlign: "center" }}>
              <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>#</th>
              <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>TEAM</th>
              <th style={{ padding: "0.75rem 0.5rem" }}>P</th>
              <th style={{ padding: "0.75rem 0.5rem" }}>W</th>
              <th style={{ padding: "0.75rem 0.5rem" }}>D</th>
              <th style={{ padding: "0.75rem 0.5rem" }}>L</th>
              <th style={{ padding: "0.75rem 0.5rem" }}>GF</th>
              <th style={{ padding: "0.75rem 0.5rem" }}>GA</th>
              <th style={{ padding: "0.75rem 0.5rem" }}>GD</th>
              <th style={{ padding: "0.75rem 0.75rem", background: "rgba(192, 0, 48, 0.08)", color: "var(--primary)", fontWeight: "900" }}>PTS</th>
              <th style={{ padding: "0.75rem 1rem", textAlign: "right" }}>FORM / RES</th>
            </tr>
          </thead>
          <tbody>
            {currentPoolData.map((team, idx) => (
              <tr key={team.name} style={{ borderBottom: "1px solid #f1f5f9", textAlign: "center" }}>
                <td style={{ padding: "0.85rem 1rem", textAlign: "left" }}>
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: idx === 0 ? "#22c55e" : idx <= 2 ? "#3b82f6" : "#cbd5e1",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    fontWeight: "800"
                  }}>
                    {idx + 1}
                  </span>
                </td>
                <td style={{ padding: "0.85rem 1rem", textAlign: "left", display: "flex", alignItems: "center", gap: "0.75rem", fontWeight: "700" }}>
                  <img src={`https://flagcdn.com/w40/${team.flag}.png`} width="24" height="16" alt={`${team.name} flag`} style={{ borderRadius: "2px", border: "1px solid rgba(0,0,0,0.06)" }} />
                  <a href={`/hockey-world-cup-2026-schedule-${team.slug || team.name.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: "#0f172a", textDecoration: "none" }}>
                    {team.name}
                  </a>
                </td>
                <td style={{ padding: "0.85rem 0.5rem", fontWeight: "600" }}>{team.p}</td>
                <td style={{ padding: "0.85rem 0.5rem", color: "#16a34a", fontWeight: "700" }}>{team.w}</td>
                <td style={{ padding: "0.85rem 0.5rem", color: "#64748b" }}>{team.d}</td>
                <td style={{ padding: "0.85rem 0.5rem", color: "#dc2626" }}>{team.l}</td>
                <td style={{ padding: "0.85rem 0.5rem" }}>{team.gf}</td>
                <td style={{ padding: "0.85rem 0.5rem" }}>{team.ga}</td>
                <td style={{ padding: "0.85rem 0.5rem", fontWeight: "700", color: team.gd > 0 ? "#16a34a" : team.gd < 0 ? "#dc2626" : "#64748b" }}>
                  {team.gd > 0 ? `+${team.gd}` : team.gd}
                </td>
                <td style={{ padding: "0.85rem 0.75rem", background: "rgba(192, 0, 48, 0.04)", fontWeight: "900", color: "var(--primary)", fontSize: "1.05rem" }}>
                  {team.pts}
                </td>
                <td style={{ padding: "0.85rem 1rem", textAlign: "right" }}>
                  {team.recentRes ? (
                    <span style={{ fontSize: "0.8rem", padding: "0.2rem 0.5rem", borderRadius: "4px", background: team.recentRes.startsWith("W") ? "#dcfce7" : team.recentRes.startsWith("D") ? "#fef3c7" : "#fee2e2", color: team.recentRes.startsWith("W") ? "#166534" : team.recentRes.startsWith("D") ? "#92400e" : "#991b1b", fontWeight: "700" }}>
                      {team.recentRes}
                    </span>
                  ) : (
                    <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Upcoming</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: "0.75rem 1.5rem", background: "#f8fafc", borderTop: "1px solid #e2e8f0", fontSize: "0.8rem", color: "#64748b", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <span>🟢 1st &amp; 2nd Place: Championship Pools E &amp; F Advance</span>
          <span>🟡 3rd &amp; 4th Place: Classification Pools G &amp; H</span>
        </div>
      </div>
    </div>
  );
}
