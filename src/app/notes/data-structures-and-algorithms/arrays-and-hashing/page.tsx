import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Callout } from "../../_components/Callout";
import { Body } from "@/components/typography/Body";
import { H2 } from "@/components/typography/H2";
import { Summary } from "../../_components/Summary";
import { arraysAndHashing } from "@/constants/problems";
import { firstHalf } from "@/utils/array";
import { Mark } from "@/components/Mark";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Arrays and Hashing"
          tags={["Data Structures", "Algorithms"]}
        />
        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">Sliding window</em>;&nbsp;
          <em className="not-italic font-medium">two-pointer technique</em>
          ;&nbsp;
          <em className="not-italic font-medium">hashing for fast lookups</em>
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

        <Summary
          title="Problems to Solve"
          problems={firstHalf(arraysAndHashing)}
        />
      </section>
    </Container>
  );
}
