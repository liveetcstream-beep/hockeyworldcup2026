import { getPublishedNews } from "../data/newsUtils";
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
    // ── Tier 1: Core Money Pages (Maximum Search Volume & Value) ──
    { route: "", priority: 1.0, freq: "hourly", lastMod: now },
    { route: "/live-scores", priority: 1.0, freq: "always", lastMod: now },
    { route: "/schedule", priority: 1.0, freq: "always", lastMod: now },
    { route: "/hockey-live-streaming", priority: 1.0, freq: "hourly", lastMod: now },
    { route: "/points-table", priority: 1.0, freq: "always", lastMod: now },

    // ── Tier 2: Pools & Group Hubs ──
    { route: "/hockey-world-cup-2026-groups", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/pool-a", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/pool-b", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/pool-c", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/pool-d", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/results", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/womens-tournament", priority: 0.9, freq: "daily", lastMod: now },

    // ── Tier 3: All 20 Qualified Team Schedules ──
    { route: "/hockey-world-cup-2026-schedule-india", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-pakistan", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-belgium", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-germany", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-netherlands", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-australia", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-england", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-spain", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-argentina", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-france", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-malaysia", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-new-zealand", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-ireland", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-chile", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-china", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-japan", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-scotland", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-south-africa", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-usa", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/hockey-world-cup-2026-schedule-wales", priority: 0.95, freq: "daily", lastMod: now },

    // ── Tier 4: Marquee Match Previews & Live Matchups ──
    { route: "/matches/india-vs-pakistan", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/matches/germany-vs-belgium", priority: 0.95, freq: "daily", lastMod: now },
    { route: "/matches/india-vs-england", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/matches/netherlands-vs-australia-women", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/matches/belgium-vs-france", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/matches/england-vs-pakistan", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/matches/australia-vs-spain", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/matches/india-vs-wales", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/matches/pakistan-vs-wales", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/matches/netherlands-vs-argentina", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/matches/germany-vs-netherlands", priority: 0.9, freq: "daily", lastMod: now },
    { route: "/matches/belgium-vs-netherlands", priority: 0.9, freq: "daily", lastMod: now },

    // ── Tier 5: Team Results Pages ──
    { route: "/results/india", priority: 0.92, freq: "daily", lastMod: now },
    { route: "/results/pakistan", priority: 0.92, freq: "daily", lastMod: now },
    { route: "/results/belgium", priority: 0.92, freq: "daily", lastMod: now },
    { route: "/results/germany", priority: 0.92, freq: "daily", lastMod: now },
    { route: "/results/netherlands", priority: 0.92, freq: "daily", lastMod: now },
    { route: "/results/australia", priority: 0.92, freq: "daily", lastMod: now },
    { route: "/results/england", priority: 0.92, freq: "daily", lastMod: now },
    { route: "/results/spain", priority: 0.92, freq: "daily", lastMod: now }
  ];

  // Active Date Matchday pages
  pages.push({ route: "/schedule/date", priority: 0.95, freq: "daily", lastMod: now });
  matchDays.slice(0, 10).forEach((day) => {
    pages.push({ route: `/schedule/date/${day.slug}`, priority: 0.95, freq: "hourly", lastMod: now });
  });

  // Top News Articles
  pages.push({ route: "/news", priority: 0.9, freq: "daily", lastMod: now });
  getPublishedNews().slice(0, 12).forEach((art) => {
    const articleDate = parseArticleDate(art.lastModified || art.date);
    pages.push({
      route: `/news/${art.slug}`,
      priority: 0.88,
      freq: "daily",
      lastMod: new Date(articleDate),
    });
  });

  // Strict deduplication
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
