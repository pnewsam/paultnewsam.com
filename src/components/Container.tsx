import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "container max-w-screen-lg mx-auto px-8 min-h-[calc(100vh-103px)]",
        className
      )}
    >
      {children}
    </div>
  );
}
