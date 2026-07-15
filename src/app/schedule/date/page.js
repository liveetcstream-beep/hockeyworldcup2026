import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { matchDays } from "../../../data/datepages";

export const metadata = {
  title: "Hockey World Cup 2026 Schedule by Date: Daily Match Fixtures",
  description: "Track daily match fixtures for the FIH Hockey World Cup 2026. Get date-wise timezone conversions, kickoff times, stadium locations, and daily streaming guides.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/schedule/date",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Schedule by Date: Daily Match Fixtures",
    description: "Track daily match fixtures for the FIH Hockey World Cup 2026. Get date-wise timezone conversions, kickoff times, stadium locations, and daily streaming guides.",
    url: "https://hockeyworldcup2026schedule.com/schedule/date",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Daily Schedule",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Schedule by Date: Daily Match Fixtures",
    description: "Track daily match fixtures for the FIH Hockey World Cup 2026. Get date-wise timezone conversions, kickoff times, stadium locations, and daily streaming guides.",
    images: ["/og-image.jpg"],
  },
};

export default function ScheduleDatesIndexPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">📅 Calendar Overview & Daily Schedules</p>
          <h1 className="hero-title">Hockey World Cup 2026 Daily Match Fixtures</h1>
          <p className="hero-description">
            Complete schedule grouped by tournament matchdays. Select a specific date to view detailed local match times, multiple timezone conversions, and regional live broadcasting allocations.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">August 15 – August 31, 2026</div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <a href="/schedule" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Schedule</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Daily Fixtures Directory</span>
        </nav>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "var(--text-main)",
            marginBottom: "1.5rem",
            borderLeft: "4px solid var(--primary)",
            paddingLeft: "1rem"
          }}>
            Select a Match Date
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {matchDays.map((day) => (
              <a
                key={day.slug}
                href={`/schedule/date/${day.slug}`}
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  transition: "transform 0.2s, border-color 0.2s"
                }}
                className="match-card"
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                    <span style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                      background: "rgba(192,0,48,0.08)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "6px",
                      textTransform: "uppercase"
                    }}>
                      Day {day.dayNumber}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>
                      🕒 {day.matches.length} Matches
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)", margin: "0 0 0.8rem 0" }}>
                    {day.date}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: "1.5", margin: 0 }}>
                    {day.matches.map(m => `${m.flag1} ${m.team1} vs ${m.team2} ${m.flag2}`).join(" · ")}
                  </p>
                </div>
                <span style={{
                  display: "inline-block",
                  marginTop: "1.2rem",
                  color: "var(--primary)",
                  fontWeight: 700,
                  fontSize: "0.9rem"
                }}>
                  View Fixture Schedule →
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
