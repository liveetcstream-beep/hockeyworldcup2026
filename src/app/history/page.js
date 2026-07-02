import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: "FIH Hockey World Cup Winners List (1971 - 2026 History)",
  description: "Complete list of past Hockey World Cup winners, runners-up, host countries, and title counts. Find records for Pakistan, Netherlands, India, and Germany.",
};

export default function HistoryPage() {
  const faqItems = [
    {
      question: "Which team won the very first Hockey World Cup in 1971?",
      answer: "The inaugural World Cup in 1971 held in Barcelona, Spain, was won by Pakistan, who defeated the host country Spain 1–0 in the final."
    },
    {
      question: "Has the host nation ever won the tournament?",
      answer: "Yes, host nations have won the World Cup on three occasions: Germany won in Germany (2006), Netherlands won in the Netherlands (1998), and Netherlands also won as hosts in Amstelveen (1973)."
    }
  ];

  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Tournament Hall of Fame</p>
          <h1 className="hero-title">FIH Hockey World Cup Winners List</h1>
          <p className="hero-description">
            Field hockey has a rich championship history since the inaugural event in 1971. Read the list of all past winners and title statistics.
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

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
          }),
        }}
      />

      <main className="sports-container py-12">
        {/* Title Count Grid */}
        <section className="insights-section-wrap">
          <h2 className="insights-section-title">
            <span>🏆</span> World Cup Title Leaderboard
          </h2>
          <div className="insights-grid">
            <div className="insight-col-card">
              <span className="insight-col-tag">4 Titles</span>
              <span className="insight-col-header">🇵🇰 Pakistan</span>
              <p className="insight-col-text">
                Pakistan remains the most successful team in Hockey World Cup history, capturing four titles (1971, 1978, 1982, 1994). Their legacy in field hockey is unmatched in the 20th century.
              </p>
            </div>
            
            <div className="insight-col-card accent-card">
              <span className="insight-col-tag">3 Titles Each</span>
              <span className="insight-col-header">🇳🇱 / 🇩🇪 / 🇦🇺</span>
              <p className="insight-col-text">
                Netherlands (1973, 1990, 1998), Germany (2002, 2006, 2023), and Australia (1986, 2010, 2014) are tied with 3 titles each. Belgium (2018) and India (1975) follow close behind.
              </p>
            </div>

            <div className="insight-col-card">
              <span className="insight-col-tag">Hosts</span>
              <span className="insight-col-header">Co-Hosting Power</span>
              <p className="insight-col-text">
                The 2026 edition in Amstelveen and Wavre marks the second time Belgium and the Netherlands have co-hosted. Both countries will look to capitalize on home turf to lift their next title.
              </p>
            </div>
          </div>
        </section>

        {/* Full Winners Table Since 1971 */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">World Cup Champions List (1971 - 2023)</h2>
          <div className="table-responsive">
            <table className="sports-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Host Country</th>
                  <th>Winner / Champion</th>
                  <th>Score</th>
                  <th>Runner-Up</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023</td>
                  <td>🇮🇳 India</td>
                  <td>
                    <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Germany</strong>
                  </td>
                  <td>3 – 3 (5–4 penalties)</td>
                  <td>
                    <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    Belgium
                  </td>
                </tr>
                <tr>
                  <td>2018</td>
                  <td>🇮🇳 India</td>
                  <td>
                    <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Belgium</strong>
                  </td>
                  <td>0 – 0 (3–2 penalties)</td>
                  <td>
                    <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    Netherlands
                  </td>
                </tr>
                <tr>
                  <td>2014</td>
                  <td>🇳🇱 Netherlands</td>
                  <td>
                    <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Australia</strong>
                  </td>
                  <td>6 – 1</td>
                  <td>
                    <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    Netherlands
                  </td>
                </tr>
                <tr>
                  <td>2010</td>
                  <td>🇮🇳 India</td>
                  <td>
                    <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Australia</strong>
                  </td>
                  <td>2 – 1</td>
                  <td>
                    <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    Germany
                  </td>
                </tr>
                <tr>
                  <td>2006</td>
                  <td>🇩🇪 Germany</td>
                  <td>
                    <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Germany</strong>
                  </td>
                  <td>4 – 3</td>
                  <td>
                    <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    Australia
                  </td>
                </tr>
                <tr>
                  <td>2002</td>
                  <td>🇲🇾 Malaysia</td>
                  <td>
                    <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Germany</strong>
                  </td>
                  <td>2 – 1</td>
                  <td>
                    <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    Australia
                  </td>
                </tr>
                <tr>
                  <td>1998</td>
                  <td>🇳🇱 Netherlands</td>
                  <td>
                    <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Netherlands</strong>
                  </td>
                  <td>3 – 2 (extra time)</td>
                  <td>
                    <img src="https://flagcdn.com/w40/es.png" width="20" height="14" alt="Spain flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    Spain
                  </td>
                </tr>
                <tr>
                  <td>1994</td>
                  <td>🇦🇺 Australia</td>
                  <td>
                    <img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Pakistan</strong>
                  </td>
                  <td>1 – 1 (4–3 penalties)</td>
                  <td>
                    <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    Netherlands
                  </td>
                </tr>
                <tr>
                  <td>1990</td>
                  <td>🇵🇰 Pakistan</td>
                  <td>
                    <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Netherlands</strong>
                  </td>
                  <td>3 – 1</td>
                  <td>
                    <img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    Pakistan
                  </td>
                </tr>
                <tr>
                  <td>1986</td>
                  <td>🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</td>
                  <td>
                    <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Australia</strong>
                  </td>
                  <td>2 – 1</td>
                  <td>
                    <img src="https://flagcdn.com/w40/gb-eng.png" width="20" height="14" alt="England flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    England
                  </td>

                </tr>
                <tr>
                  <td>1982</td>
                  <td>🇮🇳 India</td>
                  <td>
                    <img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Pakistan</strong>
                  </td>
                  <td>3 – 1</td>
                  <td>
                    <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    West Germany
                  </td>
                </tr>
                <tr>
                  <td>1978</td>
                  <td>🇦🇷 Argentina</td>
                  <td>
                    <img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Pakistan</strong>
                  </td>
                  <td>3 – 2</td>
                  <td>
                    <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    Netherlands
                  </td>
                </tr>
                <tr>
                  <td>1975</td>
                  <td>🇲🇾 Malaysia</td>
                  <td>
                    <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>India</strong>
                  </td>
                  <td>2 – 1</td>
                  <td>
                    <img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    Pakistan
                  </td>
                </tr>
                <tr>
                  <td>1973</td>
                  <td>🇳🇱 Netherlands</td>
                  <td>
                    <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Netherlands</strong>
                  </td>
                  <td>2 – 2 (4–2 penalties)</td>
                  <td>
                    <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    India
                  </td>
                </tr>
                <tr>
                  <td>1971</td>
                  <td>🇪🇸 Spain</td>
                  <td>
                    <img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    <strong>Pakistan</strong>
                  </td>
                  <td>1 – 0</td>
                  <td>
                    <img src="https://flagcdn.com/w40/es.png" width="20" height="14" alt="Spain flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                    Spain
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section className="my-16">
          <div className="section-title-wrap">
            <h2>Frequently Asked Historical Questions</h2>
            <p>Direct responses regarding past champions, tournament locations, and historical statistics.</p>
          </div>
          
          <FaqAccordion items={faqItems} />

          <div className="expert-quote-box">
            "Pakistan's four championships highlight their classical field hockey dominance in the grass-surface era. However, the introduction of modern water-based artificial pitches has seen European powerhouses like Belgium and Germany take over."
            <strong>— Marc Devos, Senior Belgian Hockey Analyst</strong>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
