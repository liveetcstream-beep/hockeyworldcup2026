import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScheduleAndConverter from "./components/ScheduleAndConverter";
import FaqAccordion from "./components/FaqAccordion";
import { getPublishedNews } from "../data/newsUtils";


export const metadata = {
  title: { absolute: "Hockey World Cup 2026 Schedule: Fixtures & Live Updates" },
  description: "Get the official Hockey World Cup 2026 Schedule, verified match fixtures, timezone conversions, and live streaming updates.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Schedule: Fixtures & Live Updates",
    description: "Get the official Hockey World Cup 2026 Schedule, verified match fixtures, timezone conversions, and live streaming updates.",
    url: "https://hockeyworldcup2026schedule.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Schedule: Fixtures & Live Updates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Schedule: Fixtures & Live Updates",
    description: "Get the official Hockey World Cup 2026 Schedule, verified match fixtures, timezone conversions, and live streaming updates.",
    images: ["/og-image.jpg"],
  },
};
export default function Home() {
  const faqItems = [
    {
      question: "Which teams have qualified for the FIH Hockey World Cup 2026?",
      answer: "A total of 16 men's and 16 women's national teams have qualified through continental championships (EuroHockey, Asia Cup, Pan American Cup) and the FIH Hockey World Cup Qualifiers. Major contenders include Belgium, Netherlands, India, Germany, and Australia."
    },
    {
      question: "Where will the Hockey World Cup 2026 finals be played?",
      answer: "The Men's Hockey World Cup 2026 final will take place at the Belfius Hockey Arena in Wavre, Belgium. The Women's tournament final will be hosted at the Wagener Stadium in Amstelveen, Netherlands. Both finals are scheduled for Sunday, August 30, 2026."
    },
    {
      question: "Is JioCinema showing the Hockey World Cup matches for free?",
      answer: "Yes, in India, Viacom18 has the digital broadcasting rights. Therefore, JioCinema will stream all Indian team matches and major tournament fixtures completely free of cost in multiple languages."
    },
    {
      question: "How can I buy tickets for the matches in Wagener Stadium (Amstelveen)?",
      answer: "Official ticket sales are handled via the unified tournament portal (hockeyworldcup2026.be). Ticket prices start from €20 for group stage matches, with premium passes available for the final weekend matches in Wavre and Amstelveen."
    }
  ];

  return (
    <>
      {/* HEADER SECTION */}
      <Header />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">FIH Men's & Women's World Cup 2026</p>
          <h1 className="hero-title">
            Hockey World Cup 2026 Schedule: Fixtures & Live Updates
          </h1>
          <p className="hero-description">
            Get the comprehensive, verified 2026 FIH Hockey World Cup fixtures, local stadium start times, and TV channel allocations. We solve your timezone confusion and streaming blackout restrictions for the mega tournament in Belgium and the Netherlands.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Expert Verified by: <strong>Marc Devos (Senior Belgian Hockey Journalist)</strong>
            </div>
            <div className="eeat-badge">
              ⚡ Status: <strong>Official Fixtures Confirmed</strong>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data for Event & FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SportsEvent",
                "name": "FIH Hockey World Cup 2026",
                "startDate": "2026-08-15T13:00:00+02:00",
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
                      "postalCode": "1182 AM",
                      "addressCountry": "NL"
                    }
                  },
                  {
                    "@type": "Place",
                    "name": "Belfius Hockey Arena",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Wavre",
                      "postalCode": "1300",
                      "addressCountry": "BE"
                    }
                  }
                ],
                "organizer": {
                  "@type": "SportsOrganization",
                  "name": "International Hockey Federation",
                  "url": "https://fih.hockey"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              }
            ]
          })
        }}
      />

      <main className="sports-container py-12">
        {/* INTERACTIVE SCHEDULE AND TIMEZONE CONVERTER CLIENT CONTAINER */}
        <ScheduleAndConverter />

        {/* RECENT NEWS AND UPDATES SECTION */}
        <section id="recent-news" className="my-12">
          <div className="section-title-wrap">
            <h2>Recent News & Analysis</h2>
            <p>Stay updated with injury reports, warm-up matches, tactical updates, and rule changes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getPublishedNews().slice(0, 4).map((article) => (
              <div key={article.slug} className="local-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ position: 'relative', height: '180px', width: '100%', marginBottom: '1.2rem', overflow: 'hidden', borderRadius: '12px' }}>
                  <img src={article.image} alt={article.title} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>{article.category}</span>
                  <h3 style={{ fontSize: '1.1rem', lineHeight: '1.4', margin: '0 0 0.8rem 0', color: 'var(--text-main)' }}>{article.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{article.excerpt}</p>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>⏱️ {article.readTime}</span>
                    <a href={`/news/${article.slug}`} className="cta-button primary-cta" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', borderRadius: '8px' }}>Read Article →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="/news" className="cta-button secondary-cta" style={{ display: 'inline-block', backgroundColor: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' }}>📄 View All News Articles</a>
          </div>
        </section>

        {/* FEATURED MATCH PREVIEWS SECTION */}
        <section id="featured-previews" className="my-12">
          <div className="section-title-wrap">
            <h2>Featured Match Previews</h2>
            <p>Head-to-head records, predictions, and timing schedules for the biggest matches of the tournament.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "India vs Pakistan",
                slug: "india-vs-pakistan",
                date: "August 19, 2026",
                time: "18:30 IST / 15:00 Local",
                venue: "Wagener Stadium, Amstelveen",
                desc: "The ultimate subcontinental derby. India's penalty corner options meet Pakistan's counter-attacking speed in a highly anticipated Pool D clash."
              },
              {
                title: "Germany vs Belgium",
                slug: "germany-vs-belgium",
                date: "August 17, 2026",
                time: "20:30 Local",
                venue: "Belfius Hockey Arena, Wavre",
                desc: "Rematch of the epic 2023 World Cup Final. Defending champions Germany face co-hosts Belgium in a high-intensity battle for Pool B dominance."
              },
              {
                title: "India vs England",
                slug: "india-vs-england",
                date: "August 17, 2026",
                time: "16:00 IST / 12:30 Local",
                venue: "Wagener Stadium, Amstelveen",
                desc: "A crucial Pool D showdown. Both squads have historic tournament rivalries, making this a decisive match for direct Quarter-Final spots."
              },
              {
                title: "Belgium vs Netherlands",
                slug: "belgium-vs-netherlands",
                date: "August 20, 2026",
                time: "20:30 Local",
                venue: "Belfius Hockey Arena, Wavre",
                desc: "The Low Countries derby. One of the oldest rivalries in European hockey returns to the world stage in a high-stakes group encounter."
              },
              {
                title: "England vs Pakistan",
                slug: "england-vs-pakistan",
                date: "August 15, 2026",
                time: "17:00 Local",
                venue: "Wagener Stadium, Amstelveen",
                desc: "The opening weekend blockbuster. Pakistan opens their World Cup campaign against a highly structured England team in Pool D."
              }
            ].map((match) => (
              <div key={match.slug} className="local-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <span style={{ background: 'rgba(192, 0, 48, 0.1)', color: 'var(--primary)', borderRadius: '6px', padding: '0.2rem 0.5rem', fontSize: '0.75rem', fontWeight: '700' }}>Pool Stage</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📅 {match.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', color: 'var(--text-main)' }}>{match.title}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.8rem' }}>⏰ {match.time}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>📍 {match.venue}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>{match.desc}</p>
                  <div style={{ marginTop: 'auto' }}>
                    <a href={`/matches/${match.slug}`} className="cta-button primary-cta" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '0.5rem 1rem', borderRadius: '8px' }}>Read Preview →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="/matches" className="cta-button secondary-cta" style={{ display: 'inline-block', backgroundColor: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' }}>⚔️ View All Match Previews</a>
          </div>
        </section>

        {/* WOMEN'S TOURNAMENT FEATURED BANNER */}
        <section id="featured-womens" className="my-16" style={{ background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%)', border: '1px solid rgba(244, 63, 94, 0.15)', borderRadius: '24px', padding: '3rem 2rem', boxShadow: '0 8px 30px rgba(15,23,42,0.04)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <span style={{ display: 'inline-block', background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', borderRadius: '8px', padding: '0.3rem 0.8rem', fontSize: '0.8rem', fontWeight: '800', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Women's FIH World Cup 2026</span>
              <h2 style={{ fontSize: '2rem', fontStyle: 'italic', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 1rem 0' }}>Complete Women's Coverage & Standings</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', margin: '0 0 1.5rem 0' }}>
                Bridging the media coverage gap in women's field hockey. We offer full parity coverage, verified pool draws, daily group match timings, and specialized team roster analysis for all 16 competing women's nations.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'flex-start' }}>
                <a href="/womens-tournament" className="cta-button primary-cta" style={{ background: '#f43f5e', borderColor: '#f43f5e', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>Visit Women's Tournament Hub →</a>
                <a href="/hockey-world-cup-2026-schedule-usa" className="cta-button secondary-cta" style={{ color: 'var(--text-main)', borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '700', border: '1px solid var(--border-color)', textDecoration: 'none' }}>🇺🇸 Team USA Guide</a>
                <a href="/hockey-world-cup-2026-schedule-china" className="cta-button secondary-cta" style={{ color: 'var(--text-main)', borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '700', border: '1px solid var(--border-color)', textDecoration: 'none' }}>🇨🇳 Team China Guide</a>
              </div>
            </div>
          </div>
        </section>

        {/* TOPICAL AUTHORITY HUBS NAVIGATION SECTION */}
        <section id="hubs" className="my-12">
          <div className="section-title-wrap">
            <h2>Hockey World Cup 2026 Coverage Directory</h2>
            <p>Select a dedicated section below to dive deeper into team squads, transit maps, and live streaming portals.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/hockey-live-streaming" className="local-card block text-decoration-none transition-transform hover:-translate-y-2">
              <div className="local-icon">📺</div>
              <h3 className="text-white mt-4 mb-2">Live Stream Guide</h3>
              <p className="text-sm text-slate-400">Step-by-step cord-cutting guides, VPN configurations, and country-wise official channels.</p>
              <span className="text-xs text-sky-400 font-bold block mt-4">Access Broadcasters Hub →</span>
            </a>
            
            <a href="/venues" className="local-card block text-decoration-none transition-transform hover:-translate-y-2">
              <div className="local-icon">🏟️</div>
              <h3 className="text-white mt-4 mb-2">Stadium & Travel Guide</h3>
              <p className="text-sm text-slate-400">Weather forecasts, Zip codes, local landmarks, and transit details for Wavre and Amstelveen.</p>
              <span className="text-xs text-sky-400 font-bold block mt-4">Access Venues Hub →</span>
            </a>

            <a href="/teams" className="local-card block text-decoration-none transition-transform hover:-translate-y-2">
              <div className="local-icon">🏃‍♂️</div>
              <h3 className="text-white mt-4 mb-2">Squads & Players</h3>
              <p className="text-sm text-slate-400">Detailed list of the 16 qualified teams, key players, drag-flick anchors, and predictions.</p>
              <span className="text-xs text-sky-400 font-bold block mt-4">Access Teams Hub →</span>
            </a>

            <a href="/live-scores" className="local-card block text-decoration-none transition-transform hover:-translate-y-2">
              <div className="local-icon">⚡</div>
              <h3 className="text-white mt-4 mb-2">Live Score Centre</h3>
              <p className="text-sm text-slate-400">Real-time play-by-play updates, card statistics, goal scorers, and penalty corner summaries.</p>
              <span className="text-xs text-sky-400 font-bold block mt-4">Access Scores Hub →</span>
            </a>

            <a href="/tickets" className="local-card block text-decoration-none transition-transform hover:-translate-y-2">
              <div className="local-icon">🎟️</div>
              <h3 className="text-white mt-4 mb-2">Tickets & Booking</h3>
              <p className="text-sm text-slate-400">Official ticket portal links, category-wise pricing, and stadium entrance instructions.</p>
              <span className="text-xs text-sky-400 font-bold block mt-4">Access Tickets Hub →</span>
            </a>

            <a href="/format" className="local-card block text-decoration-none transition-transform hover:-translate-y-2">
              <div className="local-icon">🔀</div>
              <h3 className="text-white mt-4 mb-2">Knockout Format</h3>
              <p className="text-sm text-slate-400">Crossover round matchups criteria, penalty shootout guidelines, and bracket rules.</p>
              <span className="text-xs text-sky-400 font-bold block mt-4">Access Format Hub →</span>
            </a>

            <a href="/points-table" className="local-card block text-decoration-none transition-transform hover:-translate-y-2">
              <div className="local-icon">📊</div>
              <h3 className="text-white mt-4 mb-2">Points Table Rules</h3>
              <p className="text-sm text-slate-400">Points scoring criteria, group stage classification rules, and tie-breaker parameters.</p>
              <span className="text-xs text-sky-400 font-bold block mt-4">Access Rules Hub →</span>
            </a>

            <a href="/history" className="local-card block text-decoration-none transition-transform hover:-translate-y-2">
              <div className="local-icon">🏆</div>
              <h3 className="text-white mt-4 mb-2">Winners History</h3>
              <p className="text-sm text-slate-400">FIH World Cup winners list since 1971, historical statistics, and titles leaderboard.</p>
              <span className="text-xs text-sky-400 font-bold block mt-4">Access History Hub →</span>
            </a>

            <a href="/hockey-world-cup-2026-schedule-india" className="local-card block text-decoration-none transition-transform hover:-translate-y-2" style={{ borderTop: "3px solid #FF9933" }}>
              <div className="local-icon">🇮🇳</div>
              <h3 className="text-white mt-4 mb-2">India at HWC 2026</h3>
              <p className="text-sm text-slate-400">Complete India men's & women's schedule, IST timings, Pool D fixtures, squad & key players guide.</p>
              <span className="text-xs font-bold block mt-4" style={{ color: "#FF9933" }}>India Team Guide →</span>
            </a>

            <a href="/hockey-world-cup-2026-schedule-pakistan" className="local-card block text-decoration-none transition-transform hover:-translate-y-2" style={{ borderTop: "3px solid #009900" }}>
              <div className="local-icon">🇵🇰</div>
              <h3 className="text-white mt-4 mb-2">Pakistan at HWC 2026</h3>
              <p className="text-sm text-slate-400">Pakistan men's schedule with PKT timings, India vs Pakistan derby spotlight, squad & player analysis.</p>
              <span className="text-xs font-bold block mt-4" style={{ color: "#009900" }}>Pakistan Team Guide →</span>
            </a>

            <a href="/hockey-world-cup-2026-groups" className="local-card block text-decoration-none transition-transform hover:-translate-y-2" style={{ borderTop: "3px solid #c00030" }}>
              <div className="local-icon">🏑</div>
              <h3 className="text-white mt-4 mb-2">Pool Groups Draw</h3>
              <p className="text-sm text-slate-400">All Men's & Women's pool groups (A–D), team rankings, key pool clashes and Second Stage format explained.</p>
              <span className="text-xs text-sky-400 font-bold block mt-4">See All Groups →</span>
            </a>

            <a href="/news" className="local-card block text-decoration-none transition-transform hover:-translate-y-2">
              <div className="local-icon">📰</div>
              <h3 className="text-white mt-4 mb-2">Latest News & Blog</h3>
              <p className="text-sm text-slate-400">Daily injury reports, training camp updates, official squads, and press conference reports.</p>
              <span className="text-xs text-sky-400 font-bold block mt-4">Read News Hub →</span>
            </a>

            <a href="/matches" className="local-card block text-decoration-none transition-transform hover:-translate-y-2">
              <div className="local-icon">⚔️</div>
              <h3 className="text-white mt-4 mb-2">Match Previews</h3>
              <p className="text-sm text-slate-400">Head-to-head records, lineup predictions, form guides, and expert predictions for all 38 matches.</p>
              <span className="text-xs text-sky-400 font-bold block mt-4">Explore Previews →</span>
            </a>

            <a href="/players" className="local-card block text-decoration-none transition-transform hover:-translate-y-2">
              <div className="local-icon">🏃‍♂️</div>
              <h3 className="text-white mt-4 mb-2">Player Profiles</h3>
              <p className="text-sm text-slate-400">Deep-dive profiles, drag-flick efficiency stats, international caps, and key milestones of top stars.</p>
              <span className="text-xs text-sky-400 font-bold block mt-4">Browse Player Directory →</span>
            </a>
          </div>
        </section>

        {/* OFFICIAL QUALIFIED POOLS */}
        <section id="pools" className="my-12">
          <div className="section-title-wrap">
            <h2>Official FIH Hockey World Cup 2026 Pools</h2>
            <p>Complete division breakdown for the Men's and Women's teams competing in the group stage.</p>
          </div>

          <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Men's Tournament Pools</h3>
          <div className="pools-container" style={{ marginBottom: "3rem" }}>
            {/* Pool A */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool A</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-netherlands" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px" }} /> Netherlands
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-argentina" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/ar.png" width="20" height="14" alt="Argentina flag" style={{ borderRadius: "2px" }} /> Argentina
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-chile" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/cl.png" width="20" height="14" alt="Chile flag" style={{ borderRadius: "2px" }} /> Chile
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-new-zealand" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/nz.png" width="20" height="14" alt="New Zealand flag" style={{ borderRadius: "2px" }} /> New Zealand
                  </a>
                </li>
              </ul>
            </div>
            {/* Pool B */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool B</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-germany" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px" }} /> Germany
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-malaysia" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/my.png" width="20" height="14" alt="Malaysia flag" style={{ borderRadius: "2px" }} /> Malaysia
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-belgium" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px" }} /> Belgium
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-france" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/fr.png" width="20" height="14" alt="France flag" style={{ borderRadius: "2px" }} /> France
                  </a>
                </li>
              </ul>
            </div>
            {/* Pool C */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool C</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-australia" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px" }} /> Australia
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-ireland" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/ie.png" width="20" height="14" alt="Ireland flag" style={{ borderRadius: "2px" }} /> Ireland
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-spain" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/es.png" width="20" height="14" alt="Spain flag" style={{ borderRadius: "2px" }} /> Spain
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-south-africa" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/za.png" width="20" height="14" alt="South Africa flag" style={{ borderRadius: "2px" }} /> South Africa
                  </a>
                </li>
              </ul>
            </div>
            {/* Pool D */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool D</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-india" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px" }} /> India
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-wales" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/gb-wls.png" width="20" height="14" alt="Wales flag" style={{ borderRadius: "2px" }} /> Wales
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-england" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/gb-eng.png" width="20" height="14" alt="England flag" style={{ borderRadius: "2px" }} /> England
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-pakistan" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px" }} /> Pakistan
                  </a>
                </li>
              </ul>
            </div>
          </div>


          <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-rose-400 pl-4 italic" style={{ marginTop: "2.5rem" }}>Women's Tournament Pools</h3>
          <div className="pools-container">
            {/* Pool A */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool A</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-netherlands" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px" }} /> Netherlands
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-australia" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px" }} /> Australia
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-japan" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/jp.png" width="20" height="14" alt="Japan flag" style={{ borderRadius: "2px" }} /> Japan
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-chile" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/cl.png" width="20" height="14" alt="Chile flag" style={{ borderRadius: "2px" }} /> Chile
                  </a>
                </li>
              </ul>
            </div>
            {/* Pool B */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool B</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-argentina" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/ar.png" width="20" height="14" alt="Argentina flag" style={{ borderRadius: "2px" }} /> Argentina
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-germany" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px" }} /> Germany
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-scotland" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/gb-sct.png" width="20" height="14" alt="Scotland flag" style={{ borderRadius: "2px" }} /> Scotland
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-usa" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/us.png" width="20" height="14" alt="USA flag" style={{ borderRadius: "2px" }} /> United States
                  </a>
                </li>
              </ul>
            </div>
            {/* Pool C */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool C</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-belgium" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px" }} /> Belgium
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-spain" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/es.png" width="20" height="14" alt="Spain flag" style={{ borderRadius: "2px" }} /> Spain
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-new-zealand" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/nz.png" width="20" height="14" alt="New Zealand flag" style={{ borderRadius: "2px" }} /> New Zealand
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-france" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/fr.png" width="20" height="14" alt="France flag" style={{ borderRadius: "2px" }} /> France
                  </a>
                </li>
              </ul>
            </div>
            {/* Pool D */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool D</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-china" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/cn.png" width="20" height="14" alt="China flag" style={{ borderRadius: "2px" }} /> China
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-india" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px" }} /> India
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-england" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/gb-eng.png" width="20" height="14" alt="England flag" style={{ borderRadius: "2px" }} /> England
                  </a>
                </li>
                <li className="pool-item">
                  <a href="/hockey-world-cup-2026-schedule-south-africa" className="pool-item-link">
                    <img src="https://flagcdn.com/w40/za.png" width="20" height="14" alt="South Africa flag" style={{ borderRadius: "2px" }} /> South Africa
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* LOCAL ENVIRONMENTAL FACTORS SECTION */}
        <section id="locals" className="my-16">
          <div className="section-title-wrap">
            <h2>Local Geographic & Travel Guides</h2>
            <p>Important localized details for hockey fans planning visits to Belgium and the Netherlands.</p>
          </div>

          <div className="local-grid">
            
            {/* Wagener Stadium */}
            <div className="local-card">
              <div className="local-icon">🏟️</div>
              <h3 className="text-white font-bold italic">🇳🇱 Wagener Stadium, Amstelveen</h3>
              <p>Located in the beautiful North Holland province, Amstelveen operates under a temperate oceanic climate. The stadium turf features modern water-based synthetic grass, which requires high humidity management. Fans should expect quick transitions and potential rain delay procedures.</p>
              
              <div className="local-meta">
                <div className="local-meta-item">
                  <span>Postal Zip Code:</span>
                  <strong>1182 AM (Amstelveen Central)</strong>
                </div>
                <div className="local-meta-item">
                  <span>Transit Route:</span>
                  <strong>Amsterdam Metro Line 25 / Tram 5</strong>
                </div>
                <div className="local-meta-item">
                  <span>Nearby Landmark:</span>
                  <strong>Amsterdamse Bos Forest Park</strong>
                </div>
                <div className="local-meta-item">
                  <span>Climate Issue:</span>
                  <strong>High evening precipitation; water logs possibility</strong>
                </div>
              </div>
            </div>

            {/* Belfius Hockey Arena */}
            <div className="local-card">
              <div className="local-icon">🏟️</div>
              <h3 className="text-white font-bold italic">🇧🇪 Belfius Hockey Arena, Wavre</h3>
              <p>Situated in the Walloon Brabant province of Belgium, Wavre is prone to sudden summer showers. The newly built stadium has integrated eco-drainage channels to comply with the Royal Belgian Hockey Association's carbon-neutral standard.</p>
              
              <div className="local-meta">
                <div className="local-meta-item">
                  <span>Postal Zip Code:</span>
                  <strong>1300 (Wavre Municipal)</strong>
                </div>
                <div className="local-meta-item">
                  <span>Transit Route:</span>
                  <strong>TEC Bus Route 20 / Wavre Railway Station</strong>
                </div>
                <div className="local-meta-item">
                  <span>Nearby Landmark:</span>
                  <strong>Walibi Belgium Amusement Park (Right next door)</strong>
                </div>
                <div className="local-meta-item">
                  <span>Climate Issue:</span>
                  <strong>Variable humidity; evening wind shifts</strong>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* EEAT SIGNALS: EDITOR PROFILE */}
        <section className="my-16">
          <div className="author-card">
            <div className="author-flex">
              <div className="author-avatar">MD</div>
              <div className="author-info">
                <h4>Marc Devos</h4>
                <p>Lead Belgian Hockey Analyst & Columnist</p>
              </div>
            </div>
            <p className="author-bio">
              Marc Devos is an experienced sports journalist and hockey analyst with over 12 years of experience covering the Belgian Red Lions national team and international field hockey championships. He provides local insights, pitch condition updates, and verified broadcast scheduling details.
            </p>
            <div className="text-xs text-slate-500 italic border-t border-slate-800 pt-4">
              Disclaimer: Match fixtures and start times are subject to last-minute scheduling changes by the FIH. Please cross-reference with official listings on 
              <a href="https://fih.hockey" target="_blank" rel="noopener noreferrer" className="text-sky-500 ml-1">fih.hockey</a>.
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section id="faq" className="my-12">
          <div className="section-title-wrap">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>Everything you need to know about the FIH Hockey World Cup 2026 schedule and streams.</p>
          </div>

          <FaqAccordion items={faqItems} />
        </section>
      </main>

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
}
