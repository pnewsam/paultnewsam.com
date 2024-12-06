"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { Table } from "@/components/Table";
import { ExternalLink } from "@/components/typography/ExternalLink";
import { numCompleted, numLeetcodeProblems } from "@/constants/problems";
import { Importance, LeetcodeProblem, Status } from "@/types/leetcodeProblem";
import { Topic } from "@/types/topic";

import { ImportanceBadge } from "../../_components/ImportanceBadge";
import { StatusText } from "../../_components/StatusText";

const PAGE_SIZE = 10;

export function ProblemsTable({ problems }: { problems: LeetcodeProblem[] }) {
  const [search, setSearch] = useState("");
  const [importance, setImportance] = useState<Importance | "None">("None");
  const [topic, setTopic] = useState<Topic | "None">("None");
  const [page, setPage] = useState(1);

  const filteredProblems = problems.filter(
    (problem) =>
      problem.title.toLowerCase().includes(search.toLowerCase()) &&
      (topic && topic !== "None" ? problem.topic === topic : true) &&
      (importance && importance !== "None"
        ? problem.importance === importance
        : true),
  );

  const onSelectTopic = (value: string) => {
    setTopic(value as Topic);
    setPage(1);
  };

  const onSelectImportance = (value: string) => {
    setImportance(value as Importance);
    setPage(1);
  };

  const maxPage = Math.ceil(filteredProblems.length / PAGE_SIZE);

  const nextPage = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="Search"
          size="lg"
          className="w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select onValueChange={onSelectImportance}>
          <SelectTrigger className="w-60" size="lg">
            <SelectValue>{importance ?? "Select an importance"}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"None"}>None</SelectItem>
            <SelectSeparator />
            {Object.values(Importance).map((importance) => (
              <SelectItem key={importance} value={importance}>
                {importance}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={onSelectTopic}>
          <SelectTrigger className="w-60" size="lg">
            <SelectValue>{topic ?? "Select a topic"}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"None"}>None</SelectItem>
            <SelectSeparator />
            <SelectGroup>
              {Object.values(Topic).map((topic) => (
                <SelectItem key={topic} value={topic}>
                  {topic}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-between gap-4 py-4">
        <span></span>
        <span>{numLeetcodeProblems} total</span>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Topic</th>
            <th>Importance</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredProblems
            .slice((page - 1) * 10, page * 10)
            .map((problem: LeetcodeProblem) => (
              <tr key={problem.id}>
                <td>{problem.id}</td>
                <td>
                  <ExternalLink href={problem.url}>
                    {problem.title}
                  </ExternalLink>
                </td>
                <td>{problem.topic}</td>
                <td>
                  <ImportanceBadge importance={problem.importance} />
                </td>
                <td>
                  <StatusText status={problem.status} />
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} />
            <td>
              Completed: {numCompleted}/{numLeetcodeProblems}&nbsp;(
              {Math.round(
                (numCompleted / numLeetcodeProblems) * 100,
              )}%)
            </td>
          </tr>
        </tfoot>
      </Table>

      <div className="flex justify-between items-center gap-4 py-4">
        <Button variant="default" onClick={previousPage} disabled={page === 1}>
          <ArrowLeftIcon className="w-4 h-4" />
          Previous
        </Button>
        <span>
          Page {page} of {maxPage}
        </span>
        <Button
          variant="default"
          onClick={nextPage}
          disabled={page === maxPage}
        >
          Next
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
