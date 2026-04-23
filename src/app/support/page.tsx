import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { impactHighlights } from "@/data/home";
import { breadcrumbJsonLd, buildMetadata, pageJsonLd, siteConfig } from "@/lib/seo";

const supportDescription =
  "Support Combat 2 Camera's photography workshops, equipment access, exhibitions, and veteran-focused growth as the organization moves toward launch.";

export const metadata: Metadata = buildMetadata({
  title: "Support Combat 2 Camera",
  description: supportDescription,
  path: "/support",
});

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
      <JsonLd
        data={pageJsonLd({
          name: "Support Combat 2 Camera",
          description: supportDescription,
          path: "/support",
        })}
      />
      <section className="content-section support-list">
        <article>
          <p className="eyebrow">Impact So Far</p>
          <h2>Combat 2 Camera is already delivering structured experiences for veterans.</h2>
          <ul>
            {impactHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
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
