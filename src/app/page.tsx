import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';

// Components
import Hero from '@/components/Hero';
import AboutTeaser from '@/components/AboutTeaser';
import ServicePreview from '@/components/ServicePreview';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-secondary">
      <Hero />
      
      <Marquee />
      
      {/* Featured Work Teaser */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                Selected Work
              </h2>
              <p className="text-muted max-w-md">
                A curation of our finest digital experiences and branding projects.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden md:flex items-center gap-2 text-accent font-heading font-bold hover:text-white transition-colors mt-4 md:mt-0 group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Featured Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Large Featured Item */}
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={require('@/config/images').images['gallery-1'].src}
                alt="Featured Project"
                width={800}
                height={600}
                priority
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <p className="font-mono text-accent text-sm mb-2">BRANDING / WEB</p>
                  <h3 className="text-3xl font-heading font-bold">Lumina Tech</h3>
                  <Link href="/work" className="inline-flex items-center gap-2 text-white mt-4 hover:text-accent transition-colors">
                    Explore Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Two Small Items */}
            <div className="grid grid-cols-1 gap-8">
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={require('@/config/images').images['gallery-2'].src}
                  alt="Project 2"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="font-mono text-accent text-sm mb-2">EDITORIAL</p>
                    <h3 className="text-2xl font-heading font-bold">Vogue East</h3>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={require('@/config/images').images['gallery-3'].src}
                  alt="Project 3"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="font-mono text-accent text-sm mb-2">PRODUCT</p>
                    <h3 className="text-2xl font-heading font-bold">Aura Skin</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutTeaser />

      <ServicePreview />

      <CTA />
    </div>
  );
}