import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStack from "@/components/TechStack";
import ExperiencePreview from "@/components/ExperiencePreview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <TechStack />
      <ExperiencePreview />
      <CTASection />
    </>
  );
}
