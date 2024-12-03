import React from "react";

import { cn } from "@/lib/utils";

export const H3 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={cn(
      "text-2xl mb-4 font-medium text-neutral-900 dark:text-white",
      className,
    )}
  >
    {children}
  </h3>
);
