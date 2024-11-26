import { cn } from "@/lib/utils";
import React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 shadow-lg dark:border-neutral-700 rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
