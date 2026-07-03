import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms of Use - Hockey World Cup 2026",
  description: "Read the terms of use for our independent Hockey World Cup 2026 schedule portal, detailing trademarks, disclaimers, and user conditions.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Legal Agreements</p>
          <h1 className="hero-title">Terms of Use</h1>
          <p className="hero-description">
            By using this website, you agree to comply with the terms, conditions, and disclaimers detailed below.
          </p>
        </div>
      </section>

      <main className="sports-container py-12">
        <div className="guidelines-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2>1. Terms of Acceptance</h2>
          <p>
            By accessing or using our website, you signify that you have read, understood, and agreed to be bound by these Terms of Use and our accompanying Privacy Policy. If you do not agree to these conditions, you must discontinue your use of our services immediately.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>2. Fan Portal Disclaimer (Not Official)</h2>
          <p>
            This website is a 100% independent fan resource portal. We are NOT associated, affiliated, endorsed, or sponsored by the International Hockey Federation (FIH), the official Royal Dutch Hockey Association (KNHB), the Royal Belgian Hockey Association (KBHB), or any government tourism board. 
          </p>
          <p>
            All registered trademarks, logos, and national emblem designs appearing on this site belong to their respective owners and are used purely for informational and descriptive fan reporting.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>3. Accuracy of Information</h2>
          <p>
            While we strive to keep all matches, stadium assignments, pool tables, and pushback times accurate, the tournament organizers reserve the right to reschedule or modify matches at short notice. We assume no liability for errors, omissions, or cancellations, and we recommend cross-checking scheduling details with the official tickets or official tournament TMS systems on matchdays.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>4. Limitations of Liability</h2>
          <p>
            Under no circumstances shall our website, its creators, or its editorial staff be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the website's scheduling charts, VPN tutorials, or booking links.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>5. Prohibited Activities</h2>
          <p>
            Users are strictly prohibited from scraping data feeds, utilizing automated query scripts, or attacking our server infrastructure. We reserve the right to restrict, suspend, or terminate access for users found engaging in suspicious or harmful activities.
          </p>
          
          <div className="expert-quote-box" style={{ marginTop: "3rem" }}>
            "If you require further clarifications regarding our site conditions, please drop an email to our administration team at: <strong>admin@hockeyworldcup2026schedule.com</strong>."
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
