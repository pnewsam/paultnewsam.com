import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Summary } from "../../_components/Summary";
import { Callout } from "../../_components/Callout";
import { firstHalf } from "@/utils/array";
import { linkedLists } from "@/constants/problems";
import { Bold } from "@/components/typography/Bold";
export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Linked Lists"
          tags={["Data Structures", "Algorithms"]}
        />

        <Callout title="Key Concepts" className="mb-8">
          <Bold>Pointer manipulation</Bold>
          ;&nbsp;
          <Bold>reversing lists</Bold>
        </Callout>

        <Summary title="Problems to Solve" problems={firstHalf(linkedLists)} />
      </section>
    </Container>
  );
}
