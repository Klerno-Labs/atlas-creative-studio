import type { Metadata } from "next";
import { Inter, Syne, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  weight: ["400", "700"]
});
const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-body-medium",
  weight: ["300", "400", "600"]
});
const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "Atlas Creative Studio | Award-Winning Design Agency in Houston",
  description: "Atlas Creative Studio is a Houston-based award-winning agency specializing in Web Design, Brand Identity, and 3D Motion. We craft digital experiences that define brands.",
  keywords: "creative agency houston, web design houston, branding agency, 3d motion design, portfolio studio",
  openGraph: {
    title: "Atlas Creative Studio | Design & Branding",
    description: "Award-winning creative studio showcasing exceptional design work across multiple disciplines.",
    url: "https://www.atlascreativestudio.com",
    siteName: "Atlas Creative Studio",
    images: [
      {
        url: "https://mfile.z.ai/1774356988974-7649c16cb4a6458ba29c52671b71e693.png?ufileattname=20260324205620dca57c9d71a749cb_watermark.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&family=Space+Mono:wght@400&family=Syne:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} ${syne.variable} ${manrope.variable} ${spaceMono.variable}`}>
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}