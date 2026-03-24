import Link from "next/link";
import { images } from "@/config/images";

const projects = [
  {
    id: 1,
    title: "Nebula Finance",
    category: "Web Design",
    image: images["gallery-1"],
    year: "2023",
  },
  {
    id: 2,
    title: "Savory Bites",
    category: "Branding",
    image: images["gallery-2"],
    year: "2022",
  },
  {
    id: 3,
    title: "TechFlow App",
    category: "Development",
    image: images["gallery-3"],
    year: "2023",
  },
  {
    id: 4,
    title: "Urban Living",
    category: "Architecture",
    image: images["gallery-4"],
    year: "2024",
  },
];

export function WorkSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              A curated selection of projects where design meets functionality.
            </p>
          </div>
          <Link href="/work">
            <span className="text-primary font-semibold hover:underline flex items-center gap-1 cursor-pointer">
              View All Projects <span className="text-xl">→</span>
            </span>
          </Link>
        </div>

        {/* Simple Grid for simplicity and performance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
            >
              <img
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-mono text-accent mb-1">{project.category}</span>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}