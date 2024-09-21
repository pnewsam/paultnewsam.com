import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { H1, Subtitle, Body } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { ExternalLink, InternalLink } from "@/components/typography";
import { Github, Linkedin, Mail, Twitter, FileText } from "lucide-react";

export const SideNav = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <Avatar className="w-32 h-32 mb-4">
          <AvatarImage src="/avatar.png" alt="Paul Newsam" />
          <AvatarFallback>PN</AvatarFallback>
        </Avatar>
        <H1 className="mb-2">Paul T. Newsam</H1>
        <Body className="mb-6">
          Focused on creating efficient and user-centric web applications.
        </Body>
      </div>
      <div className="flex justify-center items-center space-x-4 mb-6">
        <ExternalLink href="https://github.com/pnewsam">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </ExternalLink>
        <ExternalLink href="https://linkedin.com/in/paul-newsam">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </ExternalLink>
        <ExternalLink href="mailto:paul.newsam@gmail.com">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </ExternalLink>
        <ExternalLink href="https://twitter.com/paultakuma">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </ExternalLink>
      </div>
      <div className="mb-4 flex justify-center">
        <Button variant="outline" asChild>
          <ExternalLink
            href="https://storage.paultnewsam.cc/Paul-Newsam_Resume-July-2024.pdf"
            download
          >
            <FileText className="h-5 w-5 mr-2" />
            Download resume
          </ExternalLink>
        </Button>
      </div>
      <hr className="my-6 block" />
      <div className="flex flex-col space-y-4 mt-4 justify-center items-center">
        <InternalLink href="/">Home</InternalLink>
        <InternalLink href="/blog">Blog</InternalLink>
      </div>
    </div>
  );
};
