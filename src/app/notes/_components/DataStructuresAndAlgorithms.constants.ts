import {
  Importance,
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

export const rows = [
  {
    order: 1,
    path: "/notes/data-structures-and-algorithms/arrays-and-hashing",
    title: "Arrays and Hashing",
    concepts: "Sliding window; two-pointer technique; hashing for fast lookups",
    problems: arraysAndHashing.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 2,
    path: "/notes/data-structures-and-algorithms/sliding-window",
    title: "Sliding Window",
    concepts: "",
    problems: slidingWindow.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 3,
    path: "/notes/data-structures-and-algorithms/two-pointers",
    title: "Two Pointers",
    concepts: "",
    problems: twoPointers.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 4,
    path: "/notes/data-structures-and-algorithms/binary-search",
    title: "Binary Search",
    concepts: "Divide and conquer; variations of binary search",
    problems: binarySearch.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 5,
    path: "/notes/data-structures-and-algorithms/linked-lists",
    title: "Linked Lists",
    concepts: "Pointer manipulation; ",
    problems: linkedLists.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 6,
    path: "/notes/data-structures-and-algorithms/stacks-and-queues",
    title: "Stacks and Queues",
    concepts: "Stack for backtracking; monotonic stack; queue for BFS",
    problems: stacksAndQueues.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 7,
    path: "/notes/data-structures-and-algorithms/trees",
    title: "Trees",
    concepts: "DFS; BFS; recursion",
    problems: trees.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 8,
    path: "/notes/data-structures-and-algorithms/tries",
    title: "Tries",
    concepts: "Prefix trees; character-by-character search",
    problems: tries.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 9,
    path: "/notes/data-structures-and-algorithms/heaps-and-priority-queues",
    title: "Heaps and Priority Queues",
    concepts: "",
    problems: heapsAndPriorityQueues.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 10,
    path: "/notes/data-structures-and-algorithms/graphs",
    title: "Graphs",
    concepts: "BFS; DFS; adjacency lists; detecting cycles",
    problems: graphs.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 11,
    path: "/notes/data-structures-and-algorithms/backtracking",
    title: "Backtracking",
    concepts: "Recursion with constraints; pruning",
    problems: backtracking.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 12,
    path: "/notes/data-structures-and-algorithms/dynamic-programming",
    title: "Dynamic Programming",
    concepts: "Bottom-up vs top-down; memoization",
    problems: dynamicProgramming.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 13,
    path: "/notes/data-structures-and-algorithms/greedy-algorithms",
    title: "Greedy Algorithms",
    concepts: "Local optimum; global optimum",
    problems: greedyAlgorithms.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
  {
    order: 14,
    path: "/notes/data-structures-and-algorithms/bit-manipulation",
    title: "Bit Manipulation",
    concepts: "Bit manipulation",
    problems: bitManipulation.filter(
      (problem) => problem.importance === Importance.Important,
    ),
  },
];
