import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Callout from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Page() {
  return (
    <Container>
      <PageHeader
        title="Greedy Algorithms"
        tags={["Data Structures", "Algorithms"]}
      />

      <Callout title="Key Concepts" className="mb-8">
        <em className="not-italic font-medium">Local optimum</em>;&nbsp;
        <em className="not-italic font-medium">global optimum</em>
      </Callout>

      <Summary
        title="Problems to Solve"
        problems={[
          {
            title: "56. Merge Intervals",
            url: "https://leetcode.com/problems/merge-intervals/",
          },
          {
            title: "435. Non-overlapping Intervals",
            url: "https://leetcode.com/problems/non-overlapping-intervals/",
          },
          {
            title: "452. Minimum Number of Arrows to Burst Balloons",
            url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
          },
        ]}
      />
    </Container>
  );
}
