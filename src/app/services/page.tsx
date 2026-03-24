'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PenTool, Monitor, Film } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    id: 'branding',
    title: 'Brand Identity',
    icon: PenTool,
    image: require('@/config/images').images['service-1'],
    description: 'We create comprehensive visual identities that resonate with your target audience and stand the test of time.',
    details: ['Logo Design', 'Typography Systems', 'Color Palettes', 'Brand Guidelines'],
    price: '$2,500 - $10,000',
    duration: '4-6 Weeks'
  },
  {
    id: 'web',
    title: 'Web Design & Development',
    icon: Monitor,
    image: require('@/config/images').images['service-2'],
    description: 'From landing pages to complex web applications, we build scalable, SEO-optimized websites.',
    details: ['UI/UX Design', 'Frontend Dev (React/Next.js)', 'SEO Optimization', 'CMS Integration'],
    price: '$5,000 - $50,000+',
    duration: '4-12 Weeks'
  },
  {
    id: 'motion',
    title: '3D Motion & VFX',
    icon: Film,
    image: require('@/config/images').images['service-3'],
    description: 'We bring static designs to life with immersive animations, logo reveals, and motion graphics.',
    details: ['Motion Graphics', '3D Modeling', 'Video Editing', 'Interactive Animation'],
    price: '$2,000 - $15,000',
    duration: '2-4 Weeks'
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-primary text-secondary">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <p className="font-mono text-accent mb-4 tracking-widest">CAPABILITIES</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
              Our Services
            </h1>
            <p className="text-muted text-lg max-w-3xl">
              Atlas Creative Studio offers a full spectrum of design and development services. We partner with you to solve complex challenges through innovative design solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {services.map((service, idx) => (
              <div key={service.id} className={`flex flex-col ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Image */}
                <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-2xl mb-8 md:mb-0">
                  <Image
                    src={service.image.src}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-accent">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-3xl font-heading font-bold">{service.title}</h3>
                  </div>

                  <p className="text-muted mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-8 pt-6 border-t border-white/10">
                    <div>
                      <p className="text-xs text-muted uppercase tracking-widest mb-1">Starting At</p>
                      <p className="font-mono text-accent">{service.price}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-widest mb-1">Duration</p>
                      <p className="font-mono text-white">{service.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}