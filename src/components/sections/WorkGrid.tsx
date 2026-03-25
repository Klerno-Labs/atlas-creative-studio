import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export default function WorkGrid() {
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Our Portfolio
          </h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 bg-gray-100 rounded-lg transition-colors">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Branding
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Web
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-md bg-gray-50 cursor-pointer"
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