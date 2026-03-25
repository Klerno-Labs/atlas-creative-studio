import { images } from "@/config/images";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesIntro from "@/components/sections/ServicesIntro";
import WorkPreviewGrid from "@/components/sections/WorkPreviewGrid";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ContactHero from "@/components/sections/CTASection";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Atlas Creative Studio - Award-Winning Design Studio",
  description: "Discover exceptional design work from Atlas Creative Studio.",
  openGraph: {
    title: "Atlas Creative Studio - Award-Winning Design Studio",
    description: "Discover exceptional design work from Atlas Creative Studio.",
    image: images.hero.src,
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedWork />
        <ServicesIntro />
        <WorkPreviewGrid />
        <PhilosophySection />
        <ContactHero />
      </main>
      <Footer />
    </>
  );
}