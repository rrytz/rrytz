import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ritz Lloyd Sastrillas — Frontend Engineer",
  description:
    "I architect interfaces that scale — from 0 to production-ready. Portfolio of Ritz Lloyd Sastrillas.",
  openGraph: {
    title: "Ritz Lloyd Sastrillas — Frontend Engineer",
    description:
      "I architect interfaces that scale — from 0 to production-ready, across the full frontend stack.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritz Lloyd Sastrillas — Frontend Engineer",
    description:
      "I architect interfaces that scale — from 0 to production-ready.",
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
      className={`${syne.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
