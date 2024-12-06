import { PageMetadata } from "@/types/pageMetadata";
import { Subject } from "@/types/subject";

export const browserPages: PageMetadata[] = [
  {
    title: "Heap and Stack in Javascript Memory Management",
    path: "/notes/browser/heap-and-stack",
    description: "Heap and Stack in Javascript Memory Management",
    published: false,
  },

  {
    title: "The Javascript Engine",
    path: "/notes/browser/the-javascript-engine",
    description:
      "Javascript is a high-level interpreted language. What does that mean in practice?",
    published: false,
  },
].map((page) => ({
  ...page,
  subject: Subject.Javascript,
}));
