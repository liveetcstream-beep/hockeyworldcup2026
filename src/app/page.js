import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScheduleAndConverter from "./components/ScheduleAndConverter";
import FaqAccordion from "./components/FaqAccordion";

export const metadata = {
  title: { absolute: "FIH Hockey World Cup 2026: Schedule, Teams & Live Updates" },
  description: "Get the complete, verified match schedule, timezone conversions, and live streaming options for the FIH Hockey World Cup 2026.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com",
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
            FIH Hockey World Cup 2026: Schedule, Teams & Live Updates
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
        {/* TOPICAL AUTHORITY HUBS NAVIGATION SECTION */}
        <section id="hubs" className="my-12">
          <div className="section-title-wrap">
            <h2>Hockey World Cup 2026 Coverage Directory</h2>
            <p>Select a dedicated section below to dive deeper into team squads, transit maps, and live streaming portals.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/broadcasters" className="local-card block text-decoration-none transition-transform hover:-translate-y-2">
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

            <a href="/india-hockey-world-cup-2026" className="local-card block text-decoration-none transition-transform hover:-translate-y-2" style={{ borderTop: "3px solid #FF9933" }}>
              <div className="local-icon">🇮🇳</div>
              <h3 className="text-white mt-4 mb-2">India at HWC 2026</h3>
              <p className="text-sm text-slate-400">Complete India men's & women's schedule, IST timings, Pool D fixtures, squad & key players guide.</p>
              <span className="text-xs font-bold block mt-4" style={{ color: "#FF9933" }}>India Team Guide →</span>
            </a>

            <a href="/pakistan-hockey-world-cup-2026" className="local-card block text-decoration-none transition-transform hover:-translate-y-2" style={{ borderTop: "3px solid #009900" }}>
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
          </div>
        </section>
        
        {/* INTERACTIVE SCHEDULE AND TIMEZONE CONVERTER CLIENT CONTAINER */}
        <ScheduleAndConverter />

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
                  <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px" }} /> Netherlands
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/ar.png" width="20" height="14" alt="Argentina flag" style={{ borderRadius: "2px" }} /> Argentina
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/cl.png" width="20" height="14" alt="Chile flag" style={{ borderRadius: "2px" }} /> Chile
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/nz.png" width="20" height="14" alt="New Zealand flag" style={{ borderRadius: "2px" }} /> New Zealand
                </li>
              </ul>
            </div>
            {/* Pool B */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool B</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px" }} /> Germany
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/my.png" width="20" height="14" alt="Malaysia flag" style={{ borderRadius: "2px" }} /> Malaysia
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px" }} /> Belgium
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/fr.png" width="20" height="14" alt="France flag" style={{ borderRadius: "2px" }} /> France
                </li>
              </ul>
            </div>
            {/* Pool C */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool C</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px" }} /> Australia
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/ie.png" width="20" height="14" alt="Ireland flag" style={{ borderRadius: "2px" }} /> Ireland
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/es.png" width="20" height="14" alt="Spain flag" style={{ borderRadius: "2px" }} /> Spain
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/za.png" width="20" height="14" alt="South Africa flag" style={{ borderRadius: "2px" }} /> South Africa
                </li>
              </ul>
            </div>
            {/* Pool D */}
            <div className="pool-card">
              <div className="pool-header"><h3>Pool D</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px" }} /> India
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-wls.png" width="20" height="14" alt="Wales flag" style={{ borderRadius: "2px" }} /> Wales
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-eng.png" width="20" height="14" alt="England flag" style={{ borderRadius: "2px" }} /> England
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px" }} /> Pakistan
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
                  <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px" }} /> Netherlands
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px" }} /> Australia
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/jp.png" width="20" height="14" alt="Japan flag" style={{ borderRadius: "2px" }} /> Japan
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/cl.png" width="20" height="14" alt="Chile flag" style={{ borderRadius: "2px" }} /> Chile
                </li>
              </ul>
            </div>
            {/* Pool B */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool B</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/ar.png" width="20" height="14" alt="Argentina flag" style={{ borderRadius: "2px" }} /> Argentina
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px" }} /> Germany
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-sct.png" width="20" height="14" alt="Scotland flag" style={{ borderRadius: "2px" }} /> Scotland
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/us.png" width="20" height="14" alt="USA flag" style={{ borderRadius: "2px" }} /> United States
                </li>
              </ul>
            </div>
            {/* Pool C */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool C</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px" }} /> Belgium
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/es.png" width="20" height="14" alt="Spain flag" style={{ borderRadius: "2px" }} /> Spain
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/nz.png" width="20" height="14" alt="New Zealand flag" style={{ borderRadius: "2px" }} /> New Zealand
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/fr.png" width="20" height="14" alt="France flag" style={{ borderRadius: "2px" }} /> France
                </li>
              </ul>
            </div>
            {/* Pool D */}
            <div className="pool-card" style={{ borderTop: "3px solid #f43f5e" }}>
              <div className="pool-header" style={{ background: "rgba(244, 63, 94, 0.1)" }}><h3 style={{ color: "#f43f5e" }}>Pool D</h3></div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/cn.png" width="20" height="14" alt="China flag" style={{ borderRadius: "2px" }} /> China
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px" }} /> India
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-eng.png" width="20" height="14" alt="England flag" style={{ borderRadius: "2px" }} /> England
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/za.png" width="20" height="14" alt="South Africa flag" style={{ borderRadius: "2px" }} /> South Africa
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
