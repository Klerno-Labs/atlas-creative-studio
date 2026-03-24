import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";

const services = [
  {
    title: "Brand Identity",
    description: "We craft cohesive visual languages that tell your unique story and resonate with your audience.",
    image: images["service-1"],
    link: "/services",
  },
  {
    title: "Web Experience",
    description: "High-performance websites built with modern frameworks, ensuring speed and stunning visuals.",
    image: images["service-2"],
    link: "/services",
  },
  {
    title: "3D & Motion",
    description: "Bring your products and concepts to life with interactive 3D animations and motion graphics.",
    image: images["service-3"],
    link: "/services",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive design solutions tailored to elevate your brand in the digital landscape.
          </p>
        </div>

        <div className="space-y-12 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-xl relative group">
                <img
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <h3 className="font-display text-2xl md:text-4xl font-bold mb-3">{service.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <Link href={service.link}>
                  <Button variant="ghost" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}