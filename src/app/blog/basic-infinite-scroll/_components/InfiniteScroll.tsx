import { useRef } from "react";

const debounce = (fn: () => void, delay: number) => {
  let timeout: NodeJS.Timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
};

export default function InfiniteScroll<Item>({
  handleLoadMore,
  items,
  renderItem,
  loading,
}: {
  handleLoadMore: () => Promise<void>;
  items: Item[];
  renderItem: (item: Item) => React.ReactNode;
  loading: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = debounce(() => {
    if (!ref.current) return;
    const isAtBottom =
      ref.current.clientHeight + ref.current.scrollTop >=
      ref.current.scrollHeight - 100;
    if (isAtBottom) handleLoadMore();
  }, 200);

  return (
    <div
      className="overflow-y-auto max-h-[600px] relative"
      ref={ref}
      onScroll={handleScroll}
    >
      {items.map(renderItem)}
      {loading && (
        <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 text-center py-4 bg-neutral-200 dark:bg-neutral-700">
          Loading...
        </div>
      )}
    </div>
  );
}
