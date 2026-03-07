import HeroSection from "@/components/section/hero-section";
import ExperienceSection from "@/components/section/experience-section";
import VenturesSection from "@/components/section/ventures-section";
import TestimonialsSection from "@/components/section/testimonials-section";
import CtaSection from "@/components/section/cta-section";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <VenturesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
