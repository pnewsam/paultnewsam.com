import { cva } from "class-variance-authority";
import { Check, CircleSlash, HelpCircle, X } from "lucide-react";

const statusVariants = cva("inline-flex items-center gap-1", {
  variants: {
    status: {
      done: "text-green-500 dark:text-green-400",
      attempted: "text-yellow-500 dark:text-yellow-400",
      "not done": "text-red-500 dark:text-red-400",
      unknown: "text-gray-500 dark:text-gray-400",
    },
  },
});

const text = {
  done: "Done",
  attempted: "Attempted",
  "not done": "Not Done",
  unknown: "Unknown",
};

export const StatusText = ({ status }: { status: string }) => {
  const statusText =
    text[status as "done" | "attempted" | "not done" | "unknown"];
  return (
    <div
      className={statusVariants({
        status: status as "done" | "attempted" | "not done" | "unknown",
      })}
    >
      {statusText}
      {status === "unknown" && <CircleSlash className="w-4 h-4" />}
      {status === "done" && <Check className="w-4 h-4" />}
      {status === "attempted" && <HelpCircle className="w-4 h-4" />}
      {status === "not done" && <X className="w-4 h-4" />}
    </div>
  );
};
