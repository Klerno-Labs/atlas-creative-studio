const ServicesIntro = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          We offer a range of creative services tailored to meet your needs, including Branding, Web Design, and Strategy.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Branding</h3>
            <p className="mt-2 text-gray-600">Creating a unique identity that resonates with your audience.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Web Design</h3>
            <p className="mt-2 text-gray-600">Designing user-friendly websites that drive engagement.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Strategy</h3>
            <p className="mt-2 text-gray-600">Developing strategies that align with your business goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;