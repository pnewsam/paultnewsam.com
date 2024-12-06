"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
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
import {
  Category,
  Importance,
  Problem,
  numCompleted,
  numProblems,
} from "@/constants/problems";

import { ImportanceBadge } from "./ImportanceBadge";
import { StatusText } from "./StatusText";

const PAGE_SIZE = 10;

export function ProblemsTable({ problems }: { problems: Problem[] }) {
  const [search, setSearch] = useState("");
  const [importance, setImportance] = useState<Importance | "None">("None");
  const [category, setCategory] = useState<Category | "None">("None");
  const [page, setPage] = useState(1);

  const filteredProblems = problems.filter(
    (problem) =>
      problem.title.toLowerCase().includes(search.toLowerCase()) &&
      (category && category !== "None"
        ? problem.category === category
        : true) &&
      (importance && importance !== "None"
        ? problem.importance === importance
        : true),
  );

  const onSelectCategory = (value: string) => {
    setCategory(value as Category);
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

        <Select onValueChange={onSelectCategory}>
          <SelectTrigger className="w-60" size="lg">
            <SelectValue>{category ?? "Select a category"}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"None"}>None</SelectItem>
            <SelectSeparator />
            <SelectGroup>
              {Object.values(Category).map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-between gap-4 py-4">
        <span></span>
        <span>{numProblems} total</span>
      </div>

      <Card className="overflow-scroll">
        <Table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Category</th>
              <th>Importance</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProblems
              .slice((page - 1) * 10, page * 10)
              .map((problem: Problem) => (
                <tr key={problem.id}>
                  <td>{problem.id}</td>
                  <td>
                    <ExternalLink href={problem.url}>
                      {problem.title}
                    </ExternalLink>
                  </td>
                  <td>{problem.category}</td>
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
                Completed: {numCompleted}/{numProblems}&nbsp;(
                {Math.round((numCompleted / numProblems) * 100)}%)
              </td>
            </tr>
          </tfoot>
        </Table>
      </Card>

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
