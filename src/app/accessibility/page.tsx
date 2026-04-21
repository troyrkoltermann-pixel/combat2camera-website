import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { breadcrumbJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Combat 2 Camera accessibility statement and contact information for reporting accessibility barriers.",
  alternates: {
    canonical: "/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <PageShell
      eyebrow="Accessibility"
      title="Combat 2 Camera is working to make this website accessible."
      intro="We are building this site with accessibility in mind, including keyboard navigation, readable structure, responsive layouts, and descriptive image text."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Accessibility Statement", url: `${siteConfig.url}/accessibility` },
        ])}
      />
      <section className="content-section policy-content">
        <h2>Our Commitment</h2>
        <p>
          Combat 2 Camera aims to provide a website that is usable by as many
          people as possible, including visitors using assistive technology,
          keyboard navigation, screen readers, and mobile devices.
        </p>

        <h2>Current Accessibility Work</h2>
        <p>
          The site includes semantic landmarks, skip navigation, visible focus
          states, responsive layouts, reduced-motion support, and descriptive
          alternative text for meaningful images.
        </p>

        <h2>Future Media</h2>
        <p>
          As video content is added, Combat 2 Camera will work to provide
          captions, transcripts, or other accessible alternatives where needed.
        </p>

        <h2>Report An Issue</h2>
        <p>
          If you experience an accessibility barrier, contact us at{" "}
          <a href="mailto:info@combat2camera.org">info@combat2camera.org</a>.
        </p>
      </section>
    </PageShell>
  );
}
