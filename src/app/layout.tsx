import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/frontend/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apna IT Solution | Software Development & IT Services",
  description:
    "Apna IT Solution provides software development, app development, automation, cloud services, and modern web solutions.",
  keywords: [
    "Apna IT Solution",
    "IT services",
    "software development",
    "web development",
    "mobile app development",
    "cloud solutions",
    "API development",
    "automation solutions",
    "IT company India",
  ],
  authors: [{ name: "Apna IT Solution" }],
  robots: "index, follow",

  // OpenGraph tags
  openGraph: {
    title: "Apna IT Solution | Software Development & IT Services",
    description:
      "Professional IT solutions, web apps, mobile apps, API development and cloud deployment.",
    url: "https://apnaitsolution.com",
    siteName: "Apna IT Solution",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apna IT Solution OG Image",
      },
    ],
  },

  // Twitter tags
  twitter: {
    card: "summary_large_image",
    title: "Apna IT Solution | Software Development",
    description:
      "Modern IT services, custom software development, mobile apps and cloud deployment.",
    creator: "@apnaitsolution",
    images: ["/images/og-image.png"],
  },

  // Additional meta
  category: "technology",
  other: {
    "revisit-after": "1 day",
    "theme-color": "#ffffff",
    "application-name": "Apna IT Solution",
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
