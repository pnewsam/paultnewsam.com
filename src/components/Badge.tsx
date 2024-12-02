import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex gap-2 items-center uppercase tracking-widest font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-md whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-200 dark:bg-cyan-700 text-cyan-900 dark:text-cyan-100 border-cyan-300 dark:border-cyan-600",
        rose: "bg-rose-200 dark:bg-rose-700 text-rose-900 dark:text-rose-100 border-rose-300 dark:border-rose-600",
        fuchsia:
          "bg-fuchsia-200 dark:bg-fuchsia-700 text-fuchsia-900 dark:text-fuchsia-100 border-fuchsia-300 dark:border-fuchsia-600",
        violet:
          "bg-violet-200 dark:bg-violet-700 text-violet-900 dark:text-violet-100 border-violet-300 dark:border-violet-600",
        blue: "bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 border-blue-300 dark:border-blue-600",
        cyan: "bg-cyan-200 dark:bg-cyan-700 text-cyan-900 dark:text-cyan-100 border-cyan-300 dark:border-cyan-600",
        emerald:
          "bg-emerald-200 dark:bg-emerald-700 text-emerald-900 dark:text-emerald-100 border-emerald-300 dark:border-emerald-600",
        lime: "bg-lime-200 dark:bg-lime-700 text-lime-900 dark:text-lime-100 border-lime-300 dark:border-lime-600",
        orange:
          "bg-orange-200 dark:bg-orange-700 text-orange-900 dark:text-orange-100 border-orange-300 dark:border-orange-600",
      },
      size: {
        sm: "px-[6px] py-[3px] text-xs",
        default: "px-2 py-1 text-sm",
      },
    },
  }
);

export function Badge({
  children,
  variant = "default",
  className,
  size = "default",
}: {
  children: React.ReactNode;
  variant?:
    | "default"
    | "rose"
    | "fuchsia"
    | "violet"
    | "blue"
    | "cyan"
    | "emerald"
    | "lime"
    | "orange";
  className?: string;
  size?: "default" | "sm";
}) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {children}
    </span>
  );
}
