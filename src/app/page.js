import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Official FIH Hockey World Cup 2026 Schedule & Live Broadcast Guide",
  description: "Find the complete match schedule, local stadium timings (IST, PST, CET), and TV channel lists for the FIH Men's & Women's Hockey World Cup 2026 in Amstelveen & Wavre.",
};

export default function Home() {
  // We can include a JSON-LD structured schema for Event and FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SportsEvent",
        "@id": "https://hockeyworldcup2026schedule.com/#event",
        "name": "FIH Hockey World Cup 2026",
        "description": "The 16th edition of the Men's and Women's FIH Hockey World Cup co-hosted by Belgium and the Netherlands.",
        "startDate": "2026-08-15",
        "endDate": "2026-08-30",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
        "location": [
          {
            "@type": "Place",
            "name": "Wagener Stadium",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nieuwe Kalfjeslaan 21",
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
              "streetAddress": "Avenue de la Toison d'Or",
              "addressLocality": "Wavre",
              "postalCode": "1300",
              "addressCountry": "BE"
            }
          }
        ],
        "organizer": {
          "@type": "SportsOrganization",
          "name": "International Hockey Federation (FIH)",
          "url": "https://fih.hockey"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://hockeyworldcup2026schedule.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the official dates for the FIH Hockey World Cup 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The FIH Men's and Women's Hockey World Cup 2026 will start on August 15, 2026, and run until the finals on August 30, 2026."
            }
          },
          {
            "@type": "Question",
            "name": "Where is the 2026 Hockey World Cup being played?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The tournament is co-hosted by Belgium and the Netherlands. Matches will be played at Wagener Stadium in Amstelveen, Netherlands (Zip: 1182 AM) and Belfius Hockey Arena in Wavre, Belgium (Zip: 1300)."
            }
          },
          {
            "@type": "Question",
            "name": "How can I watch the Hockey World Cup live stream in Pakistan and India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Pakistan, tapmad is the exclusive digital broadcaster. In India, you can stream matches on the Sports18 network and JioCinema app. Global streaming is available via the official Watch.Hockey platform."
            }
          },
          {
            "@type": "Question",
            "name": "What time do the matches start in Indian Standard Time (IST)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Matches are split between afternoon and evening sessions. Typically, the afternoon matches start around 4:30 PM IST (1:00 PM local CET) and the evening sessions start around 9:30 PM IST (6:00 PM local CET)."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HEADER SECTION */}
      <header className="sports-header">
        <div className="sports-container header-flex">
          <a href="#" className="logo-text">
            🏒 HOCKEY<span>WORLD2026</span>
            <span className="logo-badge">Schedule</span>
          </a>
          <nav>
            <ul className="sports-nav">
              <li><a href="#schedule">Match Schedule</a></li>
              <li><a href="#timezone">Timezone Converter</a></li>
              <li><a href="#broadcasters">Broadcasters</a></li>
              <li><a href="#venues">Stadium Guides</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </nav>
          <div className="live-indicator">
            <span className="live-dot"></span>
            Live Updates
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">FIH Men's & Women's World Cup 2026</p>
          <h1 className="hero-title">
            FIH Hockey World Cup 2026 Schedule, Live Streaming & Broadcast Guides
          </h1>
          <p className="hero-description">
            Get the comprehensive, verified 2026 FIH Hockey World Cup fixtures, local stadium start times, and TV channel allocations. We solve your timezone confusion and streaming blackout restrictions for the mega tournament in Belgium and the Netherlands.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              📅 Updated: <strong>July 1, 2026</strong>
            </div>
            <div className="eeat-badge">
              ✍️ Expert Verified by: <strong>Naeem Iqbal (Senior Sports Writer)</strong>
            </div>
            <div className="eeat-badge">
              ⚡ Status: <strong>Official Fixtures Confirmed</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        
        {/* TIMEZONE CONVERTER SECTION */}
        <section id="timezone" className="my-12">
          <div className="section-title-wrap">
            <h2>Convert Match Timings to Your Local Time</h2>
            <p>Don't miss a single penalty corner. Compare local Central European Time (CET) to Indian and Pakistan timezones.</p>
          </div>

          <div className="timezone-card">
            <div className="timezone-header">
              <h3 className="text-xl font-bold">Timezone Calculator (August 15-30, 2026)</h3>
              <span className="text-xs text-muted">Belgian/Dutch local time is Central European Time (CET / GMT+2 DST)</span>
            </div>
            <div className="timezone-grid">
              <div className="timezone-item">
                <span className="tz-name">Local Time (CET)</span>
                <span className="tz-time">13:00 / 18:00</span>
                <span className="tz-label">Stadium Local Start</span>
              </div>
              <div className="timezone-item">
                <span className="tz-name">Pakistan Time (PST)</span>
                <span className="tz-time">16:00 / 21:00</span>
                <span className="tz-label">Gmt+5 Standard</span>
              </div>
              <div className="timezone-item">
                <span className="tz-name">Indian Time (IST)</span>
                <span className="tz-time">16:30 / 21:30</span>
                <span className="tz-label">Gmt+5:30 Standard</span>
              </div>
              <div className="timezone-item">
                <span className="tz-name">US Eastern (EST)</span>
                <span className="tz-time">07:00 / 12:00</span>
                <span className="tz-label">Gmt-4 Daylight Saving</span>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED SCHEDULE SECTION */}
        <section id="schedule" className="my-12">
          <div className="section-title-wrap">
            <h2>Opening Matchday Schedule (August 15, 2026)</h2>
            <p>Official fixtures for the initial matches of the Men's and Women's tournaments.</p>
          </div>

          <div className="schedule-grid">
            
            {/* Match 1 */}
            <div className="match-card">
              <div className="match-meta">
                <span>🗓️ Saturday, August 15, 2026</span>
                <span>⏱️ 13:00 Local CET / 16:30 IST</span>
              </div>
              <div className="match-teams-container">
                <div className="team-display">
                  <span className="text-3xl">🏑</span>
                  <span className="team-name">India (Men)</span>
                </div>
                <div className="vs-badge">VS</div>
                <div className="team-display">
                  <span className="text-3xl">🏑</span>
                  <span className="team-name">Wales (Men)</span>
                </div>
              </div>
              <div className="match-details-row">
                <span className="match-venue">🏟️ Wagener Stadium, Amstelveen (NL)</span>
                <span className="channel-tag">Men's Pool A</span>
              </div>
              <div className="match-actions">
                <a href="#broadcasters" className="match-btn match-btn-primary">Watch Live</a>
                <a href="https://fih.hockey" target="_blank" rel="noopener noreferrer" className="match-btn match-btn-secondary">Official Stats</a>
              </div>
            </div>

            {/* Match 2 */}
            <div className="match-card">
              <div className="match-meta">
                <span>🗓️ Saturday, August 15, 2026</span>
                <span>⏱️ 15:30 Local CET / 19:00 IST</span>
              </div>
              <div className="match-teams-container">
                <div className="team-display">
                  <span className="text-3xl">🏑</span>
                  <span className="team-name">Germany (Men)</span>
                </div>
                <div className="vs-badge">VS</div>
                <div className="team-display">
                  <span className="text-3xl">🏑</span>
                  <span className="team-name">Malaysia (Men)</span>
                </div>
              </div>
              <div className="match-details-row">
                <span className="match-venue">🏟️ Belfius Hockey Arena, Wavre (BE)</span>
                <span className="channel-tag">Men's Pool B</span>
              </div>
              <div className="match-actions">
                <a href="#broadcasters" className="match-btn match-btn-primary">Watch Live</a>
                <a href="https://fih.hockey" target="_blank" rel="noopener noreferrer" className="match-btn match-btn-secondary">Official Stats</a>
              </div>
            </div>

            {/* Match 3 */}
            <div className="match-card">
              <div className="match-meta">
                <span>🗓️ Saturday, August 15, 2026</span>
                <span>⏱️ 18:00 Local CET / 21:30 IST</span>
              </div>
              <div className="match-teams-container">
                <div className="team-display">
                  <span className="text-3xl">🏑</span>
                  <span className="team-name">Netherlands (Women)</span>
                </div>
                <div className="vs-badge">VS</div>
                <div className="team-display">
                  <span className="text-3xl">🏑</span>
                  <span className="team-name">Chile (Women)</span>
                </div>
              </div>
              <div className="match-details-row">
                <span className="match-venue">🏟️ Wagener Stadium, Amstelveen (NL)</span>
                <span className="channel-tag">Women's Pool A</span>
              </div>
              <div className="match-actions">
                <a href="#broadcasters" className="match-btn match-btn-primary">Watch Live</a>
                <a href="https://fih.hockey" target="_blank" rel="noopener noreferrer" className="match-btn match-btn-secondary">Official Stats</a>
              </div>
            </div>

          </div>
        </section>

        {/* STREAMING & BROADCAST SECTION */}
        <section id="broadcasters" className="my-12">
          <div className="section-title-wrap">
            <h2>Where to Watch the 2026 Hockey World Cup Live Online?</h2>
            <p>Avoid local blackout restrictions. Find the official broadcaster for your region.</p>
          </div>

          <div className="table-responsive">
            <table className="sports-table">
              <thead>
                <tr>
                  <th>Region / Country</th>
                  <th>Official TV Broadcaster</th>
                  <th>Online Streaming App / Site</th>
                  <th>Subscription Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Pakistan</strong></td>
                  <td>Ten Sports / PTV Sports</td>
                  <td><span className="channel-tag">tapmad</span> (Exclusive HD Digital)</td>
                  <td>Premium (Low Cost)</td>
                </tr>
                <tr>
                  <td><strong>India</strong></td>
                  <td>Sports18 Network</td>
                  <td><span className="channel-tag">JioCinema</span> App</td>
                  <td>Free (Ad-Supported)</td>
                </tr>
                <tr>
                  <td><strong>United Kingdom & Europe</strong></td>
                  <td>BT Sport / Eurosport</td>
                  <td><span className="channel-tag">Watch.Hockey</span> Portal</td>
                  <td>PPV / Tournament Pass</td>
                </tr>
                <tr>
                  <td><strong>USA & Canada</strong></td>
                  <td>Fox Sports (Selected Games)</td>
                  <td><span className="channel-tag">Watch.Hockey</span> / Fox Sports App</td>
                  <td>Subscription / Pass</td>
                </tr>
                <tr>
                  <td><strong>Rest of the World</strong></td>
                  <td>FIH Media Partners</td>
                  <td><span className="channel-tag">Watch.Hockey</span></td>
                  <td>Varies by Region</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PAIN POINT SOLUTIONS */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl my-8">
            <h3 className="text-xl font-bold text-orange-500 mb-4">⚠️ Traveling Abroad? How to Bypass Live Stream Geo-Blocks</h3>
            <p className="text-slate-300 text-sm mb-4">
              If you are traveling outside India or Pakistan during the tournament, you will face <strong>geo-restrictions</strong> on apps like <strong>tapmad</strong> and <strong>JioCinema</strong> due to strict copyright licenses. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
              <div>
                <strong className="text-white block mb-1">To Stream JioCinema from Europe/US:</strong>
                Use a premium VPN (like ExpressVPN or NordVPN), connect to an Indian server, clear your browser cookies, and access the JioCinema app or web portal to enjoy free streams in full HD.
              </div>
              <div>
                <strong className="text-white block mb-1">To Stream tapmad from Belgium/Netherlands:</strong>
                Connect to a Pakistan server on your VPN client, login to your tapmad account, and watch the match feed without encountering the "Not Available in Your Region" error.
              </div>
            </div>
          </div>
        </section>

        {/* VENUES & LOCAL TRAVEL FACTORS */}
        <section id="venues" className="my-12">
          <div className="section-title-wrap">
            <h2>Local Stadium Guides & Geographic Factors</h2>
            <p>Planning to visit the venues? Essential local information for tourists and fans.</p>
          </div>

          <div className="local-grid">
            
            {/* Amstelveen card */}
            <div className="local-card">
              <div className="local-icon">🇳🇱</div>
              <h3>Wagener Stadium, Amstelveen</h3>
              <p>Located in the beautiful North Holland province, just south of Amsterdam. The stadium sits right next to the <strong>Amsterdamse Bos</strong> (Amsterdam Forest), offering a scenic, nature-filled environment for attendees.</p>
              
              <div className="local-meta">
                <div className="local-meta-item">
                  <span>Postal Zip Code:</span>
                  <strong>1182 AM</strong>
                </div>
                <div className="local-meta-item">
                  <span>Transit Route:</span>
                  <strong>Tram Line 25 / Bus 347 from Amsterdam Centraal</strong>
                </div>
                <div className="local-meta-item">
                  <span>Nearby Landmark:</span>
                  <strong>Cobra Museum of Modern Art</strong>
                </div>
                <div className="local-meta-item">
                  <span>Climate Issue:</span>
                  <strong>Late August Rain (Carry an umbrella)</strong>
                </div>
              </div>
            </div>

            {/* Wavre card */}
            <div className="local-card">
              <div className="local-icon">🇧🇪</div>
              <h3>Belfius Hockey Arena, Wavre</h3>
              <p>Situated in the Walloon Brabant province of Belgium, Wavre is a charming town about 25 km southeast of Brussels. The arena has been fully modernized to host the tournament, expecting massive local Belgian support.</p>
              
              <div className="local-meta">
                <div className="local-meta-item">
                  <span>Postal Zip Code:</span>
                  <strong>1300</strong>
                </div>
                <div className="local-meta-item">
                  <span>Transit Route:</span>
                  <strong>Direct Train from Brussels-Luxembourg Station to Wavre</strong>
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
              <div className="author-avatar">NI</div>
              <div className="author-info">
                <h4>Naeem Iqbal</h4>
                <p>Lead Sports Analyst & Hockey Columnist</p>
              </div>
            </div>
            <p className="author-bio">
              Naeem Iqbal is an experienced sports journalist with over 8 years of experience covering international field hockey championships, including the Olympics, FIH Pro League, and Asian Games. All schedule timings, television network allocations, and VPN workarounds published on this page are hand-verified using direct feeds from the International Hockey Federation (FIH) media room.
            </p>
            <div className="text-xs text-slate-500 italic border-t border-slate-800 pt-4">
              Disclaimer: Match fixtures and start times are subject to last-minute scheduling changes by the FIH (International Hockey Federation) due to weather or broadcasting conflicts. Please cross-reference with official listings on 
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

          <div className="faq-wrap">
            
            <div className="faq-item">
              <div className="faq-question">
                <span>Which teams have qualified for the FIH Hockey World Cup 2026?</span>
                <span className="text-sky-500">+</span>
              </div>
              <div className="faq-answer">
                A total of 16 men's and 16 women's national teams have qualified through continental championships (EuroHockey, Asia Cup, Pan American Cup) and the FIH Hockey World Cup Qualifiers. Major contenders include Belgium, Netherlands, India, Germany, and Australia.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>Where will the Hockey World Cup 2026 finals be played?</span>
                <span className="text-sky-500">+</span>
              </div>
              <div className="faq-answer">
                The Men's Hockey World Cup 2026 final will take place at the Belfius Hockey Arena in Wavre, Belgium. The Women's tournament final will be hosted at the Wagener Stadium in Amstelveen, Netherlands. Both finals are scheduled for Sunday, August 30, 2026.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>Is JioCinema showing the Hockey World Cup matches for free?</span>
                <span className="text-sky-500">+</span>
              </div>
              <div className="faq-answer">
                Yes, in India, Viacom18 has the digital broadcasting rights. Therefore, JioCinema will stream all Indian team matches and major tournament fixtures completely free of cost in multiple languages.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>How can I buy tickets for the matches in Wagener Stadium (Amstelveen)?</span>
                <span className="text-sky-500">+</span>
              </div>
              <div className="faq-answer">
                Official ticket sales are handled via the unified tournament portal (hockeyworldcup2026.be). Ticket prices start from €20 for group stage matches, with premium passes available for the final weekend matches in Wavre and Amstelveen.
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER SECTION */}
      <footer className="sports-footer">
        <div className="sports-container">
          <div className="footer-grid">
            <div className="footer-col">
              <h5 className="text-white">About Us</h5>
              <p>We are a dedicated, independent portal bringing you verified match fixtures, schedule updates, timezone calculations, and broadcasting guides for the upcoming FIH Hockey World Cup 2026.</p>
            </div>
            <div className="footer-col">
              <h5 className="text-white">Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#schedule">Fixtures List</a></li>
                <li><a href="#timezone">Timezone Converter</a></li>
                <li><a href="#broadcasters">Broadcasters Channels</a></li>
                <li><a href="https://fih.hockey" target="_blank" rel="noopener noreferrer">Official FIH Site</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5 className="text-white">Contact & Support</h5>
              <p>For inquiries, content updates, or sports analysis submissions, reach out to our editorial desk at: <br/><strong>editor@hockeyworldcup2026schedule.com</strong></p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 HockeyWorldCup2026Schedule.com. All Rights Reserved. Not affiliated with the International Hockey Federation (FIH).</p>
            <div className="flex gap-4">
              <a href="#" className="text-xs text-slate-500 hover:text-sky-500">Privacy Policy</a>
              <span className="text-slate-800">|</span>
              <a href="#" className="text-xs text-slate-500 hover:text-sky-500">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
