import type { Metadata } from "next";
import { DonationCta } from "@/components/home/donation-cta";
import { GallerySection } from "@/components/home/gallery-section";
import { HeroSection } from "@/components/home/hero-section";
import { ImpactSection } from "@/components/home/impact-section";
import { MissionSection } from "@/components/home/mission-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildMetadata, organizationJsonLd, pageJsonLd, siteConfig, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Combat 2 Camera | Photography Programs for Veterans",
  description:
    "Combat 2 Camera helps veterans reconnect through photography-centered workshops, mentorship, retreats, exhibitions, and structured community experiences.",
  path: "/",
});

export default function Home() {
  return (
    <main className="site-page" id="main-content">
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd
        data={pageJsonLd({
          name: siteConfig.defaultTitle,
          description:
            "Combat 2 Camera helps veterans reconnect through photography-centered workshops, mentorship, retreats, exhibitions, and structured community experiences.",
          path: "/",
        })}
      />
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
