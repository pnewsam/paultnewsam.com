import React from "react";

import { cn } from "@/lib/utils";

export const cardStyles =
  "bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 shadow-lg dark:border-neutral-700 rounded-lg";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(cardStyles, className)} {...props}>
      {children}
    </div>
  );
});

Card.displayName = "Card";

export { Card };
