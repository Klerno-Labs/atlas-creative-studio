import { siteConfig } from "@/config/site";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center">Our Services</h1>
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center">What We Offer</h2>
          <p className="text-lg text-center">
            Atlas Creative Studio specializes in branding, web design, and creative strategy. Our team is dedicated to delivering exceptional results tailored to your needs.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}