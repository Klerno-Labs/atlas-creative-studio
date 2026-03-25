import React from "react";
import { images } from "@/config/images";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${images.hero.src})` }}>
      <h1 className="text-6xl font-syne font-bold text-[#F2F2F2] leading-tight">CREATIVE</h1>
      <p className="mt-4 text-xl text-[#8C8C8C]">Award-winning design studio</p>
      <div className="mt-8">
        <span className="animate-bounce text-4xl text-[#D4AF37]">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;