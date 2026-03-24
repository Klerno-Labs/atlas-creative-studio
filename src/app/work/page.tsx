import { Metadata } from "next";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Our Work | Portfolio | Atlas Creative Studio",
  description: "Explore our latest projects in web design, branding, and development. See how we craft digital solutions.",
  openGraph: {
    title: "Our Work | Atlas Creative Studio",
    description: "Explore our latest projects in web design, branding, and development.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/work`,
    images: [
      {
        url: images.gallery_1.src,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function WorkPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Selected Work
          </h1>
          <p className="text-lg text-muted-foreground">
            A curated collection of projects that define our craft.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for dynamic grid */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[4/5] bg-muted rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}