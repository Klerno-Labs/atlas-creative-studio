import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#D4AF37] text-center">
      <h2 className="text-3xl font-bold text-[#050505]">Ready to Start a Project?</h2>
      <p className="mt-4 text-lg text-[#050505]">Let&apos;s bring your vision to life.</p>
      <button className="mt-6 px-6 py-3 bg-[#050505] text-[#FFFFFF] rounded-lg">Get Started</button>
    </section>
  );
};

export default CTASection;