import { cn } from "@/lib/utils";

export function Emphasis({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <em className={cn("italic", className)}>{children}</em>;
}
