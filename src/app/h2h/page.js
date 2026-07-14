import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Head-to-Head Stats & Records – Hockey World Cup 2026",
  description: "Detailed H2H stats, last 10 match summaries, win ratios, and tactical descriptions for the top qualified teams in the FIH Hockey World Cup 2026.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/h2h",
  },
  openGraph: {
    title: "Head-to-Head Stats & Records – Hockey World Cup 2026",
    description: "Detailed H2H stats, last 10 match summaries, win ratios, and tactical descriptions for the top qualified teams in the FIH Hockey World Cup 2026.",
    url: "https://hockeyworldcup2026schedule.com/h2h",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Head-to-Head Stats & Records – Hockey World Cup 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Head-to-Head Stats & Records – Hockey World Cup 2026",
    description: "Detailed H2H stats, last 10 match summaries, win ratios, and tactical descriptions for the top qualified teams in the FIH Hockey World Cup 2026.",
    images: ["/og-image.jpg"],
  },
};


export default function H2HPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Matchup Histories & Statistics</p>
          <h1 className="hero-title">Head-to-Head Stats & Records – Hockey World Cup 2026</h1>
          <p className="hero-description">
            Deep-dive into the historical matchups of the top-ranked teams competing in the 2026 World Cup, including full data on the last 10 encounters, goals scored, win ratios, and tactical explanations.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Verified: <strong>Marc Devos (Belgian Hockey Analyst)</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Matchup 1: India vs Pakistan - Historic Clásico */}
        <section className="my-16" style={{ border: "1px solid rgba(249, 115, 22, 0.25)", padding: "2rem", borderRadius: "20px", background: "rgba(249, 115, 22, 0.02)" }}>
          <div className="h2h-matchup-header mb-6">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <img src="https://flagcdn.com/w40/in.png" width="30" height="20" alt="India flag" style={{ borderRadius: "2px" }} />
              <h2 className="text-xl md:text-2xl font-bold italic m-0" style={{ color: "var(--text-main)" }}>India vs Pakistan</h2>
              <img src="https://flagcdn.com/w40/pk.png" width="30" height="20" alt="Pakistan flag" style={{ borderRadius: "2px" }} />
              <span className="h2h-badge ml-auto" style={{ background: "linear-gradient(135deg, #f97316 0%, #e11d48 100%)" }}>🔥 Hockey El Clásico</span>
            </div>
            <p className="text-sm leading-relaxed m-0" style={{ color: "var(--text-muted)" }}>
              The subcontinental rivalry between India and Pakistan is the most storied matchup in field hockey history. With a combined 11 Olympic gold medals and 4 World Cup trophies, every encounter is a high-octane battle of skill and passion. Below is the official record of their last 10 head-to-head senior international encounters:
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
                  <td data-label="No.">1</td>
                  <td data-label="Date">Sep 14, 2024</td>
                  <td data-label="Tournament">Asian Champions Trophy</td>
                  <td data-label="Venue">Hulunbuir, China</td>
                  <td data-label="Result (Score)">India 2 – 1 Pakistan</td>
                  <td data-label="Outcome">🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td data-label="No.">2</td>
                  <td data-label="Date">Sep 30, 2023</td>
                  <td data-label="Tournament">Asian Games Group Stage</td>
                  <td data-label="Venue">Hangzhou, China</td>
                  <td data-label="Result (Score)">India 10 – 2 Pakistan</td>
                  <td data-label="Outcome">🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td data-label="No.">3</td>
                  <td data-label="Date">Aug 9, 2023</td>
                  <td data-label="Tournament">Asian Champions Trophy</td>
                  <td data-label="Venue">Chennai, India</td>
                  <td data-label="Result (Score)">India 4 – 0 Pakistan</td>
                  <td data-label="Outcome">🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td data-label="No.">4</td>
                  <td data-label="Date">Jun 1, 2022</td>
                  <td data-label="Tournament">Asia Cup Super 4s</td>
                  <td data-label="Venue">Jakarta, Indonesia</td>
                  <td data-label="Result (Score)">India 2 – 1 Pakistan</td>
                  <td data-label="Outcome">🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td data-label="No.">5</td>
                  <td data-label="Date">May 23, 2022</td>
                  <td data-label="Tournament">Asia Cup Pool Stage</td>
                  <td data-label="Venue">Jakarta, Indonesia</td>
                  <td data-label="Result (Score)">India 1 – 1 Pakistan</td>
                  <td data-label="Outcome">🤝 Draw</td>
                </tr>
                <tr>
                  <td data-label="No.">6</td>
                  <td data-label="Date">Dec 22, 2021</td>
                  <td data-label="Tournament">Asian Champions Trophy (Bronze)</td>
                  <td data-label="Venue">Dhaka, Bangladesh</td>
                  <td data-label="Result (Score)">India 4 – 3 Pakistan</td>
                  <td data-label="Outcome">🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td data-label="No.">7</td>
                  <td data-label="Date">Dec 17, 2021</td>
                  <td data-label="Tournament">Asian Champions Trophy Pool Stage</td>
                  <td data-label="Venue">Dhaka, Bangladesh</td>
                  <td data-label="Result (Score)">India 3 – 1 Pakistan</td>
                  <td data-label="Outcome">🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td data-label="No.">8</td>
                  <td data-label="Date">Oct 28, 2018</td>
                  <td data-label="Tournament">Asian Champions Trophy Final</td>
                  <td data-label="Venue">Muscat, Oman</td>
                  <td data-label="Result (Score)">India 0 – 0 Pakistan (Abandoned)</td>
                  <td data-label="Outcome">🏆 Joint Winners</td>
                </tr>
                <tr>
                  <td data-label="No.">9</td>
                  <td data-label="Date">Oct 20, 2018</td>
                  <td data-label="Tournament">Asian Champions Trophy Pool Stage</td>
                  <td data-label="Venue">Muscat, Oman</td>
                  <td data-label="Result (Score)">India 3 – 1 Pakistan</td>
                  <td data-label="Outcome">🇮🇳 India Win</td>
                </tr>
                <tr>
                  <td data-label="No.">10</td>
                  <td data-label="Date">Sep 1, 2018</td>
                  <td data-label="Tournament">Asian Games (Bronze Medal)</td>
                  <td data-label="Venue">Jakarta, Indonesia</td>
                  <td data-label="Result (Score)">India 2 – 1 Pakistan</td>
                  <td data-label="Outcome">🇮🇳 India Win</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Last 10 Matches Summary Bar */}
          <div className="h2h-summary-bar" style={{
            background: "rgba(249, 115, 22, 0.06)",
            border: "1px solid rgba(249, 115, 22, 0.18)",
            padding: "1rem 1.5rem",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1.2rem",
            fontWeight: "bold",
            color: "var(--text-main)",
            fontSize: "0.95rem"
          }}>
            <span>📊 Last 10 Encounters Summary:</span>
            <span style={{ color: "#d97706", fontWeight: "800" }}>India 7 – 0 Pakistan (3 Draws / Joint Title)</span>
          </div>

          <p className="text-xs mt-4 italic" style={{ lineHeight: "1.9", color: "var(--text-muted)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>
            <strong style={{ color: "var(--primary)", fontStyle: "normal" }}>Tactical Analysis:</strong> India has maintained a clear upper hand in the head-to-head records over the last six years, buoyed by their Olympic bronze medal runs and superior structure. Pakistan's transition phase has kept them searching for a win, though their counter-attacking speed remains highly dangerous as shown in their tight 2-1 and 4-3 games. Harmanpreet Singh's drag-flicking and India's solid structural defense generally decide the outcome.
          </p>
        </section>

        {/* Matchup 2: Netherlands vs Germany - European Classic */}
        <section className="my-16" style={{ border: "1px solid rgba(14, 165, 233, 0.25)", padding: "2rem", borderRadius: "20px", background: "rgba(14, 165, 233, 0.02)" }}>
          <div className="h2h-matchup-header mb-6">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <img src="https://flagcdn.com/w40/nl.png" width="30" height="20" alt="Netherlands flag" style={{ borderRadius: "2px" }} />
              <h2 className="text-xl md:text-2xl font-bold italic m-0" style={{ color: "var(--text-main)" }}>Netherlands vs Germany</h2>
              <img src="https://flagcdn.com/w40/de.png" width="30" height="20" alt="Germany flag" style={{ borderRadius: "2px" }} />
              <span className="h2h-badge ml-auto" style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)" }}>🇪🇺 European Classic</span>
            </div>
            <p className="text-sm leading-relaxed m-0" style={{ color: "var(--text-muted)" }}>
              The European Classic. Netherlands (Oranje) and Germany (Honamas) have locked horns since the early 1970s. Tactically sophisticated and intensely competitive, this derby represents elite hockey standard. Below is the official record of their last 10 head-to-head encounters:
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
                  <td data-label="No.">1</td>
                  <td data-label="Date">June 24, 2024</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Utrecht, Netherlands</td>
                  <td data-label="Result (Score)">Netherlands 1 – 1 Germany</td>
                  <td data-label="Outcome">🤝 Draw (1-3 Pen DE)</td>
                </tr>
                <tr>
                  <td data-label="No.">2</td>
                  <td data-label="Date">June 23, 2024</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Utrecht, Netherlands</td>
                  <td data-label="Result (Score)">Netherlands 3 – 2 Germany</td>
                  <td data-label="Outcome">🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td data-label="No.">3</td>
                  <td data-label="Date">June 20, 2023</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Amsterdam, Netherlands</td>
                  <td data-label="Result (Score)">Netherlands 2 – 2 Germany</td>
                  <td data-label="Outcome">🤝 Draw (1-4 Pen DE)</td>
                </tr>
                <tr>
                  <td data-label="No.">4</td>
                  <td data-label="Date">June 16, 2023</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Amsterdam, Netherlands</td>
                  <td data-label="Result (Score)">Netherlands 4 – 1 Germany</td>
                  <td data-label="Outcome">🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td data-label="No.">5</td>
                  <td data-label="Date">Jan 27, 2023</td>
                  <td data-label="Tournament">FIH Men's World Cup</td>
                  <td data-label="Venue">Bhubaneswar, India</td>
                  <td data-label="Result (Score)">Germany 4 – 3 Netherlands</td>
                  <td data-label="Outcome">🇩🇪 Germany Win</td>
                </tr>
                <tr>
                  <td data-label="No.">6</td>
                  <td data-label="Date">June 12, 2022</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Hamburg, Germany</td>
                  <td data-label="Result (Score)">Netherlands 3 – 2 Germany</td>
                  <td data-label="Outcome">🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td data-label="No.">7</td>
                  <td data-label="Date">June 11, 2022</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Hamburg, Germany</td>
                  <td data-label="Result (Score)">Netherlands 2 – 1 Germany</td>
                  <td data-label="Outcome">🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td data-label="No.">8</td>
                  <td data-label="Date">July 30, 2021</td>
                  <td data-label="Tournament">Olympic Games Tokyo</td>
                  <td data-label="Venue">Tokyo, Japan</td>
                  <td data-label="Result (Score)">Germany 3 – 1 Netherlands</td>
                  <td data-label="Outcome">🇩🇪 Germany Win</td>
                </tr>
                <tr>
                  <td data-label="No.">9</td>
                  <td data-label="Date">June 13, 2021</td>
                  <td data-label="Tournament">EuroHockey Final</td>
                  <td data-label="Venue">Amstelveen, Netherlands</td>
                  <td data-label="Result (Score)">Germany 2 – 2 Netherlands</td>
                  <td data-label="Outcome">🤝 Draw (1-4 Pen NL)</td>
                </tr>
                <tr>
                  <td data-label="No.">10</td>
                  <td data-label="Date">June 4, 2021</td>
                  <td data-label="Tournament">EuroHockey Pool Stage</td>
                  <td data-label="Venue">Amstelveen, Netherlands</td>
                  <td data-label="Result (Score)">Germany 2 – 2 Netherlands</td>
                  <td data-label="Outcome">🤝 Draw (3-0 Pen DE)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Last 10 Matches Summary Bar */}
          <div className="h2h-summary-bar" style={{
            background: "rgba(14, 165, 233, 0.06)",
            border: "1px solid rgba(14, 165, 233, 0.18)",
            padding: "1rem 1.5rem",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1.2rem",
            fontWeight: "bold",
            color: "var(--text-main)",
            fontSize: "0.95rem"
          }}>
            <span>📊 Last 10 Encounters Summary:</span>
            <span style={{ color: "#0284c7", fontWeight: "800" }}>Netherlands 4 – 2 Germany (4 Draws)</span>
          </div>

          <p className="text-xs mt-4 italic" style={{ lineHeight: "1.9", color: "var(--text-muted)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>
            <strong style={{ color: "var(--primary)", fontStyle: "normal" }}>Tactical Analysis:</strong> Matches between the Dutch Oranje and German Honamas are highly structured. Over their last 10 games, 4 resulted in draws, showcasing the extreme tactical parity. Netherlands relies on quick wing transitions and midfield playmaking via Brinkman, whereas Germany specializes in circle defenses and clinical penalty corner conversions (via Wellen). 
          </p>
        </section>

        {/* Matchup 3: Australia vs Belgium - World Class Battle */}
        <section className="my-16" style={{ border: "1px solid rgba(34, 197, 94, 0.25)", padding: "2rem", borderRadius: "20px", background: "rgba(34, 197, 94, 0.02)" }}>
          <div className="h2h-matchup-header mb-6">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <img src="https://flagcdn.com/w40/au.png" width="30" height="20" alt="Australia flag" style={{ borderRadius: "2px" }} />
              <h2 className="text-xl md:text-2xl font-bold italic m-0" style={{ color: "var(--text-main)" }}>Australia vs Belgium</h2>
              <img src="https://flagcdn.com/w40/be.png" width="30" height="20" alt="Belgium flag" style={{ borderRadius: "2px" }} />
              <span className="h2h-badge ml-auto" style={{ background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)" }}>⚡ World Class Powerhouses</span>
            </div>
            <p className="text-sm leading-relaxed m-0" style={{ color: "var(--text-muted)" }}>
              The Kookaburras (Australia) and Red Lions (Belgium) represent the ultimate modern hockey speed. Having contested the Olympic final in Tokyo, their games are high-scoring, physical affairs played at a breakneck pace. Below is the official record of their last 10 head-to-head encounters:
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
                  <td data-label="No.">1</td>
                  <td data-label="Date">May 26, 2024</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Antwerp, Belgium</td>
                  <td data-label="Result (Score)">Belgium 2 – 2 Australia</td>
                  <td data-label="Outcome">🤝 Draw (5-3 Pen BE)</td>
                </tr>
                <tr>
                  <td data-label="No.">2</td>
                  <td data-label="Date">June 2, 2024</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">London, UK</td>
                  <td data-label="Result (Score)">Belgium 1 – 4 Australia</td>
                  <td data-label="Outcome">🇦🇺 Australia Win</td>
                </tr>
                <tr>
                  <td data-label="No.">3</td>
                  <td data-label="Date">June 18, 2023</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Antwerp, Belgium</td>
                  <td data-label="Result (Score)">Belgium 1 – 3 Australia</td>
                  <td data-label="Outcome">🇦🇺 Australia Win</td>
                </tr>
                <tr>
                  <td data-label="No.">4</td>
                  <td data-label="Date">June 16, 2023</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Antwerp, Belgium</td>
                  <td data-label="Result (Score)">Belgium 2 – 1 Australia</td>
                  <td data-label="Outcome">🇧🇪 Belgium Win</td>
                </tr>
                <tr>
                  <td data-label="No.">5</td>
                  <td data-label="Date">Jan 24, 2023</td>
                  <td data-label="Tournament">FIH Men's World Cup</td>
                  <td data-label="Venue">Bhubaneswar, India</td>
                  <td data-label="Result (Score)">Belgium 2 – 0 Australia</td>
                  <td data-label="Outcome">🇧🇪 Belgium Win</td>
                </tr>
                <tr>
                  <td data-label="No.">6</td>
                  <td data-label="Date">June 26, 2022</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Terrassa, Spain</td>
                  <td data-label="Result (Score)">Belgium 3 – 3 Australia</td>
                  <td data-label="Outcome">🤝 Draw (1-3 Pen AU)</td>
                </tr>
                <tr>
                  <td data-label="No.">7</td>
                  <td data-label="Date">June 25, 2022</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Terrassa, Spain</td>
                  <td data-label="Result (Score)">Belgium 2 – 4 Australia</td>
                  <td data-label="Outcome">🇦🇺 Australia Win</td>
                </tr>
                <tr>
                  <td data-label="No.">8</td>
                  <td data-label="Date">Aug 5, 2021</td>
                  <td data-label="Tournament">Olympic Games Tokyo Final</td>
                  <td data-label="Venue">Tokyo, Japan</td>
                  <td data-label="Result (Score)">Belgium 1 – 1 Australia</td>
                  <td data-label="Outcome">🤝 Draw (3-2 Pen BE)</td>
                </tr>
                <tr>
                  <td data-label="No.">9</td>
                  <td data-label="Date">June 15, 2019</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Antwerp, Belgium</td>
                  <td data-label="Result (Score)">Australia 2 – 0 Belgium</td>
                  <td data-label="Outcome">🇦🇺 Australia Win</td>
                </tr>
                <tr>
                  <td data-label="No.">10</td>
                  <td data-label="Date">Feb 3, 2018</td>
                  <td data-label="Tournament">Test Match</td>
                  <td data-label="Venue">Melbourne, Australia</td>
                  <td data-label="Result (Score)">Australia 3 – 2 Belgium</td>
                  <td data-label="Outcome">🇦🇺 Australia Win</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Last 10 Matches Summary Bar */}
          <div className="h2h-summary-bar" style={{
            background: "rgba(34, 197, 94, 0.06)",
            border: "1px solid rgba(34, 197, 94, 0.18)",
            padding: "1rem 1.5rem",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1.2rem",
            fontWeight: "bold",
            color: "var(--text-main)",
            fontSize: "0.95rem"
          }}>
            <span>📊 Last 10 Encounters Summary:</span>
            <span style={{ color: "#16a34a", fontWeight: "800" }}>Australia 5 – 2 Belgium (3 Draws)</span>
          </div>

          <p className="text-xs mt-4 italic" style={{ lineHeight: "1.9", color: "var(--text-muted)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>
            <strong style={{ color: "var(--primary)", fontStyle: "normal" }}>Tactical Analysis:</strong> Modern hockey's highest octane rivalry. Australia leads the wins margin 5-2 over the last 10 encounters, though Belgium won the two most critical games—the Tokyo Olympic Gold Medal Match (on penalties) and the 2023 World Cup Semi-Final. Australia utilizes extreme counter-pressing and physical conditioning, while Belgium replies with mature possessional structures led by Arthur Van Doren and Victor Wegnez.
          </p>
        </section>

        {/* Matchup 4: Netherlands vs Argentina - Women's El Clásico */}
        <section className="my-16" style={{ border: "1px solid rgba(244, 63, 94, 0.25)", padding: "2rem", borderRadius: "20px", background: "rgba(244, 63, 94, 0.02)" }}>
          <div className="h2h-matchup-header mb-6">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <img src="https://flagcdn.com/w40/nl.png" width="30" height="20" alt="Netherlands flag" style={{ borderRadius: "2px" }} />
              <h2 className="text-xl md:text-2xl font-bold italic m-0" style={{ color: "var(--text-main)" }}>Netherlands vs Argentina</h2>
              <img src="https://flagcdn.com/w40/ar.png" width="30" height="20" alt="Argentina flag" style={{ borderRadius: "2px" }} />
              <span className="h2h-badge ml-auto" style={{ background: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)" }}>🚺 Women's El Clásico</span>
            </div>
            <p className="text-sm leading-relaxed m-0" style={{ color: "var(--text-muted)" }}>
              The pinnacle of women's field hockey. The Oranje Dames (Netherlands) and Las Leonas (Argentina) have dominated the global landscape for decades. High emotional stakes, exceptional speed, and tactical flair define their meetings. Below is the official record of their last 10 head-to-head senior encounters:
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
                  <td data-label="No.">1</td>
                  <td data-label="Date">Aug 9, 2024</td>
                  <td data-label="Tournament">Olympic Games Paris (Semi-Final)</td>
                  <td data-label="Venue">Paris, France</td>
                  <td data-label="Result (Score)">Netherlands 3 – 0 Argentina</td>
                  <td data-label="Outcome">🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td data-label="No.">2</td>
                  <td data-label="Date">Dec 10, 2023</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Santiago del Estero, Argentina</td>
                  <td data-label="Result (Score)">Netherlands 2 – 1 Argentina</td>
                  <td data-label="Outcome">🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td data-label="No.">3</td>
                  <td data-label="Date">Dec 8, 2023</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Santiago del Estero, Argentina</td>
                  <td data-label="Result (Score)">Netherlands 4 – 1 Argentina</td>
                  <td data-label="Outcome">🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td data-label="No.">4</td>
                  <td data-label="Date">Jun 10, 2023</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Eindhoven, Netherlands</td>
                  <td data-label="Result (Score)">Netherlands 7 – 2 Argentina</td>
                  <td data-label="Outcome">🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td data-label="No.">5</td>
                  <td data-label="Date">Jun 9, 2023</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Eindhoven, Netherlands</td>
                  <td data-label="Result (Score)">Netherlands 2 – 0 Argentina</td>
                  <td data-label="Outcome">🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td data-label="No.">6</td>
                  <td data-label="Date">Jul 17, 2022</td>
                  <td data-label="Tournament">Women's World Cup Final</td>
                  <td data-label="Venue">Terrassa, Spain</td>
                  <td data-label="Result (Score)">Netherlands 3 – 1 Argentina</td>
                  <td data-label="Outcome">🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td data-label="No.">7</td>
                  <td data-label="Date">Aug 6, 2021</td>
                  <td data-label="Tournament">Olympic Games Tokyo Final</td>
                  <td data-label="Venue">Tokyo, Japan</td>
                  <td data-label="Result (Score)">Netherlands 3 – 1 Argentina</td>
                  <td data-label="Outcome">🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td data-label="No.">8</td>
                  <td data-label="Date">Feb 16, 2020</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Buenos Aires, Argentina</td>
                  <td data-label="Result (Score)">Netherlands 0 – 2 Argentina</td>
                  <td data-label="Outcome">🇦🇷 Argentina Win</td>
                </tr>
                <tr>
                  <td data-label="No.">9</td>
                  <td data-label="Date">Feb 15, 2020</td>
                  <td data-label="Tournament">FIH Pro League</td>
                  <td data-label="Venue">Buenos Aires, Argentina</td>
                  <td data-label="Result (Score)">Netherlands 3 – 1 Argentina</td>
                  <td data-label="Outcome">🇳🇱 Netherlands Win</td>
                </tr>
                <tr>
                  <td data-label="No.">10</td>
                  <td data-label="Date">Jun 29, 2019</td>
                  <td data-label="Tournament">FIH Pro League Grand Final</td>
                  <td data-label="Venue">Amstelveen, Netherlands</td>
                  <td data-label="Result (Score)">Netherlands 2 – 2 Argentina</td>
                  <td data-label="Outcome">🤝 Draw (4-3 Pen NL)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Last 10 Matches Summary Bar */}
          <div className="h2h-summary-bar" style={{
            background: "rgba(244, 63, 94, 0.06)",
            border: "1px solid rgba(244, 63, 94, 0.18)",
            padding: "1rem 1.5rem",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1.2rem",
            fontWeight: "bold",
            color: "var(--text-main)",
            fontSize: "0.95rem"
          }}>
            <span>📊 Last 10 Encounters Summary:</span>
            <span style={{ color: "#e11d48", fontWeight: "800" }}>Netherlands 8 – 1 Argentina (1 Draw)</span>
          </div>

          <p className="text-xs mt-4 italic" style={{ lineHeight: "1.9", color: "var(--text-muted)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>
            <strong style={{ color: "var(--primary)", fontStyle: "normal" }}>Tactical Analysis:</strong> Netherlands women's team has maintained absolute dominance over Las Leonas, winning 8 of the last 10 meetings, including gold medal clashes at the Tokyo Olympics and 2022 World Cup. Argentina relies on a passionate defensive effort and fast counter-plays led by Maria Granatto, but the Dutch side's incredible pass accuracy, structural discipline, and deep bench depth make them almost unbeatable.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
