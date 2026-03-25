import { Metadata } from "next";
import { cn } from "@/lib/cn";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Atlas Creative Studio",
  description: "Award-winning creative studio showcasing exceptional design work across multiple disciplines.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-primary text-text")}>
        {children}
      </body>
    </html>
  );
}