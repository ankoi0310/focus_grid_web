import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://focus-grid-web-nine.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Focus Grid — Master Your Time in the Digital Grid",
    template: "%s — Focus Grid",
  },
  description:
    "Focus Grid is a cyberpunk productivity app combining the Eisenhower Matrix with RPG-style gamification to help you focus deeply and ship more.",
  applicationName: "Focus Grid",
  keywords: [
    "Focus Grid",
    "productivity",
    "Eisenhower Matrix",
    "focus timer",
    "deep work",
    "gamification",
    "RPG productivity",
    "cyberpunk",
    "synthwave",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Focus Grid — Master Your Time in the Digital Grid",
    description:
      "Eisenhower Matrix + RPG progression + Deep Work timer. Turn focus into a high-score run.",
    siteName: "Focus Grid",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Grid — Master Your Time in the Digital Grid",
    description:
      "Eisenhower Matrix + RPG progression + Deep Work timer. Turn focus into a high-score run.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
