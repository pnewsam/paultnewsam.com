import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Callout from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

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

        <Summary
          title="Problems to Solve"
          problems={[
            {
              title: "208. Implement Trie (Prefix Tree)",
              url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
            },
            {
              title: "212. Word Search II",
              url: "https://leetcode.com/problems/word-search-ii/",
            },
          ]}
        />
      </section>
    </Container>
  );
}
