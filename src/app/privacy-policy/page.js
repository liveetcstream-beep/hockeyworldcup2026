import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy - Hockey World Cup 2026",
  description: "Read our privacy policy to understand how we collect, use, and protect your information on our independent Hockey World Cup 2026 portal.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Legal & Data Policies</p>
          <h1 className="hero-title">Privacy Policy</h1>
          <p className="hero-description">
            Your privacy is extremely important to us. Learn about our data practices, cookie policy, and advertisement disclosures below.
          </p>
        </div>
      </section>

      <main className="sports-container py-12">
        <div className="guidelines-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2>1. Information We Collect</h2>
          <p>
            We do not require users to create accounts or submit personal identification details to browse our schedule and match calculators. However, like most websites, we collect non-identifiable web traffic information automatically:
          </p>
          <ul>
            <li>IP addresses and geological locations (country-level)</li>
            <li>Browser type, device model, and operating system</li>
            <li>Page view histories, interaction durations, and navigation paths</li>
          </ul>

          <h2 style={{ marginTop: "2.5rem" }}>2. Cookies & Advertising Cookies</h2>
          <p>
            We partner with third-party networks, including Google AdSense, to display relevant sports advertisements when you visit our website. These partners may use cookies (small text files stored on your machine) or web beacons to serve ads based on your previous visits to this or other internet sites.
          </p>
          <p>
            Users may choose to opt-out of personalized advertising by visiting the official Google Ads Settings page or by configuring their browser settings to decline third-party tracking cookies.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>3. External Links & Services</h2>
          <p>
            Our website links out to external platforms, including official ticket portals (tickets.hockeyworldcup2026.com) and broadcaster networks. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>4. Data Security</h2>
          <p>
            We implement standard HTTPS encryption across all pages to ensure your connection remains secure. Please remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure, and we cannot guarantee absolute data protection.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>5. Policy Updates</h2>
          <p>
            We may update our Privacy Policy from time to time. We recommend checking this page periodically for any changes. Changes to this Privacy Policy are effective immediately upon being published on this URL.
          </p>
          
          <div className="expert-quote-box" style={{ marginTop: "3rem" }}>
            "If you have any questions, suggestions, or concerns regarding our privacy guidelines, please reach out to our legal compliance team at <strong>legal@hockeyworldcup2026schedule.com</strong>."
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
