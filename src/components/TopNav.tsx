import Link from "next/link";
import { InternalLink } from "@/components/typography";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const TopNav = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <Link
        className="text-lg text-stone-900 dark:text-white font-bold transition hover:text-stone-600 dark:hover:text-stone-300"
        href="/"
      >
        Paul T. Newsam
      </Link>
      <div className="hidden md:flex items-center space-x-4">
        <InternalLink href="/">Home</InternalLink>
        <InternalLink href="/blog">Blog</InternalLink>
        <ThemeToggle />
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col space-y-4 mt-4">
              <InternalLink href="/">Home</InternalLink>
              <InternalLink href="/blog">Blog</InternalLink>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-stone-500 dark:text-stone-400">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
