import { ExternalLink } from "lucide-react";

import { Card } from "@/components/Card";
import { Table } from "@/components/Table";
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
              <a
                className="inline-flex items-center gap-1 text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-500 underline decoration-transparent hover:decoration-cyan-400"
                href={problem.url}
              >
                View
                <ExternalLink className="w-4 h-4" />
              </a>
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
