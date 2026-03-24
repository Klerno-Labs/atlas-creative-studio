'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUp } from 'lucide-react';

const heroImages = [
  { src: require('@/config/images').images['hero'].src, width: 1600, height: 1200, priority: true },
  { src: require('@/config/images').images['hero-alt'].src, width: 1600, height: 1200 },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 overflow-hidden"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold leading-[0.9] tracking-tighter">
            WE CRAFT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              DIGITAL<br />
              LEGACIES
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Atlas Creative Studio is a Houston-based award-winning agency merging strategic design with engineering excellence. We build brands that stand the test of time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/work"
            className="group relative px-8 py-4 bg-white text-black font-heading font-bold text-lg tracking-wide hover:bg-accent hover:text-white transition-all duration-300"
          >
            View Our Work
            <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-white/20 text-white font-heading font-bold text-lg tracking-wide hover:border-accent hover:text-accent transition-all duration-300 backdrop-blur-sm"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImages[0].src}
          alt="Abstract studio atmosphere"
          width={heroImages[0].width}
          height={heroImages[0].height}
          priority={heroImages[0].priority}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowUp size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}