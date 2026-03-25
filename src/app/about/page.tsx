import { siteConfig } from "@/config/site";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center">Who We Are</h2>
          <p className="text-lg text-center">
            At Atlas Creative Studio, we are a passionate team of designers and strategists dedicated to crafting exceptional experiences. Our journey began with a vision to redefine creativity in the digital space.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}