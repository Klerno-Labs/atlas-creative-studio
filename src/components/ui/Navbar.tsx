import React from "react";
import { cn } from "@/lib/utils";
import { images } from "@/config/images";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <img src={images.logo.src} alt="Atlas Creative Studio Logo" className="h-10" />
        </Link>
        <nav className="hidden md:flex space-x-10">
          <Link href="/work" className="text-[#F2F2F2] hover:underline">Work</Link>
          <Link href="/services" className="text-[#F2F2F2] hover:underline">Services</Link>
          <Link href="/about" className="text-[#F2F2F2] hover:underline">About</Link>
          <Link href="/process" className="text-[#F2F2F2] hover:underline">Process</Link>
          <Link href="/contact" className="text-[#F2F2F2] hover:underline">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button aria-label="Open menu" className="text-[#F2F2F2]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;