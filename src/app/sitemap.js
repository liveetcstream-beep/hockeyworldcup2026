import { newsArticles } from "../data/news";
import { players } from "../data/players";
import { matchDays } from "../data/datepages";

export default function sitemap() {
  const baseUrl = "https://hockeyworldcup2026schedule.com";
  const now = new Date();

  const pages = [
    // Tier 1 — Homepage
    { route: "",             priority: 1.0, freq: "daily" },
    // Tier 2 — High-traffic live/schedule pages
    { route: "/schedule",    priority: 0.95, freq: "daily" },
    { route: "/live-scores", priority: 0.95, freq: "hourly" },
    { route: "/points-table",priority: 0.9,  freq: "daily" },
    // Tier 3 — Core content pages
    { route: "/h2h",         priority: 0.85, freq: "weekly" },
    { route: "/teams",       priority: 0.85, freq: "weekly" },
    { route: "/past-results",priority: 0.85, freq: "weekly" },
    { route: "/hockey-live-streaming",priority: 0.8,  freq: "weekly" },
    { route: "/venues",      priority: 0.8,  freq: "weekly" },
    { route: "/format",      priority: 0.75, freq: "monthly" },
    { route: "/history",     priority: 0.75, freq: "monthly" },
    { route: "/tickets",     priority: 0.7,  freq: "weekly" },
    { route: "/prize-money", priority: 0.8,  freq: "weekly" },
    { route: "/fantasy-predictions", priority: 0.8, freq: "weekly" },
    { route: "/womens-tournament", priority: 0.85, freq: "weekly" },
    { route: "/authors",     priority: 0.6,  freq: "monthly" },

    // Tier 3B — Team hub pages
    { route: "/hockey-world-cup-2026-groups",   priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-india", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-pakistan", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-belgium", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-germany", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-netherlands", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-australia", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-england", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-argentina", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-spain", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-malaysia", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-france", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-ireland", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-south-africa", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-new-zealand", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-chile", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-wales", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-japan", priority: 0.9, freq: "daily" },
    // Women's only schedule pages
    { route: "/hockey-world-cup-2026-schedule-usa", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-scotland", priority: 0.9, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-china", priority: 0.9, freq: "daily" },

    // Pool standings pages
    { route: "/pool-a", priority: 0.8, freq: "daily" },
    { route: "/pool-b", priority: 0.8, freq: "daily" },
    { route: "/pool-c", priority: 0.8, freq: "daily" },
    { route: "/pool-d", priority: 0.8, freq: "daily" },

    // Venue guides
    { route: "/venues/wagener-stadium-guide", priority: 0.85, freq: "weekly" },
    { route: "/venues/belfius-arena-guide", priority: 0.85, freq: "weekly" },

    // Match preview pages
    { route: "/matches", priority: 0.85, freq: "daily" },
    { route: "/matches/australia-vs-argentina", priority: 0.85, freq: "daily" },
    { route: "/matches/australia-vs-spain", priority: 0.85, freq: "daily" },
    { route: "/matches/belgium-vs-france", priority: 0.85, freq: "daily" },
    { route: "/matches/belgium-vs-netherlands", priority: 0.85, freq: "daily" },
    { route: "/matches/england-vs-pakistan", priority: 0.85, freq: "daily" },
    { route: "/matches/germany-vs-belgium", priority: 0.85, freq: "daily" },
    { route: "/matches/germany-vs-netherlands", priority: 0.85, freq: "daily" },
    { route: "/matches/india-vs-england", priority: 0.85, freq: "daily" },
    { route: "/matches/india-vs-england-women", priority: 0.85, freq: "daily" },
    { route: "/matches/india-vs-pakistan", priority: 0.85, freq: "daily" },
    { route: "/matches/netherlands-vs-argentina", priority: 0.85, freq: "daily" },
    { route: "/matches/netherlands-vs-australia-women", priority: 0.85, freq: "daily" },
    { route: "/matches/netherlands-vs-germany-women", priority: 0.85, freq: "daily" },

    // === PHASE 5: PROGRAMMATIC SEO ===

    // Knockout pages
    { route: "/knockout/quarter-finals", priority: 0.95, freq: "daily" },
    { route: "/knockout/semi-finals",    priority: 0.95, freq: "daily" },
    { route: "/knockout/final",          priority: 1.0,  freq: "daily" },

    // Utility
    { route: "/privacy-policy", priority: 0.3, freq: "yearly" },
    { route: "/terms-of-use",   priority: 0.3, freq: "yearly" },
  ];

  // News articles
  pages.push({ route: "/news", priority: 0.9, freq: "daily" });
  newsArticles.forEach((art) => {
    pages.push({ route: `/news/${art.slug}`, priority: 0.85, freq: "daily" });
  });

  // Player pSEO pages
  pages.push({ route: "/players", priority: 0.85, freq: "weekly" });
  players.forEach((p) => {
    pages.push({ route: `/players/${p.slug}`, priority: 0.85, freq: "daily" });
  });

  // Date match day pages
  pages.push({ route: "/schedule/date", priority: 0.9, freq: "daily" });
  matchDays.forEach((day) => {
    pages.push({ route: `/schedule/date/${day.slug}`, priority: 0.95, freq: "hourly" });
  });

  // Team results pages
  const resultTeams = [
    "india", "pakistan", "belgium", "netherlands", "germany",
    "australia", "argentina", "england", "spain", "france",
    "malaysia", "ireland", "wales", "south-africa", "new-zealand", "chile"
  ];
  pages.push({ route: "/results", priority: 0.9, freq: "daily" });
  resultTeams.forEach((team) => {
    pages.push({ route: `/results/${team}`, priority: 0.9, freq: "daily" });
  });

  return pages.map(({ route, priority, freq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
