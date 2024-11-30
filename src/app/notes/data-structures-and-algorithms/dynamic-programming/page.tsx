import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Callout from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

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

        <Summary
          title="Problems to Solve"
          problems={[
            {
              title: "70. Climbing Stairs",
              url: "https://leetcode.com/problems/climbing-stairs/",
            },
            {
              title: "198. House Robber",
              url: "https://leetcode.com/problems/house-robber/",
            },
            {
              title: "322. Coin Change",
              url: "https://leetcode.com/problems/coin-change/",
            },
            {
              title: "1143. Longest Common Subsequence",
              url: "https://leetcode.com/problems/longest-common-subsequence/",
            },
          ]}
        />
      </section>
    </Container>
  );
}
