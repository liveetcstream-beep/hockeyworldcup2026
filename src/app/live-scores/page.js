import React from "react";
import LiveScoresClient from "./LiveScoresClient";

export const metadata = {
  title: "Hockey World Cup 2026 Live Scores: Real-Time Match Updates",
  description: "Follow FIH Hockey World Cup 2026 live scores in real-time. Get instant match updates, goal scorers, cards, starting lineups, and play-by-play commentary.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/live-scores",
  },
  openGraph: {
    title: "Hockey World Cup 2026 Live Scores: Real-Time Match Updates",
    description: "Follow FIH Hockey World Cup 2026 live scores in real-time. Get instant match updates, goal scorers, cards, starting lineups, and play-by-play commentary.",
    url: "https://hockeyworldcup2026schedule.com/live-scores",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 Live Scores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hockey World Cup 2026 Live Scores: Real-Time Match Updates",
    description: "Follow FIH Hockey World Cup 2026 live scores in real-time. Get instant match updates, goal scorers, cards, starting lineups, and play-by-play commentary.",
    images: ["/og-image.jpg"],
  },
};

export default function LiveScoresPage() {
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
                  { "@type": "ListItem", "position": 2, "name": "Live Scores", "item": "https://hockeyworldcup2026schedule.com/live-scores" }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How to watch the Hockey World Cup 2026 live scores?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can follow real-time live scores for all Men's and Women's matches on our dedicated live scoreboard page. Updates include goals, cards, penalty corner statistics, and starting lineups."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How often is the live scoreboard updated?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our scoreboard matches are synced every 30 seconds with official tournament logs to guarantee real-time score precision."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <LiveScoresClient />
    </>
  );
}
