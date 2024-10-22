import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={erode.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
