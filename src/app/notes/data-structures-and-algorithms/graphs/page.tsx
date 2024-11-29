import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Callout from "../../_components/Callout";
import Card from "@/components/Card";
import { H2 } from "@/components/typography/H2";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Graphs" tags={["Data Structures", "Algorithms"]} />

        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">BFS</em>;&nbsp;
          <em className="not-italic font-medium">DFS</em>;&nbsp;
          <em className="not-italic font-medium">adjacency lists</em>;&nbsp;
          <em className="not-italic font-medium">detecting cycles</em>
        </Callout>

        <Card className="p-12">
          <H2 className="mb-8">Problems to Solve</H2>
          <ul className="list-disc list-inside text-xl/relaxed md:text-2xl/relaxed">
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/number-of-islands/"
              >
                200. Number of Islands
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/clone-graph/"
              >
                133. Clone Graph
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/course-schedule/"
              >
                207. Course Schedule
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/word-ladder/"
              >
                127. Word Ladder
              </a>
            </li>
          </ul>
        </Card>
      </section>
    </Container>
  );
}
