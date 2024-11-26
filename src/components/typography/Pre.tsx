import { cn } from "@/lib/utils";
import React from "react";

export const Pre = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <pre
    className={cn(
      "bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg",
      className
    )}
  >
    {children}
  </pre>
);
