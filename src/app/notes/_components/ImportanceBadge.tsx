import { cva } from "class-variance-authority";
import { Star, StarHalf, StarOff } from "lucide-react";

import { Importance } from "@/constants/problems";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center font-medium gap-2 px-1 py-[2px] rounded-sm text-xs border",
  {
    variants: {
      importance: {
        [Importance.Important]:
          "border-yellow-500 dark:border-yellow-600 bg-yellow-300 dark:bg-yellow-400 text-yellow-600 dark:text-yellow-600",
        [Importance.Recommended]:
          "border-yellow-500 dark:border-yellow-600 bg-yellow-300/50 dark:bg-yellow-400/50 text-yellow-600 dark:text-yellow-400",
        [Importance.Optional]:
          "bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-600",
      },
    },
  },
);

export const ImportanceBadge = ({ importance }: { importance: Importance }) => {
  return (
    <span className={cn(badgeVariants({ importance }))}>
      {importance === Importance.Important && (
        <Star className="w-4 h-4 fill-yellow-800" />
      )}
      {importance === Importance.Recommended && (
        <StarHalf className="w-4 h-4" />
      )}
      {importance === Importance.Optional && <StarOff className="w-4 h-4" />}
      {importance}
    </span>
  );
};
