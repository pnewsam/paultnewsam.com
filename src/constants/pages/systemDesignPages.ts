import { PageMetadata } from "@/types/pageMetadata";
import { Subject } from "@/types/subject";

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
  subject: Subject.SystemDesign,
}));
