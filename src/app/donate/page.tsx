import Link from "next/link";

export default function DonatePage() {
  return (
    <main className="donate-page">
      <section className="donate-panel">
        <p className="eyebrow">Donations Opening Soon</p>
        <h1>Combat 2 Camera is preparing to accept donations.</h1>
        <p>
          We are a registered Utah charity and are awaiting federal 501(c)(3)
          confirmation. Donation functionality will be activated as soon as the
          IRS determination is complete.
        </p>
        <p>
          For early support, partnership conversations, or questions, contact us
          at <a href="mailto:info@combat2camera.org">info@combat2camera.org</a>.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">
            Back To Homepage
          </Link>
          <a className="button button-secondary" href="mailto:info@combat2camera.org">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
