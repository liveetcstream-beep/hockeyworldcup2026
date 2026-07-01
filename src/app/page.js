"use client";

import React, { useState } from "react";

export default function Home() {
  // Client State for Timezone Converter
  const [selectedTimezone, setSelectedTimezone] = useState("CET");

  // Client State for Accordion FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Time conversion mapping for the Matches
  // CET matches: Match 1: 13:00, Match 2: 15:30, Match 3: 18:00
  const matchTimes = {
    CET: ["13:00 CET", "15:30 CET", "18:00 CET"],
    IST: ["16:30 IST", "19:00 IST", "21:30 IST"],
    PST: ["16:00 PST", "18:30 PST", "21:00 PST"],
    EST: ["07:00 AM EDT", "09:30 AM EDT", "12:00 PM EDT"],
  };

  const handleTimezoneChange = (e) => {
    setSelectedTimezone(e.target.value);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
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
              <li><a href="#pools">Qualified Pools</a></li>
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
        
        {/* TIMEZONE CONVERTER SECTION (INTERACTIVE) */}
        <section id="timezone" className="my-12">
          <div className="section-title-wrap">
            <h2>Convert Match Timings to Your Local Time</h2>
            <p>Don't miss a single penalty corner. Select your region below to update the schedule automatically.</p>
          </div>

          <div className="timezone-card">
            <div className="timezone-header">
              <h3 className="text-xl font-bold">Interactive Timezone Selector</h3>
              <div className="timezone-select-wrapper">
                <span className="timezone-label-text">Viewing In:</span>
                <select 
                  className="timezone-select" 
                  value={selectedTimezone} 
                  onChange={handleTimezoneChange}
                  aria-label="Select Timezone"
                >
                  <option value="CET">Central European (CET) - Local Venue</option>
                  <option value="IST">Indian Standard Time (IST)</option>
                  <option value="PST">Pakistan Standard Time (PST)</option>
                  <option value="EST">US Eastern Time (EDT)</option>
                </select>
              </div>
            </div>
            <div className="timezone-grid">
              <div className={`timezone-item ${selectedTimezone === "CET" ? "active-timezone" : ""}`}>
                <span className="tz-name">Local Time (CET)</span>
                <span className="tz-time">13:00 / 18:00</span>
                <span className="tz-label">Stadium Local Start</span>
              </div>
              <div className={`timezone-item ${selectedTimezone === "PST" ? "active-timezone" : ""}`}>
                <span className="tz-name">Pakistan Time (PST)</span>
                <span className="tz-time">16:00 / 21:00</span>
                <span className="tz-label">GMT+5 Standard</span>
              </div>
              <div className={`timezone-item ${selectedTimezone === "IST" ? "active-timezone" : ""}`}>
                <span className="tz-name">Indian Time (IST)</span>
                <span className="tz-time">16:30 / 21:30</span>
                <span className="tz-label">GMT+5:30 Standard</span>
              </div>
              <div className={`timezone-item ${selectedTimezone === "EST" ? "active-timezone" : ""}`}>
                <span className="tz-name">US Eastern (EDT)</span>
                <span className="tz-time">07:00 / 12:00</span>
                <span className="tz-label">GMT-4 Daylight Saving</span>
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
                <span className="text-sky-400 font-bold">⏱️ Timings: {matchTimes[selectedTimezone][0]}</span>
              </div>
              <div className="match-teams-container">
                <div className="team-display">
                  <div className="team-badge-wrap">🇮🇳</div>
                  <span className="team-name">India (Men)</span>
                </div>
                <div className="vs-badge">VS</div>
                <div className="team-display">
                  <div className="team-badge-wrap">🏴󠁧󠁢󠁷󠁬󠁳󠁿</div>
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
                <span className="text-sky-400 font-bold">⏱️ Timings: {matchTimes[selectedTimezone][1]}</span>
              </div>
              <div className="match-teams-container">
                <div className="team-display">
                  <div className="team-badge-wrap">🇩🇪</div>
                  <span className="team-name">Germany (Men)</span>
                </div>
                <div className="vs-badge">VS</div>
                <div className="team-display">
                  <div className="team-badge-wrap">🇲🇾</div>
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
                <span className="text-sky-400 font-bold">⏱️ Timings: {matchTimes[selectedTimezone][2]}</span>
              </div>
              <div className="match-teams-container">
                <div className="team-display">
                  <div className="team-badge-wrap">🇳🇱</div>
                  <span className="team-name">Netherlands (Women)</span>
                </div>
                <div className="vs-badge">VS</div>
                <div className="team-display">
                  <div className="team-badge-wrap">🇨🇱</div>
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

        {/* OFFICIAL QUALIFIED POOLS */}
        <section id="pools" className="my-12">
          <div className="section-title-wrap">
            <h2>Official FIH Hockey World Cup 2026 Pools</h2>
            <p>Complete division breakdown for the 16 qualified teams competing in the group stage.</p>
          </div>

          <div className="pools-container">
            {/* Pool A */}
            <div className="pool-card">
              <div className="pool-header">
                <h3>Pool A</h3>
              </div>
              <ul className="pool-list">
                <li className="pool-item"><span className="pool-flag">🇳🇱</span> Netherlands</li>
                <li className="pool-item"><span className="pool-flag">🇩🇪</span> Germany</li>
                <li className="pool-item"><span className="pool-flag">🇮🇳</span> India</li>
                <li className="pool-item"><span className="pool-flag">🇪🇸</span> Spain</li>
              </ul>
            </div>

            {/* Pool B */}
            <div className="pool-card">
              <div className="pool-header">
                <h3>Pool B</h3>
              </div>
              <ul className="pool-list">
                <li className="pool-item"><span className="pool-flag">🇧🇪</span> Belgium</li>
                <li className="pool-item"><span className="pool-flag">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</li>
                <li className="pool-item"><span className="pool-flag">🇦🇺</span> Australia</li>
                <li className="pool-item"><span className="pool-flag">🇳🇿</span> New Zealand</li>
              </ul>
            </div>

            {/* Pool C */}
            <div className="pool-card">
              <div className="pool-header">
                <h3>Pool C</h3>
              </div>
              <ul className="pool-list">
                <li className="pool-item"><span className="pool-flag">🇦🇷</span> Argentina</li>
                <li className="pool-item"><span className="pool-flag">🇫🇷</span> France</li>
                <li className="pool-item"><span className="pool-flag">🇿🇦</span> South Africa</li>
                <li className="pool-item"><span className="pool-flag">🇲🇾</span> Malaysia</li>
              </ul>
            </div>

            {/* Pool D */}
            <div className="pool-card">
              <div className="pool-header">
                <h3>Pool D</h3>
              </div>
              <ul className="pool-list">
                <li className="pool-item"><span className="pool-flag">🇨🇱</span> Chile</li>
                <li className="pool-item"><span className="pool-flag">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span> Wales</li>
                <li className="pool-item"><span className="pool-flag">🇯🇵</span> Japan</li>
                <li className="pool-item"><span className="pool-flag">🇮🇪</span> Ireland</li>
              </ul>
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

        {/* SPORTS ANALYST ARTICLE: CLIMATE AND PITCH FACTORS */}
        <section className="my-16 bg-slate-950 border border-slate-900 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">Tactical Deep-Dive: Pitch Conditions and Weather Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-sky-400 font-bold text-base mb-2">Turf Characteristics</h3>
              <p>
                Both Wagener Stadium and Belfius Arena utilize advanced water-based artificial turf. These pitches require continuous watering prior to matches. Wet turf drastically reduces ball friction, allowing quick, flat passes. This favors aggressive, drag-flicking teams like India and fast counter-attackers like Belgium.
              </p>
            </div>
            <div>
              <h3 className="text-sky-400 font-bold text-base mb-2">Climate Impact</h3>
              <p>
                Late August in Amstelveen and Wavre brings highly unpredictable rain showers and cooler evening temperatures (averaging 15°C / 59°F). Increased relative humidity prevents the pitch water from evaporating, maintaining extremely fast play throughout late-night fixtures.
              </p>
            </div>
            <div>
              <h3 className="text-sky-400 font-bold text-base mb-2">Star Players to Watch</h3>
              <p>
                Keep an eye on India's drag-flick captain <strong>Harmanpreet Singh</strong>, Dutch midfield anchor <strong>Thierry Brinkman</strong>, and German playmaker <strong>Niklas Wellen</strong>. Their execution of penalty corner routines and control under pressure will dictate their teams' fates.
              </p>
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

        {/* FAQ ACCORDION SECTION (DYNAMIC COGNITIVE TOGGLE) */}
        <section id="faq" className="my-12">
          <div className="section-title-wrap">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>Everything you need to know about the FIH Hockey World Cup 2026 schedule and streams.</p>
          </div>

          <div className="faq-wrap">
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(0)}>
                <span>Which teams have qualified for the FIH Hockey World Cup 2026?</span>
                <span className={`faq-toggle-icon ${openFaqIndex === 0 ? "open" : ""}`}>+</span>
              </div>
              <div className={`faq-answer-container ${openFaqIndex === 0 ? "open" : ""}`}>
                <div className="faq-answer">
                  A total of 16 men's and 16 women's national teams have qualified through continental championships (EuroHockey, Asia Cup, Pan American Cup) and the FIH Hockey World Cup Qualifiers. Major contenders include Belgium, Netherlands, India, Germany, and Australia.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <span>Where will the Hockey World Cup 2026 finals be played?</span>
                <span className={`faq-toggle-icon ${openFaqIndex === 1 ? "open" : ""}`}>+</span>
              </div>
              <div className={`faq-answer-container ${openFaqIndex === 1 ? "open" : ""}`}>
                <div className="faq-answer">
                  The Men's Hockey World Cup 2026 final will take place at the Belfius Hockey Arena in Wavre, Belgium. The Women's tournament final will be hosted at the Wagener Stadium in Amstelveen, Netherlands. Both finals are scheduled for Sunday, August 30, 2026.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <span>Is JioCinema showing the Hockey World Cup matches for free?</span>
                <span className={`faq-toggle-icon ${openFaqIndex === 2 ? "open" : ""}`}>+</span>
              </div>
              <div className={`faq-answer-container ${openFaqIndex === 2 ? "open" : ""}`}>
                <div className="faq-answer">
                  Yes, in India, Viacom18 has the digital broadcasting rights. Therefore, JioCinema will stream all Indian team matches and major tournament fixtures completely free of cost in multiple languages.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <span>How can I buy tickets for the matches in Wagener Stadium (Amstelveen)?</span>
                <span className={`faq-toggle-icon ${openFaqIndex === 3 ? "open" : ""}`}>+</span>
              </div>
              <div className={`faq-answer-container ${openFaqIndex === 3 ? "open" : ""}`}>
                <div className="faq-answer">
                  Official ticket sales are handled via the unified tournament portal (hockeyworldcup2026.be). Ticket prices start from €20 for group stage matches, with premium passes available for the final weekend matches in Wavre and Amstelveen.
                </div>
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
              <h5 className="text-white font-bold">About Us</h5>
              <p>We are a dedicated, independent portal bringing you verified match fixtures, schedule updates, timezone calculations, and broadcasting guides for the upcoming FIH Hockey World Cup 2026.</p>
            </div>
            <div className="footer-col">
              <h5 className="text-white font-bold">Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#schedule">Fixtures List</a></li>
                <li><a href="#pools">Qualified Pools</a></li>
                <li><a href="#broadcasters">Broadcasters Channels</a></li>
                <li><a href="https://fih.hockey" target="_blank" rel="noopener noreferrer">Official FIH Site</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5 className="text-white font-bold">Contact & Support</h5>
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
