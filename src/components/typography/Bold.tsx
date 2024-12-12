import React from "react";

import { cn } from "@/lib/utils";

export const Bold = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <b className={cn("font-semibold", className)}>{children}</b>;
};
