import Link from "next/link";

import BackLink from "./BackLink";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-sm bg-background/80">
      <nav className="container max-w-screen-lg mx-auto px-4 md:px-8 flex justify-between py-8 gap-4">
        <div className="flex items-center gap-4">
          <BackLink />
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="text-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md px-2 py-1"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md px-2 py-1"
            href="/notes"
          >
            Notes
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
