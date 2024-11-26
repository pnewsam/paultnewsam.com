"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const isSandboxSubpage = (pathname: string) =>
  pathname.includes("/sandbox") && pathname !== "/sandbox";

export default function BackLink() {
  const pathname = usePathname();

  const backHref = isSandboxSubpage(pathname) ? "/sandbox" : "/";

  if (backHref === "/") return null;
  return (
    <Link
      href={backHref}
      className="flex items-center gap-2 group hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md px-3 py-2"
    >
      <ArrowLeft className="w-5 h-5 group-hover:stroke-neutral-900 dark:group-hover:stroke-neutral-100 transition group-hover:translate-x-[-2px]" />
      Back to {isSandboxSubpage(pathname) ? "Sandbox" : "Home"}
    </Link>
  );
}
