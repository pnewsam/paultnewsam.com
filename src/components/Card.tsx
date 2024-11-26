import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 shadow-lg dark:border-neutral-700 rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
}
