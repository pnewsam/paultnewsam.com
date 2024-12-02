import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Category } from "@/constants/pageMetadata";
import { graphs } from "@/constants/problems";

import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Graphs"
          tags={[Category.DataStructuresAndAlgorithms]}
        />

        <Callout title="Key Concepts" className="mb-8">
          BFS; DFS; adjacency lists; detecting cycles
        </Callout>

        <Summary problems={graphs} />
      </section>
    </Container>
  );
}
