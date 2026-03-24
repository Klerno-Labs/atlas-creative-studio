'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Types
interface Project {
  id: string;
  title: string;
  category: "Web Design" | "Branding" | "Product" | "Photography";
  year: string;
  images: string[];
  description: string;
  challenge: string;
  solution: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Aurora Finance',
    category: 'Web Design',
    year: '2024',
    images: [
      require('@/config/images').images['gallery-1'].src,
      require('@/config/images').images['gallery-4'].src,
    ],
    description: 'A complete rebrand and web platform for a leading fintech startup.',
    challenge: 'Transform a complex data dashboard into an intuitive user experience.',
    solution: 'Implemented a dark-mode financial dashboard with real-time analytics visualization.',
  },
  {
    id: '2',
    title: 'Velvet Branding',
    category: 'Branding',
    year: '2023',
    images: [
      require('@/config/images').images['gallery-2'].src,
      require('@/config/images').images['service-1'].src,
    ],
    description: 'Full visual identity package for a luxury clothing retailer.',
    challenge: 'Capture the essence of elegance and modernity in a saturated market.',
    solution: 'Developed a minimalist monogram logo and custom typography system.',
  },
  {
    id: '3',
    title: 'Apex Product',
    category: 'Product',
    year: '2023',
    images: [
      require('@/config/images').images['gallery-3'].src,
      require('@/config/images').images['process'].src,
    ],
    description: 'UI/UX design for a revolutionary smart home hub.',
    challenge: 'Simplify complex IoT controls into a user-friendly interface.',
    solution: 'Created a gesture-based control system with a focus on accessibility.',
  },
  {
    id: '4',
    title: 'Urban Architecture',
    category: 'Photography',
    year: '2022',
    images: [
      require('@/config/images').images['gallery-4'].src,
      require('@/config/images').images['about'].src,
    ],
    description: 'Visual storytelling for an award-winning architecture firm.',
    challenge: 'Showcase raw architectural forms in a high-contrast, moody style.',
    solution: 'Shot and edited a portfolio of 40+ architectural projects.',
  },
  {
    id: '5',
    title: 'Quantum Motion',
    category: '3D Motion',
    year: '2024',
    images: [
      require('@/config/images').images['service-3'].src,
      require('@/config/images').images['gallery-1'].src,
    ],
    description: 'Cinematic motion graphics for a tech conference keynote.',
    challenge: 'Visualize abstract quantum physics concepts for a broad audience.',
    solution: 'Developed 30+ seconds of 3D motion animation using Blender and After Effects.',
  },
  {
    id: '6',
    title: 'Echo Systems',
    category: 'Web Design',
    year: '2022',
    images: [
      require('@/config/images').images['gallery-2'].src,
      require('@/config/images').images['gallery-3'].src,
    ],
    description: 'SaaS landing page design with high conversion rates.',
    challenge: 'Drive sign-ups through a clutter-free, value-focused layout.',
    solution: 'Designed a split-screen landing page focusing on user benefits.',
  },
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Design', 'Branding', 'Product', 'Photography', '3D Motion'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-primary text-secondary">
      <Navbar />
      
      {/* Header */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-accent mb-4 tracking-widest">PORTFOLIO</p>
          <h1 className="text-5xl md:text-8xl font-heading font-bold mb-12">Selected Projects</h1>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 overflow-x-auto pb-4 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 border border-white/10 rounded-full font-mono text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === cat 
                  ? 'bg-accent border-accent text-white' 
                  : 'bg-transparent hover:border-white/30 text-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer aspect-[4/5] overflow-hidden rounded-2xl relative"
            >
              <Image
                src={project.images[0]}
                alt={project.title}
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-mono text-accent text-xs mb-2">{project.category}</p>
                    <h3 className="text-3xl font-heading font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm mt-2">{project.year}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl"
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-6 z-10 p-4 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all"
            aria-label="Close project"
          >
            <X size={24} />
          </button>

          <div className="max-w-[1400px] mx-auto h-full flex flex-col">
            {/* Project Header */}
            <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
              <div className="w-full md:w-3/4 bg-surface relative overflow-hidden">
                <div className="h-1/2 md:h-full">
                  <Image
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    width={1200}
                    height={900}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-1/2 md:h-full">
                  <Image
                    src={selectedProject.images[1] || selectedProject.images[0]}
                    alt={selectedProject.title}
                    width={1200}
                    height={900}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/4 p-8 md:p-12 flex flex-col justify-center bg-primary">
                <div className="space-y-12">
                  <div>
                    <p className="font-mono text-accent mb-4">{selectedProject.category}</p>
                    <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                      {selectedProject.title}
                    </h2>
                    <p className="text-muted text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="space-y-8 border-t border-white/10 pt-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-4">The Challenge</h4>
                      <p className="text-secondary">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-4">The Solution</h4>
                      <p className="text-secondary">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8">
                    <p className="font-mono text-sm text-muted mb-2">Year</p>
                    <p className="text-xl font-heading font-bold">{selectedProject.year}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}