import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "How to Stream Hockey World Cup 2026: Live TV Channels",
  description: "Country-wise list of official TV networks and live streaming applications broadcasting the FIH Hockey World Cup 2026 without cable.",
};

export default function BroadcastersPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Official Television & Streaming Portal</p>
          <h1 className="hero-title">FIH Hockey World Cup 2026 Broadcasters</h1>
          <p className="hero-description">
            Comprehensive directory of all TV networks, digital channels, and legal streaming links broadcasting the 2026 Men's and Women's World Cup from Belgium and the Netherlands.
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
                  <td data-label="Country">
                    <img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>Pakistan</strong>
                  </td>
                  <td data-label="Partner">Ten Sports / PTV Sports</td>
                  <td data-label="App / Portal"><span className="channel-tag">tapmad</span> (Exclusive HD)</td>
                  <td data-label="Access">Paid Subscription</td>
                </tr>
                <tr>
                  <td data-label="Country">
                    <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>India</strong>
                  </td>
                  <td data-label="Partner">Sports18 Network</td>
                  <td data-label="App / Portal"><span className="channel-tag">JioCinema</span> App</td>
                  <td data-label="Access">Free (Ad-Supported)</td>
                </tr>
                <tr>
                  <td data-label="Country">
                    <img src="https://flagcdn.com/w40/gb.png" width="20" height="14" alt="UK flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>United Kingdom</strong>
                  </td>
                  <td data-label="Partner">TNT Sports</td>
                  <td data-label="App / Portal"><span className="channel-tag">Watch.Hockey</span> Portal</td>
                  <td data-label="Access">PPV Pass</td>
                </tr>
                <tr>
                  <td data-label="Country">
                    <img src="https://flagcdn.com/w40/us.png" width="20" height="14" alt="USA flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>United States</strong>
                  </td>
                  <td data-label="Partner">Fox Sports 2</td>
                  <td data-label="App / Portal"><span className="channel-tag">Fox Sports App</span> / Watch.Hockey</td>
                  <td data-label="Access">Cable Login / PPV</td>
                </tr>
                <tr>
                  <td data-label="Country">
                    <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>Netherlands</strong>
                  </td>
                  <td data-label="Partner">NOS Sport</td>
                  <td data-label="App / Portal"><span className="channel-tag">NOS.nl</span> App</td>
                  <td data-label="Access">Free (NL Territory Only)</td>
                </tr>
                <tr>
                  <td data-label="Country">
                    <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>Belgium</strong>
                  </td>
                  <td data-label="Partner">RTBF / VRT</td>
                  <td data-label="App / Portal"><span className="channel-tag">Auvio</span> / VRT MAX</td>
                  <td data-label="Access">Free (BE Territory Only)</td>
                </tr>
                <tr>
                  <td data-label="Country">
                    <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>Australia</strong>
                  </td>
                  <td data-label="Partner">Fox Sports Australia</td>
                  <td data-label="App / Portal"><span className="channel-tag">Kayo Sports</span> / Watch.Hockey</td>
                  <td data-label="Access">Premium Subscription</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cord Cutting FAQs & E-E-A-T Content */}
        <section className="insights-section-wrap" id="vpn">
          <h2 className="insights-section-title">
            <span>📺</span> How to Watch the Hockey World Cup 2026 Without Cable
          </h2>
          <div className="insights-grid">
            <div className="insight-col-card">
              <span className="insight-col-tag">Official Hub</span>
              <span className="insight-col-header">Watch.Hockey App</span>
              <p className="insight-col-text">
                The International Hockey Federation's official platform streams matches live in regions without exclusive TV rights. You can purchase a Tournament Pass for complete access. It serves as a fail-safe backup option globally.
              </p>
            </div>
            
            <div className="insight-col-card accent-card">
              <span className="insight-col-tag">Regional</span>
              <span className="insight-col-header">JioCinema & Tapmad</span>
              <p className="insight-col-text">
                Viacom18 provides free, high-definition streams for all matches on JioCinema in India. Tapmad Digital holds the official web streaming licenses for Pakistan, offering low-cost premium packages.
              </p>
            </div>

            <div className="insight-col-card">
              <span className="insight-col-tag">VPN Bypass</span>
              <span className="insight-col-header">Avoiding Geo-Blocks</span>
              <p className="insight-col-text">
                Streaming apps verify your IP address. If you travel outside your home country during the matches, configure a reliable VPN service (connecting back to India/Pakistan) to avoid blackout prompts.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
