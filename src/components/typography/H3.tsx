import { cn } from "@/lib/utils";
import React from "react";

export const H3 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={cn(
      "text-2xl font-medium text-neutral-900 dark:text-white",
      className
    )}
  >
    {children}
  </h3>
);
