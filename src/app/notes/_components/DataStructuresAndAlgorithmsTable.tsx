import { Table } from "@/components/Table";
import { InternalLink } from "@/components/typography/InternalLink";
import {
  numImportantCompleted,
  numImportantProblems,
} from "@/constants/problems";

import { rows } from "./DataStructuresAndAlgorithms.constants";
import { ProblemsList } from "./ProblemsList";

export function DataStructuresAndAlgorithmsTable() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Week</th>
          <th>Topic</th>
          <th>Concepts</th>
          <th>Problems</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.order}>
            <td>{row.order}</td>
            <td>
              <InternalLink className="font-medium text-xl" href={row.path}>
                {row.title}
              </InternalLink>
            </td>
            <td>{row.concepts}</td>
            <td>
              <ProblemsList problems={row.problems} />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          {/* @ts-ignore */}
          <td colSpan={3} />
          <td>
            Completed: {numImportantCompleted}/{numImportantProblems}&nbsp;(
            {Math.round(
              (numImportantCompleted / numImportantProblems) * 100,
            )}%)
          </td>
        </tr>
      </tfoot>
    </Table>
  );
}
