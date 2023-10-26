import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

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
      <body className={`${dmSans.className} bg-stone-50`}>
        <main className="bg-stone-50">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen">
            {children}
          </div>
        </main>
      </body>
      <Footer />
    </html>
  );
}
