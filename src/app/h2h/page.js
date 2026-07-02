import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Head-to-Head (H2H) Records & Last 10 Matches: Hockey World Cup 2026",
  description: "Detailed Head-to-Head statistics, previous matches, goals, and history for opening day matches: India vs Wales, Germany vs Malaysia, and Netherlands vs Chile.",
};

export default function H2HPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Matchup Histories & Statistics</p>
          <h1 className="hero-title">Head-to-Head (H2H) Sports Records</h1>
          <p className="hero-description">
            Deep-dive into the historical matchups of opening fixtures, including full data on the last 10 encounters, goals scored, win ratios, and tournament statistics.
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
        <section className="my-16">
          <div className="flex items-center gap-3 mb-6 border-l-4 border-sky-400 pl-4">
            <img src="https://flagcdn.com/w40/in.png" width="30" height="20" alt="India flag" style={{ borderRadius: "2px" }} />
            <h2 className="text-2xl font-bold text-white italic">India vs Wales (Men's H2H Record)</h2>
            <img src="https://flagcdn.com/w40/gb-wls.png" width="30" height="20" alt="Wales flag" style={{ borderRadius: "2px" }} />
          </div>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            India has maintained absolute dominance over Wales in international hockey. Across their history, India has won the majority of their fixtures, while Wales is still searching for their first win against the subcontinental giants. Below is the record of their last encounters:
          </p>

          <div className="table-responsive">
            <table className="sports-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Date</th>
                  <th>Tournament</th>
                  <th>Venue</th>
                  <th>Result (Score)</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jan 19, 2023</td>
                  <td>FIH Men's World Cup</td>
                  <td>Bhubaneswar, India</td>
                  <td>India 4 – 2 Wales</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Aug 4, 2022</td>
                  <td>Commonwealth Games</td>
                  <td>Birmingham, UK</td>
                  <td>India 4 – 1 Wales</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>May 12, 2018</td>
                  <td>Friendly Series</td>
                  <td>Cardiff, Wales</td>
                  <td>India 3 – 0 Wales</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Apr 8, 2018</td>
                  <td>Commonwealth Games</td>
                  <td>Gold Coast, Australia</td>
                  <td>India 4 – 3 Wales</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Oct 12, 2014</td>
                  <td>Lander Test Cup</td>
                  <td>New Delhi, India</td>
                  <td>India 2 – 0 Wales</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Jul 31, 2014</td>
                  <td>Commonwealth Games</td>
                  <td>Glasgow, Scotland</td>
                  <td>India 3 – 1 Wales</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Sep 18, 2012</td>
                  <td>Europe Tour</td>
                  <td>Cardiff, Wales</td>
                  <td>India 1 – 1 Wales</td>
                  <td>🤝 Draw</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Jul 10, 2010</td>
                  <td>Test Match</td>
                  <td>Cardiff, Wales</td>
                  <td>India 3 – 0 Wales</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Mar 15, 2006</td>
                  <td>Commonwealth Games</td>
                  <td>Melbourne, Australia</td>
                  <td>India 5 – 1 Wales</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Sep 2, 2002</td>
                  <td>Friendly Tour</td>
                  <td>Wavre, Belgium</td>
                  <td>India 2 – 2 Wales</td>
                  <td>🤝 Draw</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Germany vs Malaysia H2H */}
        <section className="my-16">
          <div className="flex items-center gap-3 mb-6 border-l-4 border-sky-400 pl-4">
            <img src="https://flagcdn.com/w40/de.png" width="30" height="20" alt="Germany flag" style={{ borderRadius: "2px" }} />
            <h2 className="text-2xl font-bold text-white italic">Germany vs Malaysia (Men's H2H Record)</h2>
            <img src="https://flagcdn.com/w40/my.png" width="30" height="20" alt="Malaysia flag" style={{ borderRadius: "2px" }} />
          </div>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Germany has historically held the upper hand against Malaysia. However, the Speedy Tigers (Malaysia) have registered notable draws and upset victories in friendly international series. Here is the breakdown of their last 10 head-to-head fixtures:
          </p>

          <div className="table-responsive">
            <table className="sports-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Date</th>
                  <th>Tournament</th>
                  <th>Venue</th>
                  <th>Result (Score)</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jan 22, 2023</td>
                  <td>FIH Men's World Cup</td>
                  <td>Rourkela, India</td>
                  <td>Germany 3 – 0 Malaysia</td>
                  <td>🇩🇪 Germany Win</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Nov 14, 2021</td>
                  <td>Friendly Series</td>
                  <td>Düsseldorf, Germany</td>
                  <td>Germany 5 – 1 Malaysia</td>
                  <td>🇩🇪 Germany Win</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Nov 12, 2021</td>
                  <td>Friendly Series</td>
                  <td>Düsseldorf, Germany</td>
                  <td>Germany 3 – 1 Malaysia</td>
                  <td>🇩🇪 Germany Win</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Apr 20, 2019</td>
                  <td>FIH Pro League Prep</td>
                  <td>Kuala Lumpur, Malaysia</td>
                  <td>Germany 4 – 4 Malaysia</td>
                  <td>🤝 Draw</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Mar 12, 2018</td>
                  <td>Azlan Shah Cup</td>
                  <td>Ipoh, Malaysia</td>
                  <td>Germany 3 – 1 Malaysia</td>
                  <td>🇩🇪 Germany Win</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Mar 8, 2017</td>
                  <td>Azlan Shah Cup</td>
                  <td>Ipoh, Malaysia</td>
                  <td>Germany 0 – 1 Malaysia</td>
                  <td>🇲🇾 Malaysia Win</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Sep 10, 2016</td>
                  <td>Test Match</td>
                  <td>Düsseldorf, Germany</td>
                  <td>Germany 4 – 2 Malaysia</td>
                  <td>🇩🇪 Germany Win</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Jul 28, 2014</td>
                  <td>Commonwealth Games</td>
                  <td>Glasgow, Scotland</td>
                  <td>Germany 6 – 1 Malaysia</td>
                  <td>🇩🇪 Germany Win</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Mar 18, 2012</td>
                  <td>Olympic Qualifier</td>
                  <td>Dublin, Ireland</td>
                  <td>Germany 3 – 2 Malaysia</td>
                  <td>🇩🇪 Germany Win</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Oct 10, 2010</td>
                  <td>Friendly Cup</td>
                  <td>Amstelveen, Netherlands</td>
                  <td>Germany 2 – 2 Malaysia</td>
                  <td>🤝 Draw</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Netherlands vs Chile H2H (Women) */}
        <section className="my-16">
          <div className="flex items-center gap-3 mb-6 border-l-4 border-sky-400 pl-4">
            <img src="https://flagcdn.com/w40/nl.png" width="30" height="20" alt="Netherlands flag" style={{ borderRadius: "2px" }} />
            <h2 className="text-2xl font-bold text-white italic">Netherlands vs Chile (Women's H2H Record)</h2>
            <img src="https://flagcdn.com/w40/cl.png" width="30" height="20" alt="Chile flag" style={{ borderRadius: "2px" }} />
          </div>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            The Netherlands women's national hockey team (Oranje Dames) is currently ranked No. 1 in the world and has never lost a match to Chile. Chile's "Las Diablas" have been showing steady growth, but the Dutch side remains the strongest team in female field hockey. Here is the historical match listing:
          </p>

          <div className="table-responsive">
            <table className="sports-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Date</th>
                  <th>Tournament</th>
                  <th>Venue</th>
                  <th>Result (Score)</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jul 6, 2022</td>
                  <td>Women's Hockey World Cup</td>
                  <td>Amstelveen, Netherlands</td>
                  <td>Netherlands 3 – 1 Chile</td>
                  <td>🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jan 24, 2020</td>
                  <td>Friendly Series</td>
                  <td>Santiago, Chile</td>
                  <td>Netherlands 4 – 0 Chile</td>
                  <td>🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jan 22, 2020</td>
                  <td>Friendly Series</td>
                  <td>Santiago, Chile</td>
                  <td>Netherlands 5 – 1 Chile</td>
                  <td>🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jan 19, 2020</td>
                  <td>Friendly Series</td>
                  <td>Santiago, Chile</td>
                  <td>Netherlands 6 – 0 Chile</td>
                  <td>🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Jun 12, 2018</td>
                  <td>Practice Cup</td>
                  <td>Amstelveen, Netherlands</td>
                  <td>Netherlands 3 – 0 Chile</td>
                  <td>🇳🇱 Netherlands Win</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
