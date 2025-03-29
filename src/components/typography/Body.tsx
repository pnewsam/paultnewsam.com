import { cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const bodyVariants = cva("mb-8 text-neutral-600 dark:text-neutral-400", {
  variants: {
    size: {
      xs: "text-base/relaxed md:text-lg/relaxed",
      sm: "text-lg/relaxed md:text-xl/relaxed",
      md: "text-xl/relaxed md:text-2xl/relaxed",
      lg: "text-2xl/relaxed md:text-3xl/relaxed",
    },
  },
});

export const Body = ({
  children,
  className,
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
}) => <p className={cn(bodyVariants({ size }), className)}>{children}</p>;
