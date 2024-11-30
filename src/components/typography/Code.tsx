import { cn } from "@/lib/utils";
import React from "react";

export const Code = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  spaced?: boolean;
}) => (
  <code
    className={cn(
      "text-lg/relaxed md:text-xl/relaxed mb-8 text-rose-600 dark:text-rose-300 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-sm border",
      className
    )}
  >
    {children}
  </code>
);
