import { images } from "@/config/images";

export default function FeaturedWork() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center">Featured Work</h2>
      <div className="flex overflow-x-auto space-x-4 mt-8">
        <img src={images["gallery-1"].src} alt={images["gallery-1"].alt} className="w-64 h-40 object-cover rounded-lg" />
        <img src={images["gallery-2"].src} alt={images["gallery-2"].alt} className="w-64 h-40 object-cover rounded-lg" />
        <img src={images["gallery-3"].src} alt={images["gallery-3"].alt} className="w-64 h-40 object-cover rounded-lg" />
      </div>
    </section>
  );
}