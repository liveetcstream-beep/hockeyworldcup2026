import React from "react";

export const metadata = {
  title: "Live Scores & Real-Time Match Tracker - Hockey World Cup 2026",
  description: "Real-time live scores, goals, cards, and penalty corner stats for all matches in the FIH Hockey World Cup 2026. Follow updates live.",
};

export default function LiveScoresPage() {
  return (
    <>
      <header className="sports-header">
        <div className="sports-container header-flex">
          <a href="/" className="logo-text">
            🏒 HOCKEY<span>WORLD2026</span>
            <span className="logo-badge">Live Scores</span>
          </a>
          <nav>
            <ul className="sports-nav">
              <li><a href="/">← Home</a></li>
              <li><a href="/broadcasters">Streams</a></li>
              <li><a href="/venues">Stadiums</a></li>
              <li><a href="/teams">Squads</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="sports-container py-12">
        <section className="my-8 text-center">
          <div className="live-indicator mb-4">
            <span className="live-dot"></span>
            Real-Time Feed Active
          </div>
          <h1 className="text-4xl font-extrabold text-white mt-2 mb-6">Live Match Centre</h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Get instant play-by-play updates, card bookings, penalty corner conversion rates, and official lineups on matchdays. 
          </p>
        </section>

        {/* Live scores list placeholder */}
        <section className="my-12">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">
            <h2 className="text-xl font-bold text-white mb-2">No Live Matches Right Now</h2>
            <p className="text-slate-400 text-sm mb-6">
              The first match starts on <strong>August 15, 2026</strong>. Real-time scores and play-by-play text feeds will activate 30 minutes before kickoff.
            </p>
            <div className="inline-block bg-slate-950 border border-slate-800 px-6 py-3 rounded-lg text-slate-300 text-sm">
              📢 <strong>Next Up:</strong> India vs. Wales (Men's Group Stage) — August 15, 13:00 CET
            </div>
          </div>
        </section>

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
    </>
  );
}
