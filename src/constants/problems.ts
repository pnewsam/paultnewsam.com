export enum Status {
  Done = "Done",
  Attempted = "Attempted",
  NotDone = "Not Done",
  Unknown = "Unknown",
}

export type Problem = {
  number: number;
  title: string;
  url: string;
  status: Status;
  category: string;
};

export const arraysAndHashing: Problem[] = [
  {
    number: 1,
    title: "Two Sum",
    url: "https://leetcode.com/problems/two-sum/",
    status: Status.Done,
  },
  {
    number: 3,
    title: "Longest Substring Without Repeating Characters",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    status: Status.Done,
  },
  {
    number: 53,
    title: "Maximum Subarray",
    url: "https://leetcode.com/problems/maximum-subarray/",
    status: Status.Done,
  },
  {
    number: 238,
    title: "Product of Array Except Self",
    url: "https://leetcode.com/problems/product-of-array-except-self/",
    status: Status.Done,
  },
  {
    number: 36,
    title: "Valid Sudoku",
    url: "https://leetcode.com/problems/valid-sudoku/",
    status: Status.Unknown,
  },
  {
    number: 217,
    title: "Contains Duplicate",
    url: "https://leetcode.com/problems/contains-duplicate/",
    status: Status.Unknown,
  },
  {
    number: 49,
    title: "Group Anagrams",
    url: "https://leetcode.com/problems/group-anagrams/",
    status: Status.Unknown,
  },
  {
    number: 560,
    title: "Subarray Sum Equals K",
    url: "https://leetcode.com/problems/subarray-sum-equals-k/",
    status: Status.Unknown,
  },
].map((problem) => ({ ...problem, category: "Arrays and Hashing" }));

export const binarySearch: Problem[] = [
  {
    number: 704,
    title: "Binary Search",
    url: "https://leetcode.com/problems/binary-search/",
    status: Status.Done,
  },
  {
    number: 74,
    title: "Search a 2D Matrix",
    url: "https://leetcode.com/problems/search-a-2d-matrix/",
    status: Status.NotDone,
  },
  {
    number: 153,
    title: "Find Minimum in Rotated Sorted Array",
    url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    status: Status.Done,
  },
  {
    number: 4,
    title: "Median of Two Sorted Arrays",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    status: Status.NotDone,
  },
  {
    number: 162,
    title: "Find Peak Element",
    url: "https://leetcode.com/problems/find-peak-element/",
    status: Status.Unknown,
  },
  {
    number: 33,
    title: "Search in Rotated Sorted Array",
    url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    status: Status.Unknown,
  },
  {
    number: 702,
    title: "Search in a Sorted Array of Unknown Size",
    url: "https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/",
    status: Status.Unknown,
  },
  {
    number: 240,
    title: "Search a 2D Matrix II",
    url: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
    status: Status.Unknown,
  },
].map((problem) => ({ ...problem, category: "Binary Search" }));

export const linkedLists: Problem[] = [
  {
    number: 206,
    title: "Reverse Linked List",
    url: "https://leetcode.com/problems/reverse-linked-list/",
    status: Status.Done,
  },
  {
    number: 83,
    title: "Merge Two Sorted Lists",
    url: "https://leetcode.com/problems/merge-two-sorted-lists/",
    status: Status.Done,
  },
  {
    number: 141,
    title: "Linked List Cycle",
    url: "https://leetcode.com/problems/linked-list-cycle/",
    status: Status.Done,
  },
  {
    number: 143,
    title: "Reorder List",
    url: "https://leetcode.com/problems/reorder-list/",
    status: Status.NotDone,
  },

  {
    number: 23,
    title: "Merge k Sorted Lists",
    url: "https://leetcode.com/problems/merge-k-sorted-lists/",
    status: Status.Unknown,
  },
  {
    number: 160,
    title: "Intersection of Two Linked Lists",
    url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    status: Status.Unknown,
  },
  {
    number: 19,
    title: "Remove Nth Node From End of List",
    url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    status: Status.Unknown,
  },
].map((problem) => ({ ...problem, category: "Linked Lists" }));

export const stacksAndQueues: Problem[] = [
  {
    number: 20,
    title: "Valid Parentheses",
    url: "https://leetcode.com/problems/valid-parentheses/",
    status: Status.Done,
  },
  {
    number: 155,
    title: "Min Stack",
    url: "https://leetcode.com/problems/min-stack/",
    status: Status.Attempted,
  },
  {
    number: 739,
    title: "Daily Temperatures",
    url: "https://leetcode.com/problems/daily-temperatures/",
    status: Status.Attempted,
  },
  {
    number: 232,
    title: "Implement Queue using Stacks",
    url: "https://leetcode.com/problems/implement-queue-using-stacks/",
    status: Status.Done,
  },
  {
    number: 225,
    title: "Implement Stack using Queues",
    url: "https://leetcode.com/problems/implement-stack-using-queues/",
    status: Status.Done,
  },
  {
    number: 394,
    title: "Decode String",
    url: "https://leetcode.com/problems/decode-string/",
    status: Status.Unknown,
  },
  {
    number: 316,
    title: "Remove Duplicate Letters",
    url: "https://leetcode.com/problems/remove-duplicate-letters/",
    status: Status.Unknown,
  },
  {
    number: 844,
    title: "Backspace String Compare",
    url: "https://leetcode.com/problems/backspace-string-compare/",
    status: Status.Unknown,
  },
].map((problem) => ({ ...problem, category: "Stacks and Queues" }));

export const trees: Problem[] = [
  {
    number: 94,
    title: "Binary Tree Inorder Traversal",
    url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    status: Status.Done,
  },
  {
    number: 104,
    title: "Maximum Depth of Binary Tree",
    url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    status: Status.Done,
  },
  {
    number: 235,
    title: "Lowest Common Ancestor of a Binary Search Tree",
    url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    status: Status.NotDone,
  },
  {
    number: 98,
    title: "Validate Binary Search Tree",
    url: "https://leetcode.com/problems/validate-binary-search-tree/",
    status: Status.Done,
  },
  {
    number: 101,
    title: "Symmetric Tree",
    url: "https://leetcode.com/problems/symmetric-tree/",
    status: Status.Unknown,
  },
  {
    number: 102,
    title: "Binary Tree Level Order Traversal",
    url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    status: Status.Unknown,
  },
  {
    number: 105,
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    status: Status.Unknown,
  },
  {
    number: 236,
    title: "Lowest Common Ancestor of a Binary Tree",
    url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    status: Status.Unknown,
  },
].map((problem) => ({ ...problem, category: "Trees" }));

export const graphs: Problem[] = [
  {
    number: 200,
    title: "Number of Islands",
    url: "https://leetcode.com/problems/number-of-islands/",
    status: Status.Done,
  },
  {
    number: 133,
    title: "Clone Graph",
    url: "https://leetcode.com/problems/clone-graph/",
    status: Status.Done,
  },
  {
    number: 207,
    title: "Course Schedule",
    url: "https://leetcode.com/problems/course-schedule/",
    status: Status.NotDone,
  },
  {
    number: 127,
    title: "Word Ladder",
    url: "https://leetcode.com/problems/word-ladder/",
    status: Status.NotDone,
  },
  {
    number: 323,
    title: "Number of Connected Components in an Undirected Graph",
    url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    status: Status.Unknown,
  },
  {
    number: 695,
    title: "Max Area of Island",
    url: "https://leetcode.com/problems/max-area-of-island/",
    status: Status.Unknown,
  },
  {
    number: 417,
    title: "Pacific Atlantic Water Flow",
    url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    status: Status.Unknown,
  },
  {
    number: 210,
    title: "Course Schedule II",
    url: "https://leetcode.com/problems/course-schedule-ii/",
    status: Status.Unknown,
  },
].map((problem) => ({ ...problem, category: "Graphs" }));

export const dynamicProgramming: Problem[] = [
  {
    number: 70,
    title: "Climbing Stairs",
    url: "https://leetcode.com/problems/climbing-stairs/",
    status: Status.Done,
  },
  {
    number: 198,
    title: "House Robber",
    url: "https://leetcode.com/problems/house-robber/",
    status: Status.Done,
  },
  {
    number: 322,
    title: "Coin Change",
    url: "https://leetcode.com/problems/coin-change/",
    status: Status.Attempted,
  },
  {
    number: 1143,
    title: "Longest Common Subsequence",
    url: "https://leetcode.com/problems/longest-common-subsequence/",
    status: Status.NotDone,
  },
  {
    number: 53,
    title: "Maximum Subarray",
    url: "https://leetcode.com/problems/maximum-subarray/",
    status: Status.Unknown,
  },
  {
    number: 300,
    title: "Longest Increasing Subsequence",
    url: "https://leetcode.com/problems/longest-increasing-subsequence/",
    status: Status.Unknown,
  },
  {
    number: 647,
    title: "Palindromic Substrings",
    url: "https://leetcode.com/problems/palindromic-substrings/",
    status: Status.Unknown,
  },
  {
    number: 518,
    title: "Coin Change II",
    url: "https://leetcode.com/problems/coin-change-ii/",
    status: Status.Unknown,
  },
].map((problem) => ({ ...problem, category: "Dynamic Programming" }));

export const greedyAlgorithms: Problem[] = [
  {
    number: 56,
    title: "Merge Intervals",
    url: "https://leetcode.com/problems/merge-intervals/",
    status: Status.NotDone,
  },
  {
    number: 435,
    title: "Non-overlapping Intervals",
    url: "https://leetcode.com/problems/non-overlapping-intervals/",
    status: Status.NotDone,
  },
  {
    number: 452,
    title: "Minimum Number of Arrows to Burst Balloons",
    url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
    status: Status.NotDone,
  },
  {
    number: 406,
    title: "Queue Reconstruction by Height",
    url: "https://leetcode.com/problems/queue-reconstruction-by-height/",
    status: Status.Unknown,
  },
  {
    number: 763,
    title: "Partition Labels",
    url: "https://leetcode.com/problems/partition-labels/",
    status: Status.Unknown,
  },
  {
    number: 134,
    title: "Gas Station",
    url: "https://leetcode.com/problems/gas-station/",
    status: Status.Unknown,
  },
  {
    number: 621,
    title: "Task Scheduler",
    url: "https://leetcode.com/problems/task-scheduler/",
    status: Status.Unknown,
  },
].map((problem) => ({ ...problem, category: "Greedy Algorithms" }));

export const backtracking: Problem[] = [
  {
    number: 78,
    title: "Subsets",
    url: "https://leetcode.com/problems/subsets/",
    status: Status.NotDone,
  },
  {
    number: 46,
    title: "Permutations",
    url: "https://leetcode.com/problems/permutations/",
    status: Status.NotDone,
  },
  {
    number: 39,
    title: "Combination Sum",
    url: "https://leetcode.com/problems/combination-sum/",
    status: Status.NotDone,
  },
  {
    number: 37,
    title: "Sudoku Solver",
    url: "https://leetcode.com/problems/sudoku-solver/",
    status: Status.NotDone,
  },
  {
    number: 77,
    title: "Combinations",
    url: "https://leetcode.com/problems/combinations/",
    status: Status.Unknown,
  },
  {
    number: 79,
    title: "Word Search",
    url: "https://leetcode.com/problems/word-search/",
    status: Status.Unknown,
  },
  {
    number: 90,
    title: "Subsets II",
    url: "https://leetcode.com/problems/subsets-ii/",
    status: Status.Unknown,
  },
  {
    number: 51,
    title: "N-Queens",
    url: "https://leetcode.com/problems/n-queens/",
    status: Status.Unknown,
  },
].map((problem) => ({ ...problem, category: "Backtracking" }));

export const tries: Problem[] = [
  {
    number: 208,
    title: "Implement Trie",
    url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    status: Status.NotDone,
  },
  {
    number: 212,
    title: "Word Search II",
    url: "https://leetcode.com/problems/word-search-ii/",
    status: Status.NotDone,
  },
  {
    number: 211,
    title: "Design Add and Search Words Data Structure",
    url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    status: Status.Unknown,
  },
  {
    number: 14,
    title: "Longest Common Prefix",
    url: "https://leetcode.com/problems/longest-common-prefix/",
    status: Status.Unknown,
  },
  {
    number: 1268,
    title: "Search Suggestions System",
    url: "https://leetcode.com/problems/search-suggestions-system/",
    status: Status.Unknown,
  },
  {
    number: 676,
    title: "Implement Magic Dictionary",
    url: "https://leetcode.com/problems/implement-magic-dictionary/",
    status: Status.Unknown,
  },
].map((problem) => ({ ...problem, category: "Tries" }));

export const heapsAndPriorityQueues: Problem[] = [
  {
    number: 215,
    title: "Kth Largest Element",
    url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    status: Status.Done,
  },
  {
    number: 23,
    title: "Merge K Sorted Lists",
    url: "https://leetcode.com/problems/merge-k-sorted-lists/",
    status: Status.NotDone,
  },
  {
    number: 347,
    title: "Top K Frequent Elements",
    url: "https://leetcode.com/problems/top-k-frequent-elements/",
    status: Status.Unknown,
  },
  {
    number: 973,
    title: "K Closest Points to Origin",
    url: "https://leetcode.com/problems/k-closest-points-to-origin/",
    status: Status.Unknown,
  },
  {
    number: 295,
    title: "Find Median from Data Stream",
    url: "https://leetcode.com/problems/find-median-from-data-stream/",
    status: Status.Unknown,
  },
  {
    number: 658,
    title: "Find K Closest Elements",
    url: "https://leetcode.com/problems/find-k-closest-elements/",
    status: Status.Unknown,
  },
].map((problem) => ({ ...problem, category: "Heaps" }));

export const problems = [
  ...arraysAndHashing,
  ...binarySearch,
  ...linkedLists,
  ...stacksAndQueues,
  ...trees,
  ...graphs,
  ...dynamicProgramming,
  ...greedyAlgorithms,
  ...backtracking,
  ...tries,
  ...heapsAndPriorityQueues,
];

export const numProblems = problems.length;
export const numCompleted = problems.filter(
  (problem) => problem.status === Status.Done,
).length;
