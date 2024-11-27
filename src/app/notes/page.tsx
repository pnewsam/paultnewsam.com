import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/components/LinkCard";

export default function NotesPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Notes"
          tags={[]}
          description="I collect notes here that I find interesting or useful."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <LinkCard
            href="/notes/whiteboard"
            tags={["HTML", "Typescript"]}
            title="Whiteboard"
            description="A very basic whiteboard with HTML Canvas."
          />
          <LinkCard
            href="/notes/infinite-scroll"
            tags={["Typescript"]}
            title="Infinite Scroll"
            description="A simple infinite scroll implementation."
          />
          <LinkCard
            href="/notes/min-heap"
            tags={["Data Structures", "Typescript"]}
            title="Min Heap"
            description="A min heap implementation in Typescript."
          />
          <LinkCard
            href="/notes/binary-tree"
            tags={["Data Structures", "Typescript"]}
            title="Binary Tree"
            description="A basic binary tree implementation in Typescript."
          />
          <LinkCard
            href="/notes/latency-numbers"
            tags={["Performance"]}
            title="Latency Numbers"
            description="A table of latency numbers for various operations."
          />
        </div>
      </section>
    </Container>
  );
}
