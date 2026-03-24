import Link from 'next/link';
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Instagram as InstaIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/10 pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-heading font-bold tracking-tight">
              ATLAS.
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Award-winning creative studio crafting digital experiences that matter.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Instagram"
                className="text-muted hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn"
                className="text-muted hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub"
                className="text-muted hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted hover:text-secondary transition-colors">Web Design</Link></li>
              <li><Link href="/services" className="text-muted hover:text-secondary transition-colors">Brand Identity</Link></li>
              <li><Link href="/services" className="text-muted hover:text-secondary transition-colors">3D Motion</Link></li>
              <li><Link href="/services" className="text-muted hover:text-secondary transition-colors">Development</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/process" className="text-muted hover:text-secondary transition-colors">Our Process</Link></li>
              <li><Link href="/work" className="text-muted hover:text-secondary transition-colors">Selected Work</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1" />
                <div className="text-muted">
                  <p className="text-sm font-medium text-white">Email</p>
                  <Link href="mailto:info@atlascreativestudio.com" className="hover:text-accent transition-colors">
                    info@atlascreativestudio.com
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1" />
                <div className="text-muted">
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="hover:text-accent transition-colors cursor-pointer">
                    (512) 555-0199
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div className="text-muted">
                  <p className="text-sm font-medium text-white">Location</p>
                  <p className="hover:text-accent transition-colors cursor-pointer">
                    4521 Westheimer Rd, Suite 200<br/>Houston, TX 77027
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-muted text-sm">
            &copy; {currentYear} Atlas Creative Studio. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-muted text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}