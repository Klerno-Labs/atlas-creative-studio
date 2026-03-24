import type { Metadata } from "next";
import { Inter, Syne, Manrope, SpaceMono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const syne = Syne({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-display", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-sans", display: "swap" });
const spaceMono = SpaceMono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" });

const baseUrl = "https://atlascreativestudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Atlas Creative Studio | Award-Winning Design Agency",
  description: "Award-winning creative studio specializing in web design, branding, and 3D motion. Crafting exceptional digital experiences for forward-thinking brands.",
  openGraph: {
    title: "Atlas Creative Studio",
    description: "Award-winning design studio.",
    url: baseUrl,
    siteName: "Atlas Creative Studio",
    images: [
      {
        url: images.hero.src,
        width: 1200,
        height: 630,
        alt: "Atlas Creative Studio Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Creative Studio",
    description: "Award-winning design studio.",
    images: [images.hero.src],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${manrope.variable} ${spaceMono.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}