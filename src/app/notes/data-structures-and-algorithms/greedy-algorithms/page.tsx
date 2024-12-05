import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { Category } from "@/constants/pageMetadata";
import { greedyAlgorithms } from "@/constants/problems";

import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Greedy Algorithms"
          tags={[Category.DataStructuresAndAlgorithms]}
        />

        <Callout title="Key Concepts" className="mb-8">
          Local optimum; global optimum
        </Callout>

        <Body>
          Greedy algorithms are a class of algorithms that make locally optimal
          choices at each step in the hope of finding a global optimum.
        </Body>

        <Body>
          It&apos;s usually difficult to prove that a greedy algorithm is
          actually optimal. But in cases where it is optimal, greedy algorithms
          are generally very efficient. It&apos;s valuable to be able to
          recognize those cases.
        </Body>

        <Summary problems={greedyAlgorithms} />
      </section>
    </Container>
  );
}
