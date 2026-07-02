import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Belfius & Wagener Stadium Travel Guide - World Cup 2026",
  description: "Complete visitor guide for the 2026 FIH Hockey World Cup stadiums. Includes transit maps, local Zip codes, Amsterdamse Bos details, and Wavre attractions.",
};

export default function VenuesPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Official Tournament Stadiums</p>
          <h1 className="hero-title">Stadium & Geographic Guides</h1>
          <p className="hero-description">
            The 2026 Hockey World Cup is co-hosted across two historic venues in Amstelveen, Netherlands and Wavre, Belgium. Find transit routes, weather advisories, and local landmarks below.
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
        <section className="insights-section-wrap">
          <h2 className="insights-section-title">
            <span>🗺️</span> Essential Traveler & Matchday Information
          </h2>
          <div className="insights-grid">
            <div className="insight-col-card">
              <span className="insight-col-tag">Distance</span>
              <span className="insight-col-header">Crossing Borders</span>
              <p className="insight-col-text">
                Co-hosting across two nations requires planning. If you attend matches in both <strong>Amstelveen (Zip 1182 AM)</strong> and <strong>Wavre (Zip 1300)</strong>, note the distance is approximately 230 km.
              </p>
            </div>
            
            <div className="insight-col-card accent-card">
              <span className="insight-col-tag">Transit</span>
              <span className="insight-col-header">Interstate Travel</span>
              <p className="insight-col-text">
                The fastest way between Amsterdam (NL) and Brussels (BE) is the Eurostar high-speed train (1 hr 50 mins). From Brussels, take a direct regional train line to Wavre.
              </p>
            </div>

            <div className="insight-col-card">
              <span className="insight-col-tag">Lodging</span>
              <span className="insight-col-header">Where to Stay</span>
              <p className="insight-col-text">
                For Amstelveen, stay in south Amsterdam for tram access. For Wavre, hotels fill up quickly due to Walibi theme park; staying in Brussels and commuting is recommended.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
