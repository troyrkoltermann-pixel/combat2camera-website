import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://combat2camera.org"),
  title: "Combat 2 Camera | Veteran Healing Through Photography",
  description: "Combat 2 Camera empowers veterans through photography, healing, mentorship, and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
