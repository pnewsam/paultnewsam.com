import {
  arraysAndHashing,
  backtracking,
  binarySearch,
  bitManipulation,
  dynamicProgramming,
  graphs,
  greedyAlgorithms,
  heapsAndPriorityQueues,
  linkedLists,
  slidingWindow,
  stacksAndQueues,
  trees,
  tries,
  twoPointers,
} from "@/constants/problems";

import { ArraysAndHashingContent } from "../app/notes/data-structures-and-algorithms/_components/ArraysAndHashingContent";
import { BacktrackingContent } from "../app/notes/data-structures-and-algorithms/_components/BacktrackingContent";
import { BinarySearchContent } from "../app/notes/data-structures-and-algorithms/_components/BinarySearchContent";
import { BitManipulationContent } from "../app/notes/data-structures-and-algorithms/_components/BitManipulationContent";
import { DynamicProgrammingContent } from "../app/notes/data-structures-and-algorithms/_components/DynamicProgrammingContent";
import { GraphsContent } from "../app/notes/data-structures-and-algorithms/_components/GraphsContent";
import { GreedyAlgorithmsContent } from "../app/notes/data-structures-and-algorithms/_components/GreedyAlgorithmsContent";
import { LinkedListsContent } from "../app/notes/data-structures-and-algorithms/_components/LinkedListsContent";
import { SlidingWindowContent } from "../app/notes/data-structures-and-algorithms/_components/SlidingWindowContent";
import { StacksAndQueuesContent } from "../app/notes/data-structures-and-algorithms/_components/StacksAndQueuesContent";
import { TriesContent } from "../app/notes/data-structures-and-algorithms/_components/TriesContent";
import { TwoPointersContent } from "../app/notes/data-structures-and-algorithms/_components/TwoPointersContent";

export const dataStructuresAndAlgorithmsPages = [
  {
    order: 1,
    path: "/notes/data-structures-and-algorithms/arrays-and-hashing",
    slug: "arrays-and-hashing",
    title: "Arrays and Hashing",
    concepts:
      "Hash tables for O(1) lookups; In-place array manipulation; Frequency counting",
    problems: arraysAndHashing,
    Content: ArraysAndHashingContent,
  },
  {
    order: 2,
    path: "/notes/data-structures-and-algorithms/sliding-window",
    slug: "sliding-window",
    title: "Sliding Window",
    concepts:
      "Fixed vs variable size windows; Window state management; Window boundaries",
    problems: slidingWindow,
    Content: SlidingWindowContent,
  },
  {
    order: 3,
    path: "/notes/data-structures-and-algorithms/two-pointers",
    slug: "two-pointers",
    title: "Two Pointers",
    concepts:
      "Start/end pointer movement; Fast/slow pointer technique; Meeting in middle",
    problems: twoPointers,
    Content: TwoPointersContent,
  },
  {
    order: 4,
    path: "/notes/data-structures-and-algorithms/binary-search",
    slug: "binary-search",
    title: "Binary Search",
    concepts:
      "Binary search variations; Search space reduction; Boundary conditions",
    problems: binarySearch,
    Content: BinarySearchContent,
  },
  {
    order: 5,
    path: "/notes/data-structures-and-algorithms/linked-lists",
    slug: "linked-lists",
    title: "Linked Lists",
    concepts:
      "Pointer manipulation; Multiple pointer traversal; Cycle detection",
    problems: linkedLists,
    Content: LinkedListsContent,
  },
  {
    order: 6,
    path: "/notes/data-structures-and-algorithms/stacks-and-queues",
    slug: "stacks-and-queues",
    title: "Stacks and Queues",
    concepts:
      "LIFO/FIFO principles; Monotonic stack patterns; Nested structure validation",
    problems: stacksAndQueues,
    Content: StacksAndQueuesContent,
  },
  {
    order: 7,
    path: "/notes/data-structures-and-algorithms/trees",
    slug: "trees",
    title: "Trees",
    concepts:
      "Tree traversal strategies; Recursion vs iteration; Path tracking",
    problems: trees,
  },
  {
    order: 8,
    path: "/notes/data-structures-and-algorithms/tries",
    slug: "tries",
    title: "Tries",
    concepts:
      "Prefix-based search; Character-by-character traversal; Word dictionary operations",
    problems: tries,
    Content: TriesContent,
  },
  {
    order: 9,
    path: "/notes/data-structures-and-algorithms/heaps-and-priority-queues",
    slug: "heaps-and-priority-queues",
    title: "Heaps and Priority Queues",
    concepts: "Binary heap properties; K-way processing; Stream operations",
    problems: heapsAndPriorityQueues,
  },
  {
    order: 10,
    path: "/notes/data-structures-and-algorithms/graphs",
    slug: "graphs",
    title: "Graphs",
    concepts:
      "Graph traversal (BFS/DFS); Graph representation; Cycle detection",
    problems: graphs,
    Content: GraphsContent,
  },
  {
    order: 11,
    path: "/notes/data-structures-and-algorithms/backtracking",
    slug: "backtracking",
    title: "Backtracking",
    concepts: "State space exploration; Constraint handling; Solution building",
    problems: backtracking,
    Content: BacktrackingContent,
  },
  {
    order: 12,
    path: "/notes/data-structures-and-algorithms/dynamic-programming",
    slug: "dynamic-programming",
    title: "Dynamic Programming",
    concepts:
      "State transition; Memoization vs tabulation; Optimal substructure",
    problems: dynamicProgramming,
    Content: DynamicProgrammingContent,
  },
  {
    order: 13,
    path: "/notes/data-structures-and-algorithms/greedy-algorithms",
    slug: "greedy-algorithms",
    title: "Greedy Algorithms",
    concepts:
      "Local vs global optimization; Interval processing; Sorting-based greedy",
    problems: greedyAlgorithms,
    Content: GreedyAlgorithmsContent,
  },
  {
    order: 14,
    path: "/notes/data-structures-and-algorithms/bit-manipulation",
    slug: "bit-manipulation",
    title: "Bit Manipulation",
    concepts: "Bitwise operations; Bit flags; Bit counting techniques",
    problems: bitManipulation,
    Content: BitManipulationContent,
  },
];

export const dataStructuresAndAlgorithmsPagesBySlug =
  dataStructuresAndAlgorithmsPages.reduce(
    (acc, page) => {
      acc[page.slug] = page;
      return acc;
    },
    {} as Record<string, (typeof dataStructuresAndAlgorithmsPages)[number]>,
  );
