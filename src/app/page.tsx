export default function Home() {
  return (
    <main className="coming-page">
      <section className="coming-hero">
        <div className="signal-bar" />
        <p className="eyebrow">Combat2Camera</p>
        <p className="status-chip">Coming Soon</p>
        <h1>Built for the fight world. Framed for the screen.</h1>
        <p className="lead">
          Combat2Camera is preparing a digital home for fight media, athlete
          storytelling, gym content, and event-focused production.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="mailto:hello@combat2camera.org">
            Contact Us
          </a>
          <a className="button button-secondary" href="https://instagram.com" target="_blank" rel="noreferrer">
            Follow the Build
          </a>
        </div>
      </section>

      <section className="coming-grid">
        <article className="coming-card">
          <p className="card-label">What&apos;s Launching</p>
          <h2>A sharper brand site for fighters, coaches, gyms, and promoters.</h2>
          <p>
            The full experience is in development now, including brand
            positioning, service pages, and a production-ready backend.
          </p>
        </article>

        <article className="coming-card coming-card-accent">
          <p className="card-label">Primary Domain</p>
          <h2>combat2camera.org</h2>
          <p>
            All alternate domains route here as the canonical public home for
            Combat2Camera.
          </p>
        </article>

        <article className="coming-card">
          <p className="card-label">In Progress</p>
          <ul className="coming-list">
            <li>Homepage and brand direction</li>
            <li>Service and inquiry flow</li>
            <li>Supabase-backed site features</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
