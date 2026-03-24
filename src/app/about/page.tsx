import { Metadata } from "next";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "About Us | Atlas Creative Studio",
  description: "Learn about our team, our philosophy, and our history.",
  openGraph: {
    title: "About Us | Atlas Creative Studio",
    description: "Learn about our team, our philosophy, and our history.",
    images: [
      {
        url: images.about.src,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Atlas Creative Studio is an award-winning digital design agency founded in Houston, Texas. We believe in the power of design to transform businesses and connect brands with their audiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of designers, developers, and strategists work collaboratively to deliver pixel-perfect results that drive growth.
            </p>
            <img
              src={images.about.src}
              alt={images.about.alt}
              width={1200}
              height={800}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}