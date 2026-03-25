import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export default function FeaturedWork() {
  const projects = [
    {
      id: 1,
      title: "Nexus Brand Identity",
      category: "Branding",
      imageSrc: images["gallery-1"].src,
      imageAlt: images["gallery-1"].alt,
    },
    {
      id: 2,
      title: "Apex Mobile App",
      category: "Web Design",
      imageSrc: images["gallery-2"].src,
      imageAlt: images["gallery-2"].alt,
    },
    {
      id: 3,
      title: "Velocity Editorial",
      category: "Digital Strategy",
      imageSrc: images["gallery-3"].src,
      imageAlt: images["gallery-3"].alt,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Featured Works
          </h2>
          <p className="text-lg text-gray-600">
            A selection of our recent projects in branding, web design, and digital strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-medium">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}