import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Official Broadcasters: How to Stream Hockey World Cup 2026 Live",
  description: "Country-wise list of official TV networks and live streaming applications broadcasting the FIH Hockey World Cup 2026 without cable.",
};

export default function BroadcastersPage() {
  return (
    <>
      <Header />

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
                  <td>
                    <img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>Pakistan</strong>
                  </td>
                  <td>Ten Sports / PTV Sports</td>
                  <td><span className="channel-tag">tapmad</span> (Exclusive HD)</td>
                  <td>Paid Subscription</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>India</strong>
                  </td>
                  <td>Sports18 Network</td>
                  <td><span className="channel-tag">JioCinema</span> App</td>
                  <td>Free (Ad-Supported)</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://flagcdn.com/w40/gb.png" width="20" height="14" alt="UK flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>United Kingdom</strong>
                  </td>
                  <td>TNT Sports</td>
                  <td><span className="channel-tag">Watch.Hockey</span> Portal</td>
                  <td>PPV Pass</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://flagcdn.com/w40/us.png" width="20" height="14" alt="USA flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>United States</strong>
                  </td>
                  <td>Fox Sports 2</td>
                  <td><span className="channel-tag">Fox Sports App</span> / Watch.Hockey</td>
                  <td>Cable Login / PPV</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>Netherlands</strong>
                  </td>
                  <td>NOS Sport</td>
                  <td><span className="channel-tag">NOS.nl</span> App</td>
                  <td>Free (NL Territory Only)</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>Belgium</strong>
                  </td>
                  <td>RTBF / VRT</td>
                  <td><span className="channel-tag">Auvio</span> / VRT MAX</td>
                  <td>Free (BE Territory Only)</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>Australia</strong>
                  </td>
                  <td>Fox Sports Australia</td>
                  <td><span className="channel-tag">Kayo Sports</span> / Watch.Hockey</td>
                  <td>Premium Subscription</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cord Cutting FAQs & E-E-A-T Content */}
        <section className="my-16 bg-slate-900 border border-slate-800 p-8 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-4">📺 How to Watch the Hockey World Cup 2026 Without Cable</h2>
          <div className="text-slate-300 text-sm space-y-4">
            <p>
              For modern sports fans who have cut the cord, streaming the 2026 World Cup is straightforward. Depending on your home region, multiple digital distribution portals will offer live high-definition feeds of all 32 matches.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Watch.Hockey App:</strong> The International Hockey Federation's official platform streams matches live in regions without exclusive TV rights. You can purchase a Tournament Pass for complete access. It serves as a fail-safe backup option globally.</li>
              <li><strong>JioCinema (India):</strong> Viacom18 has confirmed that JioCinema will provide free, high-definition streams for all matches, particularly focusing on the Indian Men's national team fixtures in Pool A. No registration fee is required.</li>
              <li><strong>tapmad (Pakistan):</strong> Tapmad Digital holds the official web streaming licenses for Pakistan territory. You can stream matches live on desktop or mobile apps with low-cost premium packages.</li>
            </ul>
            <p className="mt-4">
              <strong>Note on Geo-Blocks:</strong> Due to strict territorial broadcasting rights, streaming apps verify your IP address. If you travel outside your home country during the tournament, you must configure a reliable VPN service to route your connection back to your home server to avoid blackouts.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
