import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { WorkSection } from "@/components/sections/work";
import { ServicesSection } from "@/components/sections/services";
import { ProcessSection } from "@/components/sections/process";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}