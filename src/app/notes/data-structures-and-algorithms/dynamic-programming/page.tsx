import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";
import { firstHalf } from "@/utils/array";
import { dynamicProgramming } from "@/constants/problems";
import { Bold } from "@/components/typography/Bold";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Dynamic Programming"
          tags={["Data Structures", "Algorithms"]}
        />
        <Callout title="Key Concepts" className="mb-8">
          <Bold>Bottom-up vs top-down</Bold>
          ;&nbsp;
          <Bold>memoization</Bold>
        </Callout>

        <Summary
          title="Problems to Solve"
          problems={firstHalf(dynamicProgramming)}
        />
      </section>
    </Container>
  );
}
