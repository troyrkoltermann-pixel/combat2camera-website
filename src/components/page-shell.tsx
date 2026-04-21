import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="site-page interior-page" id="main-content">
      <SiteHeader />
      <section className="interior-hero">
        <Link className="story-back-link" href="/">
          Back to Home
        </Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}
