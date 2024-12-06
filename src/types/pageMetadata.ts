import { Subject } from "@/types/subject";

export type PageMetadata = {
  title: string;
  path: string;
  description: string;
  subject: Subject;
  published: boolean;
};
