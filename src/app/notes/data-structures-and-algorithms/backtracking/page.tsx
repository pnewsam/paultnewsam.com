import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import Callout from "../../_components/Callout";
import Card from "@/components/Card";
import { H2 } from "@/components/typography/H2";

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

        <Card className="p-12">
          <H2 className="mb-8">Problems to Solve</H2>
          <ul className="list-disc list-inside text-xl/relaxed md:text-2xl/relaxed">
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/subsets/"
              >
                78. Subsets
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/permutations/"
              >
                46. Permutations
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/combination-sum/"
              >
                39. Combination Sum
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/sudoku-solver/"
              >
                37. Sudoku Solver
              </a>
            </li>
          </ul>
        </Card>
      </section>
    </Container>
  );
}
