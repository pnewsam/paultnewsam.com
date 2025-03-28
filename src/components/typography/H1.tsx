import React from "react";

import { cn } from "@/lib/utils";

export const H1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1
    className={cn(
      "text-4xl md:text-5xl font-medium text-neutral-900 dark:text-white",
      className,
    )}
  >
    {children}
  </h1>
);
