import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { breadcrumbJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Join a Workshop",
  description:
    "Combat 2 Camera workshop registration is opening soon for veterans interested in photography-based connection, focus, and purpose.",
  alternates: {
    canonical: "/join-a-workshop",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function JoinAWorkshopPage() {
  return (
    <PageShell
      eyebrow="Workshop Interest"
      title="Workshop registration is opening soon"
      intro="Combat 2 Camera is preparing structured photography workshops for veterans who want to rebuild focus, reduce isolation, and reconnect through creative practice."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Join a Workshop", url: `${siteConfig.url}/join-a-workshop` },
        ])}
      />
      <section className="content-section support-cta-panel">
        <h2>Interested in a future workshop?</h2>
        <p>
          Registration will open once the next workshop dates are confirmed.
          Until then, email us and we will keep you informed as programs become
          available.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:info@combat2camera.org?subject=Workshop%20Interest">
            Email Workshop Interest
          </a>
          <Link className="button button-secondary" href="/programs">
            View Programs
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
