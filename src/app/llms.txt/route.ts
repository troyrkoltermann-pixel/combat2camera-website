import { siteConfig } from "@/lib/seo";

export async function GET() {
  const body = `# ${siteConfig.name}

> ${siteConfig.tagline}

${siteConfig.description}

Current organizational status: Registered Utah charity. Federal 501(c)(3) determination pending as of April 23, 2026.

Primary audience:
- Veterans
- Active duty service members
- National Guard and Reserve members
- Military families

Key pages:
- Home: ${siteConfig.url}/
- About: ${siteConfig.url}/about
- Programs: ${siteConfig.url}/programs
- Founder Story: ${siteConfig.url}/founder-story
- Support: ${siteConfig.url}/support
- Contact: ${siteConfig.url}/contact

Program focus:
- Foundations of Photography
- Intermediate Photography
- Workshops and Photo Experiences
- Exhibitions and Showcases

Important notes:
- Donations are not yet active on the website.
- Workshop registration is not yet open.
- Contact email: ${siteConfig.email}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
