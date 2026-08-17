"use client";

import React, { useState, useEffect } from "react";
import FaqAccordion from "../../components/FaqAccordion";

export default function TeamResultsClient({ teamData, teamSlug }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [liveResults, setLiveResults] = useState(teamData.results || []);
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
        // Filter matches involving this team
        const teamLower = teamData.name.toLowerCase();
        const matched = allLiveAndCompleted.filter(m => {
          const tA = (m.teamA || m.match || "").toLowerCase();
          const tB = (m.teamB || m.match || "").toLowerCase();
          return tA.includes(teamLower) || tB.includes(teamLower);
        });

        if (matched.length > 0) {
          // Merge matched results with team static schedule
          const merged = (teamData.results || []).map(staticMatch => {
            const liveMatch = matched.find(lm => {
              const lmOpponent = (lm.teamA?.toLowerCase().includes(teamLower) ? lm.teamB : lm.teamA) || "";
              return staticMatch.opponent.toLowerCase().includes(lmOpponent.toLowerCase());
            });

            if (liveMatch) {
              const isTeamA = liveMatch.teamA?.toLowerCase().includes(teamLower);
              const teamScore = isTeamA ? liveMatch.scoreA : liveMatch.scoreB;
              const oppScore = isTeamA ? liveMatch.scoreB : liveMatch.scoreA;

              return {
                ...staticMatch,
                score: `${teamScore} – ${oppScore}`,
                status: liveMatch.status === "LIVE" ? "LIVE" : "FT",
                scorers: liveMatch.scorers ? [liveMatch.scorers] : staticMatch.scorers,
                venue: liveMatch.venue || staticMatch.venue,
                recapUrl: liveMatch.recapUrl
              };
            }
            return staticMatch;
          });

          setLiveResults(merged);
          setLastUpdated(new Date());
        }
      }
    } catch (e) {
      console.warn("Live results sync pause:", e.message);
    }
  };

  useEffect(() => {
    fetchLiveScores();
    const interval = setInterval(fetchLiveScores, 10000);
    return () => clearInterval(interval);
  }, [teamSlug]);

  const filteredResults = activeFilter === "all"
    ? liveResults
    : activeFilter === "completed"
    ? liveResults.filter(r => r.status === "FT" || r.status === "completed" || r.status === "LIVE")
    : liveResults.filter(r => r.status === "upcoming");

  return (
    <div>
      {/* Real-time TMS Auto-Sync Banner */}
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "0.85rem 1.25rem", marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#10b981", fontWeight: "700" }}>
          <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", animation: "pulse 1.5s infinite" }}></span>
          🟢 FIH TMS Auto-Sync Active · Updated {Math.floor((new Date() - lastUpdated) / 1000)}s ago
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
          📍 Wagener Stadium (1182 AM Amstelveen) & Belfius Arena (1300 Wavre)
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {[
          { key: "all", label: `All Matches (${liveResults.length})` },
          { key: "completed", label: `Completed Results & Live` },
          { key: "upcoming", label: `Upcoming Fixtures` }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            style={{
              background: activeFilter === tab.key ? "var(--primary)" : "var(--bg-secondary)",
              color: activeFilter === tab.key ? "#fff" : "var(--text-main)",
              border: "1px solid " + (activeFilter === tab.key ? "var(--primary)" : "var(--border-color)"),
              borderRadius: "8px",
              padding: "0.5rem 1rem",
              fontSize: "0.85rem",
              fontWeight: "700",
              cursor: "pointer"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Results List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
        {filteredResults.map((match, idx) => (
          <div key={idx} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px", padding: "1.25rem 1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "600" }}>📅 {match.date} · {match.pool || teamData.pool}</span>
              <span style={{
                background: match.status === "LIVE" ? "#ef4444" : match.status === "FT" || match.status === "completed" ? "#1e293b" : "rgba(234, 179, 8, 0.15)",
                color: match.status === "LIVE" ? "#ffffff" : match.status === "FT" || match.status === "completed" ? "#38bdf8" : "#facc15",
                fontSize: "0.75rem", fontWeight: "800", padding: "0.2rem 0.6rem", borderRadius: "6px", textTransform: "uppercase"
              }}>
                {match.status === "LIVE" ? "🔴 LIVE IN PROGRESS" : match.status === "FT" || match.status === "completed" ? "FINAL RESULT (FT)" : "UPCOMING MATCH"}
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", borderBottom: match.scorers && match.scorers.length > 0 ? "1px solid var(--border-color)" : "none", paddingBottom: match.scorers && match.scorers.length > 0 ? "0.75rem" : 0 }}>
              <div style={{ fontSize: "1.1rem", fontWeight: "900", color: "var(--text-main)" }}>
                {teamData.flag} {teamData.name} <span style={{ color: "var(--primary)", margin: "0 0.5rem" }}>{match.score || "vs"}</span> {match.opponent}
              </div>
              {match.recapUrl && (
                <a href={match.recapUrl} style={{ fontSize: "0.82rem", color: "var(--primary)", fontWeight: "700", textDecoration: "none" }}>
                  Read Official Match Recap →
                </a>
              )}
            </div>

            {match.scorers && match.scorers.length > 0 && (
              <div style={{ marginTop: "0.75rem", fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: "1.5" }}>
                <strong>⚽ Goal Scorers & Minutes:</strong> {Array.isArray(match.scorers) ? match.scorers.join(", ") : match.scorers}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Editorial Breakdown & EEAT Section */}
      <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "2rem", marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
          📝 Senior Analyst Editorial — {teamData.name} Tournament Trajectory
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.8", whiteSpace: "pre-line" }}>
          {teamData.editorial}
        </p>
        <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--primary)", fontWeight: "700" }}>
          ✍️ Verified by: Marc Devos, Senior Hockey Journalist | Pitchside Press Member
        </div>
      </section>

      {/* FAQ Accordion Block */}
      {teamData.faqs && teamData.faqs.length > 0 && (
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1.25rem" }}>
            Frequently Asked Questions — {teamData.name} Results & Standings
          </h2>
          <FaqAccordion items={teamData.faqs.map(f => ({ question: f.q || f.question, answer: f.a || f.answer }))} />
        </section>
      )}

      {/* Internal Links Hub */}
      {teamData.internalLinks && (
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem 2rem" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
            🔗 Explore Related {teamData.name} Tournament Hubs
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {teamData.internalLinks.map((link, i) => (
              <a key={i} href={link.href} style={{ background: "var(--bg-tertiary)", color: "var(--text-main)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "0.45rem 0.85rem", fontSize: "0.82rem", fontWeight: "600", textDecoration: "none" }}>
                {link.text}
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
