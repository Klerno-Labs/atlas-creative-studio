'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutTeaser() {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={require('@/config/images').images['about'].src}
              alt="Atlas Team"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">
              About The Studio
            </p>
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Crafted with precision. Designed for impact.
            </h2>
            <div className="space-y-4 text-muted text-lg leading-relaxed">
              <p>
                Founded in Houston, Atlas Creative Studio is a collective of designers, strategists, and developers obsessed with detail. We don't just build websites; we engineer digital ecosystems that drive growth and build lasting brand equity.
              </p>
              <p>
                Our philosophy is simple: great design is invisible. It should feel natural, intuitive, and powerful, allowing your business to speak for itself without distraction.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-mono text-sm">Award Winning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-mono text-sm">Global Reach</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-mono text-sm">Full Service</span>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white font-heading font-bold text-lg group"
            >
              Read Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}