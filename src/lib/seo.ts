export const siteConfig = {
  name: "Combat 2 Camera",
  alternateName: "Combat2Camera",
  url: "https://combat2camera.org",
  email: "info@combat2camera.org",
  description:
    "Combat 2 Camera empowers veterans, service members, and military families through photography-based healing, mentorship, workshops, retreats, and exhibitions.",
  founder: "Troy R. Koltermann",
  foundingLocation: "Utah",
  keywords: [
    "veteran photography therapy",
    "photography workshops for veterans",
    "art therapy for veterans",
    "veteran nonprofit Utah",
    "PTSD photography healing",
    "military family support programs",
    "veteran retreats Utah",
    "veteran exhibitions photography",
  ],
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  url: siteConfig.url,
  email: siteConfig.email,
  logo: `${siteConfig.url}/assets/logo/Logo%20C2C.png`,
  description: siteConfig.description,
  foundingLocation: {
    "@type": "Place",
    name: siteConfig.foundingLocation,
  },
  founder: {
    "@id": `${siteConfig.url}/founder-story#founder`,
  },
  nonprofitStatus: "Nonprofit501c3Pending",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Utah",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  audience: [
    {
      "@type": "Audience",
      audienceType: "Veterans",
    },
    {
      "@type": "Audience",
      audienceType: "Active duty service members",
    },
    {
      "@type": "Audience",
      audienceType: "National Guard and Reserve members",
    },
    {
      "@type": "Audience",
      audienceType: "Military families",
    },
  ],
  knowsAbout: [
    "Photography",
    "Veteran support",
    "Art therapy",
    "PTSD recovery support",
    "Workshops",
    "Retreats",
    "Mentorship",
    "Photography exhibitions",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  url: siteConfig.url,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

export const founderJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/founder-story#founder`,
  name: siteConfig.founder,
  url: `${siteConfig.url}/founder-story`,
  image: `${siteConfig.url}/assets/photos/troy_koltermann%20Headshot.JPG`,
  jobTitle: "Founder",
  worksFor: {
    "@id": `${siteConfig.url}/#organization`,
  },
  description:
    "Troy R. Koltermann is a combat veteran and founder of Combat 2 Camera, a Utah charity using photography to support healing, purpose, and community for veterans.",
};

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
