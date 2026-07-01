import "./globals.css";

export const metadata = {
  title: "FIH Hockey World Cup 2026 Schedule & Streaming Guide",
  description: "Get the complete, verified match schedule, timezone conversions, and live streaming options for the FIH Hockey World Cup 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

