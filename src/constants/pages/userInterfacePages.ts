import { PageMetadata } from "@/types/pageMetadata";
import { Subject } from "@/types/subject";

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
  subject: Subject.UserInterface,
}));
