import { cn } from "@/lib/utils";
import React from "react";

export const Li = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <li className={cn("ml-2", className)}>{children}</li>;
