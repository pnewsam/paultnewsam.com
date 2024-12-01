import { cn } from "@/lib/utils";
import React from "react";

export const Bold = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <b className={cn("font-semibold", className)}>{children}</b>;
};
