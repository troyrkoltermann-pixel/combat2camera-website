import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Workshops",
    description:
      "Hands-on photography experiences that give veterans practical tools for creative expression, presence, and connection.",
  },
  {
    title: "Retreats",
    description:
      "Immersive, photography-centered retreats designed to create space for reflection, community, and renewed purpose.",
  },
  {
    title: "Exhibitions",
    description:
      "Public opportunities for veterans to share their work, reclaim authorship of their stories, and be seen by the community.",
  },
  {
    title: "Mentorship",
    description:
      "Continued guidance that helps participants keep building confidence, skill, and creative identity after each program.",
  },
];

const testimonials = [
  {
    quote:
      "Photography for me is absolutely massive. I can honestly say it is life saving. It was probably the biggest part of my treatment when I was suffering in the worst times with my PTSD.",
    name: "Christopher Priest",
  },
  {
    quote:
      "It took me out of my headspace. I was able to start to feel what it is to be creative again. I forgot what that felt like.",
    name: "Amy Diaz",
  },
  {
    quote:
      "It would be worth every veteran to go through this. It is something the VA ought to offer.",
    name: "Shawn Christensen",
  },
];

const galleryImages = [
  {
    src: "/assets/photos/C2C_Web__L3A9478_Sep 15 2025.jpg",
    alt: "Combat 2 Camera participant photographing outdoors",
  },
  {
    src: "/assets/photos/C2C_Web__L3A0304_Sep 27 2025.jpg",
    alt: "Veterans participating in a photography workshop",
  },
  {
    src: "/assets/photos/C2C_Web_DTCF0031_Oct 05 2025.jpg",
    alt: "Combat 2 Camera workshop moment",
  },
  {
    src: "/assets/photos/C2C_Web__L3A9615_Sep 18 2025.jpg",
    alt: "Participant creating photographs during Combat 2 Camera",
  },
];

export default function Home() {
  return (
    <main className="site-page">
      <header className="site-header" aria-label="Primary navigation">
        <Link className="brand" href="/">
          <Image
            src="/assets/logo/Icon C2C.png"
            alt="Combat 2 Camera logo"
            width={72}
            height={48}
            priority
          />
          <span>Combat 2 Camera</span>
        </Link>
        <nav className="nav-links" aria-label="Homepage sections">
          <a href="#mission">Mission</a>
          <a href="#programs">Programs</a>
          <a href="#story">Story</a>
        </nav>
        <Link className="button button-primary" href="/donate">
          Donate
        </Link>
      </header>

      <section className="hero-home">
        <div className="hero-copy">
          <p className="eyebrow">Veteran healing through photography</p>
          <h1>Helping veterans find purpose on both sides of the lens.</h1>
          <p className="lead">
            Combat 2 Camera empowers veterans to rediscover purpose and
            resilience through photography as a form of art therapy, meaningful
            social connection, and opportunities to exhibit their work.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/donate">
              Donate
            </Link>
            <a className="button button-secondary" href="#mission">
              Learn Our Mission
            </a>
          </div>
          <p className="status-note">
            Registered Utah charity. Federal 501(c)(3) determination pending.
          </p>
        </div>

        <div className="hero-media" aria-label="Combat 2 Camera program photos">
          <Image
            className="hero-image hero-image-main"
            src="/assets/photos/C2C_Web__L3A9646_Sep 18 2025.jpg"
            alt="Veteran participating in a Combat 2 Camera photography program"
            width={900}
            height={720}
            priority
          />
          <Image
            className="hero-image hero-image-inset"
            src="/assets/photos/C2C_Web__L3A0384_Sep 28 2025.jpg"
            alt="Combat 2 Camera portrait moment"
            width={420}
            height={520}
          />
        </div>
      </section>

      <section className="mission-band" id="mission">
        <p className="eyebrow">Why It Matters</p>
        <h2>
          For many veterans, healing requires more than treatment. It requires
          purpose, identity, community, and a way to express what words cannot.
        </h2>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Who We Serve</p>
          <h2>Veterans first. Active military and families alongside them.</h2>
        </div>
        <p>
          Combat 2 Camera creates photography-centered programs for veterans,
          with support for active military members and families who are part of
          the healing journey. Our work centers on creative recovery, social
          connection, and the dignity of being seen through your own story.
        </p>
      </section>

      <section className="programs-section" id="programs">
        <div className="section-heading">
          <p className="eyebrow">Programs</p>
          <h2>Structured around creativity, connection, and continuation.</h2>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.title}>
              <span>{program.title}</span>
              <p>{program.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-strip" aria-label="Program photo gallery">
        {galleryImages.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={520}
            height={360}
          />
        ))}
      </section>

      <section className="founder-section" id="story">
        <div className="founder-image-wrap">
          <Image
            src="/assets/photos/troy_koltermann Headshot.JPG"
            alt="Troy Koltermann, founder of Combat 2 Camera"
            width={520}
            height={720}
          />
        </div>
        <div className="founder-copy">
          <p className="eyebrow">Founder Story</p>
          <h2>Built from lived experience.</h2>
          <p>
            Combat 2 Camera was founded from the lived experience of a combat
            veteran navigating PTSD and rediscovering purpose through
            photography. What began as a personal part of healing is becoming a
            pathway for other veterans to reconnect with creativity, community,
            and identity.
          </p>
          <p>
            The goal is not simply to teach camera settings. It is to create a
            space where veterans can slow down, observe, make meaning, and share
            work they are proud to put into the world.
          </p>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-heading">
          <p className="eyebrow">Participant Voices</p>
          <h2>Photography gives veterans another language for healing.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.name}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="donation-cta">
        <p className="eyebrow">Support The Mission</p>
        <h2>Help build workshops, retreats, exhibitions, and mentorship for veterans.</h2>
        <p>
          Donations will open when Combat 2 Camera receives federal 501(c)(3)
          confirmation. Until then, you can contact us about support,
          partnerships, and future giving.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/donate">
            Donate
          </Link>
          <a className="button button-secondary" href="mailto:info@combat2camera.org">
            info@combat2camera.org
          </a>
        </div>
      </section>
    </main>
  );
}
