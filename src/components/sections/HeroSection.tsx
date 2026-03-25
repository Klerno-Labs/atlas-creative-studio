"use client";
import { images } from "@/config/images";
import { cn } from "@/lib/cn";

export default function HeroSection() {
  return (
    <section className={cn("min-h-[80vh] flex items-center justify-center bg-cover bg-center")} style={{ backgroundImage: `url(${images.hero.src})` }}>
      <div className="text-center text-white">
        <h1 className="text-6xl font-heading">CREATIVE</h1>
        <p className="text-2xl mt-4">Award-winning design studio</p>
        <div className="mt-8">
          <a href="#work" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition">Explore Our Work</a>
        </div>
      </div>
    </section>
  );
}