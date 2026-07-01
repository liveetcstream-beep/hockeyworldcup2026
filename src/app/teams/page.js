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
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px" }} /> Netherlands
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px" }} /> Germany
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px" }} /> India
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/es.png" width="20" height="14" alt="Spain flag" style={{ borderRadius: "2px" }} /> Spain
                </li>
              </ul>
            </div>
            {/* Pool B */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool B</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px" }} /> Belgium
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-eng.png" width="20" height="14" alt="England flag" style={{ borderRadius: "2px" }} /> England
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px" }} /> Australia
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/nz.png" width="20" height="14" alt="New Zealand flag" style={{ borderRadius: "2px" }} /> New Zealand
                </li>
              </ul>
            </div>
            {/* Pool C */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool C</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/ar.png" width="20" height="14" alt="Argentina flag" style={{ borderRadius: "2px" }} /> Argentina
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/fr.png" width="20" height="14" alt="France flag" style={{ borderRadius: "2px" }} /> France
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/za.png" width="20" height="14" alt="South Africa flag" style={{ borderRadius: "2px" }} /> South Africa
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/my.png" width="20" height="14" alt="Malaysia flag" style={{ borderRadius: "2px" }} /> Malaysia
                </li>
              </ul>
            </div>
            {/* Pool D */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool D</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/cl.png" width="20" height="14" alt="Chile flag" style={{ borderRadius: "2px" }} /> Chile
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-wls.png" width="20" height="14" alt="Wales flag" style={{ borderRadius: "2px" }} /> Wales
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/jp.png" width="20" height="14" alt="Japan flag" style={{ borderRadius: "2px" }} /> Japan
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/ie.png" width="20" height="14" alt="Ireland flag" style={{ borderRadius: "2px" }} /> Ireland
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
                The drag-flicking defender remains India's primary scoring threat during penalty corners. His precise scoops and tactical organization in defense are crucial for the Men in Blue's success in Pool A.
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
                The MVP of the last World Cup, Wellen possesses incredible dribbling speed and ball control. His fast transitions make Germany the most feared counter-attacking squad in the tournament.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Tactical Predictions */}
        <section className="my-16 bg-slate-900 border border-slate-800 p-8 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-4">🏆 Tournament Analyst Outlook</h2>
          <div className="text-slate-300 text-sm space-y-4 leading-relaxed">
            <p>
              The co-hosts, <strong>Belgium</strong> (World No. 2) and the <strong>Netherlands</strong> (World No. 1), enter the 2026 tournament as heavy favorites. Belgium’s Golden Generation, led by Arthur Van Doren, will enjoy massive local backing at the Belfius Arena in Wavre. 
            </p>
            <p>
              Meanwhile, <strong>Germany</strong> (reigning champions) and a resurgent <strong>India</strong> (Pool A contenders) will provide fierce competition. The matches between Netherlands and Germany in the group stage are expected to record the highest TV viewership. Underdogs like Wales and Chile will look to exploit physical counter-attack opportunities on the high-speed water-based turfs.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
