import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";
import { firstHalf } from "@/utils/array";
import { stacksAndQueues } from "@/constants/problems";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Stacks and Queues"
          tags={["Data Structures", "Algorithms"]}
        />
        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">Stack for backtracking</em>
          ;&nbsp;
          <em className="not-italic font-medium">monotonic stack</em>;&nbsp;
          <em className="not-italic font-medium">queue for BFS</em>
        </Callout>

        <Summary
          title="Problems to Solve"
          problems={firstHalf(stacksAndQueues)}
        />
      </section>
    </Container>
  );
}
