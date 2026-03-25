import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 opacity-10">
        <img
          src={require('@/config/images').images['cta'].src}
          alt="Background"
          width={1600}
          height={900}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-heading font-bold mb-8">
          Ready to elevate your brand?
        </h2>
        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Let's build something extraordinary together. We are currently accepting new projects for Q4.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-heading font-bold text-lg tracking-wide hover:bg-accent hover:text-white transition-all duration-300"
        >
          Start a Conversation
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}