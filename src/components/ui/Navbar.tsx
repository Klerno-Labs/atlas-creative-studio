"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import { images } from "@/config/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/80 backdrop-blur-lg border-b border-gray-100 px-4 py-4">
      <Link href="/" className="text-xl font-bold text-gray-900">
        <img src={images.logo.src} alt="Atlas Creative Studio Logo" className="h-8" />
      </Link>
      <div className="hidden md:flex space-x-6">
        <Link href="/work" className="text-gray-900 hover:text-primary">Work</Link>
        <Link href="/services" className="text-gray-900 hover:text-primary">Services</Link>
        <Link href="/about" className="text-gray-900 hover:text-primary">About</Link>
        <Link href="/process" className="text-gray-900 hover:text-primary">Process</Link>
        <Link href="/contact" className="text-gray-900 hover:text-primary">Contact</Link>
      </div>
      <button onClick={toggleMenu} className="md:hidden">
        {isOpen ? <X className="h-6 w-6 text-gray-900" aria-label="Close menu" /> : <Menu className="h-6 w-6 text-gray-900" aria-label="Open menu" />}
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/90 backdrop-blur-lg flex flex-col items-center justify-center space-y-4">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <X className="h-6 w-6 text-gray-900" aria-label="Close menu" />
          </button>
          <Link href="/work" className="text-gray-900 text-xl" onClick={toggleMenu}>Work</Link>
          <Link href="/services" className="text-gray-900 text-xl" onClick={toggleMenu}>Services</Link>
          <Link href="/about" className="text-gray-900 text-xl" onClick={toggleMenu}>About</Link>
          <Link href="/process" className="text-gray-900 text-xl" onClick={toggleMenu}>Process</Link>
          <Link href="/contact" className="text-gray-900 text-xl" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;