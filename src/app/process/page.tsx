import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | Atlas Creative Studio",
  description: "How we work. From discovery to launch.",
  openGraph: {
    title: "Our Process | Atlas Creative Studio",
    description: "How we work. From discovery to launch.",
  },
};

export default function ProcessPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Our Process
          </h1>
          <p className="text-lg text-muted-foreground">
            A transparent workflow designed for clarity and efficiency.
          </p>
        </div>
        {/* Reusing logic from ProcessSection but expanded for page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-muted/30 p-6 rounded-xl border border-border flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold font-mono">
                  {i}
                </div>
                <h3 className="font-bold text-xl">Process Step {i}</h3>
              </div>
              <p className="text-muted-foreground">
                Detailed description of process step {i} goes here. This includes research, ideation, design, and implementation phases.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}