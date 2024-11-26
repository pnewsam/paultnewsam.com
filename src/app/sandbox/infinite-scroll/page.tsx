import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Container from "@/components/Container";
import { H1, Body } from "@/components/typography";

export default function InfiniteScrollPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <H1>Infinite Scroll</H1>
        <div className="flex items-center gap-2 mb-4">
          <Badge>UI Pattern</Badge>
          <Badge>Vanilla Javascript</Badge>
        </div>
        <Body>
          Infinite scroll is a common UI pattern used to load content as the
          user scrolls. It&apos;s often used on blogs, news sites, and social
          media platforms.
        </Body>
        <Card className="h-[600px] overflow-y-auto divide-y divide-neutral-200 dark:divide-neutral-700">
          {Array.from({ length: 40 }).map((_, index) => (
            <div
              key={index}
              className="h-12 bg-neutral-100 dark:bg-neutral-800 p-4"
            >
              {index}
            </div>
          ))}
        </Card>
      </section>
    </Container>
  );
}
