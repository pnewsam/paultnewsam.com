import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const IconLink = ({
  href,
  children,
  className,
  tooltipText = "View",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tooltipText?: string;
}) => (
  <Tooltip>
    <TooltipTrigger>
      <a
        className={cn(
          "inline-flex items-center flex-col text-stone-600 hover:bg-stone-200/50 hover:shadow-inner rounded-full p-3 transition",
          className
        )}
        href={href}
      >
        {children}
      </a>
    </TooltipTrigger>
    <TooltipContent>
      <span className="text-xs">{tooltipText}</span>
    </TooltipContent>
  </Tooltip>
);
