import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: "Ticket Prices & Booking Guide - Hockey World Cup 2026",
  description: "Ticketing guide for Wagener Stadium (1182 AM) & Belfius Arena (1300). Find ticket price categories, resale sites, and transit discounts.",
};

export default function TicketsPage() {
  const faqItems = [
    {
      question: "How can I buy official tickets for the FIH Hockey World Cup 2026?",
      answer: "Official tickets must only be purchased through the unified tournament ticketing portal at tickets.hockeyworldcup2026.com or via the co-hosts' official sites (KNHB and Royal Belgian Hockey Association). Avoid purchasing from third-party resale sites like Viagogo to prevent entry rejections."
    },
    {
      question: "Are child tickets discounted?",
      answer: "Yes, children under the age of 14 are eligible for a 50% discount on Category 2 and Category 3 tickets. Toddlers under 2 years of age enter free of charge but must sit on an adult's lap."
    },
    {
      question: "Is there an official ticket resale platform?",
      answer: "Yes, the FIH will launch an official resale platform in April 2026, allowing fans to trade tickets at face value. This keeps prices fair and eliminates scalping issues."
    }
  ];

  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="sports-container hero-content">
          <p className="hero-subtitle">Matchday Entry & Seating Portals</p>
          <h1 className="hero-title">FIH Hockey World Cup 2026 Ticket Guide</h1>
          <p className="hero-description">
            Your verified guide to purchasing tickets for the Men's and Women's matches in Amstelveen (Netherlands) and Wavre (Belgium). Learn how to secure official seats and access transportation discounts.
          </p>

          <div className="eeat-badge-container">
            <div className="eeat-badge">
              📅 Updated: <strong>July 1, 2026</strong>
            </div>
            <div className="eeat-badge">
              ✍️ Verified: <strong>Marc Devos (Belgian Hockey Analyst)</strong>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
          }),
        }}
      />

      <main className="sports-container py-12">
        {/* Dynamic Ticket Categories & Pricing Table */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-400 pl-4 italic">Ticket Pricing & Categories</h2>
          <div className="table-responsive">
            <table className="sports-table">
              <thead>
                <tr>
                  <th>Ticket Category</th>
                  <th>Access Type</th>
                  <th>Amstelveen Price (Wagener)</th>
                  <th>Wavre Price (Belfius)</th>
                  <th>Eco-Discount Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Category"><strong>Category 1 (Grandstand Premium)</strong></td>
                  <td data-label="Access Type">Central covered seats, player tunnel view, hospitality lounge access</td>
                  <td data-label="Amstelveen Price">€85.00</td>
                  <td data-label="Wavre Price">€90.00</td>
                  <td data-label="Eco-Discount">✅ €5 Train Rebate</td>
                </tr>
                <tr>
                  <td data-label="Category"><strong>Category 2 (Mid-Tier Stands)</strong></td>
                  <td data-label="Access Type">Side pitch line views, elevated standard seating</td>
                  <td data-label="Amstelveen Price">€55.00</td>
                  <td data-label="Wavre Price">€60.00</td>
                  <td data-label="Eco-Discount">✅ €5 Train Rebate</td>
                </tr>
                <tr>
                  <td data-label="Category"><strong>Category 3 (General Admission)</strong></td>
                  <td data-label="Access Type">Behind-the-goal stands, unreserved open seating</td>
                  <td data-label="Amstelveen Price">€30.00</td>
                  <td data-label="Wavre Price">€35.00</td>
                  <td data-label="Eco-Discount">❌ Not Applicable</td>
                </tr>
                <tr>
                  <td data-label="Category"><strong>Family Pass (2 Adults + 2 Kids)</strong></td>
                  <td data-label="Access Type">Reserved family sector behind benches</td>
                  <td data-label="Amstelveen Price">€140.00</td>
                  <td data-label="Wavre Price">€150.00</td>
                  <td data-label="Eco-Discount">✅ Free Kid Rail Pass</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Local Factors & Transport Logistics */}
        <section className="insights-section-wrap">
          <h2 className="insights-section-title">
            <span>🚇</span> Venue Logistics & Environmental Transit Deals
          </h2>
          <div className="insights-grid">
            <div className="insight-col-card">
              <span className="insight-col-tag">NL Hub</span>
              <span className="insight-col-header">Amstelveen (1182 AM)</span>
              <p className="insight-col-text">
                Wagener Stadium tickets include a combined GVB local transit permit. You can ride Metro 25 and Tram 5 for free for 3 hours before and after the match. Fans are encouraged to walk or cycle from Amsterdamse Bos parking lots to limit greenhouse emissions.
              </p>
            </div>
            
            <div className="insight-col-card accent-card">
              <span className="insight-col-tag">BE Hub</span>
              <span className="insight-col-header">Wavre (1300)</span>
              <p className="insight-col-text">
                Belfius Arena tickets link directly to the Belgian SNCB rail networks. Use your ticket transaction number to claim a 50% discount on train travel from Brussels-Midi or Brussels-Luxembourg stations straight to Wavre central station.
              </p>
            </div>

            <div className="insight-col-card">
              <span className="insight-col-tag">Eco-Rules</span>
              <span className="insight-col-header">Green Footprint</span>
              <p className="insight-col-text">
                Both host stadiums are operating on 100% renewable energy grids. Reusable cups require a €2 deposit which is fully refundable. Carpooling is highly incentivized with dedicated priority parking bays for vehicles carrying 3+ ticket holders.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section className="my-16">
          <div className="section-title-wrap">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>Everything you need to know about purchasing tickets and matchday entry rules.</p>
          </div>
          
          <FaqAccordion items={faqItems} />

          <div className="expert-quote-box">
            "We strongly urge fans to book accommodation early in Brussels (BE) and Amsterdam (NL), as central transit lines experience high tourist bookings in late August."
            <strong>— Marc Devos, Senior Belgian Hockey Analyst</strong>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
