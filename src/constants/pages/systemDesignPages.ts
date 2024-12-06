import { PageMetadata } from "@/types/pageMetadata";
import { Subject } from "@/types/subject";

export const systemDesignPages: PageMetadata[] = [
  {
    title: "Latency Numbers",
    path: "/notes/system-design/latency-numbers",
    description: "A table of latency numbers for various operations.",
    published: false,
  },
  {
    title: "Data Type Sizes",
    path: "/notes/system-design/data-type-sizes",
    description: "A simple method for estimating the cost of a system.",
    published: false,
  },
  {
    title: "CAP Theorem",
    path: "/notes/system-design/cap-theorem",
    description: "Consistency, Availability, and Partition tolerance.",
    published: false,
  },
].map((page) => ({
  ...page,
  subject: Subject.SystemDesign,
}));
