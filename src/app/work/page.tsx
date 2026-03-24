import { BentoGrid } from "@/components/sections/bento-grid";

export const metadata = {
  title: "Our Work | Atlas Creative Studio",
  description: "Explore our portfolio showcasing exceptional design work across multiple disciplines.",
  openGraph: {
    title: "Our Work | Atlas Creative Studio",
    description: "Explore our portfolio showcasing exceptional design work across multiple disciplines.",
    images: [
      {
        url: "https://mfile.z.ai/1774356988974-7649c16cb4a6458ba29c52671b71e693.png?ufileattname=20260324205620dca57c9d71a749cb_watermark.png",
        width: 1200,
        height: 800,
        alt: "Abstract geometric sculpture on a modern desk in a dimly lit studio",
      },
    ],
  },
};

export default function WorkPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-16">Our Work</h1>
      <BentoGrid />
    </div>
  );
}