import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Callout from "../../_components/Callout";
import Card from "@/components/Card";
import { H2 } from "@/components/typography/H2";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Stacks and Queues"
          tags={["Data Structures", "Algorithms"]}
        />
        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">Stack for backtracking</em>
          ;&nbsp;
          <em className="not-italic font-medium">monotonic stack</em>;&nbsp;
          <em className="not-italic font-medium">queue for BFS</em>
        </Callout>

        <Card className="p-12">
          <H2 className="mb-8">Problems to Solve</H2>
          <ul className="list-disc list-inside text-xl/relaxed md:text-2xl/relaxed">
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/valid-parentheses/"
              >
                20. Valid Parentheses
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/min-stack/"
              >
                155. Min Stack
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/daily-temperatures/"
              >
                739. Daily Temperatures
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/implement-queue-using-stacks/"
              >
                232. Implement Queue using Stacks
              </a>
            </li>
          </ul>
        </Card>
      </section>
    </Container>
  );
}
