import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Live Scores & Match Tracker - Hockey World Cup 2026",
  description: "Real-time live scores, goals, cards, and penalty corner stats for all matches in the FIH Hockey World Cup 2026. Follow updates live.",
};

export default function LiveScoresPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <div className="live-indicator mb-4">
            <span className="live-dot"></span>
            Real-Time Feed Active
          </div>
          <h1 className="hero-title">Live Match Centre</h1>
          <p className="hero-description">
            Get instant play-by-play updates, card bookings, penalty corner conversion rates, and official lineups on matchdays.
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
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">
            <h2 className="text-xl font-bold text-white mb-2">No Live Matches Right Now</h2>
            <p className="text-slate-400 text-sm mb-6">
              The first match starts on <strong>August 15, 2026</strong>. Real-time scores and play-by-play text feeds will activate 30 minutes before kickoff.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <div className="bg-slate-950 border border-slate-800 px-6 py-3 rounded-lg text-slate-300 text-sm flex items-center gap-3">
                <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px" }} />
                <span>India vs Wales (Men)</span>
                <span>—</span>
                <strong>August 15, 13:00 CET</strong>
              </div>
              <div className="bg-slate-950 border border-slate-800 px-6 py-3 rounded-lg text-slate-300 text-sm flex items-center gap-3">
                <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px" }} />
                <span>Germany vs Malaysia (Men)</span>
                <span>—</span>
                <strong>August 15, 15:30 CET</strong>
              </div>
            </div>
          </div>

        {/* Tactical Scoreboard features info */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">What to Expect in Our Live Tracker</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="vpn-instruction-box">
              <strong className="text-white block mb-2">⚡ Penalty Corner Stats</strong>
              Our system tracks penalty corner count and conversion rates in real-time, which is key for forecasting winner outcomes during the game.
            </div>
            <div className="vpn-instruction-box">
              <strong className="text-white block mb-2">🎴 Card Allocations</strong>
              Live tracking of green cards, yellow cards (temporary suspensions), and red cards, showing which team is playing with fewer players on the turf.
            </div>
            <div className="vpn-instruction-box">
              <strong className="text-white block mb-2">📈 Ball Possession</strong>
              Circle penetration counts and possession percentages updated session-by-session.
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
