import { Metadata } from "next";
import { cn } from "@/lib/cn";
import BentoGrid from "@/components/sections/bento-grid";

export const metadata: Metadata = {
  title: "Our Work | Atlas Creative Studio",
  description: "Explore our portfolio of award-winning design projects.",
};

export default function Work() {
  return (
    <main className={cn("pt-20")}>
      <h1 className="text-3xl font-bold text-center">Our Work</h1>
      <BentoGrid />
    </main>
  );
}