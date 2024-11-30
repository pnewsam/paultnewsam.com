import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { Summary } from "../../_components/Summary";
import Callout from "../../_components/Callout";

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

        <Summary
          title="Problems to Solve"
          problems={[
            {
              title: "206. Reverse Linked List",
              url: "https://leetcode.com/problems/reverse-linked-list/",
            },
            {
              title: "21. Merge Two Sorted Lists",
              url: "https://leetcode.com/problems/merge-two-sorted-lists/",
            },
            {
              title: "141. Linked List Cycle",
              url: "https://leetcode.com/problems/linked-list-cycle/",
            },
            {
              title: "143. Reorder List",
              url: "https://leetcode.com/problems/reorder-list/",
            },
          ]}
        />
      </section>
    </Container>
  );
}
