import { ArrowRight, CheckCircle2, Layers, Layout, PenTool } from 'lucide-react';
import Link from 'next/link';

export default function Marquee() {
  const services = [
    { name: 'Web Design', icon: <Layout size={20} /> },
    { name: 'Brand Identity', icon: <PenTool size={20} /> },
    { name: '3D Motion', icon: <ArrowRight size={20} /> }, // Abstract icon
    { name: 'UX Strategy', icon: <Layers size={20} /> },
  ];

  return (
    <div className="w-full py-8 border-y border-white/10 bg-surface/50 backdrop-blur-sm relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center overflow-hidden whitespace-nowrap">
        {/* First Row */}
        <div className="flex gap-16 items-center animate-fade-up">
          {services.map((item, i) => (
            <div key={`row1-${i}`} className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <span className="font-mono text-lg md:text-2xl text-muted group-hover:text-secondary transition-colors">
                {item.name}
              </span>
              <span className="text-accent mx-2">/</span>
            </div>
          ))}
          {/* Duplicate for loop effect */}
          {services.map((item, i) => (
            <div key={`row1-dup-${i}`} className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <span className="font-mono text-lg md:text-2xl text-muted group-hover:text-secondary transition-colors">
                {item.name}
              </span>
              <span className="text-accent mx-2">/</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-accent border border-accent/30 px-6 py-2 rounded-full">
          <span>Available for new projects</span>
        </div>
      </div>
    </div>
  );
}