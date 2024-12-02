import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { H2 } from "@/components/typography/H2";
import { Mark } from "@/components/typography/Mark";
import { Category } from "@/constants/pageMetadata";
import { arraysAndHashing } from "@/constants/problems";

import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Arrays and Hashing"
          tags={[Category.DataStructuresAndAlgorithms]}
        />
        <Callout title="Key Concepts" className="mb-8">
          Sliding window; two-pointer technique; hashing for fast lookups
        </Callout>

        <Body>
          When it comes to data structures, arrays are about as fundamental as
          it gets. And whereas many data structures are <Mark>abstract</Mark> --
          meaning the underlying data structures can be implemented in many
          different ways across languages -- array implementations are pretty
          much the same across languages.
        </Body>

        <H2 className="mb-8">Sliding Window</H2>
        <Body>
          Sliding window is a technique used to solve problems involving
          subarrays.
        </Body>

        <H2 className="mb-8">Two-Pointer Technique</H2>
        <Body>
          The two-pointer technique is a common approach to solving problems
          involving arrays or linked lists.
        </Body>

        <Summary problems={arraysAndHashing} />
      </section>
    </Container>
  );
}
