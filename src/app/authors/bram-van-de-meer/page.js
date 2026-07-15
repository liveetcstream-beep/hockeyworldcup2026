import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Bram van de Meer — Technical Field Hockey Analyst",
  description: "Read the editorial profile of Bram van de Meer, Technical Field Hockey Analyst at Hockey World Cup 2026 Hub. Stats auditing, tactical analysis, and database credentials.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/authors/bram-van-de-meer",
  },
};

export default function BramVanDeMeerAuthorPage() {
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
          <span style={{ color: "var(--text-main)" }}>Bram van de Meer</span>
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
            📋
          </div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text-main)", marginBottom: "0.5rem" }}>
            Bram van de Meer
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--primary)", fontWeight: 700, marginBottom: "1.5rem" }}>
            Technical Field Hockey Analyst & Roster Auditor
          </p>

          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "0.95rem", textAlign: "left", marginBottom: "2rem" }}>
            Bram van de Meer is a former transition coach with over 15 years of technical analysis experience in the Dutch Hoofdklasse (top division). Having worked closely with youth academies and transition squads in Utrecht and Eindhoven, Bram specializes in player profiling, set-piece conversion ratios, and spatial positioning metrics. He audits player datasets and injury updates for hockeyworldcup2026schedule.com.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", textAlign: "left", background: "var(--bg-tertiary)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
            <div>
              <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Focus Areas</span>
              <strong style={{ color: "var(--text-main)", fontSize: "0.9rem" }}>Player Statistics, Conversion Rates, Injury Updates</strong>
            </div>
            <div>
              <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Background</span>
              <strong style={{ color: "var(--text-main)", fontSize: "0.9rem" }}>Former Hoofdklasse Assistant Transition Coach</strong>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
            Data Accuracy & E-E-A-T Commitment
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.7", fontSize: "0.92rem", marginBottom: "1.5rem" }}>
            Bram evaluates active player stats, historical head-to-head ratios, and squad sheets. By reviewing official tournament management logs, he ensures that the numbers published inside player profiles reflect precise and up-to-date international cap rankings and goals database records.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
