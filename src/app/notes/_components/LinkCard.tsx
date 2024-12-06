import Link from "next/link";

import { cardStyles } from "@/components/Card";
import { Tags } from "@/components/Tags";
import { Body } from "@/components/typography/Body";
import { H3 } from "@/components/typography/H3";
import { cn } from "@/lib/utils";

export function LinkCard({
  href,
  title,
  description,
  tags,
}: {
  href: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <Link
      className={cn(
        cardStyles,
        "p-8 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 duration-200 flex flex-col justify-start gap-4 hover:-translate-y-1 transition-transform",
      )}
      href={href}
    >
      <H3 className="no-underline decoration-none mb-0">{title}</H3>
      <Tags size="sm" tags={tags} />
      <Body size="sm">{description}</Body>
    </Link>
  );
}
