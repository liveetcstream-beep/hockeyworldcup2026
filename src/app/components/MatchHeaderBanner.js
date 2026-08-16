"use client";

import React from "react";

const TEAM_FLAGS = {
  "india": "in",
  "pakistan": "pk",
  "belgium": "be",
  "germany": "de",
  "netherlands": "nl",
  "australia": "au",
  "england": "gb-eng",
  "argentina": "ar",
  "spain": "es",
  "south africa": "za",
  "new zealand": "nz",
  "chile": "cl",
  "wales": "gb-wls",
  "france": "fr",
  "japan": "jp",
  "usa": "us",
  "united states": "us",
  "ireland": "ie",
  "china": "cn",
  "scotland": "gb-sct",
  "malaysia": "my"
};

const KNOWN_MATCHES = [
  {
    slugs: ["spain-vs-south-africa-result-score-august-16-hwc-2026"],
    teamA: "Spain",
    flagA: "es",
    teamB: "South Africa",
    flagB: "za",
    scoreA: 2,
    scoreB: 0,
    status: "FINAL · FT",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    gender: "Men's Pool C (M6)",
    scorers: "Marc Miralles (14' PC), Pere Amat (52')",
    time: "14:30 CET"
  },
  {
    slugs: ["england-vs-south-africa-women-result-score-august-16-hwc-2026"],
    teamA: "England",
    flagA: "gb-eng",
    teamB: "South Africa",
    flagB: "za",
    scoreA: 4,
    scoreB: 0,
    status: "FINAL · FT",
    venue: "Wagener Stadium, Amstelveen (NED)",
    gender: "Women's Pool D (W5)",
    scorers: "Giselle Ansley (14' PC), Hannah Martin (28'), Lily Owsley (41'), Tess Howard (52')",
    time: "10:00 CET"
  },
  {
    slugs: ["australia-vs-ireland-result-score-august-16-hwc-2026"],
    teamA: "Australia",
    flagA: "au",
    teamB: "Ireland",
    flagB: "ie",
    scoreA: 3,
    scoreB: 1,
    status: "FINAL · FT",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    gender: "Men's Pool C (M5)",
    scorers: "Blake Govers (11' PC), Jeremy Hayward (35' FG), Tim Brand (52') | Lee Cole (24' PC)",
    time: "11:30 CET"
  },
  {
    slugs: ["china-vs-india-women-result-score-august-16-hwc-2026"],
    teamA: "China",
    flagA: "cn",
    teamB: "India",
    flagB: "in",
    scoreA: 2,
    scoreB: 2,
    status: "FINAL · FT (DRAW)",
    venue: "Wagener Stadium, Amstelveen (NED)",
    gender: "Women's Pool D (W6)",
    scorers: "Gu Bingfeng (18' PC, 48' PC) | Deepika (12' PC), Udita (41' PC)",
    time: "13:00 CET"
  },
  {
    slugs: ["england-vs-pakistan-result-score-august-15-hwc-2026"],
    teamA: "England",
    flagA: "gb-eng",
    teamB: "Pakistan",
    flagB: "pk",
    scoreA: 4,
    scoreB: 1,
    status: "FINAL · FT",
    venue: "Wagener Stadium, Amstelveen (NED)",
    gender: "Men's Pool D (M3)",
    scorers: "Stuart Rushmere (14'), Sam Ward (29' PC), Samuel Hooper (41' PC), James Albery (56') | Rehman Abdul Afraz (33')",
    time: "19:00 CET"
  },
  {
    slugs: ["india-vs-wales-result-score-august-15-hwc-2026"],
    teamA: "India",
    flagA: "in",
    teamB: "Wales",
    flagB: "gb-wls",
    scoreA: 3,
    scoreB: 1,
    status: "FINAL · FT",
    venue: "Wagener Stadium, Amstelveen (NED)",
    gender: "Men's Pool D (M1)",
    scorers: "Sanjay (08' PC), Harmanpreet Singh (11' PC, 43' PC) | Sam Welsh (56')",
    time: "13:00 CET"
  },
  {
    slugs: ["belgium-vs-france-result-score-august-15-hwc-2026"],
    teamA: "Belgium",
    flagA: "be",
    teamB: "France",
    flagB: "fr",
    scoreA: 3,
    scoreB: 2,
    status: "FINAL · FT",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    gender: "Men's Pool B (M4)",
    scorers: "Nelson Onana (17'), Roman Duvekot (44'), Alexander Hendrickx (56' PC) | Eliot Curty (03'), Timothée Clément (18')",
    time: "21:00 CET"
  },
  {
    slugs: ["germany-vs-malaysia-result-score-august-15-hwc-2026"],
    teamA: "Germany",
    flagA: "de",
    teamB: "Malaysia",
    flagB: "my",
    scoreA: 5,
    scoreB: 1,
    status: "FINAL · FT",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    gender: "Men's Pool B (M2)",
    scorers: "Jakob Brilla (04'), Christopher Rühr (07'), Justus Weigand (10'), Justus Warweg (34' PC), Paul-Philipp Kaufmann (51') | Azrai Aizad Abu Kamal (40')",
    time: "14:30 CET"
  },
  {
    slugs: ["australia-vs-japan-women-result-score-august-15-hwc-2026"],
    teamA: "Australia",
    flagA: "au",
    teamB: "Japan",
    flagB: "jp",
    scoreA: 2,
    scoreB: 0,
    status: "FINAL · FT",
    venue: "Wagener Stadium, Amstelveen (NED)",
    gender: "Women's Pool A (W1)",
    scorers: "Claire Colwill (27' PC, 50' PC)",
    time: "10:00 CET"
  },
  {
    slugs: ["netherlands-vs-chile-women-result-score-august-15-hwc-2026"],
    teamA: "Netherlands",
    flagA: "nl",
    teamB: "Chile",
    flagB: "cl",
    scoreA: 2,
    scoreB: 0,
    status: "FINAL · FT",
    venue: "Wagener Stadium, Amstelveen (NED)",
    gender: "Women's Pool A (W3)",
    scorers: "Felice Albers (19'), Yibbi Jansen (44' PC)",
    time: "16:00 CET"
  },
  {
    slugs: ["germany-vs-scotland-women-result-score-august-15-hwc-2026"],
    teamA: "Germany",
    flagA: "de",
    teamB: "Scotland",
    flagB: "gb-sct",
    scoreA: 3,
    scoreB: 0,
    status: "FINAL · FT",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    gender: "Women's Pool B (W2)",
    scorers: "Charlotte Stapenhorst (06', 29'), Nike Lorenz (48' PC)",
    time: "11:30 CET"
  },
  {
    slugs: ["argentina-vs-usa-women-result-score-august-15-hwc-2026"],
    teamA: "Argentina",
    flagA: "ar",
    teamB: "United States",
    flagB: "us",
    scoreA: 1,
    scoreB: 1,
    status: "FINAL · FT (DRAW)",
    venue: "Belfius Hockey Arena, Wavre (BEL)",
    gender: "Women's Pool B (W4)",
    scorers: "Agustina Gorzelany (14' PC) | Ashley Sessa (44')",
    time: "17:30 CET"
  }
];

export default function MatchHeaderBanner({ article }) {
  if (!article) return null;

  const slug = (article.slug || "").toLowerCase();
  const title = (article.title || "").toLowerCase();

  // 1. Direct match lookup from known matches database
  let matchInfo = KNOWN_MATCHES.find((m) =>
    m.slugs.some((s) => slug.includes(s) || s.includes(slug))
  );

  // 2. Dynamic parser if matchInfo is not found in known database but title/slug contains "vs"
  if (!matchInfo && (title.includes(" vs ") || slug.includes("-vs-"))) {
    const parts = title.includes(" vs ") 
      ? title.split(" vs ") 
      : slug.split("-vs-");

    if (parts.length >= 2) {
      let rawA = parts[0].replace(/.*?(men's|women's|pool [a-d]|match\d*|hwc\s*2026)?\s*/i, "").trim();
      let rawB = parts[1].replace(/\s*(men's|women's|pool [a-d]|preview|result|score|august.*|\d{4}).*/i, "").trim();

      const teamAKey = Object.keys(TEAM_FLAGS).find((k) => rawA.includes(k));
      const teamBKey = Object.keys(TEAM_FLAGS).find((k) => rawB.includes(k));

      if (teamAKey && teamBKey) {
        const teamAName = teamAKey.charAt(0).toUpperCase() + teamAKey.slice(1);
        const teamBName = teamBKey.charAt(0).toUpperCase() + teamBKey.slice(1);

        matchInfo = {
          teamA: teamAName,
          flagA: TEAM_FLAGS[teamAKey],
          teamB: teamBName,
          flagB: TEAM_FLAGS[teamBKey],
          scoreA: null,
          scoreB: null,
          status: article.category === "Match Report" ? "FINAL · OFFICIAL REPORT" : "MATCH PREVIEW & GUIDE",
          venue: title.includes("wavre") ? "Belfius Hockey Arena, Wavre" : "Wagener Stadium, Amstelveen",
          gender: title.includes("women") ? "Women's Tournament" : "Men's Tournament",
          scorers: null,
          time: article.date || "August 2026"
        };
      }
    }
  }

  // Render High-Contrast Sports Score Card Header if Match Info Found
  if (matchInfo) {
    const isFinal = matchInfo.scoreA !== null && matchInfo.scoreB !== null;

    return (
      <div 
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          borderRadius: "16px",
          padding: "1.25rem 1.5rem",
          color: "#ffffff",
          marginBottom: "2.5rem",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.15)",
          border: "1px solid rgba(56, 189, 248, 0.25)"
        }}
      >
        {/* Top Header Tag */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1rem" }}>🏑</span>
            <span style={{ fontSize: "0.82rem", fontWeight: "900", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              FIH HOCKEY WORLD CUP 2026 · {matchInfo.status}
            </span>
          </div>
          <span style={{ fontSize: "0.76rem", background: "rgba(255,255,255,0.1)", padding: "0.25rem 0.65rem", borderRadius: "6px", color: "#cbd5e1" }}>
            📍 {matchInfo.venue}
          </span>
        </div>

        {/* Center Scorecard Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "0.75rem", textAlign: "center", margin: "1rem 0" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", minWidth: 0 }}>
            <img 
              src={`https://flagcdn.com/w80/${matchInfo.flagA}.png`} 
              alt={matchInfo.teamA} 
              style={{ width: "48px", height: "32px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.2)", objectFit: "cover" }} 
            />
            <strong style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)", color: "#ffffff", wordBreak: "break-word" }}>{matchInfo.teamA}</strong>
          </div>

          <div style={{ background: "rgba(255,255,255,0.08)", padding: isFinal ? "0.5rem 1.25rem" : "0.5rem 1rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", flexShrink: 0 }}>
            {isFinal ? (
              <>
                <span style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: "900", letterSpacing: "0.05em", color: "#ffffff" }}>
                  {matchInfo.scoreA} - {matchInfo.scoreB}
                </span>
                <span style={{ display: "block", fontSize: "0.72rem", color: "#4ade80", fontWeight: "800", marginTop: "0.15rem" }}>
                  FULL TIME (FT)
                </span>
              </>
            ) : (
              <>
                <span style={{ fontSize: "1.3rem", fontWeight: "900", color: "#94a3b8", letterSpacing: "0.1em" }}>VS</span>
                <span style={{ display: "block", fontSize: "0.72rem", color: "#cbd5e1", marginTop: "0.15rem" }}>
                  {matchInfo.gender}
                </span>
              </>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", minWidth: 0 }}>
            <img 
              src={`https://flagcdn.com/w80/${matchInfo.flagB}.png`} 
              alt={matchInfo.teamB} 
              style={{ width: "48px", height: "32px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.2)", objectFit: "cover" }} 
            />
            <strong style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)", color: "#ffffff", wordBreak: "break-word" }}>{matchInfo.teamB}</strong>
          </div>
        </div>

        {/* Goal Scorers / Match Details Footer Bar */}
        {matchInfo.scorers && (
          <div style={{ background: "rgba(255,255,255,0.06)", padding: "0.6rem 0.85rem", borderRadius: "8px", marginTop: "0.85rem", fontSize: "0.78rem", color: "#e2e8f0", lineHeight: "1.45" }}>
            ⚽ <strong>Official Goals:</strong> {matchInfo.scorers}
          </div>
        )}

        {/* Quick Action Navigation Bar */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem", flexWrap: "wrap" }}>
          <a href="/live-scores" style={{ flex: 1, minWidth: "130px", textAlign: "center", background: "var(--primary)", color: "#ffffff", padding: "0.45rem", borderRadius: "6px", fontSize: "0.78rem", fontWeight: "800", textDecoration: "none" }}>
            ⚡ Live Score Center
          </a>
          <a href="/points-table" style={{ flex: 1, minWidth: "130px", textAlign: "center", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff", padding: "0.45rem", borderRadius: "6px", fontSize: "0.78rem", fontWeight: "700", textDecoration: "none" }}>
            📊 Points Table
          </a>
          <a href="/schedule" style={{ flex: 1, minWidth: "130px", textAlign: "center", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff", padding: "0.45rem", borderRadius: "6px", fontSize: "0.78rem", fontWeight: "700", textDecoration: "none" }}>
            📅 Tournament Schedule
          </a>
        </div>
      </div>
    );
  }

  // 3. Fallback Topic Editorial Banner for non-match articles (Guide / News / Rules / Broadcast)
  return (
    <div 
      style={{ 
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", 
        borderRadius: "16px", 
        padding: "1.5rem", 
        color: "#ffffff", 
        marginBottom: "2.5rem",
        border: "1px solid rgba(192, 0, 48, 0.3)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
        <span style={{ fontSize: "1.2rem" }}>📰</span>
        <span style={{ background: "rgba(192, 0, 48, 0.2)", color: "#f87171", fontSize: "0.78rem", fontWeight: "800", textTransform: "uppercase", padding: "0.25rem 0.65rem", borderRadius: "6px", letterSpacing: "0.05em" }}>
          {article.category || "Official Tournament News"}
        </span>
      </div>
      <h2 style={{ fontSize: "clamp(1.1rem, 3vw, 1.4rem)", fontWeight: "900", color: "#ffffff", margin: "0 0 0.5rem 0", fontStyle: "normal", lineHeight: "1.35" }}>
        {article.title}
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "0.75rem", marginTop: "0.75rem", fontSize: "0.78rem", color: "#94a3b8" }}>
        <span>📅 Published: {article.date}</span>
        <span>✍️ {article.author} ({article.authorTitle})</span>
      </div>
    </div>
  );
}
