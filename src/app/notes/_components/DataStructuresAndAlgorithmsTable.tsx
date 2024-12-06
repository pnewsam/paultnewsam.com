import { Table } from "@/components/Table";
import { InternalLink } from "@/components/typography/InternalLink";
import { dataStructuresAndAlgorithmsPages } from "@/constants/pages";
import {
  numImportantCompleted,
  numImportantLeetcodeProblems,
} from "@/constants/problems";

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
            Completed: {numImportantCompleted}/{numImportantLeetcodeProblems}
            &nbsp;(
            {Math.round(
              (numImportantCompleted / numImportantLeetcodeProblems) * 100,
            )}
            %)
          </td>
        </tr>
      </tfoot>
    </Table>
  );
}
