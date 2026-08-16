import React from "react";

export default function Footer() {
  return (
    <footer className="sports-footer" style={{ borderTop: "3px solid var(--primary)", paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div className="sports-container">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          
          {/* Column 1: About & Support */}
          <div className="footer-col">
            <div className="text-white font-bold" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "800", marginBottom: "1.2rem" }}>About Us</div>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              Independent fan information site. Not affiliated with FIH. All live scores and fixtures are verified against official FIH Tournament Management System (TMS) and fih.hockey records.
            </p>
            <div className="text-white font-bold" style={{ color: "#fff", fontSize: "1rem", fontWeight: "800", marginBottom: "0.8rem" }}>Editorial Desk</div>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
              Reviewed by the HWC 2026 Editorial Team:<br/>
              <a href="mailto:editor@hockeyworldcup2026schedule.com" style={{ color: "var(--text-main)", fontWeight: "700", wordBreak: "break-all", display: "block", marginTop: "0.4rem", textDecoration: "none" }}>
                editor@hockeyworldcup2026schedule.com
              </a>
            </p>
          </div>

          {/* Column 2: Navigation Hub */}
          <div className="footer-col">
            <div className="text-white font-bold" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "800", marginBottom: "1.2rem" }}>Tournament Hubs</div>
            <ul className="footer-links" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              <li><a href="/" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🏠 Home</a></li>
              <li><a href="/schedule" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>📅 Full Match Schedule (16 Days)</a></li>
              <li><a href="/points-table" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>📈 Points Table & Standings</a></li>
              <li><a href="/live-scores" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🔴 Real-Time Match Center</a></li>
              <li><a href="/tickets" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🎟️ Official Tickets Guide</a></li>
              <li><a href="/venues" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🗺️ Wagener Stadium & Belfius Arena Guide</a></li>
              <li><a href="/history" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🏆 Hockey World Cup Winners (1971–2023)</a></li>
              <li><a href="/news" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>⚡ Match Reports & Analysis</a></li>
            </ul>
          </div>

          {/* Column 3: Team Schedules & Pools */}
          <div className="footer-col">
            <div className="text-white font-bold" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "800", marginBottom: "1.2rem" }}>National Team Schedules</div>
            <ul className="footer-links" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><a href="/hockey-world-cup-2026-schedule-pakistan" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem" }}>🇵🇰 Pakistan Schedule & PKT Timings</a></li>
              <li><a href="/hockey-world-cup-2026-schedule-india" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem" }}>🇮🇳 India Schedule & IST Timings</a></li>
              <li><a href="/hockey-world-cup-2026-schedule-netherlands" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem" }}>🇳🇱 Netherlands Schedule</a></li>
              <li><a href="/hockey-world-cup-2026-schedule-belgium" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem" }}>🇧🇪 Belgium Schedule</a></li>
              <li><a href="/hockey-world-cup-2026-schedule-germany" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem" }}>🇩🇪 Germany Schedule</a></li>
              <li><a href="/hockey-world-cup-2026-schedule-australia" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem" }}>🇦🇺 Australia Schedule</a></li>
              <li><a href="/hockey-world-cup-2026-schedule-england" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem" }}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 England Schedule</a></li>
              <li><a href="/teams" style={{ color: "var(--text-main)", fontWeight: "600", textDecoration: "none", fontSize: "0.85rem" }}>👉 View All 20 Qualified Nations</a></li>
            </ul>
          </div>

          {/* Column 4: Guides & Legal */}
          <div className="footer-col">
            <div className="text-white font-bold" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "800", marginBottom: "1.2rem" }}>Official Guides</div>
            <ul className="footer-links" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.5rem" }}>
              <li><a href="/hockey-live-streaming" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>📺 Live Streaming (Watch.Hockey, JioHotstar, PTV Sports, NOS)</a></li>
              <li><a href="/h2h" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>⚔️ Head-to-Head (H2H) Records</a></li>
              <li><a href="/past-results" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>📊 Confirmed Match Results</a></li>
              <li><a href="/tickets" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem" }}>🎟️ Official Host Tickets Portals</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom bar */}
        <div className="footer-bottom" style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
          <p style={{ margin: 0 }}>
            © 2026 HockeyWorldCup2026Schedule.com. Independent fan information site. Not affiliated with the International Hockey Federation (FIH). All live scores and fixtures should be verified on fih.hockey / tms.fih.ch.
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
