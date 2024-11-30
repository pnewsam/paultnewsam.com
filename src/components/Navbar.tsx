import ThemeToggle from "./ThemeToggle";
import BackLink from "./BackLink";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-sm bg-background/80">
      <nav className="container max-w-screen-lg mx-auto px-8 flex justify-between py-8 gap-4">
        <div className="flex items-center gap-4">
          <BackLink />
        </div>
        <div className="flex items-center gap-4">
          {/* <Link
            className="hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md px-2 py-1"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md px-2 py-1"
            href="/notes"
          >
            Notes
          </Link> */}
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
