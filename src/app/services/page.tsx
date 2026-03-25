import { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services | Atlas Creative Studio",
  description: "Our range of services including branding, web design, and digital strategy.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Brand Strategy & Identity",
      description: "We craft compelling brand stories, visual identities, and guidelines that resonate with your audience.",
      icon: "🎨",
    },
    {
      title: "Web Design & Development",
      description: "We build responsive, fast, and beautiful websites that convert visitors into customers.",
      icon: "💻",
    },
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns that increase visibility, engagement, and ROI across all channels.",
      icon: "📈",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              We offer a full suite of creative services tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}