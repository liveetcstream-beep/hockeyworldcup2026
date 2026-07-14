import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Wagener & Belfius Stadium Visitor Guide 2026",
  description: "Visitor guide for the 2026 FIH Hockey World Cup stadiums. Includes transit maps, local landmark guides, and Amstelveen/Wavre travel tips.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/venues",
  },
  openGraph: {
    title: "Wagener & Belfius Stadium Visitor Guide 2026",
    description: "Visitor guide for the 2026 FIH Hockey World Cup stadiums. Includes transit maps, local landmark guides, and Amstelveen/Wavre travel tips.",
    url: "https://hockeyworldcup2026schedule.com/venues",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wagener & Belfius Stadium Visitor Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wagener & Belfius Stadium Visitor Guide 2026",
    description: "Visitor guide for the 2026 FIH Hockey World Cup stadiums. Includes transit maps, local landmark guides, and Amstelveen/Wavre travel tips.",
    images: ["/og-image.jpg"],
  },
};


export default function VenuesPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Official Tournament Stadiums & Travel Guides</p>
          <h1 className="hero-title">Wagener & Belfius Stadium Visitor Guides 2026</h1>
          <p className="hero-description">
            The 2026 Hockey World Cup is co-hosted across two world-class stadiums in Amstelveen, Netherlands and Wavre, Belgium. Find transit routes, weather advisories, local landmarks, and access our dedicated stadium visitor guides.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Verified: <strong>Marc Devos (Belgian Hockey Analyst)</strong>
            </div>
            <div className="eeat-badge">
              ⚡ Status: <strong>Both Venues Verified</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Venues Hub</span>
        </nav>

        <section className="local-grid my-12" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {/* Amstelveen Stadium Guide Card */}
          <div className="local-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div className="local-icon" style={{ marginBottom: "1rem" }}>
                <img src="https://flagcdn.com/w40/nl.png" width="30" height="20" alt="Netherlands flag" style={{ borderRadius: "2px" }} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Wagener Stadium, Amstelveen</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Located in the scenic North Holland province, the Wagener Stadium is the spiritual home of Dutch hockey. It is nestled right on the edge of the <strong>Amsterdamse Bos</strong> (Amsterdam Forest), offering beautiful greenery, hiking paths, and lake systems for visiting fans.
              </p>
              <div className="local-meta" style={{ marginBottom: "2rem" }}>
                <div className="local-meta-item">
                  <span>📍 Address:</span>
                  <strong>Nieuwe Kalfjeslaan 21, 1182 AM Amstelveen, Netherlands</strong>
                </div>
                <div className="local-meta-item">
                  <span>🏟️ Capacity:</span>
                  <strong>9,000 Spectators</strong>
                </div>
              </div>
            </div>
            <div>
              <a href="/venues/wagener-stadium-guide" className="cta-button primary-cta" style={{ display: "block", textClassName: "none", textAlign: "center", textDecoration: "none" }}>
                🏟️ Read Full Wagener Stadium Guide →
              </a>
            </div>
          </div>

          {/* Belgium Stadium Guide Card */}
          <div className="local-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div className="local-icon" style={{ marginBottom: "1rem" }}>
                <img src="https://flagcdn.com/w40/be.png" width="30" height="20" alt="Belgium flag" style={{ borderRadius: "2px" }} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Belfius Hockey Arena, Wavre</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Wavre is situated in the Walloon Brabant region of Belgium. The Belfius Arena is a brand-new, top-tier facility built specifically to host the Belgian pool matches and the Men's Hockey World Cup grand finale.
              </p>
              <div className="local-meta" style={{ marginBottom: "2rem" }}>
                <div className="local-meta-item">
                  <span>📍 Address:</span>
                  <strong>Avenue de la Toison d'Or, 1300 Wavre, Belgium</strong>
                </div>
                <div className="local-meta-item">
                  <span>🏟️ Capacity:</span>
                  <strong>10,000 Spectators</strong>
                </div>
              </div>
            </div>
            <div>
              <a href="/venues/belfius-arena-guide" className="cta-button primary-cta" style={{ display: "block", textClassName: "none", textAlign: "center", textDecoration: "none" }}>
                🏟️ Read Full Belfius Arena Guide →
              </a>
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
