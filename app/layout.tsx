import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site Moved",
  description: "This site has moved to a new location",
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