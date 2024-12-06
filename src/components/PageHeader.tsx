import { H1 } from "@/components/typography/H1";

import { Tags } from "./Tags";

export function PageHeader({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div>
      <H1 className="mb-4 md:mb-6">{title}</H1>
      {tags.length > 0 && <Tags className="mb-6" tags={tags} />}
    </div>
  );
}
