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
          title="Binary Search"
          tags={["Data Structures", "Algorithms"]}
        />
      </section>

      <Callout title="Key Concepts" className="mb-8">
        <em className="not-italic font-medium">Divide and conquer</em>;&nbsp;
        <em className="not-italic font-medium">variations of binary search</em>
      </Callout>

      <Card className="p-12">
        <H2 className="mb-8">Problems to Solve</H2>
        <ul className="list-disc list-inside text-xl/relaxed md:text-2xl/relaxed">
          <li className="mb-4">
            <a
              className="text-cyan-500 dark:text-cyan-400 hover:underline"
              href="https://leetcode.com/problems/binary-search/"
            >
              704. Binary Search (basic)
            </a>
          </li>
          <li className="mb-4">
            <a
              className="text-cyan-500 dark:text-cyan-400 hover:underline"
              href="https://leetcode.com/problems/search-a-2d-matrix/"
            >
              74. Search a 2D Matrix
            </a>
          </li>
          <li className="mb-4">
            <a
              className="text-cyan-500 dark:text-cyan-400 hover:underline"
              href="https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
            >
              153. Find Minimum in Rotated Sorted Array
            </a>
          </li>
          <li className="mb-4">
            <a
              className="text-cyan-500 dark:text-cyan-400 hover:underline"
              href="https://leetcode.com/problems/median-of-two-sorted-arrays/"
            >
              4. Median of Two Sorted Arrays
            </a>
          </li>
        </ul>
      </Card>
    </Container>
  );
}
