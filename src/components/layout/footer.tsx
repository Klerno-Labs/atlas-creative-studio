"use client";

import * as React from "react";
import { ArrowUp, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 border-t py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold font-display tracking-tight mb-4">
              ATLAS CREATIVE
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Award-winning design studio crafting digital experiences that leave a lasting impression.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">Web Design</span></li>
              <li><span className="text-sm text-muted-foreground">Brand Identity</span></li>
              <li><span className="text-sm text-muted-foreground">3D Motion</span></li>
              <li><span className="text-sm text-muted-foreground">Development</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@atlascreativestudio.com"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                hello@atlascreativestudio.com
              </a>
              <a
                href="tel:+17135551234"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (713) 555-1234
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Atlas Creative Studio. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={scrollToTop} aria-label="Scroll to top">
              <ArrowUp className="h-4 w-4" />
            </Button>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}