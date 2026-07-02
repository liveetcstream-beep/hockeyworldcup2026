export default function sitemap() {
  const baseUrl = "https://hockeyworldcup2026schedule.com";

  // List of all 11 routes establishing our topical authority silo
  const routes = [
    "",
    "/broadcasters",
    "/venues",
    "/teams",
    "/live-scores",
    "/tickets",
    "/format",
    "/points-table",
    "/history",
    "/h2h",
    "/past-results",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-07-02"),
    changeFrequency: route === "" || route === "/live-scores" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
