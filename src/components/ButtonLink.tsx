import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/Button";

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
    className={cn(buttonVariants({ variant: "secondary" }), className)}
  >
    {children}
  </a>
);
