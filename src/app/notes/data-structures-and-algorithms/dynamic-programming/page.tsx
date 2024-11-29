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
          title="Dynamic Programming"
          tags={["Data Structures", "Algorithms"]}
        />
        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">Bottom-up vs top-down</em>
          ;&nbsp;
          <em className="not-italic font-medium">memoization</em>
        </Callout>

        <Card className="p-12">
          <H2 className="mb-8">Problems to Solve</H2>
          <ul className="list-disc list-inside text-xl/relaxed md:text-2xl/relaxed">
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/climbing-stairs/"
              >
                70. Climbing Stairs
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/house-robber/"
              >
                198. House Robber
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/coin-change/"
              >
                322. Coin Change
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/longest-common-subsequence/"
              >
                1143. Longest Common Subsequence
              </a>
            </li>
          </ul>
        </Card>
      </section>
    </Container>
  );
}
