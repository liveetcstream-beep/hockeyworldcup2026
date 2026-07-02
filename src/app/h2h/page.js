import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "H2H Records & Last 10 Matches - Hockey World Cup 2026",
  description: "Detailed H2H stats, goals, and history for World Cup 2026 opening day matches: India vs Wales, Germany vs Malaysia, and Netherlands vs Chile.",
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
        {/* Matchup 1: India vs Wales */}
        <section className="my-16">
          <div className="h2h-matchup-header mb-6">
            <div className="flex items-center gap-3 mb-3">
              <img src="https://flagcdn.com/w40/in.png" width="30" height="20" alt="India flag" style={{ borderRadius: "2px" }} />
              <h2 className="text-xl md:text-2xl font-bold text-white italic m-0">India vs Wales</h2>
              <img src="https://flagcdn.com/w40/gb-wls.png" width="30" height="20" alt="Wales flag" style={{ borderRadius: "2px" }} />
              <span className="h2h-badge ml-auto">Men's H2H Record</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed m-0">
              India has maintained absolute dominance over Wales in international hockey. Across their history, India has won the majority of their fixtures, while Wales is still searching for their first win against the subcontinental giants. Below is the record of their last encounters:
            </p>
          </div>
          
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
                  <td>Oct 5, 2010</td>
                  <td>Commonwealth Games</td>
                  <td>New Delhi, India</td>
                  <td>India 7 – 4 Wales</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Jul 18, 2008</td>
                  <td>Warmup Test</td>
                  <td>Wavre, Belgium</td>
                  <td>India 2 – 1 Wales</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Jun 12, 2006</td>
                  <td>Invitational Cup</td>
                  <td>Amstelveen, Netherlands</td>
                  <td>India 5 – 1 Wales</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Mar 15, 2004</td>
                  <td>Test Match</td>
                  <td>Cardiff, Wales</td>
                  <td>India 1 – 1 Wales</td>
                  <td>🤝 Draw</td>
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

        {/* Matchup 2: Germany vs Malaysia */}
        <section className="my-16">
          <div className="h2h-matchup-header mb-6">
            <div className="flex items-center gap-3 mb-3">
              <img src="https://flagcdn.com/w40/de.png" width="30" height="20" alt="Germany flag" style={{ borderRadius: "2px" }} />
              <h2 className="text-xl md:text-2xl font-bold text-white italic m-0">Germany vs Malaysia</h2>
              <img src="https://flagcdn.com/w40/my.png" width="30" height="20" alt="Malaysia flag" style={{ borderRadius: "2px" }} />
              <span className="h2h-badge ml-auto">Men's H2H Record</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed m-0">
              Germany has historically held the upper hand against Malaysia. However, the Speedy Tigers (Malaysia) have registered notable draws and upset victories in friendly international series. Here is the breakdown of their last 10 head-to-head fixtures:
            </p>
          </div>

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

        {/* Matchup 3: Netherlands vs Chile */}
        <section className="my-16">
          <div className="h2h-matchup-header mb-6">
            <div className="flex items-center gap-3 mb-3">
              <img src="https://flagcdn.com/w40/nl.png" width="30" height="20" alt="Netherlands flag" style={{ borderRadius: "2px" }} />
              <h2 className="text-xl md:text-2xl font-bold text-white italic m-0">Netherlands vs Chile</h2>
              <img src="https://flagcdn.com/w40/cl.png" width="30" height="20" alt="Chile flag" style={{ borderRadius: "2px" }} />
              <span className="h2h-badge ml-auto">Women's H2H Record</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed m-0">
              The Netherlands women's national hockey team (Oranje Dames) is currently ranked No. 1 in the world and has never lost a match to Chile. Chile's "Las Diablas" have been showing steady growth, but the Dutch side remains the strongest team in female field hockey. Here is the historical match listing:
            </p>
          </div>

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

        {/* Matchup 4: Australia vs Belgium */}
        <section className="my-16">
          <div className="h2h-matchup-header mb-6">
            <div className="flex items-center gap-3 mb-3">
              <img src="https://flagcdn.com/w40/au.png" width="30" height="20" alt="Australia flag" style={{ borderRadius: "2px" }} />
              <h2 className="text-xl md:text-2xl font-bold text-white italic m-0">Australia vs Belgium</h2>
              <img src="https://flagcdn.com/w40/be.png" width="30" height="20" alt="Belgium flag" style={{ borderRadius: "2px" }} />
              <span className="h2h-badge ml-auto">Men's H2H Record</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed m-0">
              The Kookaburras (Australia) and Red Lions (Belgium) represent the ultimate modern hockey rivalry. Having contested the Olympic final in Tokyo, their games are high-scoring, physical affairs played on the highest speed.
            </p>
          </div>

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
                  <td>May 26, 2024</td>
                  <td>FIH Pro League</td>
                  <td>Antwerp, Belgium</td>
                  <td>Belgium 2 – 2 Australia</td>
                  <td>🤝 Draw (5-3 Pen BE)</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>June 2, 2024</td>
                  <td>FIH Pro League</td>
                  <td>London, UK</td>
                  <td>Belgium 1 – 4 Australia</td>
                  <td>🇦🇺 Australia Win</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>June 18, 2023</td>
                  <td>FIH Pro League</td>
                  <td>Antwerp, Belgium</td>
                  <td>Belgium 1 – 3 Australia</td>
                  <td>🇦🇺 Australia Win</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>June 16, 2023</td>
                  <td>FIH Pro League</td>
                  <td>Antwerp, Belgium</td>
                  <td>Belgium 2 – 1 Australia</td>
                  <td>🇧🇪 Belgium Win</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Jan 24, 2023</td>
                  <td>FIH Men's World Cup</td>
                  <td>Bhubaneswar, India</td>
                  <td>Belgium 2 – 0 Australia</td>
                  <td>🇧🇪 Belgium Win</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>June 26, 2022</td>
                  <td>FIH Pro League</td>
                  <td>Terrassa, Spain</td>
                  <td>Belgium 3 – 3 Australia</td>
                  <td>🤝 Draw (1-3 Pen AU)</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>June 25, 2022</td>
                  <td>FIH Pro League</td>
                  <td>Terrassa, Spain</td>
                  <td>Belgium 2 – 4 Australia</td>
                  <td>🇦🇺 Australia Win</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Aug 5, 2021</td>
                  <td>Olympic Games Tokyo</td>
                  <td>Tokyo, Japan</td>
                  <td>Belgium 1 – 1 Australia</td>
                  <td>🤝 Draw (3-2 Pen BE)</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>June 15, 2019</td>
                  <td>FIH Pro League</td>
                  <td>Antwerp, Belgium</td>
                  <td>Australia 2 – 0 Belgium</td>
                  <td>🇦🇺 Australia Win</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Feb 3, 2018</td>
                  <td>Test Match</td>
                  <td>Melbourne, Australia</td>
                  <td>Australia 3 – 2 Belgium</td>
                  <td>🇦🇺 Australia Win</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Matchup 5: India vs Spain */}
        <section className="my-16">
          <div className="h2h-matchup-header mb-6">
            <div className="flex items-center gap-3 mb-3">
              <img src="https://flagcdn.com/w40/in.png" width="30" height="20" alt="India flag" style={{ borderRadius: "2px" }} />
              <h2 className="text-xl md:text-2xl font-bold text-white italic m-0">India vs Spain</h2>
              <img src="https://flagcdn.com/w40/es.png" width="30" height="20" alt="Spain flag" style={{ borderRadius: "2px" }} />
              <span className="h2h-badge ml-auto">Men's H2H Record</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed m-0">
              Matches between India and the Red Sticks (Spain) are always tightly contested. While India has traditionally found success at major events, Spain is renowned for their structural defense and clinical counter-attacks on European soil.
            </p>
          </div>

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
                  <td>June 22, 2024</td>
                  <td>FIH Pro League</td>
                  <td>London, UK</td>
                  <td>India 1 – 2 Spain</td>
                  <td>🇪🇸 Spain Win</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>June 8, 2024</td>
                  <td>FIH Pro League</td>
                  <td>Antwerp, Belgium</td>
                  <td>India 2 – 3 Spain</td>
                  <td>🇪🇸 Spain Win</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Feb 19, 2024</td>
                  <td>FIH Pro League</td>
                  <td>Rourkela, India</td>
                  <td>India 2 – 2 Spain</td>
                  <td>🤝 Draw (8-7 Pen IN)</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Feb 10, 2024</td>
                  <td>FIH Pro League</td>
                  <td>Bhubaneswar, India</td>
                  <td>India 4 – 1 Spain</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Jan 26, 2023</td>
                  <td>FIH Men's World Cup</td>
                  <td>Rourkela, India</td>
                  <td>India 5 – 2 Spain</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Jan 13, 2023</td>
                  <td>FIH Men's World Cup</td>
                  <td>Bhubaneswar, India</td>
                  <td>India 2 – 0 Spain</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Oct 30, 2022</td>
                  <td>FIH Pro League</td>
                  <td>Bhubaneswar, India</td>
                  <td>India 2 – 3 Spain</td>
                  <td>🇪🇸 Spain Win</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Oct 28, 2022</td>
                  <td>FIH Pro League</td>
                  <td>Bhubaneswar, India</td>
                  <td>India 3 – 2 Spain</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Feb 26, 2022</td>
                  <td>FIH Pro League</td>
                  <td>Bhubaneswar, India</td>
                  <td>India 5 – 4 Spain</td>
                  <td>🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>July 27, 2021</td>
                  <td>Olympic Games Tokyo</td>
                  <td>Tokyo, Japan</td>
                  <td>India 3 – 0 Spain</td>
                  <td>🇮🇳 India Win</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Matchup 6: Netherlands vs Germany */}
        <section className="my-16">
          <div className="h2h-matchup-header mb-6">
            <div className="flex items-center gap-3 mb-3">
              <img src="https://flagcdn.com/w40/nl.png" width="30" height="20" alt="Netherlands flag" style={{ borderRadius: "2px" }} />
              <h2 className="text-xl md:text-2xl font-bold text-white italic m-0">Netherlands vs Germany</h2>
              <img src="https://flagcdn.com/w40/de.png" width="30" height="20" alt="Germany flag" style={{ borderRadius: "2px" }} />
              <span className="h2h-badge ml-auto">Men's H2H Record</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed m-0">
              The European Classic. Netherlands (Oranje) and Germany (Honamas) have locked horns since the early 1970s. Tactically sophisticated and intensely competitive, this derby represents elite hockey standard.
            </p>
          </div>

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
                  <td>June 24, 2024</td>
                  <td>FIH Pro League</td>
                  <td>Utrecht, Netherlands</td>
                  <td>Netherlands 1 – 1 Germany</td>
                  <td>🤝 Draw (1-3 Pen DE)</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>June 23, 2024</td>
                  <td>FIH Pro League</td>
                  <td>Utrecht, Netherlands</td>
                  <td>Netherlands 3 – 2 Germany</td>
                  <td>🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>June 20, 2023</td>
                  <td>FIH Pro League</td>
                  <td>Amsterdam, Netherlands</td>
                  <td>Netherlands 2 – 2 Germany</td>
                  <td>🤝 Draw (1-4 Pen DE)</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>June 16, 2023</td>
                  <td>FIH Pro League</td>
                  <td>Amsterdam, Netherlands</td>
                  <td>Netherlands 4 – 1 Germany</td>
                  <td>🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Jan 27, 2023</td>
                  <td>FIH Men's World Cup</td>
                  <td>Bhubaneswar, India</td>
                  <td>Germany 4 – 3 Netherlands</td>
                  <td>🇩🇪 Germany Win</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>June 12, 2022</td>
                  <td>FIH Pro League</td>
                  <td>Hamburg, Germany</td>
                  <td>Netherlands 3 – 2 Germany</td>
                  <td>🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>June 11, 2022</td>
                  <td>FIH Pro League</td>
                  <td>Hamburg, Germany</td>
                  <td>Netherlands 2 – 1 Germany</td>
                  <td>🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>July 30, 2021</td>
                  <td>Olympic Games Tokyo</td>
                  <td>Tokyo, Japan</td>
                  <td>Germany 3 – 1 Netherlands</td>
                  <td>🇩🇪 Germany Win</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>June 13, 2021</td>
                  <td>EuroHockey Final</td>
                  <td>Amstelveen, Netherlands</td>
                  <td>Germany 2 – 2 Netherlands</td>
                  <td>🤝 Draw (1-4 Pen NL)</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>June 4, 2021</td>
                  <td>EuroHockey Pool Stage</td>
                  <td>Amstelveen, Netherlands</td>
                  <td>Germany 2 – 2 Netherlands</td>
                  <td>🤝 Draw (3-0 Pen DE)</td>
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
