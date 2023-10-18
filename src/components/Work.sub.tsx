import { CircleDot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Job = ({
  title,
  company,
  description,
  timespan,
  className,
  companyHref,
  skills,
}: {
  title: string;
  company: string;
  description: string;
  timespan?: string;
  className?: string;
  companyHref?: string;
  skills?: string[];
}) => (
  <div
    className={cn(
      "grid grid-cols-[50px_1fr] hover:bg-stone-100 border border-transparent hover:border-stone-200/75 rounded-sm transition group py-4",
      className
    )}
  >
    <div className="flex flex-col items-center">
      <CircleDot className="w-4 h-4 translate-y-[5px] text-stone-600 group-hover:text-red-400 transition" />
      <div className="h-full border translate-y-[5px]" />
    </div>
    <div className="pr-4">
      <div className="flex items-center gap-1 justify-between">
        <h4 className="text-stone-700 text-lg font-semibold tracking-tight">
          {title}
        </h4>
        <span className="text-sm font-semibold text-red-300">{timespan}</span>
      </div>
      <a href={companyHref}>
        <h5 className="inline-block text-stone-700 text-lg font-semibold tracking-tight mb-2 group-hover:text-red-400/75 transition">
          {company}
        </h5>
      </a>
      <p className="text-base leading-relaxed text-stone-500 mb-3">
        {description}
      </p>
      <div className="inline-flex flex-wrap gap-1">
        {skills?.map((skill) => (
          <Badge key="skill" variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  </div>
);
