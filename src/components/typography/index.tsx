import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const InternalLink = ({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <Link
    className={cn(
      "text-blue-400 transition hover:text-blue-500 inline-flex items-center gap-2",
      className
    )}
    href={href}
    {...props}
  >
    {children}
  </Link>
);

export const ExternalLink = ({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className={cn(
      "text-blue-400 transition hover:text-blue-500 inline-flex items-center gap-2",
      className
    )}
    href={href}
    {...props}
  >
    {children}
  </a>
);
