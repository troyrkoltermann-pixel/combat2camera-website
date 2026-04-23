import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { breadcrumbJsonLd, buildMetadata, founderJsonLd, pageJsonLd, siteConfig } from "@/lib/seo";

const founderDescription =
  "The founder story behind Combat 2 Camera and Troy R. Koltermann's journey from combat veteran to photography-based healing work.";

export const metadata: Metadata = buildMetadata({
  title: "Founder Story",
  description: founderDescription,
  path: "/founder-story",
  type: "article",
  image: {
    url: "/assets/photos/troy_koltermann Headshot.JPG",
    width: 2730,
    height: 4096,
    alt: "Troy R. Koltermann, founder of Combat 2 Camera",
  },
});

export default function FounderStoryPage() {
  return (
    <main className="story-page" id="main-content">
      <JsonLd data={founderJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Founder Story", url: `${siteConfig.url}/founder-story` },
        ])}
      />
      <JsonLd
        data={pageJsonLd({
          name: "Founder Story",
          description: founderDescription,
          path: "/founder-story",
        })}
      />
      <section className="story-hero">
        <Link className="story-back-link" href="/">
          Back to Home
        </Link>
        <div className="story-hero-grid">
          <div>
            <p className="eyebrow">Founder&apos;s Story</p>
            <h1>Combat changes you. Not always in ways people can see.</h1>
            <p>
              The story behind Combat 2 Camera begins with lived experience,
              PTSD, and the discovery that photography could become a way
              forward.
            </p>
          </div>
          <Image
            src="/assets/photos/troy_koltermann Headshot.JPG"
            alt="Troy R. Koltermann, founder of Combat 2 Camera"
            width={520}
            height={720}
            priority
          />
        </div>
      </section>

      <article className="story-article">
        <p>
          After multiple deployments to Iraq, I came home carrying the weight of
          those experiences. Like many veterans, I was dealing with PTSD and
          trying to figure out how to move forward.
        </p>
        <p>
          I did what you&apos;re supposed to do. I went through the military
          mental health system. But the reality was inconsistent. Therapists
          changed constantly due to PCS moves, and it was hard to build any real
          continuity.
        </p>
        <p>Eventually, I was referred to a local therapist, David Newbold.</p>
        <p>That&apos;s where things started to shift.</p>
        <p>
          He introduced me to EMDR and suggested art therapy. I remember
          laughing and telling him I couldn&apos;t even draw a stick figure.
        </p>
        <p>That&apos;s when he said, &quot;Then don&apos;t draw. Try photography.&quot;</p>
        <p>
          At the time, it didn&apos;t seem like much. But not long after that, I
          found myself standing alone outside with a camera, taking photos of
          nature. Nothing dramatic. Just quiet moments. Light coming through the
          trees. A still landscape. For the first time in a long time, my mind
          slowed down.
        </p>
        <p>I wasn&apos;t thinking about the past.</p>
        <p>I was focused on what was right in front of me.</p>
        <p>That moment stuck with me.</p>
        <p>
          What started as something small turned into something much bigger.
          Photography gave me a reason to get out of the house. It pushed me to
          reengage with the world. Eventually, it led me to start photographing
          people again, reconnecting in a way I hadn&apos;t been able to before.
        </p>
        <p>It wasn&apos;t just a hobby.</p>
        <p>It was a way forward.</p>
        <p>
          After leaving the military, I decided to take it seriously. I enrolled
          at Salt Lake Community College and earned a degree in photography.
          While I was there, I competed in the SkillsUSA national competition
          for commercial photography and won at the national level.
        </p>
        <p>But the biggest impact wasn&apos;t the award.</p>
        <p>
          It was understanding what photography had done for me and what it
          could do for others.
        </p>
        <p>
          Over the years, I&apos;ve seen too many of my brothers and sisters in
          arms struggle. Too many go down destructive paths. Too many fight
          their battles alone.
        </p>
        <p>Photography helped pull me out of that.</p>
        <p>And I knew I wanted to bring that same opportunity to them.</p>
        <p>That&apos;s why I created Combat 2 Camera.</p>
        <p>
          Combat 2 Camera is built on a simple idea: give veterans a tool, a
          skill, and a community. Photography creates space to focus, to
          reconnect, and to rediscover purpose without the pressure of
          traditional therapy.
        </p>
        <p>It starts with a camera.</p>
        <p>But it leads to something much bigger.</p>
        <p>
          This mission is personal. It comes from lived experience, not theory.
          Every workshop, every connection, every story is rooted in the belief
          that healing can take different forms, and sometimes it starts with
          something as simple as learning to see the world again.
        </p>
        <p>One frame at a time.</p>
        <footer>
          <strong>Troy R. Koltermann</strong>
          <span>Founder, Combat 2 Camera</span>
        </footer>
      </article>
      <SiteFooter />
    </main>
  );
}
