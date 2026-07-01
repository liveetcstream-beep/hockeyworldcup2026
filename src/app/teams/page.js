import React from "react";

export const metadata = {
  title: "Qualified Teams & Star Players - Hockey World Cup 2026",
  description: "Rosters and analysis for the 16 qualified teams in the FIH Hockey World Cup 2026. Profiles of Harmanpreet Singh, Thierry Brinkman, and Niklas Wellen.",
};

export default function TeamsPage() {
  return (
    <>
      <header className="sports-header">
        <div className="sports-container header-flex">
          <a href="/" className="logo-text">
            🏒 HOCKEY<span>WORLD2026</span>
            <span className="logo-badge">Teams</span>
          </a>
          <nav>
            <ul className="sports-nav">
              <li><a href="/">← Home</a></li>
              <li><a href="/broadcasters">Streams</a></li>
              <li><a href="/venues">Stadiums</a></li>
              <li><a href="/live-scores">Live Scores</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="sports-container py-12">
        <section className="my-8 text-center">
          <p className="hero-subtitle">Qualified Nations & Standings</p>
          <h1 className="text-4xl font-extrabold text-white mt-2 mb-6">Teams & Star Players Profiles</h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Review the 16 national hockey squads qualified for the group stages and read analyst reports on the key tactical players who will decide the outcome of the tournament.
          </p>
        </section>

        {/* Pools grid */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Qualified Group Stage Pools</h2>
          <div className="pools-container">
            {/* Pool A */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool A</h3></div>
              <ul className="pool-list">
                <li className="pool-item"><span className="pool-flag">🇳🇱</span> Netherlands</li>
                <li className="pool-item"><span className="pool-flag">🇩🇪</span> Germany</li>
                <li className="pool-item"><span className="pool-flag">🇮🇳</span> India</li>
                <li className="pool-item"><span className="pool-flag">🇪🇸</span> Spain</li>
              </ul>
            </div>
            {/* Pool B */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool B</h3></div>
              <ul className="pool-list">
                <li className="pool-item"><span className="pool-flag">🇧🇪</span> Belgium</li>
                <li className="pool-item"><span className="pool-flag">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</li>
                <li className="pool-item"><span className="pool-flag">🇦🇺</span> Australia</li>
                <li className="pool-item"><span className="pool-flag">🇳🇿</span> New Zealand</li>
              </ul>
            </div>
            {/* Pool C */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool C</h3></div>
              <ul className="pool-list">
                <li className="pool-item"><span className="pool-flag">🇦🇷</span> Argentina</li>
                <li className="pool-item"><span className="pool-flag">🇫🇷</span> France</li>
                <li className="pool-item"><span className="pool-flag">🇿🇦</span> South Africa</li>
                <li className="pool-item"><span className="pool-flag">🇲🇾</span> Malaysia</li>
              </ul>
            </div>
            {/* Pool D */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool D</h3></div>
              <ul className="pool-list">
                <li className="pool-item"><span className="pool-flag">🇨🇱</span> Chile</li>
                <li className="pool-item"><span className="pool-flag">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span> Wales</li>
                <li className="pool-item"><span className="pool-flag">🇯🇵</span> Japan</li>
                <li className="pool-item"><span className="pool-flag">🇮🇪</span> Ireland</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Star Players Segment */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Star Players to Watch</h2>
          <div className="local-grid">
            <div className="local-card">
              <div className="local-icon">🇮🇳</div>
              <h3 className="text-white mt-4 mb-2">Harmanpreet Singh (India)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The drag-flicking defender remains India's primary scoring threat during penalty corners. His precise scoops and tactical organization in defense are crucial for the Men in Blue's success.
              </p>
            </div>
            <div className="local-card">
              <div className="local-icon">🇳🇱</div>
              <h3 className="text-white mt-4 mb-2">Thierry Brinkman (Netherlands)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                As the Dutch captain, Brinkman is a versatile forward known for his outstanding field vision, playmaking capability, and clutch goals in knockout matchdays.
              </p>
            </div>
            <div className="local-card">
              <div className="local-icon">🇩🇪</div>
              <h3 className="text-white mt-4 mb-2">Niklas Wellen (Germany)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The MVP of the last World Cup, Wellen possesses incredible dribbling speed and ball control. His fast transitions make Germany the most feared counter-attacking squad in the tournament.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
