import { Body } from "@/components/typography/Body";
import { cn } from "@/lib/utils";
import Card from "@/components/Card";
export default function Callout({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "p-6 rounded-md border-l-4 border-l-cyan-400 dark:border-l-cyan-600",
        className
      )}
    >
      {title && (
        <Body className="text-neutral-800 dark:text-neutral-100 font-semibold mb-0">
          {title}
        </Body>
      )}
      <Body className="text-neutral-500 dark:text-neutral-400 mb-0">
        {children}
      </Body>
    </Card>
  );
}
