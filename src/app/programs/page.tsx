import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { programs } from "@/data/home";
import { breadcrumbJsonLd, buildMetadata, pageJsonLd, siteConfig } from "@/lib/seo";

const programsDescription =
  "Explore Combat 2 Camera programs including veteran photography workshops, exhibitions, mentorship, and hands-on experiences built to restore focus and connection.";

export const metadata: Metadata = buildMetadata({
  title: "Veteran Photography Programs",
  description: programsDescription,
  path: "/programs",
});

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
      <JsonLd
        data={pageJsonLd({
          type: "CollectionPage",
          name: "Veteran Photography Programs",
          description: programsDescription,
          path: "/programs",
        })}
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
