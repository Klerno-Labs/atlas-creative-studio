import { z } from "zod";

import React from "react";

export const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Example Project Card */}
      <div className="bg-surface rounded-xl overflow-hidden shadow-md">
        <img src="https://mfile.z.ai/1774357004984-19c6d9263d3b42c8991a6ed24f859081.png?ufileattname=2026032420563733a03666e5d54857_watermark.png" alt="Project 1" className="w-full h-auto object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg">Project Title</h3>
          <p className="text-gray-600">Brief description of the project.</p>
        </div>
      </div>
      {/* Add more project cards as needed */}
    </div>
  );
};