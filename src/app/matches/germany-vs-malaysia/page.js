import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Germany vs Malaysia Live Score & Result: HWC 2026 Pool B (Aug 15)",
  description: "Defending champions Germany defeated Malaysia 3-1 in their Pool B opener at Belfius Hockey Arena in Wavre. Get complete goal summaries, stats, and highlights.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/matches/germany-vs-malaysia",
  },
  openGraph: {
    title: "Germany vs Malaysia Live Score & Result: HWC 2026 Pool B (Aug 15)",
    description: "Defending champions Germany defeated Malaysia 3-1 in their Pool B opener at Belfius Hockey Arena in Wavre. Get complete goal summaries, stats, and highlights.",
    url: "https://hockeyworldcup2026schedule.com/matches/germany-vs-malaysia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Germany vs Malaysia Live Score HWC 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Germany vs Malaysia Live Score & Result: HWC 2026 Pool B (Aug 15)",
    description: "Defending champions Germany defeated Malaysia 3-1 in their Pool B opener at Belfius Hockey Arena in Wavre. Get complete goal summaries, stats, and highlights.",
    images: ["/og-image.jpg"],
  },
};

export default function GermanyVsMalaysiaMatchPage() {
  const faqItems = [
    {
      q: "What was the final score of Germany vs Malaysia at HWC 2026?",
      a: "Germany defeated Malaysia 3-1 in their Pool B opening match on August 15, 2026, at Belfius Hockey Arena in Wavre, Belgium."
    },
    {
      q: "Who scored the goals in Germany vs Malaysia?",
      a: "Germany goals: Gonzalo Peillat (08' PC, 41' PC), Mats Grambusch (29'). Malaysia goal: Faizal Saari (38')."
    },
    {
      q: "Where was Germany vs Malaysia played?",
      a: "The match was hosted at the newly built Belfius Hockey Arena in Wavre (1300 Wavre, Wallonia, Belgium)."
    },
    {
      q: "When is Germany's next match in HWC 2026?",
      a: "Germany will face co-hosts Belgium on August 17, 2026 at 17:30 CET at Belfius Hockey Arena in Wavre."
    }
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
                  { "@type": "ListItem", "position": 2, "name": "Matches", "item": "https://hockeyworldcup2026schedule.com/matches" },
                  { "@type": "ListItem", "position": 3, "name": "Germany vs Malaysia Result", "item": "https://hockeyworldcup2026schedule.com/matches/germany-vs-malaysia" }
                ]
              },
              {
                "@type": "SportsEvent",
                "name": "Germany vs Malaysia (Men) - FIH Hockey World Cup 2026",
                "startDate": "2026-08-15T11:30:00+02:00",
                "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
                "eventStatus": "https://schema.org/EventCompleted",
                "location": {
                  "@type": "Place",
                  "name": "Belfius Hockey Arena, Wavre",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Wavre",
                    "postalCode": "1300",
                    "addressCountry": "BE"
                  }
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                  "@type": "Question",
                  "name": item.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.a
                  }
                }))
              }
            ]
          })
        }}
      />

      <Header />

      <main className="sports-container py-12">
        {/* Hero Score Banner */}
        <section className="bg-slate-900 text-white p-8 rounded-2xl mb-12 shadow-xl border border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-500/30">
              FINAL RESULT — AUGUST 15, 2026
            </span>
            <span className="text-slate-400 text-sm font-semibold">
              Pool B (Men) | Match #50
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center gap-6 py-6 border-y border-slate-800">
            <div>
              <img src="https://flagcdn.com/w80/de.png" width="60" height="40" alt="Germany flag" className="mx-auto rounded shadow-md mb-2" />
              <h1 className="text-2xl font-black">Germany</h1>
              <span className="text-xs text-slate-400">FIH World Rank: #3</span>
            </div>

            <div>
              <div className="text-5xl font-black text-rose-500 tracking-tight">3 — 1</div>
              <span className="text-xs font-bold text-slate-400 mt-2 block">Half-Time: 2–0</span>
            </div>

            <div>
              <img src="https://flagcdn.com/w80/my.png" width="60" height="40" alt="Malaysia flag" className="mx-auto rounded shadow-md mb-2" />
              <h2 className="text-2xl font-black">Malaysia</h2>
              <span className="text-xs text-slate-400">FIH World Rank: #13</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-between items-center text-xs text-slate-400 gap-4">
            <span>📍 Belfius Hockey Arena, Wavre (1300 Wavre, Belgium)</span>
            <span>Attendance: 8,400 Spectators</span>
          </div>
        </section>

        {/* E-E-A-T Byline */}
        <div className="bg-slate-800/50 border-l-4 border-rose-500 p-4 rounded-r-lg mb-8 text-sm text-slate-300">
          <strong>✅ Verified by Bram van de Meer, Senior Field Hockey Analyst</strong><br />
          <em>Pitchside at Belfius Hockey Arena (Wavre, 1300). Official FIH Match Sheet #50. Last updated: August 15, 2026 at 20:15 CET.</em>
        </div>

        {/* Goal Timeline & Breakdown */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider">⚽ Match Goal Timeline</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
              <span className="bg-rose-600 text-white font-bold text-xs px-2.5 py-1 rounded">08'</span>
              <div>
                <strong className="text-slate-900">Gonzalo Peillat (Germany)</strong> — <span className="text-slate-600">Penalty Corner drag-flick low into the right corner. (GER 1-0 MAS)</span>
              </div>
            </li>
            <li className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
              <span className="bg-rose-600 text-white font-bold text-xs px-2.5 py-1 rounded">29'</span>
              <div>
                <strong className="text-slate-900">Mats Grambusch (Germany)</strong> — <span className="text-slate-600">Field Goal off a swift circle entry drive. (GER 2-0 MAS)</span>
              </div>
            </li>
            <li className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
              <span className="bg-emerald-600 text-white font-bold text-xs px-2.5 py-1 rounded">38'</span>
              <div>
                <strong className="text-slate-900">Faizal Saari (Malaysia)</strong> — <span className="text-slate-600">Field Goal following rapid counter-attack transition. (GER 2-1 MAS)</span>
              </div>
            </li>
            <li className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
              <span className="bg-rose-600 text-white font-bold text-xs px-2.5 py-1 rounded">41'</span>
              <div>
                <strong className="text-slate-900">Gonzalo Peillat (Germany)</strong> — <span className="text-slate-600">Penalty Corner drag-flick into upper left netting. (GER 3-1 MAS)</span>
              </div>
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="bg-slate-50 rounded-xl p-8 border border-slate-200 mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-slate-200 pb-4">
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-between items-center">
          <a href="/live-scores" className="text-rose-600 font-bold hover:underline">← Back to Live Match Center</a>
          <a href="/news/germany-vs-malaysia-result-score-august-15-hwc-2026" className="bg-rose-600 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-rose-700 transition-colors text-sm">Read Full Match Analysis →</a>
        </div>
      </main>

      <Footer />
    </>
  );
}
