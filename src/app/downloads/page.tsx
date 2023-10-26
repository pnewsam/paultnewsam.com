import { ExternalLink } from "lucide-react";
import { Left } from "@/components/Left";
import { Right } from "@/components/Right";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Downloads() {
  return (
    <>
      <Left>
        <h1 className="text-3xl tracking-tight font-semibold text-stone-400 mb-2">
          Paul T. Newsam
        </h1>
        <h2 className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-stone-700 to-stone-900 mb-4">
          Downloads
        </h2>
        <p className="text-stone-500 leading-relaxed mb-3">
          I sometimes make the work I do available for download. I&apos;ll
          update this page as I add more things. Thanks for checking it out!
        </p>
      </Left>
      <Right>
        <h2 className="text-3xl tracking-tight font-semibold text-stone-700 mb-4">
          &quot;Gitmaster&quot; Resume Template - $5
        </h2>
        <p className="text-stone-500 leading-relaxed mb-3">
          Obviously, there are tons of resume templates out there that you can
          use for free! I&apos;d recommend starting there before you buy
          anything.&nbsp;
          <a
            className="text-red-500/75"
            href="https://www.canva.com/resumes/templates/"
          >
            Canva has some amazing options
          </a>
          .
        </p>
        <p className="text-stone-500 leading-relaxed mb-3">
          But if you happen to like my resume, you&apos;re welcome to use it
          too. I&apos;ve put it up as a paid download on Gumroad for $5.
        </p>

        <a
          className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
          href="https://1740934881672.gumroad.com/l/dotjp"
          target="_blank"
        >
          View on Gumroad
          <ExternalLink className="w-5 h-5" />
        </a>
      </Right>
    </>
  );
}
