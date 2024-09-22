import { ArrowRight } from "lucide-react";
import {
  H1,
  H2,
  H3,
  Body,
  ExternalLink,
  InternalLink,
} from "@/components/typography";
import { buttonVariants } from "@/components/ui/button";
import { allPosts } from "contentlayer/generated";
import { cn } from "@/lib/utils";

export default function Home() {
  const recentPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <div className="space-y-16 min-h-screen">
      <section>
        <H1 className="mb-8">Hey, I&apos;m Paul!</H1>
        <Body className="mb-4">
          I&apos;m a web developer based in San Diego, CA. I build websites with
          my web design company&nbsp;
          <ExternalLink href="https://uxadvantage.com/">
            UX Advantage
          </ExternalLink>
          . If you&apos;re looking for help with a website, let me know!
        </Body>
        <Body className="mb-4">
          Before getting into tech, I moved around a lot. I spent a good chunk
          of time doing bird and vegetation surveys in the field as a seasonal
          biological technician. I also worked in a few coffee shops, a movie
          theater, and spent all of a week driving Uber.
        </Body>
        <Body>In my spare time I love to hike, run, cook.</Body>
      </section>

      <section>
        <H2 className="mb-4">Blog Posts</H2>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post._id} className="space-y-4">
              <H3>{post.title}</H3>
              <Body>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Body>
              <Body>{post.description}</Body>
              <InternalLink
                href={post.slug}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "inline-flex items-center"
                )}
              >
                Read this post <ArrowRight className="ml-2 h-4 w-4" />
              </InternalLink>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
