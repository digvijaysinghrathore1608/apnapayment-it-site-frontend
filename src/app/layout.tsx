import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/frontend/navbar";
import { site_name } from "@/data/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site_name} | Software Development & IT Services`,
  description:
    `${site_name} provides software development, app development, automation, cloud services, and modern web solutions.`,
  keywords: [
    `${site_name}`,
    "IT services",
    "software development",
    "web development",
    "mobile app development",
    "cloud solutions",
    "API development",
    "automation solutions",
    "IT company India",
  ],
  authors: [{ name: `${site_name}` }],
  robots: "index, follow",

  // OpenGraph tags
  openGraph: {
    title: `${site_name} | Software Development & IT Services`,
    description:
      "Professional IT solutions, web apps, mobile apps, API development and cloud deployment.",
    url: "https://apnaitsolution.com",
    siteName: `${site_name}`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: `${site_name} OG Image`,
      },
    ],
  },

  // Twitter tags
  twitter: {
    card: "summary_large_image",
    title: `${site_name} | Software Development`,
    description:
      "Modern IT services, custom software development, mobile apps and cloud deployment.",
    creator: "@apnaitsolution",
    images: ["/logo/logo.pn"],
  },

  // Additional meta
  category: "technology",
  other: {
    "revisit-after": "1 day",
    "theme-color": "#ffffff",
    "application-name": `${site_name}`,
    "generator": "Next.js 16",
    "rating": "General",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarComponent>
          {children}
        </NavbarComponent>
      </body>
    </html>
  );
}
