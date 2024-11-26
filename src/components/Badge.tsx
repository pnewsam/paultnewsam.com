import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex uppercase tracking-widest font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-md whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-200 dark:bg-cyan-700 text-cyan-900 dark:text-cyan-100 border-cyan-300 dark:border-cyan-600",
      },
      size: {
        default: "p-2 text-sm",
        sm: "p-1 text-xs",
      },
    },
  }
);

export default function Badge({
  children,
  variant = "default",
  className,
  size = "default",
}: {
  children: React.ReactNode;
  variant?: "default";
  className?: string;
  size?: "default" | "sm";
}) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {children}
    </span>
  );
}
