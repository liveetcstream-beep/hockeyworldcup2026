import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://hockeyworldcup2026schedule.com"),
  title: {
    default: "FIH Hockey World Cup 2026 Schedule & Streaming Guide",
    template: "%s | Hockey World Cup 2026",
  },
  description:
    "Get the complete, verified match schedule, timezone conversions, live scores, and streaming options for the FIH Hockey World Cup 2026 in Belgium & Netherlands.",
  keywords: [
    "Hockey World Cup 2026",
    "FIH World Cup 2026",
    "hockey world cup 2026 schedule",
    "hockey world cup 2026 live score",
    "hockey world cup 2026 fixtures",
    "belgium netherlands hockey 2026",
  ],
  authors: [{ name: "Marc Devos", url: "https://hockeyworldcup2026schedule.com" }],
  creator: "hockeyworldcup2026schedule.com",
  verification: {
    google: "D00inc3t5pMk-B-QqBVxCgOLSj4dSxAvabIHxCTqGVA",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hockeyworldcup2026schedule.com",
    siteName: "Hockey World Cup 2026",
    title: "FIH Hockey World Cup 2026 Schedule & Streaming Guide",
    description:
      "Complete match schedule, timezone conversions, live scores, head-to-head records, and streaming guides for the FIH Hockey World Cup 2026.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FIH Hockey World Cup 2026 — Official Schedule & Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIH Hockey World Cup 2026 Schedule & Streaming Guide",
    description:
      "Complete match schedule, timezone conversions, live scores, and streaming guides for the FIH Hockey World Cup 2026.",
    images: ["/og-image.jpg"],
  },
  // NOTE: canonical is NOT set globally — each page sets its own via alternates.canonical
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased`}>
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1SEPBKM7MR"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1SEPBKM7MR');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
