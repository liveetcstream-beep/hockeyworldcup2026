"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const standingsData = {
  Men: {
    "Pool A": [
      { name: "NETHERLANDS", flag: "nl" },
      { name: "ARGENTINA", flag: "ar" },
      { name: "NEW ZEALAND", flag: "nz" },
      { name: "CHILE", flag: "cl" }
    ],
    "Pool B": [
      { name: "GERMANY", flag: "de" },
      { name: "BELGIUM", flag: "be" },
      { name: "MALAYSIA", flag: "my" },
      { name: "FRANCE", flag: "fr" }
    ],
    "Pool C": [
      { name: "AUSTRALIA", flag: "au" },
      { name: "SPAIN", flag: "es" },
      { name: "IRELAND", flag: "ie" },
      { name: "SOUTH AFRICA", flag: "za" }
    ],
    "Pool D": [
      { name: "INDIA", flag: "in" },
      { name: "ENGLAND", flag: "gb-eng" },
      { name: "PAKISTAN", flag: "pk" },
      { name: "WALES", flag: "gb-wls" }
    ]
  },
  Women: {
    "Pool A": [
      { name: "NETHERLANDS", flag: "nl" },
      { name: "AUSTRALIA", flag: "au" },
      { name: "JAPAN", flag: "jp" },
      { name: "CHILE", flag: "cl" }
    ],
    "Pool B": [
      { name: "ARGENTINA", flag: "ar" },
      { name: "GERMANY", flag: "de" },
      { name: "UNITED STATES", flag: "us" },
      { name: "SCOTLAND", flag: "gb-sct" }
    ],
    "Pool C": [
      { name: "BELGIUM", flag: "be" },
      { name: "SPAIN", flag: "es" },
      { name: "NEW ZEALAND", flag: "nz" },
      { name: "FRANCE", flag: "fr" }
    ],
    "Pool D": [
      { name: "CHINA", flag: "cn" },
      { name: "INDIA", flag: "in" },
      { name: "ENGLAND", flag: "gb-eng" },
      { name: "SOUTH AFRICA", flag: "za" }
    ]
  }
};

export default function PointsTablePage() {
  const [selectedGender, setSelectedGender] = useState("Men");
  const [selectedPool, setSelectedPool] = useState("Pool A");

  const faqItems = [
    {
      question: "Does goal difference matter more than total wins?",
      answer: "No. Under the latest FIH guidelines, number of matches won is the primary tie-breaker. Goal difference is only considered if the number of wins is equal."
    },
    {
      question: "Is there any bonus point system?",
      answer: "No. Unlike rugby or soccer leagues, hockey tournaments do not award bonus points for scoring a certain number of goals (e.g. 4+ goals)."
    }
  ];

  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Group Stage Standings & Pools</p>
          <h1 className="hero-title">Official Points Table & Standings Rules</h1>
          <p className="hero-description">
            How do teams earn rankings during the 2026 group stages in Belgium and the Netherlands? Read the official FIH point system and tie-breaker guidelines.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Verified: <strong>Marc Devos (Belgian Hockey Analyst)</strong>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
          }),
        }}
      />

      <main className="sports-container py-12">
        {/* INTERACTIVE STANDINGS WIDGET */}
        <section className="my-12">
          {/* Gender Tabs */}
          <div style={{
            display: "flex",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            background: "#f1f5f9",
            overflow: "hidden",
            marginBottom: "1.5rem"
          }}>
            <button
              onClick={() => {
                setSelectedGender("Men");
                setSelectedPool("Pool A");
              }}
              style={{
                flex: 1,
                padding: "1rem",
                border: "none",
                fontWeight: "900",
                fontSize: "1rem",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.2s ease",
                background: selectedGender === "Men" ? "var(--accent)" : "transparent",
                color: selectedGender === "Men" ? "#0f172a" : "#475569"
              }}
            >
              MEN'S
            </button>
            <button
              onClick={() => {
                setSelectedGender("Women");
                setSelectedPool("Pool A");
              }}
              style={{
                flex: 1,
                padding: "1rem",
                border: "none",
                fontWeight: "900",
                fontSize: "1rem",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.2s ease",
                background: selectedGender === "Women" ? "var(--accent)" : "transparent",
                color: selectedGender === "Women" ? "#0f172a" : "#475569"
              }}
            >
              WOMEN'S
            </button>
          </div>

          {/* Pool Sub-Tabs */}
          <div style={{
            display: "flex",
            gap: "1.5rem",
            borderBottom: "1px solid #e2e8f0",
            marginBottom: "2rem",
            overflowX: "auto",
            paddingBottom: "0.2rem"
          }}>
            {["Pool A", "Pool B", "Pool C", "Pool D"].map((pool) => (
              <button
                key={pool}
                onClick={() => setSelectedPool(pool)}
                style={{
                  background: "transparent",
                  border: "none",
                  padding: "0.8rem 1rem",
                  fontSize: "0.95rem",
                  fontWeight: "800",
                  cursor: "pointer",
                  color: selectedPool === pool ? "var(--primary)" : "#64748b",
                  borderBottom: selectedPool === pool ? "3px solid var(--primary)" : "3px solid transparent",
                  transition: "all 0.2s ease"
                }}
              >
                {pool}
              </button>
            ))}
          </div>

          {/* Table Element */}
          <div className="table-responsive" style={{ border: "1px solid rgba(15, 23, 42, 0.08)", borderRadius: "12px", background: "#ffffff" }}>
            <table className="sports-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>COUNTRY</th>
                  <th>P</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>ScF</th>
                  <th>ScA</th>
                  <th>PDiff</th>
                  <th>Pt</th>
                  <th>RES</th>
                </tr>
              </thead>
              <tbody>
                {standingsData[selectedGender][selectedPool].map((team, idx) => (
                  <tr key={team.name}>
                    <td><strong>{idx + 1}</strong></td>
                    <td style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontWeight: "700" }}>
                      <img src={`https://flagcdn.com/w40/${team.flag}.png`} width="24" height="16" alt={`${team.name} flag`} style={{ borderRadius: "2px", border: "1px solid rgba(0,0,0,0.06)" }} />
                      {team.name}
                    </td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td><strong>0</strong></td>
                    <td style={{ color: "#94a3b8" }}>-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Point System Cards */}
        <section className="insights-section-wrap">
          <h2 className="insights-section-title">
            <span>⚙️</span> FIH Group Stage Point Allocation
          </h2>
          <div className="insights-grid">
            <div className="insight-col-card">
              <span className="insight-col-tag">Win</span>
              <span className="insight-col-header">3 Points</span>
              <p className="insight-col-text">
                Teams receive 3 points for winning a match within the 60 minutes of regulation play. There is no extra time during pool matches.
              </p>
            </div>
            
            <div className="insight-col-card accent-card">
              <span className="insight-col-tag">Draw</span>
              <span className="insight-col-header">1 Point</span>
              <p className="insight-col-text">
                In case of a tie at the end of regulation (60 mins), both teams receive 1 point each. No penalty shootout is played in the group phase.
              </p>
            </div>

            <div className="insight-col-card">
              <span className="insight-col-tag">Loss</span>
              <span className="insight-col-header">0 Points</span>
              <p className="insight-col-text">
                A team receives 0 points for losing a match within regulation play, regardless of goal margins.
              </p>
            </div>
          </div>
        </section>

        {/* Tie-Breaker Priority Rules List (Fully styled for Light Mode) */}
        <section className="my-16 p-8 rounded-2xl" style={{
          background: "linear-gradient(135deg, rgba(192, 0, 48, 0.03) 0%, #ffffff 100%)",
          border: "1px solid rgba(15, 23, 42, 0.08)",
          boxShadow: "0 8px 30px rgba(15, 23, 42, 0.03)"
        }}>
          <h2 className="text-xl font-bold mb-6 border-l-4 border-rose-600 pl-4 italic" style={{ color: "var(--text-main)" }}>Official FIH Group stage Tie-Breaker Rules</h2>
          <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            If two or more teams finish the pool matches with equal points, their final standings position is determined by the following priority rules:
          </p>
          <div className="space-y-4 text-sm" style={{ color: "var(--text-muted)" }}>
            <div className="border-b border-slate-100 pb-3">
              <strong style={{ color: "var(--text-main)", display: "block", marginBottom: "0.2rem" }}>1. Total Matches Won</strong>
              The team with the higher number of wins in the pool is ranked higher.
            </div>
            <div className="border-b border-slate-100 pb-3">
              <strong style={{ color: "var(--text-main)", display: "block", marginBottom: "0.2rem" }}>2. Goal Difference (GD)</strong>
              Calculated as total goals scored minus total goals conceded. The team with the higher positive difference is ranked higher.
            </div>
            <div className="border-b border-slate-100 pb-3">
              <strong style={{ color: "var(--text-main)", display: "block", marginBottom: "0.2rem" }}>3. Goals For (GF)</strong>
              The team that has scored the highest total number of goals in all pool matches is ranked higher.
            </div>
            <div className="border-b border-slate-100 pb-3">
              <strong style={{ color: "var(--text-main)", display: "block", marginBottom: "0.2rem" }}>4. Head-to-Head Match Result</strong>
              The result of the match played between the tied teams determines who ranks higher.
            </div>
            <div>
              <strong style={{ color: "var(--text-main)", display: "block", marginBottom: "0.2rem" }}>5. Shootout (If still tied)</strong>
              If all the above parameters remain equal and the teams are still tied, a series of penalty shoot-outs will be scheduled to determine qualification.
            </div>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section className="my-16">
          <div className="section-title-wrap">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>Direct responses regarding points allocation, wins criteria, and group stage tie-breakers.</p>
          </div>
          
          <FaqAccordion items={faqItems} />

          <div className="expert-quote-box">
            "Understanding the tie-breaker is key during the final matchday of pool stages. Team coaches often order their players to hunt for more field goals if they anticipate a tie on points."
            <strong>— Marc Devos, Senior Belgian Hockey Analyst</strong>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
