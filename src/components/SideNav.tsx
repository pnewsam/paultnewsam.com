import { Bird, Twitter, Linkedin, Github, Mail, FileDown } from "lucide-react";
import { ExternalLink, InternalLink } from "@/components/typography";
import Link from "next/link";

export const SideNav = () => {
  return (
    <div className="py-8 md:py-16 px-8 border-b md:border-r border-stone-200">
      <div className="w-full">
        <h1 className="text-2xl tracking-tighter text-stone-800 font-semibold mb-2">
          <Link className="transition hover:text-stone-600" href="/">
            Paul T. Newsam
          </Link>
        </h1>
        <div className="flex gap-1 mb-4">
          <ul>
            <li>
              <ExternalLink href="https://github.com/pnewsam">
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://linkedin.com/in/paul-newsam">
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://twitter.com/paultakuma">
                <Twitter className="w-4 h-4" />
                <span className="text-sm">Twitter</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="mailto:paul.newsam@gmail.com">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://ebird.org/profile/NzUyMzMz/US">
                <Bird className="w-4 h-4" />
                <span className="text-sm">eBird</span>
              </ExternalLink>
            </li>
          </ul>
        </div>
        <ul className="mb-4">
          <li>
            <InternalLink className="text-sm" href="/">
              Home
            </InternalLink>
          </li>
          <li>
            <InternalLink className="text-sm" href="/about">
              About me
            </InternalLink>
          </li>
          <li>
            <InternalLink className="text-sm" href="/bookshelf">
              Bookshelf
            </InternalLink>
          </li>
        </ul>
        <ul className="mb-4">
          <li>
            <ExternalLink
              className="text-sm"
              href="Paul_Newsam-Resume-January_2024.pdf"
              download="Paul_Newsam-Resume-January_2024.pdf"
            >
              <span>Download resume</span>
              <FileDown className="w-4 h-4" />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
