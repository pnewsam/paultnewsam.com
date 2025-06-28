import { cn } from "@/lib/utils";

export default function SimilarityBadge({
  similarity,
}: {
  similarity: number;
}) {
  return (
    <span
      className={cn("text-xs px-[4px] py-[2px] rounded-md border font-mono", {
        "bg-green-300/90 text-green-800 border-green-200": similarity >= 0.5,
        "bg-yellow-300/90 text-yellow-800 border-yellow-200":
          similarity >= 0.25 && similarity < 0.5,
        "bg-red-300/90 text-red-800 border-red-200": similarity < 0.25,
      })}
    >
      Similarity: {similarity.toFixed(2)}
    </span>
  );
}
