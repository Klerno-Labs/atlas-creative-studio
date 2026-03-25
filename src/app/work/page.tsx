import WorkGrid from "@/components/sections/WorkGrid";

export const metadata = {
  title: "Atlas Creative Studio | Work",
  description: "Explore our portfolio showcasing exceptional design work across multiple disciplines.",
  openGraph: {
    title: "Atlas Creative Studio | Work",
    description: "Explore our portfolio showcasing exceptional design work across multiple disciplines.",
    images: ["/hero-bg.jpg"],
  },
};

export default function Work() {
  return (
    <div>
      <WorkGrid />
    </div>
  );
}