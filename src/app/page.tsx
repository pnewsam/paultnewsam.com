import { Body, ExternalLink, H1 } from "@/components/typography";
import { Bird, Twitter, Linkedin, Github, Mail, FileDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconLink } from "@/components/IconLink";

export default function Home() {
  return (
    <div>
      <H1 className="mb-8">Hi, I&apos;m Paul.</H1>
      <Body className="mb-8">
        I&apos;m a software developer. I used to work at{" "}
        <ExternalLink href="https://www.iterable.com/">Iterable</ExternalLink>{" "}
        and at{" "}
        <ExternalLink href="https://www.accenture.com/">Accenture</ExternalLink>{" "}
        before that. I&apos;ve been working in software for about 6 years now.
        Before that, I worked on and off as a field biologist, doing bird
        surveys for organizations like&nbsp;
        <ExternalLink href="https://www.usgs.gov/">
          U.S. Geological Survey
        </ExternalLink>
        ,{" "}
        <ExternalLink href="https://www.pointblue.org/">
          Point Blue
        </ExternalLink>
        , and{" "}
        <ExternalLink href="https://www.birdconservancy.org/">
          Bird Conservancy of the Rockies
        </ExternalLink>
        . I also worked as a barista, a ticket-taker, and had a couple other odd
        jobs.
      </Body>
      <Body className="mb-8">
        Outside of work, besides tinkering on projects, I love to run, hike,
        read, and bird. I&apos;ve lived in a few different cities, but as of
        2020, I&apos;m back in my home town of San Diego, CA.
      </Body>
      <Body className="mb-8">
        Feel free to send me an email or connect with me using the links.
        I&apos;d love to hear from you.
      </Body>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <IconLink
          href={"https://github.com/pnewsam"}
          text="Github"
          Icon={Github}
        />
        <IconLink
          href="https://linkedin.com/in/paul-newsam"
          text="LinkedIn"
          Icon={Linkedin}
        />
        <IconLink
          href="https://twitter.com/paultakuma"
          text="Twitter"
          Icon={Twitter}
        />
        <IconLink
          href="mailto:paul.newsam@gmail.com"
          text="Email"
          Icon={Mail}
        />
        <IconLink
          href="https://ebird.org/profile/NzUyMzMz/US"
          text="eBird"
          Icon={Bird}
        />
        <ExternalLink
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "border-blue-400 hover:text-blue-400 hover:bg-blue-100"
          )}
          href="https://storage.paultnewsam.cc/Paul-Newsam_Resume-July-2024.pdf"
          download="Paul-Newsam_Resume-July-2024.pdf"
        >
          <span>Download resume</span>
          <FileDown className="w-4 h-4" />
        </ExternalLink>
      </div>
    </div>
  );
}
