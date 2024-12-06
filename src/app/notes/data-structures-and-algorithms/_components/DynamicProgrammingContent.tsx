import { CodeBlock } from "@/components/CodeBlock";
import { Body } from "@/components/typography/Body";
import { Bold } from "@/components/typography/Bold";
import { Code } from "@/components/typography/Code";
import { Emphasis } from "@/components/typography/Emphasis";
import { ExternalLink } from "@/components/typography/ExternalLink";

export function DynamicProgrammingContent() {
  return (
    <>
      <Body>
        Dynamic programming refers to a style of problem solving that combines
        two strategies:{" "}
        <Bold>1) breaking down the problem into subproblems</Bold>, and&nbsp; 2){" "}
        <Bold>memoization</Bold>. We approach a solution by thinking of it as
        the combination of many subproblems, and cache the results of those
        subproblems so we don&apos;t have to recompute them.
      </Body>

      <Body>
        One of the classic dynamic programming problems is the{" "}
        <ExternalLink href="https://leetcode.com/problems/coin-change/">
          coin change problem
        </ExternalLink>
        . Say you&apos;re giving someone change, and you want to use the
        smallest number of coins. How do you find the minimum number?
      </Body>

      <CodeBlock
        className="mb-8"
        language="typescript"
        code={`function coinChange(coins: number[], amount: number): number { ... }

coinChange([1,5,10,25], 106);
// Should return 6, (25 + 25 + 25 + 25 + 5 + 1)
`}
      />

      <Body>
        It turns out that for some combinations of coins, it&apos;s possible to
        solve this problem with a simple greedy algorithm. American coins are
        one of those cases.
      </Body>

      <CodeBlock
        className="mb-8"
        language="typescript"
        label="Greedy"
        code={`function coinChangeGreedy(coins: number[], amount: number): number {
    let count = 0;
    let remaining = amount;
    
    for (const coin of coins) {
        count += Math.floor(remaining / coin);
        remaining = remaining % coin;
    }
    
    return count;
}

coinChange([25, 10, 5, 1], 106);

// Correctly returns 6 (25 + 25 + 25 + 25 + 5 + 1)
`}
      />
      <Body>
        The greedy algorithm finds the right answer! If we start trying out
        coins in different denominations though, we pretty quickly run into
        problems with the greedy approach.
      </Body>
      <CodeBlock
        className="mb-8"
        language="typescript"
        code={`coinChange([1,4,5], 12);
// Should return 3 (4 + 4 + 4) but greedy returns 4 (5 + 5 + 1 + 1)

coinChange([2,3], 4);
// Should return 2 (2 + 2) but greedy loops infinitely
`}
      />

      <Body>
        The greedy approach follows paths that wind up with incorrect solutions
        solutions or non-solutions. So we&apos;re going to have to try another
        tack.
      </Body>
      <Body>
        What else can we do? Well, we <Emphasis>can</Emphasis> brute-force the
        problem. We can, say, find all possible combinations of coins that sum
        to the desired amount, and compare them to find the solution with the
        smallest number of coins. We know that this will find the correct
        solution because, well, we&apos;re trying <Emphasis>all</Emphasis> the
        possible combinations.
      </Body>

      <Body>It looks something like this:</Body>
      <CodeBlock
        className="mb-8"
        language="typescript"
        label="Brute Force"
        code={`function coinChangeBruteForce(coins: number[], amount: number): number {
  if (amount < 0) return -1; // If the amount is negative, we can't make change
  if (amount === 0) return 0; // If the amount is zero, we don't need any coins

  let min = Infinity;
  for (const coin of coins) {
    // Recursively solve for the target amount
    const result = coinChange(coins, amount - coin);
    if (result >= 0) {
      // Update the minimum number of coins if a valid result is found
      min = Math.min(min, result + 1);
    }
  }

  // Return -1 if no valid solution is found, otherwise return the minimum number of coins
  return min === Infinity ? -1 : min;
}`}
      />
      <Body>
        That&apos;ll work! We&apos;ve now got a <Emphasis>correct</Emphasis>
        &nbsp; solution. Unfortunately, it&apos;s pretty inefficient. For any
        given target amount, it will add as many calls to the call stack as
        there are coins. So, a time complexity of&nbsp;
        <Bold>
          O(coins.length<sup>amount</sup>)
        </Bold>{" "}
        or, roughly, exponential time.
      </Body>

      <Body>
        How can we optimize it? Well, if you look carefully you&apos;ll see that
        we&apos;re solving the same subproblem many times over. For example,{" "}
        <Code>coinChange([2,3], 5)</Code> calls{" "}
        <Code>coinChange([2,3], 3)</Code> and <Code>coinChange([2,3], 2)</Code>
        multiple times. Why don&apos;t we just cache the results of each
        subproblem?
      </Body>

      <CodeBlock
        className="mb-8"
        language="typescript"
        code={`function coinChange(coins: number[], amount: number): number {
  const results = new Map<number, number>(); // Cache results of subproblems

  function doCoinChange(
    coins: number[],
    amount: number,
    results: Map<number, number>,
  ) {
    if (amount < 0) return -1;
    if (amount === 0) return 0;

    // If we've already computed this subproblem, return the result
    if (results.has(amount)) return results.get(amount)!;

    // Otherwise, compute the result
    let min = -1;
    for (const c of coins) {
      const target = amount - c;
      const change = doCoinChange(coins, target, results);

      // It must be a valid solution
      if (change >= 0) {
        if (min < 0) {
          // If we haven't found a solution yet, set the minimum
          min = change + 1;
        } else {
          // Otherwise, update the minimum
          min = Math.min(min, change + 1);
        }
      }
    }

    results.set(amount, min); // Cache the result
    return min;
  }

  return doCoinChange(coins, amount, results);
}`}
      />

      <Body>
        This is the <Bold>dynamic programming</Bold> solution. We&apos;re
        a)&nbsp;
        <Bold>breaking the problem into subproblems</Bold>, and b)&nbsp;
        <Bold>memoizing results</Bold>.
      </Body>

      <Body>
        There are generally two ways to implement dynamic programming solutions:
        top-down with recursion and memoization, or bottom-up with iteration.
      </Body>

      <CodeBlock
        className="mb-8"
        language="typescript"
        code={`function coinChange(coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
}`}
      />
    </>
  );
}
