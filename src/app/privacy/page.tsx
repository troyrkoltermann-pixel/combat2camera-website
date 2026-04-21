import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { breadcrumbJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Combat 2 Camera privacy policy for website visitors, supporters, and future program participants.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title="How Combat 2 Camera handles website information."
      intro="This page outlines the basic privacy practices for Combat 2 Camera's website. It will be expanded as donations, registrations, and participant accounts are added."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Privacy Policy", url: `${siteConfig.url}/privacy` },
        ])}
      />
      <section className="content-section policy-content">
        <h2>Information We Collect</h2>
        <p>
          At this stage, Combat 2 Camera primarily collects information when a
          visitor contacts us by email. In the future, we may collect
          information through donation forms, event registration, participant
          profiles, or newsletter forms.
        </p>

        <h2>How We Use Information</h2>
        <p>
          Information may be used to respond to inquiries, communicate about
          programs, coordinate support, manage future registrations, and improve
          the website and services.
        </p>

        <h2>Veteran and Participant Information</h2>
        <p>
          Combat 2 Camera intends to collect only the information needed to
          operate programs responsibly. We do not currently collect medical
          records through this website.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about privacy can be sent to{" "}
          <a href="mailto:info@combat2camera.org">info@combat2camera.org</a>.
        </p>
      </section>
    </PageShell>
  );
}
