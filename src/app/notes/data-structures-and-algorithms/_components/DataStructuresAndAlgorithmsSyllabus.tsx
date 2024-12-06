import { Table } from "@/components/Table";
import { InternalLink } from "@/components/typography/InternalLink";
import { dsaPages } from "@/constants/pages/dsaPages";
import {
  numImportantCompleted,
  numImportantLeetcodeProblems,
} from "@/constants/problems";
import { Importance } from "@/types/leetcodeProblem";

import { ProblemsList } from "./ProblemsList";

export function DataStructuresAndAlgorithmsSyllabus() {
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
        {dsaPages.map((page) => (
          <tr key={page.order}>
            <td>{page.order}</td>
            <td>
              <InternalLink className="font-medium text-xl" href={page.path}>
                {page.title}
              </InternalLink>
            </td>
            <td>{page.description}</td>
            <td>
              <ProblemsList
                problems={page.problems.filter(
                  (problem) => problem.importance === Importance.Important,
                )}
              />
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
