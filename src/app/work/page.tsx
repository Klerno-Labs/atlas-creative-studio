import { siteConfig } from "@/config/site";
import Navbar from "@/components/ui/Navbar";
import WorkGrid from "@/components/sections/WorkGrid";
import Footer from "@/components/ui/Footer";

export default function Work() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center">{siteConfig.name} Work</h1>
        <WorkGrid />
      </main>
      <Footer />
    </>
  );
}