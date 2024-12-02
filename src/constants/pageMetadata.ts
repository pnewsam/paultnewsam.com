import { groupBy, keyBy } from "@/utils/array";

export enum Category {
  SystemDesign = "System Design",
  DataStructuresAndAlgorithms = "Data Structures and Algorithms",
  UserInterface = "User Interface",
  Frameworks = "Frameworks",
}

export enum Tag {
  HTML = "HTML",
  CSS = "CSS",
  Javascript = "Javascript",
  Typescript = "Typescript",
  React = "React",
  NextJS = "NextJS",
}

type PageMetadata = {
  title: string;
  path: string;
  tags: Category[];
  description: string;
  category: Category;
};

export const systemDesignPages: PageMetadata[] = [
  {
    title: "Latency Numbers",
    path: "/notes/system-design/latency-numbers",
    tags: [Category.SystemDesign],
    description: "A table of latency numbers for various operations.",
  },
  {
    title: "Data Type Sizes",
    path: "/notes/system-design/data-type-sizes",
    tags: [Category.SystemDesign],
    description: "A simple method for estimating the cost of a system.",
  },
  {
    title: "CAP Theorem",
    path: "/notes/system-design/cap-theorem",
    tags: [Category.SystemDesign],
    description: "Consistency, Availability, and Partition tolerance.",
  },
].map((page) => ({
  ...page,
  category: Category.SystemDesign,
}));

export const dataStructuresAndAlgorithmsPages: PageMetadata[] = [
  {
    title: "Arrays and Hashing",
    path: "/notes/data-structures-and-algorithms/arrays-and-hashing",
    tags: [Category.DataStructuresAndAlgorithms],
    description: "Arrays and Hashing.",
  },
  {
    title: "Linked Lists",
    path: "/notes/data-structures-and-algorithms/linked-lists",
    tags: [Category.DataStructuresAndAlgorithms],
    description: "Linked Lists.",
  },
  {
    title: "Stacks and Queues",
    path: "/notes/data-structures-and-algorithms/stacks-and-queues",
    tags: [Category.DataStructuresAndAlgorithms],
    description: "Stacks and Queues.",
  },
  {
    title: "Trees",
    path: "/notes/data-structures-and-algorithms/trees",
    tags: [Category.DataStructuresAndAlgorithms],
    description: "Trees.",
  },
  {
    title: "Heaps and Priority Queues",
    path: "/notes/data-structures-and-algorithms/heaps-and-priority-queues",
    tags: [Category.DataStructuresAndAlgorithms],
    description: "Heaps and Priority Queues.",
  },
  {
    title: "Graphs",
    path: "/notes/data-structures-and-algorithms/graphs",
    tags: [Category.DataStructuresAndAlgorithms],
    description: "Graphs.",
  },
  {
    title: "Tries",
    path: "/notes/data-structures-and-algorithms/tries",
    tags: [Category.DataStructuresAndAlgorithms],
    description: "Tries.",
  },
  {
    title: "Binary Search",
    path: "/notes/data-structures-and-algorithms/binary-search",
    tags: [Category.DataStructuresAndAlgorithms],
    description: "Binary Search.",
  },
  {
    title: "Dynamic Programming",
    path: "/notes/data-structures-and-algorithms/dynamic-programming",
    tags: [Category.DataStructuresAndAlgorithms],
    description: "Dynamic Programming.",
  },
  {
    title: "Greedy Algorithms",
    path: "/notes/data-structures-and-algorithms/greedy-algorithms",
    tags: [Category.DataStructuresAndAlgorithms],
    description: "Greedy Algorithms.",
  },
].map((page) => ({
  ...page,
  category: Category.DataStructuresAndAlgorithms,
}));

export const userInterfacePages: PageMetadata[] = [
  {
    title: "Infinite Scroll",
    path: "/notes/user-interface/infinite-scroll",
    tags: [Category.UserInterface],
    description: "Infinite Scroll.",
  },
  {
    title: "Whiteboard",
    path: "/notes/user-interface/whiteboard",
    tags: [Category.UserInterface],
    description: "Whiteboard.",
  },
].map((page) => ({
  ...page,
  category: Category.UserInterface,
}));

export const pages = [
  ...systemDesignPages,
  ...dataStructuresAndAlgorithmsPages,
  ...userInterfacePages,
];

export const pagesByCategory = groupBy(pages, "category");

export const pagesByPath = keyBy(pages, "path");
