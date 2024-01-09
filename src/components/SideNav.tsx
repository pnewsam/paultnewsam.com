import { Bird, Twitter, Linkedin, Github, Mail, FileDown } from "lucide-react";
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
              <a
                className="text-blue-400 transition font-medium hover:text-blue-500 inline-flex items-center gap-2"
                href="https://github.com/pnewsam"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
            </li>
            <li>
              <a
                className="text-blue-400 transition font-medium hover:text-blue-500 inline-flex items-center gap-2"
                href="https://linkedin.com/in/paul-newsam"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                className="text-blue-400 transition font-medium hover:text-blue-500 inline-flex items-center gap-2"
                href="https://twitter.com/paultakuma"
              >
                <Twitter className="w-4 h-4" />
                <span className="text-sm">Twitter</span>
              </a>
            </li>
            <li>
              <a
                className="text-blue-400 transition font-medium hover:text-blue-500 inline-flex items-center gap-2"
                href="mailto:paul.newsam@gmail.com"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </a>
            </li>
            <li>
              <a
                className="text-blue-400 transition font-medium hover:text-blue-500 inline-flex items-center gap-2"
                href="https://ebird.org/profile/NzUyMzMz/US"
              >
                <Bird className="w-4 h-4" />
                <span className="text-sm">eBird</span>
              </a>
            </li>
          </ul>
        </div>
        {/* <ul className="mb-4">
          <li className="text-blue-400 transition hover:text-blue-500">
            <Link href="/blog">All blog posts</Link>
          </li>
          <li className="text-blue-400 transition hover:text-blue-500">
            <Link href="/blog/post-1">Blog post</Link>
          </li>
          <li className="text-blue-400 transition hover:text-blue-500">
            <Link href="/blog/post-2">Blog post</Link>
          </li>
        </ul> */}
        <ul>
          <li className="text-blue-400 text-sm transition hover:text-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li className="text-blue-400 text-sm transition hover:text-blue-500">
            <Link href="/about">About me</Link>
          </li>
          <li>
            <a
              className="inline-flex text-blue-400 text-sm transition hover:text-blue-500 items-center gap-2"
              href="Paul_Newsam-Resume-January_2024.pdf"
              download="Paul_Newsam-Resume-January_2024.pdf"
            >
              <span>Download resume</span>
              <FileDown className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
