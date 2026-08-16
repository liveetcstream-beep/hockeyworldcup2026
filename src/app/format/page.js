import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: "Hockey World Cup 2026 Format: Pool, Second Stage & Rules",
  description: "Complete guide on how the 16 teams qualify for the quarterfinals. Learn how crossover matches, penalty shootouts, and classification stages work.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/format",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Format: Pool, Second Stage & Rules",
    description: "Complete guide on how the 16 teams qualify for the quarterfinals. Learn how crossover matches, penalty shootouts, and classification stages work.",
    url: "https://hockeyworldcup2026schedule.com/format",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Format: Pool, Second Stage & Rules",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Format: Pool, Second Stage & Rules",
    description: "Complete guide on how the 16 teams qualify for the quarterfinals. Learn how crossover matches, penalty shootouts, and classification stages work.",
    images: ["/og-image.jpg"],
  },
};


export default function FormatPage() {
  const faqItems = [
    {
      question: "What happens to the teams that finish 4th in their pools?",
      answer: "The teams finishing last (4th place) are immediately eliminated from contesting the World Cup trophy. However, they continue to play classification matches to establish final FIH world ranking positions."
    },
    {
      question: "How are tie-breaker situations resolved in knockout rounds?",
      answer: "If a crossover or knockout match ends in a draw at the end of regulation (60 minutes), the game goes directly to a penalty shootout. There is no extra time (overtime) played in FIH tournaments."
    },
    {
      question: "Why does the FIH use the crossover format?",
      answer: "The crossover format keeps the group stage highly competitive. Even if a powerhouse team loses its opening match, they can still qualify for the knockouts by securing 2nd or 3rd place, keeping television viewers and sponsors engaged."
    }
  ];

  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Knockout Progression & Rules</p>
          <h1 className="hero-title">Hockey World Cup 2026 Format: Pool, Second Stage & Rules</h1>
          <p className="hero-description">
            Understanding the progression structure is vital. Only 16 countries compete, but the road to the final in Wavre involves group stages, crossover matches, and straight knockouts.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Verified: <strong>HWC 2026 Editorial Desk</strong>
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
        {/* Format Explanation Steps */}
        <section className="insights-section-wrap">
          <h2 className="insights-section-title">
            <span>📊</span> Tournament Progression Stages Explained
          </h2>
          <div className="insights-grid">
            <div className="insight-col-card">
              <span className="insight-col-tag">Stage 1</span>
              <span className="insight-col-header">Group Pool Stage</span>
              <p className="insight-col-text">
                The 16 qualified teams are split into 4 pools of 4 (Pools A, B, C, D). They play a single round-robin structure. At the end of the pool matches, the top finisher in each group qualifies directly for the Quarterfinals.
              </p>
            </div>
            
            <div className="insight-col-card accent-card">
              <span className="insight-col-tag">Stage 2</span>
              <span className="insight-col-header">Second Group Phase (Pools E, F, G, H)</span>
              <p className="insight-col-text">
                Rather than single-knockout crossovers, the 2026 edition uses a Second Group Stage: The top 2 teams from Pools A & D form <strong>Pool E</strong>, while top 2 from Pools B & C form <strong>Pool F</strong>. Bottom 2 teams form <strong>Pool G & H</strong> for 9th–16th classification.
              </p>
            </div>

            <div className="insight-col-card">
              <span className="insight-col-tag">Stage 3</span>
              <span className="insight-col-header">Semi-Finals & Grand Final</span>
              <p className="insight-col-text">
                The top 2 teams from Pool E and Pool F advance directly to the Semi-Finals (1st E vs 2nd F, 1st F vs 2nd E). Winners clash in the Grand Final at the Belfius Arena in Wavre, Belgium.
              </p>
            </div>
          </div>
        </section>

        {/* Second Group Phase Math Mapping Table */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Second Group Stage & Classification Pools Mapping</h2>
          <div className="table-responsive format-table-container">
            <table className="sports-table">
              <thead>
                <tr>
                  <th>Phase 2 Pool</th>
                  <th>Qualified Teams Source</th>
                  <th>Progression Target</th>
                  <th className="hide-mobile">Venue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong><span className="show-desktop-inline">Pool E (Championship)</span><span className="show-mobile-inline">Pool E</span></strong></td>
                  <td>
                    <span className="show-desktop-inline">1st & 2nd Place Pool A + 1st & 2nd Place Pool D</span>
                    <span className="show-mobile-inline">1A, 2A, 1D, 2D</span>
                  </td>
                  <td>
                    <span className="show-desktop-inline">Top 2 advance to Semi-Finals (1st–4th Place)</span>
                    <span className="show-mobile-inline">To Semi-Finals</span>
                  </td>
                  <td className="hide-mobile">Wagener Stadium, Amstelveen</td>
                </tr>
                <tr>
                  <td><strong><span className="show-desktop-inline">Pool F (Championship)</span><span className="show-mobile-inline">Pool F</span></strong></td>
                  <td>
                    <span className="show-desktop-inline">1st & 2nd Place Pool B + 1st & 2nd Place Pool C</span>
                    <span className="show-mobile-inline">1B, 2B, 1C, 2C</span>
                  </td>
                  <td>
                    <span className="show-desktop-inline">Top 2 advance to Semi-Finals (1st–4th Place)</span>
                    <span className="show-mobile-inline">To Semi-Finals</span>
                  </td>
                  <td className="hide-mobile">Belfius Hockey Arena, Wavre</td>
                </tr>
                <tr>
                  <td><strong><span className="show-desktop-inline">Pool G (Classification)</span><span className="show-mobile-inline">Pool G</span></strong></td>
                  <td>
                    <span className="show-desktop-inline">3rd & 4th Place Pool A + 3rd & 4th Place Pool D</span>
                    <span className="show-mobile-inline">3A, 4A, 3D, 4D</span>
                  </td>
                  <td>
                    <span className="show-desktop-inline">9th to 16th FIH World Ranking Classification</span>
                    <span className="show-mobile-inline">9th-16th Rank</span>
                  </td>
                  <td className="hide-mobile">Wagener Stadium, Amstelveen</td>
                </tr>
                <tr>
                  <td><strong><span className="show-desktop-inline">Pool H (Classification)</span><span className="show-mobile-inline">Pool H</span></strong></td>
                  <td>
                    <span className="show-desktop-inline">3rd & 4th Place Pool B + 3rd & 4th Place Pool C</span>
                    <span className="show-mobile-inline">3B, 4B, 3C, 4C</span>
                  </td>
                  <td>
                    <span className="show-desktop-inline">9th to 16th FIH World Ranking Classification</span>
                    <span className="show-mobile-inline">9th-16th Rank</span>
                  </td>
                  <td className="hide-mobile">Belfius Hockey Arena, Wavre</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section className="my-16">
          <div className="section-title-wrap">
            <h2>Tournament Structure Q&A</h2>
            <p>Direct responses regarding crossover rounds, shootout criteria, and advancement rules.</p>
          </div>
          
          <FaqAccordion items={faqItems} />

          <div className="expert-quote-box">
            "The crossover phase is highly volatile. A single bad day on the water-based turf in Amstelveen can ruin a top team's tournament run, making it a favorite for sports betters."
            <strong>— HWC 2026 Editorial Desk</strong>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
