import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Callout from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Binary Search"
          tags={["Data Structures", "Algorithms"]}
        />

        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">Divide and conquer</em>;&nbsp;
          <em className="not-italic font-medium">
            variations of binary search
          </em>
        </Callout>

        <Summary
          title="Problems to Solve"
          problems={[
            {
              title: "704. Binary Search (basic)",
              url: "https://leetcode.com/problems/binary-search/",
            },
            {
              title: "74. Search a 2D Matrix",
              url: "https://leetcode.com/problems/search-a-2d-matrix/",
            },
            {
              title: "153. Find Minimum in Rotated Sorted Array",
              url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
            },
            {
              title: "4. Median of Two Sorted Arrays",
              url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
            },
          ]}
        />
      </section>
    </Container>
  );
}
