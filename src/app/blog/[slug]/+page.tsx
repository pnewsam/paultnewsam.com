import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { H1, Body } from "@/components/typography";
import "@/app/mdx.css";
import { cn } from "@/lib/utils";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  const Content = getMDXComponent(post.body.code);

  return (
    <article className="py-12 md:py-24">
      <Container>
        <header className="border-b-2 border-neutral-200 pb-6 dark:border-neutral-500 mb-12">
          <H1>{post.title}</H1>
          <Body>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Body>
          <Body className="text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-600 p-4 rounded-lg italic border border-neutral-200 dark:border-neutral-500">
            {post.description}
          </Body>
        </header>
        <div
          className={cn(
            "prose-2xl dark:prose-invert prose-p:text-neutral-600 dark:prose-p:text-neutral-300",
            "prose-pre:border prose-pre:bg-neutral-100 dark:prose-pre:bg-neutral-700 prose-pre:text-lg"
          )}
        >
          <Content />
        </div>
      </Container>
    </article>
  );
};

export default PostLayout;
