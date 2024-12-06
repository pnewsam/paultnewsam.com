import { cva } from "class-variance-authority";
import { Check, CircleSlash, HelpCircle, X } from "lucide-react";

import { Status } from "@/types/leetcodeProblem";

const statusVariants = cva("inline-flex items-center gap-1", {
  variants: {
    status: {
      [Status.Done]: "text-green-500 dark:text-green-400",
      [Status.Attempted]: "text-yellow-500 dark:text-yellow-400",
      [Status.NotDone]: "text-red-500 dark:text-red-400",
      [Status.Unknown]: "text-neutral-500 dark:text-neutral-400",
    },
  },
});

const text = {
  [Status.Done]: "Done",
  [Status.Attempted]: "Attempted",
  [Status.NotDone]: "Not Done",
  [Status.Unknown]: "Unknown",
};

export const StatusText = ({ status }: { status: Status }) => {
  const statusText = text[status];
  return (
    <div
      className={statusVariants({
        status,
      })}
    >
      {statusText}
      {status === Status.Unknown && <CircleSlash className="w-4 h-4" />}
      {status === Status.Done && <Check className="w-4 h-4" />}
      {status === Status.Attempted && <HelpCircle className="w-4 h-4" />}
      {status === Status.NotDone && <X className="w-4 h-4" />}
    </div>
  );
};
