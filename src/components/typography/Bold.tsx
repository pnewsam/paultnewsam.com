import React from "react";

import { cn } from "@/lib/utils";

export const Bold = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <b
      className={cn(
        "font-semibold text-cyan-900 dark:text-cyan-100",
        className,
      )}
    >
      {children}
    </b>
  );
};
