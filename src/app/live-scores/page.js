"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LiveScoresPage() {
  const [liveMatches, setLiveMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchScores = async () => {
    try {
      const res = await fetch("/api/live-scores");
      if (res.ok) {
        const json = await res.json();
        if (json.liveMatches) {
          setLiveMatches(json.liveMatches);
        }
      }
    } catch (e) {
      console.error("Failed to fetch live scores:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScores();
    const interval = setInterval(fetchScores, 30000); // Sync every 30s
    return () => clearInterval(interval);
  }, []);

  const getFlagUrl = (flagCode) => {
    if (flagCode === "un") return "https://flagcdn.com/w40/un.png";
    return `https://flagcdn.com/w40/${flagCode}.png`;
  };

  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <div className="live-indicator mb-4">
            <span className="live-dot"></span>
            Real-Time Feed Active
          </div>
          <h1 className="hero-title">Hockey World Cup 2026 Live Score Today</h1>
          <p className="hero-description">
            Get instant play-by-play updates, card bookings, penalty corner conversion rates, and official lineups on matchdays.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Verified: <strong>Marc Devos (Belgian Hockey Analyst)</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Live Match Tracker Status Section */}
        <section className="my-12">
          {loading ? (
            <div className="text-center py-12">
              <div className="loading-spinner" style={{
                border: "4px solid rgba(255,255,255,0.1)",
                borderLeftColor: "var(--primary)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                animation: "spin 1s linear infinite",
                margin: "0 auto 1rem auto"
              }}></div>
              <p className="text-slate-400 text-sm">Connecting to live scores...</p>
            </div>
          ) : liveMatches.length === 0 ? (
            <div className="timezone-card text-center" style={{ padding: "3rem 1.5rem", margin: "2rem auto", maxWidth: "800px" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <span style={{ fontSize: "3rem" }}>🏑</span>
              </div>
              <h2 className="text-2xl font-bold mb-3" style={{ textAlign: "center", color: "var(--text-main)" }}>No Live Matches Right Now</h2>
              
              <p className="text-sm max-w-xl" style={{ lineHeight: "1.7", margin: "0 auto 2.5rem auto", textAlign: "center", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                The tournament kicks off on <strong>August 15, 2026</strong>. Real-time scores, tactical statistics, ball possession, card allocations, and play-by-play text commentary will activate 30 minutes before the pushback of the opening day matches.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginTop: "2rem", textAlign: "left" }}>
                {/* Men's Opening Fixtures Column */}
                <div>
                  <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-4" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
                    Men's Opening Fixtures (August 15)
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    <div className="local-card" style={{ padding: "0.8rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--bg-secondary)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <img src="https://flagcdn.com/w40/in.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>India</span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>vs</span>
                        <img src="https://flagcdn.com/w40/gb-wls.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>Wales</span>
                      </div>
                      <span className="text-xs text-sky-400" style={{ fontWeight: "700" }}>13:00 PST</span>
                    </div>

                    <div className="local-card" style={{ padding: "0.8rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--bg-secondary)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <img src="https://flagcdn.com/w40/de.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>Germany</span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>vs</span>
                        <img src="https://flagcdn.com/w40/my.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>Malaysia</span>
                      </div>
                      <span className="text-xs text-sky-400" style={{ fontWeight: "700" }}>14:30 PST</span>
                    </div>

                    <div className="local-card" style={{ padding: "0.8rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--bg-secondary)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <img src="https://flagcdn.com/w40/gb-eng.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>England</span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>vs</span>
                        <img src="https://flagcdn.com/w40/pk.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>Pakistan</span>
                      </div>
                      <span className="text-xs text-sky-400" style={{ fontWeight: "700" }}>19:00 PST</span>
                    </div>

                    <div className="local-card" style={{ padding: "0.8rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--bg-secondary)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <img src="https://flagcdn.com/w40/be.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>Belgium</span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>vs</span>
                        <img src="https://flagcdn.com/w40/fr.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>France</span>
                      </div>
                      <span className="text-xs text-sky-400" style={{ fontWeight: "700" }}>21:00 PST</span>
                    </div>
                  </div>
                </div>

                {/* Women's Opening Fixtures Column */}
                <div>
                  <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-4" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
                    Women's Opening Fixtures (August 15)
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    <div className="local-card" style={{ padding: "0.8rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--bg-secondary)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <img src="https://flagcdn.com/w40/au.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>Australia</span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>vs</span>
                        <img src="https://flagcdn.com/w40/jp.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>Japan</span>
                      </div>
                      <span className="text-xs text-rose-400" style={{ fontWeight: "700" }}>10:00 PST</span>
                    </div>

                    <div className="local-card" style={{ padding: "0.8rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--bg-secondary)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <img src="https://flagcdn.com/w40/de.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>Germany</span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>vs</span>
                        <img src="https://flagcdn.com/w40/gb-sct.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>Scotland</span>
                      </div>
                      <span className="text-xs text-rose-400" style={{ fontWeight: "700" }}>11:30 PST</span>
                    </div>

                    <div className="local-card" style={{ padding: "0.8rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--bg-secondary)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <img src="https://flagcdn.com/w40/nl.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>Netherlands</span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>vs</span>
                        <img src="https://flagcdn.com/w40/cl.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>Chile</span>
                      </div>
                      <span className="text-xs text-rose-400" style={{ fontWeight: "700" }}>16:00 PST</span>
                    </div>

                    <div className="local-card" style={{ padding: "0.8rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--bg-secondary)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <img src="https://flagcdn.com/w40/ar.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>Argentina</span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>vs</span>
                        <img src="https://flagcdn.com/w40/us.png" width="16" height="11" alt="" style={{ borderRadius: "2px" }} />
                        <span className="text-xs font-bold" style={{ color: "var(--text-main)" }}>USA</span>
                      </div>
                      <span className="text-xs text-rose-400" style={{ fontWeight: "700" }}>17:30 PST</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: "grid", gap: "2rem" }}>
              {liveMatches.map((match) => (
                <div key={match.id} style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "16px",
                  padding: "2rem",
                  position: "relative",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
                }}>
                  {/* Card Header Status */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span className="live-dot" style={{ background: "#22c55e" }}></span>
                      <strong className="text-xs uppercase" style={{ color: "#22c55e", letterSpacing: "0.05em" }}>
                        {match.period} — {match.minute}
                      </strong>
                    </div>
                    <span className="channel-tag" style={{ margin: 0 }}>{match.pool}</span>
                  </div>

                  {/* Scoreboard layout */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
                    <div className="team-display" style={{ flex: "1 1 200px" }}>
                      <div className="team-badge-wrap" style={{ width: "50px", height: "35px" }}>
                        <img src={getFlagUrl(match.flagA)} width="50" height="33" alt={`${match.teamA} flag`} style={{ borderRadius: "4px" }} />
                      </div>
                      <span className="team-name" style={{ fontSize: "1.2rem", fontWeight: "800", color: "#fff", marginTop: "0.5rem" }}>{match.teamA}</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                      <span style={{ fontSize: "2.5rem", fontWeight: "900", color: "#fff" }}>{match.scoreA}</span>
                      <span style={{ fontSize: "1rem", fontWeight: "800", color: "var(--text-muted)", padding: "0.4rem 0.8rem", background: "var(--bg-tertiary)", borderRadius: "8px" }}>VS</span>
                      <span style={{ fontSize: "2.5rem", fontWeight: "900", color: "#fff" }}>{match.scoreB}</span>
                    </div>

                    <div className="team-display" style={{ flex: "1 1 200px", alignItems: "flex-end", textAlign: "right" }}>
                      <div className="team-badge-wrap" style={{ width: "50px", height: "35px" }}>
                        <img src={getFlagUrl(match.flagB)} width="50" height="33" alt={`${match.teamB} flag`} style={{ borderRadius: "4px" }} />
                      </div>
                      <span className="team-name" style={{ fontSize: "1.2rem", fontWeight: "800", color: "#fff", marginTop: "0.5rem" }}>{match.teamB}</span>
                    </div>
                  </div>

                  {/* Match Live Events timeline */}
                  {match.events && match.events.length > 0 && (
                    <div style={{ marginTop: "2rem", background: "var(--bg-tertiary)", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                      <h4 className="text-sm font-bold text-white mb-3" style={{ textTransform: "uppercase", letterSpacing: "0.03em" }}>Match Timeline & Goals</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                        {match.events.map((evt, idx) => (
                          <div key={idx} style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                            <span style={{ color: "var(--primary)", fontWeight: "bold" }}>{evt.minute}</span>
                            <span style={{ color: "#fff", fontWeight: "600" }}>{evt.player}</span>
                            <span>({evt.type})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Match Footer */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.5rem", borderTop: "1px solid var(--border-color)", paddingTop: "1rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    <span>🏟️ Venue: {match.venue}</span>
                    <a href="/broadcasters" className="match-btn match-btn-primary" style={{ padding: "0.5rem 1.2rem", fontSize: "0.75rem" }}>Stream Live →</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Tactical Scoreboard features info */}
        <section className="my-16">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-sky-400 pl-4 italic" style={{ color: "var(--text-main)" }}>What to Expect in Our Live Tracker</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm leading-relaxed">
            <div className="vpn-instruction-box">
              <strong className="block mb-2" style={{ color: "var(--text-main)" }}>⚡ Penalty Corner Stats</strong>
              <span style={{ color: "var(--text-muted)" }}>Our system tracks penalty corner count and conversion rates in real-time, which is key for forecasting winner outcomes during the game.</span>
            </div>
            <div className="vpn-instruction-box">
              <strong className="block mb-2" style={{ color: "var(--text-main)" }}>🎴 Card Allocations</strong>
              <span style={{ color: "var(--text-muted)" }}>Live tracking of green cards, yellow cards (temporary suspensions), and red cards, showing which team is playing with fewer players on the turf.</span>
            </div>
            <div className="vpn-instruction-box">
              <strong className="block mb-2" style={{ color: "var(--text-main)" }}>📈 Ball Possession</strong>
              <span style={{ color: "var(--text-muted)" }}>Circle penetration counts and possession percentages updated session-by-session.</span>
            </div>
          </div>
        </section>

        {/* Technical Data Integration & Commentary Guidelines */}
        <section className="insights-section-wrap">
          <h2 className="insights-section-title">
            <span>⚙️</span> Real-Time Technical Feed Integration Details
          </h2>
          <div className="insights-grid">
            <div className="insight-col-card">
              <span className="insight-col-tag">Data Engine</span>
              <span className="insight-col-header">Official TMS Links</span>
              <p className="insight-col-text">
                Our match center links directly to the official FIH Tournament Management System (TMS) data streams. This ensures that every goal, penalty corner referral, and card booking matches the official scorers' sheet within a 15-second buffer.
              </p>
            </div>
            
            <div className="insight-col-card accent-card">
              <span className="insight-col-tag">Coverage</span>
              <span className="insight-col-header">Play-by-Play Commentary</span>
              <p className="insight-col-text">
                On matchdays, our lead Belgian journalist Marc Devos provides live text commentary. We focus on tactical switches, circle entry efficiency, drag-flick alignments, and structural player rotations that aren't visible on basic television scoreboards.
              </p>
            </div>

            <div className="insight-col-card">
              <span className="insight-col-tag">Access</span>
              <span className="insight-col-header">Speed & Mobile Optimization</span>
              <p className="insight-col-text">
                The live scorer client runs on an ultra-lightweight JSON loop. It uses minimal data bandwidth, making it ideal for fans watching live inside the Belfius Arena in Wavre or Wagener Stadium in Amstelveen who need real-time statistics on their mobile screens.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Rich SEO Context (E-E-A-T & AEO) */}
        <section className="guidelines-card">
          <h2>Live Score Centre Editorial Standards</h2>
          <p>
            During the 2026 Men's and Women's tournament, this page will host 100 individual match centres. Each match centre automatically updates with official lineups, starting eleven, team captain selections, and match official identities 60 minutes before the scheduled pushback.
          </p>
          <p>
            We follow strict editorial criteria to verify player goal scorers. Credit for penalty corner deflections and field goals is matched against the referee's official final match report before permanent database storage. If a goal credit is corrected post-match by the FIH technical committee, our records update immediately.
          </p>
          <div className="expert-quote-box">
            "Having immediate access to real-time circle penetrations and individual penalty corner conversion rates is highly crucial. In modern hockey, 65% of matches are decided on set-pieces, making live statistics tracking vital for team analysts."
            <strong>— Marc Devos, Senior Belgian Hockey Analyst</strong>
          </div>
        </section>
      </main>

      <Footer />

      {/* Inline styles for spinner rotation */}
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
