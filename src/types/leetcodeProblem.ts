import { Topic } from "./topic";

export enum Status {
  Done = "Done",
  Attempted = "Attempted",
  NotDone = "Not Done",
  Unknown = "Unknown",
}

export enum Importance {
  Important = "Important",
  Recommended = "Recommended",
  Optional = "Optional",
}

export type LeetcodeProblem = {
  id: number;
  title: string;
  url: string;
  status: Status;
  topic: Topic;
  importance: Importance;
};
