import { Subject } from "@/types/subject";

export type PageMetadata = {
  title: string;
  path: string;
  tags: Subject[];
  description: string;
  subject: Subject;
};
