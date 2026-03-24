import Link from "next/link";
import { cn } from "@/lib/cn";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">AC</Link>
        <div className="flex space-x-4">
          <Link href="/work" className={cn("text-gray-800 hover:text-accent")}>Work</Link>
          <Link href="/services" className={cn("text-gray-800 hover:text-accent")}>Services</Link>
          <Link href="/about" className={cn("text-gray-800 hover:text-accent")}>About</Link>
          <Link href="/contact" className={cn("text-gray-800 hover:text-accent")}>Contact</Link>
        </div>
        <Link href="/contact" className="bg-accent text-white px-4 py-2 rounded-lg">Get In Touch</Link>
      </div>
    </nav>
  );
};