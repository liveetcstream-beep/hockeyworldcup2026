import React from "react";
import NewsHubClient from "./NewsHubClient";

export const metadata = {
  title: "Latest Hockey World Cup 2026 News, Squad Updates & Injury Reports",
  description: "Stay updated with the latest Hockey World Cup 2026 news. Read breaking squad announcements, player injury reports, tactical team analysis, and warm-up results.",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/news",
  },
  openGraph: {
    title: "Latest Hockey World Cup 2026 News, Squad Updates & Injury Reports",
    description: "Stay updated with the latest Hockey World Cup 2026 news. Read breaking squad announcements, player injury reports, tactical team analysis, and warm-up results.",
    url: "https://hockeyworldcup2026schedule.com/news",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hockey World Cup 2026 News Updates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Hockey World Cup 2026 News, Squad Updates & Injury Reports",
    description: "Stay updated with the latest Hockey World Cup 2026 news. Read breaking squad announcements, player injury reports, tactical team analysis, and warm-up results.",
    images: ["/og-image.jpg"],
  },
};

export default function NewsHubPage() {
  return <NewsHubClient />;
}
