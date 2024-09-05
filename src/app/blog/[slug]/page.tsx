import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { H1, Body } from "@/components/typography";
import "@/app/mdx.css";

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
    <article className="space-y-8 pt-8">
      <header>
        <H1>{post.title}</H1>
        <Body>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Body>
      </header>
      <div className="mdx-content">
        <Content />
      </div>
    </article>
  );
};

export default PostLayout;
