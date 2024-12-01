"use client";

import { Card } from "@/components/Card";
import { Body } from "@/components/typography/Body";
import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import InfiniteScroll from "./_components/InfiniteScroll";
import Button from "@/components/Button";
import { api } from "./_utils/MockApi";
import { Loader2 } from "lucide-react";

type Person = {
  id: number;
  name: string;
};

export default function InfiniteScrollPage() {
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
    [setPeople]
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
        <PageHeader title="Infinite Scroll" tags={["Typescript"]} />
        <Body>
          Infinite scroll is a common UI pattern used to load content as the
          user scrolls. It&apos;s often used on blogs, news sites, and social
          media platforms.
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
