import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/app/notes/_components/LinkCard";
import { TextLink } from "@/app/notes/_components/TextLink";
import { Body } from "@/components/typography/Body";
import { H2 } from "@/components/typography/H2";

const showDsaNotes = process.env.SHOW_DSA_NOTES === "true";

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
                    <th className="p-4">Problems</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/arrays-and-hashing">
                        Arrays and Hashing
                      </TextLink>
                    </td>
                    <td className="p-4">Hash tables, Arrays</td>
                    <td className="p-4">
                      <ul className="list-disc list-inside">
                        <li>Two Sum</li>
                        <li>Longest Substring Without Repeating Characters</li>
                        <li>Maximum Subarray</li>
                        <li>Product of Array Except Self</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/binary-search">
                        Binary Search
                      </TextLink>
                    </td>
                    <td className="p-4">Divide & Conquer, Search Space</td>
                    <td className="p-4">
                      <ul className="list-disc list-inside">
                        <li>Binary Search</li>
                        <li>Search a 2D Matrix</li>
                        <li>Find Minimum in Rotated Sorted Array</li>
                        <li>Median of Two Sorted Arrays</li>
                      </ul>
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
                      <ul className="list-disc list-inside">
                        <li>Reverse Linked List</li>
                        <li>Merge Two Sorted Lists</li>
                        <li>Linked List Cycle</li>
                        <li>Reorder List</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/stacks-and-queues">
                        Stacks and Queues
                      </TextLink>
                    </td>
                    <td className="p-4">LIFO, FIFO</td>
                    <td className="p-4">
                      <ul className="list-disc list-inside">
                        <li>20. Valid Parentheses</li>
                        <li>155. Min Stack</li>
                        <li>739. Daily Temperatures</li>
                        <li>232. Implement Queue using Stacks</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/trees">
                        Trees
                      </TextLink>
                    </td>
                    <td className="p-4">Tree Traversal, Binary Trees</td>
                    <td className="p-4">
                      <ul className="list-disc list-inside">
                        <li>94. Binary Tree Inorder Traversal</li>
                        <li>104. Maximum Depth of Binary Tree</li>
                        <li>
                          235. Lowest Common Ancestor of a Binary Search Tree
                        </li>
                        <li>98. Validate Binary Search Tree</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/graphs">
                        Graphs
                      </TextLink>
                    </td>
                    <td className="p-4">DFS, BFS, Adjacency List</td>
                    <td className="p-4">
                      <ul className="list-disc list-inside">
                        <li>200. Number of Islands</li>
                        <li>133. Clone Graph</li>
                        <li>207. Course Schedule</li>
                        <li>127. Word Ladder</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/dynamic-programming">
                        Dynamic Programming
                      </TextLink>
                    </td>
                    <td className="p-4">Memoization, Tabulation</td>
                    <td className="p-4">
                      <ul className="list-disc list-inside">
                        <li>70. Climbing Stairs</li>
                        <li>198. House Robber</li>
                        <li>322. Coin Change</li>
                        <li>1143. Longest Common Subsequence</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/greedy-algorithms">
                        Greedy Algorithms
                      </TextLink>
                    </td>
                    <td className="p-4">Local Optimum</td>
                    <td className="p-4">
                      <ul className="list-disc list-inside">
                        <li>56. Merge Intervals</li>
                        <li>435. Non-overlapping Intervals</li>
                        <li>452. Minimum Number of Arrows to Burst Balloons</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/backtracking">
                        Backtracking
                      </TextLink>
                    </td>
                    <td className="p-4">State Space Tree, Pruning</td>
                    <td className="p-4">
                      <ul className="list-disc list-inside">
                        <li>78. Subsets</li>
                        <li>46. Permutations</li>
                        <li>39. Combination Sum</li>
                        <li>37. Sudoku Solver</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">
                      <TextLink href="/notes/data-structures-and-algorithms/tries">
                        Tries
                      </TextLink>
                    </td>
                    <td className="p-4">Prefix Trees, Character Search</td>
                    <td className="p-4">
                      <ul className="list-disc list-inside">
                        <li>208. Implement Trie</li>
                        <li>212. Word Search II</li>
                      </ul>
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
                      <ul className="list-disc list-inside">
                        <li>215. Kth Largest Element</li>
                        <li>23. Merge K Sorted Lists</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </Container>
  );
}
