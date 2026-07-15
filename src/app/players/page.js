import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { players } from "../../data/players";

export const metadata = {
  title: "Hockey World Cup 2026 Player Profiles & Complete Squad Lists",
  description: "Explore player profiles and squad lists for all 16 qualified teams at the FIH Hockey World Cup 2026. View career goals, caps, drag-flick stats, and fitness updates.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/players",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Player Profiles & Complete Squad Lists",
    description: "Explore player profiles and squad lists for all 16 qualified teams at the FIH Hockey World Cup 2026. View career goals, caps, drag-flick stats, and fitness updates.",
    url: "https://hockeyworldcup2026schedule.com/players",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Player Profiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Player Profiles & Complete Squad Lists",
    description: "Explore player profiles and squad lists for all 16 qualified teams at the FIH Hockey World Cup 2026. View career goals, caps, drag-flick stats, and fitness updates.",
    images: ["/og-image.jpg"],
  },
};

export default function PlayersIndexPage() {
  // Group players by team
  const teams = {};
  players.forEach((p) => {
    if (!teams[p.team]) {
      teams[p.team] = {
        name: p.team,
        flag: p.flag,
        players: [],
      };
    }
    teams[p.team].players.push(p);
  });

  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏃‍♂️ Star Players & Squad Rosters</p>
          <h1 className="hero-title">Hockey World Cup 2026 Player Profiles</h1>
          <p className="hero-description">
            Complete details, caps, goals, playing style, E-E-A-T analysis, and pre-tournament fitness reviews of the star players representing their nations at the FIH Hockey World Cup 2026.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">Verified Squad Members Only</div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Players Directory</span>
        </nav>

        {Object.values(teams).map((team) => (
          <section key={team.name} style={{ marginBottom: "3rem" }}>
            <h2 style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--text-main)",
              marginBottom: "1.5rem",
              borderLeft: "4px solid var(--primary)",
              paddingLeft: "1rem"
            }}>
              {team.flag} {team.name} Star Players
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {team.players.map((p) => (
                <div key={p.slug} style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                      <span style={{ fontSize: "1.5rem" }}>{p.flag}</span>
                      <span style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "var(--primary)",
                        background: "rgba(192,0,48,0.08)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "6px"
                      }}>
                        #{p.jerseyNumber}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "0.4rem" }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "1rem" }}>
                      {p.position} {p.role ? `(${p.role})` : ""}
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", background: "var(--bg-tertiary)", padding: "0.8rem", borderRadius: "10px", fontSize: "0.8rem", marginBottom: "1.2rem" }}>
                      <div>
                        <span style={{ color: "var(--text-muted)", display: "block" }}>Caps</span>
                        <strong style={{ color: "var(--text-main)", fontSize: "0.95rem" }}>{p.caps}</strong>
                      </div>
                      <div>
                        <span style={{ color: "var(--text-muted)", display: "block" }}>Goals</span>
                        <strong style={{ color: "var(--text-main)", fontSize: "0.95rem" }}>{p.goals}</strong>
                      </div>
                    </div>
                  </div>

                  <a href={`/players/${p.slug}`} className="match-btn" style={{
                    display: "block",
                    textAlign: "center",
                    background: "var(--primary)",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    padding: "0.7rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "0.9rem"
                  }}>
                    View Full Profile & Stats →
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
