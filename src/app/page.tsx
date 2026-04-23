import { DonationCta } from "@/components/home/donation-cta";
import { GallerySection } from "@/components/home/gallery-section";
import { HeroSection } from "@/components/home/hero-section";
import { ImpactSection } from "@/components/home/impact-section";
import { MissionSection } from "@/components/home/mission-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <main className="site-page" id="main-content">
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <SiteHeader />
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <ImpactSection />
      <GallerySection />
      <DonationCta />
      <SiteFooter />
    </main>
  );
}
