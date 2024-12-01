import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const codeVariants = cva(
  "mb-8 text-rose-600 dark:text-rose-300 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-sm border border-rose-600/25 dark:border-rose-300/25 m-1",
  {
    variants: {
      size: {
        xs: "text-xs/relaxed md:text-sm/relaxed px-1 py-[2px] m-[2px]",
        sm: "text-sm/relaxed md:text-base/relaxed px-2 py-1 m-1",
        md: "text-base/relaxed md:text-lg/relaxed px-2 py-1 m-1",
        lg: "text-lg/relaxed md:text-xl/relaxed px-2 py-1 m-1",
      },
    },
  }
);

export const Code = ({
  children,
  className,
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  spaced?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}) => <code className={cn(codeVariants({ size }), className)}>{children}</code>;
