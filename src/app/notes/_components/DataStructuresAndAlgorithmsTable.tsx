import { Table } from "@/components/Table";
import {
  arraysAndHashing,
  backtracking,
  binarySearch,
  dynamicProgramming,
  graphs,
  greedyAlgorithms,
  heapsAndPriorityQueues,
  linkedLists,
  stacksAndQueues,
  trees,
  tries,
} from "@/constants/problems";

import { ProblemsList } from "./ProblemsList";
import { TextLink } from "./TextLink";

export function DataStructuresAndAlgorithmsTable() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Topic</th>
          <th>Key Concepts</th>
          <th>Problems</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <TextLink href="/notes/data-structures-and-algorithms/arrays-and-hashing">
              Arrays and Hashing
            </TextLink>
          </td>
          <td>
            Sliding window; two-pointer technique; hashing for fast lookups
          </td>
          <td>
            <ProblemsList problems={arraysAndHashing} />
          </td>
        </tr>
        <tr>
          <td>
            <TextLink href="/notes/data-structures-and-algorithms/binary-search">
              Binary Search
            </TextLink>
          </td>
          <td>Divide and conquer; variations of binary search</td>
          <td>
            <ProblemsList problems={binarySearch} />
          </td>
        </tr>
        <tr>
          <td>
            <TextLink href="/notes/data-structures-and-algorithms/linked-lists">
              Linked Lists
            </TextLink>
          </td>
          <td>Pointer manipulation; reversing lists</td>
          <td>
            <ProblemsList problems={linkedLists} />
          </td>
        </tr>
        <tr>
          <td>
            <TextLink href="/notes/data-structures-and-algorithms/stacks-and-queues">
              Stacks and Queues
            </TextLink>
          </td>
          <td>Stack for backtracking; monotonic stack; queue for BFS</td>
          <td>
            <ProblemsList problems={stacksAndQueues} />
          </td>
        </tr>
        <tr>
          <td>
            <TextLink href="/notes/data-structures-and-algorithms/trees">
              Trees
            </TextLink>
          </td>
          <td>DFS; BFS; recursion</td>
          <td>
            <ProblemsList problems={trees} />
          </td>
        </tr>
        <tr>
          <td>
            <TextLink href="/notes/data-structures-and-algorithms/graphs">
              Graphs
            </TextLink>
          </td>
          <td>BFS; DFS; adjacency lists; detecting cycles</td>
          <td>
            <ProblemsList problems={graphs} />
          </td>
        </tr>
        <tr>
          <td>
            <TextLink href="/notes/data-structures-and-algorithms/dynamic-programming">
              Dynamic Programming
            </TextLink>
          </td>
          <td>Bottom-up vs top-down; memoization</td>
          <td>
            <ProblemsList problems={dynamicProgramming} />
          </td>
        </tr>
        <tr>
          <td>
            <TextLink href="/notes/data-structures-and-algorithms/greedy-algorithms">
              Greedy Algorithms
            </TextLink>
          </td>
          <td>Local optimum; global optimum</td>
          <td>
            <ProblemsList problems={greedyAlgorithms} />
          </td>
        </tr>
        <tr>
          <td>
            <TextLink href="/notes/data-structures-and-algorithms/backtracking">
              Backtracking
            </TextLink>
          </td>
          <td>Recursion with constraints; pruning</td>
          <td>
            <ProblemsList problems={backtracking} />
          </td>
        </tr>
        <tr>
          <td>
            <TextLink href="/notes/data-structures-and-algorithms/tries">
              Tries
            </TextLink>
          </td>
          <td>Prefix trees; character-by-character search</td>
          <td>
            <ProblemsList problems={tries} />
          </td>
        </tr>
        <tr>
          <td>
            <TextLink href="/notes/data-structures-and-algorithms/heaps-and-priority-queues">
              Heaps and Priority Queues
            </TextLink>
          </td>
          <td>Binary Heap, Priority Queue</td>
          <td>
            <ProblemsList problems={heapsAndPriorityQueues} />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          {/* @ts-ignore */}
          <td colSpan={2} />
          <td>Completed: 17/40</td>
        </tr>
      </tfoot>
    </Table>
  );
}
