import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Marc Devos — Senior Field Hockey Journalist & Editorial Director",
  description: "Read the editorial profile of Marc Devos, Senior Field Hockey Analyst covering the FIH Hockey World Cup 2026. Credentials, hockey publications, and verified coverage archives.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/authors/marc-devos",
  },
};

export default function MarcDevosAuthorPage() {
  return (
    <>
      <Header />

      <main className="sports-container py-12" style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Authors</span>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)" }}>Marc Devos</span>
        </nav>

        <section style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          borderRadius: "24px",
          padding: "3rem 2rem",
          textAlign: "center",
          marginBottom: "3rem"
        }}>
          <div style={{
            fontSize: "4rem",
            marginBottom: "1rem"
          }}>
            ✍️
          </div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text-main)", marginBottom: "0.5rem" }}>
            Marc Devos
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--primary)", fontWeight: 700, marginBottom: "1.5rem" }}>
            Senior Field Hockey Journalist & Editorial Director
          </p>

          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "0.95rem", textAlign: "left", marginBottom: "2rem" }}>
            Marc Devos is a veteran sports journalist based in Brussels, Belgium, with over 15 years of experience specializing in European field hockey. He has covered multiple FIH World Cups, EuroHockey Championships, and Olympic Games. Formerly a correspondent for leading Belgian sports dailies, Marc now serves as the Editorial Director for hockeyworldcup2026schedule.com, verifying matchday metrics, team lineup disclosures, and technical stats.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", textAlign: "left", background: "var(--bg-tertiary)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
            <div>
              <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Focus Areas</span>
              <strong style={{ color: "var(--text-main)", fontSize: "0.9rem" }}>Tactical Formats, European Pool Dynamics</strong>
            </div>
            <div>
              <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Credentials</span>
              <strong style={{ color: "var(--text-main)", fontSize: "0.9rem" }}>Accredited FIH Tournament Journalist</strong>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
            Editorial Standards & E-E-A-T Commitment
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.7", fontSize: "0.92rem", marginBottom: "1.5rem" }}>
            Every piece of fixture schedule timing, team pool analysis, and drag-flick conversion data published on this portal is cross-referenced against the official FIH Tournament Management System (TMS). Under Marc's supervision, we run a rigorous 3-step verification process on player statistics to guarantee that no misinformation regarding game starts or broadcasting schedules affects traveling spectators.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
