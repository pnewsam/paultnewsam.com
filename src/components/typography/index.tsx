import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const Body = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("text-neutral-700 leading-relaxed", className)}>
    {children}
  </div>
);

export const Ul = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <ul
    className={cn(
      "list-disc text-neutral-700 leading-relaxed pl-4 space-y-4",
      className
    )}
  >
    {children}
  </ul>
);

export const Li = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <li className={cn("ml-2", className)}>{children}</li>;

export const H1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1 className={cn("text-2xl font-semibold tracking-tight", className)}>
    {children}
  </h1>
);

export const H2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={cn("text-xl font-semibold tracking-tight", className)}>
    {children}
  </h2>
);

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
