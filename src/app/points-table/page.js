import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: "FIH Hockey World Cup 2026 Points Table & Standing Rules",
  description: "Official points table rules for the group pools. Learn how points are awarded and how group stage tie-breakers are calculated in case of equal scores.",
};

export default function PointsTablePage() {
  const faqItems = [
    {
      question: "Does goal difference matter more than total wins?",
      answer: "No. Under the latest FIH guidelines, number of matches won is the primary tie-breaker. Goal difference is only considered if the number of wins is equal."
    },
    {
      question: "Is there any bonus point system?",
      answer: "No. Unlike rugby or soccer leagues, hockey tournaments do not award bonus points for scoring a certain number of goals (e.g. 4+ goals)."
    }
  ];

  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Group Stage Standings Criteria</p>
          <h1 className="hero-title">Official Points Table & Standings Rules</h1>
          <p className="hero-description">
            How do teams earn rankings during the 2026 group stages in Belgium and the Netherlands? Read the official FIH point system and tie-breaker guidelines.
          </p>

          <div className="eeat-badge-container">
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
        {/* Point System Cards */}
        <section className="insights-section-wrap">
          <h2 className="insights-section-title">
            <span>⚙️</span> FIH Group Stage Point Allocation
          </h2>
          <div className="insights-grid">
            <div className="insight-col-card">
              <span className="insight-col-tag">Win</span>
              <span className="insight-col-header">3 Points</span>
              <p className="insight-col-text">
                Teams receive 3 points for winning a match within the 60 minutes of regulation play. There is no extra time during pool matches.
              </p>
            </div>
            
            <div className="insight-col-card accent-card">
              <span className="insight-col-tag">Draw</span>
              <span className="insight-col-header">1 Point</span>
              <p className="insight-col-text">
                In case of a tie at the end of regulation (60 mins), both teams receive 1 point each. No penalty shootout is played in the group phase.
              </p>
            </div>

            <div className="insight-col-card">
              <span className="insight-col-tag">Loss</span>
              <span className="insight-col-header">0 Points</span>
              <p className="insight-col-text">
                A team receives 0 points for losing a match within regulation play, regardless of goal margins.
              </p>
            </div>
          </div>
        </section>

        {/* Tie-Breaker Priority Rules List */}
        <section className="my-16 bg-slate-900 border border-slate-800 p-8 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Official FIH Group stage Tie-Breaker Rules</h2>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            If two or more teams finish the pool matches with equal points, their final standings position is determined by the following priority rules:
          </p>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="border-b border-slate-800 pb-3">
              <strong className="text-white block">1. Total Matches Won</strong>
              The team with the higher number of wins in the pool is ranked higher.
            </div>
            <div className="border-b border-slate-800 pb-3">
              <strong className="text-white block">2. Goal Difference (GD)</strong>
              Calculated as total goals scored minus total goals conceded. The team with the higher positive difference is ranked higher.
            </div>
            <div className="border-b border-slate-800 pb-3">
              <strong className="text-white block">3. Goals For (GF)</strong>
              The team that has scored the highest total number of goals in all pool matches is ranked higher.
            </div>
            <div className="border-b border-slate-800 pb-3">
              <strong className="text-white block">4. Head-to-Head Match Result</strong>
              The result of the match played between the tied teams determines who ranks higher.
            </div>
            <div>
              <strong className="text-white block">5. Shootout (If still tied)</strong>
              If all the above parameters remain equal and the teams are still tied, a series of penalty shoot-outs will be scheduled to determine qualification.
            </div>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section className="my-16">
          <div className="section-title-wrap">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>Direct responses regarding points allocation, wins criteria, and group stage tie-breakers.</p>
          </div>
          
          <FaqAccordion items={faqItems} />

          <div className="expert-quote-box">
            "Understanding the tie-breaker is key during the final matchday of pool stages. Team coaches often order their players to hunt for more field goals if they anticipate a tie on points."
            <strong>— Marc Devos, Senior Belgian Hockey Analyst</strong>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
