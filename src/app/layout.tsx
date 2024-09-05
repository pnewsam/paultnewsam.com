import type { Metadata } from "next";

import localFont from "next/font/local";
import { TopNav } from "@/components/TopNav";
import "./globals.css";

const satoshi = localFont({
  src: "./Satoshi-Variable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paul T. Newsam | Frontend Developer",
  description: "Personal website of Paul T. Newsam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} bg-white`}>
        <main className="">
          <div className="w-full max-w-[960px] mx-auto">
            <TopNav />
            <div className="py-8 px-8">
              <div className="w-full">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
