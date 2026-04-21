import Link from "next/link";

export function DonationCta() {
  return (
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
  );
}
