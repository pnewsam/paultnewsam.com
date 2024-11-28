import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";

export default function Backtracking() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Backtracking" tags={["Algorithms"]} />
        <Body>
          Backtracking is an algorithmic technique that systematically explores
          possible solutions, abandoning paths that fail and returning to try
          alternatives.
        </Body>
      </section>
    </Container>
  );
}
