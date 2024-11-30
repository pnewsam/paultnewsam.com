import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import Callout from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Backtracking() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Backtracking" tags={["Algorithms"]} />
        <Body>
          Backtracking is an algorithmic technique that systematically explores
          possible solutions, abandoning paths that fail and returning to try
          alternatives.
        </Body>

        <Callout title="Key Concepts" className="mb-8">
          <em className="not-italic font-medium">Recursion with constraints</em>
          ;&nbsp;
          <em className="not-italic font-medium">pruning</em>
        </Callout>

        <Summary
          title="Problems to Solve"
          problems={[
            {
              title: "78. Subsets",
              url: "https://leetcode.com/problems/subsets/",
            },
            {
              title: "46. Permutations",
              url: "https://leetcode.com/problems/permutations/",
            },
            {
              title: "39. Combination Sum",
              url: "https://leetcode.com/problems/combination-sum/",
            },
            {
              title: "37. Sudoku Solver",
              url: "https://leetcode.com/problems/sudoku-solver/",
            },
          ]}
        />
      </section>
    </Container>
  );
}
