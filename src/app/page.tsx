"use client";

import { HeroSection } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { CTASection } from "@/components/sections/cta";
import { images } from "@/config/images";

export default function Home() {
  return (
    <main>
      <HeroSection
        title="Designing the Future of Creativity"
        subtitle="Award-winning creative studio specializing in digital experience, branding, and 3D motion."
        ctaText="View Work"
        ctaLink="/work"
      />
      <Marquee />
      <CTASection />
    </main>
  );
}