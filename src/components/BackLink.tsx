"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const isSubpage = (pathname: string, page: string) =>
  pathname.includes(page) && pathname !== page;

const getLinkProps = (pathname: string) => {
  if (["/sandbox", "/notes"].includes(pathname))
    return { href: "/", label: "Home" };

  if (isSubpage(pathname, "/sandbox"))
    return { href: "/sandbox", label: "Sandbox" };

  if (isSubpage(pathname, "/notes")) return { href: "/notes", label: "Notes" };

  return {};
};

export default function BackLink() {
  const pathname = usePathname();

  const { href, label } = getLinkProps(pathname);

  if (!href) return null;

  return (
    <Link
      href={href}
      className="flex items-center gap-2 group hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md px-3 py-2"
    >
      <ArrowLeft className="w-5 h-5 group-hover:stroke-neutral-900 dark:group-hover:stroke-neutral-100 transition group-hover:translate-x-[-2px]" />
      Back to {label}
    </Link>
  );
}
