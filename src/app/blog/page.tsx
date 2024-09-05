import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { H1, Body } from "@/components/typography";

export default function BlogPage() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-16 pt-8 w-full min-h-[calc(100vh-184px)]">
      <section>
        <H1>Blog</H1>
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post._id}>
              <CardHeader>
                <CardTitle>
                  <Link href={post.slug} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Body>{post.description}</Body>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
