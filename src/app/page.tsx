import { ArrowRight } from "lucide-react";
import { H1, H2, H3, Body, InternalLink } from "@/components/typography";
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
        <H1 className="mb-4">About Me</H1>
        <Body>
          I&apos;m a frontend engineer with six years of experience in
          developing web applications. My focus is on creating intuitive user
          interfaces and optimizing application performance. I bring a
          comprehensive approach to software engineering, drawing from my
          background in both frontend and full-stack development. Outside of
          work, I enjoy outdoor activities which often provide fresh
          perspectives on problem-solving in tech.
        </Body>
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
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </InternalLink>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <InternalLink
            href="/blog"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "inline-flex items-center"
            )}
          >
            View all posts <ArrowRight className="ml-2 h-4 w-4" />
          </InternalLink>
        </div>
      </section>
    </div>
  );
}
