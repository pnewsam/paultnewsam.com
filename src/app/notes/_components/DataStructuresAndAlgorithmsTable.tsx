import { Table } from "@/components/Table";
import {
  numEssentialCompleted,
  numEssentialProblems,
} from "@/constants/problems";

import { rows } from "./DataStructuresAndAlgorithms.constants";
import { ProblemsList } from "./ProblemsList";
import { TextLink } from "./TextLink";

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
          <tr>
            <td>{row.number}</td>
            <td>
              <TextLink href={row.path}>{row.title}</TextLink>
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
            Completed: {numEssentialCompleted}/{numEssentialProblems}&nbsp;(
            {Math.round(
              (numEssentialCompleted / numEssentialProblems) * 100,
            )}%)
          </td>
        </tr>
      </tfoot>
    </Table>
  );
}
