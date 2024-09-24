import { Github, Linkedin, Twitter, Globe, File } from "lucide-react";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto px-8 md:px-8 py-20 md:py-40">
      <div className="pb-12">
        <h1 className="font-medium tracking-tight text-3xl md:text-4xl mb-4 md:mb-8">
          Hey, I&apos;m Paul.
        </h1>
        <p className="text-lg/relaxed md:text-2xl/relaxed mb-8">
          I&apos;m a web developer currently based in San Diego, CA. Mostly I
          work with Typescript and React. I&apos;m looking for my next project.
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
            <a
              key={item.href}
              href={item.href}
              className="inline-flex font-medium text-sm items-center gap-2 text-blue-400 transition-colors hover:text-blue-500 border border-blue-400 rounded px-3 py-2 hover:bg-blue-100/75"
            >
              <item.icon className="w-5 h-5" />
              {item.text}
            </a>
          ))}
        </div>
      </div>
      <br className="my-8" />
      <div className="">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Projects</h2>

        <div className="mb-8">
          <h2 className="text-xl mb-2 font-medium tracking-tight">Overtone</h2>
          <p className="mb-4">Podcast hosting app built using NextJS.</p>
          <div className="inline-flex gap-2">
            <a
              className="inline-flex font-medium text-sm items-center gap-2 text-blue-400 transition-colors hover:text-blue-500 border border-blue-400 rounded px-2 py-1 hover:bg-blue-100/75"
              href="https://overtone.fm"
            >
              <Globe className="w-4 h-4" />
              Website
            </a>
            {/* <a
              className="inline-flex font-medium text-sm items-center gap-2 text-blue-400 transition-colors hover:text-blue-500 border border-blue-400 rounded px-2 py-1 hover:bg-blue-100/75"
              href=""
            >
              <Github className="w-4 h-4" />
              Github
            </a> */}
          </div>
        </div>

        <div className="">
          <h2 className="text-xl mb-2 font-medium tracking-tight">
            UX Advantage
          </h2>
          <p className="mb-4">Building websites for small businesses.</p>
          <div className="inline-flex gap-4">
            <a
              className="inline-flex text-sm items-center gap-1 text-blue-400 transition-colors hover:text-blue-500 border border-blue-400 rounded px-2 py-1"
              href="https://uxadvantage.com"
            >
              <Globe className="w-4 h-4" />
              Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
