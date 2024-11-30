import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { LinkCard } from "@/app/notes/_components/LinkCard";
import { Body } from "@/components/typography/Body";
import { H2 } from "@/components/typography/H2";
import { DataStructuresAndAlgorithmsTable } from "./_components/DataStructuresAndAlgorithmsTable";
import { Card } from "@/components/Card";

const isDevelopment = process.env.IS_DEVELOPMENT === "true";

export default function NotesPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Notes" tags={[]} />
        <Body>
          I&apos;ve started to collect notes here that I find useful or
          interesting.
        </Body>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          <LinkCard
            href="/notes/latency-numbers"
            tags={["Performance"]}
            title="Latency Numbers"
            description="A table of latency numbers for various operations."
          />
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
        </div>

        {isDevelopment && (
          <div>
            <H2 className="mb-4">Data Structures & Algorithms</H2>
            <Body>These are my notes on data structures and algorithms.</Body>
            <Card className="mb-16">
              <DataStructuresAndAlgorithmsTable />
            </Card>
          </div>
        )}
      </section>
    </Container>
  );
}
