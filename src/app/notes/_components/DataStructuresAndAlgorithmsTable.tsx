import { Table } from "@/components/Table";
import { InternalLink } from "@/components/typography/InternalLink";
import {
  numImportantCompleted,
  numImportantProblems,
} from "@/constants/problems";

import { dataStructuresAndAlgorithmsPages } from "../_constants/pages";
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
        {dataStructuresAndAlgorithmsPages.map((page) => (
          <tr key={page.order}>
            <td>{page.order}</td>
            <td>
              <InternalLink className="font-medium text-xl" href={page.path}>
                {page.title}
              </InternalLink>
            </td>
            <td>{page.concepts}</td>
            <td>
              <ProblemsList problems={page.problems} />
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
