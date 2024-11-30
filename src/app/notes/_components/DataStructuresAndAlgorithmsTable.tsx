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

const Td = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLTableCellElement>) => (
  <td className="p-4" {...props}>
    {children}
  </td>
);

export function DataStructuresAndAlgorithmsTable() {
  return (
    <table className="w-full rounded-lg">
      <thead>
        <tr className="text-left text-xl">
          <th className="p-4">Topic</th>
          <th className="p-4">Key Concepts</th>
          <th className="p-4">Problems</th>
          <th className="p-4">Review</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <Td>
            <TextLink href="/notes/data-structures-and-algorithms/arrays-and-hashing">
              Arrays and Hashing
            </TextLink>
          </Td>
          <Td>
            Sliding window; two-pointer technique; hashing for fast lookups
          </Td>
          <Td>
            <ProblemsList problems={firstHalf(arraysAndHashing)} />
          </Td>
          <Td>
            <ProblemsList problems={secondHalf(arraysAndHashing)} />
          </Td>
        </tr>
        <tr className="border-t">
          <Td>
            <TextLink href="/notes/data-structures-and-algorithms/binary-search">
              Binary Search
            </TextLink>
          </Td>
          <Td>Divide and conquer; variations of binary search</Td>
          <Td>
            <ProblemsList problems={firstHalf(binarySearch)} />
          </Td>
          <Td>
            <ProblemsList problems={secondHalf(binarySearch)} />
          </Td>
        </tr>
        <tr className="border-t">
          <Td>
            <TextLink href="/notes/data-structures-and-algorithms/linked-lists">
              Linked Lists
            </TextLink>
          </Td>
          <Td>Pointer manipulation; reversing lists</Td>
          <Td>
            <ProblemsList problems={firstHalf(linkedLists)} />
          </Td>
          <Td>
            <ProblemsList problems={secondHalf(linkedLists)} />
          </Td>
        </tr>
        <tr className="border-t">
          <Td>
            <TextLink href="/notes/data-structures-and-algorithms/stacks-and-queues">
              Stacks and Queues
            </TextLink>
          </Td>
          <Td>Stack for backtracking; monotonic stack; queue for BFS</Td>
          <Td>
            <ProblemsList problems={firstHalf(stacksAndQueues)} />
          </Td>
          <Td>
            <ProblemsList problems={secondHalf(stacksAndQueues)} />
          </Td>
        </tr>
        <tr className="border-t">
          <Td>
            <TextLink href="/notes/data-structures-and-algorithms/trees">
              Trees
            </TextLink>
          </Td>
          <Td>DFS; BFS; recursion</Td>
          <Td>
            <ProblemsList problems={firstHalf(trees)} />
          </Td>
          <Td>
            <ProblemsList problems={secondHalf(trees)} />
          </Td>
        </tr>
        <tr className="border-t">
          <Td>
            <TextLink href="/notes/data-structures-and-algorithms/graphs">
              Graphs
            </TextLink>
          </Td>
          <Td>BFS; DFS; adjacency lists; detecting cycles</Td>
          <Td>
            <ProblemsList problems={firstHalf(graphs)} />
          </Td>
          <Td>
            <ProblemsList problems={secondHalf(graphs)} />
          </Td>
        </tr>
        <tr className="border-t">
          <Td>
            <TextLink href="/notes/data-structures-and-algorithms/dynamic-programming">
              Dynamic Programming
            </TextLink>
          </Td>
          <Td>Bottom-up vs top-down; memoization</Td>
          <Td>
            <ProblemsList problems={firstHalf(dynamicProgramming)} />
          </Td>
          <Td>
            <ProblemsList problems={secondHalf(dynamicProgramming)} />
          </Td>
        </tr>
        <tr className="border-t">
          <Td>
            <TextLink href="/notes/data-structures-and-algorithms/greedy-algorithms">
              Greedy Algorithms
            </TextLink>
          </Td>
          <Td>Local optimum; global optimum</Td>
          <Td>
            <ProblemsList problems={firstHalf(greedyAlgorithms)} />
          </Td>
          <Td>
            <ProblemsList problems={secondHalf(greedyAlgorithms)} />
          </Td>
        </tr>
        <tr className="border-t">
          <Td>
            <TextLink href="/notes/data-structures-and-algorithms/backtracking">
              Backtracking
            </TextLink>
          </Td>
          <Td>Recursion with constraints; pruning</Td>
          <Td>
            <ProblemsList problems={firstHalf(backtracking)} />
          </Td>
          <Td>
            <ProblemsList problems={secondHalf(backtracking)} />
          </Td>
        </tr>
        <tr className="border-t">
          <Td>
            <TextLink href="/notes/data-structures-and-algorithms/tries">
              Tries
            </TextLink>
          </Td>
          <Td>Prefix trees; character-by-character search</Td>
          <Td>
            <ProblemsList problems={firstHalf(tries)} />
          </Td>
          <Td>
            <ProblemsList problems={secondHalf(tries)} />
          </Td>
        </tr>
        <tr className="border-t">
          <Td>
            <TextLink href="/notes/data-structures-and-algorithms/heaps-and-priority-queues">
              Heaps and Priority Queues
            </TextLink>
          </Td>
          <Td>Binary Heap, Priority Queue</Td>
          <Td>
            <ProblemsList problems={firstHalf(heapsAndPriorityQueues)} />
          </Td>
          <Td>
            <ProblemsList problems={secondHalf(heapsAndPriorityQueues)} />
          </Td>
        </tr>
      </tbody>
      <tfoot className="border-t">
        <tr>
          {/* @ts-ignore */}
          <Td colSpan={2} />
          <Td>Completed: 17/40</Td>
        </tr>
      </tfoot>
    </table>
  );
}
