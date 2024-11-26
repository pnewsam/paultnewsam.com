import { cn } from "@/lib/utils";
import React from "react";

export const BodySmall = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={cn(
      "text-lg/relaxed mb-8 text-neutral-600 dark:text-neutral-300",
      className
    )}
  >
    {children}
  </p>
);
