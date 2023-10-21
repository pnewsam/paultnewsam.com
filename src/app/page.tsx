import {
  RadioTower,
  Bird,
  Twitter,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Work } from "@/components/Work";
import { Left } from "@/components/Left";
import { Right } from "@/components/Right";
import { IconLink } from "@/components/IconLink";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Left>
        <div className="inline-flex flex-wrap items-center gap-4 mb-2">
          <h1 className="text-3xl tracking-tight font-semibold text-stone-400">
            Paul T. Newsam
          </h1>
          <p className="inline-flex gap-2 text-xs border border-stone-300 rounded-lg px-2 py-1 font-medium">
            <RadioTower className="w-4 h-4 text-red-500/75" />
            <span className="text-red-500/75">Remote</span>
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
            , Podcasts, AI Copilots, Grayscale color schemes, Yves Tumor&apos;s
            legacy
          </p>
          <p className="text-stone-500 leading-relaxed mb-2">
            <b>Bearish on</b>: Quantitative easing, Superhero movies
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
        <p className="text-stone-500 leading-relaxed mb-4">
          I&apos;ve always been a curious person. Sometimes that&apos;s gotten
          me into trouble, but it&apos;s also led me to some interesting places.
        </p>
        <p className="text-stone-500 leading-relaxed mb-4">
          I&apos;ve worked as a field biologist, a barista, a software engineer,
          a ticket-taker, an Uber driver. I&apos;ve lived in San Francisco, San
          Diego, and Boston - and for a while when I was doing fieldwork, I
          lived out of a truck. I&apos;ve visited 23 countries and worked in 9
          different states.
        </p>
        <p className="text-stone-500 leading-relaxed mb-4">
          These days, I spend my hours building frontends for web apps. I think
          that definining the relationship between humans and computers is only
          going to become more important, and I&apos;m grateful that I get to
          play a small part in that.
        </p>
        <Work className="mb-8" />
        <Projects />
      </Right>
    </>
  );
}
