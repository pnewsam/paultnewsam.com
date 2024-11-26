import Card from "@/components/Card";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export default function InfiniteScrollPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Infinite Scroll"
          tags={["Javascript"]}
          description="Infinite scroll is a common UI pattern used to load content as the user scrolls. It's often used on blogs, news sites, and social media platforms."
        />
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
