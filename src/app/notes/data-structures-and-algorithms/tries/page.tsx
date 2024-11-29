import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Callout from "../../_components/Callout";
import Card from "@/components/Card";
import { H2 } from "@/components/typography/H2";

export default function Page() {
  return (
    <Container>
      <PageHeader title="Tries" tags={["Data Structures", "Algorithms"]} />
      <Callout title="Key Concepts" className="mb-8">
        <em className="not-italic font-medium">Prefix trees</em>;&nbsp;
        <em className="not-italic font-medium">
          character-by-character search
        </em>
      </Callout>

      <Card className="p-12">
        <H2 className="mb-8">Problems to Solve</H2>
        <ul className="list-disc list-inside text-xl/relaxed md:text-2xl/relaxed">
          <li className="mb-4">
            <a
              className="text-cyan-500 dark:text-cyan-400 hover:underline"
              href="https://leetcode.com/problems/implement-trie-prefix-tree/"
            >
              208. Implement Trie (Prefix Tree)
            </a>
          </li>
          <li className="mb-4">
            <a
              className="text-cyan-500 dark:text-cyan-400 hover:underline"
              href="https://leetcode.com/problems/word-search-ii/"
            >
              212. Word Search II
            </a>
          </li>
        </ul>
      </Card>
    </Container>
  );
}
