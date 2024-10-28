import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ButtonLink = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => (
  <a
    href={href}
    className={cn(
      buttonVariants({ variant: "secondary" }),
      "gap-2 font-medium text-base hover:bg-neutral-200 dark:hover:bg-neutral-700",
      className
    )}
  >
    {children}
  </a>
);
