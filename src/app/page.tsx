import HeroSection from "@/components/sections/HeroSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesIntro from "@/components/sections/ServicesIntro";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Atlas Creative Studio | Home",
  description: "Award-winning creative studio showcasing exceptional design work across multiple disciplines.",
  openGraph: {
    title: "Atlas Creative Studio | Home",
    description: "Award-winning creative studio showcasing exceptional design work across multiple disciplines.",
    images: ["/hero-bg.jpg"],
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedWork />
      <ServicesIntro />
      <CTASection />
    </div>
  );
}