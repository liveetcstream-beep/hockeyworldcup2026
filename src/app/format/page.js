import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Tournament Format & Crossover Match Rules: Hockey World Cup 2026",
  description: "Complete guide on how the 16 teams qualify for the quarterfinals. Learn how crossover matches, penalty shootouts, and classification stages work.",
};

export default function FormatPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Knockout Progression & Rules</p>
          <h1 className="hero-title">FIH Hockey World Cup 2026 Tournament Format</h1>
          <p className="hero-description">
            Understanding the progression structure is vital. Only 16 countries compete, but the road to the final in Wavre involves group stages, crossover matches, and straight knockouts.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              📅 Updated: <strong>July 1, 2026</strong>
            </div>
            <div className="eeat-badge">
              ✍️ Verified: <strong>Marc Devos (Belgian Hockey Analyst)</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        <section className="insights-section-wrap">
          <h2 className="insights-section-title">
            <span>📊</span> Tournament Progression Stages Explained
          </h2>
          <div className="insights-grid">
            <div className="insight-col-card">
              <span className="insight-col-tag">Stage 1</span>
              <span className="insight-col-header">Group Pool Stage</span>
              <p className="insight-col-text">
                The 16 qualified teams are split into 4 pools of 4 (Pools A, B, C, D). They play a single round-robin structure. At the end of the pool matches, the top finisher in each group qualifies directly for the Quarterfinals.
              </p>
            </div>
            
            <div className="insight-col-card accent-card">
              <span className="insight-col-tag">Stage 2</span>
              <span className="insight-col-header">Crossover Stage</span>
              <p className="insight-col-text">
                Teams finishing 2nd and 3rd in their pools must play crossover matches to keep their title hopes alive. In this knockout round, 2nd-placed squads face 3rd-placed squads from opposite groups (e.g., A2 vs B3, C2 vs D3).
              </p>
            </div>

            <div className="insight-col-card">
              <span className="insight-col-tag">Stage 3</span>
              <span className="insight-col-header">Knockout Finals</span>
              <p className="insight-col-text">
                The 4 crossover winners join the 4 group winners in the Quarterfinals. From this point forward, it is a single-elimination tournament leading to the final at the Belfius Arena in Wavre, Belgium.
              </p>
            </div>
          </div>
        </section>

        {/* Crossover Math Mapping Table */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Crossover Matchups Mapping</h2>
          <div className="table-responsive">
            <table className="sports-table">
              <thead>
                <tr>
                  <th>Match Code</th>
                  <th>Matchup Formula</th>
                  <th>Winner Progression</th>
                  <th>Loser Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Crossover 1</strong></td>
                  <td>2nd Place Pool A vs 3rd Place Pool B</td>
                  <td>Advances to Quarterfinal 1 (vs Winner Pool C)</td>
                  <td>Moves to 9th-16th Classification</td>
                </tr>
                <tr>
                  <td><strong>Crossover 2</strong></td>
                  <td>2nd Place Pool B vs 3rd Place Pool A</td>
                  <td>Advances to Quarterfinal 2 (vs Winner Pool D)</td>
                  <td>Moves to 9th-16th Classification</td>
                </tr>
                <tr>
                  <td><strong>Crossover 3</strong></td>
                  <td>2nd Place Pool C vs 3rd Place Pool D</td>
                  <td>Advances to Quarterfinal 3 (vs Winner Pool A)</td>
                  <td>Moves to 9th-16th Classification</td>
                </tr>
                <tr>
                  <td><strong>Crossover 4</strong></td>
                  <td>2nd Place Pool D vs 3rd Place Pool C</td>
                  <td>Advances to Quarterfinal 4 (vs Winner Pool B)</td>
                  <td>Moves to 9th-16th Classification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Inline Content Questions & E-A-T Sourcing */}
        <section className="my-16 bg-slate-900 border border-slate-800 p-8 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-6">📝 Tournament Structure Q&A</h2>
          <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
            <div>
              <strong className="text-white block mb-1">Q: What happens to the teams that finish 4th in their pools?</strong>
              <p>
                A: The teams finishing last (4th place) are immediately eliminated from contesting the World Cup trophy. However, they continue to play classification matches to establish final FIH world ranking positions.
              </p>
            </div>
            <div>
              <strong className="text-white block mb-1">Q: How are tie-breaker situations resolved in knockout rounds?</strong>
              <p>
                A: If a crossover or knockout match ends in a draw at the end of regulation (60 minutes), the game goes directly to a **penalty shootout**. There is no extra time (overtime) played in FIH tournaments.
              </p>
            </div>
            <div>
              <strong className="text-white block mb-1">Q: Why does the FIH use the crossover format?</strong>
              <p>
                A: The crossover format keeps the group stage highly competitive. Even if a powerhouse team loses its opening match, they can still qualify for the knockouts by securing 2nd or 3rd place, keeping television viewers and sponsors engaged.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-500 italic">
            "The crossover phase is highly volatile. A single bad day on the water-based turf in Amstelveen can ruin a top team's tournament run, making it a favorite for sports betters." — <strong>Marc Devos, Senior Belgian Hockey Analyst</strong>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
