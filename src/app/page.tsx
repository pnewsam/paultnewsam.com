import { Bird, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Left } from "@/components/Left";
import { Right } from "@/components/Right";
import { IconLink } from "@/components/IconLink";

export default function Home() {
  return (
    <>
      <Left>
        <h1 className="text-2xl tracking-tighter text-stone-500">
          Paul T. Newsam
        </h1>
        <h2 className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-stone-700 to-stone-900 mb-4">
          Frontend Developer
        </h2>
        <div className="flex gap-1">
          <TooltipProvider>
            <IconLink
              href="https://github.com/pnewsam"
              tooltipText="View on Github"
            >
              <Github className="w-4 h-4" />
              <span className="text-xs sr-only">GitHub</span>
            </IconLink>
            <IconLink
              className="inline-flex items-center flex-col"
              tooltipText="View on LinkedIn"
              href="https://linkedin.com/in/paul-newsam"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-xs sr-only">LinkedIn</span>
            </IconLink>
            <IconLink
              className="inline-flex items-center flex-col"
              href="https://twitter.com/paultakuma"
              tooltipText="View on Twitter"
            >
              <Twitter className="w-4 h-4" />
              <span className="text-xs sr-only">Twitter</span>
            </IconLink>
            <IconLink
              className="inline-flex items-center flex-col"
              href="mailto:paul.newsam@gmail.com"
              tooltipText="Send Email"
            >
              <Mail className="w-4 h-4" />
              <span className="text-xs sr-only">Email</span>
            </IconLink>
            <IconLink
              className="inline-flex items-center flex-col"
              href="https://ebird.org/profile/NzUyMzMz/US"
              tooltipText="View eBird Profile"
            >
              <Bird className="w-4 h-4" />
              <span className="text-xs sr-only">eBird</span>
            </IconLink>
          </TooltipProvider>
        </div>
      </Left>
      <Right>
        <p className="text-stone-700 text-lg tracking-tight leading-relaxed mb-4">
          I&apos;ve always been a curious person. Sometimes that&apos;s gotten
          me into trouble, but it&apos;s also led me to some interesting places.
        </p>
        <p className="text-stone-700 text-lg tracking-tight leading-relaxed mb-4">
          I&apos;ve worked as a field biologist, a barista, a software engineer,
          a ticket-taker, an Uber driver. I&apos;ve lived in San Francisco, San
          Diego, and Boston - and for a while when I was doing fieldwork, I
          lived out of a truck. I&apos;ve visited 23 countries and worked in 8
          different states.
        </p>
        <p className="text-stone-700 text-lg tracking-tight leading-relaxed mb-4">
          These days, I spend my hours building frontends for web apps. I think
          that definining the relationship between humans and computers is only
          going to become more important, and I&apos;m grateful that I get to
          play a small part in that.
        </p>
      </Right>
    </>
  );
}
