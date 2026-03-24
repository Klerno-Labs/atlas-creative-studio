import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero.src}
          alt={images.hero.alt}
          width={images.hero.width}
          height={images.hero.height}
          priority={true}
          className="w-full h-full object-cover opacity-60"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-6">
          DESIGNING THE FUTURE
          <br />
          OF DIGITAL
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-light">
          Award-winning creative studio specializing in web design, branding, and immersive digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/work">
            <Button size="lg" className="w-full sm:w-auto">
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
              Start a Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}