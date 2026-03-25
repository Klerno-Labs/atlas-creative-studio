import { Metadata } from "next";
import { images } from "@/config/images";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us | Atlas Creative Studio",
  description: "Meet our team and learn about our mission to create exceptional digital experiences.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                We Are Atlas Creative Studio
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Founded in Houston, TX, Atlas Creative Studio is an award-winning agency dedicated to elevating brands through strategic design and cutting-edge technology.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of passionate creatives and strategists works collaboratively to deliver solutions that not only look stunning but also drive measurable business growth.
              </p>
              <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Get in Touch
              </button>
            </div>
            <div className="relative">
              <img
                src={images.about.src}
                alt={images.about.alt}
                width={800}
                height={600}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src={images["team-1"].src}
                  alt="Creative Director"
                  width={400}
                  height={400}
                  className="rounded-xl mx-auto mb-4 w-full max-w-xs object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">Alex Morgan</h3>
                <p className="text-gray-600">Creative Director</p>
              </div>
              <div className="text-center">
                <img
                  src={images["team-1"].src}
                  alt="Senior Designer"
                  width={400}
                  height={400}
                  className="rounded-xl mx-auto mb-4 w-full max-w-xs object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">Sarah Jenkins</h3>
                <p className="text-gray-600">Senior Designer</p>
              </div>
              <div className="text-center">
                <img
                  src={images["team-1"].src}
                  alt="Developer"
                  width={400}
                  height={400}
                  className="rounded-xl mx-auto mb-4 w-full max-w-xs object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">David Chen</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}