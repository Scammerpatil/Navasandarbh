import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navasandarbh | Bridging Developers, One Contribution at a Time",
  description:
    "Discover Navasandarbh, the ultimate platform for finding GitHub issues, tracking contributions, and participating in open-source events like Hacktoberfest. Empowering developers to contribute effortlessly.",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Discover Navasandarbh, the ultimate platform for finding GitHub issues, tracking contributions, and participating in open-source events like Hacktoberfest. Empowering developers to contribute effortlessly."
        />
        <meta
          name="keywords"
          content="GitHub issues, Hacktoberfest 2024, open-source contributions, Navasandarbh, beginner-friendly projects"
        />
        <meta name="author" content="Navasandarbh Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Navasandarbh | Bridging Developers, One Contribution at a Time"
        />
        <meta
          property="og:description"
          content="Discover Navasandarbh, your ultimate platform for finding GitHub issues, tracking contributions, and participating in open-source events like Hacktoberfest."
        />
        <meta
          property="og:image"
          content="/assets/images/navasandarbh-banner.png"
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Navasandarbh | Bridging Developers, One Contribution at a Time"
        />
        <meta
          name="twitter:description"
          content="Find GitHub issues and participate in open-source events like Hacktoberfest with Navasandarbh."
        />
        <meta
          name="twitter:image"
          content="/assets/images/navasandarbh-banner.png"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        />

        {/* Title */}
        <title>
          Navasandarbh | Bridging Developers, One Contribution at a Time
        </title>
      </head>
      <body className={`antialiased ${inter}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
