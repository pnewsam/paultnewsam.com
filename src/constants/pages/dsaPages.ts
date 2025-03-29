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
  slug: "/notes/data-structures-and-algorithms",
  title: "Data Structures and Algorithms",
  description:
    "A structured approach to learning the core data structures and algorithms",
  subject: Subject.DataStructuresAndAlgorithms,
  publishedAt: "2024-12-01",
};

export const dsaPages = [
  {
    order: 1,
    slug: "/notes/data-structures-and-algorithms/arrays-and-hashing",
    title: "Arrays and Hashing",
    description:
      "Hash tables for O(1) lookups; In-place array manipulation; Frequency counting",
    problems: arraysAndHashing,
    Content: ArraysAndHashingContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 2,
    title: "Sliding Window",
    slug: "/notes/data-structures-and-algorithms/sliding-window",
    description:
      "Fixed vs variable size windows; Window state management; Window boundaries",
    problems: slidingWindow,
    Content: SlidingWindowContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 3,
    slug: "/notes/data-structures-and-algorithms/two-pointers",
    title: "Two Pointers",
    description:
      "Start/end pointer movement; Fast/slow pointer technique; Meeting in middle",
    problems: twoPointers,
    Content: TwoPointersContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 4,
    slug: "/notes/data-structures-and-algorithms/binary-search",
    title: "Binary Search",
    description:
      "Binary search variations; Search space reduction; Boundary conditions",
    problems: binarySearch,
    Content: BinarySearchContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 5,
    slug: "/notes/data-structures-and-algorithms/linked-lists",
    title: "Linked Lists",
    description:
      "Pointer manipulation; Multiple pointer traversal; Cycle detection",
    problems: linkedLists,
    Content: LinkedListsContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 6,
    slug: "/notes/data-structures-and-algorithms/stacks-and-queues",
    title: "Stacks and Queues",
    description:
      "LIFO/FIFO principles; Monotonic stack patterns; Nested structure validation",
    problems: stacksAndQueues,
    Content: StacksAndQueuesContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 7,
    slug: "/notes/data-structures-and-algorithms/trees",
    title: "Trees",
    description:
      "Tree traversal strategies; Recursion vs iteration; Path tracking",
    problems: trees,
    Content: TreesContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 8,
    slug: "/notes/data-structures-and-algorithms/tries",
    title: "Tries",
    description:
      "Prefix-based search; Character-by-character traversal; Word dictionary operations",
    problems: tries,
    Content: TriesContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 9,
    slug: "/notes/data-structures-and-algorithms/heaps-and-priority-queues",
    title: "Heaps and Priority Queues",
    description: "Binary heap properties; K-way processing; Stream operations",
    problems: heapsAndPriorityQueues,
    Content: HeapsAndPriorityQueuesContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 10,
    slug: "/notes/data-structures-and-algorithms/graphs",
    title: "Graphs",
    description:
      "Graph traversal (BFS/DFS); Graph representation; Cycle detection",
    problems: graphs,
    Content: GraphsContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 11,
    slug: "/notes/data-structures-and-algorithms/backtracking",
    title: "Backtracking",
    description:
      "State space exploration; Constraint handling; Solution building",
    problems: backtracking,
    Content: BacktrackingContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 12,
    slug: "/notes/data-structures-and-algorithms/dynamic-programming",
    title: "Dynamic Programming",
    description:
      "State transition; Memoization vs tabulation; Optimal substructure",
    problems: dynamicProgramming,
    Content: DynamicProgrammingContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 13,
    slug: "/notes/data-structures-and-algorithms/greedy-algorithms",
    title: "Greedy Algorithms",
    description:
      "Local vs global optimization; Interval processing; Sorting-based greedy",
    problems: greedyAlgorithms,
    Content: GreedyAlgorithmsContent,
    publishedAt: "2024-12-01",
  },
  {
    order: 14,
    slug: "/notes/data-structures-and-algorithms/bit-manipulation",
    title: "Bit Manipulation",
    description: "Bitwise operations; Bit flags; Bit counting techniques",
    problems: bitManipulation,
    Content: BitManipulationContent,
    publishedAt: "2024-12-01",
  },
].map((page) => ({
  ...page,
  subject: Subject.DataStructuresAndAlgorithms,
}));

export const dsaPagesBySlug = dsaPages.reduce(
  (acc, page) => {
    acc[page.slug] = page;
    return acc;
  },
  {} as Record<string, (typeof dsaPages)[number]>,
);
