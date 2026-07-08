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
    // Tier 3B — High-traffic team/group pages (traffic multipliers)
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
    // Tier 4 — Utility pages (low priority)
    { route: "/privacy-policy", priority: 0.3, freq: "yearly" },
    { route: "/terms-of-use",   priority: 0.3, freq: "yearly" },
  ];

  return pages.map(({ route, priority, freq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
