"use client";

import { Loader2 } from "lucide-react";
import Card from "@/components/Card";
import { useEffect, useState, useRef } from "react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

const debounce = (fn: () => void, delay: number) => {
  let timeout: NodeJS.Timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
};

export default function InfiniteScrollPage() {
  const [items, setItems] = useState(Array.from({ length: 40 }));
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleLoadMore = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!scrollRef.current) return;

    const isAtBottom =
      scrollRef.current?.clientHeight + scrollRef.current?.scrollTop >=
      scrollRef.current?.scrollHeight - 100;

    if (isAtBottom) {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 40 })]);
    }
    setLoading(false);
  };

  useEffect(() => {
    const scrollRefCurrent = scrollRef.current;
    if (!scrollRefCurrent) return;
    scrollRefCurrent.addEventListener("scroll", debounce(handleLoadMore, 200));
    return () =>
      scrollRefCurrent.removeEventListener(
        "scroll",
        debounce(handleLoadMore, 200)
      );
  }, []);

  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Infinite Scroll"
          tags={["Javascript"]}
          description="Infinite scroll is a common UI pattern used to load content as the user scrolls. It's often used on blogs, news sites, and social media platforms."
        />
        <Card
          ref={scrollRef}
          className="relative h-[600px] overflow-y-auto divide-y divide-neutral-200 dark:divide-neutral-700"
        >
          {items.map((_, index) => (
            <div
              key={index}
              className="h-12 bg-neutral-100 dark:bg-neutral-800 p-4"
            >
              {index}
            </div>
          ))}
          {loading && (
            <div className="sticky bottom-4 z-10 left-1/2 -translate-x-1/2 w-fit flex items-center justify-center h-12 bg-neutral-100/75 dark:bg-neutral-700/75 p-4 gap-4">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-neutral-500 dark:text-neutral-400">
                Loading more...
              </span>
            </div>
          )}
        </Card>
      </section>
    </Container>
  );
}
