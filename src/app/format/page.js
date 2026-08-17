import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
  title: "Hockey World Cup 2026 Format: Second Group Phase & Rules",
  description: "Complete guide to the FIH Hockey World Cup 2026 tournament format. Discover how Pools A-D progress into Second Stage Pools E-H, leading to the Semi-Finals.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/format",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Format: Second Group Phase & Rules",
    description: "Complete guide to the FIH Hockey World Cup 2026 tournament format. Learn how the Second Group Phase (Pools E-H) and Semi-Finals work.",
    url: "https://hockeyworldcup2026schedule.com/format",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Format: Second Group Phase & Rules",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Format: Second Group Phase & Rules",
    description: "Complete guide to the FIH Hockey World Cup 2026 tournament format: Pools A-D, Second Stage Pools E-H, and Finals.",
    images: ["/og-image.jpg"],
  },
};

export default function FormatPage() {
  const faqItems = [
    {
      question: "Are there single-elimination Quarter-Finals in 2026?",
      answer: "No. The 2026 FIH Hockey World Cup uses a Second Group Phase (Pools E, F, G, H) from August 21–24 rather than traditional quarter-finals or crossover playoffs. The top two teams from Pools E and F advance directly to the Semi-Finals."
    },
    {
      question: "How do teams qualify for the Second Group Phase?",
      answer: "The top 2 teams from Pools A and D form Pool E (playing at Wagener Stadium in Amstelveen). The top 2 teams from Pools B and C form Pool F (playing at Belfius Arena in Wavre)."
    },
    {
      question: "What happens to teams that finish 3rd or 4th in their opening pools?",
      answer: "Teams finishing 3rd and 4th enter Classification Pools G (Bottom 2 of A & D) and H (Bottom 2 of B & C) to determine official FIH World Ranking positions 9th through 16th."
    },
    {
      question: "How are tied knockout and playoff matches decided?",
      answer: "If a playoff or knockout match ends in a draw at the end of regulation (60 minutes), the game proceeds directly to an official FIH 8-second penalty shootout. There is no extra time."
    }
  ];

  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Tournament Structure &amp; Progression Rules</p>
          <h1 className="hero-title">Hockey World Cup 2026 Format: Second Group Phase &amp; Rules</h1>
          <p className="hero-description">
            Complete explanation of the FIH Hockey World Cup 2026 competition system. How 16 nations progress from Pools A–D into Second Stage Pools E–H, leading to the Semi-Finals and Grand Finals.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Verified: <strong>HWC 2026 Editorial Desk</strong>
            </div>
            <div className="eeat-badge">
              🎓 Source: <strong>FIH Official Competition Regulations</strong>
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
              <span className="insight-col-header">Opening Pool Stage (Aug 15–20)</span>
              <p className="insight-col-text">
                The 16 qualified teams are split into 4 pools of 4 (Pools A, B, C, D) playing single round-robin fixtures. The top 2 teams in each pool advance to Championship Pools E &amp; F, while 3rd and 4th place teams enter Classification Pools G &amp; H.
              </p>
            </div>
            
            <div className="insight-col-card accent-card">
              <span className="insight-col-tag">Stage 2</span>
              <span className="insight-col-header">Second Group Phase (Aug 21–24)</span>
              <p className="insight-col-text">
                Rather than single-knockout crossovers, the 2026 edition uses a Second Group Stage: The top 2 teams from Pools A &amp; D form <strong>Pool E</strong> (Amstelveen), while top 2 from Pools B &amp; C form <strong>Pool F</strong> (Wavre). Pools G &amp; H decide 9th–16th placements.
              </p>
            </div>

            <div className="insight-col-card">
              <span className="insight-col-tag">Stage 3</span>
              <span className="insight-col-header">Semi-Finals &amp; Grand Finals</span>
              <p className="insight-col-text">
                The top 2 teams from Pool E and Pool F advance directly to the Semi-Finals (1st E vs 2nd F, 1st F vs 2nd E). Winners clash in the Women&apos;s Grand Final (Aug 29 in Amstelveen) and Men&apos;s Grand Final (Aug 30 in Wavre).
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
            <h2>Tournament Structure Q&amp;A</h2>
            <p>Direct responses regarding Second Group Phase progression, shootout criteria, and advancement rules.</p>
          </div>
          
          <FaqAccordion items={faqItems} />

          <div className="expert-quote-box">
            &quot;The Second Group Stage format rewards tournament consistency over luck. With teams carrying forward head-to-head records against their advancing pool rivals, every single match in Pools E and F carries championship weight.&quot;
            <strong>— HWC 2026 Editorial Desk</strong>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
