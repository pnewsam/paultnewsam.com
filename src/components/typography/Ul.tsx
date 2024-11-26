import { cn } from "@/lib/utils";
import React from "react";

export const Ul = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <ul
    className={cn(
      "list-disc text-neutral-700 dark:text-neutral-300 leading-relaxed pl-5 space-y-2",
      className
    )}
  >
    {children}
  </ul>
);
