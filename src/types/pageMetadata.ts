import { Subject } from "@/types/subject";

export type PageMetadata = {
  title: string;
  slug: string;
  description: string;
  subject: Subject;
  publishedAt?: string;
};
