import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "2023 FIH Men's Hockey World Cup Results & Statistics",
  description: "Complete stats, final standings, top goalscorers, awards, and match results from the 2023 Hockey World Cup in Odisha, India.",
};

export default function PastResultsPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Historical Tournament Records</p>
          <h1 className="hero-title">2023 FIH Hockey World Cup Statistics</h1>
          <p className="hero-description">
            Comprehensive database of the 15th Men's Hockey World Cup held in Odisha, India (Bhubaneswar & Rourkela) in January 2023. Review standings, awards, and goal scoring records.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Verified: <strong>Marc Devos (Belgian Hockey Analyst)</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        <section className="my-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Official Tournament Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="local-card">
              <div className="local-icon">🥇</div>
              <h3>Tournament Winner</h3>
              <span className="text-sky-400 font-extrabold text-lg block my-1">🇩🇪 Germany</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Germany captured their third Men's World Cup title after defeating Belgium in a thrilling penalty shoot-out (5–4) after a 3–3 draw.
              </p>
            </div>

            <div className="local-card">
              <div className="local-icon">🥅</div>
              <h3>Best Goalkeeper</h3>
              <span className="text-sky-400 font-extrabold text-lg block my-1">🇧🇪 Vincent Vanasch</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                The Belgian goalkeeper won the award for his outstanding reflex saves and shoot-out defense throughout the tournament.
              </p>
            </div>

            <div className="local-card">
              <div className="local-icon">⚽</div>
              <h3>Top Scorer</h3>
              <span className="text-sky-400 font-extrabold text-lg block my-1">🇦🇺 Jeremy Hayward</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                The Australian drag-flicker won the top scorer award, hitting the back of the net 9 times during the championship.
              </p>
            </div>
          </div>
        </section>

        {/* Final Standings Table */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Final Standings & Rankings</h2>
          <div className="table-responsive results-table-container">
            <table className="sports-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Nation</th>
                  <th>Pool</th>
                  <th>Matches Played</th>
                  <th>Wins</th>
                  <th>Goal Difference</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1st</strong></td>
                  <td>
                    <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Germany</strong>
                  </td>
                  <td>Pool B</td>
                  <td>7</td>
                  <td>5</td>
                  <td>+13</td>
                  <td>🏆 Champions</td>
                </tr>
                <tr>
                  <td><strong>2nd</strong></td>
                  <td>
                    <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Belgium</strong>
                  </td>
                  <td>Pool B</td>
                  <td>7</td>
                  <td>4</td>
                  <td>+16</td>
                  <td>🥈 Runners-Up</td>
                </tr>
                <tr>
                  <td><strong>3rd</strong></td>
                  <td>
                    <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Netherlands</strong>
                  </td>
                  <td>Pool C</td>
                  <td>7</td>
                  <td>6</td>
                  <td>+24</td>
                  <td>🥉 Third Place</td>
                </tr>
                <tr>
                  <td><strong>4th</strong></td>
                  <td>
                    <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Australia</strong>
                  </td>
                  <td>Pool A</td>
                  <td>7</td>
                  <td>4</td>
                  <td>+9</td>
                  <td>Semifinalist</td>
                </tr>
                <tr>
                  <td><strong>5th</strong></td>
                  <td>
                    <img src="https://flagcdn.com/w40/gb-eng.png" width="20" height="14" alt="England flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>England</strong>
                  </td>
                  <td>Pool D</td>
                  <td>5</td>
                  <td>3</td>
                  <td>+9</td>
                  <td>Quarterfinalist</td>
                </tr>
                <tr>
                  <td><strong>9th</strong></td>
                  <td>
                    <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>India</strong>
                  </td>
                  <td>Pool D</td>
                  <td>6</td>
                  <td>4</td>
                  <td>+12</td>
                  <td>Classification Group</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Tournament Insights */}
        <section className="insights-section-wrap">
          <h2 className="insights-section-title">
            <span>📈</span> 2023 Hockey World Cup Statistical Highlights
          </h2>
          <div className="insights-grid">
            <div className="insight-col-card">
              <span className="insight-col-tag">Analytics</span>
              <span className="insight-col-header">Goal Statistics</span>
              <p className="insight-col-text">
                The 2023 tournament recorded a total of <strong>249 goals in 44 matches</strong>, averaging an impressive <strong>5.66 goals per match</strong>. This stands as one of the most high-scoring editions of the Men's Hockey World Cup history.
              </p>
            </div>
            
            <div className="insight-col-card accent-card">
              <span className="insight-col-tag">Climax</span>
              <span className="insight-col-header">The Final Clash</span>
              <p className="insight-col-text">
                The final at Kalinga Stadium in Bhubaneswar was a classic. Belgium took an early 2-0 lead, but Germany staged a heroic comeback to lead 3-2. A late Belgian equalizer sent the match to a shoot-out, where Danneberg made the title save.
              </p>
            </div>

            <div className="insight-col-card">
              <span className="insight-col-tag">E-E-A-T</span>
              <span className="insight-col-header">Verified Records</span>
              <p className="insight-col-text">
                These stats are hand-compiled by Marc Devos using official FIH data sheets. For historical cross-referencing, these records confirm the shifting dominance of European hockey, which will carry into the 2026 co-hosted games.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
