import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";
import { newsArticles } from "../../../data/news";
import { notFound } from "next/navigation";

// Generate static params for compilation
export async function generateStaticParams() {
  return newsArticles.map((art) => ({
    slug: art.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const article = newsArticles.find((art) => art.slug === resolvedParams.slug);
  if (!article) return {};

  const baseUrl = "https://hockeyworldcup2026schedule.com";
  return {
    title: `${article.title} - Hockey World Cup 2026`,
    description: article.excerpt,
    alternates: {
      canonical: `${baseUrl}/news/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} - Hockey World Cup 2026`,
      description: article.excerpt,
      url: `${baseUrl}/news/${article.slug}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} - Hockey World Cup 2026`,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function NewsArticlePage({ params }) {
  const resolvedParams = await params;
  const article = newsArticles.find((art) => art.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Related page linking logic based on tags
  const getContextualLinks = (tags) => {
    const links = [
      { href: "/schedule", label: "📅 Tournament Schedule" },
      { href: "/live-scores", label: "🔴 Live Scores & Updates" },
      { href: "/points-table", label: "📈 Points Table Standings" },
    ];

    if (tags.includes("India Squad") || tags.includes("India Hockey")) {
      links.push({ href: "/hockey-world-cup-2026-schedule-india", label: "🇮🇳 India Schedule Hub" });
      links.push({ href: "/matches/india-vs-pakistan", label: "⚔️ India vs Pakistan Preview" });
      links.push({ href: "/matches/india-vs-england", label: "⚔️ India vs England Preview" });
      links.push({ href: "/pool-d", label: "🟡 Pool D Standings" });
    }

    if (tags.includes("Pakistan Hockey")) {
      links.push({ href: "/hockey-world-cup-2026-schedule-pakistan", label: "🇵🇰 Pakistan Schedule Hub" });
      links.push({ href: "/matches/india-vs-pakistan", label: "⚔️ India vs Pakistan Preview" });
      links.push({ href: "/matches/england-vs-pakistan", label: "⚔️ England vs Pakistan Preview" });
      links.push({ href: "/pool-d", label: "🟡 Pool D Standings" });
    }

    if (tags.includes("Belgium Red Lions")) {
      links.push({ href: "/hockey-world-cup-2026-schedule-belgium", label: "🇧🇪 Belgium Schedule Hub" });
      links.push({ href: "/matches/germany-vs-belgium", label: "⚔️ Germany vs Belgium Preview" });
      links.push({ href: "/matches/belgium-vs-netherlands", label: "⚔️ Belgium vs Netherlands Preview" });
      links.push({ href: "/pool-b", label: "🔵 Pool B Standings" });
    }

    if (tags.includes("Germany Hockey")) {
      links.push({ href: "/hockey-world-cup-2026-schedule-germany", label: "🇩🇪 Germany Schedule Hub" });
      links.push({ href: "/matches/germany-vs-belgium", label: "⚔️ Germany vs Belgium Preview" });
      links.push({ href: "/pool-b", label: "🔵 Pool B Standings" });
    }

    if (tags.includes("Wagener Stadium") || tags.includes("Tickets Booking")) {
      links.push({ href: "/venues/wagener-stadium-guide", label: "🏟️ Wagener Stadium Guide" });
      links.push({ href: "/tickets", label: "🎟️ Ticket Booking & Pricing" });
    }

    if (tags.includes("Belfius Arena") || tags.includes("Wavre")) {
      links.push({ href: "/venues/belfius-arena-guide", label: "🏟️ Belfius Hockey Arena Guide" });
    }

    return links;
  };

  const relatedLinks = getContextualLinks(article.tags);

  return (
    <>
      {/* Dynamic JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hockeyworldcup2026schedule.com" },
                  { "@type": "ListItem", "position": 2, "name": "News", "item": "https://hockeyworldcup2026schedule.com/news" },
                  { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://hockeyworldcup2026schedule.com/news/${article.slug}` }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": article.faqs.map((item) => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              },
              {
                "@type": "NewsArticle",
                "headline": article.title,
                "description": article.excerpt,
                "image": [
                  `https://hockeyworldcup2026schedule.com${article.image}`
                ],
                "datePublished": new Date(article.date).toISOString().split('T')[0] + "T09:00:00+02:00",
                "dateModified": new Date(article.date).toISOString().split('T')[0] + "T09:00:00+02:00",
                "author": {
                  "@type": "Person",
                  "name": article.author,
                  "jobTitle": article.authorTitle
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Hockey World Cup 2026 Hub",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://hockeyworldcup2026schedule.com/icon.png"
                  }
                }
              }
            ]
          })
        }}
      />

      <Header />

      <main className="sports-container py-12">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <a href="/news" style={{ color: "var(--text-muted)", textDecoration: "none" }}>News Hub</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Article</span>
        </nav>

        <article style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Category & Read Time */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <span style={{ background: "rgba(192, 0, 48, 0.1)", color: "var(--primary)", fontSize: "0.8rem", fontWeight: "800", textTransform: "uppercase", padding: "0.4rem 1rem", borderRadius: "8px" }}>
              {article.category}
            </span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "600" }}>⏱️ {article.readTime}</span>
          </div>

          {/* Headline (H1) */}
          <h1 style={{ fontSize: "2.2rem", fontWeight: "900", color: "var(--text-main)", lineHeight: "1.3", marginBottom: "1.5rem" }}>
            {article.title}
          </h1>

          {/* E-E-A-T Verification Badge Box */}
          <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.2rem", display: "flex", gap: "1rem", alignItems: "center", marginBottom: "2.5rem" }}>
            <div style={{ fontSize: "2.5rem" }}>✍️</div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <strong style={{ color: "var(--text-main)", fontSize: "1rem" }}>Written & Verified by: {article.author}</strong>
                <span style={{ fontSize: "0.75rem", background: "rgba(34, 197, 94, 0.1)", color: "#22c55e", padding: "0.2rem 0.5rem", borderRadius: "12px", fontWeight: "bold" }}>
                  ✓ Fact Checked
                </span>
              </div>
              <p style={{ margin: "0.2rem 0 0 0", color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.5" }}>
                {article.authorDesc}
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <div style={{ position: "relative", width: "100%", height: "auto", overflow: "hidden", borderRadius: "20px", marginBottom: "2.5rem", border: "1px solid var(--border-color)" }}>
            <img 
              src={article.image} 
              alt={article.title} 
              style={{ width: "100%", height: "auto", display: "block" }} 
            />
          </div>

          {/* Article Body Content */}
          <div 
            className="rich-article-content"
            style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "1.05rem" }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Contextual Internal Links Section */}
          <section style={{ margin: "3.5rem 0", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", marginBottom: "1.2rem", borderLeft: "4px solid #c00030", paddingLeft: "0.8rem" }}>
              📌 In-Depth Coverage & Standings
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              To get complete coverage of the squads, team brackets, local time conversions, and tickets booking, explore the following hubs:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
              {relatedLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  style={{ display: "inline-flex", alignItems: "center", background: "var(--bg-tertiary)", color: "var(--text-main)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "0.5rem 1rem", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none", transition: "all 0.2s" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          {/* FAQ Block (NLP optimization / voice search) */}
          <section style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem", marginTop: "3.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
              Frequently Asked Questions (FAQs)
            </h2>
            <FaqAccordion items={article.faqs} />
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
