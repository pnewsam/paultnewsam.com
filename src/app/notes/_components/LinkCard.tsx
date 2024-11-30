import Link from "next/link";
import { H3 } from "@/components/typography/H3";
import { BodySmall } from "@/components/typography/BodySmall";
import { Badge } from "@/components/Badge";
import { cardStyles } from "@/components/Card";
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
        "p-8 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 duration-200 flex flex-col justify-between gap-4 hover:-translate-y-1 transition-transform"
      )}
      href={href}
    >
      <H3>{title}</H3>
      <div className="flex items-center gap-2">
        {tags.map((tag) => (
          <Badge size="sm" key={tag}>
            {tag}
          </Badge>
        ))}
      </div>
      <BodySmall>{description}</BodySmall>
    </Link>
  );
}
