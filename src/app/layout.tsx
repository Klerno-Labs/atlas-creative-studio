"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

import { z } from "zod";
export const metadata: Metadata = {
  title: "Atlas Creative Studio",
  description: "Award-winning creative studio showcasing exceptional design work across multiple disciplines.",
  openGraph: {
    title: "Atlas Creative Studio",
    description: "Award-winning creative studio showcasing exceptional design work across multiple disciplines.",
    url: "https://example.com",
    images: [
      {
        url: "https://mfile.z.ai/1774356988974-7649c16cb4a6458ba29c52671b71e693.png?ufileattname=20260324205620dca57c9d71a749cb_watermark.png",
        alt: "Abstract geometric sculpture on a modern desk in a dimly lit studio",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}