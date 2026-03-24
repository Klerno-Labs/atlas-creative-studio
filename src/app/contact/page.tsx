'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Mail, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/Forms/ContactForm';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary text-secondary">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-heading font-bold">Get in Touch</h1>
        </div>
      </div>

      {/* Split Layout */}
      <div className="flex-grow">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Start Your Project</h2>
              <p className="text-muted text-lg">
                Ready to elevate your brand? Fill out the form and we'll be in touch within 24 hours.
              </p>
            </div>
            
            <ContactForm />
          </div>

          {/* Right: Info */}
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-accent shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-2">Email Us</h3>
                <a href="mailto:info@atlascreativestudio.com" className="text-muted hover:text-accent transition-colors">
                  info@atlascreativestudio.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-accent shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-2">Call Us</h3>
                <p className="text-muted">
                  (512) 555-0199
                </p>
                <p className="text-xs text-muted mt-1">
                  Mon-Fri: 9am - 6pm CST
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-accent shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-2">Visit Us</h3>
                <p className="text-muted">
                  4521 Westheimer Rd, Suite 200<br/>
                  Houston, TX 77027
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full aspect-[4/3] bg-surface rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-mono text-sm text-muted">Houston, Texas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}