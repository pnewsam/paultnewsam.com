import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "rounded-md inline-flex items-center gap-2 font-medium text-base px-4 py-2 transition-colors border shadow-md hover:shadow-lg",
  {
    variants: {
      variant: {
        default:
          "text-cyan-100 bg-cyan-500 hover:bg-cyan-400 border-cyan-600 dark:bg-cyan-600 hover:border-cyan-500 hover:dark:bg-cyan-500 dark:border-cyan-500 hover:dark:border-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-cyan-500/50 dark:shadow-cyan-300/10",
        secondary:
          "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700",
      },
    },
  },
);

export function Button({
  className,
  children,
  variant = "default",
  ...props
}: {
  variant?: "default";
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </button>
  );
}
