import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Atlas Creative Studio",
  description: "Our services include web design, branding, 3D motion, and development.",
  openGraph: {
    title: "Services | Atlas Creative Studio",
    description: "Our services include web design, branding, 3D motion, and development.",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions tailored to your needs.
          </p>
        </div>
        <div className="space-y-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-muted/30 p-8 rounded-xl border border-border">
              <div className="h-6 w-48 bg-muted rounded mb-4 animate-pulse" />
              <div className="h-4 w-full bg-muted/50 rounded mb-2 animate-pulse" />
              <div className="h-4 w-3/4 bg-muted/50 rounded mb-2 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}