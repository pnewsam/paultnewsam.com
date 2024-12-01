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
            href="/notes/system-design/latency-numbers"
            tags={["Performance", "System Design"]}
            title="Latency Numbers"
            description="A table of latency numbers for various operations."
          />
          <LinkCard
            href="/notes/system-design/data-type-sizes"
            tags={["System Design"]}
            title="Data Type Sizes"
            description="A simple method for estimating the cost of a system."
          />
          <LinkCard
            href="/notes/user-interface/whiteboard"
            tags={["HTML", "Typescript"]}
            title="Whiteboard"
            description="A very basic whiteboard with HTML Canvas."
          />
          <LinkCard
            href="/notes/user-interface/infinite-scroll"
            tags={["Typescript"]}
            title="Infinite Scroll"
            description="A simple infinite scroll implementation."
          />
        </div>
        {isDevelopment && (
          <div>
            <H2 className="mb-4">System Design</H2>
            <Body>
              System design is the study of how to build scaleable and resilient
              distributed systems.
            </Body>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
              <LinkCard
                href="/notes/system-design/cap-theorem"
                tags={["System Design"]}
                title="CAP Theorem"
                description="A simple explanation of wthe CAP Theorem."
              />
            </div>
          </div>
        )}

        {isDevelopment && (
          <div>
            <H2 className="mb-4">Data Structures & Algorithms</H2>
            <Body>
              <b>Data Structures and Algorithms</b> is a deep subject. You could
              spend years learning them. It can be overwhelming sorting through
              all the learning materials out there.
            </Body>
            <Card className="mb-16">
              <DataStructuresAndAlgorithmsTable />
            </Card>
          </div>
        )}
      </section>
    </Container>
  );
}
