import React from "react";

export default function Footer() {
  return (
    <footer className="sports-footer" style={{ borderTop: "3px solid var(--primary)", paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div className="sports-container">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          
          {/* Column 1: About & Support */}
          <div className="footer-col">
            <h4 className="text-white font-bold" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "800", marginBottom: "1.2rem" }}>About Us</h4>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              We are an independent portal bringing you verified match fixtures, schedule updates, timezone calculations, and broadcasting guides for the upcoming FIH Hockey World Cup 2026.
            </p>
            <h4 className="text-white font-bold" style={{ color: "#fff", fontSize: "1rem", fontWeight: "800", marginBottom: "0.8rem" }}>Contact & Support</h4>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
              Reach out to our editorial desk at:<br/>
              <a href="mailto:editor@hockeyworldcup2026schedule.com" style={{ color: "var(--text-main)", fontWeight: "700", wordBreak: "break-all", display: "block", marginTop: "0.4rem", textDecoration: "none" }}>
                editor@hockeyworldcup2026schedule.com
              </a>
            </p>
          </div>

          {/* Column 2: Navigation Hub */}
          <div className="footer-col">
            <h4 className="text-white font-bold" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "800", marginBottom: "1.2rem" }}>Navigation</h4>
            <ul className="footer-links" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              <li><a href="/" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🏠 Home</a></li>
              <li><a href="/schedule" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>📅 Match Schedule & Timings</a></li>
              <li><a href="/live-scores" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🔴 Live Scores Centre</a></li>
              <li><a href="/news" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>⚡ Latest News Hub</a></li>
              <li><a href="/hockey-live-streaming" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>📺 Live Streaming Guides</a></li>
              <li><a href="/tickets" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🎟️ Tickets & Seating Pricing</a></li>
              <li><a href="/venues" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🏟️ Stadium Travel Guides</a></li>
            </ul>
          </div>

          {/* Column 3: pSEO Indexes & Pools */}
          <div className="footer-col">
            <h4 className="text-white font-bold" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "800", marginBottom: "1.2rem" }}>Directory Hubs</h4>
            <ul className="footer-links" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              <li><a href="/players" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🏃‍♂️ Star Player Profiles</a></li>
              <li><a href="/results" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>📊 Team Results Tracker</a></li>
              <li><a href="/schedule/date" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>📆 Daily Fixtures Directory</a></li>
              <li><a href="/hockey-world-cup-2026-groups" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🏆 Pool Standings Hub</a></li>
              <li><a href="/pool-a" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🔴 Pool A Standings</a></li>
              <li><a href="/pool-b" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🔵 Pool B Standings</a></li>
              <li><a href="/pool-c" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🟢 Pool C Standings</a></li>
              <li><a href="/pool-d" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🟡 Pool D Standings</a></li>
            </ul>
          </div>

          {/* Column 4: Knockouts & Previews */}
          <div className="footer-col">
            <h4 className="text-white font-bold" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "800", marginBottom: "1.2rem" }}>Knockout Stages</h4>
            <ul className="footer-links" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.5rem" }}>
              <li><a href="/knockout/quarter-finals" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>⚙️ Quarter-Finals Guide</a></li>
              <li><a href="/knockout/semi-finals" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>⚙️ Semi-Finals Guide</a></li>
              <li><a href="/knockout/final" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🏆 Grand Final Match Guide</a></li>
            </ul>
            <h4 className="text-white font-bold" style={{ color: "#fff", fontSize: "1rem", fontWeight: "800", marginBottom: "0.8rem" }}>Blockbuster Previews</h4>
            <ul className="footer-links" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              <li><a href="/matches/india-vs-pakistan" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🇮🇳 India vs Pakistan 🇵🇰</a></li>
              <li><a href="/matches/germany-vs-belgium" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🇩🇪 Germany vs Belgium 🇧🇪</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom bar */}
        <div className="footer-bottom" style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
          <p style={{ margin: 0 }}>
            © 2026 HockeyWorldCup2026Schedule.com. All Rights Reserved. Not affiliated with the International Hockey Federation (FIH).
          </p>
          <div className="flex gap-4" style={{ display: "flex", gap: "1rem" }}>
            <a href="/privacy-policy" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Privacy Policy</a>
            <span style={{ color: "var(--border-color)" }}>|</span>
            <a href="/terms-of-use" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
