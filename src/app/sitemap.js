import { getPublishedNews } from "../data/newsUtils";
import { players } from "../data/players";
import { matchDays } from "../data/datepages";

export default function sitemap() {
  const baseUrl = "https://hockeyworldcup2026schedule.com";
  const now = new Date();

  function parseArticleDate(dateStr) {
    try {
      const d = new Date(dateStr);
      if (!isNaN(d.getTime())) return d.toISOString();
    } catch {}
    return now.toISOString();
  }

  const pages = [
    // Tier 1 — Homepage & Real-time Live Scores
    { route: "",             priority: 1.0, freq: "hourly", lastMod: now },
    { route: "/live-scores", priority: 1.0, freq: "always", lastMod: now },
    { route: "/schedule",    priority: 1.0, freq: "always", lastMod: now },
    { route: "/points-table",priority: 1.0, freq: "always", lastMod: now },
    { route: "/rankings",    priority: 0.95, freq: "daily",  lastMod: now },
    // Tier 3 — Core content pages
    { route: "/h2h",         priority: 0.85, freq: "weekly", lastMod: now },
    { route: "/teams",       priority: 0.85, freq: "weekly", lastMod: now },
    { route: "/past-results",priority: 0.85, freq: "weekly", lastMod: now },
    { route: "/hockey-live-streaming",priority: 0.8, freq: "weekly", lastMod: now },
    { route: "/venues",      priority: 0.8,  freq: "weekly", lastMod: now },
    { route: "/format",      priority: 0.75, freq: "monthly",lastMod: now },
    { route: "/history",     priority: 0.75, freq: "monthly",lastMod: now },
    { route: "/tickets",     priority: 0.7,  freq: "weekly", lastMod: now },
    { route: "/prize-money", priority: 0.8,  freq: "weekly", lastMod: now },
    { route: "/fantasy-predictions", priority: 0.8, freq: "weekly", lastMod: now },
    { route: "/womens-tournament", priority: 0.85, freq: "weekly", lastMod: now },
    { route: "/authors",     priority: 0.6,  freq: "monthly",lastMod: now },

    // Tier 3B — Team hub pages
    { route: "/hockey-world-cup-2026-groups",   priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-india", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-pakistan", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-belgium", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-germany", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-netherlands", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-australia", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-england", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-argentina", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-spain", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-malaysia", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-france", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-ireland", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-south-africa", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-new-zealand", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-chile", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-wales", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-japan", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-usa", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-scotland", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-china", priority: 0.9, freq: "daily", lastMod: now },

    // Pool standings pages
    { route: "/pool-a", priority: 0.8, freq: "daily", lastMod: now },
    { route: "/pool-b", priority: 0.8, freq: "daily", lastMod: now },
    { route: "/pool-c", priority: 0.8, freq: "daily", lastMod: now },
    { route: "/pool-d", priority: 0.8, freq: "daily", lastMod: now },

    // Venue guides
    { route: "/venues/wagener-stadium-guide", priority: 0.85, freq: "weekly", lastMod: now },
    { route: "/venues/belfius-arena-guide", priority: 0.85, freq: "weekly", lastMod: now },

    // Match preview pages
    { route: "/matches", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/australia-vs-argentina", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/australia-vs-spain", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/belgium-vs-france", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/belgium-vs-netherlands", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/england-vs-pakistan", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/germany-vs-belgium", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/germany-vs-netherlands", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/india-vs-england", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/india-vs-england-women", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/india-vs-pakistan", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/india-vs-wales", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/pakistan-vs-wales", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/netherlands-vs-argentina", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/netherlands-vs-australia-women", priority: 0.85, freq: "daily", lastMod: now },
    { route: "/matches/netherlands-vs-germany-women", priority: 0.85, freq: "daily", lastMod: now },

    // Knockout pages
    { route: "/knockout/quarter-finals", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/knockout/semi-finals",    priority: 0.95, freq: "daily", lastMod: now },
    { route: "/knockout/final",          priority: 1.0,  freq: "daily", lastMod: now },

    // Utility
    { route: "/privacy-policy", priority: 0.3, freq: "yearly", lastMod: now },
    { route: "/terms-of-use",   priority: 0.3, freq: "yearly", lastMod: now },
  ];

  // News articles — use REAL lastModified date per article
  pages.push({ route: "/news", priority: 0.9, freq: "daily", lastMod: now });
  getPublishedNews().forEach((art) => {
    const articleDate = parseArticleDate(art.lastModified || art.date);
    pages.push({
      route: `/news/${art.slug}`,
      priority: 0.88,
      freq: "daily",
      lastMod: new Date(articleDate),
    });
  });

  // Player pSEO pages
  pages.push({ route: "/players", priority: 0.85, freq: "weekly", lastMod: now });
  players.forEach((p) => {
    pages.push({ route: `/players/${p.slug}`, priority: 0.85, freq: "daily", lastMod: now });
  });

  // Date match day pages
  pages.push({ route: "/schedule/date", priority: 0.9, freq: "daily", lastMod: now });
  matchDays.forEach((day) => {
    pages.push({ route: `/schedule/date/${day.slug}`, priority: 0.95, freq: "hourly", lastMod: now });
  });

  // Team results pages
  const resultTeams = [
    "india", "pakistan", "belgium", "netherlands", "germany",
    "australia", "argentina", "england", "spain", "france",
    "malaysia", "ireland", "wales", "south-africa", "new-zealand", "chile",
    "china", "usa", "japan", "scotland"
  ];
  pages.push({ route: "/results", priority: 0.9, freq: "daily", lastMod: now });
  resultTeams.forEach((team) => {
    pages.push({ route: `/results/${team}`, priority: 0.9, freq: "daily", lastMod: now });
  });

  // Strict deduplication map
  const uniquePagesMap = new Map();
  pages.forEach((p) => {
    if (!uniquePagesMap.has(p.route)) {
      uniquePagesMap.set(p.route, p);
    }
  });

  return Array.from(uniquePagesMap.values()).map(({ route, priority, freq, lastMod }) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: freq,
    priority,
  }));
}
