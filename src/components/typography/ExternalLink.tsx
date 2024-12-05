import { cn } from "@/lib/utils";

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={cn(
        "underline text-cyan-600 dark:text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-400",
        className,
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
