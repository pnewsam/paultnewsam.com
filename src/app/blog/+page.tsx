import { H1, H2, InternalLink, Li, Ul } from "@/components/typography/index";

export default function Blog() {
  return (
    <div>
      <H1 className="mb-4">Blog</H1>
      <H2 className="mb-4">On Working with People</H2>
      <Ul>
        <Li>
          <InternalLink href="/blog/a-more-graceful-exit">
            A More Graceful Exit
          </InternalLink>
        </Li>
      </Ul>
    </div>
  );
}
