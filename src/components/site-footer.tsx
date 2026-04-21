import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div>
        <strong>Combat 2 Camera</strong>
        <p>
          Photography-centered healing, mentorship, workshops, retreats, and
          exhibitions for veterans, service members, and military families.
        </p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/about">About</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/support">Support</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/accessibility">Accessibility</Link>
      </nav>
    </footer>
  );
}
