"use client";

import { useAtom } from "jotai";
import { useEffect } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import entities from "../_constants/data.json";
import items from "../_constants/data.json";
import BagOfWordsEmbedder from "../_services/bag-of-words-embedder";
import { embedderAtom, embeddingsAtom, resultsAtom } from "../_state/index";
import EmbeddingsView from "./embeddings-view";
import ListView from "./list-view";

export default function Layout() {
  const [, setEmbeddings] = useAtom(embeddingsAtom);
  const [, setEmbedder] = useAtom(embedderAtom);
  const [, setResults] = useAtom(resultsAtom);

  useEffect(() => {
    setResults(items);
    const embedder = BagOfWordsEmbedder({
      stringify: (entity: any) => `${entity.title} ${entity.content}`,
      entities,
    });
    setEmbedder(embedder);
    setEmbeddings(embedder.embeddings);
  }, []);

  return (
    <div className="">
      <Tabs defaultValue="search">
        <TabsList className="space-x-2 h-12">
          <TabsTrigger className="h-10" value="search">
            Search
          </TabsTrigger>
          <TabsTrigger className="h-10" value="embeddings">
            Embeddings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="search">
          <ListView />
        </TabsContent>
        <TabsContent value="embeddings">
          <EmbeddingsView />
        </TabsContent>
      </Tabs>
    </div>
  );
}
