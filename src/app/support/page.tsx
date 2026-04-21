import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { impactItems } from "@/data/home";
import { breadcrumbJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support Combat 2 Camera's photography workshops, retreats, exhibitions, and mentorship for veterans and military families.",
  alternates: {
    canonical: "/support",
  },
};

export default function SupportPage() {
  return (
    <PageShell
      eyebrow="Support The Mission"
      title="Help create photography-based healing opportunities for veterans."
      intro="Donations will open after federal 501(c)(3) confirmation. Until then, supporters and potential partners can contact Combat 2 Camera directly."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Support", url: `${siteConfig.url}/support` },
        ])}
      />
      <section className="content-section support-list">
        {impactItems.map((item) => (
          <article key={item.label}>
            <p className="eyebrow">{item.label}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
      <section className="content-section support-cta-panel">
        <h2>Want to support early?</h2>
        <p>
          Reach out about partnerships, sponsorships, program support, or future
          giving.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/donate">
            Donation Status
          </Link>
          <a className="button button-secondary" href="mailto:info@combat2camera.org">
            info@combat2camera.org
          </a>
        </div>
      </section>
    </PageShell>
  );
}
