import { Code } from "lucide-react";

import { cn } from "@/lib/utils";
import { Tag } from "@/types/tag";

import { Badge } from "./Badge";

const variantByName = {
  [Tag.HTML]: "orange",
  [Tag.CSS]: "cyan",
  [Tag.Javascript]: "yellow",
  [Tag.Typescript]: "sky",
  [Tag.React]: "cyan",
  [Tag.NextJS]: "violet",
};

const getVariant = (tag: string) => {
  const variant = variantByName[tag as keyof typeof variantByName];
  return variant || "default";
};

const iconByName: Record<string, React.ReactNode> = {
  [Tag.HTML]: <Code className="w-4 h-4" />,
  [Tag.CSS]: <Code className="w-4 h-4" />,
  [Tag.Javascript]: <Code className="w-4 h-4" />,
  [Tag.Typescript]: <Code className="w-4 h-4" />,
  [Tag.React]: <Code className="w-4 h-4" />,
  [Tag.NextJS]: <Code className="w-4 h-4" />,
};

export function Tags({
  tags,
  size = "default",
  className,
}: {
  tags: string[];
  size?: "default" | "sm";
  className?: string;
}) {
  return (
    <div className={cn("inline-flex justify-start gap-2 flex-wrap", className)}>
      {tags.map((tag) => (
        <Badge key={tag} variant={getVariant(tag) as any} size={size}>
          {size !== "sm" && iconByName[tag]}
          {tag}
        </Badge>
      ))}
    </div>
  );
}
