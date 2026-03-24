"use client";

import { cn } from "@/lib/cn";
import { images } from "@/config/images";

interface AboutSectionProps {
  image: string;
  philosophy: string;
}

export const AboutSection = ({ image, philosophy }: AboutSectionProps) => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img src={image} alt="About Us" className="w-full h-auto object-cover rounded-xl" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Philosophy</h2>
          <p className="mt-4 text-lg">{philosophy}</p>
        </div>
      </div>
    </section>
  );
};