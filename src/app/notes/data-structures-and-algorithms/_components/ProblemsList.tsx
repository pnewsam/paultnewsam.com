import { ExternalLink } from "@/components/typography/ExternalLink";
import { LeetcodeProblem, Status } from "@/types/leetcodeProblem";

import { StatusText } from "./StatusText";

export const ProblemsList = ({ problems }: { problems: LeetcodeProblem[] }) => (
  <ul className="list-disc list-inside">
    {problems.map((problem) => (
      <li key={problem.url}>
        <ExternalLink href={problem.url}>
          <span className="underline">{problem.title}</span>&nbsp;&nbsp;
          <StatusText status={problem.status ?? Status.Unknown} />
        </ExternalLink>
      </li>
    ))}
  </ul>
);
