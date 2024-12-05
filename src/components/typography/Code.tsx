import { cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const codeVariants = cva(
  "mb-8 text-cyan-600 dark:text-cyan-300 bg-cyan-100/25 dark:bg-cyan-900/25 rounded-sm border border-cyan-600/25 dark:border-cyan-300/25",
  {
    variants: {
      size: {
        xs: "text-xs/relaxed md:text-sm/relaxed px-1 py-[2px] m-[2px]",
        sm: "text-sm/relaxed md:text-base/relaxed px-1 py-[4px] mx-1",
        md: "text-base/relaxed md:text-lg/relaxed px-1 py-[4px] mx-1",
        lg: "text-lg/relaxed md:text-xl/relaxed px-2 py-1 mx-1",
      },
    },
  },
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
