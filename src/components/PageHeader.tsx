import { Body } from "@/components/typography/Body";
import { H1 } from "@/components/typography/H1";

import { Tags } from "./Tags";

export function PageHeader({
  title,
  tags,
  date,
}: {
  title: string;
  tags: string[];
  date?: string;
}) {
  return (
    <div className="mb-8 border-b pb-8">
      <H1 className="mb-4">{title}</H1>
      <Body className="mb-4 text-neutral-500 dark:text-neutral-400" size="sm">
        {date
          ? new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : ""}
      </Body>
      {tags.length > 0 && <Tags tags={tags} />}
    </div>
  );
}
