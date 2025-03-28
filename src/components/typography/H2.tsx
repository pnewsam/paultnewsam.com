import React from "react";

import { cn } from "@/lib/utils";

export const H2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={cn(
      "text-3xl font-medium text-neutral-800 dark:text-neutral-100 mb-4",
      className,
    )}
  >
    {children}
  </h2>
);
