import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Layout } from "@/components/Layout";
import "./globals.css";

const satoshi = localFont({
  src: "./Satoshi-Variable.woff2",
  display: "swap",
  weight: "200 800",
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
    <html lang="en" className="h-full">
      <body
        className={`${satoshi.className} text-stone-900 dark:text-stone-50 flex flex-col min-h-screen bg-stone-50 dark:bg-stone-900`}
      >
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
