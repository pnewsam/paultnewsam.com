import { ArraysAndHashingContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/ArraysAndHashingContent";
import { BacktrackingContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/BacktrackingContent";
import { BinarySearchContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/BinarySearchContent";
import { BitManipulationContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/BitManipulationContent";
import { DynamicProgrammingContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/DynamicProgrammingContent";
import { GraphsContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/GraphsContent";
import { GreedyAlgorithmsContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/GreedyAlgorithmsContent";
import { HeapsAndPriorityQueuesContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/HeapsAndPriorityQueuesContent";
import { LinkedListsContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/LinkedListsContent";
import { SlidingWindowContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/SlidingWindowContent";
import { StacksAndQueuesContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/StacksAndQueuesContent";
import { TreesContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/TreesContent";
import { TriesContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/TriesContent";
import { TwoPointersContent } from "@/app/notes/data-structures-and-algorithms/_components/pageContent/TwoPointersContent";
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
import { PageMetadata } from "@/types/pageMetadata";
import { Subject } from "@/types/subject";

export const dsaPage: PageMetadata = {
  path: "/notes/data-structures-and-algorithms",
  title: "Data Structures and Algorithms",
  description:
    "A structured approach to learning the core data structures and algorithms",
  subject: Subject.DataStructuresAndAlgorithms,
  published: false,
};

export const dsaPages = [
  {
    order: 1,
    path: "/notes/data-structures-and-algorithms/arrays-and-hashing",
    title: "Arrays and Hashing",
    description:
      "Hash tables for O(1) lookups; In-place array manipulation; Frequency counting",
    problems: arraysAndHashing,
    Content: ArraysAndHashingContent,
    published: false,
  },
  {
    order: 2,
    title: "Sliding Window",
    path: "/notes/data-structures-and-algorithms/sliding-window",
    description:
      "Fixed vs variable size windows; Window state management; Window boundaries",
    problems: slidingWindow,
    Content: SlidingWindowContent,
    published: false,
  },
  {
    order: 3,
    path: "/notes/data-structures-and-algorithms/two-pointers",
    title: "Two Pointers",
    description:
      "Start/end pointer movement; Fast/slow pointer technique; Meeting in middle",
    problems: twoPointers,
    Content: TwoPointersContent,
    published: false,
  },
  {
    order: 4,
    path: "/notes/data-structures-and-algorithms/binary-search",
    title: "Binary Search",
    description:
      "Binary search variations; Search space reduction; Boundary conditions",
    problems: binarySearch,
    Content: BinarySearchContent,
    published: false,
  },
  {
    order: 5,
    path: "/notes/data-structures-and-algorithms/linked-lists",
    title: "Linked Lists",
    description:
      "Pointer manipulation; Multiple pointer traversal; Cycle detection",
    problems: linkedLists,
    Content: LinkedListsContent,
    published: false,
  },
  {
    order: 6,
    path: "/notes/data-structures-and-algorithms/stacks-and-queues",
    title: "Stacks and Queues",
    description:
      "LIFO/FIFO principles; Monotonic stack patterns; Nested structure validation",
    problems: stacksAndQueues,
    Content: StacksAndQueuesContent,
    published: false,
  },
  {
    order: 7,
    path: "/notes/data-structures-and-algorithms/trees",
    title: "Trees",
    description:
      "Tree traversal strategies; Recursion vs iteration; Path tracking",
    problems: trees,
    Content: TreesContent,
    published: false,
  },
  {
    order: 8,
    path: "/notes/data-structures-and-algorithms/tries",
    title: "Tries",
    description:
      "Prefix-based search; Character-by-character traversal; Word dictionary operations",
    problems: tries,
    Content: TriesContent,
    published: false,
  },
  {
    order: 9,
    path: "/notes/data-structures-and-algorithms/heaps-and-priority-queues",
    title: "Heaps and Priority Queues",
    description: "Binary heap properties; K-way processing; Stream operations",
    problems: heapsAndPriorityQueues,
    Content: HeapsAndPriorityQueuesContent,
    published: false,
  },
  {
    order: 10,
    path: "/notes/data-structures-and-algorithms/graphs",
    title: "Graphs",
    description:
      "Graph traversal (BFS/DFS); Graph representation; Cycle detection",
    problems: graphs,
    Content: GraphsContent,
    published: false,
  },
  {
    order: 11,
    path: "/notes/data-structures-and-algorithms/backtracking",
    title: "Backtracking",
    description:
      "State space exploration; Constraint handling; Solution building",
    problems: backtracking,
    Content: BacktrackingContent,
    published: false,
  },
  {
    order: 12,
    path: "/notes/data-structures-and-algorithms/dynamic-programming",
    title: "Dynamic Programming",
    description:
      "State transition; Memoization vs tabulation; Optimal substructure",
    problems: dynamicProgramming,
    Content: DynamicProgrammingContent,
    published: false,
  },
  {
    order: 13,
    path: "/notes/data-structures-and-algorithms/greedy-algorithms",
    title: "Greedy Algorithms",
    description:
      "Local vs global optimization; Interval processing; Sorting-based greedy",
    problems: greedyAlgorithms,
    Content: GreedyAlgorithmsContent,
    published: false,
  },
  {
    order: 14,
    path: "/notes/data-structures-and-algorithms/bit-manipulation",
    title: "Bit Manipulation",
    description: "Bitwise operations; Bit flags; Bit counting techniques",
    problems: bitManipulation,
    Content: BitManipulationContent,
    published: false,
  },
].map((page) => ({
  ...page,
  subject: Subject.DataStructuresAndAlgorithms,
}));

export const dsaPagesByPath = dsaPages.reduce(
  (acc, page) => {
    acc[page.path] = page;
    return acc;
  },
  {} as Record<string, (typeof dsaPages)[number]>,
);
