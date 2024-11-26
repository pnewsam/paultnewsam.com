import { Github, Linkedin, Twitter, Globe, File } from "lucide-react";
import { Typescript } from "@/components/Typescript";
import { React } from "@/components/React";
import { ButtonLink } from "@/components/ButtonLink";
import Container from "@/components/Container";
import { H1, Body } from "@/components/typography";

export default function Home() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <H1 className="mb-8">Hey, I&apos;m Paul.</H1>
        <Body>
          I&apos;m a frontend developer currently based in San Diego, CA. Mostly
          I work with Typescript{" "}
          <Typescript className="w-8 h-8 inline -translate-y-1 mr-1" /> and
          React <React className="w-8 h-8 inline -translate-y-1 mr-1" />.
          Sometimes I build websites with my business{" "}
          <a
            className="text-cyan-400 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
            href="https://uxadvantage.com"
          >
            UX Advantage
          </a>
          .
        </Body>
        <Body>
          In my spare time I like to read, go hiking, and spend time with my
          family and two cats.
        </Body>
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
              href: "https://storage.paultnewsam.com/Paul-Newsam_Resume-October-2024.pdf",
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
    </Container>
  );
}
