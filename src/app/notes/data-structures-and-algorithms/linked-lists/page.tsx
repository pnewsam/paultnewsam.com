import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Category } from "@/constants/pageMetadata";
import { linkedLists } from "@/constants/problems";

import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Linked Lists"
          tags={[Category.DataStructuresAndAlgorithms]}
        />

        <Callout title="Key Concepts" className="mb-8">
          Pointer manipulation; reversing lists
        </Callout>

        <Summary problems={linkedLists} />
      </section>
    </Container>
  );
}
