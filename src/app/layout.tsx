import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "@/components/Navbar";

import "./globals.css";

const erode = localFont({
  src: "./Erode-Variable.woff2",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  title: "Paul T. Newsam",
  description: "Personal website of Paul T. Newsam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full" suppressHydrationWarning>
      <body className={erode.className}>
        <Navbar />
        <main className="py-12">{children}</main>
      </body>
    </html>
  );
}
