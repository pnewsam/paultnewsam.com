import { PageMetadata } from "@/types/pageMetadata";
import { Subject } from "@/types/subject";

export const blogPages: PageMetadata[] = [
  // {
  //   title: "Bag-of-Words in the Browser",
  //   slug: "bag-of-words-in-the-browser",
  //   date: "2024-09-10",
  //   tags: [Subject.Typescript, Subject.React],
  // },
  // {
  //   title: "Tree View Component in React",
  //   slug: "tree-view-component-in-react",
  //   date: "2024-09-10",
  //   tags: [Subject.Typescript, Subject.React],
  // },
  // {
  //   title: "Building a Tree View Component in React",
  //   slug: "building-a-tree-view-component-in-react",
  //   description: "Building a Tree View Component in React",
  //   publishedAt: "2024-11-22",
  //   subject: Subject.React,
  // }
  {
    title: "Visualizing Back-of-the-Envelope Numbers",
    slug: "visualizing-back-of-the-envelope-numbers",
    description: "Visualizing Back-of-the-Envelope Numbers",
    publishedAt: "2024-12-01",
    subject: Subject.SystemDesign,
  },
  {
    title: "A Basic Whiteboard and Infinite Scroll",
    slug: "a-basic-whiteboard-and-infinite-scroll",
    description: "A Basic Whiteboard and Infinite Scroll",
    publishedAt: "2024-11-25",
    subject: Subject.Typescript,
  },
  {
    title: "A Few Notes on Javascript",
    slug: "a-few-notes-on-javascript",
    description: "A Few Notes on Javascript",
    publishedAt: "2024-11-20",
    subject: Subject.Javascript,
  },
  {
    title: "Bag of Words in the Browser",
    slug: "bag-of-words-in-the-browser",
    description: "Bag of Words in the Browser",
    publishedAt: "2025-03-15",
    subject: Subject.Typescript,
  },
].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export const pageMetadataBySlug = blogPages.reduce(
  (acc, page) => {
    acc[page.slug] = page;
    return acc;
  },
  {} as Record<string, (typeof blogPages)[number]>,
);
