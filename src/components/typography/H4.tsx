import React from "react";

import { cn } from "@/lib/utils";

export const H4 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h4
    className={cn(
      "text-xl leading-7 mb-4 font-medium text-neutral-900 dark:text-white",
      className,
    )}
  >
    {children}
  </h4>
);
