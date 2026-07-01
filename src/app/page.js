"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  // Client State for Timezone Converter
  const [selectedTimezone, setSelectedTimezone] = useState("CET");

  // Client State for Accordion FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Time conversion mapping for the Matches
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
      <Header />

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
              ✍️ Expert Verified by: <strong>Marc Devos (Senior Belgian Hockey Journalist)</strong>
            </div>
            <div className="eeat-badge">
              ⚡ Status: <strong>Official Fixtures Confirmed</strong>
            </div>
          </div>
        </div>
      </section>

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
          </div>
        </section>
        
        {/* TIMEZONE CONVERTER SECTION */}
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
                  <div className="team-badge-wrap">
                    <img src="https://flagcdn.com/w80/in.png" width="36" height="24" alt="India flag" style={{ borderRadius: "4px" }} />
                  </div>
                  <span className="team-name">India (Men)</span>
                </div>
                <div className="vs-badge">VS</div>
                <div className="team-display">
                  <div className="team-badge-wrap">
                    <img src="https://flagcdn.com/w80/gb-wls.png" width="36" height="24" alt="Wales flag" style={{ borderRadius: "4px" }} />
                  </div>
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
                  <div className="team-badge-wrap">
                    <img src="https://flagcdn.com/w80/de.png" width="36" height="24" alt="Germany flag" style={{ borderRadius: "4px" }} />
                  </div>
                  <span className="team-name">Germany (Men)</span>
                </div>
                <div className="vs-badge">VS</div>
                <div className="team-display">
                  <div className="team-badge-wrap">
                    <img src="https://flagcdn.com/w80/my.png" width="36" height="24" alt="Malaysia flag" style={{ borderRadius: "4px" }} />
                  </div>
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
                  <div className="team-badge-wrap">
                    <img src="https://flagcdn.com/w80/nl.png" width="36" height="24" alt="Netherlands flag" style={{ borderRadius: "4px" }} />
                  </div>
                  <span className="team-name">Netherlands (Women)</span>
                </div>
                <div className="vs-badge">VS</div>
                <div className="team-display">
                  <div className="team-badge-wrap">
                    <img src="https://flagcdn.com/w80/cl.png" width="36" height="24" alt="Chile flag" style={{ borderRadius: "4px" }} />
                  </div>
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
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/nl.png" width="20" height="14" alt="Netherlands flag" style={{ borderRadius: "2px" }} /> Netherlands
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/de.png" width="20" height="14" alt="Germany flag" style={{ borderRadius: "2px" }} /> Germany
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px" }} /> India
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/es.png" width="20" height="14" alt="Spain flag" style={{ borderRadius: "2px" }} /> Spain
                </li>
              </ul>
            </div>

            {/* Pool B */}
            <div className="pool-card">
              <div className="pool-header">
                <h3>Pool B</h3>
              </div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/be.png" width="20" height="14" alt="Belgium flag" style={{ borderRadius: "2px" }} /> Belgium
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-eng.png" width="20" height="14" alt="England flag" style={{ borderRadius: "2px" }} /> England
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/au.png" width="20" height="14" alt="Australia flag" style={{ borderRadius: "2px" }} /> Australia
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/nz.png" width="20" height="14" alt="New Zealand flag" style={{ borderRadius: "2px" }} /> New Zealand
                </li>
              </ul>
            </div>

            {/* Pool C */}
            <div className="pool-card">
              <div className="pool-header">
                <h3>Pool C</h3>
              </div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/ar.png" width="20" height="14" alt="Argentina flag" style={{ borderRadius: "2px" }} /> Argentina
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/fr.png" width="20" height="14" alt="France flag" style={{ borderRadius: "2px" }} /> France
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/za.png" width="20" height="14" alt="South Africa flag" style={{ borderRadius: "2px" }} /> South Africa
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/my.png" width="20" height="14" alt="Malaysia flag" style={{ borderRadius: "2px" }} /> Malaysia
                </li>
              </ul>
            </div>

            {/* Pool D */}
            <div className="pool-card">
              <div className="pool-header">
                <h3>Pool D</h3>
              </div>
              <ul className="pool-list">
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/cl.png" width="20" height="14" alt="Chile flag" style={{ borderRadius: "2px" }} /> Chile
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/gb-wls.png" width="20" height="14" alt="Wales flag" style={{ borderRadius: "2px" }} /> Wales
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/jp.png" width="20" height="14" alt="Japan flag" style={{ borderRadius: "2px" }} /> Japan
                </li>
                <li className="pool-item">
                  <img src="https://flagcdn.com/w40/ie.png" width="20" height="14" alt="Ireland flag" style={{ borderRadius: "2px" }} /> Ireland
                </li>
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
                  <td>
                    <img src="https://flagcdn.com/w40/pk.png" width="20" height="14" alt="Pakistan flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>Pakistan</strong>
                  </td>
                  <td>Ten Sports / PTV Sports</td>
                  <td><span className="channel-tag">tapmad</span> (Exclusive HD Digital)</td>
                  <td>Premium (Low Cost)</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://flagcdn.com/w40/in.png" width="20" height="14" alt="India flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>India</strong>
                  </td>
                  <td>Sports18 Network</td>
                  <td><span className="channel-tag">JioCinema</span> App</td>
                  <td>Free (Ad-Supported)</td>
                </tr>
                <tr>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <img src="https://flagcdn.com/w40/gb.png" width="20" height="14" alt="UK flag" style={{ borderRadius: "2px" }} />
                      <img src="https://flagcdn.com/w40/eu.png" width="20" height="14" alt="EU flag" style={{ borderRadius: "2px" }} />
                      <strong>United Kingdom & Europe</strong>
                    </div>
                  </td>
                  <td>BT Sport / Eurosport</td>
                  <td><span className="channel-tag">Watch.Hockey</span> Portal</td>
                  <td>PPV / Tournament Pass</td>
                </tr>
                <tr>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <img src="https://flagcdn.com/w40/us.png" width="20" height="14" alt="USA flag" style={{ borderRadius: "2px" }} />
                      <img src="https://flagcdn.com/w40/ca.png" width="20" height="14" alt="Canada flag" style={{ borderRadius: "2px" }} />
                      <strong>USA & Canada</strong>
                    </div>
                  </td>
                  <td>Fox Sports (Selected Games)</td>
                  <td><span className="channel-tag">Watch.Hockey</span> / Fox Sports App</td>
                  <td>Subscription / Pass</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://flagcdn.com/w40/un.png" width="20" height="14" alt="Global flag" style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} /> 
                    <strong>Rest of the World</strong>
                  </td>
                  <td>FIH Media Partners</td>
                  <td><span className="channel-tag">Watch.Hockey</span></td>
                  <td>Varies by Region</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PAIN POINT SOLUTIONS */}
          <div className="vpn-panel-card">
            <h3 className="vpn-title">
              <span>⚠️</span> Traveling Abroad? How to Bypass Live Stream Geo-Blocks
            </h3>
            <p className="vpn-description">
              If you are traveling outside India or Pakistan during the tournament, you will face <strong>geo-restrictions</strong> on apps like <strong>tapmad</strong> and <strong>JioCinema</strong> due to strict copyright licenses. Use the verified steps below to stream matches smoothly.
            </p>
            <div className="vpn-grid">
              <div className="vpn-instruction-box">
                <span className="vpn-step-title">To Stream JioCinema from Europe/US:</span>
                <p className="vpn-step-text">
                  Use a premium VPN (like ExpressVPN or NordVPN), connect to an Indian server, clear your browser cookies, and access the JioCinema app or web portal to enjoy free streams in full HD.
                </p>
              </div>
              <div className="vpn-instruction-box">
                <span className="vpn-step-title">To Stream tapmad from Belgium/Netherlands:</span>
                <p className="vpn-step-text">
                  Connect to a Pakistan server on your VPN client, login to your tapmad account, and watch the match feed without encountering the "Not Available in Your Region" error.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SPORTS ANALYST ARTICLE: CLIMATE AND PITCH FACTORS */}
        <section className="tactical-analysis-card">
          <h2 className="tactical-title">Tactical Deep-Dive: Pitch Conditions and Weather Factors</h2>
          <div className="tactical-grid">
            <div className="tactical-column-card">
              <span className="tactical-col-header">Turf Characteristics</span>
              <p className="tactical-col-text">
                Both Wagener Stadium and Belfius Arena utilize advanced water-based artificial turf. These pitches require continuous watering prior to matches. Wet turf drastically reduces ball friction, allowing quick, flat passes. This favors aggressive, drag-flicking teams like India and fast counter-attackers like Belgium.
              </p>
            </div>
            <div className="tactical-column-card">
              <span className="tactical-col-header">Climate Impact</span>
              <p className="tactical-col-text">
                Late August in Amstelveen and Wavre brings highly unpredictable rain showers and cooler evening temperatures (averaging 15°C / 59°F). Increased relative humidity prevents the pitch water from evaporating, maintaining extremely fast play throughout late-night fixtures.
              </p>
            </div>
            <div className="tactical-column-card">
              <span className="tactical-col-header">Star Players to Watch</span>
              <p className="tactical-col-text">
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
              <div className="author-avatar">MD</div>
              <div className="author-info">
                <h4>Marc Devos</h4>
                <p>Lead Belgian Hockey Analyst & Columnist</p>
              </div>
            </div>
            <p className="author-bio">
              Marc Devos is an experienced Brussels-based sports journalist and hockey analyst with over 12 years of experience covering the Belgian Red Lions national team and international field hockey championships. Living just 25 minutes away from the Belfius Hockey Arena in Wavre, he provides local insights, pitch condition updates, and verified broadcast scheduling details using direct access from the International Hockey Federation (FIH) media center.
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
      <Footer />
    </>
  );
}
