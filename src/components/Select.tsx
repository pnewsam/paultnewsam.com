import { cva } from "class-variance-authority";

import {
  SelectContent as SelectContentUI,
  SelectGroup as SelectGroupUI,
  SelectItem as SelectItemUI,
  SelectSeparator as SelectSeparatorUI,
  SelectTrigger as SelectTriggerUI,
  Select as SelectUI,
  SelectValue as SelectValueUI,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const selectTriggerVariants = cva(
  "h-auto bg-neutral-100 dark:bg-neutral-800 text-base",
  {
    variants: {
      size: {
        sm: "px-2 py-1",
        md: "px-3 py-2",
        lg: "px-4 py-3",
      },
    },
  },
);

export function Select({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentPropsWithoutRef<
  typeof SelectUI
>) {
  return <SelectUI {...props}>{children}</SelectUI>;
}

export function SelectValue({ children }: { children: React.ReactNode }) {
  return <SelectValueUI>{children}</SelectValueUI>;
}

export function SelectGroup({ children }: { children: React.ReactNode }) {
  return <SelectGroupUI>{children}</SelectGroupUI>;
}

export function SelectTrigger({
  children,
  className,
  size = "md",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <SelectTriggerUI
      className={cn(selectTriggerVariants({ size }), className)}
      {...props}
    >
      {children}
    </SelectTriggerUI>
  );
}

export function SelectSeparator() {
  return <SelectSeparatorUI />;
}

export const SelectContent = SelectContentUI;

export function SelectItem({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return <SelectItemUI value={value}>{children}</SelectItemUI>;
}
