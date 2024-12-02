import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Category } from "@/constants/pageMetadata";
import { greedyAlgorithms } from "@/constants/problems";

import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Greedy Algorithms"
          tags={[Category.DataStructuresAndAlgorithms]}
        />

        <Callout title="Key Concepts" className="mb-8">
          Local optimum; global optimum
        </Callout>

        <Summary problems={greedyAlgorithms} />
      </section>
    </Container>
  );
}
