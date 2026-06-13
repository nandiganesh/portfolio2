import { STATS } from "@/lib/data";
import { StaggerContainer, StaggerItem } from "./Motion";

export default function Stats() {
  return (
    <section className="px-6 py-20 border-y border-border">
      <StaggerContainer
        className="max-w-content mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        staggerDelay={0.1}
      >
        {STATS.map((stat) => (
          <StaggerItem key={stat.label} className="text-center md:text-left">
            <p className="font-display text-4xl md:text-5xl font-semibold text-gradient">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted uppercase tracking-wider">
              {stat.label}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
