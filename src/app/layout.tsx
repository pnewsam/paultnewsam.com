import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideNav } from "@/components/SideNav";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-neutral-100`}>
        <main className="">
          <div className="w-full max-w-[960px] bg-white mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] md:min-h-screen">
            <SideNav />
            <div className="py-8 md:py-16 px-8 md:h-screen md:overflow-y-scroll">
              <div className="w-full">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
