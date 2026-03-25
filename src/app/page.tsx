import { siteConfig } from "@/config/site";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesIntro from "@/components/sections/ServicesIntro";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWork />
      <ServicesIntro />
      <CTASection />
      <Footer />
    </>
  );
}