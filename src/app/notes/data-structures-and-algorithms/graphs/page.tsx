import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";
import { firstHalf } from "@/utils/array";
import { graphs } from "@/constants/problems";
import { Bold } from "@/components/typography/Bold";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Graphs" tags={["Data Structures", "Algorithms"]} />

        <Callout title="Key Concepts" className="mb-8">
          <Bold>BFS</Bold>;&nbsp;
          <Bold>DFS</Bold>;&nbsp;
          <Bold>adjacency lists</Bold>;&nbsp;
          <Bold>detecting cycles</Bold>
        </Callout>

        <Summary title="Problems to Solve" problems={firstHalf(graphs)} />
      </section>
    </Container>
  );
}
