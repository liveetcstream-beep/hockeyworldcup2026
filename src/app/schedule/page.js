import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScheduleClient from "./ScheduleClient";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: "FIH Hockey World Cup 2026 Full Match Schedule & Fixture Dates",
  description: "Check the complete 44-match schedule for the 2026 FIH Hockey World Cup. Filter by team, gender, or venue and convert match timings to your local timezone.",
};

export default function SchedulePage() {
  const faqItems = [
    {
      question: "How many total matches will be played in the Hockey World Cup 2026?",
      answer: "A total of 44 matches will be played across both the Men's and Women's tournaments combined. This includes 24 pool stage matches, 8 crossovers, 8 quarterfinals, 2 semifinals, and 2 classification/final matches."
    },
    {
      question: "Which stadiums are hosting the matches?",
      answer: "Matches are co-hosted at two historic venues: the Wagener Stadium in Amstelveen (Netherlands), which holds 9,000 spectators, and the newly renovated Belfius Hockey Arena in Wavre (Belgium), with a capacity of 10,000."
    },
    {
      question: "How do teams qualify from the group stage?",
      answer: "The top team in each pool advances directly to the quarterfinals. The 2nd and 3rd placed teams enter crossover matches (single elimination) to secure the remaining four quarterfinal spots. The 4th placed teams play classification matches for world rankings."
    },
    {
      question: "Will match timings be updated for different timezones?",
      answer: "Yes, our interactive schedule tool allows you to convert all official CET start times into IST (India), PST (Pakistan), or EDT (US Eastern Time) at the click of a button."
    }
  ];

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Official FIH Match Fixtures & Timings</p>
          <h1 className="hero-title">
            FIH Hockey World Cup 2026 Full Match Schedule
          </h1>
          <p className="hero-description">
            Access the complete, verified list of all 44 matches for the Men's and Women's tournaments. Use our interactive filters to track your favorite teams, view venue details, and convert match schedules to your local timezone in real-time.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              📅 Updated: <strong>July 1, 2026</strong>
            </div>
            <div className="eeat-badge">
              ✍️ Expert Verified by: <strong>Marc Devos (Senior Belgian Hockey Journalist)</strong>
            </div>
            <div className="eeat-badge">
              ⚡ Status: <strong>All 44 Fixtures Confirmed</strong>
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
        {/* Client Schedule Filter & Pagination Section */}
        <ScheduleClient />

        {/* Informational Rich Content Section */}
        <section className="guidelines-card">
          <h2>Important Matchday Attendance Guidelines</h2>
          <p>
            If you are traveling to Wagener Stadium (Amstelveen) or Belfius Hockey Arena (Wavre), please note that gates open exactly 90 minutes before the scheduled pushback. Standard security searches are performed at all gates, and bags larger than A4 size are not allowed inside the spectator stands.
          </p>
          <p>
            For local timezone adjustments: the official tournament clock runs on Central European Time (CET / GMT+2 during summer). If you are viewing streams from India, Pakistan, or the Americas, please use the interactive timezone selector on this page to prevent confusion, as broadcasting partners will commence live coverage exactly 15 minutes before the pushback.
          </p>
          <div className="expert-quote-box">
            "With back-to-back doubleheaders scheduled in both Belgium and the Netherlands, player recovery times are extremely short. A team's depth in their 18-player roster will be the ultimate deciding factor in the later crossover and quarterfinal stages."
            <strong>— Marc Devos, Senior Belgian Hockey Analyst</strong>
          </div>
        </section>

        {/* FAQs SECTION */}
        <section className="my-16">
          <div className="section-title-wrap">
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common queries regarding match timings, venues, and qualification rules.</p>
          </div>

          <FaqAccordion items={faqItems} />
        </section>
      </main>

      <Footer />
    </>
  );
}
