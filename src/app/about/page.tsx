import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { breadcrumbJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Combat 2 Camera, a registered Utah charity using photography-centered programs to support veterans, service members, and military families.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Combat 2 Camera"
      title="A photography-based path toward purpose, resilience, and community."
      intro="Combat 2 Camera serves veterans, active duty service members, National Guard and Reserve members, and military families through photography-centered healing programs."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />
      <section className="content-section two-column-content">
        <div>
          <p className="eyebrow">Mission</p>
          <h2>Helping veterans learn to see the world again.</h2>
        </div>
        <div className="prose-block">
          <p>
            Combat 2 Camera empowers veterans to rediscover purpose and
            resilience through photography as a form of art therapy, meaningful
            social connection, and opportunities to exhibit their work.
          </p>
          <p>
            Our programs are built around workshops, retreats, mentorship, and
            exhibitions that give participants a creative tool, a supportive
            community, and a way to tell stories visually.
          </p>
        </div>
      </section>

      <section className="content-section info-cards">
        <article>
          <h2>Who We Serve</h2>
          <p>
            Veterans, active duty service members, National Guard and Reserve
            members, and the families who support them.
          </p>
        </article>
        <article>
          <h2>Current Status</h2>
          <p>
            Combat 2 Camera is a registered Utah charity awaiting federal
            501(c)(3) determination.
          </p>
        </article>
        <article>
          <h2>Where We Work</h2>
          <p>
            We are based in Utah and are building programs that can serve
            veterans and military-connected families across the region.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
