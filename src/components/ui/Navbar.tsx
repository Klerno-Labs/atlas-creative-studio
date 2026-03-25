"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={cn("fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <Link href="/" className="text-xl font-bold">{siteConfig.name}</Link>
        <div className="space-x-4">
          {siteConfig.navigation.map((link) => (
            <Link key={link.label} href={link.href} className="text-gray-900 hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}