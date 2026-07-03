import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Qualified Teams & Star Players - Hockey World Cup 2026",
  description: "Rosters and analysis for the 16 qualified teams in the FIH Hockey World Cup 2026. Profiles of Harmanpreet Singh, Thierry Brinkman, and Niklas Wellen.",
};

export default function TeamsPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Qualified Nations & Standings</p>
          <h1 className="hero-title">Teams & Star Players Profiles</h1>
          <p className="hero-description">
            Review the 16 national hockey squads qualified for the group stages and read analyst reports on the key tactical players who will decide the outcome of the tournament.
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
        {/* Men's Pools */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Men's Tournament Pools</h2>
          <div className="pools-container" style={{ marginBottom: "3rem" }}>
            {/* Pool A */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool A</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px" }} /> Netherlands
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/ar.png" width="20" height="14" alt="Argentina flag" style={{ borderRadius: "2px" }} /> Argentina
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/cl.png" width="20" height="14" alt="Chile flag" style={{ borderRadius: "2px" }} /> Chile
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/nz.png" width="20" height="14" alt="New Zealand flag" style={{ borderRadius: "2px" }} /> New Zealand
                </li>
              </ul>
            </div>
            {/* Pool B */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool B</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px" }} /> Germany
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/my.png" width="20" height="14" alt="Malaysia flag" style={{ borderRadius: "2px" }} /> Malaysia
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px" }} /> Belgium
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/fr.png" width="20" height="14" alt="France flag" style={{ borderRadius: "2px" }} /> France
                </li>
              </ul>
            </div>
            {/* Pool C */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool C</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px" }} /> Australia
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/ie.png" width="20" height="14" alt="Ireland flag" style={{ borderRadius: "2px" }} /> Ireland
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/es.png" width="20" height="14" alt="Spain flag" style={{ borderRadius: "2px" }} /> Spain
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/za.png" width="20" height="14" alt="South Africa flag" style={{ borderRadius: "2px" }} /> South Africa
                </li>
              </ul>
            </div>
            {/* Pool D */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool D</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px" }} /> India
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-wls.png" width="20" height="14" alt="Wales flag" style={{ borderRadius: "2px" }} /> Wales
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-eng.png" width="20" height="14" alt="England flag" style={{ borderRadius: "2px" }} /> England
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px" }} /> Pakistan
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Women's Pools */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-rose-400 pl-4 italic">Women's Tournament Pools</h2>
          <div className="pools-container">
            {/* Pool A */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool A</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px" }} /> Netherlands
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px" }} /> Australia
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/jp.png" width="20" height="14" alt="Japan flag" style={{ borderRadius: "2px" }} /> Japan
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/cl.png" width="20" height="14" alt="Chile flag" style={{ borderRadius: "2px" }} /> Chile
                </li>
              </ul>
            </div>
            {/* Pool B */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool B</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/ar.png" width="20" height="14" alt="Argentina flag" style={{ borderRadius: "2px" }} /> Argentina
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px" }} /> Germany
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-sct.png" width="20" height="14" alt="Scotland flag" style={{ borderRadius: "2px" }} /> Scotland
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/us.png" width="20" height="14" alt="USA flag" style={{ borderRadius: "2px" }} /> United States
                </li>
              </ul>
            </div>
            {/* Pool C */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool C</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px" }} /> Belgium
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/es.png" width="20" height="14" alt="Spain flag" style={{ borderRadius: "2px" }} /> Spain
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/nz.png" width="20" height="14" alt="New Zealand flag" style={{ borderRadius: "2px" }} /> New Zealand
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/fr.png" width="20" height="14" alt="France flag" style={{ borderRadius: "2px" }} /> France
                </li>
              </ul>
            </div>
            {/* Pool D */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool D</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/cn.png" width="20" height="14" alt="China flag" style={{ borderRadius: "2px" }} /> China
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px" }} /> India
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-eng.png" width="20" height="14" alt="England flag" style={{ borderRadius: "2px" }} /> England
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/za.png" width="20" height="14" alt="South Africa flag" style={{ borderRadius: "2px" }} /> South Africa
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Star Players Segment */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Star Players to Watch</h2>
          <div className="local-grid">
            <div className="local-card">
              <div className="local-icon">
                <img src="https://flagcdn.com/w40/in.png" width="30" height="20" alt="India flag" style={{ borderRadius: "2px" }} />
              </div>
              <h3 className="text-white mt-4 mb-2">Harmanpreet Singh (India)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The drag-flicking defender remains India's primary scoring threat during penalty corners. His precise scoops and tactical organization in defense are crucial for the Men in Blue's success.
              </p>
            </div>
            <div className="local-card">
              <div className="local-icon">
                <img src="https://flagcdn.com/w40/nl.png" width="30" height="20" alt="Netherlands flag" style={{ borderRadius: "2px" }} />
              </div>
              <h3 className="text-white mt-4 mb-2">Thierry Brinkman (Netherlands)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                As the Dutch captain, Brinkman is a versatile forward known for his outstanding field vision, playmaking capability, and clutch goals in knockout matchdays.
              </p>
            </div>
            <div className="local-card">
              <div className="local-icon">
                <img src="https://flagcdn.com/w40/de.png" width="30" height="20" alt="Germany flag" style={{ borderRadius: "2px" }} />
              </div>
              <h3 className="text-white mt-4 mb-2">Niklas Wellen (Germany)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The MVP of the last World Cup, Wellen possesses incredible dribbling speed and ball control. His fast transitions make Germany a feared counter-attacking squad.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Tactical Predictions */}
        <section className="my-16" style={{
          background: "linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(244, 63, 94, 0.03) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "3rem 2.5rem",
          borderRadius: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.8rem" }}>
            <span style={{ fontSize: "2rem" }}>🏆</span>
            <h2 className="text-2xl font-bold text-white m-0" style={{ fontStyle: "italic", letterSpacing: "0.02em" }}>Tournament Analyst Outlook</h2>
          </div>
          <div className="text-slate-300 space-y-6" style={{ fontSize: "1.05rem", lineHeight: "2.0", letterSpacing: "0.02em" }}>
            <p style={{ margin: "0 0 1.5rem 0" }}>
              The co-hosts, <strong className="text-white">Belgium</strong> (World No. 2) and the <strong className="text-white">Netherlands</strong> (World No. 1), enter the 2026 tournament as heavy favorites. Belgium’s Golden Generation, led by Arthur Van Doren, will enjoy massive local backing at the Belfius Arena in Wavre.
            </p>
            <p style={{ margin: "0" }}>
              Meanwhile, <strong className="text-white">Germany</strong> (reigning champions) and a resurgent <strong className="text-white">India</strong> (Pool A contenders) will provide fierce competition. The matches between Netherlands and Germany in the group stage are expected to record the highest TV viewership. Underdogs like Wales and Chile will look to exploit physical counter-attack opportunities on the high-speed water-based turfs.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
