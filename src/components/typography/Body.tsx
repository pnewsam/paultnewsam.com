import { cn } from "@/lib/utils";
import React from "react";

export const Body = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  spaced?: boolean;
}) => (
  <p
    className={cn(
      "text-xl/relaxed md:text-2xl/relaxed mb-8 text-neutral-600 dark:text-neutral-300",
      className
    )}
  >
    {children}
  </p>
);
