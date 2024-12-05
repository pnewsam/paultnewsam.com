import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "rounded-md inline-flex items-center gap-2 font-medium text-base px-4 py-2 transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-500 dark:bg-cyan-600 hover:dark:bg-cyan-500 hover:bg-cyan-600 text-cyan-50",
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
