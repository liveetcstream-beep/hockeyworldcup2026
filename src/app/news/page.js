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
                  { "@type": "ListItem", "position": 2, "name": "News Hub", "item": "https://hockeyworldcup2026schedule.com/news" }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Where can I read the latest updates on the Hockey World Cup 2026 teams?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our dedicated news hub features breaking updates on team squads, player injuries, pre-tournament press releases, and match performance stats verified by our editorial desk."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are the injury reports and squad updates officially sourced?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our editorial director Marc Devos accredit-checks and monitors official press releases, national hockey federation bulletins, and team doctor statements for accuracy."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <NewsHubClient />
    </>
  );
}
