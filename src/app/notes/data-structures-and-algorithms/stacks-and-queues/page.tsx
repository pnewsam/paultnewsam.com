import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Callout from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

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

        <Summary
          title="Problems to Solve"
          problems={[
            {
              title: "20. Valid Parentheses",
              url: "https://leetcode.com/problems/valid-parentheses/",
            },
            {
              title: "155. Min Stack",
              url: "https://leetcode.com/problems/min-stack/",
            },
            {
              title: "739. Daily Temperatures",
              url: "https://leetcode.com/problems/daily-temperatures/",
            },
            {
              title: "232. Implement Queue using Stacks",
              url: "https://leetcode.com/problems/implement-queue-using-stacks/",
            },
          ]}
        />
      </section>
    </Container>
  );
}
