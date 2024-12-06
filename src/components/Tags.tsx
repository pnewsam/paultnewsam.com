import { Code, Component, Database, LayoutDashboard } from "lucide-react";

import { Tag } from "@/constants/pageMetadata";
import { cn } from "@/lib/utils";
import { Subject } from "@/types/subject";

import { Badge } from "./Badge";

const variantByName: Record<
  string,
  | "default"
  | "rose"
  | "fuchsia"
  | "violet"
  | "blue"
  | "cyan"
  | "emerald"
  | "lime"
  | "orange"
> = {
  [Tag.HTML]: "orange",
  [Tag.CSS]: "cyan",
  [Tag.Javascript]: "emerald",
  [Tag.Typescript]: "blue",
  [Tag.React]: "cyan",
  [Tag.NextJS]: "violet",
  [Subject.SystemDesign]: "rose",
  [Subject.DataStructuresAndAlgorithms]: "orange",
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
  [Subject.SystemDesign]: <Component className="w-4 h-4" />,
  [Subject.DataStructuresAndAlgorithms]: <Database className="w-4 h-4" />,
  [Subject.UserInterface]: <LayoutDashboard className="w-4 h-4" />,
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
    <div className={cn("flex justify-start gap-2 flex-wrap", className)}>
      {tags.map((tag) => (
        <Badge key={tag} variant={getVariant(tag)} size={size}>
          {size !== "sm" && iconByName[tag]}
          {tag}
        </Badge>
      ))}
    </div>
  );
}
