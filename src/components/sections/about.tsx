import { images } from "@/config/images";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <img src={images.about.src} alt={images.about.alt} className="mt-6 rounded-xl" />
        <p className="mt-4 text-lg">At Atlas Creative Studio, we believe in the power of design to transform ideas into reality.</p>
      </div>
    </section>
  );
};

export default AboutSection;