import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://combat2camera.org"),
  title: "Combat2Camera | Coming Soon",
  description: "Combat2Camera is preparing a new home for fight media, athlete storytelling, and production services.",
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
