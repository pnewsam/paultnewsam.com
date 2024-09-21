import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { H1, H2, Body } from "@/components/typography";

export default function BlogPage() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-16 w-full min-h-[calc(100vh-184px)]">
      <section>
        <H1 className="mb-6">Blog</H1>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post._id} className="space-y-2">
              <H2>
                <Link href={post.slug} className="hover:underline">
                  {post.title}
                </Link>
              </H2>
              <Body>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Body>
              <Body>{post.description}</Body>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
