import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const bodyVariants = cva("mb-8 text-neutral-700 dark:text-neutral-300", {
  variants: {
    size: {
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
  size?: "sm" | "md" | "lg";
}) => <p className={cn(bodyVariants({ size }), className)}>{children}</p>;
