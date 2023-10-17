import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const IconLink = ({
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
          "inline-flex items-center flex-col text-blue-400 hover:bg-blue-400 hover:text-white rounded-full p-3 transition",
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

export const Footer = () => (
  <TooltipProvider>
    <footer className="inline-flex items-center flex-col fixed bottom-16 z-50 bg-white left-[50%] -translate-x-[50%] shadow-lg rounded-[48px] border border-zinc-300 px-4 py-2">
      <div className="inline-flex gap-4">
        <IconLink
          href="https://github.com/pnewsam"
          tooltipText="View on Github"
        >
          <Github className="w-6 h-6 stroke-[1.5px]" />
          <span className="text-xs sr-only">GitHub</span>
        </IconLink>

        <IconLink
          className="inline-flex items-center flex-col text-blue-400"
          tooltipText="View on LinkedIn"
          href="https://linkedin.com/in/paul-newsam"
        >
          <Linkedin className="w-6 h-6 stroke-[1.5px]" />
          <span className="text-xs sr-only">LinkedIn</span>
        </IconLink>

        <IconLink
          className="inline-flex items-center flex-col text-blue-400"
          href="https://twitter.com/paultakuma"
          tooltipText="View on Twitter"
        >
          <Twitter className="w-6 h-6 stroke-[1.5px]" />
          <span className="text-xs sr-only">Twitter</span>
        </IconLink>

        <IconLink
          className="inline-flex items-center flex-col text-blue-400"
          href="mailto:paul.newsam@gmail.com"
          tooltipText="Send Email"
        >
          <Mail className="w-6 h-6 stroke-[1.5px]" />
          <span className="text-xs sr-only">Email</span>
        </IconLink>
      </div>
    </footer>
  </TooltipProvider>
);
