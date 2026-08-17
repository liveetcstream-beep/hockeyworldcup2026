export default function sitemap() {
  const baseUrl = "https://hockeyworldcup2026schedule.com";
  const now = new Date();

  // Ultra-Clean, High-Authority Money Pages Only (Total: ~28 Core URLs)
  const coreMoneyPages = [
    // ── Tier 1: Real-time Live & Core Tournament Hubs ──
    { route: "", priority: 1.0, freq: "hourly" },
    { route: "/live-scores", priority: 1.0, freq: "always" },
    { route: "/schedule", priority: 1.0, freq: "always" },
    { route: "/hockey-live-streaming", priority: 1.0, freq: "hourly" },
    { route: "/points-table", priority: 1.0, freq: "always" },
    { route: "/results", priority: 0.95, freq: "always" },
    { route: "/hockey-world-cup-2026-groups", priority: 0.95, freq: "daily" },
    { route: "/womens-tournament", priority: 0.9, freq: "daily" },

    // ── Tier 2: The 4 Pool Standings ──
    { route: "/pool-a", priority: 0.95, freq: "daily" },
    { route: "/pool-b", priority: 0.95, freq: "daily" },
    { route: "/pool-c", priority: 0.95, freq: "daily" },
    { route: "/pool-d", priority: 0.95, freq: "daily" },

    // ── Tier 3: Active Tournament Matchday Dates ──
    { route: "/schedule/date/august-17-matches", priority: 0.95, freq: "hourly" },
    { route: "/schedule/date/august-18-matches", priority: 0.95, freq: "hourly" },
    { route: "/schedule/date/august-19-matches", priority: 0.95, freq: "hourly" },
    { route: "/schedule/date/august-20-matches", priority: 0.95, freq: "hourly" },

    // ── Tier 4: Top High-Volume Search Team Schedules ──
    { route: "/hockey-world-cup-2026-schedule-india", priority: 0.95, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-pakistan", priority: 0.95, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-germany", priority: 0.95, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-belgium", priority: 0.95, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-netherlands", priority: 0.95, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-australia", priority: 0.95, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-england", priority: 0.95, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-spain", priority: 0.95, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-argentina", priority: 0.95, freq: "daily" },
    { route: "/hockey-world-cup-2026-schedule-france", priority: 0.95, freq: "daily" },

    // ── Tier 5: Blockbuster Marquee Match Previews ──
    { route: "/matches/india-vs-pakistan", priority: 0.95, freq: "daily" },
    { route: "/matches/germany-vs-belgium", priority: 0.95, freq: "daily" },
    { route: "/matches/india-vs-england", priority: 0.9, freq: "daily" },
    { route: "/matches/belgium-vs-netherlands", priority: 0.9, freq: "daily" },
    { route: "/matches/germany-vs-netherlands", priority: 0.9, freq: "daily" },

    // ── Tier 6: News Hub ──
    { route: "/news", priority: 0.85, freq: "daily" },
  ];

  return coreMoneyPages.map(({ route, priority, freq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
