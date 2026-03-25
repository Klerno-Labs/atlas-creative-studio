import { siteConfig } from "@/config/site";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Process() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center">Our Process</h1>
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center">How We Work</h2>
          <p className="text-lg text-center">
            Our process is designed to ensure that every project is a success. We follow a structured approach that includes discovery, concept development, design, and delivery.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}