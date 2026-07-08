import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Belfius Hockey Arena Wavre Visitor Guide: Tickets, Parking & Hotels",
  description: "Heading to Belfius Hockey Arena in Wavre, Belgium for HWC 2026? Read our expert visitor guide on parking, train routes from Brussels, and hotels nearby.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/venues/belfius-arena-guide",
  },
};

export default function BelfiusArenaGuide() {
  const faqItems = [
    { question: "What is the address of Belfius Hockey Arena?", answer: "The arena is situated at Avenue de la Toison d'Or, 1300 Wavre, Belgium. It is located close to the popular Walibi Belgium theme park." },
    { question: "Where should I park on matchdays?", answer: "The arena has limited on-site parking. Fans are advised to utilize the dedicated overflow parking lots at Walibi Belgium or take regional trains directly into Wavre and use the shuttle service." },
    { question: "How to travel from Brussels to Belfius Hockey Arena?", answer: "You can take direct regional trains from Brussels-Luxembourg or Brussels-Schuman station to Wavre station, which takes around 30 to 40 minutes. From Wavre station, shuttle buses run directly to the arena on matchdays." },
    { question: "Is the arena covered or open?", answer: "Belfius Hockey Arena is a brand-new facility featuring a covered main grandstand, but side seating areas are exposed to the weather. Expect cool evening drafts due to the open surrounding geography of Wavre." }
  ];

  return (
    <>

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
                  { "@type": "ListItem", "position": 2, "name": "Venues", "item": "https://hockeyworldcup2026schedule.com/venues" },
                  { "@type": "ListItem", "position": 3, "name": "Belfius Arena Guide", "item": "https://hockeyworldcup2026schedule.com/venues/belfius-arena-guide" }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              }
            ]
          })
        }}
      />
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">🏟️ Stadium & Visitor Guides</p>
          <h1 className="hero-title">Belfius Hockey Arena Wavre Visitor Guide</h1>
          <p className="hero-description">
            Your essential guide to matchday at the brand-new Belfius Hockey Arena in Wavre, Belgium. Discover the best transit connections from Brussels, parking options, and where to stay.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Written by: <strong>Jean-Pierre Dubois (Belgian Sports Journalist)</strong>
            </div>
            <div className="eeat-badge">
              📅 Updated: <strong>July 2026</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <a href="/venues" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Venues</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Belfius Arena Guide</span>
        </nav>

        {/* Introduction */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Belgium's World-Class Hockey Stadium
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            The brand-new <strong>Belfius Hockey Arena</strong> in Wavre is a purpose-built facility designed to elevate field hockey in Belgium. Boasting a seating capacity of 10,000, this stadium will host the Belgian Red Lions' home pool matches, crossover games, and the Men's World Cup Grand Finale.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            Constructed alongside Wavre's major sports corridor, the arena is located right next to the famous <strong>Walibi Belgium</strong> amusement park. While the facility is state-of-the-art, its location on the outskirts of Wavre means transport planning is crucial to avoid heavy traffic on local roads.
          </p>
        </section>

        {/* Public Transit and Travel */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            How to Reach Belfius Hockey Arena
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Wavre is situated in Walloon Brabant, about 30 km southeast of Brussels. Here are your primary transit options:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>🚆 Trains from Brussels</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                The most reliable route is taking the Belgian regional train (S8 line) from <strong>Brussels-Schuman</strong> or <strong>Brussels-Luxembourg</strong> directly to <strong>Wavre</strong> or <strong>Bierges-Walibi</strong> station. Trains run every 30 minutes, and the journey takes roughly 35 minutes.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>🚌 Matchday Shuttles</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                During the World Cup, free shuttle buses run continuously from Wavre's main train station (Gare de Wavre) directly to the Belfius Hockey Arena gates starting 2 hours before the first match and ending 2 hours after the final whistle.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>🚗 Driving & Highways</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                If driving, take the <strong>E411 highway</strong> (Brussels - Namur) and exit at Exit 6 (Wavre). Follow the signs for Walibi Belgium. Expect significant delays on the exit ramps during evening match schedules.
              </p>
            </div>
          </div>
        </section>

        {/* Local Tips & Pain Points */}
        <section style={{ background: "rgba(192,0,48,0.03)", border: "1px solid rgba(192,0,48,0.1)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
            ⚠️ Avoid the Matchday Traps: Local Tips
          </h2>
          <ul style={{ color: "var(--text-muted)", lineHeight: "1.8", paddingLeft: "1.2rem", margin: 0 }}>
            <li style={{ marginBottom: "0.8rem" }}>
              <strong>Parking Jam:</strong> The arena is close to the Walibi amusement park. On hot summer days, Walibi traffic mixes with hockey traffic, blocking the main avenue. We recommend booking parking vouchers online in advance or parking in the Brussels outskirts and taking the train.
            </li>
            <li style={{ marginBottom: "0.8rem" }}>
              <strong>Chilly Drafts:</strong> Because Wavre is situated in a relatively flat, open valley region, the evening matches at Belfius Arena can get quite cold and drafty. Always bring a windbreaker or light jacket, even if daytime temperatures were warm.
            </li>
            <li>
              <strong>Cashless Payments:</strong> Like most modern arenas, Belfius Hockey Arena is a cashless venue. Food kiosks and merchandise stalls accept major credit cards, Apple Pay, and local Bancontact.
            </li>
          </ul>
        </section>

        {/* Where to Stay */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Where to Stay in Wavre & Brussels
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Wavre itself has limited hotel capacity. To secure the best accommodation, consider these options:
          </p>
          <ul style={{ color: "var(--text-muted)", paddingLeft: "1.2rem" }}>
            <li style={{ marginBottom: "0.8rem" }}><strong>Stay in Brussels:</strong> This is highly recommended. Booking a hotel near Brussels East (European Quarter) gives you direct access to the S8 train lines to Wavre, along with hundreds of restaurants and sightseeing options.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Wavre/Louvain-la-Neuve:</strong> A university town located 5 km south of Wavre, Louvain-la-Neuve offers modern hotels, student-budget accommodation, and a lively pedestrian center.</li>
            <li><strong>Local Guesthouses:</strong> Look for local B&Bs and Airbnb accommodations in the countryside towns of Walloon Brabant for a quiet, scenic stay.</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqItems.map((item, idx) => (
              <div key={idx} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "1.2rem" }}>
                <h4 style={{ color: "var(--text-main)", fontWeight: "700", margin: "0 0 0.5rem 0", fontSize: "1rem" }}>{item.question}</h4>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
