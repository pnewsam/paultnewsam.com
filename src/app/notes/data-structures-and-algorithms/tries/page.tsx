import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";
import { firstHalf } from "@/utils/array";
import { tries } from "@/constants/problems";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Tries" tags={["Data Structures", "Algorithms"]} />
        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">Prefix trees</em>;&nbsp;
          <em className="not-italic font-medium">
            character-by-character search
          </em>
        </Callout>

        <Summary title="Problems to Solve" problems={firstHalf(tries)} />
      </section>
    </Container>
  );
}
