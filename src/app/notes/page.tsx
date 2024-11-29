import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/app/notes/_components/LinkCard";
import { TextLink } from "@/app/notes/_components/TextLink";
import { Body } from "@/components/typography/Body";
import { H2 } from "@/components/typography/H2";

const showDsaNotes = process.env.SHOW_DSA_NOTES === "true";

const Problems = ({
  problems,
}: {
  problems: {
    title: string;
    url: string;
    status?: "done" | "attempted" | "not done";
  }[];
}) => (
  <ul className="list-disc list-inside">
    {problems.map((problem) => (
      <li key={problem.url} className="">
        <a
          className="hover:text-cyan-500 dark:hover:text-cyan-400"
          href={problem.url}
        >
          <span className="underline">{problem.title}</span>&nbsp;&nbsp;
          <span className="text-green-500 dark:text-green-400">
            {problem.status === "done" && "✅"}
            {problem.status === "attempted" && "🔄"}
            {problem.status === "not done" && "❌"}
          </span>
        </a>
      </li>
    ))}
  </ul>
);

export default function NotesPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Notes" tags={[]} />
        <Body>
          I&apos;ve started to collect notes here that I find useful or
          interesting.
        </Body>

        <H2 className="mb-8">Cheatsheets</H2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          <LinkCard
            href="/notes/latency-numbers"
            tags={["Performance"]}
            title="Latency Numbers"
            description="A table of latency numbers for various operations."
          />
          <LinkCard
            href="/notes/whiteboard"
            tags={["HTML", "Typescript"]}
            title="Whiteboard"
            description="A very basic whiteboard with HTML Canvas."
          />
          <LinkCard
            href="/notes/infinite-scroll"
            tags={["Typescript"]}
            title="Infinite Scroll"
            description="A simple infinite scroll implementation."
          />
        </div>

        {showDsaNotes && (
          <div>
            <H2 className="mb-4">Data Structures & Algorithms</H2>
            <Body>These are my notes on data structures and algorithms.</Body>
            <div className="mb-16">
              <table className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                <thead>
                  <tr className="text-left text-xl">
                    <th className="p-4">Topic</th>
                    <th className="p-4">Key Concepts</th>
                    <th className="p-4">Problems (40 total)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/arrays-and-hashing">
                        Arrays and Hashing
                      </TextLink>
                    </td>
                    <td className="p-4">
                      Sliding window; two-pointer technique; hashing for fast
                      lookups
                    </td>
                    <td className="p-4">
                      <Problems
                        problems={[
                          {
                            title: "1. Two Sum",
                            url: "https://leetcode.com/problems/two-sum/",
                            status: "done",
                          },
                          {
                            title:
                              "3. Longest Substring Without Repeating Characters",
                            url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
                            status: "done",
                          },
                          {
                            title: "53. Maximum Subarray",
                            url: "https://leetcode.com/problems/maximum-subarray/",
                            status: "done",
                          },
                          {
                            title: "238. Product of Array Except Self",
                            url: "https://leetcode.com/problems/product-of-array-except-self/",
                            status: "done",
                          },
                        ]}
                      />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/binary-search">
                        Binary Search
                      </TextLink>
                    </td>
                    <td className="p-4">
                      Divide and conquer; variations of binary search
                    </td>
                    <td className="p-4">
                      <Problems
                        problems={[
                          {
                            title: "704. Binary Search",
                            url: "https://leetcode.com/problems/binary-search/",
                            status: "not done",
                          },
                          {
                            title: "74. Search a 2D Matrix",
                            url: "https://leetcode.com/problems/search-a-2d-matrix/",
                            status: "not done",
                          },
                          {
                            title: "153. Find Minimum in Rotated Sorted Array",
                            url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
                            status: "done",
                          },
                          {
                            title: "4. Median of Two Sorted Arrays",
                            url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
                            status: "not done",
                          },
                        ]}
                      />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/linked-lists">
                        Linked Lists
                      </TextLink>
                    </td>
                    <td className="p-4">
                      Pointer manipulation; reversing lists
                    </td>
                    <td className="p-4">
                      <Problems
                        problems={[
                          {
                            title: "206. Reverse Linked List",
                            url: "https://leetcode.com/problems/reverse-linked-list/",
                            status: "done",
                          },
                          {
                            title: "83. Merge Two Sorted Lists",
                            url: "https://leetcode.com/problems/merge-two-sorted-lists/",
                            status: "done",
                          },
                          {
                            title: "141. Linked List Cycle",
                            url: "https://leetcode.com/problems/linked-list-cycle/",
                            status: "done",
                          },
                          {
                            title: "143. Reorder List",
                            url: "https://leetcode.com/problems/reorder-list/",
                            status: "not done",
                          },
                        ]}
                      />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/stacks-and-queues">
                        Stacks and Queues
                      </TextLink>
                    </td>
                    <td className="p-4">
                      Stack for backtracking; monotonic stack; queue for BFS
                    </td>
                    <td className="p-4">
                      <Problems
                        problems={[
                          {
                            title: "20. Valid Parentheses",
                            url: "https://leetcode.com/problems/valid-parentheses/",
                            status: "done",
                          },
                          {
                            title: "155. Min Stack",
                            url: "https://leetcode.com/problems/min-stack/",
                            status: "attempted",
                          },
                          {
                            title: "739. Daily Temperatures",
                            url: "https://leetcode.com/problems/daily-temperatures/",
                            status: "attempted",
                          },
                          {
                            title: "232. Implement Queue using Stacks",
                            url: "https://leetcode.com/problems/implement-queue-using-stacks/",
                            status: "not done",
                          },
                        ]}
                      />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/trees">
                        Trees
                      </TextLink>
                    </td>
                    <td className="p-4">DFS; BFS; recursion</td>
                    <td className="p-4">
                      <Problems
                        problems={[
                          {
                            title: "94. Binary Tree Inorder Traversal",
                            url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
                            status: "done",
                          },
                          {
                            title: "104. Maximum Depth of Binary Tree",
                            url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
                            status: "done",
                          },
                          {
                            title:
                              "235. Lowest Common Ancestor of a Binary Search Tree",
                            url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
                            status: "not done",
                          },
                          {
                            title: "98. Validate Binary Search Tree",
                            url: "https://leetcode.com/problems/validate-binary-search-tree/",
                            status: "done",
                          },
                        ]}
                      />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/graphs">
                        Graphs
                      </TextLink>
                    </td>
                    <td className="p-4">DFS; BFS; Adjacency List</td>
                    <td className="p-4">
                      <Problems
                        problems={[
                          {
                            title: "200. Number of Islands",
                            url: "https://leetcode.com/problems/number-of-islands/",
                            status: "done",
                          },
                          {
                            title: "133. Clone Graph",
                            url: "https://leetcode.com/problems/clone-graph/",
                            status: "done",
                          },
                          {
                            title: "207. Course Schedule",
                            url: "https://leetcode.com/problems/course-schedule/",
                            status: "not done",
                          },
                          {
                            title: "127. Word Ladder",
                            url: "https://leetcode.com/problems/word-ladder/",
                            status: "not done",
                          },
                        ]}
                      />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/dynamic-programming">
                        Dynamic Programming
                      </TextLink>
                    </td>
                    <td className="p-4">Bottom-up vs top-down; memoization</td>
                    <td className="p-4">
                      <Problems
                        problems={[
                          {
                            title: "70. Climbing Stairs",
                            url: "https://leetcode.com/problems/climbing-stairs/",
                            status: "done",
                          },
                          {
                            title: "198. House Robber",
                            url: "https://leetcode.com/problems/house-robber/",
                            status: "done",
                          },
                          {
                            title: "322. Coin Change",
                            url: "https://leetcode.com/problems/coin-change/",
                            status: "attempted",
                          },
                          {
                            title: "1143. Longest Common Subsequence",
                            url: "https://leetcode.com/problems/longest-common-subsequence/",
                            status: "not done",
                          },
                        ]}
                      />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/greedy-algorithms">
                        Greedy Algorithms
                      </TextLink>
                    </td>
                    <td className="p-4">Local optimum; global optimum</td>
                    <td className="p-4">
                      <Problems
                        problems={[
                          {
                            title: "56. Merge Intervals",
                            url: "https://leetcode.com/problems/merge-intervals/",
                            status: "not done",
                          },
                          {
                            title: "435. Non-overlapping Intervals",
                            url: "https://leetcode.com/problems/non-overlapping-intervals/",
                            status: "not done",
                          },
                          {
                            title:
                              "452. Minimum Number of Arrows to Burst Balloons",
                            url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
                            status: "not done",
                          },
                        ]}
                      />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/backtracking">
                        Backtracking
                      </TextLink>
                    </td>
                    <td className="p-4">Recursion with constraints; pruning</td>
                    <td className="p-4">
                      <Problems
                        problems={[
                          {
                            title: "78. Subsets",
                            url: "https://leetcode.com/problems/subsets/",
                            status: "not done",
                          },
                          {
                            title: "46. Permutations",
                            url: "https://leetcode.com/problems/permutations/",
                            status: "not done",
                          },
                          {
                            title: "39. Combination Sum",
                            url: "https://leetcode.com/problems/combination-sum/",
                            status: "not done",
                          },
                          {
                            title: "37. Sudoku Solver",
                            url: "https://leetcode.com/problems/sudoku-solver/",
                            status: "not done",
                          },
                        ]}
                      />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/tries">
                        Tries
                      </TextLink>
                    </td>
                    <td className="p-4">
                      Prefix trees; character-by-character search
                    </td>
                    <td className="p-4">
                      <Problems
                        problems={[
                          {
                            title: "208. Implement Trie",
                            url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
                            status: "not done",
                          },
                          {
                            title: "212. Word Search II",
                            url: "https://leetcode.com/problems/word-search-ii/",
                            status: "not done",
                          },
                        ]}
                      />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/heaps-and-priority-queues">
                        Heaps and Priority Queues
                      </TextLink>
                    </td>
                    <td className="p-4">Binary Heap, Priority Queue</td>
                    <td className="p-4">
                      <Problems
                        problems={[
                          {
                            title: "215. Kth Largest Element",
                            url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
                            status: "done",
                          },
                          {
                            title: "23. Merge K Sorted Lists",
                            url: "https://leetcode.com/problems/merge-k-sorted-lists/",
                            status: "not done",
                          },
                        ]}
                      />
                    </td>
                  </tr>
                </tbody>
                <tfoot className="border-t">
                  <tr>
                    <td colSpan={2} className="p-4" />
                    <td className="p-4">Completed: 17/40</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </section>
    </Container>
  );
}
