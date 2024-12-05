import { cva } from "class-variance-authority";
import { CircleAlert, CircleMinus } from "lucide-react";

import { Importance } from "@/constants/problems";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center font-medium gap-2 px-1 py-[2px] rounded-sm text-xs border",
  {
    variants: {
      importance: {
        [Importance.Essential]: "border-cyan-500 text-cyan-500",
        [Importance.Important]: "border-yellow-500 text-yellow-500",
        [Importance.Optional]: "border-neutral-500 text-neutral-500",
      },
    },
  },
);

export const ImportanceBadge = ({ importance }: { importance: Importance }) => {
  return (
    <span className={cn(badgeVariants({ importance }))}>
      {importance === Importance.Optional && (
        <CircleMinus className="w-4 h-4" />
      )}
      {importance === Importance.Essential && (
        <CircleAlert className="w-4 h-4" />
      )}
      {importance}
    </span>
  );
};
