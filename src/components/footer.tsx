import { Github, Linkedin, Twitter } from "lucide-react";

import { Container } from "@/components/Container";

import { ButtonLink } from "./ButtonLink";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 py-4">
      <Container>
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
            // {
            //   href: "https://storage.paultnewsam.com/Paul-Newsam_Resume-October-2024.pdf",
            //   icon: File,
            //   text: "Download resume",
            // },
          ].map((item) => (
            <ButtonLink key={item.href} href={item.href}>
              <item.icon className="w-5 h-5 stroke-[1.5px]" />
              {item.text}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </footer>
  );
}
