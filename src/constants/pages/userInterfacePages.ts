import { PageMetadata } from "@/types/pageMetadata";
import { Subject } from "@/types/subject";

export const userInterfacePages: PageMetadata[] = [
  {
    title: "Infinite Scroll",
    path: "/notes/user-interface/infinite-scroll",
    description: "Infinite Scroll.",
  },
  {
    title: "Whiteboard",
    path: "/notes/user-interface/whiteboard",
    description: "Whiteboard.",
  },
].map((page) => ({
  ...page,
  subject: Subject.UserInterface,
}));
