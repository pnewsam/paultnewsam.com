import { useAtom } from "jotai";

import { Body } from "@/components/typography/Body";
import { Card } from "@/components/ui/card";

import { embeddingsAtom, resultsAtom } from "../_state/index";
import ListViewEmptyState from "./list-view-empty-state";
import SimilarityBadge from "./similarity-badge";

export default function ListViewList() {
  const [results] = useAtom(resultsAtom);
  const [embeddings] = useAtom(embeddingsAtom);

  return (
    <Card id="results">
      {results.length === 0 && <ListViewEmptyState />}
      {results.map((result) => (
        <div key={result.id} className="border-b border-border">
          <div className="p-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg tracking-tight font-medium flex items-center gap-2">
                {result.title}
                <code className="text-red-600 font-mono bg-muted-background px-1 py-0 text-xs rounded-md border border-border">
                  ID: {result.id}
                </code>
              </h3>
              <div className="flex items-center gap-2">
                {result.similarity && (
                  <SimilarityBadge similarity={result.similarity} />
                )}
              </div>
            </div>
            <Body size="xs" className="mb-0">
              {result.content}
            </Body>
          </div>
          <div className="px-4 py-4 overflow-scroll border-t border-border">
            <p className="text-xs font-mono text-red-600 dark:text-red-400 rounded-md text-wrap">
              {JSON.stringify(embeddings.get(result.id))}
            </p>
          </div>
        </div>
      ))}
    </Card>
  );
}
