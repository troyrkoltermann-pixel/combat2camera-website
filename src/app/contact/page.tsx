import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { breadcrumbJsonLd, buildMetadata, pageJsonLd, siteConfig } from "@/lib/seo";

const contactDescription =
  "Contact Combat 2 Camera about veteran photography programs, partnerships, support, exhibitions, and future workshops.";

export const metadata: Metadata = buildMetadata({
  title: "Contact Combat 2 Camera",
  description: contactDescription,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Connect with Combat 2 Camera."
      intro="Reach out about programs, partnerships, future donations, media, or ways to support veterans through photography."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ])}
      />
      <JsonLd
        data={pageJsonLd({
          type: "ContactPage",
          name: "Contact Combat 2 Camera",
          description: contactDescription,
          path: "/contact",
        })}
      />
      <section className="content-section contact-panel">
        <div>
          <p className="eyebrow">Email</p>
          <h2>info@combat2camera.org</h2>
          <p>
            Social channels and additional contact options will be added as they
            are set up.
          </p>
        </div>
        <a className="button button-primary" href="mailto:info@combat2camera.org">
          Send Email
        </a>
      </section>
    </PageShell>
  );
}
