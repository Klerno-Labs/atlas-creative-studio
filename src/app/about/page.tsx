import { Metadata } from "next";
import AboutSection from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About Us | Atlas Creative Studio",
  description: "Learn more about our team and our philosophy.",
};

export default function About() {
  return (
    <main className="pt-20">
      <h1 className="text-3xl font-bold text-center">About Us</h1>
      <AboutSection />
    </main>
  );
}