import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Combat 2 Camera | Veteran Healing Through Photography",
    template: "%s | Combat 2 Camera",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Combat 2 Camera | Veteran Healing Through Photography",
    description: siteConfig.description,
    images: [
      {
        url: "/assets/photos/C2C_Web__L3A9646_Sep 18 2025.jpg",
        width: 2048,
        height: 1638,
        alt: "A Combat 2 Camera participant photographing a red rock landscape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Combat 2 Camera | Veteran Healing Through Photography",
    description: siteConfig.description,
    images: ["/assets/photos/C2C_Web__L3A9646_Sep 18 2025.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
