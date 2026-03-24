import { Metadata } from "next";
import ServicesSection from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Services | Atlas Creative Studio",
  description: "Discover the services we offer to elevate your brand.",
};

export default function Services() {
  return (
    <main className="pt-20">
      <h1 className="text-3xl font-bold text-center">Our Services</h1>
      <ServicesSection />
    </main>
  );
}