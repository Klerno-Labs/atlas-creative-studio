import { images } from "@/config/images";

const steps = [
  { title: "Discovery", desc: "Deep dive into your goals, audience, and brand DNA." },
  { title: "Strategy", desc: "Defining the roadmap and creative direction." },
  { title: "Design", desc: "Iterative visual development and prototyping." },
  { title: "Launch", desc: "Development, testing, and deployment." },
];

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground">
            A transparent workflow designed for clarity and efficiency.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-muted/50 p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold font-mono mb-6 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[-24px] z-20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}