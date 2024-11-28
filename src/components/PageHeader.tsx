import { H1 } from "@/components/typography/H1";
import Badge from "@/components/Badge";

export default function PageHeader({
  title,
  tags,
}: {
  title: string;
  tags: string[];
}) {
  return (
    <div>
      <H1 className="mb-6">{title}</H1>
      {tags.length > 0 && (
        <div className="flex items-center gap-2 mb-6">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
    </div>
  );
}
