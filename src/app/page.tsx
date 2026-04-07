export default function Home() {
  return (
    <main className="coming-page">
      <section className="coming-hero">
        <div className="signal-bar" />
        <p className="eyebrow">Combat 2 Camera</p>
        <p className="status-chip">Coming Soon</p>
        <h1>Photography, healing, and renewed purpose for veterans.</h1>
        <p className="lead">
          Combat 2 Camera empowers veterans to rediscover purpose and resilience
          through photography as a form of art therapy, meaningful social
          connection, and opportunities to exhibit their work.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="mailto:info@combat2camera.org">
            Contact Us
          </a>
          <a className="button button-secondary" href="/donate">
            Donate Soon
          </a>
        </div>
      </section>

      <section className="coming-grid">
        <article className="coming-card">
          <p className="card-label">Mission</p>
          <h2>A veteran-centered nonprofit using photography as a path to healing.</h2>
          <p>
            We are building a digital home for workshops, retreats, exhibitions,
            mentorship, and community-centered programming designed to support
            veterans and their families.
          </p>
        </article>

        <article className="coming-card coming-card-accent">
          <p className="card-label">Current Status</p>
          <h2>Registered Utah charity. 501(c)(3) pending.</h2>
          <p>
            Combat 2 Camera is preparing for full public launch and donation
            activation as soon as federal nonprofit status is confirmed.
          </p>
        </article>

        <article className="coming-card">
          <p className="card-label">Programs</p>
          <ul className="coming-list">
            <li>Photography workshops</li>
            <li>Retreats and mentorship</li>
            <li>Veteran exhibitions and storytelling</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
