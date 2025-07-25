import type { Metadata } from "next";
import "./globals.css";
import Container from "./components/container";
import Navbar from "./components/navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "kristelfung.com",
  description: "very epic and cool blog",
};

import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={garamond.className}>
      <body>
        <Container>
          <Navbar />
          {children}
        </Container>
        <Analytics />
      </body>
    </html>
  );
}
