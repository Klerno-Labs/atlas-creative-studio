import HeroSection from "@/components/sections/hero";
import Marquee from "@/components/sections/marquee";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import CTASection from "@/components/sections/cta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <CTASection />
    </main>
  );
}