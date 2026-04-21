import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { programs } from "@/data/home";
import { breadcrumbJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Combat 2 Camera programs including veteran photography workshops, retreats, exhibitions, and mentorship.",
  alternates: {
    canonical: "/programs",
  },
};

export default function ProgramsPage() {
  return (
    <PageShell
      eyebrow="Programs"
      title="Photography programs built for healing, skill, and connection."
      intro="Combat 2 Camera offers photography-centered workshops, retreats, exhibitions, and mentorship for veterans, service members, and military families."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Programs", url: `${siteConfig.url}/programs` },
        ])}
      />
      <section className="content-section program-detail-grid">
        {programs.map((program) => (
          <article key={program.title}>
            <p className="eyebrow">{program.title}</p>
            <h2>{program.title}</h2>
            <p>{program.description}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
