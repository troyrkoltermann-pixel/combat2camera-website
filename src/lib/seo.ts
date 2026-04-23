import type { Metadata } from "next";

export const siteConfig = {
  name: "Combat 2 Camera",
  alternateName: "Combat2Camera",
  url: "https://combat2camera.org",
  email: "info@combat2camera.org",
  tagline: "Veteran healing through photography",
  description:
    "Combat 2 Camera empowers veterans, service members, and military families through photography-based healing, mentorship, workshops, retreats, and exhibitions.",
  defaultTitle: "Combat 2 Camera | Veteran Healing Through Photography",
  defaultOgImage: {
    url: "/assets/photos/C2C_Web__L3A9646_Sep 18 2025.jpg",
    width: 2048,
    height: 1638,
    alt: "A Combat 2 Camera participant photographing a red rock landscape",
  },
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
  slogan: siteConfig.tagline,
  url: siteConfig.url,
  email: siteConfig.email,
  logo: `${siteConfig.url}/assets/logo/combat2camera-logo.svg`,
  image: `${siteConfig.url}${siteConfig.defaultOgImage.url}`,
  description: siteConfig.description,
  foundingLocation: {
    "@type": "Place",
    name: siteConfig.foundingLocation,
  },
  founder: {
    "@id": `${siteConfig.url}/founder-story#founder`,
  },
  nonprofitStatus: "Nonprofit501c3Pending",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "general inquiries",
      email: siteConfig.email,
      availableLanguage: ["English"],
    },
  ],
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
  description: siteConfig.description,
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

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  type?: "website" | "article";
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
  type = "website",
  noIndex = false,
}: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : undefined,
  };
}

export function pageJsonLd({
  type = "WebPage",
  name,
  description,
  path,
}: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  name: string;
  description: string;
  path: string;
}) {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function faqJsonLd(
  items: Array<{
    question: string;
    answer: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
