import { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Process | Atlas Creative Studio",
  description: "Learn how we work with our clients to deliver exceptional results.",
};

export default function ProcessPage() {
  const steps = [
    { number: "01", title: "Discovery", description: "We dive deep into your business goals, audience, and competition to build a solid foundation." },
    { number: "02", title: "Strategy", description: "Our team crafts a roadmap, defining the creative direction and technical specifications." },
    { number: "03", title: "Design", description: "We bring concepts to life through wireframes, prototypes, and high-fidelity visuals." },
    { number: "04", title: "Development", description: "We build your digital products using the latest technologies, ensuring performance and accessibility." },
    { number: "05", title: "Launch", description: "We deploy your project, provide training, and support you during the transition." },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              The Process
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              We follow a proven methodology designed to minimize risk and maximize impact.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col sm:flex-row gap-8 items-start sm:items-center group"
              >
                <div className="text-5xl font-bold text-gray-100 group-hover:text-gray-300 transition-colors">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}