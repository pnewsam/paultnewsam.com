import { ArrowUpRightSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import synesthetic from "../../public/synesthetic.png";

export const ProjectCard = ({
  title,
  description,
  href,
  className,
}: {
  title: string;
  description: string;
  href: string;
  className?: string;
}) => (
  <a
    href={href}
    className={cn(
      "border border-stone-200 rounded-sm py-4 px-6 shadow-sm shadow-stone-200/50 transition hover:shadow-md hover:shadow-stone-200/50 hover:border-stone-300 grid gap-6 grid-cols-[48px_1fr_24px] items-center",
      className
    )}
  >
    <Image className="mt-[4px]" src={synesthetic} alt="Synesthetic Labs" />
    <div>
      <p className="font-semibold tracking-tight text-base text-stone-700 mb-1">
        {title}
      </p>
      <p className="text-stone-600 text-sm leading-snug tracking-tight">
        {description}
      </p>
    </div>
    <ArrowUpRightSquare className="w-6 h-6 text-stone-700" />
  </a>
);

export const Projects = () => (
  <div id="projects">
    <h3 className="font-bold uppercase tracking-widest text-blue-500 mb-4">
      Projects
    </h3>
    <div className="relative">
      <ProjectCard
        className="mb-4"
        href="https://www.synesthetic.io"
        title="Synesthetic Labs"
        description="Scratching my design itch by building an agency to make designs for podcasters."
      />
    </div>
  </div>
);
