import { images } from "@/config/images";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ContactHero from "@/components/sections/ContactHero";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Work & Portfolio | Atlas Creative Studio",
  description: "Explore our diverse portfolio of branding, web design, and digital strategy projects.",
};

export default function WorkPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <section className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Selected Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A curated selection of our recent projects in branding, web design, and digital strategy.
          </p>
        </div>
      </section>
      <WorkGrid />
      <ContactHero
        title="Have a project in mind?"
        description="Let's turn your ideas into reality."
      />
      <Footer />
    </main>
  );
}

function WorkGrid() {
  const projects = [
    {
      id: 1,
      title: "Lumina Dashboard",
      category: "Web Development",
      imageSrc: images["gallery-1"].src,
      imageAlt: images["gallery-1"].alt,
    },
    {
      id: 2,
      title: "Aether E-Commerce",
      category: "Branding",
      imageSrc: images["gallery-2"].src,
      imageAlt: images["gallery-2"].alt,
    },
    {
      id: 3,
      title: "Stratosphere Strategy",
      category: "Marketing",
      imageSrc: images["gallery-3"].src,
      imageAlt: images["gallery-3"].alt,
    },
    {
      id: 4,
      title: "Obsidian Platform",
      category: "Software Design",
      imageSrc: images["gallery-4"].src,
      imageAlt: images["gallery-4"].alt,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-md bg-white cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}