import { H1, Body } from "@/components/typography";
import Badge from "@/components/Badge";

export default function PageHeader({
  title,
  tags,
  description,
}: {
  title: string;
  tags: string[];
  description: string;
}) {
  return (
    <>
      <H1 className="mb-6">{title}</H1>
      <div className="flex items-center gap-2 mb-6">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <Body>{description}</Body>
    </>
  );
}
