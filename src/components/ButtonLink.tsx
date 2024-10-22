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
      "gap-2 font-light text-base",
      className
    )}
  >
    {children}
  </a>
);
