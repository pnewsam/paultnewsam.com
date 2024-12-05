import { cn } from "@/lib/utils";

export function Italic({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <i className={cn("italic", className)}>{children}</i>;
}
