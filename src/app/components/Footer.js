import React from "react";

export default function Footer() {
  return (
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
              <li><a href="/">Home</a></li>
              <li><a href="/format">Tournament Format</a></li>
              <li><a href="/points-table">Points Table Rules</a></li>
              <li><a href="/tickets">Tickets & Pricing</a></li>
              <li><a href="/broadcasters">Broadcasters Hub</a></li>
              <li><a href="/venues">Stadium Guides</a></li>
              <li><a href="/history">Winners List (1971-2026)</a></li>
              <li><a href="/live-scores">Live Scores</a></li>
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
  );
}
