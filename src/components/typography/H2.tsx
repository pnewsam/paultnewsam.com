import { cn } from "@/lib/utils";
import React from "react";

export const H2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={cn(
      "text-3xl font-medium text-neutral-800 dark:text-neutral-100 mb-3",
      className
    )}
  >
    {children}
  </h2>
);
