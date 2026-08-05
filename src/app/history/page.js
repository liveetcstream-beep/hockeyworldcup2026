import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: "Hockey World Cup Winners List (1971–2026): All Men's & Women's Champions",
  description: "Complete list of all Men's (1971-2023) and Women's (1974-2022) Hockey World Cup winners, final scores, runners-up, host nations, and title standings.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/history",
  },
  openGraph: {
    title: "Hockey World Cup Winners List (1971–2026): All Men's & Women's Champions",
    description: "Complete list of all Men's and Women's Hockey World Cup winners with full final scorelines, title counts, runners-up, and host cities.",
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
    title: "Hockey World Cup Winners List (1971–2026): All Men's & Women's Champions",
    description: "Complete Men's & Women's FIH Hockey World Cup winners list with final scorelines and title records.",
    images: ["/og-image.jpg"],
  },
};

export default function HistoryPage() {
  const faqItems = [
    {
      question: "Who has won the most Men's Hockey World Cup titles?",
      answer: "Pakistan has won the most Men's Hockey World Cup titles with 4 victories (1971 Barcelona, 1978 Buenos Aires, 1982 Bombay, 1994 Sydney), followed by Netherlands (3), Australia (3), and Germany (3)."
    },
    {
      question: "Who has won the most Women's Hockey World Cup titles?",
      answer: "The Netherlands dominates the Women's Hockey World Cup with a record 9 championship titles (1974, 1978, 1983, 1986, 1990, 2006, 2014, 2018, 2022), followed by Argentina (2), Australia (2), and Germany (2)."
    },
    {
      question: "Which nation won the last Hockey World Cup in 2023?",
      answer: "Germany won the 2023 Men's Hockey World Cup in Bhubaneswar & Rourkela, India, defeating Belgium 5–4 in a dramatic penalty shootout after a 3–3 draw in regulation time."
    },
    {
      question: "Which team won the very first Hockey World Cup in 1971?",
      answer: "The inaugural FIH World Cup in 1971 held in Barcelona, Spain, was won by Pakistan, who defeated hosts Spain 1–0 in the final."
    },
    {
      question: "How many times has India won the Hockey World Cup?",
      answer: "India has won the Men's Hockey World Cup once, lifting the trophy in 1975 at Kuala Lumpur, Malaysia, after defeating Pakistan 2–1 in the final."
    },
    {
      question: "Has a host nation ever won the Hockey World Cup?",
      answer: "Yes, host nations have won the World Cup on three occasions: Germany in Monchengladbach (2006), Netherlands in Utrecht (1998), and Netherlands in Amstelveen (1973)."
    }
  ];

  const mensWinnersList = [
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

  const womensWinnersList = [
    { year: 2022, host: "🇪🇸/🇳🇱 Spain & Netherlands", winner: "Netherlands", winnerFlag: "nl", score: "3 – 1", runnerUp: "Argentina", runnerFlag: "ar" },
    { year: 2018, host: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", winner: "Netherlands", winnerFlag: "nl", score: "6 – 0", runnerUp: "Ireland", runnerFlag: "ie" },
    { year: 2014, host: "🇳🇱 Netherlands", winner: "Netherlands", winnerFlag: "nl", score: "2 – 0", runnerUp: "Australia", runnerFlag: "au" },
    { year: 2010, host: "🇦🇷 Argentina", winner: "Argentina", winnerFlag: "ar", score: "3 – 1", runnerUp: "Netherlands", runnerFlag: "nl" },
    { year: 2006, host: "🇪🇸 Spain", winner: "Netherlands", winnerFlag: "nl", score: "3 – 1", runnerUp: "Australia", runnerFlag: "au" },
    { year: 2002, host: "🇦🇺 Australia", winner: "Argentina", winnerFlag: "ar", score: "1 – 1 (4–3 pen)", runnerUp: "Netherlands", runnerFlag: "nl" },
    { year: 1998, host: "🇳🇱 Netherlands", winner: "Australia", winnerFlag: "au", score: "3 – 2", runnerUp: "Netherlands", runnerFlag: "nl" },
    { year: 1994, host: "🇮🇪 Ireland", winner: "Australia", winnerFlag: "au", score: "2 – 0", runnerUp: "Argentina", runnerFlag: "ar" },
    { year: 1990, host: "🇦🇺 Australia", winner: "Netherlands", winnerFlag: "nl", score: "3 – 1", runnerUp: "England", runnerFlag: "gb-eng" },
    { year: 1986, host: "🇳🇱 Netherlands", winner: "Netherlands", winnerFlag: "nl", score: "3 – 0", runnerUp: "West Germany", runnerFlag: "de" },
    { year: 1983, host: "🇲🇾 Malaysia", winner: "Netherlands", winnerFlag: "nl", score: "4 – 2", runnerUp: "Canada", runnerFlag: "ca" },
    { year: 1981, host: "🇦🇷 Argentina", winner: "West Germany", winnerFlag: "de", score: "1 – 1 (3–1 pen)", runnerUp: "Netherlands", runnerFlag: "nl" },
    { year: 1978, host: "🇪🇸 Spain", winner: "Netherlands", winnerFlag: "nl", score: "1 – 0", runnerUp: "West Germany", runnerFlag: "de" },
    { year: 1976, host: "🇩🇪 West Germany", winner: "West Germany", winnerFlag: "de", score: "2 – 0", runnerUp: "Argentina", runnerFlag: "ar" },
    { year: 1974, host: "🇫🇷 France", winner: "Netherlands", winnerFlag: "nl", score: "1 – 0", runnerUp: "Argentina", runnerFlag: "ar" },
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
          <h1 className="hero-title">Hockey World Cup Winners List (All-Time Champions)</h1>
          
          {/* Summary Box */}
          <div style={{ background: "rgba(0, 145, 255, 0.08)", border: "1px solid rgba(0, 145, 255, 0.2)", borderRadius: "12px", padding: "1.2rem 1.5rem", margin: "1rem 0 1.5rem 0", textAlign: "left" }}>
            <p style={{ margin: 0, fontSize: "1rem", color: "var(--text-main)", fontWeight: "500", lineHeight: "1.7" }}>
              <strong>Pakistan has won the most Hockey World Cups with 4 titles</strong> (1971, 1978, 1982, 1994). They are followed by the Netherlands (1973, 1990, 1998), Australia (1986, 2010, 2014), and Germany (2002, 2006, 2023) with 3 titles each. India won the title in 1975, and Belgium won in 2018.
            </p>
          </div>

          {/* E-E-A-T Signal Box */}
          <div className="eeat-badge-container">
            <div className="eeat-badge" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid var(--border-color)", padding: "0.4rem 1rem", borderRadius: "8px", fontSize: "0.85rem" }}>
              ✅ Verified by <strong>HWC Editorial Desk</strong> (Cross-referenced against FIH TMS Historical Archives)
            </div>
          </div>
        </div>
      </section>

      <main className="sports-container py-12">

        {/* INLINE QUESTION SUBHEADING 1 */}
        <section className="mb-16">
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #0091ff", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🏆 Men's Hockey World Cup Winners List (1971 – 2023)
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
            Since the inaugural Men's World Cup in Barcelona in 1971, 15 tournaments have taken place. Here is the official year-by-year champions list with final scorelines and runner-up nations:
          </p>
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
                {mensWinnersList.map((row) => (
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

        {/* INLINE QUESTION SUBHEADING 2 */}
        <section className="mb-16">
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #10b981", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            🥇 Women's Hockey World Cup Winners List (1974 – 2022)
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
            The Women's FIH World Cup launched in 1974 in Mandelieu, France. The Netherlands women's team has dominated the event with 9 titles. Below is the complete champions breakdown:
          </p>
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
                {womensWinnersList.map((row) => (
                  <tr key={row.year} style={{ borderBottom: "1px solid var(--border-color)" }}>
                    <td style={{ padding: "0.9rem", fontWeight: "700", color: "#10b981" }}>{row.year}</td>
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
              <div style={{ fontSize: "0.8rem", color: "#009900", fontWeight: "800", textTransform: "uppercase" }}>4 Men's Titles</div>
              <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", margin: "0.4rem 0" }}>🇵🇰 Pakistan</div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.6", margin: 0 }}>
                Men's champions in 1971, 1978, 1982, and 1994.
              </p>
            </div>

            <div style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <div style={{ fontSize: "0.8rem", color: "#0091ff", fontWeight: "800", textTransform: "uppercase" }}>12 Total Titles (9 Women's + 3 Men's)</div>
              <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", margin: "0.4rem 0" }}>🇳🇱 Netherlands</div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.6", margin: 0 }}>
                Most successful field hockey nation across both men's and women's competitions.
              </p>
            </div>

            <div style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
              <div style={{ fontSize: "0.8rem", color: "#f59e0b", fontWeight: "800", textTransform: "uppercase" }}>5 Total Titles (3 Men's + 2 Women's)</div>
              <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-main)", margin: "0.4rem 0" }}>🇩🇪 Germany / 🇦🇺 Australia</div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.6", margin: 0 }}>
                Both nations hold 3 Men's titles and 2 Women's World Cup trophies.
              </p>
            </div>
          </div>
        </section>

        {/* Structured FAQ Block */}
        <section className="mb-16">
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-main)", fontStyle: "italic", borderLeft: "4px solid #0091ff", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions — World Cup Winners & History
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        {/* Internal Linking Hub */}
        <section style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "20px", padding: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1.2rem" }}>📌 Explore 2026 Tournament Coverage</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              { href: "/schedule", label: "📅 Hockey World Cup 2026 Full Schedule" },
              { href: "/points-table", label: "📈 Hockey World Cup 2026 Points Table" },
              { href: "/hockey-world-cup-2026-schedule-pakistan", label: "🇵🇰 Pakistan Schedule & PKT Timings" },
              { href: "/hockey-world-cup-2026-schedule-india", label: "🇮🇳 India Schedule & IST Timings" },
              { href: "/matches/india-vs-pakistan", label: "⚔️ India vs Pakistan Match Preview" },
              { href: "/rankings", label: "📊 FIH World Rankings Table" },
              { href: "/tickets", label: "🎟️ Hockey World Cup 2026 Tickets Guide" },
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

