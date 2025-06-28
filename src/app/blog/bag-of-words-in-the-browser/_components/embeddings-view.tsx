import { useAtom } from "jotai";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { embeddingsAtom } from "../_state/index";

export default function Embeddings() {
  const [embeddings] = useAtom(embeddingsAtom);

  return (
    <Card className="overflow-hidden">
      <Table className="overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from(embeddings.entries()).map(([id, value], index, arr) => (
            <TableRow
              key={id}
              className={index === arr.length - 1 ? "last-row" : ""}
            >
              <TableCell>{id}</TableCell>
              <TableCell className="text-xs font-mono">
                <p className="text-red-600 dark:text-red-400">
                  {JSON.stringify(value, null, 2)}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
