import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";
import { firstHalf } from "@/utils/array";
import { backtracking } from "@/constants/problems";

export default function Backtracking() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Backtracking" tags={["Algorithms"]} />
        <Body>
          Backtracking is an algorithmic technique that systematically explores
          possible solutions, abandoning paths that fail and returning to try
          alternatives.
        </Body>

        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">Recursion with constraints</em>
          ;&nbsp;
          <em className="not-italic font-medium">pruning</em>
        </Callout>

        <Summary title="Problems to Solve" problems={firstHalf(backtracking)} />
      </section>
    </Container>
  );
}
