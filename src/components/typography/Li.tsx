import { cn } from "@/lib/utils";
import React from "react";

export const Li = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <li className={cn("text-lg/relaxed md:text-xl/relaxed ml-2", className)}>
    {children}
  </li>
);
