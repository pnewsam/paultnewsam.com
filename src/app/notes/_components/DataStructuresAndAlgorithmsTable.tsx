import { Table } from "@/components/Table";
import { ProblemsList } from "./ProblemsList";
import { TextLink } from "./TextLink";
import {
  arraysAndHashing,
  binarySearch,
  greedyAlgorithms,
  dynamicProgramming,
  tries,
  trees,
  heapsAndPriorityQueues,
  backtracking,
  graphs,
  stacksAndQueues,
  linkedLists,
} from "@/constants/problems";
import { firstHalf, secondHalf } from "@/utils/array";

// const td = ({
//   children,
//   ...props
// }: {
//   children: React.ReactNode;
// } & React.HTMLAttributes<HTMLTableCellElement>) => (
//   <td className="p-4" {...props}>
//     {children}
//   </td>
// );

export function DataStructuresAndAlgorithmsTable() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Topic</th>
          <th>Key Concepts</th>
          <th>Problems</th>
          <th>Review</th>
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
            <ProblemsList problems={firstHalf(arraysAndHashing)} />
          </td>
          <td>
            <ProblemsList problems={secondHalf(arraysAndHashing)} />
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
            <ProblemsList problems={firstHalf(binarySearch)} />
          </td>
          <td>
            <ProblemsList problems={secondHalf(binarySearch)} />
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
            <ProblemsList problems={firstHalf(linkedLists)} />
          </td>
          <td>
            <ProblemsList problems={secondHalf(linkedLists)} />
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
            <ProblemsList problems={firstHalf(stacksAndQueues)} />
          </td>
          <td>
            <ProblemsList problems={secondHalf(stacksAndQueues)} />
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
            <ProblemsList problems={firstHalf(trees)} />
          </td>
          <td>
            <ProblemsList problems={secondHalf(trees)} />
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
            <ProblemsList problems={firstHalf(graphs)} />
          </td>
          <td>
            <ProblemsList problems={secondHalf(graphs)} />
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
            <ProblemsList problems={firstHalf(dynamicProgramming)} />
          </td>
          <td>
            <ProblemsList problems={secondHalf(dynamicProgramming)} />
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
            <ProblemsList problems={firstHalf(greedyAlgorithms)} />
          </td>
          <td>
            <ProblemsList problems={secondHalf(greedyAlgorithms)} />
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
            <ProblemsList problems={firstHalf(backtracking)} />
          </td>
          <td>
            <ProblemsList problems={secondHalf(backtracking)} />
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
            <ProblemsList problems={firstHalf(tries)} />
          </td>
          <td>
            <ProblemsList problems={secondHalf(tries)} />
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
            <ProblemsList problems={firstHalf(heapsAndPriorityQueues)} />
          </td>
          <td>
            <ProblemsList problems={secondHalf(heapsAndPriorityQueues)} />
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
