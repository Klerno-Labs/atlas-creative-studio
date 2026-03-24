"use client";

import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const HeroSection = ({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary">
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero.src}
          alt={images.hero.alt}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="font-syne text-6xl md:text-9xl font-bold text-secondary leading-none">
          {title}
        </h1>
        <p className="font-manrope text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
        <Button variant="primary" text={ctaText} onClick={() => window.location.href = ctaLink} />
      </div>
    </section>
  );
};