import { Github, Linkedin, Twitter, Globe, File } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Typescript } from "@/components/Typescript";
import { React } from "@/components/React";
import { ButtonLink } from "@/components/ButtonLink";

export default function Home() {
  return (
    <section className="max-w-screen-lg mx-auto px-8 py-12 md:py-24">
      <h1 className="font-medium text-4xl md:text-5xl mb-4 md:mb-8">
        Hey, I&apos;m Paul.
      </h1>
      <p className="text-2xl/relaxed md:text-3xl/relaxed mb-8">
        I&apos;m a frontend developer currently based in San Diego, CA. Mostly I
        work with Typescript{" "}
        <Typescript className="w-8 h-8 inline -translate-y-1 mr-1" /> and React{" "}
        <React className="w-8 h-8 inline -translate-y-1 mr-1" />.
      </p>
      <p className="text-2xl/relaxed md:text-3xl/relaxed mb-16">
        Sometimes I build websites under my brand,{" "}
        <a
          className="font-medium hover:text-neutral-500 transition-colors"
          href="https://uxadvantage.com"
        >
          UX Advantage
        </a>
        . And I&apos;m always working on some project or other. Right now
        I&apos;m working on a Link in Bio tool for Podcasters called&nbsp;
        <a
          className="font-medium hover:text-neutral-500 transition-colors"
          href="https://podsleeve.com"
        >
          PodSleeve
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-3 items-center">
        {[
          {
            href: "https://github.com/pnewsam",
            icon: Github,
            text: "Github",
          },
          {
            href: "https://www.linkedin.com/in/paul-newsam/",
            icon: Linkedin,
            text: "Linkedin",
          },
          {
            href: "https://twitter.com/paultakuma",
            icon: Twitter,
            text: "Twitter",
          },
          {
            href: "https://storage.paultnewsam.cc/Paul-Newsam_Resume-July-2024.pdf",
            icon: File,
            text: "Download resume",
          },
        ].map((item) => (
          <ButtonLink key={item.href} href={item.href}>
            <item.icon className="w-5 h-5 stroke-[1.5px]" />
            {item.text}
          </ButtonLink>
        ))}
      </div>
    </section>
  );
}
