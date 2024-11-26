import Link from "next/link";
import { H1, H3, Body, BodySmall } from "@/components/typography";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import PageHeader from "@/components/PageHeader";

const LinkCard = ({
  href,
  title,
  description,
  tags,
}: {
  href: string;
  title: string;
  description: string;
  tags: string[];
}) => (
  <Link
    className="bg-neutral-100 dark:bg-neutral-900 shadow-md hover:shadow-lg border border-neutral-200 dark:border-neutral-800 rounded-md p-8 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition-all duration-200 flex flex-col justify-between gap-4"
    href={href}
  >
    <H3>{title}</H3>
    <div className="flex items-center gap-2">
      {tags.map((tag) => (
        <Badge size="sm" key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
    <BodySmall>{description}</BodySmall>
  </Link>
);

export default function SandboxPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Sandbox"
          tags={[]}
          description="This is where I play around with ideas. Here are some of the things I've built."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <LinkCard
            href="/sandbox/whiteboard"
            tags={["HTML", "Javascript"]}
            title="Whiteboard"
            description="A very basic whiteboard with HTML Canvas."
          />
          <LinkCard
            href="/sandbox/infinite-scroll"
            tags={["Javascript"]}
            title="Infinite Scroll"
            description="A simple infinite scroll implementation."
          />
        </div>
      </section>
    </Container>
  );
}
