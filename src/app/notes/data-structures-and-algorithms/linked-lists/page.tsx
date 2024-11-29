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
          title="Linked Lists"
          tags={["Data Structures", "Algorithms"]}
        />

        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">Pointer manipulation</em>
          ;&nbsp;
          <em className="not-italic font-medium">reversing lists</em>
        </Callout>

        <Card className="p-12">
          <H2 className="mb-8">Problems to Solve</H2>
          <ul className="list-disc list-inside text-xl/relaxed md:text-2xl/relaxed">
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/reverse-linked-list/"
              >
                206. Reverse Linked List
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/merge-two-sorted-lists/"
              >
                21. Merge Two Sorted Lists
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/linked-list-cycle/"
              >
                141. Linked List Cycle
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/reorder-list/"
              >
                143. Reorder List
              </a>
            </li>
          </ul>
        </Card>
      </section>
    </Container>
  );
}
