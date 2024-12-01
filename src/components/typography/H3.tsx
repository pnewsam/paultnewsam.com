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
      "text-2xl mb-4 font-medium text-neutral-900 dark:text-white underline decoration-4 decoration-cyan-400 underline-offset-8",
      className
    )}
  >
    {children}
  </h3>
);
