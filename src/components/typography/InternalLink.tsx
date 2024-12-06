import Link from "next/link";

import { cn } from "@/lib/utils";

export function InternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 underline transition-colors",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
