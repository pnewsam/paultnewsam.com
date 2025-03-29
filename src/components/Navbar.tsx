import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-background">
      <nav className="container max-w-screen-lg mx-auto px-4 py-4 lg:py-6 lg:px-8 flex justify-between gap-4 border-b">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-xl font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md px-2 py-1 transition-colors"
          >
            Paul T. Newsam
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-start gap-2">
            <Link
              href="https://github.com/pnewsam"
              className="text-lg inline-flex items-center gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full px-2 py-2 transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/paul-newsam/"
              className="text-lg inline-flex items-center gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full px-2 py-2 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>

            <Link
              href="https://x.com/paultakuma"
              className="text-lg inline-flex items-center gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full px-2 py-2 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
          <span className="mx-2 text-neutral-300 dark:text-neutral-500">|</span>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
