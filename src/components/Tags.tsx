import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { Code, Gauge, Component } from "lucide-react";

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
  HTML: "orange",
  CSS: "cyan",
  JavaScript: "emerald",
  Typescript: "blue",
  React: "cyan",
  NextJS: "violet",
  "System Design": "rose",
  Performance: "orange",
};

const getVariant = (tag: string) => {
  const variant = variantByName[tag as keyof typeof variantByName];
  return variant || "default";
};

const iconByName: Record<string, React.ReactNode> = {
  HTML: <Code className="w-4 h-4" />,
  CSS: <Code className="w-4 h-4" />,
  JavaScript: <Code className="w-4 h-4" />,
  Typescript: <Code className="w-4 h-4" />,
  React: <Code className="w-4 h-4" />,
  NextJS: <Code className="w-4 h-4" />,
  "System Design": <Component className="w-4 h-4" />,
  Performance: <Gauge className="w-4 h-4" />,
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
