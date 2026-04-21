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
  );
}
