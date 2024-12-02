import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Bold } from "@/components/typography/Bold";
import { Category } from "@/constants/pageMetadata";
import { stacksAndQueues } from "@/constants/problems";

import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Stacks and Queues"
          tags={[Category.DataStructuresAndAlgorithms]}
        />
        <Callout title="Key Concepts" className="mb-8">
          Stack for backtracking; monotonic stack; queue for BFS
        </Callout>

        <Summary problems={stacksAndQueues} />
      </section>
    </Container>
  );
}
