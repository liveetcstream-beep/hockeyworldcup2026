import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Wagener Stadium & Belfius Arena Travel Guide - Hockey World Cup 2026",
  description: "Complete visitor guide for the 2026 FIH Hockey World Cup stadiums. Includes transit maps, local Zip codes, Amsterdamse Bos details, and Wavre attractions.",
};

export default function VenuesPage() {
  return (
    <>
      <Header />

      <main className="sports-container py-12">
        <section className="my-8 text-center">
          <p className="hero-subtitle">Official Tournament Stadiums</p>
          <h1 className="text-4xl font-extrabold text-white mt-2 mb-6">Stadium & Geographic Guides</h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            The 2026 Hockey World Cup is co-hosted across two historic venues in Amstelveen, Netherlands and Wavre, Belgium. Find transit routes, weather advisories, and local landmarks below.
          </p>
        </section>

        <section className="local-grid my-12">
          {/* Amstelveen Stadium Guide */}
          <div className="local-card">
            <div className="local-icon">
              <img src="https://flagcdn.com/w40/nl.png" width="30" height="20" alt="Netherlands flag" style={{ borderRadius: "2px" }} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Wagener Stadium, Amstelveen</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Located in the scenic North Holland province, the Wagener Stadium is the spiritual home of Dutch hockey. It is nestled right on the edge of the <strong>Amsterdamse Bos</strong> (Amsterdam Forest), offering beautiful greenery, hiking paths, and lake systems for visiting fans.
            </p>
            <div className="local-meta">
              <div className="local-meta-item">
                <span>📍 Full Address:</span>
                <strong>Nieuwe Kalfjeslaan 21, 1182 AM Amstelveen, Netherlands</strong>
              </div>
              <div className="local-meta-item">
                <span>🚇 Public Transit:</span>
                <strong>Metro 25 from Amsterdam Centraal to Amstelveen, followed by a short walk</strong>
              </div>
              <div className="local-meta-item">
                <span>🏛️ Nearby Landmark:</span>
                <strong>Cobra Museum of Modern Art / Amsterdamse Bos Lake</strong>
              </div>
              <div className="local-meta-item">
                <span>🌦️ Expected Climate:</span>
                <strong>Varies between 16°C to 23°C in late August. Heavy rains are common.</strong>
              </div>
              <div className="local-meta-item">
                <span>⚠️ Local Issue:</span>
                <strong>High congestion during peak matchdays; travel via bicycles or public transport.</strong>
              </div>
            </div>
          </div>

          {/* Belgium Stadium Guide */}
          <div className="local-card">
            <div className="local-icon">
              <img src="https://flagcdn.com/w40/be.png" width="30" height="20" alt="Belgium flag" style={{ borderRadius: "2px" }} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Belfius Hockey Arena, Wavre</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Wavre is situated in the Walloon Brabant region of Belgium. The Belfius Arena is a brand-new, top-tier facility built specifically to host the Belgian pool matches and the Men's Hockey World Cup grand finale.
            </p>
            <div className="local-meta">
              <div className="local-meta-item">
                <span>📍 Full Address:</span>
                <strong>Avenue de la Toison d'Or, 1300 Wavre, Belgium</strong>
              </div>
              <div className="local-meta-item">
                <span>🚆 Public Transit:</span>
                <strong>Direct train lines from Brussels-Luxembourg or Brussels-Schuman station</strong>
              </div>
              <div className="local-meta-item">
                <span>🎢 Nearby Landmark:</span>
                <strong>Walibi Belgium Amusement Park (adjacent to the stadium area)</strong>
              </div>
              <div className="local-meta-item">
                <span>🌦️ Expected Climate:</span>
                <strong>Average 15°C to 22°C. Cool drafts from surrounding fields during evening matches.</strong>
              </div>
              <div className="local-meta-item">
                <span>⚠️ Local Issue:</span>
                <strong>Limited car parking near the arena; shuttle buses run from Wavre train station.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Traveler Information */}
        <section className="my-16 bg-slate-900 border border-slate-800 p-8 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-4">🗺️ Essential Traveler & Matchday Information</h2>
          <div className="text-slate-300 text-sm space-y-4 leading-relaxed">
            <p>
              Co-hosting the World Cup across two countries requires traveling fans to plan ahead. If you are planning to attend matches in both <strong>Amstelveen (Zip code 1182 AM)</strong> and <strong>Wavre (Zip code 1300)</strong>, note that the distance between the two venues is approximately 230 km.
            </p>
            <p>
              <strong>Interstate Transit:</strong> The fastest way to travel between Amsterdam (NL) and Brussels (BE) is the Eurostar high-speed train, which takes around 1 hour and 50 minutes. From Brussels, you can take a regional train directly to Wavre.
            </p>
            <p>
              <strong>Local Accommodations:</strong> For matches in Amstelveen, staying in south Amsterdam or near the Zuidas business district provides the easiest tram access to Wagener Stadium. For matches in Wavre, local hotels fill up quickly due to the Walibi amusement park traffic; staying in Brussels and taking the daily train commute is highly recommended.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
