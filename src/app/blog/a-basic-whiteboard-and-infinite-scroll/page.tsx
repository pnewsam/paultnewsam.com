"use client";

import { Brush, Loader2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Container } from "@/components/Container";
import { Body } from "@/components/typography/Body";
import { H2 } from "@/components/typography/H2";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { BlogPageHeader } from "../_components/BlogPageHeader";
import { Canvas } from "./_components/Canvas";
import InfiniteScroll from "./_components/InfiniteScroll";
import { api } from "./_utils/MockApi";

type Person = {
  id: number;
  name: string;
};

export default function ABasicWhiteboardAndInfiniteScrollPage() {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPeople = useCallback(
    async (page: number) => {
      setLoading(true);
      const newPeople = await api.fetchPeople({ page });
      setPeople((prevPeople) => [...prevPeople, ...newPeople]);
      setLoading(false);
      setPage((prevPage) => prevPage + 1);
    },
    [setPeople],
  );

  useEffect(() => {
    fetchPeople(page);
  }, []);

  const handleLoadMore = async () => {
    await fetchPeople(page);
  };

  return (
    <Container>
      <section className="py-12 md:py-24">
        <BlogPageHeader slug="a-basic-whiteboard-and-infinite-scroll" />

        <H2>Whiteboard</H2>

        <Body>
          {`A basic whiteboard using HTML <canvas />. Click and drag to draw.`}
        </Body>
        <Card className="relative">
          <span className="absolute top-0 right-0 text-base uppercase tracking-widest font-medium p-4 text-neutral-500 dark:text-neutral-400 flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 rounded-tr-md rounded-bl-md border-t border-r border-neutral-200 dark:border-neutral-800">
            Canvas
            <Brush className="w-4 h-4" />
          </span>
          <Canvas />
        </Card>

        <H2 className="mt-20">Infinite Scroll</H2>
        <Body>
          Infinite scroll is a common UX pattern in web development. This is a
          very basic one built in React.
        </Body>
        <Card>
          <div className="bg-neutral-200 dark:bg-neutral-700 border-b p-4 flex gap-4 rounded-t-md items-center justify-between">
            {loading ? (
              <div className="inline-flex gap-2 items-center">
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading...
              </div>
            ) : (
              <span> {people.length} people</span>
            )}
            <Button
              onClick={() => {
                setPeople([]);
                setPage(1);
              }}
            >
              Reset
            </Button>
          </div>
          <InfiniteScroll<Person>
            handleLoadMore={handleLoadMore}
            items={people}
            renderItem={(person) => (
              <div className="border-y p-4" key={person.id}>
                {person.name}
              </div>
            )}
            loading={loading}
          />
        </Card>
      </section>
    </Container>
  );
}
