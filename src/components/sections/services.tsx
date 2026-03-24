const ServicesSection = () => {
  const services = [
    { name: "Branding", description: "Creating unique brand identities that resonate." },
    { name: "Web Design", description: "Designing user-friendly and visually appealing websites." },
    { name: "3D Motion", description: "Bringing ideas to life through dynamic 3D animations." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;