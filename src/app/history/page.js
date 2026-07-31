import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: "Hockey World Cup Winners: Pakistan Leads With 4 Titles",
  description: "Complete 1971-2023 Hockey World Cup winners list with every final scoreline, title counts by country, runners-up, host nations, and tournament stats.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/history",
  },
  openGraph: {
    title: "Hockey World Cup Winners: Pakistan Leads With 4 Titles",
    description: "Complete 1971-2023 Hockey World Cup winners list with every final scoreline, title counts by country, runners-up, and host nations.",
    url: "https://hockeyworldcup2026schedule.com/history",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup Winners List: All-Time Past Champions (1971-2026)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup Winners: Pakistan Leads With 4 Titles",
    description: "Complete 1971-2023 Hockey World Cup winners list with final scorelines and title counts.",
    images: ["/og-image.jpg"],
  },
};

export default function HistoryPage() {
  const faqItems = [
    {
      question: "Who has won the most Hockey World Cup titles?",
      answer: "Pakistan has won the most Men's Hockey World Cup titles with 4 championships (1971 Barcelona, 1978 Buenos Aires, 1982 Bombay, 1994 Sydney), followed by Netherlands (3), Australia (3), and Germany (3)."
    },
    {
      question: "Which team won the very first Hockey World Cup in 1971?",
      answer: "The inaugural FIH World Cup in 1971 held in Barcelona, Spain, was won by Pakistan, who defeated hosts Spain 1–0 in the final."
    },
    {
      question: "Has a host nation ever won the Hockey World Cup?",
      answer: "Yes, host nations have won the World Cup on three occasions: Germany in Monchengladbach (2006), Netherlands in Utrecht (1998), and Netherlands in Amstelveen (1973)."
    }
  ];

  const winnersList = [
    { year: 2023, host: "🇮🇳 India", winner: "Germany", winnerFlag: "de", score: "3 – 3 (5–4 pen)", runnerUp: "Belgium", runnerFlag: "be" },
    { year: 2018, host: "🇮🇳 India", winner: "Belgium", winnerFlag: "be", score: "0 – 0 (3–2 pen)", runnerUp: "Netherlands", runnerFlag: "nl" },
    { year: 2014, host: "🇳🇱 Netherlands", winner: "Australia", winnerFlag: "au", score: "6 – 1", runnerUp: "Netherlands", runnerFlag: "nl" },
    { year: 2010, host: "🇮🇳 India", winner: "Australia", winnerFlag: "au", score: "2 – 1", runnerUp: "Germany", runnerFlag: "de" },
    { year: 2006, host: "🇩🇪 Germany", winner: "Germany", winnerFlag: "de", score: "4 – 3", runnerUp: "Australia", runnerFlag: "au" },
    { year: 2002, host: "🇲🇾 Malaysia", winner: "Germany", winnerFlag: "de", score: "2 – 1", runnerUp: "Australia", runnerFlag: "au" },
    { year: 1998, host: "🇳🇱 Netherlands", winner: "Netherlands", winnerFlag: "nl", score: "3 – 2 (aet)", runnerUp: "Spain", runnerFlag: "es" },
    { year: 1994, host: "🇦🇺 Australia", winner: "Pakistan", winnerFlag: "pk", score: "1 – 1 (4–3 pen)", runnerUp: "Netherlands", runnerFlag: "nl" },
    { year: 1990, host: "🇵🇰 Pakistan", winner: "Netherlands", winnerFlag: "nl", score: "3 – 1", runnerUp: "Pakistan", runnerFlag: "pk" },
    { year: 1986, host: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", winner: "Australia", winnerFlag: "au", score: "2 – 1", runnerUp: "England", runnerFlag: "gb-eng" },
    { year: 1982, host: "🇮🇳 India", winner: "Pakistan", winnerFlag: "pk", score: "3 – 1", runnerUp: "West Germany", runnerFlag: "de" },
    { year: 1978, host: "🇦🇷 Argentina", winner: "Pakistan", winnerFlag: "pk", score: "3 – 2", runnerUp: "Netherlands", runnerFlag: "nl" },
    { year: 1975, host: "🇲🇾 Malaysia", winner: "India", winnerFlag: "in", score: "2 – 1", runnerUp: "Pakistan", runnerFlag: "pk" },
    { year: 1973, host: "🇳🇱 Netherlands", winner: "Netherlands", winnerFlag: "nl", score: "2 – 2 (4–2 pen)", runnerUp: "India", runnerFlag: "in" },
    { year: 1971, host: "🇪🇸 Spain", winner: "Pakistan", winnerFlag: "pk", score: "1 – 0", runnerUp: "Spain", runnerFlag: "es" },
  ];

  return (
    <>
      <Header />

      {/* JSON-LD Schema */}
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
                  { "@type": "ListItem", "position": 2, "name": "History", "item": "https://hockeyworldcup2026schedule.com/history" }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer,
                  },
                })),
              }
            ]
          }),
        }}
      />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Tournament Hall of Fame (1971–2026)</p>
          <h1 className="hero-title">Hockey World Cup Winners List</h1>
          
          {/* Direct Answer Box Snippet Target */}
          <div style={{ background: "rgba(0, 145, 255, 0.08)", border: "1px solid rgba(0, 145, 255, 0.2)", borderRadius: "12px", padding: "1.2rem 1.5rem", margin: "1rem 0 1.5rem 0", textAlign: "left" }}>
            <p style={{ margin: 0, fontSize: "1rem", color: "var(--text-main)", fontWeight: "600", lineHeight: "1.7" }}>
              💡 <strong>Direct Answer:</strong> <strong>Pakistan has won the most Hockey World Cups with 4 titles</strong> (1971, 1978, 1982, 1994). They are followed by the Netherlands (1973, 1990, 1998), Australia (1986, 2010, 2014), and Germany (2002, 2006, 2023) with 3 titles each. India won the title in 1975, and Belgium won in 2018.
            </p>
          </div>

          <div className="eeat-badge-container">
            <div className="eeat-badge" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid var(--border-color)", padding: "0.4rem 1rem", borderRadius: "8px", fontSize: "0.85rem" }}>
              ✅ Reviewed by <strong>HWC 2026 Editorial Desk</strong> (Cross-referenced against FIH Archives)
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">

        {/* ABOVE THE FOLD: Full Winners Table Since 1971 */}
        <section className="mb-16">
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #0091ff", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🏆 Complete All-Time Hockey World Cup Champions Table (1971 – 2023)
          </h2>
          <div className="table-responsive history-table-container">
            <table className="sports-table" style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-secondary)", borderRadius: "16px", overflow: "hidden" }}>
              <thead>
                <tr style={{ background: "var(--bg-tertiary)", borderBottom: "2px solid var(--border-color)" }}>
                  <th style={{ padding: "0.9rem" }}>Year</th>
                  <th style={{ padding: "0.9rem" }}>Host Nation</th>
                  <th style={{ padding: "0.9rem" }}>Champion / Winner</th>
                  <th style={{ padding: "0.9rem" }}>Final Scoreline</th>
                  <th style={{ padding: "0.9rem" }}>Runner-Up</th>
                </tr>
              </thead>
              <tbody>
                {winnersList.map((row) => (
                  <tr key={row.year} style={{ borderBottom: "1px solid var(--border-color)" }}>
                    <td style={{ padding: "0.9rem", fontWeight: "700", color: "#0091ff" }}>{row.year}</td>
                    <td style={{ padding: "0.9rem", color: "var(--text-main)" }}>{row.host}</td>
                    <td style={{ padding: "0.9rem" }}>
                      <img src={`https://flagcdn.com/w40/${row.winnerFlag}.png`} width="20" height="14" alt={`${row.winner} flag`} style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                      <strong style={{ color: "var(--text-main)" }}>{row.winner}</strong>
                    </td>
                    <td style={{ padding: "0.9rem", color: "var(--text-muted)", fontWeight: "600" }}>{row.score}</td>
                    <td style={{ padding: "0.9rem", color: "var(--text-muted)" }}>
                      <img src={`https://flagcdn.com/w40/${row.runnerFlag}.png`} width="20" height="14" alt={`${row.runnerUp} flag`} style={{ borderRadius: "2px", marginRight: "8px", verticalAlign: "middle" }} />
                      {row.runnerUp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Title Count Leaderboard */}
        <section className="insights-section-wrap mb-16" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1.5rem" }}>
            📊 Championship Titles Count By Country
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <div style={{ fontSize: "0.8rem", color: "#009900", fontWeight: "800", textTransform: "uppercase" }}>4 Titles (Most Successful)</div>
              <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", margin: "0.4rem 0" }}>🇵🇰 Pakistan</div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.6", margin: 0 }}>
                Champions in 1971, 1978, 1982, and 1994. Pakistan dominated field hockey's golden era.
              </p>
            </div>

            <div style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <div style={{ fontSize: "0.8rem", color: "#0091ff", fontWeight: "800", textTransform: "uppercase" }}>3 Titles Each</div>
              <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", margin: "0.4rem 0" }}>🇳🇱 / 🇩🇪 / 🇦🇺 Netherlands, Germany, Australia</div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.6", margin: 0 }}>
                Netherlands (1973, 1990, 1998), Germany (2002, 2006, 2023), and Australia (1986, 2010, 2014).
              </p>
            </div>

            <div style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <div style={{ fontSize: "0.8rem", color: "#f59e0b", fontWeight: "800", textTransform: "uppercase" }}>1 Title Each</div>
              <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", margin: "0.4rem 0" }}>🇮🇳 India & 🇧🇪 Belgium</div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.6", margin: 0 }}>
                India lifted the trophy in 1975 at Kuala Lumpur, while Belgium captured their maiden title in 2018 at Bhubaneswar.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #0091ff", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — World Cup History
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        {/* Keyword Anchors to 2026 Hubs */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1.2rem" }}>📌 Explore 2026 Tournament Coverage</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              { href: "/schedule", label: "📅 Hockey World Cup 2026 Full Schedule" },
              { href: "/points-table", label: "📈 Hockey World Cup 2026 Points Table" },
              { href: "/hockey-world-cup-2026-schedule-pakistan", label: "🇵🇰 Pakistan Hockey World Cup 2026 Schedule & PKT Timings" },
              { href: "/hockey-world-cup-2026-schedule-india", label: "🇮🇳 India Hockey World Cup 2026 Schedule" },
              { href: "/matches/india-vs-pakistan", label: "⚔️ India vs Pakistan Match Preview" },
              { href: "/past-results", label: "📊 2023 World Cup Past Results & Stats" },
              { href: "/tickets", label: "🎟️ Hockey World Cup 2026 Tickets & Prices" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "var(--bg-tertiary)", color: "var(--text-main)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "0.5rem 1rem", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none" }}>
                {link.label}
              </a>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
