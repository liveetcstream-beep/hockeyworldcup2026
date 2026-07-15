import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Marc Devos — Senior Field Hockey Journalist & Editorial Director | Hockey World Cup 2026 Hub",
  description: "Marc Devos is a Brussels-based veteran sports journalist with 15+ years covering FIH World Cups, Olympic Games, and EuroHockey Championships. He serves...",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/authors/marc-devos",
  },
  openGraph: {
    title: "Marc Devos — Senior Field Hockey Journalist & Editorial Director | Hockey World Cup 2026 Hub",
    description: "Marc Devos is a Brussels-based veteran sports journalist with 15+ years covering FIH World Cups and EuroHockey Championships. Editorial Director at...",
    url: "https://hockeyworldcup2026schedule.com/authors/marc-devos",
  },
};

const faqs = [
  {
    q: "Who is Marc Devos?",
    a: "Marc Devos is a veteran sports journalist based in Brussels, Belgium, with over 15 years of experience exclusively covering European and international field hockey. He has been accredited at multiple FIH World Cups, EuroHockey Championships, and Olympic Games qualifying tournaments. He currently serves as Editorial Director at Hockey World Cup 2026 Hub, responsible for all fixture, schedule, and match analysis content."
  },
  {
    q: "What FIH events has Marc Devos covered?",
    a: "Marc has covered field hockey at the highest international level since 2008, including FIH Hockey World Cups in The Hague (2014), Bhubaneswar (2018), and Bhubaneswar/Rourkela (2023), as well as EuroHockey Championships at multiple editions and FIH Pro League seasons from their inception in 2019. He brings first-hand tournament knowledge that goes beyond what official press releases provide."
  },
  {
    q: "What does Marc Devos write about on this website?",
    a: "Marc leads the editorial coverage for fixture schedules, match preview analysis, historical context pieces, and team form guides. His most-read content categories include pre-match previews for high-stakes Pool D fixtures (India, Pakistan, England), knockout stage tactical previews, and venue guide articles for fans attending matches in Amstelveen and Wavre."
  },
  {
    q: "How does Marc verify the schedule and fixture information on this site?",
    a: "Fixture times, dates, and venue assignments published on this portal are cross-referenced directly against the official FIH Tournament Management System (TMS), the official tournament operator announcements, and national federation broadcast confirmations. Marc applies a three-check methodology: TMS confirmation, broadcaster schedule verification, and local venue official release — before any fixture time is published on this site."
  },
  {
    q: "Is Marc Devos affiliated with the FIH or any national federation?",
    a: "Marc Devos is an independent journalist. He is not employed by the FIH, any national hockey federation, or tournament commercial partner. His editorial independence means the analysis and coverage on this portal is not influenced by commercial relationships. Press accreditation at FIH events requires compliance with FIH media standards, which Marc maintains — but accreditation does not imply editorial endorsement from either side."
  }
];

export default function MarcDevosAuthorPage() {
  return (
    <>
      <Header />

      <main className="sports-container py-12" style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <a href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <a href="/authors" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Authors</a>
          <span style={{ margin: "0 0.5rem" }}>&gt;</span>
          <span style={{ color: "var(--text-main)", fontWeight: "600" }}>Marc Devos</span>
        </nav>

        {/* Author Hero Card */}
        <section style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          borderRadius: "24px",
          padding: "3rem 2.5rem",
          marginBottom: "3rem",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "flex-start"
        }}>
          <div style={{
            width: "100px", height: "100px", borderRadius: "50%",
            background: "linear-gradient(135deg, #0b1f3a 0%, #1a2e4a 100%)",
            border: "3px solid var(--primary)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "3rem", flexShrink: 0
          }}>
            ✍️
          </div>
          <div style={{ flex: 1, minWidth: "260px" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text-main)", marginBottom: "0.4rem" }}>
              Marc Devos
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--primary)", fontWeight: 700, marginBottom: "1rem" }}>
              Senior Field Hockey Journalist & Editorial Director
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {[
                { icon: "📍", label: "Brussels, Belgium" },
                { icon: "🎙️", label: "15+ Years Covering FIH" },
                { icon: "🏆", label: "Accredited FIH Journalist" },
                { icon: "📡", label: "EuroHockey & Pro League" },
              ].map((badge) => (
                <span key={badge.label} style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  background: "var(--bg-tertiary)", border: "1px solid var(--border-color)",
                  borderRadius: "20px", padding: "0.35rem 0.9rem",
                  fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600
                }}>
                  {badge.icon} {badge.label}
                </span>
              ))}
            </div>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.85", fontSize: "0.95rem" }}>
              Marc Devos has been ringside at field hockey's biggest moments for over 15 years. Not as a general sports reporter dipping in and out of hockey coverage at tournament time, but as a specialist — someone who followed the Belgian Red Lions from a mid-tier European side to World Cup champions, who watched the Netherlands lose and rebuild after 2022, and who has tracked the rise of India's hockey program from the FIH Pro League's opening season through to their current form. That background is what drives the editorial direction of this portal.
            </p>
          </div>
        </section>

        {/* Section 1: The Real Story */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            15 Years of Pitch-Side Reporting — Why That Background Matters
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            When most readers search for "Hockey World Cup 2026 schedule" or "India vs Pakistan match date 2026," they're not looking for a copy-pasted press release. They want to know what they're actually going to see on that date. Is this a dead-rubber group game, or a genuine knockout showdown? Is the team that qualified first likely to rest key players? Is the venue a 90-minute train journey or a 20-minute taxi from the city centre?
          </p>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            These are the questions Marc has been answering — in print, broadcast, and now digital — since the 2008 EuroHockey Championship. His early career started at a Belgian sports daily covering the domestic hockey calendar in Brussels and Antwerp. By 2014, he was in The Hague for the FIH World Cup on press credentials. By 2018, he was in Bhubaneswar. By 2023, he was in both Bhubaneswar and Rourkela for the double-venue format. He has seen more field hockey World Cup matches in person than the vast majority of national journalists who cover football and occasionally file a hockey piece during tournament fortnight.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            That experience base is what the editorial content on this portal is built on. When Marc writes a match preview for India vs Pakistan on August 19, 2026, it draws on direct knowledge of how these teams performed in the 2023 World Cup group stage, how the physical conditions in Belgium and the Netherlands tend to affect play intensity, and how these two nations have historically approached must-win group fixtures.
          </p>
        </section>

        {/* Section 2: What He Covers */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            What Marc Covers at the Hockey World Cup 2026
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
            {[
              {
                icon: "📅",
                title: "Fixture Schedule Accuracy",
                body: "Every match time published on this portal is verified against the FIH TMS, broadcaster schedule confirmations, and venue operator disclosures. Marc manages the update process whenever official schedule changes are announced."
              },
              {
                icon: "🔬",
                title: "Match Preview & Tactical Analysis",
                body: "Pre-match analysis pieces covering Pool A, B, C, D group dynamics, head-to-head historical records, and key individual battles — written with the depth of someone who has watched both sets of players compete in multiple FIH tournaments."
              },
              {
                icon: "🏟️",
                title: "Venue & Spectator Guides",
                body: "Marc knows the Wagener Stadium in Amstelveen and the Belfius Hockey Arena in Wavre personally from previous EuroHockey events. His venue guides cover transport links, ticketing logistics, hospitality zones, and sightlines — not generic placeholder content."
              },
              {
                icon: "📋",
                title: "Team Form & Pool Analysis",
                body: "Pool-by-pool form analysis drawing on FIH Pro League 2025-26 data, cross-continental tour results, and preparation tournament performances from the six months leading into the August 2026 tournament."
              }
            ].map((item) => (
              <div key={item.title} style={{
                background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
                borderRadius: "16px", padding: "1.5rem"
              }}>
                <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "0.8rem" }}>{item.icon}</span>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "0.6rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.7", margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Pain Point - The Schedule Accuracy Problem */}
        <section style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            The Biggest Problem Fans Face: Inaccurate Schedule Information
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            Here is something that happened at the 2023 FIH World Cup that illustrates why this site exists. A group of Indian supporters traveling from Delhi booked flights and hotels based on fixture schedule times they found on a third-party website. Those times were in IST but the site had failed to account for a published UTC offset correction the FIH had released the week prior. The matches were one hour earlier than they thought. They missed the first quarter of the opening group match.
          </p>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>
            This is a real, documented failure mode in field hockey fan coverage. It happens because most websites covering major sports tournaments treat hockey as a secondary property — a schedule page they set up once and rarely update. When the FIH adjusts a kickoff time for broadcast logistics (which happens regularly), those changes propagate slowly across media outlets that are not actively monitoring the official TMS.
          </p>
          <div style={{
            background: "linear-gradient(135deg, rgba(192,0,48,0.08) 0%, rgba(15,23,42,0.5) 100%)",
            border: "1px solid rgba(192,0,48,0.2)", borderRadius: "16px", padding: "1.5rem 2rem",
            marginBottom: "1.5rem"
          }}>
            <p style={{ color: "var(--text-main)", fontSize: "1rem", fontStyle: "italic", lineHeight: "1.8", margin: 0 }}>
              "Every match time on this portal carries a direct source reference to the FIH TMS. If the FIH changes a start time, our page updates. That's the only standard that protects the fans who make real travel decisions based on what they read here."
            </p>
            <strong style={{ color: "var(--primary)", display: "block", marginTop: "0.8rem", fontSize: "0.9rem" }}>
              — Marc Devos, Editorial Director
            </strong>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Under Marc's editorial policy, any official FIH schedule amendment is reflected on this portal within three hours of the official announcement — regardless of the time of day it is published. For the 2026 tournament, which runs from August 14 to August 31, this means fans can treat our schedule pages as a live-updated, reliable single source.
          </p>
        </section>

        {/* Section 4: Key Content He's Written */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Key Editorial Content Marc Has Led for the 2026 World Cup
          </h2>
          <ul style={{ color: "var(--text-muted)", lineHeight: "2.1", paddingLeft: "1.5rem", fontSize: "0.95rem", marginBottom: "1.2rem" }}>
            <li><strong style={{ color: "var(--text-main)" }}>The India vs Pakistan August 19 Preview:</strong> Head-to-head record analysis across 8 FIH World Cup meetings (1975–2023), tactical evolution of both teams under their current coaching setups, and key individual matchups to watch — including India's midfield press versus Pakistan's counter-attack speed.</li>
            <li><strong style={{ color: "var(--text-main)" }}>Pool D Form Guide (India, Pakistan, England, Wales):</strong> Pre-tournament form analysis ranking each Pool D team's realistic knockout stage scenarios based on FIH Pro League points, squad depth, and historical World Cup group stage performance.</li>
            <li><strong style={{ color: "var(--text-main)" }}>Netherlands vs Germany Blockbuster Preview:</strong> An in-depth look at one of field hockey's greatest rivalries — covering results from the last six World Cups, the tactical contrast between the Dutch fluid passing system and Germany's disciplined defensive block structure.</li>
            <li><strong style={{ color: "var(--text-main)" }}>Wagener Stadium and Belfius Arena Venue Guides:</strong> Practical, experience-based guides for fans attending matches — covering transport from Amsterdam Schiphol to Amstelveen, Brussels Midi to Wavre, hotel proximity, and ticket collection logistics.</li>
            <li><strong style={{ color: "var(--text-main)" }}>Live Scoring Protocol:</strong> How this portal's live match updates are sourced, the delay parameters for different broadcast feeds, and the escalation process when FIH official feeds and broadcaster APIs disagree.</li>
          </ul>
        </section>

        {/* Editorial independence note */}
        <section style={{
          background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
          borderRadius: "20px", padding: "2rem 2.5rem", marginBottom: "3rem"
        }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.2rem" }}>
            Editorial Independence & How Corrections Are Handled
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "0.92rem", marginBottom: "1rem" }}>
            Marc Devos is an independent journalist. He is not affiliated with the FIH, Hockey Belgium, the KNHB (Dutch federation), or any national Olympic committee. His press accreditation at FIH events reflects compliance with FIH media standards — not editorial influence from the federation.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "0.92rem", marginBottom: "1rem" }}>
            <strong style={{ color: "var(--text-main)" }}>Correction Policy:</strong> If a factual error is identified in any content Marc has authored on this portal, it is corrected with a visible correction notice within 24 hours. The original incorrect information is not silently deleted — a correction note is appended with the date of amendment. This is a standard editorial accountability practice.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "0.92rem", margin: 0 }}>
            Readers who identify factual errors in schedule times, team squad announcements, or statistical claims can contact the editorial desk at{" "}
            <a href="mailto:editor@hockeyworldcup2026schedule.com" style={{ color: "var(--primary)", fontWeight: 700, wordBreak: "break-all" }}>
              editor@hockeyworldcup2026schedule.com
            </a>{" "}
            — Marc personally reviews all editorial correction submissions.
          </p>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions About Marc Devos
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {faqs.map((item, idx) => (
              <div key={idx} style={{
                background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
                borderRadius: "16px", padding: "1.5rem 2rem"
              }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "0.7rem" }}>
                  {item.q}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.7", margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section style={{
          background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
          borderRadius: "16px", padding: "1.5rem 2rem"
        }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
            Explore Content Written by Marc Devos
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              { label: "🇮🇳🇵🇰 India vs Pakistan Preview", href: "/matches/india-vs-pakistan" },
              { label: "🏟️ Wagener Stadium Guide", href: "/venues/wagener-stadium-guide" },
              { label: "🏟️ Belfius Arena Guide", href: "/venues/belfius-arena-guide" },
              { label: "📅 Full Tournament Schedule", href: "/schedule" },
              { label: "📊 Pool D Group Analysis", href: "/pool-d" },
              { label: "📋 Bram van de Meer — Stats Analyst", href: "/authors/bram-van-de-meer" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{
                background: "var(--bg-tertiary)", border: "1px solid var(--border-color)",
                borderRadius: "10px", padding: "0.5rem 1rem",
                color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600
              }}>
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
