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
  return <LiveScoresClient />;
}
