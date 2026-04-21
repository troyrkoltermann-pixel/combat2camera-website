import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <Link className="brand" href="/">
        <Image
          src="/assets/logo/Icon C2C.png"
          alt="Combat 2 Camera logo"
          width={72}
          height={48}
          priority
        />
        <span>Combat 2 Camera</span>
      </Link>
      <nav className="nav-links" aria-label="Homepage sections">
        <a href="#mission">Mission</a>
        <a href="#programs">Programs</a>
        <a href="#story">Story</a>
      </nav>
      <Link className="button button-primary" href="/donate">
        Donate
      </Link>
    </header>
  );
}
