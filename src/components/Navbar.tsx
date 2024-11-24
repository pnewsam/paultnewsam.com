import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="">
      <nav className="container max-w-screen-lg mx-auto px-8 flex justify-end py-8 gap-4">
        <div className="flex items-center gap-4">
          <Link
            className="hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md px-2 py-1"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md px-2 py-1"
            href="/blog"
          >
            Blog
          </Link>
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
}
