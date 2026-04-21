import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <div className="utility-bar">
        <span>Registered Utah charity. 501(c)(3) determination pending.</span>
        <a href="mailto:info@combat2camera.org">info@combat2camera.org</a>
      </div>

      <div className="main-nav">
        <Link className="brand" href="/">
          <Image
            src="/assets/logo/Logo C2C.png"
            alt="Combat 2 Camera logo"
            width={210}
            height={140}
            priority
          />
        </Link>
        <nav className="nav-links" aria-label="Homepage sections">
          <Link href="/about">Who We Are</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/support">Support</Link>
          <Link href="/founder-story">Founder Story</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="button button-primary" href="/donate">
          Donate
        </Link>
      </div>
    </header>
  );
}
