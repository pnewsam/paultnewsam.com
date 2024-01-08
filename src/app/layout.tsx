import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} bg-stone-50`}>
        <main>
          <div className="w-full grid grid-cols-1 md:grid-cols-[300px_1fr] min-h-screen">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
