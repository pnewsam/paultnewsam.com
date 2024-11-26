import { cn } from "@/lib/utils";
import React from "react";

export const H1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1
    className={cn(
      "text-5xl font-medium text-neutral-900 dark:text-white",
      className
    )}
  >
    {children}
  </h1>
);
