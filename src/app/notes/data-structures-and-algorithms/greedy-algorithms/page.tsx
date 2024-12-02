import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Bold } from "@/components/typography/Bold";
import { greedyAlgorithms } from "@/constants/problems";
import { firstHalf } from "@/utils/array";

import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Greedy Algorithms"
          tags={["Data Structures", "Algorithms"]}
        />

        <Callout title="Key Concepts" className="mb-8">
          Local optimum; global optimum
        </Callout>

        <Summary problems={greedyAlgorithms} />
      </section>
    </Container>
  );
}
