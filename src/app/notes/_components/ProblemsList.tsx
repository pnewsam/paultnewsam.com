import { Problem, Status } from "@/constants/problems";

import { StatusText } from "./StatusText";

export const ProblemsList = ({ problems }: { problems: Problem[] }) => (
  <ul className="list-disc list-inside">
    {problems.map((problem) => (
      <li key={problem.url}>
        <a
          className="hover:text-cyan-500 dark:hover:text-cyan-400"
          href={problem.url}
        >
          <span className="underline">{problem.title}</span>&nbsp;&nbsp;
          <StatusText status={problem.status ?? Status.Unknown} />
        </a>
      </li>
    ))}
  </ul>
);
