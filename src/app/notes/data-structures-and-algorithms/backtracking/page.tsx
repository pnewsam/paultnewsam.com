import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { Category } from "@/constants/pageMetadata";
import { backtracking } from "@/constants/problems";

import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Backtracking() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Backtracking"
          tags={[Category.DataStructuresAndAlgorithms]}
        />
        <Body>
          Backtracking is an algorithmic technique that systematically explores
          possible solutions, abandoning paths that fail and returning to try
          alternatives.
        </Body>

        <Callout title="Key Concepts" className="mb-8">
          Recursion with constraints; pruning
        </Callout>

        <Summary problems={backtracking} />
      </section>
    </Container>
  );
}
