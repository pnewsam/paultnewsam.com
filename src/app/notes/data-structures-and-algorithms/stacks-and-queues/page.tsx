import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Bold } from "@/components/typography/Bold";
import { stacksAndQueues } from "@/constants/problems";
import { firstHalf } from "@/utils/array";

import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Stacks and Queues"
          tags={["Data Structures", "Algorithms"]}
        />
        <Callout title="Key Concepts" className="mb-8">
          <Bold>Stack for backtracking</Bold>
          ;&nbsp;
          <Bold>monotonic stack</Bold>;&nbsp;
          <Bold>queue for BFS</Bold>
        </Callout>

        <Summary
          title="Problems to Solve"
          problems={firstHalf(stacksAndQueues)}
        />
      </section>
    </Container>
  );
}
