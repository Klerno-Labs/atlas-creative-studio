import { images } from "@/config/images";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesIntro from "@/components/sections/ServicesIntro";
import WorkPreviewGrid from "@/components/sections/WorkPreviewGrid";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ContactHero from "@/components/sections/ContactHero";
import Footer from "@/components/ui/Footer";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Atlas Creative Studio | Award-Winning Design Agency Houston",
  description: "Award-winning creative studio showcasing exceptional design work across branding, web design, and digital strategy. Based in Houston, TX.",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="pt-20">
        <HeroSection
          title="We Craft Digital Experiences"
          description="Award-winning design studio helping brands stand out in a crowded digital landscape."
          imageSrc={images.hero.src}
          imageAlt={images.hero.alt}
          priority={true}
        />
      </section>

      <FeaturedWork />

      <ServicesIntro />

      <WorkPreviewGrid />

      <PhilosophySection
        title="Our Philosophy"
        description="We believe in the power of strategic storytelling and minimalist aesthetics to drive real results. Our process is transparent, collaborative, and results-oriented."
      />

      <ContactHero
        title="Ready to Start a Project?"
        description="Let's build something extraordinary together."
      />

      <Footer />
    </main>
  );
}

// LocalBusiness Structured Data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Atlas Creative Studio",
  image: images.hero.src,
  telephone: "(512) 555-0123",
  email: "info@atlascreativestudio.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4521 Westheimer Rd, Suite 200",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77027",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export default function LocalBusinessWrapper() {
  return (
    <>
      <Home />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}