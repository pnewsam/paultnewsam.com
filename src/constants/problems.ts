import { Importance, LeetcodeProblem, Status } from "@/types/leetcodeProblem";
import { Topic } from "@/types/topic";

export const arraysAndHashing: LeetcodeProblem[] = [
  {
    id: 1,
    title: "Two Sum",
    url: "https://leetcode.com/problems/two-sum/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 242,
    title: "Valid Anagram",
    url: "https://leetcode.com/problems/valid-anagram/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 49,
    title: "Group Anagrams",
    url: "https://leetcode.com/problems/group-anagrams/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 53,
    title: "Maximum Subarray",
    url: "https://leetcode.com/problems/maximum-subarray/",
    status: Status.Done,
    importance: Importance.Optional,
  },
  {
    id: 238,
    title: "Product of Array Except Self",
    url: "https://leetcode.com/problems/product-of-array-except-self/",
    status: Status.Done,
    importance: Importance.Optional,
  },
  {
    id: 36,
    title: "Valid Sudoku",
    url: "https://leetcode.com/problems/valid-sudoku/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 217,
    title: "Contains Duplicate",
    url: "https://leetcode.com/problems/contains-duplicate/",
    status: Status.Done,
    importance: Importance.Optional,
  },
  {
    id: 560,
    title: "Subarray Sum Equals K",
    url: "https://leetcode.com/problems/subarray-sum-equals-k/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
].map((problem) => ({ ...problem, topic: Topic.ArraysAndHashing }));

export const slidingWindow: LeetcodeProblem[] = [
  {
    id: 121,
    title: "Best Time to Buy and Sell Stock",
    url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 209,
    title: "Minimum Size Subarray Sum",
    url: "https://leetcode.com/problems/minimum-size-subarray-sum/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
].map((problem) => ({ ...problem, topic: Topic.SlidingWindow }));

export const twoPointers: LeetcodeProblem[] = [
  {
    id: 125,
    title: "Valid Palindrome",
    url: "https://leetcode.com/problems/valid-palindrome/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 167,
    title: "Two Sum II (sorted array)",
    url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 11,
    title: "Container With Most Water",
    url: "https://leetcode.com/problems/container-with-most-water/",
    status: Status.Done,
    importance: Importance.Important,
  },
].map((problem) => ({ ...problem, topic: Topic.TwoPointers }));

export const binarySearch: LeetcodeProblem[] = [
  {
    id: 704,
    title: "Binary Search",
    url: "https://leetcode.com/problems/binary-search/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 278,
    title: "First Bad Version",
    url: "https://leetcode.com/problems/first-bad-version/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 33,
    title: "Search in Rotated Sorted Array",
    url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 153,
    title: "Find Minimum in Rotated Sorted Array",
    url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    status: Status.Done,
    importance: Importance.Optional,
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 162,
    title: "Find Peak Element",
    url: "https://leetcode.com/problems/find-peak-element/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 702,
    title: "Search in a Sorted Array of Unknown Size",
    url: "https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 240,
    title: "Search a 2D Matrix II",
    url: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
].map((problem) => ({ ...problem, topic: Topic.BinarySearch }));

export const linkedLists: LeetcodeProblem[] = [
  {
    id: 206,
    title: "Reverse Linked List",
    url: "https://leetcode.com/problems/reverse-linked-list/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 83,
    title: "Merge Two Sorted Lists",
    url: "https://leetcode.com/problems/merge-two-sorted-lists/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 141,
    title: "Linked List Cycle",
    url: "https://leetcode.com/problems/linked-list-cycle/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 143,
    title: "Reorder List",
    url: "https://leetcode.com/problems/reorder-list/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 160,
    title: "Intersection of Two Linked Lists",
    url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 19,
    title: "Remove Nth Node From End of List",
    url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
].map((problem) => ({ ...problem, topic: Topic.LinkedLists }));

export const stacksAndQueues: LeetcodeProblem[] = [
  {
    id: 20,
    title: "Valid Parentheses",
    url: "https://leetcode.com/problems/valid-parentheses/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 232,
    title: "Implement Queue using Stacks",
    url: "https://leetcode.com/problems/implement-queue-using-stacks/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 739,
    title: "Daily Temperatures",
    url: "https://leetcode.com/problems/daily-temperatures/",
    status: Status.Attempted,
    importance: Importance.Important,
  },
  {
    id: 225,
    title: "Implement Stack using Queues",
    url: "https://leetcode.com/problems/implement-stack-using-queues/",
    status: Status.Done,
    importance: Importance.Optional,
  },
  {
    id: 394,
    title: "Decode String",
    url: "https://leetcode.com/problems/decode-string/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 316,
    title: "Remove Duplicate Letters",
    url: "https://leetcode.com/problems/remove-duplicate-letters/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 844,
    title: "Backspace String Compare",
    url: "https://leetcode.com/problems/backspace-string-compare/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
].map((problem) => ({ ...problem, topic: Topic.StacksAndQueues }));

export const trees: LeetcodeProblem[] = [
  {
    id: 104,
    title: "Maximum Depth of Binary Tree",
    url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 100,
    title: "Same Tree",
    url: "https://leetcode.com/problems/same-tree/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 226,
    title: "Invert Binary Tree",
    url: "https://leetcode.com/problems/invert-binary-tree/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 102,
    title: "Binary Tree Level Order Traversal",
    url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    status: Status.NotDone,
    importance: Importance.Recommended,
  },
  {
    id: 94,
    title: "Binary Tree Inorder Traversal",
    url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    status: Status.Done,
    importance: Importance.Optional,
  },
  {
    id: 235,
    title: "Lowest Common Ancestor of a Binary Search Tree",
    url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 98,
    title: "Validate Binary Search Tree",
    url: "https://leetcode.com/problems/validate-binary-search-tree/",
    status: Status.Done,
    importance: Importance.Optional,
  },
  {
    id: 101,
    title: "Symmetric Tree",
    url: "https://leetcode.com/problems/symmetric-tree/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 105,
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 236,
    title: "Lowest Common Ancestor of a Binary Tree",
    url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
].map((problem) => ({ ...problem, topic: Topic.Trees }));

export const graphs: LeetcodeProblem[] = [
  {
    id: 200,
    title: "Number of Islands",
    url: "https://leetcode.com/problems/number-of-islands/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 133,
    title: "Clone Graph",
    url: "https://leetcode.com/problems/clone-graph/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 207,
    title: "Course Schedule",
    url: "https://leetcode.com/problems/course-schedule/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 127,
    title: "Word Ladder",
    url: "https://leetcode.com/problems/word-ladder/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 323,
    title: "Number of Connected Components in an Undirected Graph",
    url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 695,
    title: "Max Area of Island",
    url: "https://leetcode.com/problems/max-area-of-island/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 417,
    title: "Pacific Atlantic Water Flow",
    url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 210,
    title: "Course Schedule II",
    url: "https://leetcode.com/problems/course-schedule-ii/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
].map((problem) => ({ ...problem, topic: Topic.Graphs }));

export const dynamicProgramming: LeetcodeProblem[] = [
  {
    id: 70,
    title: "Climbing Stairs",
    url: "https://leetcode.com/problems/climbing-stairs/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 198,
    title: "House Robber",
    url: "https://leetcode.com/problems/house-robber/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 322,
    title: "Coin Change",
    url: "https://leetcode.com/problems/coin-change/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 300,
    title: "Longest Increasing Subsequence",
    url: "https://leetcode.com/problems/longest-increasing-subsequence/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 1143,
    title: "Longest Common Subsequence",
    url: "https://leetcode.com/problems/longest-common-subsequence/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 647,
    title: "Palindromic Substrings",
    url: "https://leetcode.com/problems/palindromic-substrings/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
  {
    id: 518,
    title: "Coin Change II",
    url: "https://leetcode.com/problems/coin-change-ii/",
    status: Status.Unknown,
    importance: Importance.Optional,
  },
].map((problem) => ({ ...problem, topic: Topic.DynamicProgramming }));

export const greedyAlgorithms: LeetcodeProblem[] = [
  {
    id: 55,
    title: "Jump Game",
    url: "https://leetcode.com/problems/jump-game/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 621,
    title: "Task Scheduler",
    url: "https://leetcode.com/problems/task-scheduler/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 56,
    title: "Merge Intervals",
    url: "https://leetcode.com/problems/merge-intervals/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 435,
    title: "Non-overlapping Intervals",
    url: "https://leetcode.com/problems/non-overlapping-intervals/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 452,
    title: "Minimum Number of Arrows to Burst Balloons",
    url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 406,
    title: "Queue Reconstruction by Height",
    url: "https://leetcode.com/problems/queue-reconstruction-by-height/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 763,
    title: "Partition Labels",
    url: "https://leetcode.com/problems/partition-labels/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 134,
    title: "Gas Station",
    url: "https://leetcode.com/problems/gas-station/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
].map((problem) => ({ ...problem, topic: Topic.GreedyAlgorithms }));

export const backtracking: LeetcodeProblem[] = [
  {
    id: 78,
    title: "Subsets",
    url: "https://leetcode.com/problems/subsets/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 46,
    title: "Permutations",
    url: "https://leetcode.com/problems/permutations/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 39,
    title: "Combination Sum",
    url: "https://leetcode.com/problems/combination-sum/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 51,
    title: "N-Queens",
    url: "https://leetcode.com/problems/n-queens/",
    status: Status.NotDone,
    importance: Importance.Recommended,
  },
  {
    id: 37,
    title: "Sudoku Solver",
    url: "https://leetcode.com/problems/sudoku-solver/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 77,
    title: "Combinations",
    url: "https://leetcode.com/problems/combinations/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 79,
    title: "Word Search",
    url: "https://leetcode.com/problems/word-search/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 90,
    title: "Subsets II",
    url: "https://leetcode.com/problems/subsets-ii/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
].map((problem) => ({ ...problem, topic: Topic.Backtracking }));

export const tries: LeetcodeProblem[] = [
  {
    id: 208,
    title: "Implement Trie",
    url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 211,
    title: "Design Add and Search Words Data Structure",
    url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 212,
    title: "Word Search II",
    url: "https://leetcode.com/problems/word-search-ii/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 14,
    title: "Longest Common Prefix",
    url: "https://leetcode.com/problems/longest-common-prefix/",
    status: Status.Done,
    importance: Importance.Optional,
  },
  {
    id: 1268,
    title: "Search Suggestions System",
    url: "https://leetcode.com/problems/search-suggestions-system/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 676,
    title: "Implement Magic Dictionary",
    url: "https://leetcode.com/problems/implement-magic-dictionary/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
].map((problem) => ({ ...problem, topic: Topic.Tries }));

export const heapsAndPriorityQueues: LeetcodeProblem[] = [
  {
    id: 215,
    title: "Kth Largest Element",
    url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 23,
    title: "Merge K Sorted Lists",
    url: "https://leetcode.com/problems/merge-k-sorted-lists/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 347,
    title: "Top K Frequent Elements",
    url: "https://leetcode.com/problems/top-k-frequent-elements/",
    status: Status.NotDone,
    importance: Importance.Important,
  },
  {
    id: 1046,
    title: "Last Stone Weight",
    url: "https://leetcode.com/problems/last-stone-weight/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 973,
    title: "K Closest Points to Origin",
    url: "https://leetcode.com/problems/k-closest-points-to-origin/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 295,
    title: "Find Median from Data Stream",
    url: "https://leetcode.com/problems/find-median-from-data-stream/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
  {
    id: 658,
    title: "Find K Closest Elements",
    url: "https://leetcode.com/problems/find-k-closest-elements/",
    status: Status.NotDone,
    importance: Importance.Optional,
  },
].map((problem) => ({ ...problem, topic: Topic.HeapsAndPriorityQueues }));

export const bitManipulation: LeetcodeProblem[] = [
  {
    id: 191,
    title: "Number of 1 Bits",
    url: "https://leetcode.com/problems/number-of-1-bits/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 338,
    title: "Counting Bits",
    url: "https://leetcode.com/problems/counting-bits/",
    status: Status.Done,
    importance: Importance.Important,
  },
  {
    id: 268,
    title: "Missing Number",
    url: "https://leetcode.com/problems/missing-number/",
    status: Status.Done,
    importance: Importance.Important,
  },
].map((problem) => ({ ...problem, topic: Topic.BitManipulation }));

export const problems = [
  ...arraysAndHashing,
  ...slidingWindow,
  ...twoPointers,
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
  ...bitManipulation,
];

export const numLeetcodeProblems = problems.length;
export const numCompleted = problems.filter(
  (problem) => problem.status === Status.Done,
).length;

const essentialLeetcodeProblems = problems.filter(
  (problem) => problem.importance === Importance.Important,
);

export const numImportantLeetcodeProblems = essentialLeetcodeProblems.length;
export const numImportantCompleted = essentialLeetcodeProblems.filter(
  (problem) => problem.status === Status.Done,
).length;
