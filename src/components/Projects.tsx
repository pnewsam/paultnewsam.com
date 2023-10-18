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
      "border border-stone-200 rounded-sm p-4 shadow-sm shadow-stone-200/50 transition hover:shadow-md hover:shadow-stone-200/50 hover:-translate-y-[2px] hover:-translate-x-[2px] hover:border-stone-300 grid gap-4 grid-cols-[40px_1fr] items-start",
      className
    )}
  >
    <Image className="mt-[4px]" src={synesthetic} alt="Synesthetic Labs" />
    <div>
      <p className="font-semibold text-lg text-stone-700">{title}</p>
      <p className="text-stone-500">{description}</p>
    </div>
  </a>
);

export const Projects = () => (
  <div id="projects">
    <h3 className="font-bold uppercase tracking-widest text-red-300 mb-4">
      Projects
    </h3>
    <div className="relative">
      <p className="absolute text-sm inline-block text-stone-600 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-10 border p-2 bg-white">
        Launching soon! 🔨 🏗️
      </p>
      <div className="opacity-25 cursor-not-allowed pointer-events-none border select-none">
        <ProjectCard
          className="mb-4"
          href="https://www.synesthetic.xyz"
          title="Synesthetic Labs"
          description="Scratching my design itch by making designs for podcasters."
        />
      </div>
    </div>
  </div>
);
