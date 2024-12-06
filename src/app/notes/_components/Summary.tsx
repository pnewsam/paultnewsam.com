import { ExternalLink as ExternalLinkIcon } from "lucide-react";

import { Table } from "@/components/Table";
import { ExternalLink } from "@/components/typography/ExternalLink";
import { Importance, Problem } from "@/constants/problems";

import { ImportanceBadge } from "./ImportanceBadge";
import { StatusText } from "./StatusText";

export const Summary = ({ problems }: { problems: Problem[] }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Problem</th>
          <th>Link</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {problems.map((problem, index) => (
          <tr key={problem.url}>
            <td>{problem.id}</td>

            <td>
              <div className="flex items-center gap-3">
                {problem.title}
                <ImportanceBadge
                  importance={problem.importance ?? Importance.Important}
                />
              </div>
            </td>
            <td>
              <ExternalLink
                className="inline-flex items-center gap-1"
                href={problem.url}
              >
                View
                <ExternalLinkIcon className="w-4 h-4" />
              </ExternalLink>
            </td>
            <td>
              <StatusText status={problem.status ?? "unknown"} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
