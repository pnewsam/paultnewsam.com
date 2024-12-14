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
        "text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors",
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
