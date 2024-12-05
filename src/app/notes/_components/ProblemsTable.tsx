"use client";

import { useState } from "react";

import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Table } from "@/components/Table";
import { ExternalLink } from "@/components/typography/ExternalLink";
import {
  Problem,
  numCompleted,
  numProblems,
  problems,
} from "@/constants/problems";

export function ProblemsTable() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="flex justify-between gap-4 py-2">
        <Input
          type="text"
          placeholder="Search"
          size="lg"
          className="w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex justify-between gap-4 py-2">
        <span></span>
        <span>{numProblems} total</span>
      </div>

      <Card>
        <Table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Concepts</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem: Problem) => (
              <tr key={problem.number}>
                <td>{problem.number}</td>
                <td>
                  <ExternalLink href={problem.url}>
                    {problem.title}
                  </ExternalLink>
                </td>
                <td>{problem.category}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} />
              <td>
                Completed: {numCompleted}/{numProblems}&nbsp;(
                {Math.round((numCompleted / numProblems) * 100)}%)
              </td>
            </tr>
          </tfoot>
        </Table>
      </Card>
    </>
  );
}
