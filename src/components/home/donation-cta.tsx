import Link from "next/link";

export function DonationCta() {
  return (
    <section className="donation-cta">
      <p className="eyebrow">How Support Helps</p>
      <h2>Early support helps build the next phase of Combat 2 Camera.</h2>
      <p>
        Support now helps strengthen the foundation of the program so more
        veterans can access structured photography experiences as Combat 2
        Camera moves toward official launch.
      </p>
      <ul className="donation-list">
        <li>Provide cameras and equipment for veterans who need them</li>
        <li>Fund small group workshops and hands-on photography experiences</li>
        <li>Expand programming to reach more veterans in new locations</li>
        <li>Support exhibitions that allow veterans to share their work and their stories</li>
        <li>Build a sustainable program that continues to create lasting impact</li>
      </ul>
      <p className="donation-close">
        Help build something durable, credible, and ready to serve more veterans
        well from day one.
      </p>
      <div className="hero-actions">
        <Link className="button button-primary" href="/donate">
          Support the Mission
        </Link>
        <a className="button button-secondary" href="mailto:info@combat2camera.org">
          Contact Us
        </a>
      </div>
    </section>
  );
}
