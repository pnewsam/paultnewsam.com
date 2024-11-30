import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Callout from "../../_components/Callout";
import { Summary } from "../../_components/Summary";
import { firstHalf } from "@/utils/array";
import { graphs } from "@/constants/problems";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Graphs" tags={["Data Structures", "Algorithms"]} />

        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">BFS</em>;&nbsp;
          <em className="not-italic font-medium">DFS</em>;&nbsp;
          <em className="not-italic font-medium">adjacency lists</em>;&nbsp;
          <em className="not-italic font-medium">detecting cycles</em>
        </Callout>

        <Summary title="Problems to Solve" problems={firstHalf(graphs)} />
      </section>
    </Container>
  );
}
