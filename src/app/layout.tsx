import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "./Satoshi-Variable.woff2",
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
    <html lang="en" className="h-full">
      <body className={`${satoshi.className} bg-white text-neutral-800`}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
