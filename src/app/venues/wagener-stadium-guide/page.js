import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Wagener Stadium Amstelveen Visitor Guide: Hotels, Parking & Transit",
  description: "Heading to Wagener Stadium for the 2026 Hockey World Cup? Read our expert visitor guide on hotels near Amsterdamse Bos, parking tips, metro routes, and local weather.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/venues/wagener-stadium-guide",
  },
  openGraph: {
    title: "Wagener Stadium Amstelveen Visitor Guide: Hotels, Parking & Transit",
    description: "Heading to Wagener Stadium for the 2026 Hockey World Cup? Read our expert visitor guide on hotels near Amsterdamse Bos, parking tips, metro routes, and local weather.",
    url: "https://hockeyworldcup2026schedule.com/venues/wagener-stadium-guide",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wagener Stadium Amstelveen Visitor Guide: Hotels, Parking & Transit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wagener Stadium Amstelveen Visitor Guide: Hotels, Parking & Transit",
    description: "Heading to Wagener Stadium for the 2026 Hockey World Cup? Read our expert visitor guide on hotels near Amsterdamse Bos, parking tips, metro routes, and local weather.",
    images: ["/og-image.jpg"],
  },
};


export default function WagenerStadiumGuide() {
  const faqItems = [
    { question: "What is the exact address of Wagener Stadium?", answer: "The stadium is located at Nieuwe Kalfjeslaan 21, 1182 AM Amstelveen, Netherlands. It sits on the edge of the Amsterdamse Bos (Amsterdam Forest)." },
    { question: "Can I drive and park directly at Wagener Stadium?", answer: "No, direct parking at the stadium is strictly restricted on matchdays. You are advised to use the P+R (Park and Ride) facilities in Amstelveen or Amsterdam and take public transit, or travel by bicycle." },
    { question: "How far is the stadium from Amsterdam city center?", answer: "It is about 8 kilometers south of central Amsterdam. By public transit (Metro 25 or local buses), it takes roughly 25 to 35 minutes to reach the stadium from Amsterdam Centraal." },
    { question: "Are there hotels within walking distance?", answer: "Yes, there are several hotels in southern Amsterdam (near Buitenveldert and the Zuidas business district) and northern Amstelveen that are within a 20-30 minute walk or a short bike ride." }
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
                  { "@type": "ListItem", "position": 3, "name": "Wagener Stadium Guide", "item": "https://hockeyworldcup2026schedule.com/venues/wagener-stadium-guide" }
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
          <h1 className="hero-title">Wagener Stadium Amstelveen Visitor Guide</h1>
          <p className="hero-description">
            Your comprehensive, local guide to matchday at the historic Wagener Stadium in Amstelveen, Netherlands. Get the inside track on transit routes, parking traps, and the best places to stay.
          </p>
          <div className="eeat-badge-container">
            <div className="eeat-badge">
              ✍️ Written by: <strong>Bram van de Meer (Dutch Sports Travel Journalist)</strong>
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
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Wagener Stadium Guide</span>
        </nav>

        {/* Introduction */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            The Spiritual Home of Dutch Hockey
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Wagener Stadium (officially Albert Wagener Stadion) has been the crown jewel of Dutch field hockey since it opened in 1938. Located in the lush <strong>Amsterdamse Bos</strong> (Amsterdam Forest), this venue features an intimate setting where fans sit incredibly close to the pitch, creating an electric atmosphere during night games under the floodlights.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            For the 2026 FIH Hockey World Cup, the stadium will host all Dutch home pool fixtures, crossover battles, and key knockouts. With a capacity of around 9,000, demand for tickets is extremely high, making early travel and logistical planning vital for a stress-free matchday.
          </p>
        </section>

        {/* Local Transit Options */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            How to Get to Wagener Stadium
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Wagener Stadium is tucked inside a forest reserve, meaning public transit and bicycles are by far the most convenient options. Here is how you can get to <strong>Nieuwe Kalfjeslaan 21</strong>:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>🚇 Metro & Tram</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                Take <strong>Metro 25</strong> from Amsterdam Centraal or Amsterdam Zuid heading towards Amstelveen Westwijk. Get off at the <strong>Uilenstede</strong> stop. From there, it is a pleasant 15-minute walk westward through the residential paths to the forest entrance.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>🚲 The Local Way: Bicycles</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                If you are staying in Amsterdam or Amstelveen, rent a Swapfiets or use an OV-Fiets. The stadium is fully connected to the Dutch cycle network. You can ride directly from Amsterdam Museumplein through the forest paths in under 25 minutes. Plenty of temporary bike racks are installed.
              </p>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.8rem" }}>🚌 Bus Routes</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                Bus lines <strong>347</strong> and <strong>357</strong> run frequently from Amsterdam Elandsgracht to Amstelveen bus station. Get off at the <strong>Kalfjeslaan</strong> bus stop on the Amstelveenseweg and walk 5 minutes down Nieuwe Kalfjeslaan.
              </p>
            </div>
          </div>
        </section>

        {/* Matchday Pain Points & Hacks */}
        <section style={{ background: "rgba(192,0,48,0.03)", border: "1px solid rgba(192,0,48,0.1)", borderRadius: "20px", padding: "2rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem" }}>
            ⚠️ Avoid the Matchday Traps: Local Tips
          </h2>
          <ul style={{ color: "var(--text-muted)", lineHeight: "1.8", paddingLeft: "1.2rem", margin: 0 }}>
            <li style={{ marginBottom: "0.8rem" }}>
              <strong>Parking Warning:</strong> There is absolutely no street parking allowed on Nieuwe Kalfjeslaan during matchdays. Local parking enforcement is ruthless, and cars will be towed. If you must drive, park at the <strong>P+R RAI Amsterdam</strong> or <strong>P+R Kronenburg</strong> and transfer to transit.
            </li>
            <li style={{ marginBottom: "0.8rem" }}>
              <strong>Dutch Rain:</strong> Even in mid-August, North Holland is prone to sudden rain showers. The main grandstand has partial coverage, but the side stands are completely open to the elements. Bring a light poncho (umbrellas block the view of fans behind you).
            </li>
            <li>
              <strong>Food & Cash:</strong> The stadium concourse is entirely cashless (cards only). We recommend grabbing snacks or a picnic in the Amsterdamse Bos forest park before the gates open, as queues inside can get long during halftime.
            </li>
          </ul>
        </section>

        {/* Where to Stay */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #c00030", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Recommended Hotels Near Wagener Stadium
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Staying in southern Amsterdam (Buitenveldert/Zuidas) or Amstelveen keeps you closest to the venue. Here are three recommended areas:
          </p>
          <ul style={{ color: "var(--text-muted)", paddingLeft: "1.2rem" }}>
            <li style={{ marginBottom: "0.8rem" }}><strong>Amsterdam Zuidas (Business District):</strong> Located 2.5 km north. Hotels like the <em>CitizenM Amstel</em> and <em>nhow Amsterdam RAI</em> offer excellent transit connections to Amstelveen.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Uilenstede Area:</strong> Extremely close student district bordering Amstelveen. Great for budget hostels and short-stay apartments.</li>
            <li><strong>Amstelveen Center (Stadshart):</strong> Offers quiet boutique hotels and local dining, located just 2.5 km south of the forest gates.</li>
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
