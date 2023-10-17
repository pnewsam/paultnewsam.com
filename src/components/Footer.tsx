import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="inline-flex items-center fixed bottom-16 z-50 bg-white left-[50%] -translate-x-[50%] shadow-lg rounded-[48px] border border-stone-300 px-6 py-2">
    <div className="inline-flex gap-8">
      <a
        className="inline-flex items-center flex-col text-blue-400"
        href="https://github.com/pnewsam"
      >
        <Github className="w-6 h-6" />
        <span className="text-xs sr-only">GitHub</span>
      </a>

      <a
        className="inline-flex items-center flex-col text-blue-400"
        href="https://linkedin.com/in/paul-newsam"
      >
        <Linkedin className="w-6 h-6" />
        <span className="text-xs sr-only">LinkedIn</span>
      </a>

      <a
        className="inline-flex items-center flex-col text-blue-400"
        href="https://twitter.com/paultakuma"
      >
        <Twitter className="w-6 h-6" />
        <span className="text-xs sr-only">Twitter</span>
      </a>

      <a
        className="inline-flex items-center flex-col text-blue-400"
        href="mailto:paul.newsam@gmail.com"
      >
        <Mail className="w-6 h-6" />
        <span className="text-xs sr-only">Email</span>
      </a>
    </div>
  </footer>
);
