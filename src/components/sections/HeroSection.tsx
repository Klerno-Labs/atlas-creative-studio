"use client";

import { images } from "@/config/images";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] bg-black text-white">
      <img src={images.hero.src} alt={images.hero.alt} className="absolute inset-0 object-cover w-full h-full" loading="eager" />
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-6xl font-syne font-bold tracking-tight"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          CREATIVE STUDIO
        </motion.h1>
        <motion.p
          className="mt-4 text-xl"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Award-winning design studio.
        </motion.p>
        <div className="mt-8">
          <a href="#services" className="inline-block px-6 py-3 text-lg font-bold text-black bg-yellow-500 rounded-lg hover:bg-yellow-400 transition">
            Scroll to Explore
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;