import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScheduleClient from "./ScheduleClient";
import FaqAccordion from "../components/FaqAccordion";
import { getPublishedNews } from "../../data/newsUtils";

export const metadata = {
  title: "Hockey World Cup 2026 Full Schedule: Fixtures & PDF Download",
  description: "Official FIH Hockey World Cup 2026 schedule. Access the complete match calendar, pool fixtures, kickoff times, and download the full PDF time table.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/schedule",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Full Schedule: Fixtures & PDF Download",
    description: "Official FIH Hockey World Cup 2026 schedule. Access the complete match calendar, pool fixtures, kickoff times, and download the full PDF time table.",
    url: "https://hockeyworldcup2026schedule.com/schedule",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Full Schedule: Fixtures & PDF Download",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Full Schedule: Fixtures & PDF Download",
    description: "Official FIH Hockey World Cup 2026 schedule. Access the complete match calendar, pool fixtures, kickoff times, and download the full PDF time table.",
    images: ["/og-image.jpg"],
  },
};


export default function SchedulePage() {
  const faqItems = [
    {
      question: "When does the FIH Hockey World Cup 2026 start and end?",
      answer: "The tournament officially begins on Saturday, August 15, 2026, and concludes with the Men's Grand Final on Sunday, August 30, 2026. Pool stage matches run from August 15 to August 24, followed by knockouts."
    },
    {
      question: "Where can I download the Hockey World Cup 2026 schedule PDF?",
      answer: "You can download a print-friendly version of the complete 100-match fixture list as a PDF directly from our website. Just use the 'Print & Save PDF Fixtures' button inside our interactive schedule tool above."
    },
    {
      question: "What is the USA (USWNT) match schedule and kick-off times?",
      answer: "The United States Women's National Team (USWNT) begins in Pool C. Key highlights include: Argentina vs USA on August 15 at 12:30 PM ET, USA vs Scotland on August 17 at 6:00 AM ET, and USA vs Germany on August 19 at 9:00 AM ET."
    },
    {
      question: "How can I purchase official tickets for the 2026 matches?",
      answer: "Official tickets are managed via the unified tournament booking portal at tickets.hockeyworldcup2026.com. Avoid third-party scalpers or unauthorized resale platforms to ensure valid entry at Wagener Stadium and Belfius Hockey Arena."
    },
    {
      question: "What is the tournament format for the 2026 World Cup?",
      answer: "The 16 teams are split into 4 pools of 4 teams. The top team in each pool qualifies directly for the Quarter-Finals. The second and third-placed teams play in crossover playoffs to secure the remaining Quarter-Final spots, while the fourth-placed team is eliminated."
    }
  ];

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Official FIH Tournament Bracket & Fixtures</p>
          <h1 className="hero-title">
            Hockey World Cup 2026 Full Match Schedule & Time Table
          </h1>
          <p className="hero-description">
            Get the complete, verified 100-match tournament schedule for the Men's and Women's FIH Hockey World Cups in Belgium & Netherlands. Filter by team, track USA time zones (EDT/ET), view group stages, and download the print-friendly PDF guide.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Expert Verified by: <strong>HWC 2026 Editorial Desk</strong>
            </div>
            <div className="eeat-badge">
              ⚡ Status: <strong>All 100 Fixtures Confirmed</strong>
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
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hockeyworldcup2026schedule.com" },
                  { "@type": "ListItem", "position": 2, "name": "Schedule", "item": "https://hockeyworldcup2026schedule.com/schedule" }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer,
                  },
                })),
              },
              {
                "@type": "SportsEvent",
                "name": "FIH Hockey World Cup 2026 Tournament Schedule",
                "startDate": "2026-08-15T10:00:00+02:00",
                "endDate": "2026-08-30T21:00:00+02:00",
                "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
                "eventStatus": "https://schema.org/EventScheduled",
                "location": [
                  {
                    "@type": "Place",
                    "name": "Wagener Stadium",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Amstelveen",
                      "addressCountry": "NL"
                    }
                  },
                  {
                    "@type": "Place",
                    "name": "Belfius Hockey Arena",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Wavre",
                      "addressCountry": "BE"
                    }
                  }
                ]
              }
            ]
          }),
        }}
      />

      <main className="sports-container py-12">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Hockey World Cup 2026 Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Match Schedule</span>
        </nav>

        {/* Client Schedule Filter & Pagination Section */}
        <ScheduleClient />

        {/* LATEST NEWS & TOURNAMENT UPDATES SECTION */}
        <section id="schedule-news" className="my-16">
          <div className="section-title-wrap">
            <h2>Latest Tournament News & Fixture Updates</h2>
            <p>Stay informed with team announcements, squad changes, injury reports, and matchday guidelines.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getPublishedNews().slice(0, 3).map((article) => (
              <div key={article.slug} className="local-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ position: 'relative', height: '160px', width: '100%', marginBottom: '1rem', overflow: 'hidden', borderRadius: '12px' }}>
                  <img src={article.image} alt={article.title} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.4rem', display: 'block' }}>{article.category}</span>
                  <h3 style={{ fontSize: '1rem', lineHeight: '1.4', margin: '0 0 0.6rem 0', color: 'var(--text-main)' }}>{article.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.2rem' }}>{article.excerpt}</p>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>⏱️ {article.readTime}</span>
                    <a href={`/news/${article.slug}`} className="cta-button primary-cta" style={{ fontSize: '0.75rem', padding: '0.35rem 0.7rem', borderRadius: '6px' }}>Read Article →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Key Dates & Silo Block */}
        <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="local-card" style={{ padding: "2rem" }}>
              <div className="local-icon">📅</div>
              <h3 className="text-white mt-4 mb-2">Key Dates & Stages</h3>
              <ul className="pool-list" style={{ marginTop: "1rem" }}>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.03)", color: "var(--text-muted)" }}>
                  <strong className="text-white">Pool Matches:</strong> August 15 – August 24, 2026
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.03)", color: "var(--text-muted)" }}>
                  <strong className="text-white">Crossover Rounds:</strong> August 21 – August 25, 2026
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.03)", color: "var(--text-muted)" }}>
                  <strong className="text-white">Quarterfinals:</strong> August 23 – August 28, 2026
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.03)", color: "var(--text-muted)" }}>
                  <strong className="text-white">Semifinals:</strong> Aug 27 (Women) & Aug 28 (Men)
                </li>
                <li style={{ padding: "0.5rem 0", color: "var(--text-muted)" }}>
                  <strong className="text-white">Grand Finals:</strong> Aug 29 (Women, NED) & Aug 30 (Men, BEL)
                </li>
              </ul>
            </div>

            <div className="local-card" style={{ padding: "2rem" }}>
              <div className="local-icon">🇺🇸</div>
              <h3 className="text-white mt-4 mb-2">USA Broadcast & ET Schedule</h3>
              <p className="text-sm text-slate-400" style={{ marginTop: "1rem", lineHeight: "1.6" }}>
                For fans in the United States tracking the USWNT (United States Women's National Team), match schedules are broadcasted live on Fox Sports channels and streamed online via Watch.Hockey.
              </p>
              <p className="text-sm text-slate-400" style={{ marginTop: "0.5rem", lineHeight: "1.6" }}>
                To make viewing easy, we have pre-configured match times in ET (US Eastern Time) inside our interactive timezone selector. Select <strong>US Eastern Time (EDT)</strong> above to automatically convert CET times.
              </p>
            </div>
          </div>
        </section>

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
            <strong>— HWC 2026 Editorial Desk</strong>
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
