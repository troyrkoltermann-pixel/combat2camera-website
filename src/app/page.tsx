const pillars = [
  "Fight media production for athletes, gyms, and promoters",
  "Training content systems built to grow reach and bookings",
  "A clean handoff from capture to published digital assets",
];

const domains = [
  "combat2camera.org",
  "combat2camera.com",
  "combattocamera.org",
  "combattocamera.com",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Combat2Camera</p>
        <h1>Media systems for fighters, coaches, and combat brands.</h1>
        <p className="lead">
          This site is now set up as the production base for Combat2Camera. The
          app is ready for GitHub, Vercel, Supabase, and your custom domains.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="mailto:hello@combat2camera.org">
            Contact
          </a>
          <a className="button button-secondary" href="#infrastructure">
            View infrastructure
          </a>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <p className="eyebrow">Core Focus</p>
          <h2>Built to support both the brand and the business backend.</h2>
        </div>

        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article className="card" key={pillar}>
              <p>{pillar}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel" id="infrastructure">
        <div className="panel-header">
          <p className="eyebrow">Infrastructure</p>
          <h2>Current deployment and domain plan.</h2>
        </div>

        <div className="infra-grid">
          <article className="card">
            <h3>Primary domain</h3>
            <p>
              Use <strong>combat2camera.org</strong> as the canonical production
              domain in Vercel.
            </p>
          </article>

          <article className="card">
            <h3>Redirect domains</h3>
            <ul>
              {domains.slice(1).map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h3>Backend</h3>
            <p>Supabase will provide auth, storage, and database services.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
