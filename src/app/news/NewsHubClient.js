"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { newsArticles } from "../../data/news";

export default function NewsHubClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Squad News", "Injury News", "Ticket Update"];

  const filteredArticles = selectedCategory === "All"
    ? newsArticles
    : newsArticles.filter(art => art.category === selectedCategory);

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">⚡ Live Freshness Coverage Hub</p>
          <h1 className="hero-title">FIH Hockey World Cup 2026 Latest News & Updates</h1>
          <p className="hero-description">
            Get the latest verified squad announcements, injury reports, official timing changes, ticket releases, and warm-up match results from our expert journalists on the ground in Wavre and Amstelveen.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Senior Editor: <strong>Marc Devos</strong>
            </div>
            <div className="eeat-badge">
              📅 Status: <strong>Continuously Evolving</strong>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <main className="sports-container py-12">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Latest News</span>
        </nav>

        {/* Categories Navigation Filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginBottom: "3rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1.2rem" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? "linear-gradient(135deg, #c00030 0%, #a00028 100%)" : "var(--bg-secondary)",
                color: selectedCategory === cat ? "white" : "var(--text-main)",
                border: "1px solid " + (selectedCategory === cat ? "transparent" : "var(--border-color)"),
                borderRadius: "12px",
                padding: "0.6rem 1.2rem",
                fontSize: "0.9rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles List Grid */}
        <div className="news-feed-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {filteredArticles.map((art) => (
            <article
              key={art.slug}
              className="match-card"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "1.5rem",
                background: "var(--bg-secondary)",
                borderRadius: "20px",
                border: "1px solid var(--border-color)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.3s ease, border-color 0.3s ease"
              }}
            >
              {/* Category Badge & Meta Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span
                  style={{
                    background: "rgba(192, 0, 48, 0.1)",
                    color: "var(--primary)",
                    fontSize: "0.75rem",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "6px",
                    letterSpacing: "0.05em"
                  }}
                >
                  {art.category}
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>⏱️ {art.readTime}</span>
              </div>

              {/* Title */}
              <h2 style={{ fontSize: "1.25rem", color: "var(--text-main)", fontWeight: "800", marginBottom: "0.8rem", lineHeight: "1.4" }}>
                <a href={`/news/${art.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {art.title}
                </a>
              </h2>

              {/* Excerpt */}
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: 1 }}>
                {art.excerpt}
              </p>

              {/* Author & Date Footer */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid var(--border-color)",
                  paddingTop: "1rem",
                  marginTop: "auto"
                }}
              >
                <div>
                  <span style={{ display: "block", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "700" }}>
                    ✍️ {art.author}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{art.authorTitle}</span>
                </div>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>📅 {art.date}</span>
              </div>

              {/* Action Button */}
              <a
                href={`/news/${art.slug}`}
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "var(--bg-tertiary)",
                  color: "var(--text-main)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "10px",
                  padding: "0.7rem",
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  textDecoration: "none",
                  marginTop: "1.2rem",
                  transition: "all 0.2s"
                }}
                className="match-btn"
              >
                Read Full Article →
              </a>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
