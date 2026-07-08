import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Hockey World Cup 2026 Teams & Squads: All 16 Nations",
  description: "Rosters and analysis for the 16 qualified teams in the FIH Hockey World Cup 2026. Profiles of Harmanpreet Singh, Thierry Brinkman, and Niklas Wellen.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/teams",
  },
};

export default function TeamsPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Qualified Nations & Standings</p>
          <h1 className="hero-title">Hockey World Cup 2026 Teams & Squads: All 16 Nations</h1>
          <p className="hero-description">
            Review the 16 national hockey squads qualified for the group stages and read analyst reports on the key tactical players who will decide the outcome of the tournament.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Verified: <strong>Marc Devos (Belgian Hockey Analyst)</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Men's Pools */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Men's Tournament Pools</h2>
          <div className="pools-container" style={{ marginBottom: "3rem" }}>
            {/* Pool A */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool A</h3></div>
              <ul className="pool-list">
                <li className="pool-item"><img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-netherlands" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Netherlands</a> <a href="/hockey-world-cup-2026-schedule-netherlands" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
                <li className="pool-item"><img src="https://flagcdn.com/w40/ar.png" width="20" height="14" alt="Argentina flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-argentina" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Argentina</a> <a href="/hockey-world-cup-2026-schedule-argentina" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
                <li className="pool-item"><img src="https://flagcdn.com/w40/cl.png" width="20" height="14" alt="Chile flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-chile" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Chile</a> <a href="/hockey-world-cup-2026-schedule-chile" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
                <li className="pool-item"><img src="https://flagcdn.com/w40/nz.png" width="20" height="14" alt="New Zealand flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-new-zealand" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>New Zealand</a> <a href="/hockey-world-cup-2026-schedule-new-zealand" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
              </ul>
            </div>
            {/* Pool B */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool B</h3></div>
              <ul className="pool-list">
                <li className="pool-item"><img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-germany" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Germany</a> <a href="/hockey-world-cup-2026-schedule-germany" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
                <li className="pool-item"><img src="https://flagcdn.com/w40/my.png" width="20" height="14" alt="Malaysia flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-malaysia" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Malaysia</a> <a href="/hockey-world-cup-2026-schedule-malaysia" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
                <li className="pool-item"><img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-belgium" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Belgium</a> <a href="/hockey-world-cup-2026-schedule-belgium" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
                <li className="pool-item"><img src="https://flagcdn.com/w40/fr.png" width="20" height="14" alt="France flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-france" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>France</a> <a href="/hockey-world-cup-2026-schedule-france" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
              </ul>
            </div>
            {/* Pool C */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool C</h3></div>
              <ul className="pool-list">
                <li className="pool-item"><img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-australia" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Australia</a> <a href="/hockey-world-cup-2026-schedule-australia" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
                <li className="pool-item"><img src="https://flagcdn.com/w40/ie.png" width="20" height="14" alt="Ireland flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-ireland" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Ireland</a> <a href="/hockey-world-cup-2026-schedule-ireland" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
                <li className="pool-item"><img src="https://flagcdn.com/w40/es.png" width="20" height="14" alt="Spain flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-spain" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Spain</a> <a href="/hockey-world-cup-2026-schedule-spain" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
                <li className="pool-item"><img src="https://flagcdn.com/w40/za.png" width="20" height="14" alt="South Africa flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-south-africa" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>South Africa</a> <a href="/hockey-world-cup-2026-schedule-south-africa" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
              </ul>
            </div>
            {/* Pool D */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool D</h3></div>
              <ul className="pool-list">
                <li className="pool-item"><img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-india" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>India</a> <a href="/hockey-world-cup-2026-schedule-india" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
                <li className="pool-item"><img src="https://flagcdn.com/w40/gb-wls.png" width="20" height="14" alt="Wales flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-wales" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Wales</a> <a href="/hockey-world-cup-2026-schedule-wales" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
                <li className="pool-item"><img src="https://flagcdn.com/w40/gb-eng.png" width="20" height="14" alt="England flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-england" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>England</a> <a href="/hockey-world-cup-2026-schedule-england" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
                <li className="pool-item"><img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-pakistan" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Pakistan</a> <a href="/hockey-world-cup-2026-schedule-pakistan" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#0284c7", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a></li>
              </ul>
            </div>
          </div>

          {/* CTA — All dedicated team guides */}
          <div style={{ background: "linear-gradient(135deg, rgba(255,153,51,0.06) 0%, rgba(0,153,0,0.06) 100%)", border: "1px solid rgba(192,0,48,0.12)", borderRadius: "20px", padding: "1.8rem 2rem", marginTop: "1.5rem" }}>
            <div style={{ fontWeight: "800", color: "var(--text-main)", fontSize: "1.05rem", marginBottom: "0.8rem" }}>🏑 Dedicated Team Guides — Full Schedule, Squad & Predictions</div>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              <a href="/hockey-world-cup-2026-schedule-india" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#FF9933", color: "white", borderRadius: "10px", padding: "0.6rem 1.2rem", fontWeight: "700", fontSize: "0.9rem", textDecoration: "none" }}>🇮🇳 India Guide →</a>
              <a href="/hockey-world-cup-2026-schedule-pakistan" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#009900", color: "white", borderRadius: "10px", padding: "0.6rem 1.2rem", fontWeight: "700", fontSize: "0.9rem", textDecoration: "none" }}>🇵🇰 Pakistan Guide →</a>
              <a href="/hockey-world-cup-2026-schedule-belgium" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#000000", color: "#FFD700", borderRadius: "10px", padding: "0.6rem 1.2rem", fontWeight: "700", fontSize: "0.9rem", textDecoration: "none" }}>🇧🇪 Belgium Guide →</a>
              <a href="/hockey-world-cup-2026-schedule-germany" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#333", color: "white", borderRadius: "10px", padding: "0.6rem 1.2rem", fontWeight: "700", fontSize: "0.9rem", textDecoration: "none" }}>🇩🇪 Germany Guide →</a>
              <a href="/hockey-world-cup-2026-schedule-netherlands" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#E07000", color: "white", borderRadius: "10px", padding: "0.6rem 1.2rem", fontWeight: "700", fontSize: "0.9rem", textDecoration: "none" }}>🇳🇱 Netherlands Guide →</a>
              <a href="/hockey-world-cup-2026-schedule-australia" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#00008B", color: "#FFBF00", borderRadius: "10px", padding: "0.6rem 1.2rem", fontWeight: "700", fontSize: "0.9rem", textDecoration: "none" }}>🇦🇺 Australia Guide →</a>
              <a href="/hockey-world-cup-2026-schedule-argentina" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#74ACDF", color: "white", borderRadius: "10px", padding: "0.6rem 1.2rem", fontWeight: "700", fontSize: "0.9rem", textDecoration: "none" }}>🇦🇷 Argentina Guide →</a>
              <a href="/hockey-world-cup-2026-schedule-england" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#CF101A", color: "white", borderRadius: "10px", padding: "0.6rem 1.2rem", fontWeight: "700", fontSize: "0.9rem", textDecoration: "none" }}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 England Guide →</a>
              <a href="/hockey-world-cup-2026-groups" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--bg-tertiary)", color: "var(--text-main)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "0.6rem 1.2rem", fontWeight: "700", fontSize: "0.9rem", textDecoration: "none" }}>🏑 All Pool Groups →</a>
            </div>
          </div>
        </section>

        {/* Women's Pools */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-rose-400 pl-4 italic">Women's Tournament Pools</h2>
          <div className="pools-container">
            {/* Pool A */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool A</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-netherlands" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Netherlands</a> <a href="/hockey-world-cup-2026-schedule-netherlands" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#f43f5e", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a>
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-australia" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Australia</a> <a href="/hockey-world-cup-2026-schedule-australia" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#f43f5e", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a>
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/jp.png" width="20" height="14" alt="Japan flag" style={{ borderRadius: "2px" }} /> Japan
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/cl.png" width="20" height="14" alt="Chile flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-chile" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Chile</a> <a href="/hockey-world-cup-2026-schedule-chile" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#f43f5e", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a>
                </li>
              </ul>
            </div>
            {/* Pool B */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool B</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/ar.png" width="20" height="14" alt="Argentina flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-argentina" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Argentina</a> <a href="/hockey-world-cup-2026-schedule-argentina" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#f43f5e", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a>
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-germany" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Germany</a> <a href="/hockey-world-cup-2026-schedule-germany" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#f43f5e", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a>
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-sct.png" width="20" height="14" alt="Scotland flag" style={{ borderRadius: "2px" }} /> Scotland
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/us.png" width="20" height="14" alt="USA flag" style={{ borderRadius: "2px" }} /> United States
                </li>
              </ul>
            </div>
            {/* Pool C */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool C</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-belgium" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Belgium</a> <a href="/hockey-world-cup-2026-schedule-belgium" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#f43f5e", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a>
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/es.png" width="20" height="14" alt="Spain flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-spain" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>Spain</a> <a href="/hockey-world-cup-2026-schedule-spain" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#f43f5e", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a>
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/nz.png" width="20" height="14" alt="New Zealand flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-new-zealand" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>New Zealand</a> <a href="/hockey-world-cup-2026-schedule-new-zealand" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#f43f5e", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a>
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/fr.png" width="20" height="14" alt="France flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-france" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>France</a> <a href="/hockey-world-cup-2026-schedule-france" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#f43f5e", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a>
                </li>
              </ul>
            </div>
            {/* Pool D */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool D</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/cn.png" width="20" height="14" alt="China flag" style={{ borderRadius: "2px" }} /> China
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-india" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>India</a> <a href="/hockey-world-cup-2026-schedule-india" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#f43f5e", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a>
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-eng.png" width="20" height="14" alt="England flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-england" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>England</a> <a href="/hockey-world-cup-2026-schedule-england" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#f43f5e", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a>
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/za.png" width="20" height="14" alt="South Africa flag" style={{ borderRadius: "2px" }} /> <a href="/hockey-world-cup-2026-schedule-south-africa" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none" }}>South Africa</a> <a href="/hockey-world-cup-2026-schedule-south-africa" style={{ fontSize: "0.7rem", background: "rgba(2,132,199,0.1)", color: "#f43f5e", borderRadius: "6px", padding: "0.1rem 0.4rem", marginLeft: "4px", textDecoration: "none" }}>Guide →</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Star Players Segment */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Star Players to Watch</h2>
          <div className="local-grid">
            <div className="local-card">
              <div className="local-icon">
                <img src="https://flagcdn.com/w40/in.png" width="30" height="20" alt="India flag" style={{ borderRadius: "2px" }} />
              </div>
              <h3 className="text-white mt-4 mb-2">Harmanpreet Singh (India)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The drag-flicking defender remains India's primary scoring threat during penalty corners. His precise scoops and tactical organization in defense are crucial for the Men in Blue's success.
              </p>
            </div>
            <div className="local-card">
              <div className="local-icon">
                <img src="https://flagcdn.com/w40/nl.png" width="30" height="20" alt="Netherlands flag" style={{ borderRadius: "2px" }} />
              </div>
              <h3 className="text-white mt-4 mb-2">Thierry Brinkman (Netherlands)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                As the Dutch captain, Brinkman is a versatile forward known for his outstanding field vision, playmaking capability, and clutch goals in knockout matchdays.
              </p>
            </div>
            <div className="local-card">
              <div className="local-icon">
                <img src="https://flagcdn.com/w40/de.png" width="30" height="20" alt="Germany flag" style={{ borderRadius: "2px" }} />
              </div>
              <h3 className="text-white mt-4 mb-2">Niklas Wellen (Germany)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The MVP of the last World Cup, Wellen possesses incredible dribbling speed and ball control. His fast transitions make Germany a feared counter-attacking squad.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Tactical Predictions */}
        <section className="my-16" style={{
          background: "linear-gradient(135deg, rgba(192, 0, 48, 0.03) 0%, #f8fafc 100%)",
          border: "1px solid rgba(15, 23, 42, 0.08)",
          padding: "3rem 2.5rem",
          borderRadius: "24px",
          boxShadow: "0 8px 30px rgba(15, 23, 42, 0.03)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.8rem" }}>
            <span style={{ fontSize: "2rem" }}>🏆</span>
            <h2 className="text-2xl font-bold m-0" style={{ fontStyle: "italic", letterSpacing: "0.02em", color: "var(--text-main)" }}>Tournament Analyst Outlook</h2>
          </div>
          <div style={{ fontSize: "1.05rem", lineHeight: "2.0", letterSpacing: "0.01em", color: "var(--text-muted)" }}>
            <p style={{ margin: "0 0 1.5rem 0" }}>
              The co-hosts, <strong style={{ color: "var(--text-main)" }}>Belgium</strong> (World No. 2) and the <strong style={{ color: "var(--text-main)" }}>Netherlands</strong> (World No. 1), enter the 2026 tournament as heavy favorites. Belgium's Golden Generation, led by Arthur Van Doren, will enjoy massive local backing at the Belfius Arena in Wavre.
            </p>
            <p style={{ margin: "0" }}>
              Meanwhile, <strong style={{ color: "var(--text-main)" }}>Germany</strong> (reigning champions) and a resurgent <strong style={{ color: "var(--text-main)" }}>India</strong> (Pool A contenders) will provide fierce competition. The matches between Netherlands and Germany in the group stage are expected to record the highest TV viewership. Underdogs like Wales and Chile will look to exploit physical counter-attack opportunities on the high-speed water-based turfs.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
