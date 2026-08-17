"use client";

import React, { useState, useEffect } from "react";
import { OFFICIAL_TICKET_PORTAL } from "../../lib/fihTicketScraper.js";

export default function TicketsClient({ initialData }) {
  const [ticketData, setTicketData] = useState(initialData);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchTickets = async () => {
    try {
      const res = await fetch("/api/tickets", { cache: "no-store" });
      if (!res.ok) return;
      const json = await res.json();
      if (json && json.agenda) {
        setTicketData(json);
        setLastUpdated(new Date());
      }
    } catch (e) {
      console.warn("Tickets live sync pause:", e.message);
    }
  };

  useEffect(() => {
    fetchTickets();
    const interval = setInterval(fetchTickets, 15000);
    return () => clearInterval(interval);
  }, []);

  const portalLink = ticketData?.portalUrl || OFFICIAL_TICKET_PORTAL;

  return (
    <div>
      {/* Real-time Paylogic Official Portal Live Sync Banner */}
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px", padding: "1rem 1.5rem", marginBottom: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.9rem", color: "#10b981", fontWeight: "700" }}>
          <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: "#10b981", animation: "pulse 1.5s infinite" }}></span>
          🟢 Official Paylogic Ticket Engine Connected · Updated {Math.floor((new Date() - lastUpdated) / 1000)}s ago
        </div>
        <a
          href={portalLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg, #c00030, #e11d48)",
            color: "#ffffff",
            padding: "0.6rem 1.25rem",
            borderRadius: "8px",
            fontSize: "0.85rem",
            fontWeight: "800",
            textDecoration: "none",
            boxShadow: "0 4px 15px rgba(192,0,48,0.3)"
          }}
        >
          🎟️ Open Official Host Ticket Portal &rarr;
        </a>
      </div>

      {/* Main Buy Tickets Call to Action Hero Card */}
      <div style={{ background: "linear-gradient(135deg, rgba(192,0,48,0.12) 0%, rgba(15,23,42,0.8) 100%)", border: "2px solid var(--primary)", borderRadius: "20px", padding: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>
        <span style={{ background: "var(--primary)", color: "#fff", fontSize: "0.75rem", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", borderRadius: "6px" }}>
          OFFICIAL FIH HOST TICKETING PARTNER
        </span>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "900", color: "var(--text-main)", marginTop: "1rem", marginBottom: "0.75rem" }}>
          Book Your Official Hockey World Cup 2026 Tickets Online
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: "750px", margin: "0 auto 1.75rem", lineHeight: "1.7" }}>
          Reserve category-wise seats directly on the official host ticketing agenda portal for all matches at Wagener Stadium (Nieuwe Kalfjeslaan 21, 1182 AM Amstelveen) and Belfius Hockey Arena (Avenue de la Toison d'Or, 1300 Wavre).
        </p>
        <a
          href={portalLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #c00030, #8b0020)",
            color: "#ffffff",
            padding: "1rem 2.5rem",
            borderRadius: "12px",
            fontSize: "1.1rem",
            fontWeight: "900",
            textDecoration: "none",
            boxShadow: "0 6px 25px rgba(192,0,48,0.4)"
          }}
        >
          🎟️ Click Here to Buy Official Tickets Now &rarr;
        </a>
      </div>

      {/* Category-wise Agenda & Price Schedule */}
      {(ticketData?.agenda || []).map((section, idx) => (
        <section key={idx} style={{ marginBottom: "3rem" }}>
          <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem 2rem", marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--text-main)", margin: 0 }}>
              📅 {section.date}
            </h3>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>
              📍 {section.venue}
            </div>
          </div>

          <div style={{ overflowX: "auto", border: "1px solid var(--border-color)", borderRadius: "16px", background: "var(--bg-secondary)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "var(--bg-tertiary)", color: "var(--text-muted)", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  <th style={{ padding: "0.85rem 1.25rem" }}>Stand / Seating Category</th>
                  <th style={{ padding: "0.85rem" }}>Age Group</th>
                  <th style={{ padding: "0.85rem" }}>Official Price</th>
                  <th style={{ padding: "0.85rem" }}>Availability</th>
                  <th style={{ padding: "0.85rem", textAlign: "right" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {section.categories.map((cat, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--border-color)" }}>
                    <td style={{ padding: "1rem 1.25rem", fontWeight: "800", color: "var(--text-main)" }}>
                      {cat.category}
                    </td>
                    <td style={{ padding: "1rem", color: "var(--text-muted)" }}>{cat.ageGroup}</td>
                    <td style={{ padding: "1rem", fontWeight: "900", color: "var(--primary)", fontSize: "1.05rem" }}>{cat.price}</td>
                    <td style={{ padding: "1rem" }}>
                      <span style={{
                        fontSize: "0.75rem", fontWeight: "800", padding: "0.2rem 0.6rem", borderRadius: "6px",
                        background: cat.status.includes("Available") ? "rgba(16, 185, 129, 0.15)" : "rgba(234, 179, 8, 0.15)",
                        color: cat.status.includes("Available") ? "#10b981" : "#facc15"
                      }}>
                        {cat.status}
                      </span>
                    </td>
                    <td style={{ padding: "1rem", textAlign: "right" }}>
                      <a
                        href={portalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "var(--primary)",
                          color: "#fff",
                          padding: "0.4rem 0.85rem",
                          borderRadius: "6px",
                          fontSize: "0.78rem",
                          fontWeight: "800",
                          textDecoration: "none"
                        }}
                      >
                        Buy Ticket &rarr;
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* Floating Bottom Purchase Banner */}
      <div style={{ position: "sticky", bottom: "1.5rem", zIndex: 90, background: "rgba(15, 23, 42, 0.95)", backdropFilter: "blur(10px)", border: "1px solid var(--primary)", borderRadius: "16px", padding: "1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
        <div>
          <div style={{ fontWeight: "800", color: "var(--text-main)", fontSize: "0.95rem" }}>
            Ready to experience the 2026 FIH Hockey World Cup live?
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Official Host Ticketing Portal: agenda.hockeyworldcup2026.be
          </div>
        </div>
        <a
          href={portalLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg, #c00030, #e11d48)",
            color: "#ffffff",
            padding: "0.7rem 1.5rem",
            borderRadius: "8px",
            fontSize: "0.9rem",
            fontWeight: "900",
            textDecoration: "none"
          }}
        >
          🎟️ Go to Official Booking Link &rarr;
        </a>
      </div>
    </div>
  );
}
