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
  //   date: "2024-09-10",
  //   tags: [Subject.Typescript, Subject.React],
  // },
  {
    title: "Visualizing Back-of-the-Envelope Numbers",
    slug: "visualizing-back-of-the-envelope-numbers",
    description: "Visualizing Back-of-the-Envelope Numbers",
    publishedAt: "2024-12-01",
    subject: Subject.SystemDesign,
  },
  {
    title: "Notes on the Javascript Engine",
    slug: "notes-on-the-javascript-engine",
    description:
      "Javascript is a high-level interpreted language. What does that mean in practice?",
    publishedAt: "2024-12-01",
    subject: Subject.Javascript,
  },
  {
    title: "Basic Infinite Scroll",
    slug: "basic-infinite-scroll",
    description: "Basic Infinite Scroll",
    publishedAt: "2024-11-25",
    subject: Subject.Typescript,
  },
  {
    title: "Basic Canvas Whiteboard",
    slug: "basic-canvas-whiteboard",
    description: "Basic Canvas Whiteboard",
    publishedAt: "2024-11-27",
    subject: Subject.Javascript,
  },
  {
    title: "Notes on the Javascript Engine",
    slug: "notes-on-the-javascript-engine",
    description: "Notes on the Javascript Engine",
    publishedAt: "2024-09-10",
    subject: Subject.Javascript,
  },
  {
    title: "Notes on Memory Management in Javascript",
    slug: "notes-on-memory-management-in-javascript",
    description: "Notes on Memory Management in Javascript",
    publishedAt: "2024-09-10",
    subject: Subject.Javascript,
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
