import {
  RadioTower,
  Bird,
  Twitter,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Work } from "@/components/Work";
import { IconLink } from "@/components/IconLink";
import { Projects } from "@/components/Projects";

const Left = ({ children }: { children: ReactNode }) => (
  <div className="pt-16 pb-8 md:py-32 px-8 lg:px-16 border-b md:border-r border-stone-300 bg-stone-100">
    <div className="w-full">{children}</div>
  </div>
);

const Right = ({ children }: { children: ReactNode }) => (
  <div className="py-8 md:py-32 px-8 lg:px-16 md:h-screen md:overflow-y-scroll">
    <div className="w-full">{children}</div>
  </div>
);

export default function Home() {
  return (
    <main className="bg-stone-50">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <Left>
          <div className="inline-flex flex-wrap items-center gap-4 mb-2">
            <h1 className="text-3xl tracking-tight font-semibold text-stone-400">
              Paul T. Newsam
            </h1>
            <p className="inline-flex gap-2 text-xs border border-stone-300 rounded-lg px-2 py-1 font-medium">
              <RadioTower className="w-4 h-4 text-red-600/50" />
              <span className="text-red-600/50">Remote</span>
              <span className="text-stone-400"> - San Diego, CA</span>
            </p>
          </div>

          <h2 className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-stone-700 to-stone-900 mb-4">
            Frontend Developer
          </h2>
          <div className="mb-4">
            <p className="text-stone-500 leading-relaxed mb-3">
              Frontend developer with a background in biology. Inspired by
              ambitious mission statements, and passionate about building great
              user experiences.
            </p>

            <p className="text-stone-500 leading-relaxed mb-3">
              <b>Bullish on</b>:&nbsp;
              <a
                className="underline underline-offset-2"
                href="https://tailwindcss.com/"
              >
                Tailwind
              </a>
              ,&nbsp;
              <a
                className="underline underline-offset-2"
                href="https://ui.shadcn.com/"
              >
                shadcn/ui
              </a>
              ,&nbsp;Chinese cuisine,&nbsp;
              <a
                className="underline underline-offset-2"
                href="https://thenetworkstate.com/"
              >
                Network States
              </a>
              , Podcasts, AI Copilots, Grayscale color schemes, Yves
              Tumor&apos;s legacy
            </p>
            <p className="text-stone-500 leading-relaxed mb-2">
              <b>Bearish on</b>: Quantitative easing
            </p>
          </div>

          <div className="flex gap-4">
            <TooltipProvider>
              <IconLink
                href="https://github.com/pnewsam"
                tooltipText="View on Github"
              >
                <Github className="w-6 h-6 stroke-[1.5px]" />
                <span className="text-xs sr-only">GitHub</span>
              </IconLink>
              <IconLink
                className="inline-flex items-center flex-col"
                tooltipText="View on LinkedIn"
                href="https://linkedin.com/in/paul-newsam"
              >
                <Linkedin className="w-6 h-6 stroke-[1.5px]" />
                <span className="text-xs sr-only">LinkedIn</span>
              </IconLink>
              <IconLink
                className="inline-flex items-center flex-col"
                href="https://twitter.com/paultakuma"
                tooltipText="View on Twitter"
              >
                <Twitter className="w-6 h-6 stroke-[1.5px]" />
                <span className="text-xs sr-only">Twitter</span>
              </IconLink>
              <IconLink
                className="inline-flex items-center flex-col"
                href="mailto:paul.newsam@gmail.com"
                tooltipText="Send Email"
              >
                <Mail className="w-6 h-6 stroke-[1.5px]" />
                <span className="text-xs sr-only">Email</span>
              </IconLink>
              <IconLink
                className="inline-flex items-center flex-col"
                href="https://ebird.org/profile/NzUyMzMz/US"
                tooltipText="View eBird Profile"
              >
                <Bird className="w-6 h-6 stroke-[1.5px]" />
                <span className="text-xs sr-only">eBird</span>
              </IconLink>
            </TooltipProvider>
          </div>
        </Left>
        <Right>
          {/* <p className="text-stone-500 leading-relaxed mb-4">
            It started with a few lines of Ruby, and a few years down the road.
          </p> */}
          {/* <div className="mb-8">
            <p className="text-stone-500 leading-relaxed mb-4">
              I came to software pretty late. I was 29 when I first starting
              learning to code. I spent much of my twenties working as a field
              biologist, doing bird surveys in different parts of the U.S.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              There are days when I miss working outdoors, but working in tech
              has been a gift. Technology is eating the world (to borrow a
              phrase), and I know that continuing to define our relationship
              with technology will be very important. As a frontend developer, I
              get to work at the interface intermediating between humans and
              computers, and that has been a thrill.
            </p>
          </div> */}
          <Work className="mb-8" />
          <Projects />
        </Right>
      </div>
    </main>
  );
}
