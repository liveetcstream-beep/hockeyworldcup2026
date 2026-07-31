"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getPublishedNews } from "../../data/newsUtils";

export default function NewsHubClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const publishedNews = getPublishedNews();

  const categories = ["All", ...new Set(publishedNews.map(art => art.category))];


  const filteredArticles = selectedCategory === "All"
    ? publishedNews
    : publishedNews.filter(art => art.category === selectedCategory);

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
              ✍️ Senior Editor: <strong>HWC 2026 Editorial Team</strong>
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
        <div className="news-feed-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "2rem" }}>
          {filteredArticles.map((art) => (
            <article
              key={art.slug}
              className="match-card"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                background: "var(--bg-secondary)",
                borderRadius: "20px",
                border: "1px solid var(--border-color)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
            >
              {/* Featured Image Container with Category Badge */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", overflow: "hidden", background: "var(--bg-tertiary)" }}>
                <a href={`/news/${art.slug}`}>
                  <img
                    src={art.image}
                    alt={art.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease"
                    }}
                  />
                </a>
                <span
                  style={{
                    position: "absolute",
                    top: "0.9rem",
                    left: "0.9rem",
                    background: "rgba(192, 0, 48, 0.92)",
                    color: "white",
                    fontSize: "0.72rem",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    padding: "0.35rem 0.8rem",
                    borderRadius: "8px",
                    letterSpacing: "0.05em",
                    backdropFilter: "blur(4px)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
                  }}
                >
                  {art.category}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: "1.4rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                {/* Date & Read Time */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem", fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: "600" }}>
                  <span>📅 {art.date}</span>
                  <span>⏱️ {art.readTime}</span>
                </div>

                {/* Title */}
                <h2 style={{ fontSize: "1.15rem", color: "var(--text-main)", fontWeight: "800", marginBottom: "0.6rem", lineHeight: "1.4", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  <a href={`/news/${art.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {art.title}
                  </a>
                </h2>

                {/* Shortened Excerpt */}
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.5", marginBottom: "1.2rem", flexGrow: 1, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {art.excerpt}
                </p>

                {/* Author & Action Button Footer */}
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
                  <span style={{ fontSize: "0.82rem", color: "var(--text-main)", fontWeight: "700" }}>
                    ✍️ {art.author}
                  </span>
                  <a
                    href={`/news/${art.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      background: "rgba(192, 0, 48, 0.08)",
                      color: "var(--primary)",
                      border: "1px solid rgba(192, 0, 48, 0.2)",
                      borderRadius: "8px",
                      padding: "0.45rem 0.9rem",
                      fontSize: "0.82rem",
                      fontWeight: "700",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    Read Article →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
