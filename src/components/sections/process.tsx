const ProcessSection = () => {
  const steps = [
    { title: "Discovery", description: "Understanding your needs and goals." },
    { title: "Design", description: "Creating concepts and prototypes." },
    { title: "Development", description: "Building and refining the final product." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Process</h2>
        <div className="mt-6">
          {steps.map((step, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;