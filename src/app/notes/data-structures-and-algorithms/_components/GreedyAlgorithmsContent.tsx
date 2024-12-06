import { Body } from "@/components/typography/Body";

export function GreedyAlgorithmsContent() {
  return (
    <>
      <Body>
        Greedy algorithms are a class of algorithms that make locally optimal
        choices at each step in the hope of finding a global optimum.
      </Body>

      <Body>
        It&apos;s usually difficult to prove that a greedy algorithm is actually
        optimal. But in cases where it is optimal, greedy algorithms are
        generally very efficient. It&apos;s valuable to be able to recognize
        those cases.
      </Body>
    </>
  );
}
