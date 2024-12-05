import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tableVariants = cva(
  "w-full rounded-lg [&_th]:rounded-t-lg [&_th]:bg-neutral-100 dark:[&_th]:bg-neutral-900/25 [&_th]:p-4 [&_th]:text-left [&_td]:p-4 [&_tr]:border-t",
);

export const Table = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <table className={cn(tableVariants(), className)}>{children}</table>;
};
