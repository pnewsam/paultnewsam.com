"use client";

import Card from "@/components/Card";
import { useCallback, useEffect, useState } from "react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import InfiniteScroll from "../_components/InfiniteScroll";
import Button from "@/components/Button";
import { api } from "../_utils/MockApi";

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
      const newPeople = await api.fetchPeople({ page });
      setPeople((prevPeople) => [...prevPeople, ...newPeople]);
    },
    [setPeople]
  );

  useEffect(() => {
    fetchPeople(page);
  }, []);

  const handleLoadMore = async () => {
    setLoading(true);
    await fetchPeople(page);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Infinite Scroll"
          tags={["Javascript"]}
          description="Infinite scroll is a common UI pattern used to load content as the user scrolls. It's often used on blogs, news sites, and social media platforms."
        />
        <Card>
          <div className="bg-neutral-200 dark:bg-neutral-700 border-b p-4 flex gap-4 rounded-t-md items-center justify-between">
            {loading ? (
              <span>Loading...</span>
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
