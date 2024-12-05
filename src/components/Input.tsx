import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "border bg-neutral-100 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 shadow-sm rounded-md",
  {
    variants: {
      size: {
        sm: "px-2 py-1",
        md: "px-3 py-2",
        lg: "px-4 py-3",
      },
    },
  },
);

export function Input({
  type,
  placeholder,
  className,
  size = "md",
  ...props
}: {
  type: string;
  placeholder: string;
  size: "sm" | "md" | "lg";
  className?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type" | "placeholder"
>) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(inputVariants({ size, className }))}
      {...props}
    />
  );
}
