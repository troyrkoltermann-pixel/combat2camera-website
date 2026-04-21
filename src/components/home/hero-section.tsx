import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero-home">
      <div className="hero-copy">
        <p className="eyebrow">Veteran healing through photography</p>
        <h1>Helping veterans find purpose on both sides of the lens.</h1>
        <p className="lead">
          Combat 2 Camera empowers veterans to rediscover purpose and resilience
          through photography as a form of art therapy, meaningful social
          connection, and opportunities to exhibit their work.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/donate">
            Donate
          </Link>
          <a className="button button-secondary" href="#mission">
            Learn More
          </a>
        </div>
      </div>

      <div className="hero-media" aria-label="Combat 2 Camera program photos">
        <Image
          className="hero-image hero-image-main"
          src="/assets/photos/C2C_Web__L3A9646_Sep 18 2025.jpg"
          alt="A Combat 2 Camera participant photographing a red rock landscape"
          width={900}
          height={720}
          priority
        />
        <Image
          className="hero-image hero-image-inset"
          src="/assets/photos/C2C_Web_DTCF0024_Oct 05 2025.jpg"
          alt="A participant standing outdoors during a Combat 2 Camera workshop"
          width={420}
          height={520}
        />
      </div>
    </section>
  );
}
