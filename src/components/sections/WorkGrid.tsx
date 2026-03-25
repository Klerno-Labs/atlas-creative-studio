"use client";

import { images } from "@/config/images";

const WorkGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center">Our Work</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-xl shadow-md">
            <img src={images["gallery-1"].src} alt={images["gallery-1"].alt} className="object-cover w-full h-64" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <h3 className="text-lg font-bold">Project Title 1</h3>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-md">
            <img src={images["gallery-2"].src} alt={images["gallery-2"].alt} className="object-cover w-full h-64" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <h3 className="text-lg font-bold">Project Title 2</h3>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-md">
            <img src={images["gallery-3"].src} alt={images["gallery-3"].alt} className="object-cover w-full h-64" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <h3 className="text-lg font-bold">Project Title 3</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;