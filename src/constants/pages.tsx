enum Category {
  SystemDesign = "System Design",
  DataStructuresAndAlgorithms = "Data Structures and Algorithms",
}

export const systemDesignPages = [
  {
    title: "Latency Numbers",
    path: "/notes/system-design/latency-numbers",
    tags: ["Performance"],
  },
  {
    title: "Data Type Sizes",
    path: "/notes/system-design/data-type-sizes",
    tags: ["Performance"],
  },
  {
    title: "CAP Theorem",
    path: "/notes/system-design/cap-theorem",
    tags: [],
  },
].map((page) => ({
  ...page,
  category: Category.SystemDesign,
}));

export const dataStructuresAndAlgorithmsPages = [
  {
    title: "Arrays and Hashing",
    path: "/notes/data-structures-and-algorithms/arrays-and-hashing",
    tags: [],
  },
  {
    title: "Linked Lists",
    path: "/notes/data-structures-and-algorithms/linked-lists",
    tags: [],
  },
  {
    title: "Stacks and Queues",
    path: "/notes/data-structures-and-algorithms/stacks-and-queues",
    tags: [],
  },
  {
    title: "Trees",
    path: "/notes/data-structures-and-algorithms/trees",
    tags: [],
  },
  {
    title: "Heaps and Priority Queues",
    path: "/notes/data-structures-and-algorithms/heaps-and-priority-queues",
    tags: [],
  },
  {
    title: "Graphs",
    path: "/notes/data-structures-and-algorithms/graphs",
    tags: [],
  },
  {
    title: "Tries",
    path: "/notes/data-structures-and-algorithms/tries",
    tags: [],
  },
  {
    title: "Binary Search",
    path: "/notes/data-structures-and-algorithms/binary-search",
    tags: [],
  },
  {
    title: "Dynamic Programming",
    path: "/notes/data-structures-and-algorithms/dynamic-programming",
    tags: [],
  },
  {
    title: "Greedy Algorithms",
    path: "/notes/data-structures-and-algorithms/greedy-algorithms",
    tags: [],
  },
].map((page) => ({
  ...page,
  category: Category.DataStructuresAndAlgorithms,
}));

export const userInterfacePages = [
  {
    title: "Infinite Scroll",
    path: "/notes/user-interface/infinite-scroll",
    tags: [],
  },
  {
    title: "Whiteboard",
    path: "/notes/user-interface/whiteboard",
    tags: [],
  },
];

export const pages = [
  ...systemDesignPages,
  ...dataStructuresAndAlgorithmsPages,
];
