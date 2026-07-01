import React from "react";

export const metadata = {
  title: "Official Broadcasters: How to Stream Hockey World Cup 2026 Live",
  description: "Country-wise list of official TV networks and live streaming applications broadcasting the FIH Hockey World Cup 2026 without cable.",
};

export default function BroadcastersPage() {
  return (
    <>
      <header className="sports-header">
        <div className="sports-container header-flex">
          <a href="/" className="logo-text">
            🏒 HOCKEY<span>WORLD2026</span>
            <span className="logo-badge">Broadcasters</span>
          </a>
          <nav>
            <ul className="sports-nav">
              <li><a href="/">← Home</a></li>
              <li><a href="/venues">Stadiums</a></li>
              <li><a href="/teams">Squads</a></li>
              <li><a href="/live-scores">Live Scores</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="sports-container py-12">
        <section className="my-8 text-center">
          <p className="hero-subtitle">Official Television & Streaming Portal</p>
          <h1 className="text-4xl font-extrabold text-white mt-2 mb-6">FIH Hockey World Cup 2026 Broadcasters</h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Comprehensive directory of all TV networks, digital channels, and legal streaming links broadcasting the 2026 Men's and Women's World Cup from Belgium and the Netherlands.
          </p>
        </section>

        {/* Global Directory Grid */}
        <section className="my-12">
          <div className="table-responsive">
            <table className="sports-table">
              <thead>
                <tr>
                  <th>Country / Territory</th>
                  <th>Broadcasting Partner</th>
                  <th>Digital Stream App</th>
                  <th>Access Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>🇵🇰 Pakistan</strong></td>
                  <td>Ten Sports / PTV Sports</td>
                  <td><span className="channel-tag">tapmad</span> (Exclusive HD)</td>
                  <td>Paid Subscription</td>
                </tr>
                <tr>
                  <td><strong>🇮🇳 India</strong></td>
                  <td>Sports18 Network</td>
                  <td><span className="channel-tag">JioCinema</span> App</td>
                  <td>Free (Ad-Supported)</td>
                </tr>
                <tr>
                  <td><strong>🇬🇧 United Kingdom</strong></td>
                  <td>TNT Sports</td>
                  <td><span className="channel-tag">Watch.Hockey</span> Portal</td>
                  <td>PPV Pass</td>
                </tr>
                <tr>
                  <td><strong>🇺🇸 United States</strong></td>
                  <td>Fox Sports 2</td>
                  <td><span className="channel-tag">Fox Sports App</span> / Watch.Hockey</td>
                  <td>Cable Login / PPV</td>
                </tr>
                <tr>
                  <td><strong>🇳🇱 Netherlands</strong></td>
                  <td>NOS Sport</td>
                  <td><span className="channel-tag">NOS.nl</span> App</td>
                  <td>Free (NL Territory Only)</td>
                </tr>
                <tr>
                  <td><strong>🇧🇪 Belgium</strong></td>
                  <td>RTBF / VRT</td>
                  <td><span className="channel-tag">Auvio</span> / VRT MAX</td>
                  <td>Free (BE Territory Only)</td>
                </tr>
                <tr>
                  <td><strong>🇦🇺 Australia</strong></td>
                  <td>Fox Sports Australia</td>
                  <td><span className="channel-tag">Kayo Sports</span> / Watch.Hockey</td>
                  <td>Premium Subscription</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cord Cutting FAQs */}
        <section className="my-16 bg-slate-900 border border-slate-800 p-8 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-4">📺 How to Watch the Hockey World Cup 2026 Without Cable</h2>
          <p className="text-slate-300 text-sm mb-4">
            If you do not have a traditional cable subscription, you can easily access the tournament legally using the options below:
          </p>
          <ul className="list-disc pl-6 text-slate-300 text-sm space-y-2">
            <li><strong>Watch.Hockey App:</strong> The International Hockey Federation's official platform streams matches live in regions without exclusive TV rights. You can purchase a Tournament Pass for complete access.</li>
            <li><strong>JioCinema (India):</strong> Zero-cost streaming for all matches using mobile network data or local Wi-Fi.</li>
            <li><strong>tapmad (Pakistan):</strong> HD streaming across all devices (Smart TV, Mobile, Desktop) with cheap weekly/monthly packages.</li>
          </ul>
        </section>
      </main>
    </>
  );
}
