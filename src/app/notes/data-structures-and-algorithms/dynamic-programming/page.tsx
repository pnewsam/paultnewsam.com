import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Callout from "../../_components/Callout";
import { Summary } from "../../_components/Summary";
import { firstHalf } from "@/utils/array";
import { dynamicProgramming } from "@/constants/problems";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Dynamic Programming"
          tags={["Data Structures", "Algorithms"]}
        />
        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">Bottom-up vs top-down</em>
          ;&nbsp;
          <em className="not-italic font-medium">memoization</em>
        </Callout>

        <Summary
          title="Problems to Solve"
          problems={firstHalf(dynamicProgramming)}
        />
      </section>
    </Container>
  );
}
