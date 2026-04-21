import { DonationCta } from "@/components/home/donation-cta";
import { FounderSection } from "@/components/home/founder-section";
import { GallerySection } from "@/components/home/gallery-section";
import { HeroSection } from "@/components/home/hero-section";
import { ImpactSection } from "@/components/home/impact-section";
import { MissionSection } from "@/components/home/mission-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="site-page">
      <SiteHeader />
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <ImpactSection />
      <GallerySection />
      <FounderSection />
      <TestimonialsSection />
      <DonationCta />
    </main>
  );
}
