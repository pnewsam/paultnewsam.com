import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Summary } from "../../_components/Summary";
import { Callout } from "../../_components/Callout";
import { firstHalf } from "@/utils/array";
import { linkedLists } from "@/constants/problems";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Linked Lists"
          tags={["Data Structures", "Algorithms"]}
        />

        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">Pointer manipulation</em>
          ;&nbsp;
          <em className="not-italic font-medium">reversing lists</em>
        </Callout>

        <Summary title="Problems to Solve" problems={firstHalf(linkedLists)} />
      </section>
    </Container>
  );
}
