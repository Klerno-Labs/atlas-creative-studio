import { images } from "@/config/images";

const services = ["Web Design", "Brand Identity", "3D Motion", "Strategy", "Development"];

export function Marquee() {
  return (
    <div className="py-6 border-y border-border/50 overflow-hidden bg-muted/30 relative z-20 backdrop-blur-sm">
      <div className="flex whitespace-nowrap animate-marquee gap-12 items-center">
        {services.map((service, i) => (
          <span key={i} className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors cursor-default">
            {service}
          </span>
        ))}
        {services.map((service, i) => (
          <span key={`dup-${i}`} className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors cursor-default">
            {service}
          </span>
        ))}
      </div>
    </div>
  );
}