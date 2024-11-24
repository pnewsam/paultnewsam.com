import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { H1, H2, Body } from "@/components/typography";
import Container from "@/components/Container";

export default function BlogPage() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Container>
      <section className="py-12 md:py-24">
        <H1 className="mb-6">Blog</H1>
        <Body>
          I started writing this blog in order to develop a better understanding
          of topics that interest me, and keep myself accountable to continuous
          learning. More likely than not, you&apos;ll be able to find better
          explanations of the topics I write about elsewhere.
        </Body>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post._id} className="space-y-2">
              <H2>
                <Link href={post.slug} className="hover:underline">
                  {post.title}
                </Link>
              </H2>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
