import { Subject } from "@/types/subject";
import { groupBy, keyBy } from "@/utils/array";

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
  tags: Subject[];
  description: string;
  category: Subject;
};

export const systemDesignPages: PageMetadata[] = [
  {
    title: "Latency Numbers",
    path: "/notes/system-design/latency-numbers",
    tags: [Subject.SystemDesign],
    description: "A table of latency numbers for various operations.",
  },
  {
    title: "Data Type Sizes",
    path: "/notes/system-design/data-type-sizes",
    tags: [Subject.SystemDesign],
    description: "A simple method for estimating the cost of a system.",
  },
  {
    title: "CAP Theorem",
    path: "/notes/system-design/cap-theorem",
    tags: [Subject.SystemDesign],
    description: "Consistency, Availability, and Partition tolerance.",
  },
].map((page) => ({
  ...page,
  category: Subject.SystemDesign,
}));

export const dataStructuresAndAlgorithmsPages: PageMetadata[] = [
  {
    title: "Arrays and Hashing",
    path: "/notes/data-structures-and-algorithms/arrays-and-hashing",
    tags: [Subject.DataStructuresAndAlgorithms],
    description: "Arrays and Hashing.",
  },
  {
    title: "Linked Lists",
    path: "/notes/data-structures-and-algorithms/linked-lists",
    tags: [Subject.DataStructuresAndAlgorithms],
    description: "Linked Lists.",
  },
  {
    title: "Stacks and Queues",
    path: "/notes/data-structures-and-algorithms/stacks-and-queues",
    tags: [Subject.DataStructuresAndAlgorithms],
    description: "Stacks and Queues.",
  },
  {
    title: "Trees",
    path: "/notes/data-structures-and-algorithms/trees",
    tags: [Subject.DataStructuresAndAlgorithms],
    description: "Trees.",
  },
  {
    title: "Heaps and Priority Queues",
    path: "/notes/data-structures-and-algorithms/heaps-and-priority-queues",
    tags: [Subject.DataStructuresAndAlgorithms],
    description: "Heaps and Priority Queues.",
  },
  {
    title: "Graphs",
    path: "/notes/data-structures-and-algorithms/graphs",
    tags: [Subject.DataStructuresAndAlgorithms],
    description: "Graphs.",
  },
  {
    title: "Tries",
    path: "/notes/data-structures-and-algorithms/tries",
    tags: [Subject.DataStructuresAndAlgorithms],
    description: "Tries.",
  },
  {
    title: "Binary Search",
    path: "/notes/data-structures-and-algorithms/binary-search",
    tags: [Subject.DataStructuresAndAlgorithms],
    description: "Binary Search.",
  },
  {
    title: "Dynamic Programming",
    path: "/notes/data-structures-and-algorithms/dynamic-programming",
    tags: [Subject.DataStructuresAndAlgorithms],
    description: "Dynamic Programming.",
  },
  {
    title: "Greedy Algorithms",
    path: "/notes/data-structures-and-algorithms/greedy-algorithms",
    tags: [Subject.DataStructuresAndAlgorithms],
    description: "Greedy Algorithms.",
  },
].map((page) => ({
  ...page,
  category: Subject.DataStructuresAndAlgorithms,
}));

export const userInterfacePages: PageMetadata[] = [
  {
    title: "Infinite Scroll",
    path: "/notes/user-interface/infinite-scroll",
    tags: [Subject.UserInterface],
    description: "Infinite Scroll.",
  },
  {
    title: "Whiteboard",
    path: "/notes/user-interface/whiteboard",
    tags: [Subject.UserInterface],
    description: "Whiteboard.",
  },
].map((page) => ({
  ...page,
  category: Subject.UserInterface,
}));

export const pages = [
  ...systemDesignPages,
  ...dataStructuresAndAlgorithmsPages,
  ...userInterfacePages,
];

export const pagesBySubject = groupBy(pages, "category");

export const pagesByPath = keyBy(pages, "path");
