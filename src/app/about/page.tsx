import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { breadcrumbJsonLd, buildMetadata, pageJsonLd, siteConfig } from "@/lib/seo";

const aboutDescription =
  "Combat 2 Camera is a registered 501(c)(3) nonprofit organization providing photography-based programming to support veteran mental wellness, social connection, and purpose after military service.";

export const metadata: Metadata = buildMetadata({
  title: "About Combat 2 Camera",
  description: aboutDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Combat 2 Camera"
      title="Photography-based programming built to strengthen wellness, connection, and purpose."
      intro="Combat 2 Camera is a registered 501(c)(3) nonprofit organization that provides photography-based programming to support veteran mental wellness, social connection, and purpose after military service."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />
      <JsonLd
        data={pageJsonLd({
          type: "AboutPage",
          name: "About Combat 2 Camera",
          description: aboutDescription,
          path: "/about",
        })}
      />

      <section className="content-section two-column-content">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Built from lived experience and designed for veteran reintegration.</h2>
        </div>
        <div className="prose-block">
          <p>
            Founded by a U.S. Army veteran, Combat 2 Camera is built on the understanding that
            many veterans face challenges related to isolation, identity, and reintegration.
          </p>
          <p>
            Combat 2 Camera addresses these challenges through structured, creative programming
            that promotes engagement, skill development, and peer connection.
          </p>
        </div>
      </section>

      <section className="content-section two-column-content">
        <div>
          <p className="eyebrow">Mission</p>
          <h2>Using photography to improve wellness, community, and purpose.</h2>
        </div>
        <div className="prose-block">
          <p>
            Combat 2 Camera uses photography as a tool to improve mental wellness, strengthen
            community, and create purpose for veterans.
          </p>
        </div>
      </section>

      <section className="content-section two-column-content">
        <div>
          <p className="eyebrow">Programs and Services</p>
          <h2>Accessible programs designed to meet veterans where they are.</h2>
        </div>
        <div className="prose-block">
          <p>
            Combat 2 Camera delivers accessible, community-based programs designed to meet
            veterans where they are. Core offerings include:
          </p>
          <ul className="about-list">
            <li>
              Photography workshops focused on technical skills such as light, composition, and
              storytelling
            </li>
            <li>Guided photo walks that encourage engagement with environment and peers</li>
            <li>
              Opportunities to exhibit work and share personal narratives through visual
              storytelling
            </li>
          </ul>
          <p>
            Programs are designed to be inclusive, hands-on, and adaptable to varying skill levels
            and experiences.
          </p>
        </div>
      </section>

      <section className="content-section two-column-content">
        <div>
          <p className="eyebrow">Impact and Outcomes</p>
          <h2>Early programming has already demonstrated measurable impact.</h2>
        </div>
        <div className="prose-block">
          <p>
            Combat 2 Camera has already demonstrated measurable early impact through its pilot
            phase.
          </p>
          <p>Pre-launch outcomes include:</p>
          <ul className="about-list">
            <li>12 events delivered across multiple cities and two countries</li>
            <li>Approximately 50 veterans directly served</li>
            <li>A combination of classroom instruction and experiential learning environments</li>
          </ul>
          <p>
            Participants reported increased social engagement, renewed interest in creative
            expression, and a greater sense of connection.
          </p>
          <p>
            Combat 2 Camera is currently developing formal outcome tracking to measure improvements
            in connection, engagement, and participant well-being over time.
          </p>
          <p>
            With 501(c)(3) status, Combat 2 Camera is expanding program delivery and building
            partnerships to increase reach and impact.
          </p>
        </div>
      </section>

      <section className="content-section about-pillars">
        <article>
          <p className="eyebrow">Approach</p>
          <h2>Skill Development</h2>
          <p>
            Participants learn practical photography skills that provide a foundation for continued
            growth and creative exploration.
          </p>
        </article>
        <article>
          <p className="eyebrow">Approach</p>
          <h2>Social Connection</h2>
          <p>
            Programs are designed to foster peer interaction and reduce isolation through shared
            experiences.
          </p>
        </article>
        <article>
          <p className="eyebrow">Approach</p>
          <h2>Purpose and Expression</h2>
          <p>
            Photography provides a constructive outlet for storytelling, identity, and personal
            reflection.
          </p>
        </article>
      </section>

      <section className="content-section two-column-content">
        <div>
          <p className="eyebrow">Founder</p>
          <h2>Military and creative experience shape the organization.</h2>
        </div>
        <div className="prose-block">
          <p>
            Combat 2 Camera was founded by Troy R. Koltermann, a U.S. Army veteran who served from
            2001 to 2017 and achieved the rank of Sergeant First Class.
          </p>
          <p>
            After experiencing challenges related to PTSD, Troy discovered photography as a form of
            art therapy. He later earned a degree in photography and won the SkillsUSA National
            Championship in Commercial Photography.
          </p>
          <p>
            His combined military and creative background informs the organization&apos;s mission and
            program design.
          </p>
        </div>
      </section>

      <section className="content-section info-cards">
        <article>
          <h2>Organizational Status</h2>
          <p>
            Combat 2 Camera is a registered 501(c)(3) nonprofit organization. All donations are
            tax deductible.
          </p>
        </article>
        <article>
          <h2>Growth Phase</h2>
          <p>
            The organization is currently in its growth phase, expanding from a successful pilot
            into a scalable program model with a focus on regional implementation and strategic
            partnerships.
          </p>
        </article>
        <article>
          <h2>Get Involved</h2>
          <p>
            Combat 2 Camera is actively seeking partnerships with veteran service organizations,
            community groups, and corporate sponsors to expand programming and increase access for
            veterans.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
