"use client";
import { images } from "@/config/images";
import Button from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-primary">
      <img src={images.hero.src} alt={images.hero.alt} className="absolute inset-0 object-cover w-full h-full" loading="eager" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold">Designing the Future of Creativity</h1>
        <p className="mt-4 text-lg">Award-winning creative studio specializing in digital experiences.</p>
        <Button text="View Work" variant="primary" />
      </div>
    </section>
  );
};

export default HeroSection;