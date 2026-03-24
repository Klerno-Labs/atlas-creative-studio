'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Sparkles, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const team = [
  {
    name: 'Alex Rivera',
    role: 'Creative Director',
    bio: '10+ years of experience in award-winning design. Obsessed with typography and color theory.'
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Developer',
    bio: 'Full-stack wizard specializing in React and performance optimization. Code is poetry.'
  },
  {
    name: 'David Kim',
    role: 'Brand Strategist',
    bio: 'Bridging the gap between creative vision and business goals. Helping brands find their voice.'
  }
];

const values = [
  { title: 'Precision', icon: Sparkles },
  { title: 'Collaboration', icon: Users },
  { title: 'Innovation', icon: Heart },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary text-secondary">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <p className="font-mono text-accent mb-4 tracking-widest">ABOUT US</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              We are Atlas.
            </h1>
            <p className="text-muted text-xl max-w-3xl leading-relaxed">
              Founded in 2018, Atlas Creative Studio was born from a simple idea: 
              great design should not just be beautiful, but essential. We are a collective 
              of designers, strategists, and developers dedicated to crafting digital 
              experiences that leave a lasting impression.
            </p>
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-accent mb-4 tracking-widest">THE PHILOSOPHY</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                Crafted with Precision.<br/>Designed for Impact.
              </h2>
              <div className="space-y-6 text-muted text-lg">
                <p>
                  We believe in the power of detail. Every pixel matters. Every interaction counts. 
                  Our process is rigorous, transparent, and collaborative, ensuring that the final 
                  product not only meets but exceeds expectations.
                </p>
                <p>
                  Located in the heart of Houston, we serve clients globally, bridging distances 
                  through exceptional communication and a shared passion for design excellence.
                </p>
              </div>
            </div>
            
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={require('@/config/images').images['about'].src}
                alt="Our Team"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="font-mono text-accent mb-4 tracking-widest">TEAM</p>
              <h2 className="text-4xl md:text-6xl font-heading font-bold">
                The Minds Behind The Magic
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={member.name} className="group relative overflow-hidden rounded-2xl bg-surface p-8 transition-all hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="mb-6 w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-muted">
                   {/* Avatar Placeholder - using initials for now */}
                   <span className="text-2xl font-heading font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">{member.name}</h3>
                <p className="font-mono text-accent text-sm mb-4">{member.role}</p>
                <p className="text-muted text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {values.map((value, idx) => (
              <div key={value.title} className="group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary border border-white/10 flex items-center justify-center text-accent transition-all group-hover:border-accent group-hover:scale-110">
                  <value.icon size={28} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-muted text-sm">
                  We incorporate these core values into every project to ensure consistent, high-quality results.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-accent rounded-3xl overflow-hidden p-12 md:p-24 text-center text-white">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Want to join the team?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                We are always looking for talented individuals to join our creative family.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-heading font-bold text-lg rounded-full hover:scale-105 transition-transform"
              >
                Let's Connect
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}