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
  <p
    className={cn(
      "text-xl/relaxed md:text-2xl/relaxed mb-8 text-neutral-600 dark:text-neutral-300",
      className
    )}
  >
    {children}
  </p>
);

export const BodySmall = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={cn(
      "text-lg md:text-xl text-neutral-600 dark:text-neutral-300",
      className
    )}
  >
    {children}
  </p>
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
      "list-disc text-neutral-700 dark:text-neutral-300 leading-relaxed pl-5 space-y-2",
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
  <h1
    className={cn(
      "text-5xl font-medium text-neutral-900 dark:text-white mb-4",
      className
    )}
  >
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
  <h2
    className={cn(
      "text-3xl font-medium text-neutral-800 dark:text-neutral-100 mb-3",
      className
    )}
  >
    {children}
  </h2>
);

export const H3 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={cn(
      "text-2xl font-medium text-neutral-900 dark:text-white",
      className
    )}
  >
    {children}
  </h3>
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
      "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 transition-colors duration-200 underline underline-offset-2",
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
      "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 transition-colors duration-200 underline underline-offset-2",
      className
    )}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

export const Subtitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={cn("text-lg text-neutral-600 dark:text-neutral-400", className)}
  >
    {children}
  </p>
);

export const SmallText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={cn("text-sm text-neutral-500 dark:text-neutral-500", className)}
  >
    {children}
  </p>
);
