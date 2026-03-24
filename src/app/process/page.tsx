import { Metadata } from "next";
import ProcessSection from "@/components/sections/process";

export const metadata: Metadata = {
  title: "Our Process | Atlas Creative Studio",
  description: "Discover how we bring your ideas to life.",
};

export default function Process() {
  return (
    <main className="pt-20">
      <h1 className="text-3xl font-bold text-center">Our Process</h1>
      <ProcessSection />
    </main>
  );
}