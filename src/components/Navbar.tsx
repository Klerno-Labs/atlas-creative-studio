'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { images } from '@/config/images';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5',
        isScrolled ? 'bg-primary/80 backdrop-blur-lg py-4' : 'bg-primary/50 backdrop-blur-sm py-6'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-heading text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
            ATLAS
          </span>
          <span className="text-accent font-heading text-2xl font-bold">
            .
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-secondary hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-black font-heading font-bold text-sm tracking-wide hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 animate-fade-up">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-heading font-bold text-secondary hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-4 bg-accent text-white font-heading font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all"
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
}