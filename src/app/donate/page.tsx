import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Donations Opening Soon",
  description:
    "Combat 2 Camera is an approved 501(c)(3) public charity under 509(a)(2) and is preparing to activate online donations.",
  path: "/donate",
  noIndex: true,
});

export default function DonatePage() {
  return (
    <main className="donate-page" id="main-content">
      <section className="donate-panel">
        <p className="eyebrow">Donations Opening Soon</p>
        <h1>Combat 2 Camera is preparing to activate online donations.</h1>
        <p>
          Combat 2 Camera has received 501(c)(3) approval as a public charity
          under 509(a)(2). Online donation functionality is now being finalized
          and will be activated on the website soon.
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
      <SiteFooter />
    </main>
  );
}
