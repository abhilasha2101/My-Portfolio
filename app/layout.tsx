import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilasha Kumari — The Deck | Software Engineer Portfolio",
  description:
    "Personal portfolio of Abhilasha Kumari, Software Engineer. A collectible playing card archive exploring scalable web systems, AI applications, and tactile digital craftsmanship.",
  keywords: [
    "Abhilasha Kumari",
    "Software Engineer",
    "Full-Stack Developer",
    "Portfolio",
    "The Deck",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Abhilasha Kumari" }],
  openGraph: {
    title: "Abhilasha Kumari — The Deck | Software Engineer Portfolio",
    description:
      "A collectible playing card archive exploring scalable web systems, AI applications, and tactile digital craftsmanship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700&family=Syne:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#131314] text-[#e5e2e3] selection:bg-[#c5a059] selection:text-[#131314]">
        {children}
      </body>
    </html>
  );
}
