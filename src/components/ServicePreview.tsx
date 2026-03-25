'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'branding',
    title: 'Brand Identity',
    desc: 'We craft logos, typography, and visual systems that define your voice and stick in the mind.',
    image: require('@/config/images').images['service-1'],
    link: '/services',
  },
  {
    id: 'web',
    title: 'Web Design & Dev',
    desc: 'We build high-performance, pixel-perfect websites that convert visitors into clients.',
    image: require('@/config/images').images['service-2'],
    link: '/services',
  },
  {
    id: 'motion',
    title: '3D Motion & VFX',
    desc: 'We bring static designs to life with immersive animations and cinematic visual effects.',
    image: require('@/config/images').images['service-3'],
    link: '/services',
  },
];

export default function ServicePreview() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              What We Do
            </h2>
            <p className="text-muted">
              Services tailored to scale your business.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden md:flex items-center gap-2 text-accent font-heading font-bold hover:text-white transition-colors mt-4 md:mt-0 group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link key={service.id} href={service.link} className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-6 relative">
                <img
                  src={service.image.src}
                  alt={service.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-2 border border-white text-white font-mono text-sm tracking-widest uppercase backdrop-blur-sm">
                    Explore
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {service.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}