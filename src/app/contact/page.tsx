import { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact | Atlas Creative Studio",
  description: "Get in touch with us to start your project.",
  openGraph: {
    title: "Contact | Atlas Creative Studio",
    description: "Get in touch with us to start your project.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Let's Work Together
          </h1>
        </div>
        <ContactSection />
      </div>
    </div>
  );
}